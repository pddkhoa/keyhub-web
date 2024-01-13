import{n as e,a$ as x,b0 as m,aZ as d,b1 as p,h as j,q as u,u as v,r as h,t as f,af as w}from"./index-12e1c6d0.js";import{H as c,B as k}from"./dayjs.min-768535ec.js";import{f as o}from"./formate-date-95365f87.js";import"./createClass-f4088537.js";const N=({sortConfig:a,onHeaderCellClick:n,setDisplayCreate:s,setDisplayModal:i,setDataBlog:r})=>[{title:e.jsx(c,{title:"#"}),dataIndex:"id",key:"id",width:50,render:t=>t},{title:e.jsx(c,{title:"Blogs"}),dataIndex:"blog",key:"blog",width:250,render:t=>e.jsx(g,{src:t.avatar,name:t.title,description:`ID-${t.id}`})},{title:e.jsx(c,{title:"Account Report"}),dataIndex:"user_reported",key:"user_reported",width:150,render:t=>{var l;return e.jsx(g,{src:(l=t==null?void 0:t.avatar)==null?void 0:l.toString(),name:t==null?void 0:t.name,description:`@-${t==null?void 0:t.second_name}`})}},{title:e.jsx(c,{title:"Reason"}),dataIndex:"reason",key:"reason",width:100,render:t=>t},{title:e.jsx(c,{title:"Created",sortable:!0,ascending:(a==null?void 0:a.direction)==="asc"&&(a==null?void 0:a.key)==="create_at"}),onHeaderCell:()=>n("create_at"),dataIndex:"create_at",key:"create_at",width:150,render:t=>e.jsx(y,{date:t})},{title:e.jsx(c,{align:"center",title:"Action"}),dataIndex:"action",key:"action",width:200,render:(t,l)=>e.jsxs("div",{className:"flex items-center justify-center gap-3 ",children:[e.jsx(x,{size:"sm",content:()=>"View Invoice",placement:"top",className:"bg-gray-200 [&>svg]:fill-gray-100 ",color:"invert",children:e.jsx(m,{onClick:()=>{console.log(l)},tag:"span",size:"sm",variant:"outline",className:"hover:brightness-150 cursor-pointer",children:e.jsx(b,{data:l.blog,className:"h-4 w-4"})})}),e.jsx(x,{size:"sm",content:()=>"Edit Invoice",placement:"top",className:"bg-gray-200 [&>svg]:fill-gray-100 ",color:"invert",children:e.jsx(m,{tag:"span",size:"sm",variant:"outline",className:"hover:brightness-150 cursor-pointer",children:s&&i&&e.jsx(L,{onClick:()=>{s.on(),i("BLOG_REPORT"),r(l)}})})})]})}];function y({date:a,className:n,timeClassName:s,dateClassName:i,dateFormat:r="MMMM D, YYYY",timeFormat:t="h:mm A"}){return e.jsxs("div",{className:d(n,"grid gap-1"),children:[e.jsx("time",{dateTime:o(a,"YYYY-MM-DD"),className:d("font-medium text-white",i),children:o(a,r)}),e.jsx("time",{dateTime:o(a,"HH:mm:ss"),className:d("text-[13px] text-gray-400",s),children:o(a,t)})]})}function g({src:a,name:n,className:s,description:i,avatarProps:r}){return e.jsx("figure",{className:d("flex items-center gap-3",s),children:e.jsxs("figcaption",{className:" gap-5 items-center  flex",children:[e.jsx(p,{name:n,src:a,...r}),e.jsxs("div",{className:"flex flex-col mt-1",children:[e.jsx("div",{className:"font-lexend text-sm font-medium text-white",children:n}),e.jsx("div",{className:"text-sm  text-gray-400",children:i})]})]})})}function b({strokeWidth:a,onClick:n,data:s,...i}){const r=j(),t=()=>{n?n():r(`/admin/blogs/${s.id}`)};return e.jsxs("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:a??1.5,stroke:"currentColor",...i,children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}function L({strokeWidth:a,...n}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:a??1.5,stroke:"currentColor",...n,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})})}const B=()=>{const{isLoading:a,sendRequest:n}=u(),s=v(t=>t.admin.listBlogReport),[i,r]=h.useState(!1);return h.useEffect(()=>{r(!1),n({type:f.ADMIN_GET_BLOG_REPORT})},[i]),e.jsx("div",{className:"grid grid-cols-1 gap-6 pl-16 h-full 3xl:gap-8 shadow-2xl py-16 ",children:a?e.jsx("div",{children:e.jsx(w,{})}):e.jsx(e.Fragment,{children:e.jsx(k,{variant:"classic",title:"Classic Table",className:"opacity-90 text-white shadow-2xl",data:s,enableSearch:!0,enablePagination:!0,getColumns:N,setEvalute:r})})})};export{B as default};