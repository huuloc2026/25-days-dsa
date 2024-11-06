
const checkMonotonic = function (array){
    const first = array[0];
    const last = array[array.length-1];
// 1.......10
    if(first === last){
        for(let i=0;i<array.length-1;i++){
            if(array[i+1]!==array[i]) return false;
        }
    }
    else if (first<last){
        // non decreasing
        for(let i=0;i<array.length-1;i++){
            if(array[i+1]<array[i]) return false;
        }
    }
    else{
        // non increasing
        for(let i=0;i<array.length-1;i++){
            if(array[i+1]>array[i]) return false;
        } 
    }
    return true;
}
 

const case1 = [1,2,3,4,5]
const case2 = [5,4,3,2,1]
const case3 = [1]
const case4 = []
const case5 = [1,23,5,6]
console.log(checkMonotonic(case1))
console.log(checkMonotonic(case2))
console.log(checkMonotonic(case3))
console.log(checkMonotonic(case4))
console.log(checkMonotonic(case5))