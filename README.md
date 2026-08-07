# Dream Garage PWA

這是可安裝的 PWA 版本，包含：
- iPhone/Android 主畫面安裝
- Service Worker 離線快取
- IndexedDB 本機資料庫
- 每月多筆存款、分類與備註
- 自動完成率、預估達標月份
- 10萬／40萬／50萬里程碑
- 存款趨勢圖
- 額外存款提前購車模擬
- Sportage 車價與車貸月付試算
- JSON 資料匯出／還原

## iPhone 安裝
PWA 必須從 HTTPS 網址開啟，不能直接用本機 file:// 檔案安裝。
將整個資料夾部署到 GitHub Pages、Netlify、Cloudflare Pages 或其他 HTTPS 網站後：
Safari → 分享 → 加入主畫面。

## 關於同步
目前資料庫是 IndexedDB，本機離線可用。
「匯出備份 / 還原備份」可讓你在不同裝置搬移資料。

真正的即時跨裝置雲端同步需要一個後端（例如 Supabase/Firebase）與使用者登入。
本版資料結構已切成 settings + entries，後續可直接接雲端 sync adapter，而不需要重做 UI 與資料模型。

## 初始設定
- 開始月份：2026-09
- Sportage 車價：NT$1,349,000
- 頭期目標：NT$400,000
- 安全預備金：NT$100,000
- 每月最低存款：NT$20,000
- 貸款試算：年利率 2.8%、7 年（可自行修改）
