from typing import List
array = [2,5,1,3,4,7]
    #     i    3
    #  [2,3,1,5,4,7]
    #       i   n
n = 3
def shuffle(nums: List[int], n: int) -> List[int]:
        #[2,5,1,3,4,7] , n =3
        #   i   n
        #[2,3,1,5,4,7]
    ls = []
    for i in range(n):
        ls += [nums[i]]
        print(ls)
        ls += [nums[i+n]]
        print(ls)
    
shuffle(array,n)