//pop()    It removes the element from the array from last
/*
var arr1 = [1 , 3, 45, 5];
var val = arr1.pop();   //pop returns the removed element.
console.log(val, arr1)

/*
// unshift()   It adds the new element in the array at beginning

var arr = ['Amaan' ]
// console.log(arr , arr.length);

var newarr = arr.unshift('Chaudhary'); //unshift returns the new array length
// console.log(arr, newarr);

//shift()   It removes the element from the array from beginning

var arr2 = arr.shift();  //shift returns the removed element
console.log('array -> ' ,arr , ' Removed element ->', arr2)
*/


// Map()
/*
var arr = [1 , 2 , 3]   // 'map' maps each element from start to end and perform such task on each element

const res = arr.map((i) => i *10  )  
console.log(res)
*/

// reduce()
/*
var arr = [1 , 2 , 3 , 4]

var initVal = 0
const result = arr.reduce((val1 ,  val2) => val1 + val2 , initVal)

console.log(result)
*/

//forEach()
var arr = [1 , 3 , 5 , 6]

// arr.forEach((e) => console.log(e))  //syntax 1

arr.forEach(e => {
    console.log(e * 2)   //syntax 2
})
