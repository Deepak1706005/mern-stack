// const user = {
//     name :"deepak",
//     age : 22,
//     gender : "male"
// }
// const a = Object.keys(user)
// console.log(a)





// const b = Object.value(user)
// console.log(b)



// const c = Object.entries(user)
// console.log(c)




// const d = Object.fromEntries(user)
// console.log(d)


// const e = Object.value(user)
// console.log(e)

// Object.seal(user)
// user.city = "mohali"
// user.name = "rishi"
// console.log(user)




const user = {
    name : "deepak",
    city: "bilaspur"
}
const a = JSON.stringify(user)
console.log(a)
const b = JSON.parse(a)
console.log(b)
console.log(typeof(a))
console.log(typeof(b))