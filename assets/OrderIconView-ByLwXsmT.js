import{_ as C,r as d,b as m,c as r,d as v,e as t,t as i,f as _,w as h,F as k,z as f,p as I,h as O,a4 as V,A as z}from"./index-DxwKcjF_.js";const c=e=>(I("data-v-8851473e"),e=e(),O(),e),N={class:"item"},A={class:"flex_r"},F=["src"],B={class:"shop_name"},U=c(()=>t("img",{style:{width:"6px","margin-left":"10px"},src:"https://gw.alicdn.com/imgextra/i2/O1CN01m1uJMZ25nZGYSpNO5_!!6000000007571-2-tps-26-48.png"},null,-1)),$=c(()=>t("div",{style:{"font-size":"12px","margin-left":"auto",color:"#999"}},"已送达",-1)),j={class:"flex_r",style:{margin:"10px 0 5px 0"}},M=["src"],T={class:"food_name"},Z={style:{"margin-left":"auto",display:"flex","flex-direction":"column","align-items":"center"}},D={style:{"font-weight":"bold"}},E={style:{"font-size":"11px",color:"#999"}},G={style:{margin:"5px 0","font-size":"11px",color:"#999"}},J={class:"flex_r"},K={class:"btn_box"},W={key:1,class:"btn",disabled:"false"},Y=c(()=>t("button",{class:"btn"},"再来一单",-1)),q={style:{padding:"10px 0",position:"relative"}},H={style:{display:"flex","justify-content":"center","align-items":"center"}},L=c(()=>t("div",{style:{"font-size":"20px","font-weight":"bold"}}," 添加评论 ",-1)),P={__name:"OrderIconView",props:{v:{type:Object}},setup(e){const u=d(-1),g=async o=>{(await V(o)).success==1?(z("评价成功"),l.value=!1,location.reload()):f("新增评价失败")},l=d(!1),a=d(""),x=o=>{l.value=!0,u.value=o},w=()=>{a.value==""?f("评论不能为空"):g({item_id:u.value,content:a.value})},p=o=>`http://172.17.18.240:8080/nfood${o}`;return(o,s)=>{const y=m("van-field"),b=m("van-cell-group"),S=m("van-popup");return r(),v(k,null,[t("div",N,[t("div",A,[t("img",{src:p(e.v.pic),class:"shop_img"},null,8,F),t("div",B,i(e.v.shopname),1),U,$]),t("div",j,[t("img",{src:p(e.v.pic),class:"food_img"},null,8,M),t("div",T,i(e.v.foodname),1),t("div",Z,[t("div",D,"￥"+i(e.v.sum),1),t("div",E,"共"+i(e.v.num)+"件",1)])]),t("div",G,i(e.v.order_time),1),t("div",J,[t("div",K,[e.v.content==null||e.v.content==""?(r(),v("button",{key:0,class:"btn",onClick:s[0]||(s[0]=n=>x(e.v.item_id))}," 评价 ")):(r(),v("button",W,"已评价")),Y])])]),_(S,{show:l.value,"onUpdate:show":s[3]||(s[3]=n=>l.value=n),round:"",position:"bottom",style:{height:"35%"},"close-on-click-overlay":""},{default:h(()=>[t("div",q,[t("div",H,[L,t("img",{style:{width:"20px",height:"20px",position:"absolute",right:"10px"},onClick:s[1]||(s[1]=n=>o.isShowArea=!1),src:"https://img.alicdn.com/imgextra/i3/O1CN01mK0AUl1aMm0onmbWF_!!6000000003316-2-tps-72-72.png"})])]),_(b,{inset:""},{default:h(()=>[_(y,{modelValue:a.value,"onUpdate:modelValue":s[2]||(s[2]=n=>a.value=n),rows:"2",autosize:"",type:"textarea",maxlength:"50",placeholder:"请输入评论","show-word-limit":""},null,8,["modelValue"])]),_:1}),t("div",null,[t("button",{class:"submit",onClick:w},"提交")])]),_:1},8,["show"])],64)}}},R=C(P,[["__scopeId","data-v-8851473e"]]);export{R as O};
