function QueueK(n, elements, k) {
  const queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(elements[i]);
  }
  for (let i = 0; i < k; i++) {
    let front = queue.shift();

    queue.push(front);
  }
  console.log(queue);
}

// Test mẫu
const n = 5; // Số phần tử
const elements = [1, 2, 3, 4, 5]; // Các phần tử
const k = 2; // Số lần xoay
QueueK(n, elements, k); // Output: 3 4 5 1 2
