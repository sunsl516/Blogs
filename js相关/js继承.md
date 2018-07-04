1.  原型继承

```javascript
function Animal(name) {
  this.name = name
  this.children = ['dog', 'chicken', 'pig']
  this.sleep = function() {
    console.log(`${this.name} sleeped`)
  }
}

function Dog(name) {
  this.name = name
  this.age = age
}

// 复制原型属性
Dog.prototype = new Animal()

const dog1 = new Dog('wangcai')
const dog2 = new Dog('xiaohei')
console.log(dog1.name)
console.log(dog1.children)
dog1.sleep()
```

缺点：1. 不能多继承 2.引用属性会共享 3.无法向父构造器传参

2.  构造继承

```javascript
function Pig(name) {
  Animal.call(this, name)
}

const pig = new Pig('xiaozhu')
pig.sleep()
```

缺点：1. 只能继承自有属性 2. 无法与父级建立继承关系（instanceof 返回 false）

3.  组合继承

```javascript
function Chicken(name) {
  Animal.call(this, name)
}

Chicken.prototype = Animal.prototype

const chicken = new Chicken('a chicken')
console.log(chicken instanceof Animal)
console.log(chicken instanceof Chicken)
```

避免了上述所有的缺点

4.  es6 继承

```js
class Elephant extends Animal {
  constructor(name, sex) {
    super(name)
    this.sex = sex
  }

  yell() {
    console.log(`I am a ${this.sex} elephant!`)
  }
}

const elephant = new Elephant('xiaoxiang', 'masculine')
console.log(elephant.name)
elephant.yell()
```
