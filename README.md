# Dream Garage v2.2.0 Cloud Sync

## 這版新增
- Supabase Email 註冊 / 登入 / 登出
- Safari、iPhone 主畫面 PWA、Mac 共用同一份雲端資料
- 首次登入資料遷移保護：不會讓空雲端直接覆蓋本機資料
- 本機資料上傳 / 雲端資料下載 / ID 去重合併
- 離線仍先寫 IndexedDB，恢復網路後重試同步
- App 回到前景、重新取得焦點、恢復網路時自動拉取雲端
- IndexedDB、鏡像、快照、JSON/CSV 備份全部保留
- Header 顯示同步狀態

## 上線前唯一要設定的地方
打開 `supabase-config.js`：

```js
window.DREAM_GARAGE_CLOUD = {
  url: "https://qxgmhepvqktuaametndp.supabase.co",
  publishableKey: "PASTE_YOUR_SB_PUBLISHABLE_KEY_HERE"
};
```

把 `PASTE_YOUR_SB_PUBLISHABLE_KEY_HERE` 換成 Supabase Settings → API Keys 的 `sb_publishable_...`。

不要使用 `sb_secret_...`、service_role 或 Database password。

## 更新 GitHub
1. 先在目前 v2.1.0 的主畫面 App 匯出一份 JSON。
2. 將本資料夾所有檔案覆蓋到 GitHub repository `dream-garage` 根目錄。
3. GitHub Desktop Summary：`Update Dream Garage v2.2.0 Cloud Sync`
4. Commit to main
5. Push origin
6. 等 GitHub Pages 部署完成。

## 第一次登入
第一台有正式資料的裝置：選「上傳本機資料到雲端」。
第二台裝置：登入同帳號後選「使用雲端資料」。
