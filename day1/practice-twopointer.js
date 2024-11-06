/**
 * 
Dưới đây là một đề bài về cấu trúc dữ liệu và thuật toán sử dụng kỹ thuật Two Pointers:

Đề bài: Tìm các cặp số có tổng bằng một giá trị cho trước
Cho một mảng số nguyên không giảm arr với n phần tử và một giá trị tổng target. Hãy sử dụng thuật toán Two Pointers để tìm tất cả các cặp số có tổng bằng target trong mảng.

Yêu cầu:
Đầu vào: Một mảng số nguyên không giảm arr[] với n phần tử (1 ≤ n ≤ 10^6) và một giá trị nguyên target (-10^9 ≤ target ≤ 10^9).
Đầu ra: Liệt kê tất cả các cặp số (arr[i], arr[j]) trong mảng sao cho arr[i] + arr[j] = target và i < j. Các cặp cần được in ra theo thứ tự tăng dần.
Điều kiện:
Dùng thuật toán Two Pointers để giải quyết bài toán, sao cho độ phức tạp của thuật toán là O(n).
Nếu không có cặp số nào thỏa mãn điều kiện, in ra thông báo "No pairs found".

 */

function twoSum(array,target){
    let pointerLeft = 0;
    let pointerRight = array.length-1;
    let resultArray = []
   
    while (pointerLeft<pointerRight){
        let sum = array[pointerLeft]+array[pointerRight]
        if(sum === target){
            resultArray.push([array[pointerLeft],array[pointerRight]])
            pointerLeft++
            pointerRight--
        } else if (sum<target) {
            pointerLeft++
        } else {
            pointerRight--
        }
    }
    if (resultArray.length === 0) {
        console.log("No pairs found");
    } else {
        return resultArray;
    }

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const target = 10
console.log(twoSum(arr,target))