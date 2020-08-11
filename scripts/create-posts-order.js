const fs = require('fs');
const path = require('path');
const createPostsOrder = orderedPosts => {
  const content = `
  const setPostsStorage = () =>
  !sessionStorage.getItem('postsOrder') && sessionStorage.setItem(
    'postsOrder',
    JSON.stringify(${JSON.stringify(orderedPosts)})
  );
  const getPostsStorage = () => JSON.parse(sessionStorage.getItem('postsOrder'));
  export { setPostsStorage, getPostsStorage };
    
    `;

  fs.writeFileSync(path.join(__dirname, '../src/core/post-storage.ts'), content);
};

module.exports = createPostsOrder;
