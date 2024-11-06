def SortArray(array):
    if len(array) > 0:
        resultArr = [];
        for x in array:
            resultArr.append(x * x)
            resultArr.sort()
        return resultArr
    else: 
        return []

print(SortArray([-5,-1,2,3]))
print(SortArray([]))