import{m as e,a_ as w,a$ as y,aY as b,b0 as k,f as S,p as v,h as d,i as B,j as L,k as p,R as f,s as N,t as j,I as E,a8 as D,B as g,n as A,V as I,u as R,ae as M,a2 as T}from"./index-5568676a.js";import{H as x,B as _}from"./dayjs.min-98ae36c9.js";import{D as F}from"./delete-135c5154.js";import"./createClass-42ca2532.js";const q=({onDeleteCategories:a})=>[{title:e.jsx(x,{title:"#"}),dataIndex:"id",key:"id",width:50,render:s=>s},{title:e.jsx(x,{title:"Categories"}),dataIndex:"categories",key:"categories",width:250,render:(s,t)=>e.jsx(e.Fragment,{children:e.jsx(z,{src:t.avatar,name:t.name})})},{title:e.jsx(x,{align:"center",title:"Number Users"}),dataIndex:"sumUser",key:"sumUser",width:50,render:s=>e.jsx("div",{className:"flex justify-center items-center",children:s})},{title:e.jsx(x,{align:"center",title:"Action"}),dataIndex:"action",key:"action",width:140,render:(s,t)=>e.jsxs("div",{className:"flex items-center justify-center gap-3 ",children:[e.jsx(w,{size:"sm",content:()=>"View Invoice",placement:"top",className:"bg-gray-200 [&>svg]:fill-gray-100 ",color:"invert",children:e.jsx(y,{tag:"span",size:"sm",variant:"outline",className:"hover:brightness-150 cursor-pointer",children:e.jsx(U,{data:t,className:"h-4 w-4"})})}),a&&e.jsx(F,{title:"Delete the invoice",description:`Are you sure you want to delete this #${t.id} invoice?`,onDelete:()=>a(t.id)})]})}];function z({src:a,name:s,className:t,avatarProps:l}){return e.jsx("figure",{className:b("flex items-center gap-3",t),children:e.jsxs("figcaption",{className:" gap-5 items-center  flex",children:[e.jsx(k,{name:s,src:a,...l}),e.jsx("div",{className:"font-lexend text-sm font-medium text-white",children:s})]})})}function U({strokeWidth:a,onClick:s,data:t,...l}){const c=S(),n=()=>{s?s():c(`${t.id}`)};return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:a??1.5,stroke:"currentColor",onClick:n,...l,children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}const V=({setFlag:a,setIsAdd:s})=>{const{isLoading:t,sendRequest:l}=v(),[c,n]=d.useState(""),[h,m]=d.useState(c.length),u=o=>{const r=o.target.value;i.setFieldValue("description",r),n(r),m(r.length)},i=B({initialValues:{name:"",description:""},validationSchema:L().shape({name:p().matches(f.noBlank).required("Required"),description:p().matches(f.noBlank).required("Required")}),validateOnChange:!0,onSubmit:async o=>{s(!1);const r={name:o.name,description:o.description};try{await l({type:N.ADD_NEW_CATEGORIES,data:r}),s(!0)}catch(C){console.log(C),s(!1)}a.off()}});return e.jsx("div",{className:"w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-gray-900 overflow-y-scroll",children:e.jsxs("div",{className:"h-full flex flex-col space-y-3",children:[e.jsxs("div",{className:"px-5 py-2 flex space-x-5 shadow border-b-2 ",children:[e.jsx("span",{className:"text-lg grow text-title",children:"Add New Categories"}),e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:a.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}),e.jsx("div",{className:"px-8 grow overflow-y-auto p-2",children:e.jsxs("form",{onSubmit:i.handleSubmit,children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"relative ",children:[e.jsx(j,{htmlFor:"title",className:"text-md text-title-foreground",children:"Title"}),e.jsx(E,{id:"name",name:"name",placeholder:"Name Categories",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.name})]})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"relative ",children:[e.jsx(j,{htmlFor:"description",className:"text-md text-title-foreground",children:"Description"}),e.jsx(D,{id:"description",name:"description",placeholder:"Description Categories",onChange:u,onBlur:i.handleBlur,value:i.values.description,maxLength:150}),e.jsxs("div",{className:"float-right text-sm text-title-foreground",children:["Characters remaining: ",h,"/150"]})]}),e.jsxs("div",{className:"px-5 py-2 border-t",children:[t?e.jsxs(g,{className:"px-5 py-1.5 float-right",disabled:!0,children:[e.jsx(A,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]}):e.jsx(g,{type:"submit",className:"px-5 py-1.5 float-right",disabled:i.isSubmitting||!i.isValid,children:"Save"}),e.jsx("button",{type:"button",onClick:a.off,className:"px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200",children:"Close"})]})]})]})})]})})},O=()=>{const{isLoading:a,sendRequest:s}=v(),[t,l]=d.useState(!1),[c,n]=I(!1),[h,m]=d.useState(!1),[u,i]=d.useState(!1),o=R(r=>r.admin.listAllCategories);return d.useEffect(()=>{s({type:N.ADMIN_GET_CATEGORIES})},[h,u]),e.jsxs("div",{className:"grid grid-cols-1 gap-6 pl-16 h-full 3xl:gap-8 shadow-2xl py-16 ",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx(g,{onClick:()=>{n.on(),l(!0)},variant:"gradient",className:"rounded-sm",children:"Add New Categories"})}),a?e.jsx("div",{children:e.jsx(M,{})}):e.jsx(e.Fragment,{children:e.jsx(_,{variant:"classic",title:"Classic Table",className:"opacity-90 text-white shadow-2xl",data:o,enableSearch:!0,enablePagination:!0,setIsDelete:i,getColumns:q})}),e.jsx(T,{flag:c,closeModal:n.off,children:t?e.jsx(V,{setFlag:n,setIsAdd:m}):null})]})};export{O as default};