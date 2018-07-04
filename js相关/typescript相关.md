1.  enum 是可以用来表示 string 类型的不规则索引的数组，也可以通过值拿对应的索引

```js
enum Color{
  Red,
  Blue = 2,
  Green
}
console.log(Color.Red) // 0
console.log(Color[3]) // Green
```

2.  接口可以声明可选属性和只读属性

```js
interface Label {
  optionalProp?: string;
  readonlyProp: string;
}
```

3.  对于函数字面量形式传参，typescript 会进行额外的类型检查，判断传入的参数跟定义的参数名字是否一致，不一致则会报错，无论这个参数是否可选，可以采用断言或者变量赋值解决这个问题

```js
interface Square {
  width?: number;
  height?: number;
}
function printSize(params: Square) {
  console.log(params.width, params.height)
}
printSize({ width: 100, heiggt: 100 }) // 错误
printSize({ width: 100, heiggt: 100 } as Square) // 正确
const params = { width: 100, heiggt: 100 }
printSize(params) // 正确
```

4.  接口也可以用来定义函数类型

```js
interface Functiontype {
  (firstParam: string, secondParam: number): boolean;
}

const testFunction = (a, b) => {
  return a > b
}
// a, b 参数的名字不必与声明的接口名字一致，只要类型匹配即可
```

5.索引类型/索引分两种: 数字索引和字符串索引。数字索引返回的类型必须跟字符串索引兼容（子类型或者跟字符串索引返回的相同），因为数字索引在执行的时候会被转换成字符串再去索引对应的值

```js
interface Dictionarytype {
  [index: number]: string;
}

const arr: Dictionarytype = [1, 2] // 错误，索引签名不匹配
const arr: Dictionarytype = ['1', '2'] // 正确
```

6.参数属性

构造器内用访问限定符声明参数时相当于给当前类增加一个受限定的属性

```js
class Animal {
  constructor(private name: string) {
    this.name = name
  }
}
// 等价于
class Animal {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}
```

7.抽象类

抽象类中可以包含具体实现的方法，但是抽象类中的抽象方法必需在派生类中实现

```js
abstract class Animal {
  abstract makeSound(): void // 只能在派生类中实现

  say() {
    console.log('I am talking')
  }
}
```

8.TypeScript 结构化类型系统的基本规则是，如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性。
