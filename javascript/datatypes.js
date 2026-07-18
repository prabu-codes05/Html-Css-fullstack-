// variables(can store any type of datatypes)

//var - function scope (if it is declared once it can be redeclared twice)
var a =10;
console.log(a)

var b //if no value is defined then it shows undefined except error
console.log(b)

//let- block scope (if it is declared once it can't be rdeclared twice)
let c=300;
console.log(c)

let d=400;
console.log(d)

//variable name doesnot start with a number
//variable name cannot be set by predefined keywords
//let true = "true"

let $ = 90
console.log($)

//const -blocked scope (it cannot be redeclared and cannot be reassigned also)

const name = "prabesh" //string ma matlab hudaina
console.log(name)

const name =33// aba numeric value dida lagi pheri name varaible use garna mildena const ma
console.log(name)

// data Types

// number
console.log(123)
// boolean
console.log(true);

// string
console.log("Bijay Don")
// null
console.log(null)
// undefined
console.log(undefined)
// symbol
let aa = Symbol("Hello")
let cc = Symbol("Hello")

console.log(aa == cc)
// bigint
let vals = 872374528345283465238745234n
console.log(typeof(vals))
