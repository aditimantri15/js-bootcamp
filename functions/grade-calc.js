const getGrade = function(percent) {
    if( percent >= 90 )
    return 'A'
    else if( percent >= 80 )
    return 'B'
    else if( percent >= 70 )
    return 'C'
    else if( percent >= 60 )
    return 'D'
    else
    return 'F'
}

const calculateGrade = function(studentScore, totalScore) {
    const percent = studentScore / totalScore * 100; 
    return `You got a ${getGrade(percent)} (${percent}%)!`
}

console.log(calculateGrade(15, 20))
