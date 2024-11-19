from typing import List

def insertion_sort(arr: List[int]) -> List[int]:
    # Nếu danh sách có ít hơn 2 phần tử, trả về chính nó
    if len(arr) <= 1:
        return arr
    
    # Sao chép danh sách đầu vào để không làm thay đổi danh sách gốc
    output = arr[:]
    
    # Thuật toán Insertion Sort
    for primary_index in range(len(output)):
        
        key = output[primary_index]
        secondary_index = primary_index
        
        # Di chuyển phần tử "key" đến vị trí đúng
        while secondary_index > 0 and key < output[secondary_index - 1]:
            output[secondary_index] = output[secondary_index - 1]
            secondary_index -= 1
        
        # Đặt phần tử "key" vào vị trí đúng
        output[secondary_index] = key
    
    return output

# Test
array = [3, 7, 4, 1, 5, 9, 2, 8]
print(insertion_sort(array))  # [1, 2, 3, 4, 5, 7, 8, 9]
