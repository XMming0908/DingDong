import{_ as h}from"./top-8ZSFNlHj.js";import{_ as v,u as x,r as u,o as F,b as p,c as w,d as y,e as s,f as l,w as V,L as b,a as S,A as I,z as C,p as z,h as B}from"./index-DxwKcjF_.js";const i=n=>(z("data-v-9a070c7a"),n=n(),B(),n),L=i(()=>s("img",{style:{width:"100%"},src:h},null,-1)),k={class:"login_bg"},N=i(()=>s("div",{style:{"margin-right":"30px",color:"#FFFFFF","text-align":"center","font-size":"40px","font-weight":"700"}},"订 东",-1)),q=i(()=>s("div",{style:{"margin-right":"30px",color:"#FFFFFF","text-align":"center","font-size":"30px","font-weight":"700"}},"Ding Neusoft",-1)),A={class:"login_bg2"},T={style:{"padding-top":"40px",display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},U={class:"username"},$={class:"password"},j=i(()=>s("button",{class:"btn",type:"submit",style:{"margin-top":"30px"}},"登 录",-1)),D={__name:"LoginView",setup(n){const r=x(),c=u(""),d=u(""),_=()=>{r.push("/resgiter")},m=o=>{g(o)};F(()=>{});const g=async o=>{console.log(o);const e=await b(o);if(console.log(e),e.userid!=0){const t=S();t.$patch({userId:e.userid}),console.log(t.userId),I("登录成功"),r.push("/")}else C("登录失败")};return(o,e)=>{const t=p("van-field"),f=p("van-form");return w(),y("div",null,[L,s("div",k,[N,q,s("div",A,[s("div",T,[l(f,{onSubmit:m},{default:V(()=>[s("div",U,[l(t,{type:"text",modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a),name:"username",placeholder:"请输入用户名",rules:[{required:!0,message:"请输入用户名"}]},null,8,["modelValue"])]),s("div",$,[l(t,{type:"password",modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=a=>d.value=a),name:"userpass",placeholder:"请输入密码",rules:[{required:!0,message:"请输入密码"}]},null,8,["modelValue"])]),s("div",{onClick:e[2]||(e[2]=a=>_()),style:{color:"#6CB6FF","text-align":"center","font-size":"15px","font-weight":"700",margin:"20px 0 0 0"}},"暂无账号？立即注册"),j]),_:1})])])])])}}},R=v(D,[["__scopeId","data-v-9a070c7a"]]);export{R as default};
