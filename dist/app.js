"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cl = console.log;
const rxjs_1 = require("rxjs");
let student1 = {
    id: 101,
    name: "Rahul",
    age: 22,
    course: "Angular",
    isActive: true
};
let student2 = {
    id: 102,
    name: "Krishana",
    age: 23,
    course: "Node.js",
    isActive: true
};
let stuArry = [student1, student2];
function fetchStudents() {
    return (0, rxjs_1.of)(stuArry);
}
fetchStudents()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleStudents(id) {
    return (0, rxjs_1.of)(student1);
}
fetchSingleStudents(123)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var department;
(function (department) {
    department["IT"] = "IT";
    department["HR"] = "HR";
    department["Finance"] = "Finance";
    department["Marketing"] = "Marketing";
})(department || (department = {}));
let employee1 = {
    empId: 201,
    name: "Amit",
    salary: 45000,
    department: department.IT,
    isPermanent: true
};
let employee2 = {
    empId: 202,
    name: "sumit",
    salary: 55000,
    department: department.HR,
    isPermanent: true
};
let empArray = [employee1, employee2];
function fetchEmployees() {
    return (0, rxjs_1.of)(empArray);
}
fetchEmployees()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleEmployee(id) {
    return (0, rxjs_1.of)(employee1);
}
fetchSingleEmployee(201)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
let book1 = {
    id: 301,
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    isAvailable: true
};
let book2 = {
    id: 302,
    title: "TypeScript",
    author: "deo",
    price: 200,
    isAvailable: true
};
let bookArr = [book1, book2];
function fetchBooks() {
    return (0, rxjs_1.of)(bookArr);
}
fetchBooks()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSinglebook(id) {
    return (0, rxjs_1.of)(book2);
}
fetchSinglebook(302)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var color;
(function (color) {
    color["Black"] = "Black";
    color["White"] = "White";
    color["Blue"] = "Blue";
    color["Silver"] = "Silver";
})(color || (color = {}));
let mobile1 = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 75000,
    color: color.Black,
    storage: 256,
};
let mobile2 = {
    brand: "Appo",
    model: "appo-12",
    price: 25000,
    color: color.Blue,
    storage: 164,
};
let mobileArr = [mobile1, mobile2];
function fetchMobiles() {
    return (0, rxjs_1.of)(mobileArr);
}
fetchMobiles()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleMobile(brand) {
    return (0, rxjs_1.of)(mobile2);
}
fetchSingleMobile("sumsung")
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
let customer1 = {
    id: 401,
    name: "Priya",
    email: "priya@example.com",
    city: "Pune",
    isVerified: true
};
let customer2 = {
    id: 402,
    name: "Siya",
    email: "siya@example.com",
    city: "Mumbai",
    isVerified: false
};
let customerArr = [customer1, customer2];
function fetchCustomers() {
    return (0, rxjs_1.of)(customerArr);
}
fetchCustomers()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleCustomer(id) {
    return (0, rxjs_1.of)(customer1);
}
fetchSingleCustomer(401)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
let laptop1 = {
    brand: "HP",
    ram: 16,
    storage: 512,
    price: 65000,
    inStock: true
};
let laptop2 = {
    brand: "Lenovo",
    ram: 16,
    storage: 512,
    price: 55000,
    inStock: false
};
let laptopArr = [laptop1, laptop2];
function fetchLaptops() {
    return (0, rxjs_1.of)(laptopArr);
}
fetchLaptops()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleLaptop(brand) {
    return (0, rxjs_1.of)(laptop2);
}
fetchSingleLaptop("Lenovo")
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var language;
(function (language) {
    language["Hindi"] = "Hindi";
    language["English"] = "English";
    language["Marathi"] = "Marathi";
    language["Tamil"] = "Tamil";
})(language || (language = {}));
let movie1 = {
    title: "Dangal",
    rating: 8.5,
    language: language.Marathi,
    releaseYear: 2016,
    isReleased: true
};
let movie2 = {
    title: "Krukshetr",
    rating: 7.5,
    language: language.Hindi,
    releaseYear: 2015,
    isReleased: true
};
let movieArr = [movie1, movie2];
function fetchMovies() {
    return (0, rxjs_1.of)(movieArr);
}
fetchMovies()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleMovie(title) {
    return (0, rxjs_1.of)(movie2);
}
fetchSingleMovie("Krukshetr")
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var accountType;
(function (accountType) {
    accountType["Savings"] = "Savings";
    accountType["Current"] = "Current";
    accountType["Salary"] = "Salary";
})(accountType || (accountType = {}));
let account1 = {
    accountNumber: 123456,
    holderName: "Rohit",
    balance: 50000,
    accountType: accountType.Savings,
    isActive: true
};
let account2 = {
    accountNumber: 252563,
    holderName: "Ramesh",
    balance: 30000,
    accountType: accountType.Current,
    isActive: true
};
let accountArr = [account1, account2];
function fetchAccounts() {
    return (0, rxjs_1.of)(accountArr);
}
fetchAccounts()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleAccount(accountNumber) {
    return (0, rxjs_1.of)(account2);
}
fetchSingleAccount(25316)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
let course1 = {
    courseName: "MEAN Stack",
    duration: 6,
    fees: 30000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js"]
};
let course2 = {
    courseName: "Full Stack",
    duration: 9,
    fees: 50000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js", "React"]
};
let courseArr = [course1, course2];
function fetchcourses() {
    return (0, rxjs_1.of)(courseArr);
}
fetchcourses()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleCourse(courseName) {
    return (0, rxjs_1.of)(course2);
}
fetchSingleCourse("full")
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var fuelType;
(function (fuelType) {
    fuelType["Petrol"] = "Petrol";
    fuelType["Diesel"] = "Diesel";
    fuelType["Electric"] = "Electric";
    fuelType["CNG"] = "CNG";
    fuelType["Hybrid"] = "Hybrid";
})(fuelType || (fuelType = {}));
let vehicle1 = {
    brand: "Hyundai",
    model: "Creta",
    price: 1500000,
    fuelType: fuelType.Electric,
    isAvailable: true
};
let vehicle2 = {
    brand: "Suzuki",
    model: "Ertika",
    price: 1500000,
    fuelType: fuelType.Petrol,
    isAvailable: false
};
let vehicleArr = [vehicle1, vehicle2];
function fetchVehicles() {
    return (0, rxjs_1.of)(vehicleArr);
}
fetchVehicles()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleVehicle(brand) {
    return (0, rxjs_1.of)(vehicle1);
}
fetchSingleVehicle("hyundia")
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
let teacher1 = {
    id: 11,
    name: "Sneha",
    subject: "TypeScript",
    experience: 5,
    skills: ["JavaScript", "TypeScript", "Angular"]
};
let teacher2 = {
    id: 12,
    name: "Pooja",
    subject: "JavaScript",
    experience: 4,
    skills: ["JavaScript", "TypeScript", "Angular", "node.js"]
};
let teacherArr = [teacher1, teacher2];
function fetchTeachers() {
    return (0, rxjs_1.of)(teacherArr);
}
fetchTeachers()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleTeachers(id) {
    return (0, rxjs_1.of)(teacher2);
}
fetchSingleTeachers(12)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var status;
(function (status) {
    status["Pending"] = "Pending";
    status["Confirmed"] = "Confirmed";
    status["Delivered"] = "Delivered";
    status["Cancelled"] = "Cancelled";
})(status || (status = {}));
var paymentMode;
(function (paymentMode) {
    paymentMode["Cash"] = "Cash";
    paymentMode["UPI"] = "UPI";
    paymentMode["Card"] = "Card";
    paymentMode["NetBanking"] = "NetBanking";
})(paymentMode || (paymentMode = {}));
let order1 = {
    orderId: 1001,
    amount: 2500,
    status: status.Confirmed,
    paymentMode: paymentMode.Cash
};
let order2 = {
    orderId: 1001,
    amount: 2500,
    status: status.Pending,
    paymentMode: paymentMode.UPI
};
let orderArr = [order1, order2];
function fetchOrders() {
    return (0, rxjs_1.of)(orderArr);
}
fetchOrders()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleOrder(id) {
    return (0, rxjs_1.of)(order2);
}
fetchSingleOrder(12)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var user;
(function (user) {
    user["ADMIN"] = "ADMIN";
    user["SUPER_ADMIN"] = "SUPER_ADMIN";
    user["BUYER"] = "BUYER";
})(user || (user = {}));
let user1 = {
    username: "rahul123",
    email: "rahul@example.com",
    role: user.ADMIN,
    isVerified: true
};
let user2 = {
    username: "Krusha125",
    email: "krusha@example.com",
    role: user.SUPER_ADMIN,
    isVerified: false
};
let userArr = [user1, user2];
function fetchUsers() {
    return (0, rxjs_1.of)(orderArr);
}
fetchUsers()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleUser(role) {
    return (0, rxjs_1.of)(order1);
}
fetchSingleUser(user.ADMIN)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var category;
(function (category) {
    category["Electronics"] = "Electronics";
    category["Fashion"] = "Fashion";
    category["Sports"] = "Sports";
    category["Beauty"] = "Beauty";
})(category || (category = {}));
let product1 = {
    id: 501,
    name: "Keyboard",
    price: 1500,
    color: color.Blue,
    quantity: 10,
    category: category.Electronics
};
let product2 = {
    id: 502,
    name: "Mouse",
    price: 500,
    color: color.Black,
    quantity: 15,
    category: category.Electronics
};
let productArr = [product1, product2];
function fetchProducts() {
    return (0, rxjs_1.of)(productArr);
}
fetchProducts()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleProduct(id) {
    return (0, rxjs_1.of)(product2);
}
fetchSingleProduct(501)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var student;
(function (student) {
    student["Present"] = "Present";
    student["Absent"] = "Absent";
    student["Leave"] = "Leave";
})(student || (student = {}));
let attendance1 = {
    employeeName: "Vikas",
    date: "2026-10-23",
    status: student.Present,
    workingHours: 8
};
let attendance2 = {
    employeeName: "Vedik",
    date: "2022-08-28",
    status: student.Absent,
    workingHours: 6
};
let attendanceArr = [attendance1, attendance2];
function fetchAttendances() {
    return (0, rxjs_1.of)(attendanceArr);
}
fetchAttendances()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleAttendance(status) {
    return (0, rxjs_1.of)(attendance1);
}
fetchSingleAttendance(student.Present)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var shoppingUser;
(function (shoppingUser) {
    shoppingUser["ADMIN"] = "ADMIN";
    shoppingUser["BUYER"] = "BUYER";
    shoppingUser["SELLER"] = "SELLER";
})(shoppingUser || (shoppingUser = {}));
let shoppingUser1 = {
    id: 101,
    name: "Aakash",
    role: shoppingUser.ADMIN,
    address: {
        city: 'Bharuch',
        state: 'Gujrat',
        pincode: 425360
    }
};
let shoppingUser2 = {
    id: 102,
    name: "Hituh",
    role: shoppingUser.BUYER,
    address: {
        city: 'Indor',
        state: 'MP',
        pincode: 425364
    }
};
let shoppingUserArr = [shoppingUser1, shoppingUser2];
function fetchShoppingUsers() {
    return (0, rxjs_1.of)(shoppingUserArr);
}
fetchShoppingUsers()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleShoppingUser(id) {
    return (0, rxjs_1.of)(shoppingUser1);
}
fetchSingleShoppingUser(101)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var inventory;
(function (inventory) {
    inventory["IN_STOCK"] = "IN_STOCK";
    inventory["LOW_STOCK"] = "LOW_STOCK";
    inventory["OUT_OF_STOCK"] = "OUT_OF_STOCK";
})(inventory || (inventory = {}));
let inventory1 = {
    productId: 501,
    name: "Mouse",
    price: 800,
    stock: 5,
    status: inventory.LOW_STOCK,
};
let inventory2 = {
    productId: 502,
    name: "Keyboard",
    price: 1500,
    stock: 10,
    status: inventory.OUT_OF_STOCK,
};
let inventoryArr = [inventory1, inventory2];
function fetchInventorys() {
    return (0, rxjs_1.of)(inventoryArr);
}
fetchInventorys()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleInventory(id) {
    return (0, rxjs_1.of)(inventory1);
}
fetchSingleInventory(501)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
let employeeProfile1 = {
    id: 102,
    name: "Karan",
    email: "karan@example.com",
    phone: "9876543210",
    skills: ["Angular", "RxJS", "TypeScript"],
    experience: 3
};
let employeeProfile2 = {
    id: 103,
    name: "kiran",
    email: "kiran@example.com",
    phone: "9876543252",
    skills: ["Angular", "RxJS", "TypeScript", "Node.js"],
    experience: 3
};
let employeeProfileArr = [employeeProfile1, employeeProfile2];
function fetchEmployeeProfiles() {
    return (0, rxjs_1.of)(employeeProfileArr);
}
fetchEmployeeProfiles()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleEmployeeProfile() {
    return (0, rxjs_1.of)(employeeProfile2);
}
fetchSingleEmployeeProfile()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
let cartItem1 = {
    productId: 1001,
    productName: "Headphones",
    price: 2500,
    quantity: 2,
    discount: 10
};
let cartItem2 = {
    productId: 1002,
    productName: "Charger",
    price: 500,
    quantity: 5,
    discount: 5
};
let cartItemArr = [cartItem1, cartItem2];
function fetchCartItems() {
    return (0, rxjs_1.of)(cartItemArr);
}
fetchCartItems()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleCartItem(productId) {
    return (0, rxjs_1.of)(cartItem1);
}
fetchSingleCartItem(1001)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var payment;
(function (payment) {
    payment["CASH"] = "CASH";
    payment["UPI"] = "UPI";
    payment["CARD"] = "CARD";
    payment["NET_BANKING"] = "NET_BANKING";
})(payment || (payment = {}));
var paymentStatus;
(function (paymentStatus) {
    paymentStatus["SUCCESS"] = "SUCCESS";
    paymentStatus["FAILED"] = "FAILED";
    paymentStatus["PENDING"] = "PENDING";
})(paymentStatus || (paymentStatus = {}));
let payment1 = {
    transactionId: "TXN1001",
    amount: 5000,
    mode: payment.NET_BANKING,
    status: paymentStatus.PENDING,
    date: "2026-10-20"
};
let payment2 = {
    transactionId: "TXN1002",
    amount: 15000,
    mode: payment.UPI,
    status: paymentStatus.SUCCESS,
    date: "2025-07-15"
};
let paymentArr = [payment1, payment2];
function fetchPayments() {
    return (0, rxjs_1.of)(paymentArr);
}
fetchPayments()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSinglePayment(transactionId) {
    return (0, rxjs_1.of)(payment2);
}
fetchSinglePayment("TXN1002")
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var patient;
(function (patient) {
    patient["ADMITTED"] = "ADMITTED";
    patient["DISCHARGED"] = "DISCHARGED";
    patient["UNDER_TREATMENT"] = "UNDER_TREATMENT";
})(patient || (patient = {}));
let patient1 = {
    patientId: 301,
    name: "Suresh",
    age: 45,
    status: patient.ADMITTED,
    doctor: {
        name: "Dr. Mehta",
        specialization: "Cardiology"
    }
};
let patient2 = {
    patientId: 302,
    name: "Mukesh",
    age: 35,
    status: patient.DISCHARGED,
    doctor: {
        name: "Dr. Kumar",
        specialization: "Neurologist"
    }
};
let patientArr = [patient1, patient2];
function fetchPatients() {
    return (0, rxjs_1.of)(patientArr);
}
fetchPatients()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSinglePatient(patientId) {
    return (0, rxjs_1.of)(patient1);
}
fetchSinglePatient(301)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var libraryBook;
(function (libraryBook) {
    libraryBook["AVAILABLE"] = "AVAILABLE";
    libraryBook["ISSUED"] = "ISSUED";
    libraryBook["LOST"] = "LOST";
})(libraryBook || (libraryBook = {}));
let libraryBook1 = {
    id: 501,
    title: "Clean Code",
    author: "Robert Martin",
    status: libraryBook.AVAILABLE,
    tags: ["Programming", "Software Design"]
};
let libraryBook2 = {
    id: 502,
    title: "Clean Code",
    author: "Robert Martin",
    status: libraryBook.ISSUED,
    tags: ["Programming", "Software Design"]
};
let libraryBookArr = [libraryBook1, libraryBook2];
function fetchLibraryBooks() {
    return (0, rxjs_1.of)(libraryBookArr);
}
fetchLibraryBooks()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleLibraryBook(id) {
    return (0, rxjs_1.of)(libraryBook2);
}
fetchSingleLibraryBook(502)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
var foodOrder;
(function (foodOrder) {
    foodOrder["PLACED"] = "PLACED";
    foodOrder["PREPARING"] = "PREPARING";
    foodOrder["READY"] = "READY";
    foodOrder["DELIVERED"] = "DELIVERED";
})(foodOrder || (foodOrder = {}));
let foodOrder1 = {
    orderId: 7001,
    customerName: "Neha",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 650,
    status: foodOrder.PREPARING,
};
let foodOrder2 = {
    orderId: 7002,
    customerName: "Rupa",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 750,
    status: foodOrder.READY,
};
let foodOrderArr = [foodOrder1, foodOrder2];
function fetchFoodOrders() {
    return (0, rxjs_1.of)(foodOrderArr);
}
fetchFoodOrders()
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
function fetchSingleFoodOrder(id) {
    return (0, rxjs_1.of)(foodOrder2);
}
fetchSingleFoodOrder(7001)
    .subscribe({
    next: (res) => cl(res),
    error: (err) => cl(err)
});
//# sourceMappingURL=app.js.map