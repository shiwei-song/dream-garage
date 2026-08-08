# Dream Garage v2.2.1 — Delete Sync Fix

這版專門修正 v2.2.0 的刪除同步問題。

## 修正
- 刪除後立即從畫面移除，不再等雲端 round-trip。
- 刪除本機 IndexedDB 後，先送出 Supabase DELETE。
- DELETE 完成後才重新拉取雲端資料確認。
- 修正 `syncNow()` / `flushQueue()` 的同步競態：手動立即同步會先處理待送佇列，再下載雲端資料。
- 若刪除失敗，會恢復原紀錄並顯示錯誤。

## 更新
1. 解壓縮。
2. 打開 `supabase-config.js`，把 placeholder 換回你自己的 `sb_publishable_...`。
3. 覆蓋 GitHub repository `dream-garage` 根目錄。
4. GitHub Desktop Summary：`Fix delete sync v2.2.1`
5. Commit to main。
6. Push origin。
7. GitHub Pages 完成後確認 App 顯示 v2.2.1。

## 驗證
保留目前那筆刪不掉的 $200：
1. iPhone → 存錢 → 刪除 $200。
2. 應該立即從清單消失。
3. 更多 → 立即同步。
4. Mac → 立即同步。
5. Mac 端也應看不到 $200。
