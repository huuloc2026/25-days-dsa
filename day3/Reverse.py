def Rotate(array,k):
    reverse(array,0,len(array)-1)
    arrayK = reverse(array,0,k-1)
    arrayEnd = reverse(array,k,len(array)-1)

    return array

def reverse(arr,start,end):
    temp = 0
    while(start<end):
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start+=1
        end-=1
    return arr

arrayTest = [1,2,3,4,5,6,7]
print(Rotate(arrayTest,3))