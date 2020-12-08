let makeGuess = function(num) {
    let min = 1
    let max= 5
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(random)
    return num === random
}

console.log(makeGuess(2))
console.log(makeGuess(2))
console.log(makeGuess(3))