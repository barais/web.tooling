import{g as T,h as E,i as U,j as D}from"../modules/unplugin-icons-BSR4slrK.js";import{d as H,t as y,W as L,z as u,E as V,o as _,b as j,e as o,h as C,B as l,l as s,k as p,c as z,x as b,F as I}from"../modules/vue-0vtIsFhi.js";import{u as M,a as P,d as t,e as R,s as W,f as q}from"../index-BYLqNtoy.js";import{_ as A}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BCU3y6Cx.js";import{_ as d}from"./IconButton.vue_vue_type_script_setup_true_lang-CtfRjdDt.js";import{C as G}from"./ClicksSlider-l5cv_OCi.js";import"../modules/shiki-C9tpQGPx.js";const J={class:"h-full pt-2 flex flex-col"},K={class:"flex-none border-t border-main",px3:"",py2:""},O={class:"flex-none border-t border-main"},Q={class:"flex gap-1 items-center px-6 py-3"},X={class:"p2 text-center"},ae=H({__name:"notes",setup(Y){M({title:`Notes - ${W}`});const{slides:w,total:m}=P(),{isFullscreen:f,toggle:S}=q,v=y(),n=L("slidev-notes-font-size",18),a=u(()=>{var e;return((e=t.lastUpdate)==null?void 0:e.type)==="viewer"?t.viewerPage:t.page}),x=u(()=>w.value.find(e=>e.no===a.value));V(a,()=>{var e;(e=v.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function $(){n.value=n.value+1}function B(){n.value=n.value-1}const k=u(()=>{var i,r;const e=((i=t.lastUpdate)==null?void 0:i.type)==="viewer"?t.viewerClicks:t.clicks,c=((r=t.lastUpdate)==null?void 0:r.type)==="viewer"?t.viewerClicksTotal:t.clicksTotal;return R(y(e),void 0,c)});return(e,c)=>{var h,g;const i=U,r=D,F=T,N=E;return _(),j(I,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:C({width:`${(a.value-1)/(l(m)-1)*100+1}%`})},null,4),o("div",J,[o("div",{ref_key:"scroller",ref:v,class:"px-5 flex-auto h-full overflow-auto",style:C({fontSize:`${l(n)}px`})},[s(A,{note:(h=x.value)==null?void 0:h.meta.slide.note,"note-html":(g=x.value)==null?void 0:g.meta.slide.noteHTML,placeholder:`No notes for Slide ${a.value}.`,"clicks-context":k.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",K,[s(G,{"clicks-context":k.value,readonly:""},null,8,["clicks-context"])]),o("div",O,[o("div",Q,[s(d,{title:l(f)?"Close fullscreen":"Enter fullscreen",onClick:l(S)},{default:p(()=>[l(f)?(_(),z(i,{key:0})):(_(),z(r,{key:1}))]),_:1},8,["title","onClick"]),s(d,{title:"Increase font size",onClick:$},{default:p(()=>[s(F)]),_:1}),s(d,{title:"Decrease font size",onClick:B},{default:p(()=>[s(N)]),_:1}),c[0]||(c[0]=o("div",{class:"flex-auto"},null,-1)),o("div",X,b(a.value)+" / "+b(l(m)),1)])])])],64)}}});export{ae as default};
