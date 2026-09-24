# MI² Lab 官方网站

Molecular Imaging & Intelligence Laboratory（MI² Lab），The Hong Kong Polytechnic University, Department of Health Technology and Informatics.

技术栈：React + TypeScript + Vite + Tailwind CSS。单页应用，支持中／英／韩三语切换。

---

## 目录结构（维护时只需要动这些地方）

```
mi2-lab-site/
├── public/assets/          # 所有图片资源
│   ├── hero/               # 首页顶部轮播图
│   ├── news-recent/        # Recent News 图片（每个事件一个文件夹）
│   ├── news/               # Previous News（存档）图片
│   ├── people/             # 成员头像
│   ├── selected/           # Selected Publications 框架图
│   ├── resources/          # Resources 卡片图
│   ├── facilities/         # 实验室设备图
│   └── bottom.jpg          # 页脚横幅背景
└── src/data/               # 所有文字内容（改内容基本只动这里）
    ├── news-recent.json    # Recent News 条目
    ├── news-archive.json   # Previous News 条目（有图的存档）
    ├── news-more.json      # More News 条目（纯文字）
    ├── content.ts          # 成员、论文、Resources、轮播、页脚等
    └── i18n.ts             # 界面文字三语翻译
```

---

## 常见维护操作

### 1. 添加一条新闻

1. 把图片放进 `public/assets/news-recent/<事件英文名>/`，命名 `img-01.jpg`、`img-02.jpg`…
   - 图片建议：JPEG，宽度 ≤ 1400px（太大加载慢）；
2. 在 `src/data/news-recent.json` 数组里加一条（按日期倒序排列）：

```json
{
  "id": "my-event",
  "date": "2026-10",
  "title": { "en": "…", "zh": "…", "ko": "…" },
  "text":  { "en": "…", "zh": "…", "ko": "…" },
  "images": [
    { "src": "assets/news-recent/my-event/img-01.jpg", "portrait": false, "w": 1400, "h": 1050, "contain": false }
  ]
}
```

- `portrait`：竖拍照片填 `true`（两侧留白边显示）；
- `contain`：横幅图/logo（宽高比 ≥ 1.9 或白底框架图）填 `true`，避免被裁切；
- `w`/`h` 填图片实际像素尺寸。

旧新闻下架：把条目从 `news-recent.json` 剪切到 `news-archive.json`（有图）或 `news-more.json`（无图，只显示文字列表）。

### 2. 修改成员信息

编辑 `src/data/content.ts` 里的 `PEOPLE` 数组；头像放 `public/assets/people/`。
PI 卡片可带 `profileUrl` 字段（整卡跳转官方主页）。

### 3. 添加论文

- 全部论文列表：`content.ts` 的 `ALL_PUBLICATIONS`（按年份，格式统一，不加粗）；
- 精选论文卡片：`content.ts` 的 `SELECTED_PUBLICATIONS`，框架图放 `public/assets/selected/`，`href` 填 arXiv 或会议链接。

### 4. 修改界面文字（三语）

`src/data/i18n.ts`，每个键按 `tr('English', '繁體中文', '한국어')` 顺序填写。

---

## 本地开发

```bash
npm install      # 首次
npm run dev      # 本地预览（http://localhost:5173）
npm run build    # 构建到 dist/（提交前请确认构建通过）
```

要求：Node.js ≥ 18。

## 部署

仓库推送到 GitHub 后，用 **Cloudflare Pages** 或 **GitHub Pages** 连接仓库即可自动构建发布：

- 构建命令：`npm run build`
- 输出目录：`dist`
- 每次 push 到 `main` 分支自动更新网站，无需手动操作。

## 协作建议

- 实验室指定 1 名 maintainer 负责合并修改；
- 其他成员通过 Pull Request 提交修改（直接在 github.com 网页上编辑 JSON、上传图片也可以，不一定要装本地环境）；
- 大图片原始素材请另外存放在实验室共享盘，仓库里只放压缩后的网页版本。
