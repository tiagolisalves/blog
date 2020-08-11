const fs = require('fs');

module.exports = files => {
  return files.sort(sortByDate);
};

const sortByDate = (file1, file2) => {
  const getDate = content =>
    content
      .match(/\:revdate\:.+\n/g)[0]
      .replace(/(\:revdate\:|\n)/g, '')
      .trim();
  const date1 = new Date(getDate(file1.content));
  const date2 = new Date(getDate(file2.content));
  return date1 - date2;
};
