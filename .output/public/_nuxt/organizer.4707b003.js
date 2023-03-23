import{j as A,i as a,r as d,o as B,a as O,e as l,w as m,u as s,y as T,F as G,p as g,b as c,s as M,f as x,z as w,S as y}from"./entry.c4430e6d.js";const U=c("h1",{class:"text-green mt-2 mb-8"},"Become an Organizer",-1),$={class:"s-text-field mb-4"},j={class:"d-flex justify-content-center flex-column align-center"},D={__name:"organizer",setup(R){const{$api:V}=A(),o=a(""),p=a(""),r=a(),v=a(null),u=a(""),z=a(""),P=a([]),h=a({lat:51.093048,lng:6.84212});function N(t){z.value=t.url,p.value=t.formatted_address,P.value={lat:t.geometry.location.lat(),long:t.geometry.location.lng()}}function S(){return w("/setup_meal")}const i={name:[t=>t?!0:"This Field Required"]};async function _(){const{valid:t}=await v.value.validate();return!!t}async function C(){if(await _())return(await V.postData("/organizers","POST",{phone_number:r.value,name:o.value,address:p.value,password:u.value})).error?(y.fire("something went wrong, please try again"),!1):(await y.fire({title:"Created Successfully!",text:" Please Login with registered Phone Number and Password"}),w("/setup_meal"));console.log(_())}return(t,e)=>{const f=d("v-text-field"),F=d("GMapAutocomplete"),b=d("v-btn"),k=d("v-form");return B(),O(G,null,[l(s(h),null,{default:m(()=>[U]),_:1}),l(k,{onSubmit:e[5]||(e[5]=T(()=>{},["prevent"])),ref_key:"loginForm",ref:v},{default:m(()=>[l(f,{color:"green",variant:"underlined",rules:i.name,modelValue:s(o),"onUpdate:modelValue":e[0]||(e[0]=n=>g(o)?o.value=n:null),class:"mb-4",label:"Name/Organization/Foundation","hide-details":"auto"},null,8,["rules","modelValue"]),c("div",$,[l(F,{rules:i.name,"aria-placeholder":"",class:"pa-0",onPlace_changed:N},null,8,["rules"]),c("label",{style:M(s(p)!=""?{"font-size":"10px",top:"2px"}:{top:"12px"}),class:"label"},"Address",4)]),l(f,{color:"green",variant:"underlined",rules:i.name,modelValue:s(r),"onUpdate:modelValue":e[1]||(e[1]=n=>g(r)?r.value=n:null),class:"mb-4",label:"Contact Number","hide-details":"auto"},null,8,["rules","modelValue"]),l(f,{color:"green",variant:"underlined",rules:i.name,modelValue:s(u),"onUpdate:modelValue":e[2]||(e[2]=n=>g(u)?u.value=n:null),class:"mb-4",label:"Password","hide-details":"auto"},null,8,["rules","modelValue"]),c("div",j,[l(b,{type:"submit",onClick:e[3]||(e[3]=n=>C()),class:"w-50 bg-green text-white mb-3 px-10",size:"x-large"},{default:m(()=>[x("Submit")]),_:1}),l(b,{type:"submit",onClick:e[4]||(e[4]=n=>S()),class:"underlined bg-white elevation-0 px-10",size:"x-large"},{default:m(()=>[x("Goto Organizer's Page")]),_:1})])]),_:1},512)],64)}}};export{D as default};
