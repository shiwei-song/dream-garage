# Dream Garage v2.0

## v2.0 新增
- 重新設計首頁與 5 分頁導覽
- 本月存款摘要
- 10萬 / 40萬 / 50萬里程碑
- 存款累積趨勢
- 額外存款提前購車模擬
- Sportage 專屬購車與貸款頁
- 依目前存款即時計算「今天若購車」貸款月付
- PWA 更新提示
- JSON 備份 / 還原
- 保留舊版資料相容性

## 資料相容性
本版繼續使用 IndexedDB `dreamGarageDB`，store 為 `entries` 與 `settings`，因此直接覆蓋部署即可保留原本裝置資料。

## 更新方式
1. 用新版檔案覆蓋 GitHub Repository 根目錄
2. GitHub Desktop 查看 Changes
3. Summary 輸入 `Update Dream Garage v2.0`
4. Commit to main
5. Push origin
6. GitHub Pages 自動重新部署

真正跨裝置即時雲端同步建議放在 v2.1，需另外接 Supabase/Firebase 與登入機制。
