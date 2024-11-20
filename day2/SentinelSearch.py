def SentinelSearch(array,k):
    for i in range(len(array)):
        if array[i] == k:
            return i
    return -1
arrayCase = [1,2,3,4,5]
k = 5

print("K is",SentinelSearch(arrayCase,k))

