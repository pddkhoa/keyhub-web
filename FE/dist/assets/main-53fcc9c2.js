import{z as d,u as x,U as u,p as m,h as p,s as h,m as s,t as f}from"./index-b4240993.js";import{S as g}from"./accountDetail-98ab35be.js";import"./editAccount-6afa73a1.js";const S=()=>{var i;const n=d(),a=x(e=>{var o;return(o=e==null?void 0:e.user)==null?void 0:o.user}),{id:t}=u(),r=(i=n.state)==null?void 0:i.indexPage,{isLoading:c,sendRequest:l}=m();return p.useEffect(()=>{l({type:h.GET_USER_ID,slug:t})},[t]),s.jsx("div",{className:"container pl-24 h-full ",children:s.jsxs("div",{className:"bg-gray-800 rounded-md h-fit mt-20 shadow-2xl ",children:[s.jsx("div",{className:"flex flex-col p-6 py-4 gap-8",children:s.jsx(f,{className:"text-white text-2xl font-bold",children:"Account Detail"})}),c?s.jsx("div",{children:"Loading..."}):a?s.jsx(g,{data:a,index:r}):s.jsx("p",{children:"Loading..."})]})})};export{S as default};