---
title: ES2021中引入的5种JavaScript新特性
category: javascript
desc: ES2021中引入的5种JavaScript新特性
tag:
  - javascript
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/a45e15776eb3a60401833ad910606a49d7343346.jpeg
date: "2021-03-12"
---

### String.prototype.replaceAll

我要介绍的第一个新特性是`String.prototype.replaceAll()`，它将所有出现的字符串替换为另一个字符串值。
之前的`.replace()`方法默认情况下仅替换第一个字符串，其中多次替换需要使用正则表达式。现在，当我们使用`replaceAll()`时，我们将看到所有出现的字符串都被替换了。

```javascript
const catPhrase = "A cat sat on the cat mat";
const dogPhrase = catPhrase.replace("cat", "dog");
const dogPhraseAll = catPhrase.replaceAll("cat", "dog");
console.log(dogPhrase); // A dog sat on the cat mat
console.log(dogPhraseAll); // A dog sat on the dog mat
```

### Promise.any

`Promise.any`方法接受一个`Promise`数组作为参数，并且在第一个`Promise`状态是`Fulfilled` 后将立即返回。
这与`Promise.race`方法非常相似，但是有一个主要区别。 `Promise.race`主要关注于`Promise`数组中哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态,而`Promise.any`这个方法将会忽略掉所有被`reject`的 `promise`，直到第一个 `promise` 成功

```javascript
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error"), 1000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 4000);
});
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // Error
  });
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res); // 1
  })
  .catch((err) => {
    console.log(err);
  });
```

### Logical Assignment Operators(逻辑分配运算符)

逻辑赋值运算符提供了逻辑运算符和赋值表达式的组合， `ES2021`引入了以下两个新运算符：

- `||=`
- &&`=`

```javascript
// a ||= b, 如果 a 为 false , 把 b 赋值给 a，实际编译为 a || (a = b)
let a = "hello";
a ||= 10;
console.log(a); // hello

let b = "";
b ||= "world";
console.log(b); // world
// a &&= b, 如果 a 和 b 都为 true, 把 b 赋值给 a，实际编译为 a && (a = b)
let a = true;
a &&= "hello";
console.log(a); // hello

let b = false;
b &&= "world";
console.log(b); // false
```

### Numeric Separators 数值分隔符

数字分隔符引入了数字文字的分隔符，目的是使它们更易于阅读。在·ES2021·之前，我们将十亿写成如下：

```javascript
const billion = 1000000000;
```

问题在于，添加一个额外的零或丢失一个将非常容易。使用数字分隔符，我们可以通过添加下划线使数字更易于阅读。

```javascript
const billion = 1_000_000_000;
```

### Private Methods and Fields 私有方法和字段

当`ES2015`将`Class`引入`JavaScript`时，我们知道它并不能定义私有方法。 `ES2021`最终通过引入私有方法和私有字段来解决了这一遗漏。要表明方法或字段是私有的，您只需要在名称前使用井号（＃）。

```javascript
class ClassWithPrivate {
  static #a = 1;

  static Method() {
    return ClassWithPrivate.#a;
  }
}

// console.log(ClassWithPrivate.#a); // Private field '#a' must be declared in an enclosing class
console.log(ClassWithPrivate.Method()); // 1
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

const instance = new ClassWithPrivateField();
// console.log(instance.#privateField); // Private field '#privateField' must be declared in an enclosing class
```
