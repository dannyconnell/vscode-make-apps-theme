let people = [
  { name: 'John Smith', age: 32 },
  { name: 'Steve Jones', age: 27 }
]

function sayHelloToPeople() {
  people.forEach(person => {
    if (person.age >= 30) {
      alert('Hi ' + person.name + ' you\'re over 30 years old!')
    }
    else {
      alert('Hi ' + person.name + ' you\'re under 30 years old!')
    }
  })
}

sayHelloToPeople()