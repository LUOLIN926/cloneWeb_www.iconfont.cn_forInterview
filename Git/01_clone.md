# 01_clone
---
### 1. 检查git安装
   ```Bash
   git --version 
   ```
   如果看到类似 git version 2.xx.x 的输出，说明已安装
   如果提示 “command not found”，请先安装 Xcode Command Line Tools（只需在终端运行 xcode-select --install，按提示安装即可）

### 2. 下载克隆到桌面
   ```Bash
   cd ~/Desktop
   git clone https://github.com/LUOLIN926/FrontEnd_AlibabaVectorDatabaseReplicationProject_ForInterview.git
   ```
   输出
   ```Text
   Cloning into 'FrontEnd_AlibabaVectorDatabaseReplicationProject_ForInterview'...
   remote: Enumerating objects: 12, done.
   remote: Counting objects: 100% (12/12), done.
   ...
   ```
   桌面出现对应文件夹
