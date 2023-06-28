/*6. Imagine you have array of integer from 1 to 100 , the numbers are randomly ordered
, one number from 1 to 100 is missing , Please write the code for finding the missing
number*/

let a = [
  /* array of integers from 1 to 100 with one number missing */
]
let missingNumber = null
for (let i = 1; i <= 100; i++) {
  if (a.includes(i) === false) {
    missingNumber = i
    break
  }
}
console.log(missingNumber)
