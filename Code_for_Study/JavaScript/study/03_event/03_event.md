# 03_事件

---

## 1. HTML属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>03_event_demo</title>
    <script src="./myjs.js"></script>
</head>

<body>
    <button onclick="click_event()">
        点击我
    </button>

    <input type="text" onfocus="focus_event()" onblur="blur_event()">

</body>
</html>
```

```javascript
// 1.点击事件
function click_event(){
    alert('触发点击事件');
}

// 2.聚焦事件
function focus_event(){
    console.log('获取焦点');
}

// 3.失焦事件
function blur_event(){
    console.log('失去焦点');
}
```

## 2.DOM
>DOM（Document Object Model）
