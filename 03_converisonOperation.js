// Datatype conversion : one to another

let score1 = "32"
let score2 = "32abc" // NaN
let isWin = true
let isloss = false

// Number Conversion
console.table([Number(score1), 
               Number(score2), 
               Number(isWin), 
               Number(isloss), 
               typeof NaN,
               Number(undefined),
               typeof undefined
            ])

// Boolean Conversion
console.log(Boolean(score1))
console.log(Boolean(""))

console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(0))

// String conversion

console.table([String(true), 
    String(false), 
    String(1),
    String(0), 
    String(null), 
    String(undefined)
 ])

