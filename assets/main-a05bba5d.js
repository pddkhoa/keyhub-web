import{n as e,a$ as o,b0 as x,aZ as d,b1 as p,h,q as j,u as g,r as m,t as u,af as v}from"./index-cd5b4876.js";import{H as r,B as f}from"./dayjs.min-13f3c5e1.js";import{D as w}from"./delete-98ab6945.js";import{f as c}from"./formate-date-d6006e36.js";import"./createClass-4cf1ad53.js";const k=({sortConfig:a,onHeaderCellClick:s,onDeleteBlog:n})=>[{title:e.jsx(r,{title:"#"}),dataIndex:"id",key:"id",width:50,render:t=>t},{title:e.jsx(r,{title:"Blogs"}),dataIndex:"title",key:"title",width:250,render:t=>t},{title:e.jsx(r,{title:"Author"}),dataIndex:"users",key:"users",width:150,render:t=>{var i;return e.jsx(N,{src:(i=t==null?void 0:t.avatar)==null?void 0:i.toString(),name:t==null?void 0:t.name,description:`HPT-${t==null?void 0:t.second_name}`})}},{title:e.jsx(r,{title:"Categories"}),dataIndex:"categories",key:"categories",width:100,render:t=>t==null?void 0:t.name},{title:e.jsx(r,{title:"Created",sortable:!0,ascending:(a==null?void 0:a.direction)==="asc"&&(a==null?void 0:a.key)==="create_date"}),onHeaderCell:()=>s("create_date"),dataIndex:"create_date",key:"create_date",width:100,render:t=>e.jsx(y,{date:t})},{title:e.jsx(r,{align:"center",title:"Action"}),dataIndex:"action",key:"action",width:140,render:(t,i)=>e.jsxs("div",{className:"flex items-center justify-center gap-3 ",children:[e.jsx(o,{size:"sm",content:()=>"Edit Invoice",placement:"top",className:"bg-gray-200 [&>svg]:fill-gray-100 ",color:"invert",children:e.jsx(x,{tag:"span",size:"sm",variant:"outline",className:"hover:brightness-150 cursor-pointer",children:e.jsx(I,{data:i})})}),e.jsx(o,{size:"sm",content:()=>"View Invoice",placement:"top",className:"bg-gray-200 [&>svg]:fill-gray-100 ",color:"invert",children:e.jsx(x,{onClick:()=>{},tag:"span",size:"sm",variant:"outline",className:"hover:brightness-150 cursor-pointer",children:e.jsx(L,{data:i,className:"h-4 w-4"})})}),n&&e.jsx(w,{title:"Delete the invoice",description:`Are you sure you want to delete this #${i.id} invoice?`,onDelete:()=>n(i.id.toString())})]})}];function y({date:a,className:s,timeClassName:n,dateClassName:t,dateFormat:i="MMMM D, YYYY",timeFormat:l="h:mm A"}){return e.jsxs("div",{className:d(s,"grid gap-1"),children:[e.jsx("time",{dateTime:c(a,"YYYY-MM-DD"),className:d("font-medium text-white",t),children:c(a,i)}),e.jsx("time",{dateTime:c(a,"HH:mm:ss"),className:d("text-[13px] text-gray-400",n),children:c(a,l)})]})}function N({src:a,name:s,className:n,avatarProps:t}){return e.jsx("figure",{className:d("flex items-center gap-3",n),children:e.jsxs("figcaption",{className:" gap-5 items-center  flex",children:[e.jsx(p,{name:s,src:a,...t}),e.jsx("div",{className:"font-lexend text-sm font-medium text-white",children:s})]})})}function L({strokeWidth:a,onClick:s,data:n,...t}){const i=h(),l=()=>{s?s():i(`${n.id}`)};return e.jsxs("svg",{onClick:l,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:a??1.5,stroke:"currentColor",...t,children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function I({strokeWidth:a,onClick:s,data:n,...t}){const i=h(),l=()=>{s?s():i(`/admin/editor/${n.id}`,{state:n})};return e.jsx("svg",{onClick:l,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:a??1.5,stroke:"currentColor",...t,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})})}const E=()=>{const{isLoading:a,sendRequest:s}=j(),n=g(l=>l.admin.listAllBlog),[t,i]=m.useState(!1);return m.useEffect(()=>{i(!1),s({type:u.ADMIN_GET_ALLBLOG})},[t]),e.jsx("div",{className:"grid grid-cols-1 gap-6 pl-16 h-full 3xl:gap-8 shadow-2xl py-16 ",children:a?e.jsx("div",{children:e.jsx(v,{})}):e.jsx(e.Fragment,{children:e.jsx(f,{variant:"classic",title:"Classic Table",className:"opacity-90 text-white shadow-2xl",data:n,enableSearch:!0,enablePagination:!0,getColumns:k,setIsDelete:i})})})};export{E as default};
