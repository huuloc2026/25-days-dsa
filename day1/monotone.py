def check_monotonic(array):
    first = array[0]
    last = array[-1]
    
    if first == last:
        for i in range(len(array) - 1):
            if array[i + 1] != array[i]:
                return False
    elif first < last:
        # non-decreasing
        for i in range(len(array) - 1):
            if array[i + 1] < array[i]:
                return False
    else:
        # non-increasing
        for i in range(len(array) - 1):
            if array[i + 1] > array[i]:
                return False
                
    return True
