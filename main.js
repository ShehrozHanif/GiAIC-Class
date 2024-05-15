// // Function
// // When we use optional parameter
// let optionalParameter =(name:string, age:number, email:any, height?:any, weight?:number, location:string = "Karachi") =>{
//     console.log(`My name is ${name} \n my age is ${age} \n my email is ${email} \n and my location is ${location} `)
// } 
// optionalParameter("Shehroz",25,"Shehrozhanif54@gmail.com","",70 ,"islamabad")
// // So that is how we use optional Parameter but as we know typeScript is more friendly and do more simple so we use rest parameter instead of 
// // optional parameter . So now we use rest parameter method (...)
// let restPerameter = (name:String, Nationality:String,...rest:any[] )=>{
//     console.log(`My name is ${name} \n My Nationality is ${Nationality} \n and my age is ${rest[0]} \n and i love ${rest[1]} `)
// }
// restPerameter("Shehroz","Pakistan", 25 , "Imran Khan")
// // So as you can see how we use rest Parammeter
// // My Brain Question
// // i want to add one thing which is that   ( optional paramter sign ? and ternaray Operator look like same and if we add implement both 
// // at the same time so how can we differentiate : The answer is that in optional parameter we use this sign ? just after the parameter
// // like that Eg: name?:stirng  but in ternary case we apply the sign by adding gape between the variable and and sign like this name ?
// // I show you the example
// let isHungry = true;
// let eat = isHungry ? `briyani`:`Drinking water`
// console.log(`Let eat some ${eat}`)
// // So this is the difference between ternary Operator and optional parameter
// // Differnece between simple Funtion anf Arrow Function
// // Actually it's look like same only the difference is Syntax
// // I show you in example
// // Simple function
// function simpleFunction(num1:number, num2:number){
//     console.log(num1 + num2)
// }
// simpleFunction(5,5)
// let aFunction = (num:number)=>{
//     console.log(num *num)
// }
// aFunction(5)
// // it can be use for one liner code else it same as simple function
// // Now the difference between return and console.log
// // If you want to use calculated result outside the function than use return;
// let returnFnc =(num1:number)=>{
//     return num1*num1
// }
// let result = returnFnc(5)
// console.log(result)
// // console.log(returnFnc(5))
// // Miss assignment 
// /* write a JavaScript function that accepts a string as a parameter and counts the number of vovels within the string */
// // function vovels(str:string){
// //     const vovel = ["a","e","i","o","u"]
// //     for(let i=0; i<vovel.length; i++){
// //         if(vovel.includes(i)){
// //           i++;
// //         }
// //     }
// //     return i;
// // }
// // let check = vovels("lpOUI")
// // if(check){
// //     console.log("first vovel",check)
// // }else{
// //     console.log("No vovel found")
// // }
// function vovel2(str:string){
//     let vovel2 = ["a","e","i","o","u"]
//     let count = 0
//     for(const char of str.toLowerCase()){
//         if(vovel2.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// let input = vovel2("AEIOUPMNLou")
// if(input){
//     console.log("number of vovels", input)
// }else{
//     console.log("No vovel found")
// }
// /* What we did first make a function with the name of vovel2 Passing an Argument with the name of str and give the type string, than make a 
// variable with the name of vovel2 in which passing the value of vovels in an Array. Then make another variable with the name of count and it assign 0.
// Than use for loop to iterate if vovel2 include so increament in count++ othervise return count*/
// function oddnumber(num:number){
//   let  odd = [1,3,5,7,9,]
//   for(let char of num.toString()){
//     if(odd.includes(num)){
//         return char
//     }
//   }
//   return null
// }
// let odd = oddnumber(123456)
// console.log(odd)
// /* Write a javascript function that accepts a number as a parameter and check whether its prime number or not using recursion */
// function isPrimeNumber(num:number, divisor = 2){
//     if(num <=1){
//         return false;
//     }
//     if(divisor === num){
//         return true
//     }
//     // Recursive case
//     if(num % divisor === 0){
//         return false;
//     }
//     return isPrimeNumber(num,divisor +1);
//     // what we did is that increament by 1 , By default is 2 , if we dont do increament than it show only 2 is prime number and on rest function dont work
// }
// console.log(isPrimeNumber(5))
// /* Conslusion of this function :
// We all know that Prime number is divisible by itSelf or 1, So we Apply the condition according them, like the first condition,
// if(num<=1) it means if number is less than 1 or equal to 1 return false because every number is divisible by 1 and every number is not prime number.
// Then, if(divisor === number) return true , its obvious we tell you prime number are those which is divide by itself so if both are same it means
// true. Then we use recursive if(num % divisor === 0) return false, it means if number is divide with divisor and quiotient === 0 it means it's not
// a prime number. In the end we return function by increament in the divisor because to meet the conditions     */
// // Quesion no 3 : Write a function in JavaScript to find the first non-repeated character of a string.
// function firstNonRepeatedCharater(str:string){
//     const charcount = new Map<string,number>();
//     for(let char of str){
//         charcount.set(char,(charcount.get(char)||0)+1)
//     }
//     for(let char of str){
//         if(charcount.get(char)===1) {
//             return char;
//         }   
//     }
//     return null;
// }
// let ch = firstNonRepeatedCharacter("my name malo")
// console.log(ch)
// function firstNonRepeatedCharacter(str: string): string | null {
//     const charCount = new Map<string, number>();
//     // Count occurrences of each character
//     for (const char of str) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     // Find the first character with count 1
//     for (const char of str) {
//         if (charCount.get(char) === 1) {
//             return char;
//         }
//     }
//     return null; // Return null if no non-repeated character is found
// }
// // Example usage:
// let re = firstNonRepeatedCharacter("hello");
// console.log(re); // Output: "h"
// // Rest parameter
// function rest2(name:string, age:number, ...rest:any[]){
//     console.log(`my name is ${name} my age is ${age} i love ${rest[0]} my murshid is ${rest[1]}`)
// } 
// //  rest2("Shehroz",25, "Imrakhan", "ImranKhan" )
// //  2 May Class 
// // Object
// let mobile = {
//     istouchScreen: true,
//     ram:"8gb",
//     processor:"snapdragon"
// }
// // Now we have to access the property of an object
// console.log(mobile.istouchScreen)
// //  Now we have to restrict the object in different property
// let laptop:{processor:string, Ram:string, model:string} ={
//     processor:"I7",
//     Ram:"8GB",
//     model:"HP",
// }
// // Now we have to access the object
// console.log(laptop.processor)
// // Now we put optional properties like
// let bike:{name:string, engine:string, chachesNumber?:number , manual:boolean, TopSpeed:number}={
//     name:"Yamaha",
//     engine:"150CC",
//     manual:true,
//     TopSpeed:150
// }
// // Now again we access the property of an object
// console.log(`My bike name is ${bike.name}`) 
// type faculty = "student" | "teacher" | "admin"| "TA"
// type student = {
//     name:string,
//     id:number,
//     email:string,
//     class:string
//     Number?:number
//     faculty:faculty
// }
// let student1:student ={
//     name:"abbadabbajabba",
//     id:2564,
//     email:"abbadabbajabba.com",
//     class:"9c",
//     faculty: "TA"
// }
// console.log(`the student name is ${student1.name} and he is in class ${student1.class}`) 
// import { person } from "./pp.js"
//  let chk = new person("Shehroz")
//  console.log(chk)
//  chk.greet()
//  import myaddFunction from "./pp.js"
//  console.log((myaddFunction(2,5)))
//  // Here is the clear example of default named function we import the function with not accurate name but still work
//  //Now see named export function
//  import mymulfun from "./pp.js"
//  console.log(mymulfun(5,6))
//  // see after apply default method it's not work because it's name export
//  // Hence it is the clear difference between name and default export
//  // now apply the name export
//  import { mul,power } from "./pp.js"
//  console.log(mul(5,6))
//  console.log(power(5))
//  // Fetch Data from Api
//  // fetch promise return karta hai
//  // required api
//  let url = "https://jsonplaceholder.typicode.com/posts/1"
// //  let fetchData = fetch(url)
// //  .then((res)=>(res.json()))
// //  .then((data => console.log(data)))
// //  .catch(err => console.log(err))
// //  console.log(fetchData)
//  // async await
// //  let func = async()=>{
// //     let fetchData = await fetch(url)
// //     let res = await fetchData.json()
// //     console.log(res)
// //  }
// //  func()
//                           ////                Promise                           /////
// // promise Object Properties
// // A JavaScript promise object can be:
// // pending
// // Fulfilled (resolve)
// // Rejected
// // The promise Object supports two properties state and result
// // when a promise Object is "pending" (Working), the result is undefined.
// // when a promise object is "Fulfilled", the result is a value.
// // when a promise object is "rejected", the reult is an error Object
// // syntax
// // let promise = new Promise((resolve,rejected)=>{
// //     console.log("Promise pending")
// //     setTimeout(()=>{
// //         // console.log("Promise resolved")
// //         // resolve(["Shehroz Hanif"])
// //         console.log("promise rejected")
// //         rejected(new Error("Data fetch failed"))
// //     },2000);
// // })
// //  promise
// //  .then((res)=>(console.log(res)))
// //  .catch((err)=>(console.log("Apka Data fetch nhi ho saka")))
// //  let myPromise = new Promise((resolve, rejected)=>{
// //     console.log("Promise pending")
// //     setTimeout(()=>{
// //         let data = ["Ratan Lal"]
// //         if(data){
// //             console.log("Promise resolved")
// //             return resolve(data)
// //         }else{
// //             console.log("Promise rejected")
// //             return rejected(new Error("Data fetch failed"))
// //         }
// //     },2000)
// //  })
// //  myPromise
// //  .then((res)=>(console.log(res)))
// //  .catch((err)=>(console.log("Apka Data fetch na hosaka")))
//  // or 
//  let consditionalPromise = new Promise((resolve,rejected)=>{
//     console.log("Condition Pending")
//     setTimeout(() => {
//         let score = Math.random() > 0.5
//         if(score){
//             console.log("Condition resolve")
//          resolve ("Success")
//         }
//          else{
//             console.log("Condition rejected")
//          rejected (new Error("You are Fail"))
//         }
//     }, 2000);
//  })
//  consditionalPromise
//  .catch((res)=>console.log(res))
//  .then((error)=>console.log("sorry"))
// Creates a Promise that either resolves or rejects based on a condition
// const conditionalPromise = new Promise<string>((resolve, reject) => {
//     const success = Math.random() > 0.5; // Randomly choose success or failure
//     if (success) {
//       resolve("Success!");
//     } else {
//       reject(new Error("Failure"));
//     }
//   });
//   conditionalPromise
//     .then((result) => console.log(result)) // Handles a successful resolution
//     .catch((error) => console.log(error.message)); // Handles a rejection
//   // This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
// Today class 9 May
// Type keyword
const product = {
    titile: "Outfitter Shirt",
    description: "Premium quality cotton shirt",
    price: 1500,
    stockAvailavle: true,
    quantity: 400
};
console.log(product.titile);
const product2 = {
    titile: "Casual shirt",
    description: "Summer casual shirt",
    price: 1650,
    stockAvailavle: true,
    quantity: 250,
    warranty: "1 year",
    size: "Large"
};
const product3 = {
    titile: "Polo T-shirt",
    description: "Premium Cotton ",
    price: 1800,
    stockAvailavle: true,
    quantity: 500,
    warranty: "Life Time",
    size: "Medium"
};
let car1 = {
    name: "Corolla",
    modelYear: 2024,
    color: "Red Wine",
    HP: "2200 Cc",
    carType: "Automatic",
    isPowerSterring: true
};
// see how we implement
// console.log(car1)
let car2 = {
    name: "Civic",
    modelYear: 2024,
    color: "BLack",
    HP: "2500 Cc",
    carType: "Automatic",
    isPowerSterring: true
};
let person1 = {
    bio: {
        name: "Shehroz Hanif",
        age: 25,
        gender: "male",
        email: "Shehrozhanif54@gmail.com"
    },
    address: {
        street: 1,
        houseNo: "3",
        location: "Gulistn-e-juhar Perfume chock",
    },
    greet: function () {
        console.log("Hello Shehroz");
    }
};
// console.log(person1.greet())
// console.log(Object.keys(person1))
// console.log(Object.values(person1))
// console.log(Object.entries(person1))
function vovel(str) {
    let vovel = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vovel.includes(char))
            count++;
    }
    return count;
}
// // let input = vovel("Aeroplane is plane")
// if(input){
//     console.log("No of vovels",input)
// }else{
//     console.log("No vovel found")
// }
function isPrime(num, divisor = 2) {
    if (num <= 1) {
        return false;
    }
    if (num === divisor) {
        return true;
    }
    if (num % divisor === 0) {
        return false;
    }
    return isPrime(num, divisor + 1);
}
// console.log(isPrime(18))
// console.log(isPrime(7))
// console.log(isPrime(11))
// function isPrime(num:number, divisor:number =2){
//     if(num <= 1){
//         return false
//     }if(num === divisor){
//         return true
//     }if(num % divisor === 0){
//         return false
//     }return isPrime(num , divisor +1)
// }
// console.log(isPrime(5))
// function firstNonRepeatedCharater(str:string){
//     const charcount = new Map<string,number>();
//     for(let char of str.toLowerCase()){
//         charcount.set(char,(charcount.get(char)||0)+1)
//     }
//     for(let char of str.toLowerCase()){
//         if(charcount.get(char)===1) {
//             return char;
//         }   
//     }
//     return null;
// }
// let ch = firstNonRepeatedCharater("my NNamelppoe mYalo")
// console.log(ch)
// First we make a function, named firstNonRepeatedCharacter and pass one parameter, named str(short form of string) by the way you can give any name 
// so pass a parameter named str and its type string, than inside curly bracket i decalare a variable, called charCount in ehich we assign a new Map function
// The purpose of new Map <string,number>() is to store data in key value pair like store string exapmle "abcd" these are string so store the data
// in string and return a value in number. according to our example store "abcd" so it should retrun 4
//Now we start iteration as you can see in the code and we add a method which is .set method() .The purpose of .set method() is to count each char
// which we get through str (input)  then we use another method which is .get method() the purpose of .get method is in this case we check 
// the char we get if it's already exist than icreament by 1 for those char otherwise no increament as you can see in the code otherwoise 0 
// than again we star iteration because we still not ye find first non repeated character so we set a condition on the behalf of previous 
// information we get through first iteration . so we set a condition if (charcount.get(char) === 1) then return char means those char
// who are non-repeated in the iteration firstly or those char whose value only 1 return those char if exist otherwise f no non- repeated char available than retrun null
function firstNonRepeatedCharacter(str) {
    let charCount = new Map();
    for (let char of str.toLowerCase()) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (let char of str.toLowerCase()) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    return null;
}
let ch = firstNonRepeatedCharacter("helleooh");
// console.log(ch)
// function findRepeatedCharacters(str:string) {
//     const charCount = new Map();
//     const repeatedChars:any= [];
//     // Count occurrences of each character
//     for (const char of str) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//     // Find repeated characters
//     charCount.forEach((count, char) => {
//         if (count > 1) {
//             repeatedChars.push({char:char,count:count});
//         }
//     });
//     //check if any repeated character were found
//     if(repeatedChars.length === 0){
//         return null;
//     }
//     return repeatedChars;
// }
// // Example usage:
// const repeatedChars = findRepeatedCharacters("helloh");
// console.log(repeatedChars)
function findRepeatedCharacters(str) {
    let charcount = new Map();
    let repeatedChars = [];
    //Count the Occurance of each charater
    for (let char of str.toLowerCase()) {
        charcount.set(char, (charcount.get(char) || 0) + 1);
    }
    charcount.forEach((count, char) => {
        if (count > 1) {
            repeatedChars.push({ char: char, count: count });
        }
    });
    if (repeatedChars.length === 0) {
        return null;
    }
    return repeatedChars;
}
let check = findRepeatedCharacters("hel0h kll");
// console.log(check)
// function crateDictionary(str:String){
//     let charCount = {};
//     for(const char of str){
//         if(charCount[char]){
//             charCount[char]++
//         }else{
//             charCount[char]=1;
//         }
//     }
//     return charCount
// }
// function createDictionary(str:string) {
//     const charCount:any = {};
//     // Count occurrences of each character
//     for (const char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     return charCount;
// }
// // Example usage:
// const dictionary = createDictionary("hello");
// console.log(dictionary);
// let obj:any = {}
// let char:any = ["apple"]
// let cho = obj[char]
// console.log(cho)
function findSomething(paragraph, input) {
    return;
    paragraph.includes(input);
}
let paragraph = "i lovo myself";
let input = "love";
let ca = findSomething(paragraph, input);
console.log(ca);
export {};
