import{f as T,E as W,F as Y,G as q,H as I,J as Q,K as X,L as Z,M as ee,N as ne,O as te,P as se}from"../modules/unplugin-icons-BSR4slrK.js";import{d as L,t as h,W as oe,aD as le,o as g,b as B,f as ae,h as M,B as e,c as x,k as o,l as t,i as l,e as i,x as re,ae as m,af as ie,F as ue,ag as ce,ay as b,g as de}from"../modules/vue-0vtIsFhi.js";import{L as pe}from"../modules/shiki-C9tpQGPx.js";import{u as _e}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-jusqeI1i.js";import{V as D}from"./useWakeLock-DpoJgQiq.js";import{_ as a}from"./IconButton.vue_vue_type_script_setup_true_lang-CtfRjdDt.js";const me=L({__name:"Draggable",props:{storageKey:{},initial:{}},setup($){const u=$,w=h(null),f=u.initial??{x:0,y:0},k=u.storageKey?oe(u.storageKey,f):h(f),{style:y}=le(w,{initialValue:k});return(v,d)=>(g(),B("div",{ref_key:"el",ref:w,class:"fixed",style:M(e(y))},[ae(v.$slots,"default")],4))}}),ge={class:"flex bg-main p-2"},we={class:"inline-block w-7 text-center"},fe={class:"pt-.5"},$e=L({__name:"DrawingControls",setup($){const{brush:u,canClear:w,canRedo:f,canUndo:k,clear:y,drauu:v,drawingEnabled:d,drawingMode:r,drawingPinned:c,brushColors:z}=_e();function V(){v.undo()}function S(){v.redo()}let C="stylus";function p(_){r.value=_,d.value=!0,_!=="eraseLine"&&(C=_)}function E(_){u.color=_,d.value=!0,r.value=C}return(_,n)=>{const K=T,N=W,U=Y,F=q,P=I,R=Q,A=X,j=Z,G=ee,H=ne,J=te,O=se;return g(),x(me,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[t(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:n[0]||(n[0]=s=>p("stylus"))},{default:o(()=>[t(K)]),_:1},8,["class"]),t(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:n[1]||(n[1]=s=>p("line"))},{default:o(()=>n[13]||(n[13]=[i("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[i("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1)])),_:1},8,["class"]),t(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:n[2]||(n[2]=s=>p("arrow"))},{default:o(()=>[t(N)]),_:1},8,["class"]),t(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:n[3]||(n[3]=s=>p("ellipse"))},{default:o(()=>[t(U)]),_:1},8,["class"]),t(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:n[4]||(n[4]=s=>p("rectangle"))},{default:o(()=>[t(F)]),_:1},8,["class"]),t(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:n[5]||(n[5]=s=>p("eraseLine"))},{default:o(()=>[t(P)]),_:1},8,["class"]),t(D),t(e(pe),null,{popper:o(()=>[i("div",ge,[i("div",we,re(e(u).size),1),i("div",fe,[m(i("input",{"onUpdate:modelValue":n[6]||(n[6]=s=>e(u).size=s),type:"range",min:"1",max:"15",onChange:n[7]||(n[7]=s=>r.value=e(C))},null,544),[[ie,e(u).size]])])])]),default:o(()=>[t(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>n[14]||(n[14]=[i("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[i("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),i("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),i("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])),_:1},8,["class"])]),_:1}),(g(!0),B(ue,null,ce(e(z),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(u).color===s&&e(r)!=="eraseLine"?"active":"shallow"),onClick:ve=>E(s)},{default:o(()=>[i("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:M(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),t(D),t(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:n[8]||(n[8]=s=>V())},{default:o(()=>[t(R)]),_:1},8,["class"]),t(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:n[9]||(n[9]=s=>S())},{default:o(()=>[t(A)]),_:1},8,["class"]),t(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:n[10]||(n[10]=s=>e(y)())},{default:o(()=>[t(j)]),_:1},8,["class"]),t(D),t(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:n[11]||(n[11]=s=>c.value=!e(c))},{default:o(()=>[m(t(G,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(t(H,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:n[12]||(n[12]=s=>d.value=!e(d))},{default:o(()=>[m(t(J,null,null,512),[[b,e(c)]]),m(t(O,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):de("v-if",!0)]),_:1},8,["class"])}}});export{$e as _};
