// Định nghĩa cấu trúc của một Node
class NodeLinkList {
  data: number;
  next: NodeLinkList | null;

  constructor(data: number) {
    this.data = data;
    this.next = null; // Mặc định trỏ tới null
  }
}

class LinkedList {
  head: NodeLinkList | null;

  constructor() {
    this.head = null; // Ban đầu danh sách rỗng
  }

  // Thêm phần tử vào danh sách
  add(data: number): void {
    const newNode = new NodeLinkList(data);
    if (this.head === null) {
      this.head = newNode; // Nếu danh sách rỗng, phần tử mới sẽ là phần tử đầu tiên
    } else {
      let current = this.head;
      // Duyệt đến cuối danh sách và gắn phần tử mới vào cuối
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // In danh sách liên kết
  print(): void {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Sử dụng LinkedList
const list = new LinkedList();

// Thêm các phần tử vào danh sách
list.add(10);
list.add(20);
list.add(30);

// In danh sách
list.print(); // Output: 10 20 30
