# 02_update
---
### 1. 完成克隆操作、修改文件

### 2. 进入文件夹
   ```Bash
   cd ~/Desktop/FrontEnd_AlibabaVectorDatabaseReplicationProject_ForInterview
   ```

### 3. 推送修改
   a. 查看哪些文件被修改了
   ```Bash
   git status
   ```

   b. 添加所有修改的文件到暂存区
   ```Bash
   git add .
   ```

   c. 提交更改（写一个简短说明）
   ```Bash
   git commit -m "更新了项目文件"
   ```

   d. 推送到 GitHub
   ```Bash
   git push origin main
   ```

   >⚠️ 注意：如果你的仓库默认分支是 master 而不是 main，请把上面的 main 换成 master。

   ### 4. 输入 GitHub 账号和 Token
   终端会弹出窗口或提示：
   ```Text
   Username for 'https://github.com': 
   Password for 'https://LUOLIN926@github.com':
   ```
   >还没有 Token，请按以下步骤生成：
   访问：https://github.com/settings/tokens
   点击 "Generate new token" > "Generate new token (classic)"
   填写：Note: My Git Token
   勾选 repo（全选即可）
   点击 Generate token

   显示
   ```Text
   Enumerating objects: ...
   Writing objects: 100% ...
   To https://github.com/LUOLIN926/...
      abc123..def456  main -> main
   ```
   说明成功

