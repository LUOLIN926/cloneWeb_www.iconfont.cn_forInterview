# 00_JavaScript引入方式

---

## 1. 内部引入

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        这个是H1标签
    </h1>
    <script>
        console.log('我是内连样式，在控制台输出')
    </script>
</body>
</html>
```

## 2. 外联引入

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 外联文件 -->
    <script src="./js/myjs.js"></script>
</head>
<body>
    <h1>
        这个是H1标签
    </h1>
    <script>
        console.log('我是内连样式，在控制台输出')
    </script>
</body>
</html>
```

```javascript
// myjs.js文件
console.log('我是外联样式')
```