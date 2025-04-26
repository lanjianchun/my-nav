导航网站平台

参照项目：https://github.com/fre123-com/fre123-nav

导航链接来源：通过mcp读取我chrome浏览器中的所有收藏链接，并进行规整分类

界面风格要符合苹果公司的，简约大气，页面响应速度要快

我后续要上传到github上，采用传统的html\css\javascript架构，通过github pages进行部署，请给我部署的步骤

---

## 使用说明

### 1. 导出 Chrome 收藏夹

- 运行 `export_chrome_bookmarks.py` 脚本，自动生成 `bookmarks.json` 文件：
  ```bash
  python3 export_chrome_bookmarks.py
  ```
- 也可手动将 Chrome 收藏夹导出为 HTML，再转换为 JSON 格式（推荐用脚本自动化）。

### 2. 本地预览

- 推荐使用 VSCode 的 Live Server 插件，或用 Python 启动本地服务器：
  ```bash
  cd guide
  python3 -m http.server 8000
  ```
- 在浏览器访问 `http://localhost:8000` 查看效果。

### 3. 部署到 GitHub Pages

1. 新建 GitHub 仓库，将 `guide` 文件夹下所有文件上传到仓库根目录。
2. 在 GitHub 仓库设置中，找到 Pages 选项，选择 `main` 分支和 `/ (root)` 目录，保存。
3. 稍等片刻，访问分配的 GitHub Pages 地址即可。

---

如需更新收藏夹，重新运行脚本并上传最新的 `bookmarks.json` 覆盖即可。