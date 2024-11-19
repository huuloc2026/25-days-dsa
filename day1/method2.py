def squaredArraySort(array):
    if len(array) >0:
        result = [0]*len(array)
        start = 0
        end = len(array)-1
        for i in range(len(array) - 1, -1, -1): 
            StartSquared = array[start] ** 2
            EndSquared = array[end] ** 2
            if StartSquared  > EndSquared:
                result[i] = StartSquared;
                start +=1
            else:
                result[i] = EndSquared
                end -= 1
        return result
    else:
        return []



array = [-9,-4,2,3,5]

print(squaredArraySort(array))