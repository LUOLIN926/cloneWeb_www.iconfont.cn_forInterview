基本语法
```![替代文本](图片路径)```

1. 图片与 Markdown 文件在同一目录
    ```markdown
    ![示意图](diagram.png)
    ```

2. 图片在子目录中（如 images/）
    ```markdown
    ![示意图](images/diagram.png)
    ```

3. 图片在上级目录或其它目录
    ```markdown
    ![Logo](../assets/logo.jpg)
    ```
    >.. 表示“上一级目录”
    >../assets/logo.jpg 表示：先回到 docs/ 的上一级（即project/），再进入 assets/ 找 logo.jpg