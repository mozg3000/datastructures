const Stack = require('./js/stack.js');
const Queue = require('./js/queue.js');
const List = require('./js/list.js');
const BinaryTree = require('./js/binarytree.js');

const st = new List();
st.push(1);
console.log(st);
st.pop();
console.log(st);
st.unshift(9);
console.log(st);
// st.insert(7, 9); [7]
// console.log(st.isEmpty());
// console.log(st);
// st.push(1); [17]
// console.log(st.isEmpty());
// console.log(st);
// st.push(45);
// st.push(45);
// st.unshift(2); [172]
// console.log(st.isEmpty());
// console.log(st);
// st.push(3); [3172]
// st.unshift(4); [31724]
// st.insert(5,0); [531724]
// st.insert(6,3); [5316724]
// st.insert(9, st.length()-1); [53167294]
// st.pop();
st.print()
// console.log();
// console.log(st.pop());

module.exports = {Stack, Queue, List, BinaryTree};