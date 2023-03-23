import{i as x,r,o as m,a as b,e,w as o,y as te,u as n,p as J,F as z,b as l,s as le,f as h,c as H,j as ae,k as ne,B as j,C as oe,D as se,E as de,q,G as O,t as M,S as Y,H as re}from"./entry.c4430e6d.js";const w=()=>{var V=new Date,y=String(V.getDate()).padStart(2,"0"),S=String(V.getMonth()+1).padStart(2,"0"),t=V.getFullYear();return t+"-"+S+"-"+y},ie={class:"s-text-field mb-3"},ue={class:"d-flex"},me={class:"d-flex mt-3 mb-3"},ce={class:"d-flex justify-content-center flex-column align-center"},_e=l("br",null,null,-1),pe=l("p",{class:"text-h6"},"No Internet ",-1),ve={__name:"Meal",props:{meal:{meal_type:"",phone_number:"",address:"",maximum_capacity:0,address_url:"",longitude:"",latitude:"",time_slot:"",landmark:"",start_date:w(),end_date:w()},update:{type:Boolean,default:function(){return!1}}},emits:["saveEvent"],setup(V,{emit:y}){const t=V.meal,k=x(!1),p=x(null),c=x(!1);function $(){t.start_date=w(),t.end_date=w(),c.value=!0}function U(){c.value=!1}function C(_){t.address_url=_.url,t.address=_.formatted_address,t.latitude=_.geometry.location.lat(),t.longitude=_.geometry.location.lng()}const v={name:[_=>_?!0:"This Field Required"]};async function D(){const{valid:_}=await p.value.validate();return!!_}function E(){location.reload()}async function F(){await D()&&(t.latitude==""&&(k.value=!0),y("saveEvent",t))}return(_,a)=>{const f=r("v-text-field"),A=r("GMapAutocomplete"),u=r("v-btn"),d=r("v-form"),B=r("v-icon"),N=r("v-card-text"),T=r("v-card"),R=r("v-dialog");return m(),b(z,null,[e(d,{onSubmit:a[11]||(a[11]=te(()=>{},["prevent"])),ref_key:"saveMealForm",ref:p},{default:o(()=>[e(f,{color:"green",variant:"underlined",rules:v.name,modelValue:n(t).meal_type,"onUpdate:modelValue":a[0]||(a[0]=s=>n(t).meal_type=s),class:"mb-3",label:"Meal Type","hide-details":"auto"},null,8,["rules","modelValue"]),l("div",ie,[e(A,{"aria-placeholder":"",value:n(t).address,class:"pa-0",onPlace_changed:C},null,8,["value"]),l("label",{style:le(n(t).address!=""?{"font-size":"10px",top:"2px"}:{top:"12px"}),class:"label"},"Address",4)]),e(f,{color:"green",variant:"underlined",rules:v.name,modelValue:n(t).landmark,"onUpdate:modelValue":a[1]||(a[1]=s=>n(t).landmark=s),class:"mb-3",label:"Landmark","hide-details":"auto"},null,8,["rules","modelValue"]),e(f,{color:"green",variant:"underlined",modelValue:n(t).phone_number,"onUpdate:modelValue":a[2]||(a[2]=s=>n(t).phone_number=s),class:"mb-3",label:"Contact Number","hide-details":"auto"},null,8,["modelValue"]),e(f,{color:"green",variant:"underlined",rules:v.name,modelValue:n(t).maximum_capacity,"onUpdate:modelValue":a[3]||(a[3]=s=>n(t).maximum_capacity=s),class:"mb-3",label:"Slots","hide-details":"auto"},null,8,["rules","modelValue"]),e(f,{color:"green",variant:"underlined",type:"time",rules:v.name,modelValue:n(t).time_slot,"onUpdate:modelValue":a[4]||(a[4]=s=>n(t).time_slot=s),class:"mb-3",label:"Time Slot","hide-details":"auto"},null,8,["rules","modelValue"]),l("div",ue,[e(u,{onClick:a[5]||(a[5]=s=>$()),size:"small",disabled:n(c),color:"green",class:"me-2"},{default:o(()=>[h("Today")]),_:1},8,["disabled"]),e(u,{onClick:a[6]||(a[6]=s=>U()),disabled:!n(c),size:"small",color:"green",class:""},{default:o(()=>[h("Range")]),_:1},8,["disabled"])]),l("div",me,[e(f,{disabled:n(c),type:"date",color:"green",variant:"underlined",rules:v.name,modelValue:n(t).start_date,"onUpdate:modelValue":a[7]||(a[7]=s=>n(t).start_date=s),class:"mb-3 me-4",label:"start_date","hide-details":"auto"},null,8,["disabled","rules","modelValue"]),e(f,{disabled:n(c),type:"date",color:"green",variant:"underlined",rules:v.name,modelValue:n(t).end_date,"onUpdate:modelValue":a[8]||(a[8]=s=>n(t).end_date=s),class:"mb-3",label:"end_date","hide-details":"auto"},null,8,["disabled","rules","modelValue"])]),l("div",ce,[V.update?(m(),H(u,{key:1,type:"submit",onClick:a[10]||(a[10]=s=>F()),class:"bg-green text-white mb-3 px-10",size:"x-large"},{default:o(()=>[h("Update")]),_:1})):(m(),H(u,{key:0,type:"submit",onClick:a[9]||(a[9]=s=>F()),class:"w-50 bg-green text-white mb-3 px-10",size:"x-large"},{default:o(()=>[h("Submit")]),_:1}))])]),_:1},512),e(R,{modelValue:n(k),"onUpdate:modelValue":a[13]||(a[13]=s=>J(k)?k.value=s:null),width:"auto"},{default:o(()=>[e(T,null,{default:o(()=>[e(N,{class:"pa-6 d-flex align-center",style:{"max-width":"400px"}},{default:o(()=>[e(B,{size:"large",color:"orange",class:"me-2",icon:"mdi-information"}),_e,pe,e(u,{color:"green",class:"ms-2",onClick:a[12]||(a[12]=s=>E())},{default:o(()=>[h("Reload")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}};const fe=l("thead",null,[l("tr",null,[l("th",{class:"text-left"},"S/N"),l("th",{class:"text-left"},"Phone Numbers")])],-1),ge={class:"text-green mt-2 mb-8"},be=l("thead",null,[l("tr",null,[l("th",{class:"text-left"},"S/N"),l("th",{class:"text-left"},"Meal"),l("th",null,"Action")])],-1),xe={class:"text-left"},ye={key:0},he=["href"],we={key:1},Ve=l("br",null,null,-1),ke=l("br",null,null,-1),Ce=l("br",null,null,-1),Se={__name:"setup_meal",async setup(V){let y,S;const{$api:t}=ae(),k=x(["meal_type","phone_number","address","landmark","address_url","start_date","end_date","time_slot","maximum_capacity"]),p=x(!1),c=x(!1),$=x("Setup"),U=x([]),C=x([{meal_type:"Moi moi and Pap",phone_number:"080994957",address:"Minna, Niger",maximum_capacity:10,address_url:"#",longitude:0,latitude:0,landmark:"",start_date:w(),end_date:w()}]),v={meal_type:"",phone_number:"",address:"",maximum_capacity:0,address_url:"",logitude:"",latitude:"",time_slot:"",start_date:w(),end_date:w()};ne();let D=j(v);function E(u){this.meal=j(u),c.value=!0,$.value="Update",p.value=!0}function F(){}function _(){c.value=!1,$.value="Setup",p.value=!0,D=j(v)}async function a(u){let d=await t.postData("/organizers/reservations/"+u,"GET",{},"/organizer_login");d.error||(dialog2.value=!0,U.value=d.responseBody)}async function f(u){try{if(c.value){let d=await t.postData("/meals","PATCH",u,"/organizer_login");d.error||(p.value=!1,C.value.unshift(d.responseBody),await Y.fire("Meal Updated"),location.reload())}else{let d=await t.postData("/meals","POST",u,"/organizer_login");d.error||(p.value=!1,C.value.unshift(d.responseBody),Y.fire("Meal Created"))}}catch(d){console.log(d)}}let A=([y,S]=oe(()=>t.postData("/organizers/meals","GET",{},"/organizer_login")),y=await y,S(),y);return A.error||(C.value=A.responseBody.data),se(async()=>{}),(u,d)=>{const B=r("v-card-title"),N=r("v-table"),T=r("v-card-text"),R=r("v-spacer"),s=r("v-btn"),K=r("v-card-actions"),I=r("v-card"),L=r("v-dialog"),Q=r("center"),W=ve,X=r("v-col"),Z=r("v-row"),P=r("v-icon"),ee=de("maximum");return m(),b(z,null,[e(L,{size:"large",modelValue:u.dialog2,"onUpdate:modelValue":d[1]||(d[1]=i=>u.dialog2=i),persistent:"",width:"auto"},{default:o(()=>[e(I,{style:{"min-width":"350px"},class:"pa-4"},{default:o(()=>[e(B,{class:"text-h5"},{default:o(()=>[h(" All today's Reservation ")]),_:1}),e(T,null,{default:o(()=>[e(N,{density:"compact","fixed-header":""},{default:o(()=>[fe,l("tbody",null,[(m(!0),b(z,null,q(n(U),(i,G)=>(m(),b("tr",{key:i.id},[l("td",null,M(G+1),1),l("td",null,M(i.beneficiary_phone_number),1)]))),128))])]),_:1})]),_:1}),e(K,null,{default:o(()=>[e(R),e(s,{color:"green-darken-1",variant:"text",onClick:d[0]||(d[0]=i=>u.dialog3=!1)},{default:o(()=>[h("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(s,{onClick:d[2]||(d[2]=i=>_()),color:"green"},{default:o(()=>[h("Create Meal")]),_:1}),e(L,{modelValue:n(p),"onUpdate:modelValue":d[4]||(d[4]=i=>J(p)?p.value=i:null),persistent:"","max-width":"540px","min-width":"300px",width:"90%"},{default:o(()=>[O(l("template",null,null,512),[[ee,{props:u.props},void 0,{"capacity:activator":!0}]]),e(I,null,{default:o(()=>[e(B,null,{default:o(()=>[e(Q,null,{default:o(()=>[l("h1",ge,M(n($))+" Iftar Meal",1)]),_:1})]),_:1}),e(T,null,{default:o(()=>[e(W,{meal:n(D),update:n(c),onSaveEvent:d[3]||(d[3]=i=>f(i))},null,8,["meal","update"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(N,{density:"compact","fixed-header":""},{default:o(()=>[be,l("tbody",null,[(m(!0),b(z,null,q(n(C),(i,G)=>(m(),b("tr",{key:i.name},[l("td",null,M(G+1),1),l("td",null,[e(Z,{style:{overflow:"auto",height:"102px"}},{default:o(()=>[(m(!0),b(z,null,q(Object.keys(i),g=>O((m(),H(X,{cols:"6",md:"4",lg:"2",xl:"1",key:g},{default:o(()=>[l("div",null,[l("b",xe,M(g.replaceAll("_"," ")),1)]),g=="address_url"?(m(),b("p",ye,[l("a",{href:i[g],class:"underlined text-orange"},"View Address",8,he)])):(m(),b("p",we,M(i[g]),1))]),_:2},1024)),[[re,n(k).includes(g)]])),128))]),_:2},1024)]),l("td",null,[e(s,{onClick:g=>a(i.id),size:"small",class:"px-0 text-white mx-1 mt-2",color:"orange"},{default:o(()=>[e(P,{icon:"mdi-book"})]),_:2},1032,["onClick"]),Ve,e(s,{onClick:g=>E(i),size:"small",class:"px-0 text-white mx-1 mt-2",color:"orange"},{default:o(()=>[e(P,{icon:"mdi-text-box-edit-outline"})]),_:2},1032,["onClick"]),ke,e(s,{onClick:g=>void 0,size:"small",class:"px-0 text-white mx-1 mt-2",color:"orange"},{default:o(()=>[e(P,{icon:"mdi-delete"})]),_:2},1032,["onClick"]),Ce])]))),128))])]),_:1})],64)}}};export{Se as default};
