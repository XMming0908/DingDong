import{_ as x,r as t,n as y,a as I,u as S,o as D,J as V,b as d,c as k,d as B,e as c,f as a,F,z as l,p as T,h as A,N,A as q}from"./index-DxwKcjF_.js";import{d as z,a as C,r as O}from"./RemarkView-B9bURPVs.js";const _=n=>(T("data-v-7059f73c"),n=n(),A(),n),R={class:"box"},E=_(()=>c("div",{style:{"text-align":"center",color:"white","font-size":"18px"}},"确认订单",-1)),J=_(()=>c("div",{style:{height:".1px","background-color":"#ffffff9e",margin:"10px 0"}},null,-1)),M={__name:"BuyView",setup(n){const u=t(-1),i=y(),o=t({}),f=I(),p=t("");t(-1);const m=S(),s=t(null);D(()=>{u.value=i.query.food_id,p.value=i.query.shop_name,v()});const v=async()=>{const e=await V(u.value);e.num=1,o.value=e},h=async e=>{console.log(e);const r=await N(e);o.value=r,r.success=="1"&&(q("购买成功"),m.push("/")),console.log(r)},b=()=>{if(s.value.addressInfo=="请选择收货地址"){l("请选择收货地址");return}else if(s.value.timeStr=="选择送达时间"){l("请选择送达时间");return}let e=s.value.currentTime;h({user_id:f.userId,food_id:o.value.food_id,num:1,sum:o.value.price,suggesttime:e[0]+":"+e[1],address_id:s.value.addressId})};return(e,r)=>{const g=d("van-notice-bar"),w=d("van-submit-bar");return k(),B(F,null,[c("div",R,[E,J,a(g,{"left-icon":"volume-o",text:"温馨提示：请适量点餐、避免浪费"}),a(C,{ref_key:"childDom",ref:s},null,512),a(z,{foodData:o.value},null,8,["foodData"]),a(O)]),a(w,{price:o.value.price*100,"button-text":"提交订单",onSubmit:b},null,8,["price"])],64)}}},H=x(M,[["__scopeId","data-v-7059f73c"]]);export{H as default};
