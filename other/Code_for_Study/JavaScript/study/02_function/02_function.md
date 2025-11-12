# 02_函数

---

## 1. 定义函数
```html
<body>
  <script>
    function hello() {
      console.log('Hello, world!');
    }

    hello();

    function hello_with_return() {
      return 'hello, world! - 返回值';
    }

    let a = hello_with_return();
    console.log(a);
    console.log(hello_with_return());

    function hello_with_params(name) {
      console.log('hello, ' + name);
    }

    hello_with_params('广东工业大学');
    hello_with_params('云屋');
  </script>
</body>
```

## 2.作用域

```javascript

let global_var = '全局变量';
function local_var_function() {
let local_var = '局部变量';
console.log('函数内打印全局变量：' + global_var);
console.log('函数内打印局部变量：' + local_var);
}

local_var_function();

console.log('全局打印全局变量：' + global_var);
//错误：console.log('全局打印局部变量：' + local_var);

```