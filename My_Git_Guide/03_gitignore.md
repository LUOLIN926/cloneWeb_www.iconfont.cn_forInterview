# 03_gitignore
>用于防止不需要的隐藏文件进入git仓库
---
### 1. 进入本地项目文件夹
```Bash
cd ~/Desktop/FrontEnd_AlibabaVectorDatabaseReplicationProject_ForInterview
```

### 2. 移除不需要的文件（如.DS_Store）
- 如果只有根目录有 .DS_Store：
```Bash
git rm --cached .DS_Store
```
- 如果子文件夹里也有：
```Bash
find . -name ".DS_Store" -exec git rm --cached {} \;
```
>这条命令会自动找到项目里所有 .DS_Store 并从 Git 中移除

### 3. 添加不需要的文件（如.DS_Store）到.gitignore

为了防止以后再次提交，设立```.gitignore```

```Bash
# 在项目根目录的 .gitignore 文件中添加规则
echo ".DS_Store" >> .gitignore
```
>如果你还没有 .gitignore 文件，这条命令会自动创建一个

### 4. 提交更改、推送到 GitHub
```Bash
# 查看状态（确认 .DS_Store 已被移除，.gitignore 已添加）
git status

# 添加 .gitignore 文件
git add .gitignore

# 提交
git commit -m "清理并忽略 .DS_Store 文件"

#推送
git push origin main
```
仓库里面出现了一个```.gitignore```的文件，则成功

### 5. 添加忽略规则（如再想要忽略.vscode）
#### a. 从 Git 中移除子文件夹里的 .vscode

打开 终端（Terminal），进入你的项目根目录（假设在桌面）：
```Bash
cd ~/Desktop/FrontEnd_AlibabaVectorDatabaseReplicationProject_ForInterview
```
然后运行：
```Bash
# 从 Git 中移除 Interview Preparation/.vscode（保留本地文件）
git rm -r --cached "Interview Preparation/.vscode"
```
>⚠️ 注意：若文件夹名包含空格，必须加英文双引号，否则会报错。

#### b. 在```.gitignore```中忽略它
运行以下命令：
```Bash
# 忽略特定子文件夹下的 .vscode
echo "Interview Preparation/.vscode/" >> .gitignore
```
提交更改

```Bash
# 查看状态（确认 .vscode 已被移除，.gitignore 已更新）
git status

# 添加 .gitignore 文件
git add .gitignore

# 提交
git commit -m "忽略 Interview Preparation/.vscode"

# 推送到 GitHub
git push origin main
```

#### c. 如果你希望忽略所有子文件夹中的 .vscode（更通用），可以把 .gitignore 规则改成：
```Bash
# 用 nano 编辑器打开
nano .gitignore
```
删除```Interview Preparation/.vscode/```这一行，在文件末尾加上```.vscode/```
- 按```Ctrl + O```→ 回车（保存）
- 按```Ctrl + X```（退出）

看到的这个提示：
```Text
Save modified buffer (ANSWERING "No" WILL DESTROY CHANGES) ?
                    Y Yes
^C Cancel           N No
```
- 按键盘上的 Y（Yes）
- 回车

然后继续执行后续 Git 命令：
```Bash
# 1. 添加修改后的 .gitignore
git add .gitignore

# 2. 提交
git commit -m "忽略 Interview Preparation/.vscode"

# 3. 推送到 GitHub
git push origin main
```
验证是否保存成功

运行以下命令查看 .gitignore 内容：
```Bash
cat .gitignore
```
看到类似：
```Text
.DS_Store
Interview Preparation/.vscode/
```
说明保存成功 ✅




