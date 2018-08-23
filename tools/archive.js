require('shelljs/global');

const path = require('path');
const fs = require('fs');
const archiver = require('archiver');
const archiveFilePath = path.join(__dirname, '../acgame_frontend.zip');
const archive = archiver('zip');
const ora = require('ora');

rm('-rf', archiveFilePath);

const spinner = ora('archiving...');
spinner.start();

const output = fs.createWriteStream(archiveFilePath);

output.on('close', () => {
  spinner.stop();
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', err => {
  throw err;
});

archive.pipe(output);
archive.directory('dist', false, { date: new Date() });

archive.finalize();
