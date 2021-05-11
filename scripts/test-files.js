import { readdir, stat } from 'fs';
const languageDirs = ['go', 'ts/src/web', 'ts/src/node'];

const promiseStat = (name) => new Promise((resolve, reject) =>
	stat(name, (err, stat) => err ? reject(err) : resolve(stat)));
const promiseReaddir = (name) => new Promise((resolve, reject) =>
	readdir(name, (err, stat) => err ? reject(err) : resolve(stat)));


async function checkFilesInDir(timestamp, name) {
	const files = await promiseReaddir(name);
	return Promise.all(files.map((f) => checkFile(timestamp, `${name}/${f}`)));
}

async function checkFile(timestamp, name) {
	const stat = await promiseStat(name);
	if (stat.isDirectory()) {
		return checkFilesInDir(timestamp, name);
	}
	if (stat.mtimeMs < timestamp) {
		throw new Error(name+' is stale file, run npm run gen');
	}
}

async function checkDir(timestamp, name) {
	const files = await promiseReaddir(name);
	if (files.length === 0) {
		throw new Error("missing language files for language "+name);
	}
	return Promise.all(files.map((f) => checkFile(timestamp, `${name}/${f}`)));
}

async function timestampFile(name) {
	const stat = await promiseStat(name);
	if (stat.isDirectory()) {
		return timestampDir(name);
	}
	return stat.mtimeMs;
}

const newest = (v) => v.reduce((pv, cv) => pv < cv ? cv : pv, 0);

async function timestampDir(name) {
	const files = await promiseReaddir(name);
	if (files.length === 0) {
		return 0;
	}
	return Promise.all(files.map((f) => timestampFile(`${name}/${f}`))).then(newest);
}

if (process.env.GITHUB_WORKSPACE) {
	process.chdir(process.env.GITHUB_WORKSPACE);
}
timestampDir("proto")
	.then(timestamp => Promise.all(languageDirs.map((lang) => checkDir(timestamp, lang))))
	.catch((e) => {
		console.trace(e);
		process.exit(1);
	})
