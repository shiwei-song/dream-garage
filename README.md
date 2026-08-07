# Dream Garage v2.1.0

新增功能版，建立於資料安全架構之上。

## v2.1.0 新增
- 月度資金配置：月薪、孝親費、信用卡預算、最低存車基金
- 本月存款摘要
- 紀錄搜尋與分類篩選
- CSV 匯出（Excel / Numbers 可開啟）
- JSON 完整備份與還原
- Sportage 頭期 20 / 30 / 40 / 50 萬貸款比較
- 額外月存款 → 提前購車月份模擬
- IndexedDB 時間機器快照
- 每次資料異動自動鏡像與快照
- 更新前安全快照
- 診斷資訊

## 資料庫
沿用 `dreamGarageDB`，升至 DB v3。
原有 entries / settings / snapshots / meta 均保留，只新增 budget store。

## 更新方式
覆蓋 Repository 根目錄後：
1. GitHub Desktop：確認變更
2. Summary：`Update Dream Garage v2.1.0`
3. Commit to main
4. Push origin
5. GitHub Pages 自動部署
