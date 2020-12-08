let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Offer Vegan")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Offer some Vegan")
} else {
    console.log("Offer anything")
}