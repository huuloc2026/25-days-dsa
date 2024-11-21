def solution(A):
    seen = set()
    for num in A:
        if num in seen:
            seen.remove(num)
        else: 
            seen.add(num)
    return seen.pop()
    
    

print(solution([9,3,9,3,9,7,9]))