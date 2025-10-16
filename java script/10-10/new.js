// const random = Math.random()*100
// console.log(random)


// let a= 25
// let ceil=Math.ceil(a)
// let floor=Math.floor(a)
// let round=Math.round(a)
// let abs=Math.abs(a)
// let trunc=Math.trunc(a)
// let sqrt=Math.sqrt(a)






// let b = [5, 20, 30, 92, 32, 72];
// let max = Math.max(...b);
// console.log(max); // Output: 92

// let max = Math.max(5, 20, 30, 92, 32, 72);
// console.log(max); // Output: 92





// console.log(ceil)
// console.log(floor)
// console.log(round)
// console.log(abs)
// console.log(trunc)
// console.log(sqrt)


// console.log(Math.abs(-7));
// console.log(Math.abs(7));  



// let person = {
//     name : "deepak",
//     age : 20,
//     gender : "male"

// }



// console.log(person.name)
// console.log(person.age)
// console.log(person.gender)


// console.log(person["name"])
// console.log(person["age"])
// console.log(person["gender"])



// const{
//     name,age,gender
// }=person
// console.log(name)
// console.log(age)


// person.name = "deepu"
// console.log(person)
// person.class ="bca"
// console.log(person)


// const a =
// {
//     name : "deepak",
//     rollNo : 12,
//     working : true,
// }

// let student = {
//   name: "Sahil",
//   marks: {
//     math: 95,
//     science: 90
//   }
// };

// console.log(student.marks.science);



// let person = {
//   name: "deepak",
//   age: 20,
//   city: "Ghumarwin"
// };

// console.log(person)



// let person = { "full name": "Sahil Kumar" };
// console.log(person["full name"]); // Sahil Kumar


// let student = {
//   "first name": "Sahil",
//   age: 20,
//   city: "ghumarwin",
//   "grade-level": "A"
// };

// // Access using dot notation
// console.log(student.age); // 20
// student.age=62;


// // Access using bracket notation
// console.log(student["first name"]); // Sahil
// console.log(student["grade-level"]); // A

// // Using variable
// let key = "age";
// console.log(student[key]); // 20

// // Updating value
// student["grade-level"] = "A+";
// console.log(student["grade-level"]); // A+
// student["age"] = 42;
// console.log(student["age"]);


// student.course = "BCA";
// student["rollNo"] = 101;
// console.log(student);




// student.age = 21;
// student["city"] = "Bilaspur";
// console.log(student.age); // 21
// console.log(student.city)


// let person = {
//   isStudent: true
// };

// console.log(person.isStudent); // true
// console.log(typeof person.isStudent); // boolean


// let person = {
//   hobbies: ["Reading", "Gaming", "Coding"]
// };

// console.log(person.hobbies);       // ["Reading", "Gaming", "Coding"]
// console.log(person.hobbies[2]);    // Gaming
// console.log(typeof person.hobbies); // 


// let student = {
//   name: "Sahil",                         // string
//   age: 20,                               // number
//   isPass: true,                          // boolean
//   spouse: null,                           // null
//   job: undefined,                        // undefined
//   subjects: ["Math", "JS", "Networking"], // array
//   greet: function() {                     // function
//     return `Hello, my name is ${this.name}`;
//   },
//   address: {                              // object
//     city: "Ghumarwin",
//     state: "Himachal Pradesh"
//   }
// };

// console.log(student.name);          // Sahil
// console.log(student.age);           // 20
// console.log(student.isPass);        // true
// console.log(student.spouse);        // null
// console.log(student.job);           // undefined
// console.log(student.subjects[2]);   // Networking
// console.log(student.greet());       // Hello, my name is Sahil
// console.log(student.address.city);  // Ghumarwin


// let student = {
//   name: "Sahil",                         // string
//   age: 20,                               // number
//   isPass: true,                          // boolean
//   spouse: null,                          // null
//   job: undefined,                        // undefined
//   subjects: ["Math", "JS", "Networking"], // array
//   greet: function() {                     // function
//     return `Hello, my name is ${this.name}`;
//   },
//   address: {                              // object
//     city: "Ghumarwin",
//     state: "Himachal Pradesh"
//   }
// };

// // Accessing properties using bracket notation
// console.log(student["name"]);            // Sahil
// console.log(student["age"]);             // 20
// console.log(student["isPass"]);          // true
// console.log(student["spouse"]);          // null
// console.log(student["job"]);             // undefined
// console.log(student["subjects"][2]);     // Networking
// console.log(student["greet"]());         // Hello, my name is Sahil
// console.log(student["address"]["city"]); // Ghumarwin

let name = "Deepak";   // variable declaration
const PI = 3.14;       // constant declaration
function greet() {     // function declaration
  console.log("Hello!");
}
greet()
   