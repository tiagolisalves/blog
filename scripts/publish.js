const s = require('shelljs');

const message = s.exec('git log -1 --pretty=%B', { silent: true }).stdout.trim();
s.cd('..');
s.exec('git clone git@github.com:tiagolisalves/tiagolisalves.github.io.git');
s.cd(__dirname);
s.exec('npm run build');
s.mv('dist/*', '../tiagolisalves.github.io');
s.cd('../tiagolisalves.github.io');
s.exec('git add -A');
s.exec(`git commit -m "${message}"`);
s.exec('git push origin master');
s.cd(__dirname);
s.rm('-rf', '../tiagolisalves.github.io');
