const asciidoctor = require('asciidoctor')(); // (1)
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sourceContentPath = path.join(__dirname, '../src/content/');
const distContentPath = path.join(__dirname, '../assets/content/');
const orderPostsByDate = require('./order-posts-by-date');
const createPostsOrder = require('./create-posts-order');
const formatCodeSnippets = require('./format-code-snippets');
glob('**/*.adoc', { cwd: sourceContentPath }, (er, filePaths) => {
  const fileAbsPath = filePath => path.join(sourceContentPath, filePath);
  const distFileAbsPath = filePath => path.join(distContentPath, filePath);
  const fileContent = fileAbsPath => {
    let content = fs.readFileSync(fileAbsPath, 'UTF8');

    return formatCodeSnippets(content);
  };

  const getFileContentByPath = filePath => fileContent(fileAbsPath(filePath));

  const files = filePaths.map(filePath => ({
    content: getFileContentByPath(filePath),
    path: filePath,
    html: (() => {
      const html = asciidoctor.convert(getFileContentByPath(filePath), {
        attributes: { showtitle: true },
        doctype: 'article'
      });
      fs.writeFileSync(distFileAbsPath(filePath).replace('.adoc', '.html'), html);
      return html;
    })()
  }));
  const { JSDOM } = require('jsdom');
  const orderedFiles = orderPostsByDate(files).map(file => ({
    title: file.content.match(/(\:title\:)(.+)/)[2],
    subtitle: new JSDOM(file.html).window.document.querySelector('#preamble').innerHTML,
    path: file.path,
    date: new Date(parseInt(file.content.match(/(\:revdate\:)(.+)/)[2].trim())).toDateString()
  }));
  createPostsOrder(orderedFiles);
});
