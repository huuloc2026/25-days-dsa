def sort_squared_array(array):
    if len(array) > 0:
        new_arr = [0] * len(array)
        pointer_left = 0
        pointer_right = len(array) - 1

        for i in range(len(array) - 1, -1, -1):
            left_squared = array[pointer_left] ** 2
            right_squared = array[pointer_right] ** 2

            if left_squared > right_squared:
                new_arr[i] = left_squared
                pointer_left += 1
            else:
                new_arr[i] = right_squared
                pointer_right -= 1

        return new_arr
    else:
        return []

# Test cases
array_testcase2 = [-3, -2, 1, 5, 4]
b = [1, 4, 5, 7]
c = [-6, -1, 0, 5, 10]

print(sort_squared_array(b))  # [1, 16, 25, 49]
print(sort_squared_array(array_testcase2))  # [1, 4, 9, 16, 25]
print(sort_squared_array([]))  # []
