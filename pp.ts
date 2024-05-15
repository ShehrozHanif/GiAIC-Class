// function vovel(str:string){
//     let vovels = ["a","e","i","o","u"];
//     let count = 0
//     for(const char of str.toLowerCase()){
//         if(vovels.includes(char)){
//           count++

//         }
//     }
//     return count;
// }

// let input = vovel("aeIOIOIASDASIO")
// if(input){
//     console.log("No of vovels is ",input)
// }else{
//     console.log("No vovel found ")
// }


function vovel(str:string){
    let vovels = ["a","e","i","o","u"]
    let count = 0
    for(const char of str.toLowerCase()){
        if(vovels.includes(char)){
            count++
        }
    }
    return count;
}

let input = vovel("aeFJSHIOu")
if(input){
    console.log("No of vovels is", input)
}else{
    console.log("No vovel found")
}

function isPrime(num:number, divisor:number =2){
    if(num <= 1){
        return false
    }if(num === divisor){
        return true
    }if(num % divisor === 0){ 
        return false
    }return isPrime(num , divisor +1)

}

console.log(isPrime(5))

function even(num:number){
    if(num % 2 === 0){
        return "Even Number"
    }else{
        return "Odd Number"
    }
}

console.log(even(5))

function firstNonRepeatedCharater(str:string){
    const charcount = new Map<string,number>();

    for(let char of str.toLowerCase()){
        charcount.set(char,(charcount.get(char)||0)+1)
    }

    for(let char of str.toLowerCase()){
        if(charcount.get(char)===1) {
            return char;
        }   
    }

    return null;

}

let ch = firstNonRepeatedCharater("my NNamelppoe mYalo")
console.log(ch)

function firstNonRepeatedCharacter(str:string){
    let charCount = new Map<string,number>();
    for(let char of str.toLowerCase()){
        charCount.set(char,(charCount.get(char)||0)+1)

    }

    for(let char of str.toLowerCase()){
       if(charCount.get(char) === 1){
         return char
        }
    }
    return null
}

console.log(firstNonRepeatedCharacter("plaAbBL"))


function createCar(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car: { [key: string]: any } = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

// Example usage:
let myCar = createCar("Honda", "Civic", ["color", "vine"], ["year", 2020], ["sunroof", true]);

console.log(myCar);

// function createCar(manufacturer:string, model:string, ...option:[string:any]):object{
//     let car:{[key:string]:any} = {manufacturer,model};
//     option.forEach(([key,value] )=> car[key] = value);
//     return car
// }

// let myCar = createCar("Corolla","Altis",["color","vine"])
// console.log(myCar)



export class person{
    name:string
    constructor(n:string){
        this.name = n
    }
    greet(){
        console.log(`My name is ${this.name}`)
    }
}

//  export class student{
//     name:string
//     age:number
//     city:string
//     RollNo:number

//     constructor(n:string, a:number, c:string, r:number){
//         this.name =n
//         this.age = a
//         this.city =c
//         this.RollNo =r
//     }
//     stdfunc(){
//         console.log(`Student name is ${this.name} age is ${this.age} and city is ${this.city} and roll no is ${this.RollNo}`)
//     }
// }

// let student1 = new student("Shehroz",25,"Karachi",256)
// console.log(student1)

// let stdArr:student[] = []
// stdArr.push(student1)
// console.log(stdArr)


export default function add(a:number, b:number):number{
    return a +  b
}

export function mul(a:number, b:number){
    return a*b

}

export function power(n:number){
    return n*n
}