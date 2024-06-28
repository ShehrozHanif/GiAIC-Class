//  class user {
//   name:string

//   constructor(name:string){
//     this.name =name

//   }

//   greetingMessage():void{
//     console.log(`My name is ${this.name} `)
//   }
// }

// let student1 = new user("Shehroz")
// console.log(student1.greetingMessage())

// class student {
//     Name:string
//     RollNumber:number
//     class:string

//     constructor(name:string, rollNumber:number, clas:string){
//         this.Name = name
//         this.RollNumber = rollNumber
//         this.class = clas

//     }

//     studentBio(){
//         return `My name is ${this.Name} \n My Roll No is ${this.RollNumber} \n I study in class ${this.class} `

//     }
// }

// let student1 = new student("Shehroz",356,"9th")
// console.log(student1)
// // console.log(student1.studentBio())


// class uniStudent extends student {
//     IdCard:boolean

//     constructor(name:string,rollNumber:number, clas:string, Idcard:boolean ){
        
//         super(name, rollNumber, clas)
//         this.IdCard =Idcard
//     }

//     unisrd(){
//          `${this.studentBio()} \n I have a Id Card${this.IdCard}`
//     }
// }

// let uniStudent1 = new uniStudent("shehroz",123,"PHD",true)
// console.log(uniStudent1)
// console.log(uniStudent1.unisrd())


class student {
    Name: string;
    RollNumber: number;
    class: string;

    constructor(name: string, rollNumber: number, clas: string) {
        this.Name = name;
        this.RollNumber = rollNumber;
        this.class = clas;
    }

    studentBio() {
        return `My name is ${this.Name} \n My Roll No is ${this.RollNumber} \n I study in class ${this.class}`;
    }
}

let student1 = new student("Shehroz", 356, "9th");
console.log(student1);
// console.log(student1.studentBio());

class uniStudent extends student {
    IdCard: boolean;

    constructor(name: string, rollNumber: number, clas: string, IdCard: boolean) {
        super(name, rollNumber, clas);
        this.IdCard = IdCard;
    }

    unisrd() {
        return `${this.studentBio()} \n I have an ID Card: ${this.IdCard}`;
    }
}

let uniStudent1 = new uniStudent("shehroz", 123, "PHD", true);
// console.log(uniStudent1);
// console.log(uniStudent1.unisrd()); 


class Animal {
   private name:string

   constructor(name:string){
    this.name = name
   }

   public move(distance:number){
    console.log(`${this.name} moved ${distance} meters ${this.secret()}`)
   }

   private secret(){
    console.log("This is a secret method")
   }
}

let cat = new Animal("Lion")
console.log(cat)
console.log(cat.move(5))
// console.log(cat.secret())   Through error

// In my own wording privite method can't be use outside of the class as you can see but we can use if we add in public class




// protected

class Animal2 {
    Name:string

    constructor(name:string){
        this.Name = name
    }

    protected move(distance:number){
        console.log(`${this.Name} moves ${distance} meters`)
    }

}

class bird extends Animal2 {
     constructor(name:string){
        super(name)
     }

     public fly(distance:number){
        this.move(distance)
        console.log(this.Name + " is flying")
     }
}

// const sparrow = new bird("Parrot")
// console.log(sparrow)
// console.log(sparrow.fly(5))


// let lion = new Animal2("Lion2")
// console.log(lion)

// console.log(lion.Name)


class memal extends Animal {
    constructor(name:string){
        super(name)
    }

    fun(){
        console.log(`we are checking can we access private class method ${this.move(5)}`)
    }

}

// so this is the difference between privite and protected class that we cant access privite class in their extend class although we can access in
// protected class. Common thing in between them is we cant access outside of the class



// class accessor
class ExAcessor {
    private price:number
    constructor(private Id:number, private name:string){
        this.price = 0
    }


    // Public for getter Price
    getpriceUpdate(){
        return this.price
    }
   

    //public for setter price

    setprice(newPrice:number){
        if(newPrice >=0){
            this.price = newPrice
        }else{
            console.log("price cannot be negative")
        }
    }

    getProductInfo(){
        return `ID: ${this.Id}, Name: ${this.name}, Price:${this.price} `
    }
}


let acceesor = new ExAcessor(1, "Widget")
// console.log(acceesor)

// // console.log(acceesor.getProductInfo())
// // acceesor.setprice(2)
// // console.log(acceesor.getProductInfo())
// acceesor.setprice(-2)
// console.log(acceesor.getProductInfo())



// Static members in typeScript

class p1 {
    private static idNumber:number = 1

    constructor(private id:number, private name:string){}

    static id(){
        return p1.idNumber++;
    }

    fun(){
        return `ID: ${this.id}, Name:${this.name}`
    }
}

// let auto = new p1(p1.id(),"widget")
// console.log(auto)

// important question static id function ko gap dekhe likhna parh raha hai lekin setptice bina gap k bhi kaam kar raha hai aesa q?




//===========================================class implement interface

interface iproduct {
    name:string,
    id:number
    getinfo():string
}

class product3 implements iproduct{
    private static nid:number=1

    constructor(public id:number, public name:string){}

    static number(){
        return product3.nid++
    }

    getinfo(): string {
      return `${this.id} ${this.name} `    
    }
}

// let response = new product3(product3.number(),"widget")
// console.log(response.getinfo())




// ---------------------------------abstract classes member

// abstract class abstractItem {
//     private static id:number = 1
//     constructor(public id:number, protected name:string){}
//     static fun(){
//         return abstractItem.id++
//     }
//     abstract getinfo():string
// }

// class cge extends abstractItem {
//     constructor(id:number, name:string){
//         super(id, name)
//     }
//     getinfo(): string {
//         return `ID: ${this.id}, Name: ${this.name}`
//     }
// }

// let res = new cge(abstractItem.fun(), "widget")
// console.log(res)








// abstract class abstractItem {
//     private static idCounter: number = 1;
//     public id: number;
//     protected name: string;

//     constructor(name: string) {
//         this.id = abstractItem.fun();
//         this.name = name;
//     }

//     static fun() {
//         return this.idCounter++;
//     }

//     abstract getinfo(): string;
// }

// class cge extends abstractItem {
//     constructor(name: string) {
//         super(name);
//     }

//     getinfo(): string {
//         return `ID: ${this.id}, Name: ${this.name}`;
//     }
// }

// // Usage
// let item1 = new cge("Item A");
// let item2 = new cge("Item B");

// console.log(item1.getinfo());  // Output: ID: 1, Name: Item A
// console.log(item2.getinfo());  // Output: ID: 2, Name: Item B






//------------polymorphism & Method Override


// abstract class abstractItem {
//     private static id:number = 1
//     protected constructor(public id:number, protected name:string){}
//     static fun(){
//         return abstractItem.id++
//     }
//     abstract getinfo():string
// }

// class cge extends abstractItem {
//     constructor(id:number, name:string){
//         super(id, name)
//     }
//     getinfo(): string {
//         return `ID: ${this.id}, Name: ${this.name}`
//     }
// }

// class sd extends abstractItem{
//     constructor(id:number, name:string){
//         super(id,name)
//     }
//     getinfo(): string {
//         return`ID: ${this.id}, Name: ${this.name}`

//     }
// }

// let c = new abstractItem(abstractItem.fun(), "widget")
// let d = new abstractItem(abstractItem.fun(), "widget")




//-------------Apna College-------------------
class User{
  Name:string
  private Eamail:string
  private Salary:number
  private secret:number =1234

  constructor(name:string, email:string,salary:number){
    this.Name = name
    this.Eamail = email
    this.Salary = salary    
  }

  niewData(){
      return "View Website Data"
  }

  accessor(){
    return `The ${this.Eamail} you provided is in correct`
}
  salarycheck(secret:number){
    
    if(secret == 1234){
        return `${this.Salary}`
    }else{
        `Kindly enter the proper code to see the salary`
    }
  }

}


let students = new User("Shehroz Hanif", "abc@gmail.com",5000)

// console.log(students)
// console.log(students.niewData())
// console.log(students.Name)



// Another Question
// Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edot website data

class Admin extends User {
    Id:number
    constructor(name:string, Eamail:string, id:number, Salary:number) {
        super(name,Eamail,Salary)
         this.Id = id
    }
    editData(){
        return"You are allow to edit website data"
    }

  
}

let admin = new Admin("shehroz","abc@gmail.com",12345,10000)
console.log(admin)
// console.log(admin.editData())




// ACcess Modifiers
// Public , Privite, Protected
// Let see a example of each 

// Public 
// In public you can access any properties and methods outside of the class

// console.log(admin.Name)
// console.log(admin.Id)
// console.log(admin.editData())

// see you can access every thing and now if we do privite any of the property so you can't access outside of the class like,
//We do Email privite now we cant access


// console.log(students.Eamail)   //When you uncomment the console and hower on the error then see what is the error tell us


//Now another thing i have to discuss in Privite method is that if we use Privite properties in method so it can be accessible outside the class like,
// console.log(students.accessor())   //we add email property in accessor method and now we access it, Although it is privite
console.log(students.salarycheck(1234))   //we add email property in accessor method and now we access it, Although it is privite
console.log(students)
// Now we set a condition so then we can't access Privite property in mwthod also without our permission


// The only difference between privite and protectes is you can use your properties in your extend class


// Now one more thing if we want to make the properties optional in class or null

class Try{
    Name:string
    Email?:string
   constructor(name:string){
    this.Name = name
   }

}

let check = new Try("shehroz")
// console.log(check)   // see the object Eamil property is undefine so what we do to remove the undefine thing

class Try2{
    Name:string
    Email?:string
   constructor(name:string,email?:string){
    this.Name = name
    if(email !== undefined){
        this.Email = email
    }
   }

}

let res = new Try2("shehroz")
// console.log(res)  // same reult with this so we are loooking for new method



class Try3{
    Name:string
    Email!:string
   constructor(name:string){
    this.Name = name
   }

}
// let res2 = new Try3("Shehroz")
// console.log(res2.Email)




// Static Member , basically you cant access with instance so you can call it with class i show you

class Genrate{
    private static nextid:number =1 
     
    constructor(private id:number,private name:string){
      
    }

    static getUnique(){
        return Genrate.nextid++
    }
    getpro(){
       return `ID:${this.id} Name: ${this.name}`   
    }
}

// let c1 = new Genrate(Genrate.getUnique(),"Widget")
// console.log(c1.getpro())

// let c2 = new Genrate(Genrate.getUnique(),"Widget")
// console.log(c2.getpro())



/// -------------------------- GETTER AND SETTER 


class T{
    private price:number = 0
    constructor(private id:number,private name:string,){

    }
    get fun(){
        return this.price = 0
    }

    set fun(newPrice:number){
        if(newPrice >=0){
            this.price =newPrice
        }else{
            console.log("Price cant be negative")
        }
        
    }

    apply(){
        return `ID: ${this.id} Name:${this.name} Price: ${this.price}`
    }
}


// let a = new T(1, "chicken",)
// console.log(a)
// // this is initialize value of getter

// //now applying setter


// a.fun =5
// console.log(a)





// -------------abstract class----------------

//abstract class is like a blueprint itself like interfae
abstract class C {
    constructor(public name:string, public email:string){

    }

    abstract forYou():void

    forMe(){
        console.log("Love you")
    }

}

// let a = new C()   // cannot create an instance for abstract class
// for this we have to extend 

class b extends C{
  constructor(name:string, email:string){
    super(name,email)
  }
  forYou(): void {
    console.log(`${this.name} is for everyone`)
      
  }
}


let d = new b("Shehroz","abc@gmail.com")
// console.log(d)
// console.log(d.forYou())


//Another way to do this
abstract class imp{
    private static nextid:number = 1

    constructor(public id:number, protected name:string){

    }
    static num():number{
        return imp.nextid++
    }
     
    abstract fun():string

}

class F extends imp{
    constructor(id:number, name:string){
        super(id,name)
    }
    fun(){
        return `ID: ${this.id} NAME: ${this.name}`
    }
}

// let item1:imp = new F(imp.num(),"widget")
// let itme2:imp = new F(imp.num(),"gedget")
// console.log(item1)
// console.log(itme2)

//So this is how it's work




//----------------------------Polymorphism & Method Override
class a {
    voice(){
        console.log("Make some noice")
    }
}

class g extends a {
    voice(): void {
        console.log("Meow")
    }
}

class h extends a{
    voice(): void {
        console.log("Waaoooo")
    }
}


function animal3(voice:a){
  voice.voice()
}

// let cat2 = new g()
// animal3(cat2)

// let wolf = new h()
// animal3(wolf)

// //This is how it's work

//Another example

abstract class dot{
    private static nextid:number =1
   protected constructor(public id:number,protected name:string ){

   }
   static c2(){
    return dot.nextid++
   }

   abstract c3():string
}

class k extends dot{
    constructor(id:number,name:string){
        super(id,name)
    }
    c3(){
        return`ID: ${this.id} Name:${this.name}`
    }
}

class l extends dot{
    constructor(id:number, name:string){
        super(id,name)
    }
    c3(){
        return `ID: ${this.id} Name:${this.name}`
    }
}

let response1:dot = new k(dot.c2(),"widget")
console.log(response1.c3())

let response2:dot = new l(dot.c2(),"widget")
console.log(response2.c3())

//so thats it from oop