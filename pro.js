class Student {
    static Counter = 10000;
    Id;
    Name;
    Course;
    Balance;
    constructor(name) {
        this.Name = name;
        this.Id = Student.Counter++;
        this.Course = [];
        this.Balance = 1000;
    }
    enrollCourse(Course) {
        this.Course.push(Course);
        console.log(`${Course} Added Successfully in your course List ${this.Course}`);
    }
    pay_Tution_Fees(amount) {
        if (amount > this.Balance) {
            console.log(`You dont have Sufficient balance to pay the $${amount} fess.\nYour Balance is $${this.Balance}`);
        }
        else {
            this.Balance -= amount;
            console.log(`${amount} Fees Paid Successfully.\nYour Remaining balance is $${this.Balance}`);
        }
    }
    view_Balance() {
        console.log(`Your Balance is $${this.Balance}`);
    }
    show_status() {
        console.log(`ID:${this.Id}`);
        console.log(`Name:${this.Name}`);
        console.log(`Course:${this.Course}`);
        console.log(`Balance:${this.Balance}`);
    }
}
class StudentManger {
    students;
    constructor() {
        this.students = [];
    }
    add_Student(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`${student.Name} Added Successfully in Student List\nID:${student.Id}`);
    }
    //Method to enroll a Student and for this we need to pass a student id in the parameter of enroll Student and for finding an id we make another method whom find student with their id's
    find_Student(student_id) {
        return this.students.find(std => std.Id == student_id);
    }
    enroll_Student(id, course) {
        let std_find = this.find_Student(id);
        if (std_find) {
            std_find.enrollCourse(course);
            console.log(`${std_find.Name} Successfully enroll in this ${course} course`);
        }
        else {
            console.log("Student not found .Please enter a correct student Id");
        }
    }
    pay_Tution_Fees(id, amount) {
        let found = this.find_Student(id);
        if (found) {
            found.pay_Tution_Fees(amount);
        }
        else {
            console.log("Dont Have sufficient balance to pay the fess");
        }
    }
    view_balance(id) {
        let found = this.find_Student(id);
        if (found) {
            found.view_Balance();
        }
    }
    view_Status(id) {
        let found = this.find_Student(id);
        if (found) {
            found.show_status();
        }
        else {
            console.log(`Student not found. Please enter a Correct Id`);
        }
    }
}
export {};
// let check = new StudentManger()
// console.log(check)
// console.log(check.add_Student("Shehroz"))
// console.log(check.enroll_Student(10000,"IT"))
// console.log(check.students)   //When you call an Array it would give the value of an Array but when you call a nested array in an object then Array value look like this [Array] 
// console.log(check.view_Status(1000))
// console.log("Detailed students array:", check.students);
// console.log("Detailed check object:", JSON.stringify(check, null, 2));
//Make async function to run the program
// import inquirer from "inquirer";
// async function main() {
//     console.log("Welcome to Student Managment System")
//     console.log(".".repeat(60))
//     let studentManage = new StudentManger()
//     while(true){
//         let choices = await inquirer.prompt([
//             {
//                 name:"Choice",
//                 type:"list",
//                 message:"Please Select an Option",
//                 choices:[
//                     "Add Student",
//                     "Enroll Student",
//                     "View Student Balance",
//                     "Pay Fees",
//                     "Show Status",
//                     "Exit"
//                 ]
//             }
//         ]);
//     }
// }
