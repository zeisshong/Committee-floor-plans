'use strict';
// Tokens and resident records live only in memory. Google enforces Sheet ACLs.
function sheetCSV(values){
 const width=values[0]?.length||0;
 return values.filter(row=>row.some(v=>String(v).trim())).map(row=>Array.from({length:width},(_,i)=>'"'+String(row[i]??'').replace(/"/g,'""')+'"').join(',')).join('\n');
}
if(typeof module!=='undefined')module.exports={sheetCSV};
if(typeof window!=='undefined'&&window.residentData){
 const config=window.GOOGLE_SHEETS_CONFIG,view=window.residentData;
 const button=document.getElementById('authorize');
 let generation=0,timer=null,controller=null;
 function clear(){generation++;clearTimeout(timer);controller?.abort();controller=null;view.clear();button.disabled=false;}
 async function request(url,token,signal){
  const response=await fetch(url,{headers:{Authorization:'Bearer '+token},cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer',signal});
  if(!response.ok)throw Error(response.status===403?'這個帳號無權讀取試算表，或 Sheets API 尚未啟用。':response.status===401?'授權已失效，請重新授權。':'無法讀取試算表，請確認共用權限與設定。');
  return response.json();
 }
 button.onclick=()=>{
  clear();
  if(!config?.clientId){view.status('尚未設定 Google OAuth 用戶端 ID，請依使用說明完成設定。');return;}
  if(!window.google?.accounts?.oauth2){view.status('Google 登入元件尚未載入，請稍後重試。');return;}
  const current=generation;
  button.disabled=true;view.status('請在 Google 視窗選擇有試算表權限的帳號並授權。');
  const client=google.accounts.oauth2.initTokenClient({
   client_id:config.clientId,scope:'https://www.googleapis.com/auth/spreadsheets.readonly',
   include_granted_scopes:false,
   error_callback:()=>{if(current===generation){clear();view.status('授權視窗已關閉或無法開啟，請重試。');}},
   callback:async result=>{
    if(current!==generation)return;
    if(result.error||!result.access_token){clear();view.status('未完成授權，未載入住戶資料。');return;}
    controller=new AbortController();const signal=controller.signal;
    timer=setTimeout(()=>{clear();view.status('授權已到期，資料已清除；請重新授權。');},Math.max(0,(Number(result.expires_in)||3600)*1000-30000));
    try{
     const base='https://sheets.googleapis.com/v4/spreadsheets/'+encodeURIComponent(config.spreadsheetId);
     const meta=await request(base+'?fields=sheets.properties',result.access_token,signal);
     const sheet=meta.sheets?.find(s=>s.properties.sheetId===config.sheetId);
     if(!sheet)throw Error('找不到指定的住戶資料分頁。');
     const range="'"+sheet.properties.title.replace(/'/g,"''")+"'!A1:AX50001";
     const data=await request(base+'/values/'+encodeURIComponent(range)+'?valueRenderOption=FORMATTED_VALUE',result.access_token,signal);
     if(current!==generation)return;
     const count=view.load(sheetCSV(data.values||[]));
     view.status('已從 Google Sheet 載入 '+count+' 筆紀錄（'+new Date().toLocaleTimeString('zh-TW')+'）。重新整理或登出後清除。');
    }catch(error){if(current===generation){clear();view.status(error.message);}}
    finally{result.access_token='';if(current===generation)button.disabled=false;}
   }
  });
  try{client.requestAccessToken({prompt:'select_account'});}catch{clear();view.status('無法啟動 Google 授權，請確認網站來源設定。');}
 };
 document.getElementById('logout').onclick=()=>{clear();view.status('已清除此網站的住戶資料；Google 帳號本身仍維持登入。');};
 document.getElementById('clear').onclick=document.getElementById('logout').onclick;
 window.addEventListener('pagehide',clear);
}
