// const modules = (function() {
//   let modules = []

//   function define(name, deps, fn) {
//     for (let i = 0; i < deps.length; i++) {
//       deps[i] = modules[deps[i]]
//     }
//     modules[name] = fn.apply(null, deps)
//   }

//   function get(name) {
//     return modules[name]
//   }

//   return {
//     define,
//     get
//   }
// })()

// modules.define('bar', [], function() {
//   function hello(word) {
//     console.log(`I am print the bar ${word}`)
//   }
//   return { hello }
// })

// modules.define('foo', ['bar'], function(bar) {
//   function hello(word) {
//     console.log(`I am print the foo ${word}`)
//     bar.hello(word)
//   }
//   return { hello }
// })

// const bar = modules.get('bar')
// const foo = modules.get('foo')
// bar.hello('hello world')
// foo.hello('hello world')

// const Singleton = function(name) {
//   this.name = name
//   this.instance = null
// }

// Singleton.prototype.getName = function() {
//   console.log(this.name)
// }

// const getSingleSingleton = (function() {
//   let instance = null

//   return function() {
//     if (!instance) {
//       return (instance = new Singleton('tom'))
//     }
//     return instance
//   }
// })()

// const singleInstance1 = getSingleSingleton()
// const singleInstance2 = getSingleSingleton()
// console.log(singleInstance1 === singleInstance2)

function Animal(name) {
  this.name = name
}

Animal.prototype.say = function() {
  console.log(`I am a ${this.name}`)
}

const proxySingleAnimal = (function() {
  let instance = null

  return function(name) {
    if (!instance) {
      return (instance = new Animal(name))
    }
    return instance
  }
})()

const dog = proxySingleAnimal('dog')
const horse = proxySingleAnimal('horse')
console.log(dog === horse)
