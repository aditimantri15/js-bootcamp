const todos = ['Wake up', 'Freshen up', 'Eat', 'Work', 'Sleep']

todos.splice(2, 1)
todos.push('Repeat')
todos.shift()

console.log(`You have ${todos.length} todos`)

todos.forEach(function(todo, index) {
    console.log(`${index+1}. ${todo}`)
})

for (let i = 0; i < todos.length; i++) {
    console.log(`${i+1}. ${todos[i]}`)}