def monotonic_array(array):
    if len(array) <= 1:
        return True
    increasing = decreasing = True
    for i in range(1, len(array)):
        if array[i] > array[i - 1]:
            decreasing = False
        elif array[i] < array[i - 1]:
            increasing = False            
    return increasing or decreasing
array1 = [1,2,3,4,3,5]
array2 = [5, 4, 3, 2, 1]
array3 = []
array4 = [1]

print(monotonic_array(array1)) 
print(monotonic_array(array2))  
print(monotonic_array(array3))
print(monotonic_array(array4))
