function solution(A) {
  const N = A.length;
  console.log("N:", N);
  const set = new Set();

  // Bước 1: Chèn các số dương vào Set
  for (let i = 0; i < N; i++) {
    if (A[i] > 0) {
      set.add(A[i]);
    }
  }

  for (let i = 1; i <= N + 1; i++) {
    console.log(i);
    if (!set.has(i)) {
      return i;
    }
  }
}
console.log(solution([-1, -2, -3]));
