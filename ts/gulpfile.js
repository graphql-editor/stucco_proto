const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('ts-compile', () => {
  const result = tsProject.src().pipe(tsProject());

  return Promise.all([result.js.pipe(gulp.dest('lib')), result.dts.pipe(gulp.dest('lib'))]);
});

gulp.task('node', () => {
  return gulp.src(['src/node/**/*.js', 'src/node/**/*.d.ts']).pipe(gulp.dest('lib/node'));
});

gulp.task('web', () => {
  return gulp.src(['src/web/**/*.js', 'src/web/**/*.d.ts']).pipe(gulp.dest('lib/web'));
});

gulp.task('default', gulp.parallel(['node', 'web', 'ts-compile']));
