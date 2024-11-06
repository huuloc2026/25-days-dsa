// improve the time-space complexity



function SortSquarredArray(array){
    const newArr = new Array(array.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = array.length-1;

    for (let i=array.length;i>=0;i--){
        const leftSquared = array[pointerLeft]*array[pointerLeft];
        const rightSquared = array[pointerRight]*array[pointerRight];  
        if (leftSquared > rightSquared ){
            newArr[i] = leftSquared;
            pointerLeft--;
        } else {
            newArr[i] = rightSquared;
            pointerRight--;
        }
        
    }
    return newArr
}
// const array_testcase = [-3,1,2,7,20,23] 
// console.log(SortSquarredArray(array_testcase))
const array_testcase2 = [-3,-2,-7,0,7,8,12] 
console.log(SortSquarredArray(array_testcase2))
console.log(SortSquarredArray([]))