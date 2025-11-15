# 前端开发：iconfont.com 网站复刻

## 1. 项目成果简介

### a. 页面设计

- 首页
- 详情页
- 购物车侧栏

### b. 交互设计

- 悬停动画
- tab
- dropdown
- 悬浮球
- 购物车计数器+侧栏

## 2. 项目技术简介

### 2.1 HTML
- 基础结构标签
- 资源链接标签
- 语义化布局标签
- 导航和菜单标签
- 媒体标签
- 文本标签
- 表单标签


### 2.2 CSS
- 布局工具：弹性布局、网格布局、定位布局、浮动布局
- 盒模型
- 显示控制
- 媒体查询
- 线性渐变: `background-image: linear-gradient()`
- 圆角和边框
- 过渡效果: `transition: all 0.3s ease`, `transition: transform .3s ease-in-out`
- 变换效果: `transform: translateX(100%)`, `transform: scale(1.05)`
- 交互效果
  - 悬停效果: `:hover`伪类
  - 当前状态: `.current`类
  - 光标样式: `cursor: pointer`
  - 定位和层级

### 2.3 JavaScript
#### a. DOM操作技术
- 元素选择: `document.querySelector()`、`document.getElementById()`等
- 事件处理: `addEventListener()`添加各种事件监听器
- 类操作: `classList.add()`、`classList.remove()`、`classList.toggle()`等
- 样式控制: 直接修改元素的`style`属性

#### b. 事件驱动编程
- 鼠标事件: `mouseenter`、`mouseleave`、`click`等
- 键盘事件: `keydown`事件处理（如ESC键关闭购物车）
- 滚动事件: `scroll`事件控制悬浮球显示
- 页面加载事件: `DOMContentLoaded`确保DOM完全加载后执行代码

#### c. 存储技术
- sessionStorage: 用于保存用户的收藏和购物车状态
- 数据保存: `setItem()`、`getItem()`、`removeItem()`操作存储数据

#### d. 事件委托
- 使用`document.addEventListener`配合`event.target.closest()`实现事件委托
- 提高性能，减少事件监听器数量

#### e. 动画和过渡效果
- CSS过渡控制: 通过添加/移除CSS类控制动画效果
- 平滑滚动: `window.scrollTo()`的`behavior: 'smooth'`参数

#### f. 作用域管理
- 全局函数暴露: 通过`window.functionName`将函数暴露到全局作用域
  
### 2.4 Github
- markdown书写README文件
- 注册、建仓、更新仓库、版本管理、克隆仓库
- 在vscode中操作github仓库
- 学习Git的基本命令git init、git add、git commit、git push、git ignore