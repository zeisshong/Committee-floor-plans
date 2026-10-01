const assert=require('node:assert/strict');
const {parseCSV,unitKey,parkingKeys}=require('./app.js');
const fs=require('node:fs');
const r=parseCSV(fs.readFileSync(__dirname+'/example.csv','utf8'));
assert.equal(r.length,3);assert.equal(unitKey(r[0]),'A1-1');assert.equal(unitKey(r[1]),'A1-1');assert.equal(unitKey(r[2]),'B2-8');assert.ok(r[0].Notes.includes('\n'));
assert.equal(unitKey({'棟別':'Ａ棟','戶別':'Ａ１','樓層':'1F'}),'A1-1');
assert.equal(unitKey({'棟別':'A','戶別':'A1-1','樓層':'1'}),'A1-1');
assert.deepEqual(parkingKeys('Ｂ１－２５１、B1-245\nB1-251'),['B1-251','B1-245']);
assert.deepEqual(parkingKeys('251'),[]);
assert.equal(parseCSV('\uFEFF棟別,戶別,樓層,Notes\r\nA,1,1,"有逗號,及""引號"""\r\n')[0].Notes,'有逗號,及"引號"');
assert.equal(parseCSV('棟別,戶別,樓層,住戶\nA,1,1,').length,0);
assert.throws(()=>parseCSV('棟別,戶別,樓層\nA,1'),/欄位數/);
assert.throws(()=>parseCSV('棟別,戶別,樓層\nA,1,"'),/引號/);
assert.throws(()=>parseCSV('姓名\n人'),/第一列/);
console.log('CSV、同戶識別、車位正規化與無效檔案測試通過');
const {names,floorOf,labelSize}=require('./app.js');
assert.deepEqual(names([{'住戶':'B9-9','LINE 暱稱':'Weber'},{'住戶':'B9-9','LINE 暱稱':'Weber'}],'B9-9'),['Weber']);
assert.equal(floorOf('B9-9'),'9F');
assert.ok(labelSize('249',34)*3*.65<=24);
assert.ok(labelSize('待核對 12',39)<8);
assert.deepEqual(parkingKeys('B1：246、地下1樓-251'),['B1-246','B1-251']);
// Exercise the application with a minimal DOM, including persisted CSV records.
const vm=require('node:vm');
class Element{constructor(tag='div'){this.tag=tag;this.children=[];this.style={};this.dataset={};this.value='';this.checked=false;this.hidden=false;this.clientWidth=1000;this.clientHeight=600;this.classList={toggle(){},add(){},remove(){}};}showModal(){this.open=true;}close(){this.open=false;}append(...nodes){this.children.push(...nodes);}replaceChildren(...nodes){this.children=nodes;}setAttribute(k,v){this[k]=v;}scrollTo(){}querySelectorAll(){return [];}getBoundingClientRect(){return {left:0,top:0,width:1000,height:707};}}
const elements=new Map(),get=id=>{if(!elements.has(id))elements.set(id,new Element());return elements.get(id);};
const context={document:{getElementById:get,createElement:t=>new Element(t),createElementNS:(_,t)=>new Element(t),querySelectorAll:()=>[]},window:{addEventListener(){}},localStorage:{getItem:()=>null},console};
vm.createContext(context);vm.runInContext(fs.readFileSync(__dirname+'/residential-plans.js','utf8'),context);vm.runInContext(fs.readFileSync(__dirname+'/parking-plans.js','utf8'),context);vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8').replace("if(typeof document!=='undefined'){",'').replace(/\}\s*$/,''),context);
vm.runInContext(`rows=[{'棟別':'B','戶別':'9','樓層':'9','住戶':'B9-9','LINE 暱稱':'Weber','車位':'B1：246'},{'棟別':'B','戶別':'9','樓層':'9','住戶':'B9-9','LINE 暱稱':'另一住戶','車位':''}];renderResults();setFloor('19F');`,context);
assert.equal(get('viewport').hidden,true);assert.equal(get('floorGrid').hidden,false);
vm.runInContext("showMark(marks.find(m=>m.key==='B1-246'));",context);
assert.equal(get('results').hidden,false);assert.equal(get('residentDialog').open,true);
function textTree(e){return [e.textContent||'',...e.children.map(textTree)].join(' ');}
assert.ok(textTree(get('detail')).includes('Weber'));assert.ok(textTree(get('detail')).includes('另一住戶'));
assert.ok(!textTree(get('detail')).includes('沒有符合'));
vm.runInContext("selectUnit('B9-9');",context);
assert.equal(get('detail').children.filter(e=>e.tag==='h2'&&e.textContent==='B9-9').length,1);
assert.ok(get('detail').children.filter(e=>e.className==='person').every(e=>!e.children.some(c=>c.tag==='h3'&&c.textContent==='B9-9')));
get('backResults').onclick();assert.equal(get('results').hidden,false);
vm.runInContext("setFloor('B1');",context);assert.equal(get('viewport').hidden,false);
console.log('樓層選單、點選車位切換整戶資料、返回搜尋與卡片去重測試通過');

const basementMarks=require('./parking-plans.js');
for(const [f,lo,hi] of [['B2',122,244],['B3',1,121]]){
 const ms=basementMarks.filter(m=>m.floor===f);
 assert.deepEqual(ms.map(m=>Number(m.label)).sort((a,b)=>a-b),Array.from({length:hi-lo+1},(_,i)=>lo+i));
 assert.equal(new Set(ms.map(m=>m.id)).size,ms.length);
 for(const m of ms){assert.equal(m.key,`${f}-${m.label}`);assert.ok(m.box[0]>=0&&m.box[1]>=0&&m.box[0]+m.box[2]<=1888&&m.box[1]+m.box[3]<=1335);}
 vm.runInContext(`setFloor('${f}');`,context);assert.equal(get('plan').src,f.toLowerCase()+'-source.jpg');assert.equal(get('overlay').children.length,ms.length);
}
vm.runInContext("rows=[{'棟別':'A','戶別':'1','樓層':'5','住戶':'地下室測試','車位':'B2-197、B3-77'}];showMark(marks.find(m=>m.key==='B2-197'));",context);
assert.ok(textTree(get('detail')).includes('地下室測試'));
vm.runInContext("showMark(marks.find(m=>m.key==='B3-77'));",context);assert.ok(textTree(get('detail')).includes('地下室測試'));
assert.equal(vm.runInContext("upgradeMarks({marks:[]}).length",context),578);
assert.equal(vm.runInContext("upgradeMarks({mapRevision:2,marks:[]}).length",context),334);
assert.equal(vm.runInContext("upgradeMarks({marks:[{id:'custom',kind:'parking',key:'B2-197',floor:'B2'}]}).filter(m=>m.key==='B2-197').length",context),1);
console.log('B2/B3 244 格完整性、圖面切換、車位連結與舊備份相容測試通過');

const residential=require('./residential-plans.js');
assert.equal(residential.length,272);
for(const f of ['2F','3F','4F']){
 const ms=residential.filter(m=>m.floor===f);
 vm.runInContext(`setFloor('${f}');renderResults();`,context);
 assert.equal(get('viewport').hidden,false);
 assert.equal(get('plan').src,f.toLowerCase()+'-source.jpg');
 assert.equal(get('overlay').children.length,ms.length);
 assert.equal(get('floorPicker').value,f);
 for(const m of ms){assert.ok(m.box[0]+m.box[2]<=1888&&m.box[1]+m.box[3]<=1335);}
}
vm.runInContext("rows=[{'棟別':'A','戶別':'1','樓層':'2','住戶':'二樓測試'},{'棟別':'A','戶別':'1','樓層':'3','住戶':'三樓測試'}];showMark(marks.find(m=>m.key==='A1-2'));",context);
assert.ok(textTree(get('detail')).includes('二樓測試'));
assert.ok(!textTree(get('detail')).includes('三樓測試'));
assert.equal(vm.runInContext("upgradeMarks({mapRevision:3,marks:[]}).length",context),286);
assert.equal(vm.runInContext("upgradeMarks({mapRevision:2,marks:[{id:'custom-unit',kind:'unit',key:'A1-2',floor:'2F'}]}).filter(m=>m.key==='A1-2').length",context),1);
vm.runInContext("validate(snapshot());setFloor('5F');",context);
assert.equal(get('viewport').hidden,false);
assert.equal(get('floorGrid').hidden,true);
assert.equal(get('plan').src,'4f-source.jpg');
assert.equal(get('overlay').children.length,16);
console.log('2F–4F 標記、住戶跨樓層隔離、備份升級與 5F 共用底圖測試通過');

vm.runInContext("rows=[{'棟別':'A','戶別':'1','樓層':'4','住戶':'四樓測試'},{'棟別':'A','戶別':'1','樓層':'5','住戶':'五樓測試'}];showMark(marks.find(m=>m.key==='A1-5'));",context);
assert.ok(textTree(get('detail')).includes('五樓測試'));
assert.ok(!textTree(get('detail')).includes('四樓測試'));
assert.equal(vm.runInContext("upgradeMarks({mapRevision:4,marks:[]}).length",context),270);
assert.equal(vm.runInContext("upgradeMarks({mapRevision:3,marks:[{id:'custom-five',kind:'unit',key:'A1-5',floor:'5F'}]}).filter(m=>m.key==='A1-5').length",context),1);
vm.runInContext("selectUnit('A1-5');",context);
get('detail').children.find(e=>e.tag==='button').onclick();
assert.equal(get('floorPicker').value,'5F');
assert.ok(textTree(get('detail')).includes('五樓測試'));
console.log('5F 16 戶、搜尋定位、跨層隔離與版本 3/4 備份測試通過');

for(let n=6;n<=18;n++){
 const f=n+'F',ms=residential.filter(m=>m.floor===f);
 assert.equal(ms.length,16);
 assert.equal(new Set(ms.map(m=>m.key)).size,16);
 assert.ok(ms.every(m=>m.key.endsWith('-'+n)));
 vm.runInContext(`setFloor('${f}');renderResults();`,context);
 assert.equal(get('plan').src,'4f-source.jpg');assert.equal(get('floorPicker').value,f);
 assert.equal(get('viewport').hidden,false);assert.equal(get('overlay').children.length,16);
 vm.runInContext(`rows=[{'棟別':'A','戶別':'1','樓層':'${n}','住戶':'本層測試'},{'棟別':'A','戶別':'1','樓層':'4','住戶':'其他樓層'}];selectUnit('A1-${n}');`,context);
 get('detail').children.find(e=>e.tag==='button').onclick();
 assert.equal(get('floorPicker').value,f);
 assert.ok(textTree(get('detail')).includes('本層測試'));assert.ok(!textTree(get('detail')).includes('其他樓層'));
}
assert.equal(vm.runInContext("upgradeMarks({mapRevision:6,marks:[]}).length",context),0);
assert.equal(vm.runInContext("upgradeMarks({mapRevision:4,marks:[{id:'custom-18',kind:'unit',key:'A1-18',floor:'18F'}]}).filter(m=>m.key==='A1-18').length",context),1);
vm.runInContext('validate(snapshot());',context);
assert.equal(new Set(residential.map(m=>m.id)).size,residential.length);
console.log('6F–18F 共 208 戶：各層切換、搜尋定位、住戶隔離、備份升級及刪除保留測試通過');

vm.runInContext("setFloor('B1');",context);
assert.equal(get('overlay').children.length,62);
vm.runInContext("rows=[{'棟別':'A','戶別':'1','樓層':'18','住戶':'測試','車位':'B1-297'}];selectUnit('A1-18');",context);
assert.equal(get('floorPicker').value,'B1');assert.equal(get('residentDialog').open,true);
get('closeResident').onclick();assert.equal(get('residentDialog').open,false);
vm.runInContext("selectUnit('A1-18');window.residentData.clear();",context);
assert.equal(get('residentDialog').open,false);assert.ok(!textTree(get('detail')).includes('測試'));
assert.equal(vm.runInContext("upgradeMarks({mapRevision:5,marks:[]}).filter(m=>m.floor==='B1').length",context),62);
console.log('B1 標記補齊、搜尋不換樓層、對話框關閉與登出清除測試通過');
