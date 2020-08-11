const s = require('shelljs');
const path = require('path');
const message = s.exec('git log -1 --pretty=%B', { silent: true }).stdout.trim();
s.cd(path.join(__dirname, '../..'));
s.exec('git clone git@github.com:tiagolisalves/tiagolisalves.github.io.git');
s.cd(path.join(__dirname, '..'));
s.exec('npm run build');
s.mv(path.join(__dirname, '../dist/*'), path.join(__dirname, '../../tiagolisalves.github.io'));
s.cd(path.join(__dirname, '../../tiagolisalves.github.io'));
s.exec('git add -A');
s.exec(`git commit -m "${message}"`);
s.exec('git push origin master');
s.rm('-rf', path.join(__dirname, '../../tiagolisalves.github.io'));
