let getTip = function (total, tipPercent = .2) {
    console.log(`Tip`)
    return `A ${tipPercent * 100}% on $${total} would be $${tipPercent * total}`
}

console.log(getTip(1000))
console.log(getTip(1000, .1))
console.log(getTip(.3))