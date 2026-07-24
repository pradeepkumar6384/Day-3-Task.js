console.log("================================");
console.log("TASK 1: STUDENT REGISTRATION FORM");
console.log("================================");

{
    let studentName = "Pradeep Kumar";
    let age = 23;
    let department = "MCA";
    let cgpa = 8.5;

    console.log("Student Name:", studentName);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}


console.log("\n========================");
console.log("TASK 2: EMPLOYEE DETAILS");
console.log("========================");

{
    let employee = {
        employeeId: "EMP1001",
        employeeName: "Naveen",
        department: "Frontend Development",
        salary: 25000
    };

    console.log("Employee Name:", employee.employeeName);
    console.log("Salary: ₹" + employee.salary);
}


console.log("\n=======================");
console.log("TASK 3: SHOPPING CART");
console.log("=======================");

{
    let products = [
        "Laptop",
        "Mouse",
        "Keyboard",
        "Monitor",
        "Headset"
    ];

    console.log("First Product:", products[0]);
    console.log("Last Product:", products[products.length - 1]);
    console.log("Total Number of Products:", products.length);
}


console.log("\n=======================");
console.log("TASK 4: STUDENT MARKS");
console.log("=======================");

{
    let tamil = 85;
    let english = 78;
    let mathematics = 90;
    let science = 88;
    let socialScience = 82;

    let total =
        tamil +
        english +
        mathematics +
        science +
        socialScience;

    let average = total / 5;

    console.log("Tamil:", tamil);
    console.log("English:", english);
    console.log("Mathematics:", mathematics);
    console.log("Science:", science);
    console.log("Social Science:", socialScience);
    console.log("Total Marks:", total);
    console.log("Average Marks:", average);
}


console.log("\n====================");
console.log("TASK 5: AGE CHECKER");
console.log("====================");

{
    let age = 20;

    if (age >= 18) {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible to Vote");
    }
}


console.log("\n=====================");
console.log("TASK 6: LOGIN SYSTEM");
console.log("=====================");

{
    let username = "admin";
    let password = "12345";

    if (username === "admin" && password === "12345") {
        console.log("Login Successful");
    } else {
        console.log("Invalid Username or Password");
    }
}


console.log("\n==================");
console.log("TASK 7: CALCULATOR");
console.log("==================");

{
    let number1 = 20;
    let number2 = 6;

    let addition = number1 + number2;
    let subtraction = number1 - number2;
    let multiplication = number1 * number2;
    let division = number1 / number2;
    let modulus = number1 % number2;

    console.log("First Number:", number1);
    console.log("Second Number:", number2);
    console.log("Addition:", addition);
    console.log("Subtraction:", subtraction);
    console.log("Multiplication:", multiplication);
    console.log("Division:", division);
    console.log("Modulus:", modulus);
}


console.log("\n==========================");
console.log("TASK 8: ELECTRICITY BILL");
console.log("==========================");

{
    let customerName = "Pradeep Kumar";
    let unitsConsumed = 150;
    let ratePerUnit;
    let billAmount;

    if (unitsConsumed <= 100) {
        ratePerUnit = 2;
    } else if (unitsConsumed <= 200) {
        ratePerUnit = 4;
    } else {
        ratePerUnit = 6;
    }

    billAmount = unitsConsumed * ratePerUnit;

    console.log("Customer Name:", customerName);
    console.log("Units Consumed:", unitsConsumed);
    console.log("Rate Per Unit: ₹" + ratePerUnit);
    console.log("Bill Amount: ₹" + billAmount);
}


console.log("\n=========================");
console.log("TASK 9: EMPLOYEE SALARY");
console.log("=========================");

{
    let basicSalary = 30000;
    let bonus = 5000;

    let grossSalary = basicSalary + bonus;

    console.log("Basic Salary: ₹" + basicSalary);
    console.log("Bonus: ₹" + bonus);
    console.log("Gross Salary: ₹" + grossSalary);
}


console.log("\n============================");
console.log("TASK 10: MOVIE TICKET PRICE");
console.log("============================");

{
    let ticketPrice = 200;
    let numberOfTickets = 4;

    let totalAmount = ticketPrice * numberOfTickets;

    console.log("Ticket Price: ₹" + ticketPrice);
    console.log("Number of Tickets:", numberOfTickets);
    console.log("Total Amount: ₹" + totalAmount);
}


console.log("\n==========================");
console.log("TASK 11: PRODUCT DISCOUNT");
console.log("==========================");

{
    let productName = "Laptop";
    let price = 60000;
    let discountPercentage;
    let discountAmount;
    let finalPrice;

    if (price > 5000) {
        discountPercentage = 20;
    } else {
        discountPercentage = 10;
    }

    discountAmount = (price * discountPercentage) / 100;
    finalPrice = price - discountAmount;

    console.log("Product Name:", productName);
    console.log("Original Price: ₹" + price);
    console.log("Discount Percentage:", discountPercentage + "%");
    console.log("Discount Amount: ₹" + discountAmount);
    console.log("Final Price: ₹" + finalPrice);
}


console.log("\n==========================");
console.log("TASK 12: FUNCTION PRACTICE");
console.log("==========================");

{
    function studentDetails(name, department, cgpa) {
        console.log("Student Name:", name);
        console.log("Department:", department);
        console.log("CGPA:", cgpa);
    }

    studentDetails("Pradeep Kumar", "MCA", 8.5);
}


console.log("\n=====================");
console.log("TASK 13: BANK BALANCE");
console.log("=====================");

{
    let accountHolder = "Pradeep Kumar";
    let currentBalance = 20000;
    let withdrawAmount = 5000;
    let remainingBalance;

    console.log("Account Holder:", accountHolder);
    console.log("Current Balance: ₹" + currentBalance);
    console.log("Withdraw Amount: ₹" + withdrawAmount);

    if (withdrawAmount <= currentBalance) {
        remainingBalance = currentBalance - withdrawAmount;

        console.log("Withdrawal Successful");
        console.log("Remaining Balance: ₹" + remainingBalance);
    } else {
        console.log("Insufficient Balance");
    }
}


console.log("\n=======================");
console.log("TASK 14: MOBILE RECHARGE");
console.log("=======================");

{
    let mobileNumber = "9876543210";
    let rechargeAmount = 299;

    console.log("Recharge Successful");
    console.log("Mobile Number:", mobileNumber);
    console.log("Recharge Amount: ₹" + rechargeAmount);
}


console.log("\n=========================");
console.log("TASK 15: RESTAURANT BILL");
console.log("=========================");

{
    let foodName = "Chicken Biryani";
    let quantity = 3;
    let price = 180;

    let totalBill = quantity * price;

    console.log("--------- INVOICE ---------");
    console.log("Food Name:", foodName);
    console.log("Quantity:", quantity);
    console.log("Price Per Item: ₹" + price);
    console.log("Total Bill: ₹" + totalBill);
    console.log("---------------------------");
}



console.log("\n======================================");
console.log("MINI PROJECT: EMPLOYEE MANAGEMENT SYSTEM");
console.log("======================================");

// Function to calculate the employee's total salary
function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}

// Function to check employee experience
function checkExperience(experience) {
    if (experience >= 5) {
        return "Senior Employee";
    } else if (experience >= 2) {
        return "Experienced Employee";
    } else {
        return "Fresher Employee";
    }
}

// Function to display employee details
function displayEmployee(employee) {
    console.log("\n--------- EMPLOYEE DETAILS ---------");

    console.log("Employee ID:", employee.employeeId);
    console.log("Employee Name:", employee.employeeName);
    console.log("Department:", employee.department);
    console.log("Designation:", employee.designation);
    console.log("Basic Salary: ₹" + employee.basicSalary);
    console.log("Bonus: ₹" + employee.bonus);
    console.log("Gross Salary: ₹" + employee.grossSalary);
    console.log("Experience:", employee.experience + " years");
    console.log("Experience Level:", employee.experienceLevel);
    console.log("Skills:", employee.skills.join(", "));

    console.log("------------------------------------");
}

// Employee skills stored in an array
let employeeSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "MySQL"
];

// Employee information stored in an object
let employee = {
    employeeId: "EMP1001",
    employeeName: "Pradeep Kumar",
    department: "Software Development",
    designation: "Junior Developer",
    basicSalary: 30000,
    bonus: 5000,
    experience: 2,
    skills: employeeSkills
};

// Calculate gross salary
employee.grossSalary = calculateSalary(
    employee.basicSalary,
    employee.bonus
);

// Check employee experience
employee.experienceLevel = checkExperience(
    employee.experience
);

// Display employee details
displayEmployee(employee);


