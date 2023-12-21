import{h as g,f as _,p as E,m as s,t,b4 as a,s as p,i as T,I as h,S as A,v as k,w as B,x as F,y as N,b6 as D,n as L}from"./index-5568676a.js";import{E as I}from"./editAccount-49189e01.js";const U=({data:e,index:c})=>{const[r,o]=g.useState(!1),i=_(),x=()=>{o(!r)},{isLoading:m,sendRequest:u}=E(),j=async y=>{await u({type:p.ADMIN_DELETE_USER,data:y}),i(0),u({type:p.ADMIN_GET_ALLUSER,slug:c==null?void 0:c.toString()})};return s.jsx("div",{className:"p-8 mb-12  flex justify-center text-center",children:s.jsxs("div",{className:"flex flex-col gap-8",children:[s.jsx(t,{className:"text-white text-2xl font-bold",children:"Deactivate Account"}),s.jsxs("div",{className:"flex items-center text-white",children:[s.jsx("input",{id:"link-checkbox",type:"checkbox",checked:r,onChange:x,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),s.jsxs("label",{htmlFor:"link-checkbox",className:"ms-2 text-sm font-medium ",children:["I agree with the"," ",s.jsx("a",{href:"#",className:"text-blue-600 dark:text-blue-500 hover:underline",children:"terms and conditions"}),"."]})]}),m?s.jsx(a,{className:`bg-red-700 text-white w-full opacity-50 cursor-not-allowed
          }`,disabled:!0,children:"Please wait..."}):s.jsx(a,{className:`bg-red-700 text-white w-full ${r?"":"opacity-50 cursor-not-allowed"}`,disabled:!r,onClick:()=>{j({user_id:e==null?void 0:e.id,value:2})},children:"Deactivate Account"})]})})},V=({data:e,index:c})=>{var x;const[r,o]=g.useState("ACCOUNT"),i=()=>{switch(r){case"ACCOUNT":return s.jsx(I,{data:e});case"PROFILE":return s.jsx(R,{data:e,index:c});case"DELETE_ACCOUNT":return s.jsx(U,{data:e,index:c});default:return null}};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"flex  border-b p-6",children:s.jsxs("div",{className:"w-full  p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100",children:[s.jsx("div",{className:"flex-shrink-0  mb-6 h-36  w-36 sm:mb-0",children:s.jsx("img",{src:(x=e==null?void 0:e.avatar)==null?void 0:x.toString(),alt:"",className:"object-cover object-center w-full h-full rounded bg-gray-500"})}),s.jsxs("div",{className:"flex flex-col space-y-4",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-semibold",children:e==null?void 0:e.name}),s.jsxs("span",{className:"text-sm text-blue-500",children:["@",e==null?void 0:e.second_name]})]}),s.jsx("div",{children:e==null?void 0:e.descriptions})]})]})}),s.jsxs("ul",{className:"grid grid-flow-col text-center text-gray-500",children:[s.jsx(f,{title:"Account",tabs:"ACCOUNT",setTabs:o,activeTab:r}),s.jsx(f,{title:"Profile",tabs:"PROFILE",setTabs:o,activeTab:r}),s.jsx(f,{title:"Deactivate Account",tabs:"DELETE_ACCOUNT",setTabs:o,activeTab:r})]}),s.jsx("div",{className:" text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full",children:i()})]})},f=({tabs:e,setTabs:c,title:r,activeTab:o})=>{const i=()=>{c(e)};return s.jsx("li",{children:s.jsx("div",{onClick:i,className:`flex justify-center border-t-2  cursor-pointer py-4 ${o===e?"text-indigo-600 border-indigo-600":""}`,children:r})},e)},R=({data:e,index:c})=>{var b,C;const{isLoading:r,sendRequest:o}=E(),[i,x]=g.useState("Male"),[m,u]=g.useState((e==null?void 0:e.descriptions)||""),[j,y]=g.useState(m==null?void 0:m.length),v=n=>{const d=n.target.value;l.setFieldValue("descriptions",d),u(d),y(d.length)},l=T({initialValues:{id:e==null?void 0:e.id,email:e==null?void 0:e.email,name:e==null?void 0:e.name,phone:e==null?void 0:e.phone,second_name:e==null?void 0:e.second_name,gender:e==null?void 0:e.gender,descriptions:e==null?void 0:e.descriptions,address:e==null?void 0:e.address,company:e==null?void 0:e.company,country:e==null?void 0:e.country,school:e==null?void 0:e.school},onSubmit:async n=>{var w,S;const d={id:e==null?void 0:e.id,email:n==null?void 0:n.email,name:n==null?void 0:n.name,phone:n==null?void 0:n.phone,second_name:n==null?void 0:n.second_name,gender:n==null?void 0:n.gender,descriptions:n==null?void 0:n.descriptions,address:n==null?void 0:n.address,company:n==null?void 0:n.company,country:n==null?void 0:n.country,school:n==null?void 0:n.school};await o({type:p.ADMIN_UPDATE_USER,data:d,slug:(w=e==null?void 0:e.id)==null?void 0:w.toString()}),o({type:p.ADMIN_GET_ALLUSER,slug:c==null?void 0:c.toString()}),o({type:p.GET_USER_ID,slug:(S=e==null?void 0:e.id)==null?void 0:S.toString()})}});return s.jsx(s.Fragment,{children:s.jsx("div",{className:"p-8 mb-12",children:s.jsx("form",{onSubmit:l.handleSubmit,children:s.jsxs("div",{className:"grid w-full items-center gap-4",children:[s.jsxs("div",{className:"flex flex-col space-y-5 py-4",children:[s.jsxs("div",{className:"relative px-2",children:[s.jsx(t,{htmlFor:"name",className:"text-md text-title-foreground",children:"Full Name"}),s.jsx(h,{id:"name",type:"text",name:"name",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.name,className:"w-full text-sm px-4 py-3  rounded-lg",placeholder:e==null?void 0:e.name})]}),s.jsxs("div",{className:"relative px-2",children:[s.jsx(t,{htmlFor:"second_name",className:"text-md text-title-foreground",children:"Second Name"}),s.jsx(h,{id:"second_name",type:"text",name:"second_name",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.second_name,placeholder:e==null?void 0:e.second_name,className:"w-full text-sm px-4 py-3  rounded-lg"})]}),s.jsxs("div",{className:"relative px-2",children:[s.jsx(t,{htmlFor:"phone",className:"text-md text-title-foreground",children:"Phone"}),s.jsx(h,{id:"phone",type:"text",name:"phone",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.phone,placeholder:e==null?void 0:e.phone,className:"w-full text-sm px-4 py-3  rounded-lg"})]}),s.jsx("div",{className:"relative px-2",children:s.jsxs("div",{className:"relative  flex flex-col",children:[s.jsx(t,{className:"text-sm text-title-foreground",children:"Gender"}),s.jsx("span",{className:"my-2 text-sm w-full",children:s.jsxs(A,{name:"gender",onValueChange:x,defaultValue:i,children:[s.jsx(k,{className:"w-full text-sm",children:s.jsx(B,{placeholder:"Gender"})}),s.jsxs(F,{children:[s.jsx(N,{value:"Male",children:"Male"}),s.jsx(N,{value:"Femnale",children:"Female"}),s.jsx(N,{value:"Other",children:"Other"})]})]})})]})}),s.jsxs("div",{className:"grid grid-cols-2 gap-5 px-2",children:[s.jsxs("div",{className:"col-span-1",children:[s.jsx(t,{htmlFor:"country",className:"text-md text-title-foreground",children:"Country"}),s.jsx(h,{id:"country",type:"text",name:"country",onChange:l.handleChange,onBlur:l.handleBlur,value:((b=l==null?void 0:l.values)==null?void 0:b.country)||"nothing",placeholder:(e==null?void 0:e.country)||"nothing",className:"w-full text-sm px-4 py-3  rounded-lg"})]}),s.jsxs("div",{className:"col-span-1",children:[s.jsx(t,{htmlFor:"address",className:"text-md text-title-foreground",children:"Address"}),s.jsx(h,{id:"address",type:"text",name:"address",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.address||"nothing",placeholder:(e==null?void 0:e.address)||"nothing",className:"w-full text-sm px-4 py-3  rounded-lg"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-5 px-2",children:[s.jsxs("div",{className:"col-span-1",children:[s.jsx(t,{htmlFor:"school",className:"text-md text-title-foreground",children:"School"}),s.jsx(h,{id:"school",type:"text",name:"school",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.school||"nothing",placeholder:(e==null?void 0:e.school)||"nothing",className:"w-full text-sm px-4 py-3  rounded-lg"})]}),s.jsxs("div",{className:"col-span-1",children:[s.jsx(t,{htmlFor:"company",className:"text-md text-title-foreground",children:"Comany"}),s.jsx(h,{id:"company",type:"text",name:"company",onChange:l.handleChange,onBlur:l.handleBlur,value:l.values.company||"nothing",placeholder:(e==null?void 0:e.company)||"nothing",className:"w-full text-sm px-4 py-3  rounded-lg"})]})]})]}),s.jsx("div",{className:"grid w-full items-center gap-4",children:s.jsx("div",{className:"flex flex-col space-y-2",children:s.jsxs("div",{className:"relative px-2 py-2",children:[s.jsx(t,{htmlFor:"descriptions",className:"text-md text-title-foreground",children:"Bio"}),s.jsx(D,{id:"descriptions",name:"descriptions",className:"text-white",placeholder:"Tell us a little bit about yourself",maxLength:150,onBlur:l.handleBlur,value:((C=l==null?void 0:l.values)==null?void 0:C.descriptions)||"nothing",onChange:v}),s.jsxs("div",{className:"float-right text-sm text-title-foreground",children:["Characters remaining: ",j,"/150"]})]})})}),s.jsxs("div",{className:" py-2 border-t",children:[r?s.jsxs(a,{className:"px-5 py-1.5 float-right",disabled:!0,children:[s.jsx(L,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]}):s.jsx(a,{type:"submit",className:"px-5 py-1.5 float-right bg-blue-600 text-white",disabled:l.isSubmitting||!l.isValid,children:"Save"}),s.jsx("button",{type:"button",className:"px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200",children:"Close"})]})]})})})})};export{V as S,f as T};