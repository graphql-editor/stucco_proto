const gulp = require('gulp');
const { rmdir, mkdir, readdirSync } = require('fs');
const glob = require('glob');
const { exec }  = require('child_process');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const rmdirPromise = (path) => new Promise((resolve, reject) => rmdir(path, { recursive: true}, (err) => err ? reject(err) : resolve()));
const mkdirPromise = (path) => new Promise((resolve, reject) => mkdir(path, (err) => err ? reject(err) : resolve()));
const execPromise = (path) => new Promise((resolve, reject) => exec(path, (err) => err ? reject(err) : resolve()));
const protoFiles = () => new Promise((resolve, reject) => glob('./proto/**/*.proto', (err, files) => err ? reject(err) : resolve(files)));
function protocTask(protoCmd, out) {
	return async () => {
		const template = function(s){
			return new Function("return `"+ s +"`;").call({ out });
		}

		const files = await protoFiles();
		await rmdirPromise(out);
		await mkdirPromise(out);
		for (const p of protoCmd) {
			await execPromise([
				'protoc',
				'-Iproto',
				...p.map(template),
				...files,
			].join(' '));
		}
	}
}

gulp.task(
	'gen-ts-node',
	protocTask(
		[
			[
				'--js_out=import_style=commonjs,binary:${this.out}',
				'--grpc_out=grpc_js:${this.out}',
				'--plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin',
			],
			[
				'--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts', 
				'--ts_out=grpc_js:${this.out}',
			],
		],
		"ts/node",
	),
);

gulp.task(
	'gen-ts-web',
	protocTask(
		[
			[
				"--js_out=import_style=commonjs:${this.out}",
				"--plugin=protoc-gen-grpc=./node_modules/.bin/",
				"--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${this.out}",
			],
		],
		"ts/web",
	),
);

gulp.task(
	'gen-go',
	protocTask(
		[
			[
				"--go_out=${this.out}",
				"--go_opt=paths=source_relative",
				"--go-grpc_out=${this.out}",
				"--go-grpc_opt=paths=source_relative",
			],
		],
		"go",
	),
);

gulp.task('gen-ts', gulp.parallel(['gen-ts-web', 'gen-ts-node']))

gulp.task('gen', gulp.parallel(['gen-go', 'gen-ts']))

gulp.task('ts-compile', () => {
  const result = tsProject.src().pipe(tsProject());

  return Promise.all([result.js.pipe(gulp.dest('dist/ts')), result.dts.pipe(gulp.dest('dist/ts'))]);
});

gulp.task('node', () => {
  return gulp.src(['ts/node/**/*.js', 'ts/node/**/*.d.ts']).pipe(gulp.dest('dist/ts/node'));
});

gulp.task('proto', () => {
  return gulp.src(['proto/**/*.proto']).pipe(gulp.dest('dist/proto'));
});

gulp.task('web', () => {
  return gulp.src(['ts/web/**/*.js', 'ts/web/**/*.d.ts']).pipe(gulp.dest('dist/ts/web'));
});

gulp.task('build-ts', gulp.parallel(['node', 'web', 'ts-compile', 'proto']));

gulp.task('build', gulp.parallel(['build-ts']))

gulp.task('default', gulp.series(['gen', 'build']));
