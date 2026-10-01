# 閱讀台灣・鄰居筆記

公開平面圖：1F～18F、B1～B3。住戶資料由 Google OAuth 授權後直接從私人 Google Sheet 讀取，不隨網站發布。

## 一次性 Google 設定

1. 在 https://console.cloud.google.com/ 建立或選擇專案，在「API 和服務 → 程式庫」啟用 Google Sheets API。
2. 在 Google Auth Platform 設定 Branding（應用程式名稱與聯絡信箱）、Audience。一般個人帳號使用 External；開發測試時加入實際使用者為測試使用者。
3. 在 Data Access 加入 `https://www.googleapis.com/auth/spreadsheets.readonly`。此為唯讀權限，但授權範圍涵蓋使用者可存取的試算表，並非 Google 層級限制只讀本文件。程式只請求設定的文件及分頁。
4. 在 Clients 建立 OAuth 用戶端，類型選「網頁應用程式」。Authorized JavaScript origins 填網站來源，例如 `https://zeisshong.github.io`，不含路徑；本機測試可另加 `http://localhost:8765`。此彈出視窗流程不需要 redirect URI。
5. 將公開用戶端 ID（結尾 `.apps.googleusercontent.com`）填入 `google-config.js` 的 `clientId`。不要加入 client secret、服務帳號金鑰或 token。
6. 試算表「共用 → 一般存取權」維持「受限制」，逐一加入獲准帳號。不要發布到網路，也不要開放知道連結者存取。OAuth 測試使用者名單與試算表共用權限是兩項不同設定，測試使用者也必須具有文件權限。
7. 測試模式適合先驗證；對外正式提供時，須依 Google 控制台提示完成發布及所需的 OAuth 驗證。

參考：https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid

## 使用與資料安全

- 開啟網站先顯示平面圖。點「Google 授權並載入資料」後選擇帳號並授權，從設定文件的 gid=1210677967 分頁讀取當時最新內容。
- 無權帳號會被 Google API 拒絕。網站沒有共用密碼、服務帳號或可繞過 Google 權限的代理。
- 未設定 client ID 時，只提供平面圖並顯示設定提示。
- 每次載入或重新整理須再次啟動授權。載入後再次點授權按鈕可更新資料。授權到期會清除資料。
- 住戶資料及短效憑證只留在網頁記憶體，不寫入 localStorage、Git 或網站檔案。離開頁面、重新整理或登出會清除；登出本網站不會登出整個 Google 帳號。
- 位置設定可保存於 localStorage。「下載位置備份」的 rows 固定為空，不輸出住戶資料。載入舊瀏覽器備份時忽略並移除其中的住戶資料。
- 獲准使用者仍能閱讀、抄錄或透過開發者工具取得已載入的資料；只授權可信任帳號。移除文件共用權限會阻止後續讀取，不會收回已被閱讀或複製的內容。
- 程式使用 Google 官方登入元件與 Sheets API，沒有分析追蹤。不回寫 Google Sheet。

第一列須包含「棟別、戶別、樓層」。支援住戶、LINE 暱稱、LINE ID、車位、所有權人、職業領域、專長資源及 Notes。讀取 A1:AX50001；空白尾欄自動補齊。多筆同戶紀錄分開顯示。車位請含樓層，例如 B1-251。

## 圖面

2F 有 10 個住宅戶別及 S 代號空間；3F 有 16 戶及 S15；4F～18F 每層 16 戶。5F～18F 依建商相同格局沿用四樓原圖；原圖露臺與約定專用註記仍屬四樓。B2 122～244、B3 1～121 共 244 格；B1 245～257 為待核對。1F 店舖仍待綁定。矩形為點選區域，不代表產權界線。

位置可編輯、框選與下載備份。綠色表示圖面代號已核對，不代表所有權已核实。各層戶別獨立；例如 A1-6 與 A1-18 不會混用資料。

## 發布與測試

GitHub Actions 使用明確檔案清單建立 Pages，不發布社區文件、CSV、JSON、測試檔或備份。Google Sheet ID 與 OAuth client ID 是公開設定，不是存取憑證。

執行 `node app.test.js` 及 `node google-auth.test.js`。本機 HTTP 測試可使用 `python3 -m http.server 8765 --bind 127.0.0.1`。OAuth 不適用直接開啟 file://。
