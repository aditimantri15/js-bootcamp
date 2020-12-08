let restaurant = {
    name : 'Resto',
    guestCapacity : 100,
    guestCount : 0,
    checkAvailability : function(partySize) {
        return this.guestCapacity-this.guestCount >= partySize
    },
    seatParty : function(partySize) {
        this.guestCount += partySize
    },
    removeParty : function(partySize) {
        this.guestCount -= partySize
    }
}

restaurant.seatParty(75)
console.log(restaurant.checkAvailability(25))
restaurant.seatParty(10)
console.log(restaurant.checkAvailability(25))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(19))
