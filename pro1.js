class Student {
    static counter = 10000;
    id;
    name;
    course;
    balance;
    //we make a constructor in whic we assign the value o properties
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.course = [];
        this.balance = 1000;
    }
    enrollCourse(course) {
        this.course.push(course);
        console.log(`${course} course is added Successfully in your Course List `);
    }
    view_balance() {
        console.log(`This is your available balance $${this.balance}`);
    }
    pay_tuition_fees(amount) {
        this.balance -= amount;
        if (this.balance <= 0) {
            console.log(`your balance is not enough to pay the fees `);
            // console.log(`$${amount} Tution fees paid Sucessfully.\n Now your remaining Amount is $${this.balance}`)
        }
        else {
            console.log(`$${amount} Tution fees paid Sucessfully.\n Now your remaining Amount is $${this.balance}`);
        }
        // console.log(`$${amount} Tution fees paid Sucessfully.\n Now your remaining Amount is $${this.balance}`)
    }
    show_status() {
        console.log(`ID:${this.id}`);
        console.log(`Name:${this.name}`);
        console.log(`Course:${this.course}`);
        console.log(`Balance:$${this.balance}`);
    }
}
//Defining a student manager class to manage student
class Student_manager {
    students;
    constructor() {
        this.students = [];
    }
    // Method to add a new Student
    add_student(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`Student: ${name} added Successfully. Student ID: ${student.id}`);
    }
    //Method to enroll a student in a course
    enroll_student(student_id, course) {
        //    let student_find = this.students.find(std =>std.id === student_id);
        let student_find = this.found_student(student_id);
        if (student_find) {
            student_find.enrollCourse(course);
            console.log(`${student_find.name} enrolled in ${course} course`);
        }
        else {
            console.log("Student not found .Please enter a correct student Id");
        }
    }
    //Mehod to view a student balance
    view_student_balance(student_id) {
        let student = this.found_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("Student not found .Please enter a correct student Id");
        }
    }
    //Method to pay student fees
    pay_student_fees(student_id, amount) {
        let student = this.found_student(student_id);
        if (student) {
            student.pay_tuition_fees(amount);
        }
        else {
            console.log(`Student not found. Please enter a correct student ID`);
        }
    }
    //Method to find a student by student id
    found_student(student_id) {
        return this.students.find(Std => Std.id === student_id);
    }
    // Method to display student status
    show_Student_status(student_id) {
        let student = this.found_student(student_id);
        if (student) {
            student.show_status();
        }
        else {
            console.log("Please enter a correct ID");
        }
    }
}
// let response = new Student_manager()
// console.log(response.add_student("Shehroz"))
// console.log(response)
// console.log(response.enroll_student(10000,"IT"))
// console.log(response.add_student("ALI"))
// console.log(response.students)
import inquirer from "inquirer";
async function main() {
    console.log("Welcome to Student Managment System");
    console.log(".".repeat(60));
    let studentManage = new Student_manager();
    while (true) {
        let choices = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Please Select an Option",
                choices: [
                    "Add Student",
                    "Enroll Course",
                    "View Student Balance",
                    "Pay Fees",
                    "Show Status",
                    "Exit"
                ]
            }
        ]);
        switch (choices.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Add a student name"
                    }
                ]);
                studentManage.add_student(name_input.name);
                break;
            case "Enroll Course":
                let enroll = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Enter an ID number"
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter a Course name"
                    }
                ]);
                studentManage.enroll_student(enroll.id, enroll.course);
                break;
            case "View Student Balance":
                let viewBalnce = await inquirer.prompt([
                    {
                        name: "balance",
                        type: "number",
                        message: "Enter a Student Id",
                    }
                ]);
                studentManage.view_student_balance(viewBalnce.balance);
                break;
            case "Pay Fees":
                let pay = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "please enter a student id",
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Please enter an Amount",
                    }
                ]);
                studentManage.pay_student_fees(pay.id, pay.amount);
                break;
            case "Show Status":
                let status = await inquirer.prompt([
                    {
                        name: "id",
                        type: "number",
                        message: "Please enter a Student Id",
                    }
                ]);
                studentManage.show_Student_status(status.id);
                break;
            case "Exit":
                console.log("Exiting....");
                process.exit();
            default:
                console.log("Invalid Choice");
        }
    }
}
main();
