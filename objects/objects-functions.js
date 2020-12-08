let tempConverter = function(temp) {
    return {
        fahrenheit : temp,
        celsius : (temp - 32) * 5 / 9,
        kelvin :  ((temp - 32) * 5 / 9 ) + 273.15
    }
}

console.log(tempConverter(74))
