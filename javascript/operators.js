//operators

// Arthemetic Operators
let increment =10
console.log(increment++)
console.log(++increment)//it makes 10 to 11
let decrement =10
console.log(--decrement)
console.log(decrement--)

console.log(2**3) //exponential operator bhaneko 2 ko power ma 3 janxa that means 8 hunxa
//exponential operator ma 2 ota ** paxi j xa tyo power ma janxa

console.log(10%3) // remainder operator(remainder return garxa)

//comparision operator
console.log(10=="10")//checks only value
console.log(10==="10")//checks value as well as datatypes
console.log(2>2)//false
console.log(2>=2)//true
console.log(2<2)//false
console.log(2<=2)//true

//assignment operators
let pocketmoney = 400
pocketmoney += 100
pocketmoney -= 100
pocketmoney *= 2
pocketmoney /= 2
pocketmoney %= 2
pocketmoney **= 2
console.log(pocketmoney)

// logical Operators
console.log(true && false && true && true) // AND operator
console.log(true || false || true || true) // or operator

//ternary operators
console.log(3>2 ? "true":"false")
let age = 22
console.log(age>18?"adult":"not adult")
console.log(age>18?"can vote":"cannot vote")