const Stack = require('./js/stack.js');
const Queue = require('./js/queue.js');
const List = require('./js/list.js');
const BinaryTree = require('./js/binarytree.js');

const st = new Stack();
st.push(4);
st.push(45);
console.log(st.print());

module.exports = {Stack, Queue, List, BinaryTree};