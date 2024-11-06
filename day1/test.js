function SortArray(array){
    if (array.length>0){
        step1 = array.map((item)=>item*item)
        return step1.sort((a,b)=>a-b);
    } else {
        return [];
    }
}
function sortedSquarredArray(array){

    const newArray = new Array(array.length).fill(0);
   
    let pointerLeft =0;

    let pointerRight = array.length-1;

    for(let i=array.length-1;i>=0;i--){

        const leftSquared = Math.pow(array[pointerLeft],2);
        const rightSquared = Math.pow(array[pointerRight],2);
        if(leftSquared>rightSquared){
            newArray[i]=leftSquared;
            pointerLeft++;
        } else{
            newArray[i]=rightSquared;
            pointerRight--;
        }
    }
    return newArray;
}
const array_test = [-7,-2,3,5];
console.log(SortArray(["",""]))
// console.log(sortedSquarredArray())