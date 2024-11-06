def SortArray(array):
    if len(array) > 0:
        resultArr = [];
        for x in array:
            resultArr.append(x * x)
        resultArr.sort()
        return resultArr
    else: 
        return []

print(SortArray([-3,1,2,7]))
print(SortArray([]))