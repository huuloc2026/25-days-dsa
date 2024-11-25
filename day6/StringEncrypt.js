function StackEncrypt(string) {
  let stack = [];
  let result = "";

  for (let char of string) {
    if (stack.length === 0 || stack[stack.length - 1] === char) {
      stack.push(char);
    } else {
      result += stack[stack.length - 1] + stack.length;
      stack = [char];
    }
  }

  if (stack.length > 0) {
    result += stack[stack.length - 1] + stack.length;
  }

  return result;
}

console.log(StackEncrypt("aaabbbccc"));
