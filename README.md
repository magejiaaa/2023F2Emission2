## [活動網址](https://2023.thef2e.com/news)

### 作品說明
The F2E 總統即時開票全台地圖

### 系統說明
專案運行方式是使用 npm install、npm run dev
打包 npm run build

gh-pages部署
```
git init
git add .
git commit -m "deploy"
git branch -M gh-pages
git push -u https://github.com/magejiaaa/2023F2Emission2.git gh-pages
```

---

### 資料夾說明
* public - excel資料、LOGO放置
* src - 編譯資料
  * assets - 圖片等
  * components - 複用元件

### 使用技術
Vue 3 + Vite

### 第三方服務
* chart.js
* xlsx
* tailwindcss

### 補充說明
有空時再把重複元件拆解並完成專案QQ