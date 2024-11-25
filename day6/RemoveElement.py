def deleteElement(a,k):
    n = int(input())

    a = [i for i in range(1, n + 1)]
    if k in a:
        a.remove(a[k])
    print(a)
        

print(deleteElement([1,2,3,4],1))