import{_ as X,u as N,a as T,r as u,o as A,c as n,d as c,e as s,i as g,a7 as M,a8 as R,v as B,B as y,F as m,j as w,k as O,a9 as K,aa as j,t as C,f as z,p as D,h as E,ab as J}from"./index-DxwKcjF_.js";import{F as Z}from"./FoodListItem-gul1Dk3X.js";const h=p=>(D("data-v-d841e35b"),p=p(),E(),p),$={class:"search flex_r"},q=h(()=>s("svg",{t:"1720747681197",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7564",width:"25",height:"25"},[s("path",{d:"M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z","p-id":"7565"})],-1)),G=[q],U={class:"s_box"},P={class:"history"},Q={class:"flex_r"},W=h(()=>s("div",{class:"title"},"历史搜索",-1)),Y=["onClick"],ee={class:"history"},se=h(()=>s("div",{class:"title"},"搜索发现",-1)),te=["onClick"],oe={key:0,class:"noorder"},ae=h(()=>s("img",{style:{width:"200px"},src:"https://img.alicdn.com/tfs/TB1g6d4LBr0gK0jSZFnXXbRRXXa-600-600.png"},null,-1)),ie=h(()=>s("div",null,"暂无搜索商品",-1)),le=[ae,ie],ne={__name:"SearchView",setup(p){N();const a=T(),i=u(""),l=u([]),r=u(!0),v=u(!0),x=u([]),_=u([]),f=()=>{a.searchHistory.indexOf(i.value)===-1||a.searchHistory.splice(a.searchHistory.findIndex(e=>e==i.value),1),a.searchHistory.unshift(i.value),r.value=!1,v.value=!1,i.value===""&&k(i.value),i.value!==""&&(l.value.splice(0),k(i.value))},F=()=>{r.value?history.back():(i.value="",r.value=!0,v.value=!0,l.value.splice(0))},k=async e=>{const t=await K(e);l.value.push(...t)},S=async e=>{const t=await J(e);l.value.push(...t)},b=async e=>{const t=await j();console.log(t),x.value.push(...t),H()};A(()=>{b()});const I=e=>{a.searchHistory.indexOf(e.typename)===-1||a.searchHistory.splice(a.searchHistory.findIndex(t=>t==e.typename),1),a.searchHistory.unshift(e.typename),r.value=!1,v.value=!1,l.value.length==0&&S(e.type_id),i.value!==""&&(l.value.splice(0),S(e.type_id))},H=()=>{_.value=[];const e=x.value.concat();for(let o=0;o<4;o++){let d=Math.random()*e.length;var t=e[Math.floor(d)];e.splice(d,1),_.value.push(t)}},L=e=>{console.log(e.name)};return(e,t)=>(n(),c("div",null,[s("div",$,[s("div",{onClick:F},G),s("div",U,[g(s("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>i.value=o),placeholder:"请输入搜索关键词",onKeyup:R(f,["enter"])},null,544),[[M,i.value]]),s("div",{class:"div_btn",onClick:f},"搜索")])]),s("div",{onClick:L},[g(s("div",P,[s("div",Q,[W,s("img",{onClick:t[1]||(t[1]=(...o)=>y(a).clearSearchHistory&&y(a).clearSearchHistory(...o)),style:{"margin-left":"auto",width:"20px"},src:"https://gw.alicdn.com/imgextra/i4/O1CN01ReZ4mq1EJBNav48eB_!!6000000000330-2-tps-48-48.png"})]),s("ul",null,[(n(!0),c(m,null,w(y(a).searchHistory,(o,d)=>(n(),c("li",{key:d,onClick:V=>f(i.value=o)},C(o),9,Y))),128))])],512),[[B,y(a).searchHistory.length>0&r.value]]),g(s("div",ee,[s("div",{class:"flex_r"},[se,s("img",{onClick:H,style:{"margin-left":"auto",width:"20px"},src:"https://gw.alicdn.com/imgextra/i4/O1CN01rx87fJ22XaciX5GXz_!!6000000007130-2-tps-48-48.png"})]),s("ul",null,[(n(!0),c(m,null,w(_.value,(o,d)=>(n(),c("li",{key:d,onClick:V=>I(o)},C(o.typename),9,te))),128))])],512),[[B,_.value.length>0&v.value]]),(n(!0),c(m,null,w(l.value,o=>(n(),c("div",{key:o.food_id},[z(Z,{list:o},null,8,["list"])]))),128)),l.value.length==0&!r.value?(n(),c("div",oe,le)):O("",!0)])]))}},de=X(ne,[["__scopeId","data-v-d841e35b"]]);export{de as default};
