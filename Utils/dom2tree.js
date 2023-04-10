/**
 * 将节点转为对象，AST 的前奏
 * @param {*} dom
 * @returns
 */
const dom2Tree = (dom) => {
  const obj = {};
  obj.tag = dom.tagName;
  obj.children = [];
  dom.childNodes.forEach((child) => obj.children.push(dom2tree(child)));
  return obj;
};
