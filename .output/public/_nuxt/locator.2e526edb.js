import{_ as Y}from"./nuxt-link.5af042e7.js";import{h as Z,i,j as ee,k as te,l as se,r as c,o as d,a as h,u as _,c as y,w as a,m as D,e as n,p as oe,b as e,F as z,S as b,f,t as l,q as $,s as ae,v as ne,x as le}from"./entry.c4430e6d.js";const ce=""+globalThis.__publicAssetsURL("food.png");const p=x=>(ne("data-v-4403f1d6"),x=x(),le(),x),re=p(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"S/N"),e("th",{class:"text-left"},"Organizer"),e("th",{class:"text-left"},"Meal Type"),e("th",{class:"text-left"},"Address")])],-1)),ie=["href"],de={class:"s-text-field"},_e={class:"mt-7"},ue={class:"shadow d-flex rounded-lg pa-2 position-relative"},pe=p(()=>e("div",{class:"d-flex justify-content-center align-center foodImage"},[e("img",{src:ce,width:"100"})],-1)),fe={class:"foundation"},ve={class:"content-x"},ge=p(()=>e("span",{class:"text-green heading-x"},"Meal: ",-1)),he={class:"content-x"},xe=p(()=>e("span",{class:"text-green heading-x"},"Address: ",-1)),me={class:"content-x"},ye={class:"display-type"},be=p(()=>e("span",{color:"#F5891B",class:"heading-x"},"Date: Today ",-1)),ke={class:"content-x"},we=p(()=>e("p",{class:"d-none d-sm-flex",style:{margin:"0px 8px",width:"3px",background:"#ccc",height:"inherit"}},null,-1)),Se=p(()=>e("span",{color:"#F5891B",class:"heading-x"},"Available Slot: ",-1)),Ce={class:"content-x"},ze={class:"d-flex align-center"},Ae={key:0,class:"distance-away"},Be=p(()=>e("a",{href:"#",class:"mt-5 d-block"},"Show More",-1)),Le={__name:"locator",setup(x){const g=i(!1);i(""),i({});const k=i(""),E=i(""),w=i([]),F=i({lat:51.093048,lng:6.84212}),{$api:S}=ee(),r=te();function G(s){E.value=s.url,k.value=s.formatted_address,w.value={lat:s.geometry.location.lat(),long:s.geometry.location.lng()}}const A=i([]),B=i([]);async function P(){if(this.address=="")return b.fire("Enter a location or an address phrase"),!1;M(w.value.long,w.value.lat)}async function j(s,o=!1){r.beneficiary_access_token==""&&o==!1?await this.login()&&await L(s):await L(s)}async function L(s){try{r.isLoading=!0;let o=await S.postData("/reservations","POST",{meal_id:s},"/locator",!0,!1);o.error?o.status==409?(b.fire(o.responseBody.message),r.beneficiary.reservation_ids.push(s)):b.fire(o.responseBody):(r.beneficiary.reservation_ids.push(s),r.isLoading=!1)}catch(o){console.log(o)}}async function M(s="",o=""){let u="";s!=""&&(u=s+"/"+o);let m=await S.postData("/meals/"+u,"GET",{},"/locator");m.error||(A.value=m.responseBody)}const U=s=>{console.log(s),M(s.coords.longitude,s.coords.latitude)},q=s=>{console.log(s)};navigator.geolocation.getCurrentPosition(U,q,{enableHighAccuracy:!0,timeout:1e4}),se(()=>k.value===""?"12px":"-12px");async function O(){let s=await S.postData("/reservations","GET",{},"/locator",!0,!1);s.error?b.fire("something went wrong"):(B.value=s.responseBody,g.value=!0)}return(s,o)=>{const u=c("v-btn"),m=c("v-card-title"),H=c("v-table"),J=c("v-card-text"),N=c("v-spacer"),K=c("v-card-actions"),Q=c("v-card"),W=c("v-dialog"),X=c("GMapAutocomplete"),C=c("v-col"),R=c("v-row"),T=Y;return d(),h(z,null,[_(r).beneficiary_access_token!=""?(d(),y(u,{key:0,onClick:o[0]||(o[0]=t=>O()),size:"small",style:{padding:"6px",width:"28px !important",height:"28px !important","border-radius":"20px",position:"absolute",top:"60px",right:"60px","font-size":"0.8em"},class:"bg-orange text-white d-flex justify-center align-center"},{default:a(()=>{var t,v;return[f(l((v=(t=_(r).beneficiary)==null?void 0:t.reservation_ids)==null?void 0:v.length),1)]}),_:1})):D("",!0),n(W,{size:"large",modelValue:_(g),"onUpdate:modelValue":o[2]||(o[2]=t=>oe(g)?g.value=t:null),persistent:"",width:"auto"},{default:a(()=>[n(Q,{style:{"min-width":"350px"},class:"pa-4"},{default:a(()=>[n(m,{class:"text-h5"},{default:a(()=>[f(" All today's Reservation ")]),_:1}),n(J,null,{default:a(()=>[n(H,{density:"compact","fixed-header":""},{default:a(()=>[re,e("tbody",null,[(d(!0),h(z,null,$(_(B),(t,v)=>(d(),h("tr",{key:t.id},[e("td",null,l(v+1),1),e("td",null,l(t.organizer.name),1),e("td",null,l(t.meal_type),1),e("td",null,[e("a",{href:t.address_url,target:"_blank",class:"underlined text-orange"},l(t.address),9,ie)])]))),128))])]),_:1})]),_:1}),n(K,null,{default:a(()=>[n(N),n(u,{color:"green-darken-1",variant:"text",onClick:o[1]||(o[1]=t=>g.value=!1)},{default:a(()=>[f("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(R,null,{default:a(()=>[n(C,{cols:"12",md:"6",lg:"6",xl:"6"},{default:a(()=>[e("div",de,[n(X,{class:"pa-0",onPlace_changed:G}),e("label",{style:ae(_(k)!=""?{"font-size":"10px",top:"3.5px"}:{top:"12px"}),class:"label"},"Address",4)])]),_:1}),n(C,{cols:"12",md:"6",lg:"6",xl:"6"},{default:a(()=>[n(u,{onClick:o[3]||(o[3]=t=>P()),class:"me-2 mt-2",color:"green"},{default:a(()=>[f("Search Location")]),_:1})]),_:1})]),_:1}),e("div",_e,[n(R,null,{default:a(()=>[(d(!0),h(z,null,$(_(A),(t,v)=>(d(),y(C,{key:v,cols:"12",lg:"6",xl:"6"},{default:a(()=>{var V,I;return[e("div",ue,[pe,e("div",null,[e("p",fe,[e("span",ve,l(t.organizer.name),1)]),e("p",null,[ge,f(),n(T,{to:"https://www.google.com/search?tbm=isch&q=food:"+t.meal_type,target:"_blank",class:"underlined"},{default:a(()=>[e("span",he,l(t.meal_type),1)]),_:2},1032,["to"])]),e("p",null,[xe,n(T,{to:t.address_url,target:"_blank",class:"underlined"},{default:a(()=>[e("span",me,l(t.address.slice(0,40))+"...",1)]),_:2},1032,["to"])]),e("div",ye,[e("p",null,[be,e("span",ke,l(t==null?void 0:t.time_slot),1)]),we,e("p",null,[Se,e("span",Ce,l(t.maximum_capacity-t.total_reservations),1)])]),e("div",ze,[(I=(V=_(r).beneficiary)==null?void 0:V.reservation_ids)!=null&&I.includes(t.id)?(d(),y(u,{key:0,disabled:!0,size:"small",color:"green",class:"mx-auto d-inline-block my-1"},{default:a(()=>[f("Reserved for "+l(_(r).beneficiary.phone_number),1)]),_:1})):(d(),y(u,{key:1,size:"small",color:"green",onClick:Me=>j(t.id),class:"mx-auto d-inline-block my-1"},{default:a(()=>[f("Make Reservation")]),_:2},1032,["onClick"])),n(N),e("div",null,[t!=null&&t.distance?(d(),h("span",Ae,[e("b",null,l(parseInt(t.distance))+"km away ",1)])):D("",!0)])])])])]}),_:2},1024))),128))]),_:1}),n(_(F),null,{default:a(()=>[Be]),_:1})])],64)}}},Te=Z(Le,[["__scopeId","data-v-4403f1d6"]]);export{Te as default};