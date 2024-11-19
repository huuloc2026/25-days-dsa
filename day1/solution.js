// improve the time-space complexity



function SortSquarredArray(array){
    if (array.length > 0) {
        const newArr = new Array(array.length).fill(0);
        let pointerLeft = 0;
        let pointerRight = array.length - 1;

        for (let i = array.length - 1; i >= 0; i--) {
            const leftSquared = array[pointerLeft] * array[pointerLeft];
            const rightSquared = array[pointerRight] * array[pointerRight];

            if (leftSquared > rightSquared) {
                newArr[i] = leftSquared;
                pointerLeft++;
            } else {
                newArr[i] = rightSquared;
                pointerRight--;
            }
        }
        return newArr;
    } else {
        return [];
    }
}



const array_testcase2 = [-3 , -2, 1, 5,4] 
const b = [1,4,5,7]
const c = [-6,-1,0,5,10]
console.log(SortSquarredArray(b))
console.log(SortSquarredArray(array_testcase2))
console.log(SortSquarredArray([]))