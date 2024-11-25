function MessagePhone(phones: number[], k: number): number[] {
  let messagesToPhone: number[] = [];
  for (let i = 0; i < phones.length; i++) {
    if (!messagesToPhone.includes(phones[i])) {
      if (messagesToPhone.length < k) {
        messagesToPhone.push(phones[i]);
      } else {
        messagesToPhone.shift();
        messagesToPhone.push(phones[i]);
      }
    }
  }
  return messagesToPhone;
}

const phones = [1, 2, 1, 3, 4];
const k = 3;
console.log(MessagePhone(phones, k));
