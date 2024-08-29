import {readdirSync, readFileSync, writeFileSync} from 'fs';

const writingDir = './static/writing'

writeFileSync(`./src/lib/writing-data.ts`, "export const writingData = " + JSON.stringify(readdirSync(writingDir).filter(v => v.match(/\.md/)).map(f => {
	return {
		path: f.replace('.md', ''),
		title: 
	readFileSync(`${writingDir}/${f}`).toString().split(/\r?\n/).find(line => line.startsWith('# ')).replace('# ', '')
	}
})) + " as const;");

console.log('Manifest updated')