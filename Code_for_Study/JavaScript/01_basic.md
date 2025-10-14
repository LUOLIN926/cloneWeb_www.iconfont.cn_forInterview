# JavaScript基本语法介绍

---

## 一、变量

JavaScript变量是用于存储数据值的容器，可保存数值、文本或表达式，通过命名标识实现数据引用。

### 声明方式
- `var`：早期JavaScript中的声明方式（存在作用域问题，不推荐在新代码中使用）
- `let`：ES6引入，声明的变量具有块级作用域（推荐使用）
- `const`：用于声明常量，值不能被修改

### 命名规则
- 变量名称需遵循大小写敏感规则（`y`和`Y`是两个不同的变量）
- 首字符须为字母、下划线或美元符号（`$`）
- 不能使用保留关键字

### 示例
```javascript
// 声明变量并赋值
let age = 25;          // 数字类型
let name = "张三";     // 字符串类型
const PI = 3.14;       // 常量

// 未赋值的变量
let score;             // 值为undefined
```

## 二、数据类型

JavaScript有7种基本数据类型：

### 基本类型
1. **String**：表示文本数据
   ```javascript
   let message = "Hello, World!";
   ```

2. **Number**：表示整数和浮点数值
   ```javascript
   let num = 10;
   let floatNum = 3.14;
   ```

3. **Boolean**：表示真假值，`true`或`false`
   ```javascript
   let isStudent = true;
   ```

4. **Undefined**：表示变量未赋值
   ```javascript
   let x;
   console.log(x); // 输出: undefined
   ```

5. **Null**：表示一个空值
   ```javascript
   let empty = null;
   ```

6. **Symbol**：ES6引入，用于创建唯一标识符
   ```javascript
   let id = Symbol("id");
   ```

7. **BigInt**：表示任意精度的整数
   ```javascript
   let bigNumber = 123456789012345678901234567890n;
   ```

### 引用类型
- **Object**：用于存储一组值
  ```javascript
  let person = { name: "张三", age: 25 };
  ```
- **Array**：数组类型
  ```javascript
  let fruits = ["apple", "banana", "orange"];
  ```
- **Function**：函数类型
  ```javascript
  function greet(name) {
    return "Hello, " + name;
  }
  ```

## 三、运算符

### 算术运算符
- `+`：加法
- `-`：减法
- `*`：乘法
- `/`：除法
- `%`：取模（求余数）

### 比较运算符
- `==`：等于（值相等，不检查类型）
- `===`：全等（值和类型都相等）
- `!=`：不等于
- `!==`：不全等
- `>`：大于
- `<`：小于
- `>=`：大于等于
- `<=`：小于等于

### 逻辑运算符
- `&&`：逻辑与（AND）
- `||`：逻辑或（OR）
- `!`：逻辑非（NOT）

### 赋值运算符
- `=`：简单赋值
- `+=`：加后赋值
- `-=`：减后赋值
- `*=`：乘后赋值
- `/=`：除后赋值

### 运算符优先级
从高到低：括号 > 一元运算符 > 乘除模 > 加减 > 比较 > 逻辑与 > 逻辑或 > 赋值

## 四、控制结构

### 1. 顺序结构
代码按顺序执行

### 2. 分支结构
#### if语句
```javascript
let score = 85;
if (score >= 90) {
  console.log("优秀");
} else if (score >= 80) {
  console.log("良好");
} else if (score >= 70) {
  console.log("中等");
} else {
  console.log("需要努力");
}
```

#### switch语句
```javascript
let day = 3;
switch (day) {
  case 1:
    console.log("星期一");
    break;
  case 2:
    console.log("星期二");
    break;
  case 3:
    console.log("星期三");
    break;
  default:
    console.log("其他日子");
}
```

### 3. 循环结构
#### for循环
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### while循环
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### do-while循环
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### 4. 控制语句
- `break`：终止循环
- `continue`：跳过当前迭代，继续下一次循环