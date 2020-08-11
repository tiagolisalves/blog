
  const setPostsStorage = () =>
  !sessionStorage.getItem('postsOrder') && sessionStorage.setItem(
    'postsOrder',
    JSON.stringify([{"title":" How to get content between html tags with non-greedy regex operators","subtitle":"\n<div class=\"sectionbody\">\n<div class=\"paragraph\">\n<p>A regex exercise: Suppose that you want get the content between html tags, basically the equivalent result returned by the <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML\">Element.innerHtml</a> function. How you could accomplish this using only Regex?</p>\n</div>\n</div>\n","path":"posts/capturing-text-fragments.adoc","date":"Tue Dec 31 2019"}])
  );
  const getPostsStorage = () => JSON.parse(sessionStorage.getItem('postsOrder'));
  export { setPostsStorage, getPostsStorage };
    
    