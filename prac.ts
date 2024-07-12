// class Student {
//     name:string;
//     email:string;
//     number:number;
//     class:string|undefined

//     constructor(name:string,email:string,number:number,classes?:string){
//         this.name = name;
//         this.email= email
//         this.number = number
//         this.class = classes


//     }

//     stdProfile(){
//         console.log(`Student name is ${this.name} Email is ${this.email} Class ${this.class} and his phone nummber is ${this.number}`)
//     }


// }

// let student1 =  new Student("Shehroz","Shehrozhanif@gmail.com",+923142168504,"PHD");
// console.log(student1)
// // console.log(student1.stdProfile())

// class Teacher extends Student{
//   Designation:string;
//   private SalaryCode:number;

//   constructor(name:string,email:string,number:number,Designation:string) {
//     super(name,email,number)
//     this.Designation = Designation
//     this.SalaryCode =1234
    
//     getSalary(secret:number){
//         if(secret=1234){

//         }
//     }

//   }
  
// }

// let Professor = new Teacher("Hamiz","Hamiz@gmail.com",13245,"Professor")
// console.log(Professor)










// class Animal2 {
//     Name:string

//     constructor(name:string){
//         this.Name = name
//     }

//     protected move(distance:number){
//         console.log(`${this.Name} moves ${distance} meters`)
//     }

// }

// class bird extends Animal2 {
//      constructor(name:string){
//         super(name)
//      }

//      public fly(distance:number){
//         this.move(distance)
//         console.log(this.Name + " is flying")
//      }
// }

// const sparrow = new bird("Parrot")
// console.log(sparrow)
// console.log(sparrow.fly(5))


// let lion = new Animal2("Lion2")
// console.log(lion)

// console.log(lion.Name)



class User{
    Name:string
    private Eamail:string
    private Salary:number
    private secret:number =1234
  
    constructor(name:string, email:string,private salary:number){
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
            return `Your code is incorrect`
        }
      

    }
  
  }

  let student = new User("Sheroz","abc@gmail.com",10000)
//   console.log(student)
//   console.log(student.niewData())
//   console.log(student.accessor())



  let salary = student.salarycheck(1234)
//   console.log(salary)


//   class Sude extends User{
//     profession:string;
//     constructor(name:string,email:string,salary:number, profession:string){
//       super(name,email,salary)
//       this.profession = profession
//     }

//     fun(){
//         this.salarycheck(secret:number)
//     }
//   }



class Try{
    Name:string
    Email?:string
   constructor(name:string){
    this.Name = name
   }

}

let check = new Try("shehroz")
// console.log(check)   // see the object Eamil property is undefine so what we do to remove the undefine thing


class Try2 {
    Name:string;
    Email?:string;
    constructor(name:string, email?:string) {
        this.Name = name;
        if (email !== undefined) {
            this.Email = email;
        }
    }
}
let res = new Try2("shehroz");
// console.log(res)  // same reult with this so we are loooking for new method


// class Try3{
//     Name:string
//     Email!:string
//    constructor(name:string,){
//     this.Name = name
//    }

// }
// let res2 = new Try3("Shehroz")
// // console.log(res2)

// class Try4 extends Try3{
//     constructor(name:string,email:string){
//         super(name)
//         this.Email = email
//     }
// }
// let ch = new Try4("shehroz","")
// console.log(ch)



// class access Modifiers

//Public

class MyPublic{
    public name:string
    constructor(name:string){
        this.name = name
    }
}

let c1 = new MyPublic("Zenni")
// console.log(c1.name)  //Accessing Public Property


//Privite

class MyPriviteClass{
    private seret:number
    constructor(secret:number){
        this.seret = secret
    }

    getCode(){
        return `Secret Code is ${this.seret}`
    }
}


let c2= new MyPriviteClass(4321)
// console.log(c2.seret) // 'seret' is private and only accessible within class 'MyPriviteClass'.
// console.log(c2.getCode()) // Through method we can access privite property


// Protected

class Parent{
    protected Familyname:string
    constructor(name:string){
        this.Familyname = name
    }
}

class Child extends Parent{
    introduceFamily(){
        console.log(`Our Family is ${this.Familyname}`)
    }
}

let c4 = new Parent("Syed")
// console.log(c4.Familyname) // `Familyname' is protected and only accessible within class 'Parent' and its subclasses.

let c5 = new Child("Pakhtoon")
// console.log(c5.introduceFamily())



// Class acccessor  is also known as getter and setter

class ProductAccessor{
    // privite property
    private price:number
    constructor(private id:number, private name:string){
        this.price = 0
    }

    //Public getter for price
    getprice(){
        return `${this.price}`
    }

    //Public setter for price
    setprice(newPrice:number){
        if(newPrice>=0){
            this.price = newPrice;
        }else{
            console.log("Price cannot be negative")
        }
    }

    getProductInfo(){
        return `ID:${this.id}, Name:${this.name}, Price:${this.price}`
    }
}

// const p1 = new ProductAccessor(1,"Widget")
// console.log(p1.getProductInfo())
// console.log(p1.setprice(20))
// console.log("After updating he price")
// console.log(p1.getProductInfo())

// console.log(p1.setprice(-5))




// Class static members

class ProductStaticMember{
    // Privite Property 
    private static nextId:number = 1
    constructor(private id:number, private name:string){}

    static generateNextId(){
        return ProductStaticMember.nextId++
    }

    getProductInfo(){
        return `ID:${this.id}, Name:${this.name}`
    }
}

// const pro1 = new ProductStaticMember(ProductStaticMember.generateNextId(),"widget")
// console.log(pro1)
// console.log(pro1.getProductInfo())

// const pro2 = new ProductStaticMember(ProductStaticMember.generateNextId(),"gedget")
// console.log(pro2)
// console.log(pro2.getProductInfo())







// Class Implement Interface
class ProductImplementInterface{
    private static nextId = 1
    constructor(private id:number,private name:string){}

    static generateId(){
        return ProductImplementInterface.nextId++
    }

    getInfo(){
        console.log(`ID:${this.id}, Name:${this.name}`)
    }
}

let product1 = new ProductImplementInterface(ProductImplementInterface.generateId() , "Widget")
console.log(product1)
console.log(product1.getInfo())




//abstract classes and members  
//It is used as a blue print

abstract class Abstraction{
    private static nextId = 1
    constructor(public name:string, protected id:number){}
    static generateId(){
        return Abstraction.nextId++
    }

    abstract getInfo():string
}

class Item extends Abstraction{
  constructor(name:string, id:number){
    super(name,id)
  }
  getInfo(): string {
      return (`${this.name},${this.id}`)
  }
}


// let checking = new Item("widget",Abstraction.generateId())
// console.log(checking)
// console.log(checking.getInfo())

// let checking2 = new Item("widget",Abstraction.generateId())
// console.log(checking2)
// console.log(checking2.getInfo())





// PolyMorphosm and method Override

abstract class Entity{
    private static NextId:number = 1
    protected constructor(public id:number, protected name:string){

    }
    static generateId(){
        return Entity.NextId++
    }
    abstract getinfo():string
}

class Enter extends Entity{
    constructor(id:number, name:string){
        super(id,name)
    }

    getinfo(): string {
        return `ID:${this.id} Name:${this.name}`
    }
}


class Entry extends Entity{
    constructor(id:number,name:string){
        super(id,name)
    }

    getinfo(): string {
        return `ID:${this.id} Name:${this.name}`
    }
}
// 
// console.log("Start")

// const resp1 = new Enter(Entity.generateId(), "Gedget")
// console.log(resp1.getinfo())

// const resp2 = new Entry(Entity.generateId(), "Gedget")
// console.log(resp2.getinfo())
