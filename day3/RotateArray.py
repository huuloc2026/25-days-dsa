def solution(A, K):
    # Implement your solution here
    K = K % len(A)
    lastElements = A[-K:] 
    restOfArray = A[:-K]
    print(lastElements)
    print(restOfArray)
    arr = lastElements + restOfArray

    return arr

print(solution([4,6,8,9,1],3))



# [4,6,8,9,1]

#[1,4,6,8,9]
