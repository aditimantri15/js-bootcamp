let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('apaassssasafsdvd'))