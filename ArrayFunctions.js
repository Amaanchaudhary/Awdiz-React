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


// Map()      // 'map' maps each element from start to end and perform such task on each element
//                and returns the new array filled with results
/*
var arr = [1 , 2 , 3]    

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

/*
//forEach()
var arr = [1 , 3 , 5 , 6]

// arr.forEach((e) => console.log(e))  //syntax 1

arr.forEach(e => {
    console.log(e * 2)   //syntax 2
})
*/

/*
//filter() - It will filter the array based on the given condition and when true it will 
//           add that element into the new array, else ignore 

const arr = ['amaan' ,'chaudhary', 'faez' , 'MAAZ' , 'rushaan', 'adnan', 'jabir'];

const result = arr.filter((arr) => arr == arr.toUpperCase() )
const result2 = arr.filter((arr) => arr.length > 6 )

console.log(result)
console.log(result2)
*/

/*
//find()   it will returns the first element that satisfies the condition

var arr = [1,2,4,5,6,7,8,8,43,16,56]

var result = arr.find((arr) =>  arr > 10 )

console.log(result);
*/

/*
//findIndex() It will returns the first element's index that satisfies the condition

var arr = [12,11,3,45,56,76,]

var result = arr.findIndex((arr) => arr < 10)

console.log(result);
*/

/*
//findLast() //It iterates the array in reverse order and returns the element that satisfies the condition

var arr = [12,11,3,45,56,4,76,]

var result = arr.findLast((arr) => arr < 10)

console.log(result);
*/

/*
//findLastIndex() //It iterates the array in reverse order and returns the index of first element that satisfies the condition
 
var arr = [12,11,3,45,56,4,76,]

var result = arr.findLastIndex((arr) => arr < 10)

console.log(result);
*/

/*
//includes() it will check whether the given value is present in an array or not and returns 
//true or false accordingly

var arr = [12,11,3,'Amaan',45,56,4,76,]

var result = arr.includes('Amaan')

console.log(result);
*/

/*
//indexOf() it will return the index of given element and returns -1 if its not present

var arr = [12,11,3,'Amaan',45,56,4,76,]

var result = arr.indexOf('Amaan')
var result2 = arr.indexOf('Amaan', 2)    //it will search from index 2

console.log(result2);
*/

//join() it will concat all the elements in an arrays and return a new string separates by commas
/*
var arr = ['i am','Amaan',45,]

 
// var result = arr.join()          //between commas
// var result = arr.join('-')    //between -
var result = arr.join(' ')     //between space

console.log(result);
*/

/*
//Slice();
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
var arr = ['pizza' , 'burger' , 'salad'];
// Optional.
// Start position. Default is 0. & same for end
const food = arr.slice(0,2);    //(start , end); 

console.log(food);
*/

/*
//splice() method can del or add items in an array and modifies the original array.
// An array containing the removed items (if any).

var arr = ["Banana", "Orange", "Apple"];

arr.splice(1,0,"mango" , "kiwi") //from index 1, add 2 element, and 0 is for no deletion 

console.log(arr);  

arr.splice(2,1);  //from index 2, remove 1 items:
//index is required , other 2 val is optional
console.log(arr);  
*/

// var nums = [1 , 1 , 2]
// var a = nums.shift();
// nums.push(a);
// console.log(nums);

// Swap two number without third varible.

// let a = 6
// let b = 5

// a = a + b;  // a = 11
// b = a - b   // 11 - 5 =  b = 6
// a = a - b   // 11 - 6 =  a = 5

// console.log(a, b)

// Q1. console.log("a"+"b" + +  "c" + "d")  // ans - abNaNd

//Q2
// console.log(a) 
// var a = "abc"        //ans - in var - undefined , let & const - error

// Q3 first call the function then define will it give an error on run

// hii()                      //No error , but if the function is arrow then error
// function hii(){     
//     console.log("hello")
// }

// Q4     pehle andar wala log sahi se print hojayega then bahar wala undefined
// console.log(console.log("abc"))   // ans - abc then undefined

// Q5
// console.log(NaN == NaN)   //false , typeof = number

// Q6 find count of only upperCase alphabets and lowerCase alphabets in a string 
	// let str = "Hello World @$ "


// console.log(arr)

// var arr = 10; //In hoisting only declaration hoisted to the top , not assignment
// // const arr = 10  const and let cannot get hoisted and give error cannot access arr bfore initialization
// // let arr = 10

// console.log(arr)

