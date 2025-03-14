const fs = require('node:fs');
const path = require('node:path');
const txt = fs.readFileSync(path.resolve(__dirname, 'pochty.txt'), {
  encoding: 'utf8'
});

const txt2 = txt.split('\n').map(line => line.split(',').map(word => word.trim())).flat(2)

fs.writeFileSync(
  path.resolve(__dirname, 'pochty_step1.txt'),
  txt2.join('\n'),
  { encoding: 'utf8' }
);

const { uniq } = require('lodash');

const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

const lines = txt2
  // .split('\n')
  .map((line) => line.trim())
  .filter((i) => i)
  .map((line) =>
    line
      .split(',')
      .map((pocht) => pocht.trim())
      .filter((i) => i)
      .map(line => line.match(emailRegex))
  )
  .flat(2)
  .filter(i => i)
  .map(line => decodeURIComponent(line).trim())

const result = lines;

console.log(result);

fs.writeFileSync(
  path.resolve(__dirname, 'pochty_clear.txt'),
  result.join('\n'),
  { encoding: 'utf8' }
);
