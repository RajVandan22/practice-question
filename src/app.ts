let cl = console.log;
import { Observable, of } from 'rxjs';
//Example no:1
interface Istudent {
    id: number;
    name: string;
    age: number;
    course: string;
    isActive: boolean;
}

let student1: Istudent = {
    id: 101,
    name: "Rahul",
    age: 22,
    course: "Angular",
    isActive: true
};

let student2: Istudent = {
    id: 102,
    name: "Krishana",
    age: 23,
    course: "Node.js",
    isActive: true
}

let stuArry: Array<Istudent> = [student1, student2];

// function fetchStudents():Promise<Istudent[]>{
//     return Promise.resolve(stuArry)
// }

// fetchStudents()
//     .then(res => {
//         cl(res);
//     })
//     .catch(err => {
//         cl(err);
//     })
// function fetchSingleStudent(id:number):Promise<Istudent>{
//     return Promise.resolve(student1)
// }

// fetchSingleStudent(101)
//     .then(res => cl(res))
//     .catch(err => cl(err));

function fetchStudents(): Observable<Istudent[]> {
    return of(stuArry)
}

fetchStudents()
    .subscribe({
        next: (res: Istudent[]) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleStudents(id: number): Observable<Istudent> {
    return of(student1);
}

fetchSingleStudents(123)
    .subscribe({
        next: (res: Istudent) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:2
enum department {
    IT = "IT",
    HR = "HR",
    Finance = "Finance",
    Marketing = "Marketing"
}
interface Iemployee {
    empId: number,
    name: string,
    salary: number,
    department: department,
    isPermanent: boolean
}

let employee1: Iemployee = {
    empId: 201,
    name: "Amit",
    salary: 45000,
    department: department.IT, // possible values: "IT", "HR", "Finance", "Marketing"
    isPermanent: true
};

let employee2: Iemployee = {
    empId: 202,
    name: "sumit",
    salary: 55000,
    department: department.HR, // possible values: "IT", "HR", "Finance", "Marketing"
    isPermanent: true
};

let empArray: Array<Iemployee> = [employee1, employee2]

// function fetchEmployees():Promise<Iemployee[]>{
//     return Promise.resolve(empArray)
// }

// fetchEmployees()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleEmployee(id:number):Promise<Iemployee>{
//     return Promise.resolve(employee1);
// }

// fetchSingleEmployee(201)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchEmployees(): Observable<Iemployee[]> {
    return of(empArray)
}

fetchEmployees()
    .subscribe({
        next: (res: Array<Iemployee>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleEmployee(id: number): Observable<Iemployee> {
    return of(employee1)
}

fetchSingleEmployee(201)
    .subscribe({
        next: (res: Iemployee) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:3
interface Ibook {
    id: number,
    title: string,
    author: string,
    price: number,
    isAvailable: boolean
}
let book1: Ibook = {
    id: 301,
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    isAvailable: true
};
let book2: Ibook = {
    id: 302,
    title: "TypeScript",
    author: "deo",
    price: 200,
    isAvailable: true
};
let bookArr: Array<Ibook> = [book1, book2]

// function fetchBooks():Promise<Ibook[]>{
//     return Promise.resolve(bookArr)
// }

// fetchBooks()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSinglebook(id:number):Promise<Ibook>{
//     return Promise.resolve(book1);
// }

// fetchSinglebook(301)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchBooks(): Observable<Ibook[]> {
    return of(bookArr)
}

fetchBooks()
    .subscribe({
        next: (res: Array<Ibook>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSinglebook(id: number): Observable<Ibook> {
    return of(book2)
}

fetchSinglebook(302)
    .subscribe({
        next: (res: Ibook) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:4
enum color {
    Black = "Black",
    White = "White",
    Blue = "Blue",
    Silver = "Silver"
}
interface Imobile {
    brand: string;
    model: string;
    price: number;
    color: color;
    storage: number;
}
let mobile1: Imobile = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 75000,
    color: color.Black,
    storage: 256,
};
let mobile2: Imobile = {
    brand: "Appo",
    model: "appo-12",
    price: 25000,
    color: color.Blue,
    storage: 164,
};
let mobileArr: Array<Imobile> = [mobile1, mobile2];

// function fetchMobiles():Promise<Imobile[]>{
//     return Promise.resolve(mobileArr)
// }

// fetchMobiles()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleMobile():Promise<Imobile>{
//     return Promise.resolve(mobile1)
// }

// fetchSingleMobile()
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchMobiles(): Observable<Imobile[]> {
    return of(mobileArr)
}

fetchMobiles()
    .subscribe({
        next: (res: Array<Imobile>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleMobile(brand: string): Observable<Imobile> {
    return of(mobile2)
}

fetchSingleMobile("sumsung")
    .subscribe({
        next: (res: Imobile) => cl(res),
        error: (err: any) => cl(err)
    })

//example no:5
interface Icustomer {
    id: number,
    name: string,
    email: string,
    city: string,
    isVerified: boolean
}
let customer1: Icustomer = {
    id: 401,
    name: "Priya",
    email: "priya@example.com",
    city: "Pune",
    isVerified: true
};
let customer2: Icustomer = {
    id: 402,
    name: "Siya",
    email: "siya@example.com",
    city: "Mumbai",
    isVerified: false
};
let customerArr: Array<Icustomer> = [customer1, customer2];

// function fetchCustomers():Promise<Icustomer[]>{
//     return Promise.resolve(customerArr);
// }
// fetchCustomers()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleCustomer(id:number):Promise<Icustomer>{
//     return Promise.resolve(customer2)
// }
// fetchSingleCustomer(402)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchCustomers(): Observable<Icustomer[]> {
    return of(customerArr)
}

fetchCustomers()
    .subscribe({
        next: (res: Array<Icustomer>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleCustomer(id: number): Observable<Icustomer> {
    return of(customer1)
}

fetchSingleCustomer(401)
    .subscribe({
        next: (res: Icustomer) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:6
interface Ilaptop {
    brand: string,
    ram: number,
    storage: number,
    price: number,
    inStock: boolean
}
let laptop1: Ilaptop = {
    brand: "HP",
    ram: 16,
    storage: 512,
    price: 65000,
    inStock: true
};
let laptop2: Ilaptop = {
    brand: "Lenovo",
    ram: 16,
    storage: 512,
    price: 55000,
    inStock: false
};

let laptopArr: Array<Ilaptop> = [laptop1, laptop2];

// function fetchLaptops():Promise<Ilaptop[]>{
//     return Promise.resolve(laptopArr)
// }

// fetchLaptops()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleLaptop(brand:string):Promise<Ilaptop>{
//     return Promise.resolve(laptop2)
// }

// fetchSingleLaptop("Lenovo")
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchLaptops(): Observable<Ilaptop[]> {
    return of(laptopArr)
}

fetchLaptops()
    .subscribe({
        next: (res: Array<Ilaptop>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleLaptop(brand: string): Observable<Ilaptop> {
    return of(laptop2)
}

fetchSingleLaptop("Lenovo")
    .subscribe({
        next: (res: Ilaptop) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:7
enum language {
    Hindi = "Hindi",
    English = "English",
    Marathi = "Marathi",
    Tamil = "Tamil"
}
interface Imovie {
    title: string,
    rating: Number,
    language: language,
    releaseYear: number,
    isReleased: boolean
}
let movie1: Imovie = {
    title: "Dangal",
    rating: 8.5,
    language: language.Marathi,
    releaseYear: 2016,
    isReleased: true
};

let movie2: Imovie = {
    title: "Krukshetr",
    rating: 7.5,
    language: language.Hindi,
    releaseYear: 2015,
    isReleased: true
};

let movieArr: Array<Imovie> = [movie1, movie2];
// function fetchMovies():Promise<Imovie[]>{
//     return Promise.resolve(movieArr);
// }
// fetchMovies()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleMovie(title : string):Promise<Imovie>{
//     return Promise.resolve(movie1)
// }
// fetchSingleMovie("Dangal")
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchMovies(): Observable<Imovie[]> {
    return of(movieArr);
}
fetchMovies()
    .subscribe({
        next: (res: Array<Imovie>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleMovie(title: string): Observable<Imovie> {
    return of(movie2)
}
fetchSingleMovie("Krukshetr")
    .subscribe({
        next: (res: Imovie) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:8
enum accountType {
    Savings = "Savings",
    Current = "Current",
    Salary = "Salary"
}
interface Iaccount {
    accountNumber: number,
    holderName: string,
    balance: number,
    accountType: accountType,
    isActive: boolean
}
let account1: Iaccount = {
    accountNumber: 123456,
    holderName: "Rohit",
    balance: 50000,
    accountType: accountType.Savings,
    isActive: true
};
let account2: Iaccount = {
    accountNumber: 252563,
    holderName: "Ramesh",
    balance: 30000,
    accountType: accountType.Current,
    isActive: true
};

let accountArr: Array<Iaccount> = [account1, account2]

// function fetchAccounts():Promise<Iaccount[]>{
//     return Promise.resolve(accountArr)
// }

// fetchAccounts()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleAccount(accountNumber : number):Promise<Iaccount>{
//     return Promise.resolve(account2)
// }

// fetchSingleAccount(123456)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchAccounts(): Observable<Iaccount[]> {
    return of(accountArr)
}

fetchAccounts()
    .subscribe({
        next: (res: Array<Iaccount>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleAccount(accountNumber: number): Observable<Iaccount> {
    return of(account2)
}

fetchSingleAccount(25316)
    .subscribe({
        next: (res: Iaccount) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:9

interface Icourse {
    courseName: string,
    duration: number,
    fees: number,
    technologies: string[]
}
let course1: Icourse = {
    courseName: "MEAN Stack",
    duration: 6,
    fees: 30000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js"]
};
let course2: Icourse = {
    courseName: "Full Stack",
    duration: 9,
    fees: 50000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js", "React"]
};
let courseArr: Array<Icourse> = [course1, course2];

// function fetchcourses():Promise<Icourse[]>{
//     return Promise.resolve(courseArr);
// }
// fetchcourses()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleCourse(courseName : string):Promise<Icourse>{
//     return Promise.resolve(course1)
// }
// fetchSingleCourse("Mean")
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchcourses(): Observable<Icourse[]> {
    return of(courseArr);
}
fetchcourses()
    .subscribe({
        next: (res: Array<Icourse>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleCourse(courseName: string): Observable<Icourse> {
    return of(course2)
}
fetchSingleCourse("full")
    .subscribe({
        next: (res: Icourse) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:10
enum fuelType {
    Petrol = "Petrol",
    Diesel = "Diesel",
    Electric = "Electric",
    CNG = "CNG",
    Hybrid = "Hybrid"
}
interface Ivehicle {
    brand: string,
    model: string,
    price: number,
    fuelType: fuelType,
    isAvailable: boolean
}
let vehicle1: Ivehicle = {
    brand: "Hyundai",
    model: "Creta",
    price: 1500000,
    fuelType: fuelType.Electric,
    isAvailable: true
};
let vehicle2: Ivehicle = {
    brand: "Suzuki",
    model: "Ertika",
    price: 1500000,
    fuelType: fuelType.Petrol,
    isAvailable: false
};

let vehicleArr: Array<Ivehicle> = [vehicle1, vehicle2];
// function fetchVehicles():Promise<Ivehicle[]>{
//     return Promise.resolve(vehicleArr);
// }
// fetchVehicles()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleVehicle(brand:string):Promise<Ivehicle>{
//     return Promise.resolve(vehicle2)
// }
// fetchSingleVehicle('creta')
//     .then(res => cl(res))
//     .catch(err => cl(err))


function fetchVehicles(): Observable<Ivehicle[]> {
    return of(vehicleArr);
}
fetchVehicles()
    .subscribe({
        next: (res: Array<Ivehicle>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleVehicle(brand: string): Observable<Ivehicle> {
    return of(vehicle1)
}
fetchSingleVehicle("hyundia")
    .subscribe({
        next: (res: Ivehicle) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:11
interface Iteacher {
    id: number,
    name: string,
    subject: string,
    experience: number,
    skills: string[]
}
let teacher1: Iteacher = {
    id: 11,
    name: "Sneha",
    subject: "TypeScript",
    experience: 5,
    skills: ["JavaScript", "TypeScript", "Angular"]
};
let teacher2: Iteacher = {
    id: 12,
    name: "Pooja",
    subject: "JavaScript",
    experience: 4,
    skills: ["JavaScript", "TypeScript", "Angular", "node.js"]
};
let teacherArr: Array<Iteacher> = [teacher1, teacher2]

// function fetchTeachers():Promise<Iteacher[]>{
//     return Promise.resolve(teacherArr);
// }
// fetchTeachers()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleTeachers(id:number):Promise<Iteacher>{
//     return Promise.resolve(teacher2)
// }
// fetchSingleTeachers(11)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchTeachers(): Observable<Iteacher[]> {
    return of(teacherArr);
}
fetchTeachers()
    .subscribe({
        next: (res: Array<Iteacher>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleTeachers(id: number): Observable<Iteacher> {
    return of(teacher2)
}
fetchSingleTeachers(12)
    .subscribe({
        next: (res: Iteacher) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:12
enum status {
    Pending = "Pending",
    Confirmed = "Confirmed",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}
enum paymentMode {
    Cash = "Cash",
    UPI = "UPI",
    Card = "Card",
    NetBanking = "NetBanking"
}
interface Iorder {
    orderId: 1001,
    amount: 2500,
    status: status,
    paymentMode: paymentMode
}
let order1: Iorder = {
    orderId: 1001,
    amount: 2500,
    status: status.Confirmed,
    paymentMode: paymentMode.Cash
};
let order2: Iorder = {
    orderId: 1001,
    amount: 2500,
    status: status.Pending,
    paymentMode: paymentMode.UPI
};
let orderArr: Array<Iorder> = [order1, order2]

// function fetchOrders():Promise<Iorder[]>{
//     return Promise.resolve(orderArr);
// }
// fetchOrders()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleOrder(orderId:number):Promise<Iorder>{
//     return Promise.resolve(order2)
// }
// fetchSingleOrder(1001)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchOrders(): Observable<Iorder[]> {
    return of(orderArr);
}
fetchOrders()
    .subscribe({
        next: (res: Array<Iorder>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleOrder(id: number): Observable<Iorder> {
    return of(order2)
}
fetchSingleOrder(12)
    .subscribe({
        next: (res: Iorder) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:13 
enum user {
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    BUYER = "BUYER"
}
interface Iuser {
    username: string,
    email: string,
    role: user,
    isVerified: boolean
}
let user1: Iuser = {
    username: "rahul123",
    email: "rahul@example.com",
    role: user.ADMIN,
    isVerified: true
};
let user2: Iuser = {
    username: "Krusha125",
    email: "krusha@example.com",
    role: user.SUPER_ADMIN,
    isVerified: false
};
let userArr: Array<Iuser> = [user1, user2]

// function fetchUsers(): Promise<Iuser[]> {
//     return Promise.resolve(userArr);
// }
// fetchUsers()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleUser(role: user): Promise<Iuser> {
//     return Promise.resolve(user1)
// }
// fetchSingleUser(user.ADMIN)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchUsers(): Observable<Iorder[]> {
    return of(orderArr);
}
fetchUsers()
    .subscribe({
        next: (res: Array<Iorder>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleUser(role: user): Observable<Iorder> {
    return of(order1)
}
fetchSingleUser(user.ADMIN)
    .subscribe({
        next: (res: Iorder) => cl(res),
        error: (err: any) => cl(err)
    })
//Example no:14
enum category {
    Electronics = "Electronics",
    Fashion = "Fashion",
    Sports = "Sports",
    Beauty = "Beauty"
}
interface Iproduct {
    id: number,
    name: string,
    price: number,
    color: color,
    quantity: number,
    category: category
}
let product1: Iproduct = {
    id: 501,
    name: "Keyboard",
    price: 1500,
    color: color.Blue,
    quantity: 10,
    category: category.Electronics
};
let product2: Iproduct = {
    id: 502,
    name: "Mouse",
    price: 500,
    color: color.Black,
    quantity: 15,
    category: category.Electronics
};

let productArr: Array<Iproduct> = [product1, product2]

// function fetchProducts():Promise<Iproduct[]>{
//     return Promise.resolve(productArr)
// }

// fetchProducts()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleProduct(id : number):Promise<Iproduct>{
//     return Promise.resolve(product1)
// }

// fetchSingleProduct(501)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchProducts(): Observable<Iproduct[]> {
    return of(productArr)
}

fetchProducts()
    .subscribe({
        next: (res: Array<Iproduct>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleProduct(id: number): Observable<Iproduct> {
    return of(product2)
}

fetchSingleProduct(501)
    .subscribe({
        next: (res: Iproduct) => cl(res),
        error: (err: any) => cl(err)
    })
//Example no:15
enum student {
    Present = "Present",
    Absent = "Absent",
    Leave = "Leave"
}
interface Iattendance {
    employeeName: string,
    date: string,
    status: student,
    workingHours: number
}
let attendance1: Iattendance = {
    employeeName: "Vikas",
    date: "2026-10-23",
    status: student.Present,
    workingHours: 8
};
let attendance2: Iattendance = {
    employeeName: "Vedik",
    date: "2022-08-28",
    status: student.Absent,
    workingHours: 6
};
let attendanceArr: Array<Iattendance> = [attendance1, attendance2]

// function fetchAttendances():Promise<Iattendance[]>{
//     return Promise.resolve(attendanceArr)
// }
// fetchAttendances()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleAttendance(status : student):Promise<Iattendance>{
//     return Promise.resolve(attendance2)
// }
// fetchSingleAttendance(student.Absent)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchAttendances(): Observable<Iattendance[]> {
    return of(attendanceArr)
}
fetchAttendances()
    .subscribe({
        next: (res: Array<Iattendance>) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleAttendance(status: student): Observable<Iattendance> {
    return of(attendance1)
}
fetchSingleAttendance(student.Present)
    .subscribe({
        next: (res: Iattendance) => cl(res),
        error: (err: any) => cl(err)
    })


//Example no:16
enum shoppingUser {
    ADMIN = "ADMIN",
    BUYER = "BUYER",
    SELLER = "SELLER"
}
type address = {
    city: string,
    state: string,
    pincode: number
}
interface IshoppingUser {
    id: number,
    name: string,
    role: shoppingUser,
    address: address

}
let shoppingUser1: IshoppingUser = {
    id: 101,
    name: "Aakash",
    role: shoppingUser.ADMIN,
    address: {
        city: 'Bharuch',
        state: 'Gujrat',
        pincode: 425360
    }
};

let shoppingUser2: IshoppingUser = {
    id: 102,
    name: "Hituh",
    role: shoppingUser.BUYER,
    address: {
        city: 'Indor',
        state: 'MP',
        pincode: 425364
    }
};

let shoppingUserArr: Array<IshoppingUser> = [shoppingUser1, shoppingUser2]

// function fetchShoppingUsers():Promise<IshoppingUser[]>{
//     return Promise.resolve(shoppingUserArr);
// }

// fetchShoppingUsers()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleShoppingUser(id : number):Promise<IshoppingUser>{
//     return Promise.resolve(shoppingUser1);
// }

// fetchSingleShoppingUser(101)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchShoppingUsers(): Observable<IshoppingUser[]> {
    return of(shoppingUserArr);
}

fetchShoppingUsers()
    .subscribe({
        next: (res: IshoppingUser[]) => cl(res),
        error: (err: any) => cl(err)
    })
function fetchSingleShoppingUser(id: number): Observable<IshoppingUser> {
    return of(shoppingUser1);
}

fetchSingleShoppingUser(101)
    .subscribe({
        next: (res: IshoppingUser) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:17
enum inventory {
    IN_STOCK = "IN_STOCK",
    LOW_STOCK = "LOW_STOCK",
    OUT_OF_STOCK = "OUT_OF_STOCK"
}
interface Iinventory {
    productId: number,
    name: string,
    price: number,
    stock: number,
    status: inventory,
}
let inventory1: Iinventory = {
    productId: 501,
    name: "Mouse",
    price: 800,
    stock: 5,
    status: inventory.LOW_STOCK,
};

let inventory2: Iinventory = {
    productId: 502,
    name: "Keyboard",
    price: 1500,
    stock: 10,
    status: inventory.OUT_OF_STOCK,
};

let inventoryArr: Array<Iinventory> = [inventory1, inventory2]
// function fetchInventorys():Promise<Iinventory[]>{
//     return Promise.resolve(inventoryArr);
// }
// fetchInventorys()
//     .then(res=> cl(res))
//     .catch(err => cl(err))

// function fetchSingleInventory(id : number):Promise<Iinventory>{
//     return Promise.resolve(inventory1);
// }
// fetchSingleInventory(501)
//     .then(res=> cl(res))
// .catch(err => cl(err))

function fetchInventorys(): Observable<Iinventory[]> {
    return of(inventoryArr);
}
fetchInventorys()
    .subscribe({
        next: (res: Iinventory[]) => cl(res),
        error: (err: any) => cl(err)
    })


function fetchSingleInventory(id: number): Observable<Iinventory> {
    return of(inventory1);
}
fetchSingleInventory(501)
    .subscribe({
        next: (res: Iinventory) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:18
interface IemployeeProfile {
     id: number,
    name: string,
    email: string,
    phone: string,
    skills: string[],
    experience: number
}
let employeeProfile1 : IemployeeProfile = {
    id: 102,
    name: "Karan",
    email: "karan@example.com",
    phone: "9876543210",
    skills: ["Angular", "RxJS", "TypeScript"],
    experience: 3
};
let employeeProfile2 : IemployeeProfile = {
    id: 103,
    name: "kiran",
    email: "kiran@example.com",
    phone: "9876543252",
    skills: ["Angular", "RxJS", "TypeScript","Node.js"],
    experience: 3
};
let employeeProfileArr : Array<IemployeeProfile> = [employeeProfile1,employeeProfile2];

// function fetchEmployeeProfiles():Promise<IemployeeProfile[]>{
//     return Promise.resolve(employeeProfileArr);
// }
// fetchEmployeeProfiles()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleEmployeeProfile():Promise<IemployeeProfile>{
//     return Promise.resolve(employeeProfile2);
// }
// fetchSingleEmployeeProfile()
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchEmployeeProfiles():Observable<IemployeeProfile[]>{
    return of(employeeProfileArr);
}
fetchEmployeeProfiles()
    .subscribe({
        next: (res: IemployeeProfile[]) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleEmployeeProfile():Observable<IemployeeProfile>{
    return of(employeeProfile2);
}
fetchSingleEmployeeProfile()
   .subscribe({
        next: (res: IemployeeProfile) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:19
interface IcartItem {
    productId: number,
    productName: string,
    price: number,
    quantity: number,
    discount: number
}
let cartItem1 : IcartItem = {
    productId: 1001,
    productName: "Headphones",
    price: 2500,
    quantity: 2,
    discount: 10
};

let cartItem2 : IcartItem = {
    productId: 1002,
    productName: "Charger",
    price: 500,
    quantity: 5,
    discount: 5
};

let cartItemArr : Array<IcartItem> = [cartItem1,cartItem2]

// function fetchCartItems():Promise<IcartItem[]>{
//     return Promise.resolve(cartItemArr);
// }
// fetchCartItems()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleCartItem(ProductId : number):Promise<IcartItem>{
//     return Promise.resolve(cartItem2);
// }
// fetchSingleCartItem(1002)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchCartItems():Observable<IcartItem[]>{
    return of(cartItemArr);
}
fetchCartItems()
    .subscribe({
        next: (res: IcartItem[]) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleCartItem(productId: number):Observable<IcartItem>{
    return of(cartItem1);
}
fetchSingleCartItem(1001)
    .subscribe({
        next: (res: IcartItem) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:20
enum payment {
    CASH = "CASH",
    UPI = "UPI",
    CARD = "CARD",
    NET_BANKING = "NET_BANKING"
}
enum paymentStatus {
    SUCCESS = "SUCCESS",
    FAILED  = "FAILED",
    PENDING = "PENDING"
}
interface Ipayment {
    transactionId: string,
    amount: number,
    mode: payment, 
    status: paymentStatus, 
    date: string
}

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

let paymentArr : Array<Ipayment> = [payment1,payment2];

// function fetchPayments():Promise<Ipayment[]>{
//     return Promise.resolve(paymentArr);
// }
// fetchPayments()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSinglePayment(transactionId : string):Promise<Ipayment>{
//     return Promise.resolve(payment2);
// }
// fetchSinglePayment("TXN1002")
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchPayments():Observable<Ipayment[]>{
    return of(paymentArr);
}
fetchPayments()
    .subscribe({
        next: (res: Ipayment[]) => cl(res),
        error: (err: any) => cl(err)
    })
function fetchSinglePayment(transactionId : string):Observable<Ipayment>{
    return of(payment2);
}
fetchSinglePayment("TXN1002")
   .subscribe({
        next: (res: Ipayment) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:21
enum patient {
    ADMITTED = "ADMITTED",
    DISCHARGED = "DISCHARGED",
    UNDER_TREATMENT = "UNDER_TREATMENT"
}
type Tpatient = {
    name : string,
    specialization : string
}
interface Ipatient {
    patientId: number,
    name: string,
    age: number,
    status: patient,
    doctor: Tpatient
}
let patient1 : Ipatient = {
    patientId: 301,
    name: "Suresh",
    age: 45,
    status: patient.ADMITTED,
    doctor: {
        name: "Dr. Mehta",
        specialization: "Cardiology"
    }
};

let patient2 : Ipatient = {
    patientId: 302,
    name: "Mukesh",
    age: 35,
    status: patient.DISCHARGED,
    doctor: {
        name: "Dr. Kumar",
        specialization: "Neurologist"
    }
};

let patientArr : Array<Ipatient> = [patient1,patient2];

// function fetchPatients():Promise<Ipatient[]>{
//     return Promise.resolve(patientArr);
// }
// fetchPatients()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSinglePatient(patientId : number):Promise<Ipatient>{
//     return Promise.resolve(patient2);
// }
// fetchSinglePatient(123)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchPatients():Observable<Ipatient[]>{
    return of(patientArr);
}
fetchPatients()
   .subscribe({
        next: (res: Ipatient[]) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSinglePatient(patientId : number):Observable<Ipatient>{
    return of(patient1);
}
fetchSinglePatient(301)
    .subscribe({
        next: (res: Ipatient) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:22
enum libraryBook {
    AVAILABLE = "AVAILABLE",
    ISSUED = "ISSUED",
    LOST = "LOST"
}
interface IlibraryBook {
    id: number,
    title: string,
    author: string,
    status: libraryBook
    tags: [string,string]
}
let libraryBook1 : IlibraryBook = {
    id: 501,
    title: "Clean Code",
    author: "Robert Martin",
    status: libraryBook.AVAILABLE,
    tags: ["Programming", "Software Design"]
};
let libraryBook2 : IlibraryBook = {
    id: 502,
    title: "Clean Code",
    author: "Robert Martin",
    status: libraryBook.ISSUED,
    tags: ["Programming", "Software Design"]
};

let libraryBookArr : Array<IlibraryBook> = [libraryBook1,libraryBook2];

// function fetchLibraryBooks():Promise<IlibraryBook[]>{
//     return Promise.resolve(libraryBookArr);
// }
// fetchLibraryBooks()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleLibraryBook(id : number):Promise<IlibraryBook>{
//     return Promise.resolve(libraryBook1);
// }
// fetchSingleLibraryBook(501)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchLibraryBooks():Observable<IlibraryBook[]>{
    return of(libraryBookArr);
}
fetchLibraryBooks()
    .subscribe({
        next: (res: IlibraryBook[]) => cl(res),
        error: (err: any) => cl(err)
    })
    
function fetchSingleLibraryBook(id : number):Observable<IlibraryBook>{
    return of(libraryBook2);
}
fetchSingleLibraryBook(502)
   .subscribe({
        next: (res: IlibraryBook) => cl(res),
        error: (err: any) => cl(err)
    })

//Example no:23
enum foodOrder {
    PLACED = "PLACED",
    PREPARING = "PREPARING",
    READY = "READY",
    DELIVERED = "DELIVERED"
}
interface IfoodOrder {
    orderId: number,
    customerName: string,
    items: [string,string,string],
    totalAmount: number,
    status: foodOrder, 
}
let foodOrder1 : IfoodOrder = {
    orderId: 7001,
    customerName: "Neha",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 650,
    status: foodOrder.PREPARING, 
};
let foodOrder2 : IfoodOrder = {
    orderId: 7002,
    customerName: "Rupa",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 750,
    status: foodOrder.READY, 
};

let foodOrderArr : Array<IfoodOrder> = [foodOrder1,foodOrder2];
// function fetchFoodOrders():Promise<IfoodOrder[]>{
//     return Promise.resolve(foodOrderArr);
// }
// fetchFoodOrders()
//     .then(res => cl(res))
//     .catch(err => cl(err))

// function fetchSingleFoodOrder(id : number):Promise<IfoodOrder>{
//     return Promise.resolve(foodOrder1);
// }
// fetchSingleFoodOrder(7001)
//     .then(res => cl(res))
//     .catch(err => cl(err))

function fetchFoodOrders():Observable<IfoodOrder[]>{
    return of(foodOrderArr);
}
fetchFoodOrders()
    .subscribe({
        next: (res: IfoodOrder[]) => cl(res),
        error: (err: any) => cl(err)
    })

function fetchSingleFoodOrder(id : number):Observable<IfoodOrder>{
    return of(foodOrder2);
}
fetchSingleFoodOrder(7001)
    .subscribe({
        next: (res: IfoodOrder) => cl(res),
        error: (err: any) => cl(err)
    })