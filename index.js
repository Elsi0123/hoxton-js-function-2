console.log('Users:', users)
console.log('todos:', todos)





const letter = String(prompt('Enter a letter:'))

let usersWithLetter = users.filter(user =>
  user.name.toLowerCase().includes(letter.toLowerCase())
)

let i = 0




let intervalId = setInterval(() => {
  let user = usersWithLetter[i]
  if (user) {
    console.log(`Hi ${user.name}!`)
    i++
  } else {
    clearInterval(intervalId)
  }
}, 2000)






let userId = Number(prompt('Enter a user ID:'))

let incompleteUserTodos = todos
  .filter(todo => todo.userId === userId && todo.completed === false)
  .map(todo => todo.title)


console.log(incompleteUserTodos)
