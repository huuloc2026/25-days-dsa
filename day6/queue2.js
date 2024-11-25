function removeFirstEleemnt(n, elements) {
  let stack = [];
  let queue = [...elements];
  while (queue.length > 0) {
    stack.push(queue.shift());
  }
  while (stack.length > 0) {
    queue.push(stack.pop());
  }
  return queue;
}
const n = 5;
const elements = [1, 2, 3, 4, 5];
console.log(removeFirstEleemnt(n, elements));
