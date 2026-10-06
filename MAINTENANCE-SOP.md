# MI² Lab 网站维护 SOP（标准操作流程）

> 适用对象：实验室指定维护人员（无需编程经验）。
> 网站技术栈：React + Vite，托管于 GitHub，push 到 `main` 分支后自动构建发布。
> 全部内容维护都可以通过 **github.com 网页**完成，无需在电脑安装任何软件。

---

## 0. 准备工作（一次性）

1. 注册 GitHub 账号（https://github.com → Sign up）；
2. 让仓库管理员把你加入本仓库（Settings → Collaborators）；
3. 建议收藏本仓库地址和本文件。

---

## SOP-1 发布一条新闻（最常用）

**Step 1 准备图片**
- 每个事件一个文件夹，图片命名 `img-01.jpg`、`img-02.jpg`……
- 图片要求：JPEG 格式，宽度不超过 1400px（手机导出的原图请先用预览/微信压缩），单张 < 500KB 为宜。

**Step 2 上传图片**
1. 打开仓库网页 → `public/assets/news-recent/` → 右上角 **Add file → Create new file**；
2. 文件名输入 `事件英文名/img-01.jpg`（输入 `/` 会自动建文件夹，事件名用英文小写短横线，如 `miccai-2027`）；
3. 这时是文本框——**图片要用 Add file → Upload files** 直接上传到对应文件夹。

**Step 3 添加文字条目**
1. 打开 `src/data/news-recent.json` → 右上角铅笔图标（Edit）；
2. 在数组**最前面**（`[` 之后）插入一条，格式如下（注意逗号）：

```json
{
  "id": "miccai-2027",
  "date": "2026-10",
  "title": { "en": "英文标题", "zh": "繁體標題", "ko": "한국어 제목" },
  "text": { "en": "英文一句简介", "zh": "繁體一句簡介", "ko": "한국어 한 줄 소개" },
  "images": [
    { "src": "assets/news-recent/miccai-2027/img-01.jpg", "portrait": false, "w": 1400, "h": 1050, "contain": false }
  ]
},
```

- `date` 格式 `YYYY-MM`，列表按日期倒序，请插入到正确位置；
- `portrait`：竖拍照片填 `true`；`contain`：横幅 logo／白底框架图填 `true`；
- `w`/`h`：图片像素宽高（Mac 上右键图片 → 简介 可查）。

**Step 4 提交**
页面底部 **Commit changes** → 选 **Commit directly to the main branch** → 提交。约 1–2 分钟后网站自动更新。

**Step 5 检查**
打开网站确认显示正常。若 5 分钟未更新，见 SOP-7（故障排查）。

---

## SOP-2 新闻归档（Recent → Previous / More）

- 有图片的旧新闻：把条目从 `news-recent.json` **剪切**到 `news-archive.json`（数组内任意位置，按日期倒序更好）；
- 无图片的旧新闻：剪切到 `news-more.json`（纯文字列表）；
- 图片文件夹保留在 `public/assets/` 中不要删。

## SOP-3 修改成员信息

1. 打开 `src/data/content.ts` → 找到 `PEOPLE` 数组；
2. 改姓名、职位、`degrees`（院校学位，每所学校一行）；
3. 换头像：上传新照片到 `public/assets/people/`（正方形裁剪、≤500KB），并修改对应 `photo` 路径；
4. 毕业／离职成员：把条目从当前分组移到 alumni 分组（数组位置决定显示分组，询问 maintainer 确认结构）。

## SOP-4 添加论文 / 专利

- 全部论文：`content.ts` → `ALL_PUBLICATIONS` 数组，格式 `{ year: 2026, text: '作者. 标题.', venue: '期刊/会议' }`，按年份新→旧插入；
- 精选论文卡片：`SELECTED_PUBLICATIONS` 数组 + 框架图上传至 `public/assets/selected/`（PNG，宽 ≤ 1400px），`href` 填 arXiv 链接；
- 专利：`PATENTS` 数组，每条 `{ text: { en, zh, ko } }`，插入到正确年份位置。

## SOP-5 修改界面文字（按钮、标题等）

打开 `src/data/i18n.ts`，找到对应键，按 `tr('英文', '繁體中文', '한국어')` 顺序修改引号内文字。**只改引号里的内容，不要动键名和逗号。**

## SOP-6 本地预览（可选，技术人员）

```bash
git clone <仓库地址>
cd mi2-lab-site
npm install
npm run dev      # http://localhost:5173 预览
npm run build    # 提交前务必确认构建通过
```

## SOP-7 故障排查

| 症状 | 处理 |
|---|---|
| 提交后网站没变 | 等 2 分钟；查看仓库 Actions / Pages 部署状态是否绿色 |
| 部署失败（红叉） | 99% 是 JSON 格式错误：检查上一步编辑是否漏了逗号／引号；把文件内容贴到 jsonlint.com 校验 |
| 改坏了想恢复 | 仓库文件页 → 右上角 History → 找到出错那次 commit → 让 maintainer 执行 Revert |
| 图片不显示 | 检查 `src` 路径是否与文件夹完全一致（大小写敏感）、图片是否已上传成功 |

**不确定的操作请先问 maintainer，再动手。**

---

*最后更新：2026-10-07*
