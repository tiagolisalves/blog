const appHtml = `
    <h1>How many fruits there are in each box?</h1>
<box>
There are two oranges 

and

three eggplants

</box>
<box>
There are four apples 

and six cinammon rolls  
</box>`;

const innerHTML = tagName => {
  const regex = new RegExp(`\\<${tagName}\\>([\\s\\S]+?)\\<\\/${tagName}>`, 'g');
  // const regex = /\<box\>([\s\S]+?)\<\/box>/g;

  let result = [],
    matches;
  while ((matches = regex.exec(appHtml))) {
    result.push(matches[1]);
  }
  return result;
};

console.log(
  innerHTML('box')
); /*
    Result: 
    [There are two oranges 

    and

    three eggplants

    ,
    
    There are four apples 

    and six cinammon rolls]
*/
