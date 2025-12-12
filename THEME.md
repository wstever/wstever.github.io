# 主题说明

本博客使用的是 `material-indigo` 主题，通过 CDN 加载。

## 主题配置

主题通过以下方式加载：
- CSS: `//unpkg.com/hexo-theme-material-indigo@latest/css/style.css`
- JS: `//unpkg.com/hexo-theme-material-indigo@latest/js/main.min.js`

## 本地开发

如果你需要在本地使用主题，可以：

1. 安装主题到 `themes/` 目录：
```bash
git clone https://github.com/yscoder/hexo-theme-indigo.git themes/material-indigo
```

2. 或者通过 npm 安装：
```bash
npm install hexo-theme-material-indigo
```

3. 在 `_config.yml` 中配置主题：
```yaml
theme: material-indigo
```

## GitHub Actions 部署

当前配置使用 CDN 加载主题，所以不需要在仓库中包含主题文件。如果 GitHub Actions 构建时需要本地主题，请取消注释 `_config.yml` 中的主题配置，并确保主题文件存在于 `themes/` 目录。


