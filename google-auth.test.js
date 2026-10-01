const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
const {sheetCSV}=require('./google-auth.js');
const {parseCSV}=require('./app.js');
assert.equal(parseCSV(sheetCSV([['棟別','戶別','樓層','住戶','Notes'],['A','1','2','測試','逗號,及"引號"\n換行'],['B','2','3','測試二']])).length,2);
async function scenario(mode){
 const elements={authorize:{},logout:{},clear:{}},events={},calls=[],statuses=[];let callback,clears=0,loaded=0;
 const context={module:{exports:{}},console,AbortController,setTimeout:()=>1,clearTimeout(){},document:{getElementById:id=>elements[id]},fetch:async(url,opts)=>{calls.push({url,opts});assert.equal(opts.headers.Authorization,'Bearer secret-token');assert.equal(opts.cache,'no-store');return {ok:mode!=='denied',status:403,json:async()=>calls.length===1?{sheets:[{properties:{sheetId:42,title:"住戶'資料"}}]}:{values:[['棟別','戶別','樓層','住戶'],['A','1','2','測試']]}};}};
 context.window={residentData:{clear(){clears++;loaded=0;},load(csv){loaded=parseCSV(csv).length;return loaded;},status:s=>statuses.push(s)},GOOGLE_SHEETS_CONFIG:{clientId:'test.apps.googleusercontent.com',spreadsheetId:'test',sheetId:42},addEventListener:(name,fn)=>events[name]=fn,google:{accounts:{oauth2:{initTokenClient(options){callback=options.callback;return {requestAccessToken(){}};}}}}};context.google=context.window.google;
 vm.runInNewContext(fs.readFileSync(__dirname+'/google-auth.js','utf8'),context);
 assert.equal(calls.length,0);elements.authorize.onclick();
 if(mode==='cancel')elements.logout.onclick();
 await callback({access_token:'secret-token',expires_in:3600});
 if(mode==='success'){assert.equal(loaded,1);assert.equal(calls.length,2);elements.logout.onclick();assert.equal(loaded,0);}
 if(mode==='denied'){assert.equal(loaded,0);assert.equal(calls.length,1);assert.ok(statuses.at(-1).includes('無權'));}
 if(mode==='cancel'){assert.equal(loaded,0);assert.equal(calls.length,0);}
 events.pagehide();assert.ok(clears>0);
}
(async()=>{for(const mode of ['success','denied','cancel'])await scenario(mode);console.log('Google 授權、拒絕存取、登出競態、資料清除與 CSV 轉換測試通過');})().catch(e=>{console.error(e);process.exitCode=1;});
