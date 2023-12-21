import{c as C,p as E,u as N,m as e,T as z,B as j,s as b,U as T,h as x,V as _,W,X as P,Y as H,Z as V,a0 as Z,a1 as q,a2 as L,a3 as J,a4 as B,a5 as D,i as K,j as X,k as Q,R as ee,a6 as $,a7 as O,t as A,a8 as se,n as ae,a9 as le,_ as I,f as te,aa as re,ab as ne,ac as ie,ad as oe}from"./index-5568676a.js";import{G as F}from"./card-ab8d03c9.js";import{M as U}from"./modalUser-69651942.js";import{C as ce}from"./comment-5b5e865a.js";import{X as de}from"./x-b0e1e629.js";import"./hideBlog-3c8fa8d1.js";import"./Label-32d9a527.js";const xe=C("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]),he=C("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]),me=C("UserPlus2",[["path",{d:"M14 19a6 6 0 0 0-12 0",key:"vej9p1"}],["circle",{cx:"8",cy:"9",r:"4",key:"143rtg"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]),ue=({setFlag:s,id:i})=>{const{isLoading:t,sendRequest:r}=E(),h=N(u=>u.series.isSuccess),c=async u=>{const a=u.toString();await r({type:b.DELETE_SERIES,data:null,slug:a}),r({type:b.LIST_SERIES}),r({type:b.LIST_BLOG}),h&&s.off()};return e.jsx("div",{className:"w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal dark:bg-white overflow-y-scroll",children:e.jsxs("div",{children:[e.jsx("div",{className:"px-5 py-2 flex justify-end space-x-5 shadow border-b-2 ",children:e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})}),e.jsxs("div",{className:"text-center p-5 flex-auto justify-center",children:[e.jsx(z,{className:"w-16 h-16 flex items-center  mx-auto"}),e.jsx("h2",{className:"text-xl font-bold py-4 text-title",children:"Are you sure?"}),e.jsx("p",{className:"text-sm text-gray-500 px-8",children:"Do you really want to delete all your blog in series? This process cannot be undone"})]}),e.jsxs("div",{className:"p-3  mt-2 text-center space-x-4 flex justify-around",children:[e.jsx(j,{onClick:()=>{s.off()},children:"Cancel"}),t?e.jsx(j,{disabled:!0,children:"Please wait.."}):e.jsx(j,{onClick:()=>c(i),children:"Delete"})]})]})})},M=({data:s,setExpanded:i,setSeriesSelected:t})=>{const{id:r}=T(),[h,c]=x.useState(!1),u=N(d=>{var v;return(v=d.user.detail)==null?void 0:v.data}),a=Number(r);x.useEffect(()=>{if(!a||u.id!==Number(a)){const d=!a||u.id===Number(a);c(d)}},[a]);const[l,f]=x.useState(!1),[g,n]=_(!1),p=()=>{const d=s.createday;return J(d)};return e.jsxs("div",{className:"max-w-lg p-4 shadow-md bg-gray-900 text-gray-100 dark:bg-white dark:text-black",children:[e.jsxs("div",{className:"flex justify-between items-center pb-4 border-bottom",children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{onClick:()=>{i(s.id),t(s)},className:"rounded-full w-12 h-12 border border-purple-500 border-dashed hover:brightness-150 hover:border-solid duration-700 cursor-pointer p-1.5 flex justify-between items-center",children:e.jsxs("span",{className:"text-xl w-full h-full flex justify-center items-center ",children:[s.sumBlog,"+"]})})}),h?e.jsxs(W,{children:[e.jsx(P,{asChild:!0,children:e.jsx("button",{className:"hover:brightness-150 opacity-70 rounded-xl hover:bg-input p-2 h-fit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-5 h-5 dark:text-black",id:"menumeatballs",children:e.jsx("path",{fill:"currentColor",d:"M12 10C13.1046 10 14 10.8954 14 12 14 13.1046 13.1046 14 12 14 10.8954 14 10 13.1046 10 12 10 10.8954 10.8954 10 12 10zM4 10C5.10457 10 6 10.8954 6 12 6 13.1046 5.10457 14 4 14 2.89543 14 2 13.1046 2 12 2 10.8954 2.89543 10 4 10zM20 10C21.1046 10 22 10.8954 22 12 22 13.1046 21.1046 14 20 14 18.8954 14 18 13.1046 18 12 18 10.8954 18.8954 10 20 10z",className:"color000000 svgShape"})})})}),e.jsxs(H,{className:"w-56 mr-2 dark:text-white dark:bg-stone-800",children:[e.jsx(V,{children:"Option"}),e.jsx(Z,{}),e.jsxs(q,{onClick:()=>{n.on(),f(!0)},className:"cursor-pointer",children:[e.jsx(z,{className:"w-5 h-5 mr-2"}),e.jsx("span",{children:"Delete"})]})]})]}):null]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("img",{src:s.image?s.image:"https://source.unsplash.com/random/480x360/?4",alt:"",className:"block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"}),e.jsx("div",{className:"flex items-center text-xs",children:e.jsx("span",{children:p()})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("a",{onClick:()=>{i(s.id),t(s)},className:"block text-gray-300 hover:brightness-150 hover:underline decoration-solid cursor-pointer",children:e.jsx("h3",{className:"text-xl font-semibold  dark:text-black",children:s.name})}),e.jsx("p",{className:"leadi dark:text-gray-500",children:s.description})]})]}),e.jsx(L,{flag:g,closeModal:n.off,children:l?e.jsx(ue,{setFlag:n,id:s.id}):null})]})},pe=()=>{const[s,i]=x.useState("TAB_BLOG"),t=N(o=>o.blog.blog.result),r=N(o=>{var y;return(y=o.user.detail)==null?void 0:y.data}),[h,c]=x.useState(""),[u,a]=_(!1),{sendRequest:l}=E(),{id:f}=T(),[g,n]=x.useState(!1),p=N(o=>o.blog.blogByUser),d=N(o=>o.series.seriesByUser),v=N(o=>o.series.series),w=Number(f);return x.useEffect(()=>{if(!w||r.id!==Number(w)){const o=!w||r.id===Number(w);n(o)}},[w]),x.useEffect(()=>{try{w?(l({type:b.GET_BLOG_BY_USER,slug:w.toString()}),l({type:b.LIST_SERIES_USER,slug:w.toString()})):(l({type:b.LIST_BLOG}),l({type:b.LIST_SERIES}))}catch(o){console.log(o)}},[w]),e.jsxs("div",{children:[e.jsx("div",{className:"w-full h-fit",children:e.jsx("div",{className:"flex flex-auto justify-between p-2",children:e.jsx("div",{className:"w-full ",children:e.jsx("div",{className:"relative right-0",children:e.jsx(fe,{setTabs:i,setDisplayModal:c,setDisplayCreate:a})})})})}),e.jsxs("div",{className:"w-full min-h-0  p-1.5 space-y-3",children:[e.jsx("div",{className:"w-full bg-card shadow-lg  rounded-lg overflow-hidden"}),g?e.jsx(G,{tabName:s,data:t,series:v,displayModal:h,displayCreate:u,setDisplayCreate:a}):e.jsx(G,{tabName:s,data:p,series:d,displayModal:h,displayCreate:u,setDisplayCreate:a})]})]})},G=({tabName:s,data:i,series:t,displayModal:r,displayCreate:h,setDisplayCreate:c})=>{const[u,a]=x.useState(),l=N(m=>m.series.blogBySeries),[f,g]=x.useState(),{id:n}=T(),[p,d]=x.useState(!1),v=N(m=>{var S;return(S=m.user.detail)==null?void 0:S.data}),w=N(m=>m.user.listFollowing),o=N(m=>m.user.listFollower),{sendRequest:y}=E(),[Y,R]=x.useState(!1),k=Number(n);switch(x.useEffect(()=>{const m=!k||v.id===Number(k);d(m)},[v,k]),x.useEffect(()=>{if(u)y({type:b.LIST_BLOG_BY_SERIES,slug:f==null?void 0:f.id.toString()});else return},[u]),x.useEffect(()=>{var m,S;y({type:b.GET_LIST_USER_FOLLOWING,slug:p?(m=v.id)==null?void 0:m.toString():k.toString()}),y({type:b.GET_LIST_USER_FOLLOWER,slug:p?(S=v.id)==null?void 0:S.toString():k.toString()})},[Y,p,n]),s){case"TAB_FOLLOWER":return e.jsx(L,{flag:h,closeModal:c.off,children:r==="FOLLOWER"?e.jsx(U,{setFlag:c,data:o,setFollowing:R}):null});case"TAB_FOLLOWING":return e.jsx(L,{flag:h,closeModal:c.off,children:r==="FOLLOWING"?e.jsx(U,{setFlag:c,data:w,setFollowing:R}):null});case"TAB_BLOG":return e.jsx("div",{children:e.jsx("div",{className:"grid grid-cols-3 gap-5 px-8",children:i&&i.length>0?i.map(m=>e.jsx("div",{className:"col-span-1 h-full ",children:e.jsx(F,{data:m})},m.id)):e.jsx("div",{className:"col-span-4",children:e.jsx(B,{})})})});case"TAB_SERIES":return e.jsx("div",{children:e.jsx("div",{className:"grid grid-cols-3 gap-5",children:u?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"col-span-3",children:e.jsx("div",{className:"w-full bg-card shadow-lg  rounded-lg overflow-hidden",children:e.jsxs("div",{className:"py-2 px-6 flex justify-between items-center",children:[e.jsx("span",{className:"font-semibold text-title text-xl",children:e.jsx("div",{className:"flex items-center justify-between ",children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"rounded-full w-12 h-12 border border-purple-500 border-dashed p-1.5 flex justify-between items-center",children:e.jsx("span",{className:"text-xl w-full h-full flex justify-center items-center",children:f==null?void 0:f.sumBlog})}),e.jsx("div",{className:"text-2xl truncate font-bold w-80",children:f==null?void 0:f.name})]})})}),e.jsx("div",{className:"flex gap-5",children:e.jsx(j,{onClick:()=>{a(void 0)},children:"Back"})})]})})}),l&&l.length>0?l.map(m=>e.jsx("div",{className:"col-span-1 h-full ",children:e.jsx(F,{data:m},m.id)})):null]}):p?t&&t.length>0?t.map(m=>e.jsx("div",{className:"col-span-1 h-full ",children:e.jsx(M,{data:m,setExpanded:a,setSeriesSelected:g},m.id)})):e.jsx("div",{className:"col-span-3",children:e.jsx(B,{})}):t&&t.length>0?t.map(m=>e.jsx("div",{className:"col-span-1 h-full ",children:e.jsx(M,{data:m,setExpanded:a,setSeriesSelected:g},m.id)})):e.jsx("div",{className:"col-span-3",children:e.jsx(B,{})})})});default:return null}},fe=({setTabs:s,setDisplayCreate:i,setDisplayModal:t})=>{const[r,h]=x.useState("TAB_BLOG"),c=()=>{h("TAB_BLOG"),s("TAB_BLOG")},u=()=>{h("TAB_SERIES"),s("TAB_SERIES")},a=()=>{h("TAB_FOLLOWING"),s("TAB_FOLLOWING"),i==null||i.on(),t("FOLLOWING")},l=()=>{h("TAB_FOLLOWER"),i==null||i.on(),t("FOLLOWER"),s("TAB_FOLLOWER")};return e.jsx("div",{children:e.jsxs("ul",{className:"flex justify-center  border-t border-gray-600 text-gray-500 ",children:[e.jsx("li",{children:e.jsxs("div",{onClick:c,className:`flex items-center cursor-pointer p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white    ${r==="TAB_BLOG"?"text-white dark:text-black border-t-2 border-white ":""} py-4 font-semibold`,children:[e.jsx("svg",{className:"w-6 h-6 mr-2",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 32 32",stroke:"currentColor",strokeWidth:2,id:"editor",children:e.jsx("path",{d:"M31.03,4.52l.25-.25a2.511,2.511,0,0,0,0-3.54,2.574,2.574,0,0,0-3.54,0l-.7.71L24.47,4H2.5A2.5,2.5,0,0,0,0,6.5v17A2.5,2.5,0,0,0,2.5,26H12.97a5.48,5.48,0,0,1-2.17,3.9L9.2,31.1a.5.5,0,0,0,.3.9h13a.5.5,0,0,0,.3-.9l-1.6-1.2A5.48,5.48,0,0,1,19.03,26H29.5A2.5,2.5,0,0,0,32,23.5V6.5A2.512,2.512,0,0,0,31.03,4.52ZM24.89,5l1-1,1.5-1.5L28.89,4l.62.62L29.13,5l-9.35,9.36,0,0a5,5,0,0,0-2.124-2.126Zm-6,9.866L16.71,15.3l.436-2.181A3.957,3.957,0,0,1,18.892,14.866ZM20.6,30.7l.4.3H11l.4-.3A6.531,6.531,0,0,0,13.98,26h4.04A6.531,6.531,0,0,0,20.6,30.7ZM31,23.5A1.5,1.5,0,0,1,29.5,25H2.5A1.5,1.5,0,0,1,1,23.5V22H31ZM31,21H1V6.5A1.5,1.5,0,0,1,2.5,5H23.47l-7.04,7.05a.481.481,0,0,0-.14.25l-.71,3.54a.506.506,0,0,0,.14.45.533.533,0,0,0,.36.15c.03,0,.06-.01.09-.01l3.54-.71a.069.069,0,0,0,.037-.015c.007,0,.014,0,.021,0l0,0h.009a.334.334,0,0,0,.1-.06l.008-.007a.481.481,0,0,0,.085-.073.583.583,0,0,0,.046-.039L30.31,5.24A1.474,1.474,0,0,1,31,6.5ZM30.57,3.56l-.35.36L28.1,1.8l.35-.36a1.528,1.528,0,0,1,2.12,0,1.5,1.5,0,0,1,0,2.12Zm-16.547,13.1a3.492,3.492,0,0,1-2.58.836A2.481,2.481,0,0,1,9.7,16.515,3.693,3.693,0,0,1,9,14.473a10.337,10.337,0,0,1,.028-1.157,6.235,6.235,0,0,0-.142-2.269A3.88,3.88,0,0,0,6.863,8.714,4.509,4.509,0,0,0,3.379,8.5a.5.5,0,1,0,.342.939,3.488,3.488,0,0,1,2.7.166,2.894,2.894,0,0,1,1.512,1.733,5.413,5.413,0,0,1,.1,1.912A10.976,10.976,0,0,0,8,14.527a4.685,4.685,0,0,0,.9,2.592,3.449,3.449,0,0,0,2.435,1.369,3.98,3.98,0,0,0,.425.023,4.57,4.57,0,0,0,2.912-1.092.5.5,0,1,0-.648-.762Z"})}),"Blog"]})}),e.jsx("li",{children:e.jsxs("div",{onClick:u,className:`flex items-center cursor-pointer p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white     ${r==="TAB_SERIES"?"text-white dark:text-black  border-t-2 border-white ":""} py-4 font-semibold`,children:[e.jsx(he,{className:"mr-2"}),"Series"]})}),e.jsx("li",{children:e.jsxs("div",{onClick:a,className:`flex items-center cursor-pointer p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white     ${r==="TAB_FOLLOWING"?"text-white border-t-2 dark:text-black  border-white ":""} py-4 font-semibold`,children:[e.jsx(me,{className:"mr-2 w-6 h-6"}),"Following"]})}),e.jsx("li",{children:e.jsxs("div",{onClick:l,className:`flex items-center cursor-pointer p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white     ${r==="TAB_FOLLOWER"?"text-white border-t-2 dark:text-black  border-white ":""} py-4 font-semibold`,children:[e.jsx(xe,{className:"mr-2 w-6 h-6"}),"Follower"]})})]})})},ge=({setFlag:s,data:i})=>{const[t,r]=x.useState(!1),{axiosJWT:h,accessToken:c}=D(),u=[{id:1,reason:"Spam"},{id:2,reason:"Thông tin sai sự thật"},{id:3,reason:"Gây thù ghét"},{id:4,reason:"Nội dung không phù hợp"}],[a,l]=x.useState([]),f=n=>{const p=a.indexOf(n);if(p===-1)l([...a,n]);else{const d=[...a];d.splice(p,1),l(d)}};x.useEffect(()=>{const n=u.filter(p=>a.includes(p.id)).map(p=>p.reason).join(", ");g.setFieldValue("reason",n)},[a]);const g=K({initialValues:{blog_id:"",reason:""},validationSchema:X().shape({reason:Q().matches(ee.noBlank).required("Required")}),validateOnChange:!0,onSubmit:async n=>{const p={user_id:i.id,reason:n.reason};r(!0);try{const{body:d}=await $.reportUser(p,c,h);d!=null&&d.success?(r(!1),O.success(d.message),s.off()):(r(!1),O.error((d==null?void 0:d.message)||"Error"))}catch(d){console.log(d),r(!1)}}});return e.jsx("div",{className:"w-2/4 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-gray-900 ",children:e.jsxs("div",{className:"h-full flex flex-col space-y-5",children:[e.jsxs("div",{className:"px-5 py-2 flex space-x-5 shadow border-b-2",children:[e.jsxs("span",{className:"text-lg grow text-title",children:["Report User @",i.second_name]}),e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}),e.jsx("div",{className:"px-8 grow overflow-y-auto",children:e.jsx("form",{onSubmit:g.handleSubmit,children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsxs("div",{className:"relative px-2 py-2",children:[e.jsx(A,{className:"text-md text-title-foreground",children:"Reason"}),u.map(n=>e.jsxs("div",{className:"items-top flex space-x-2 mt-4",children:[e.jsx(ce,{id:n.id.toString(),onCheckedChange:()=>f(n.id),checked:a.includes(n.id)}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:n.id.toString(),className:"text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:n.reason}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You may choice many reason"})]})]},n.id))]}),e.jsxs("div",{className:"relative px-2 py-2",children:[e.jsx(A,{htmlFor:"reason",className:"text-md text-title-foreground",children:"Other"}),e.jsx(se,{className:"mt-2",id:"reason",name:"reason",placeholder:"Tell us a reason report",maxLength:150,onBlur:g.handleBlur,value:g.values.reason,onChange:g.handleChange}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:g.errors.reason&&g.touched.reason?e.jsx(de,{className:"text-red-500"}):null})]})]}),e.jsxs("div",{className:" py-2 border-t",children:[t?e.jsxs(j,{className:"px-5 py-1.5 float-right",disabled:!0,children:[e.jsx(ae,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]}):e.jsx(j,{type:"submit",className:"px-5 py-1.5 float-right",disabled:g.isSubmitting||!g.isValid,children:"Save"}),e.jsx("button",{type:"button",onClick:s.off,className:"px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200",children:"Close"})]})]})})})]})})},je=({setFlag:s,data:i})=>{const[t,r]=x.useState(!1),{axiosJWT:h,accessToken:c}=D(),u=async a=>{r(!0);try{const{body:l}=await $.blockUser(a,c,h);l!=null&&l.success?(r(!1),I.success(l.message)):(r(!1),console.log(l==null?void 0:l.message),I.error((l==null?void 0:l.message)||"Error"))}catch(l){r(!1),console.log(l)}};return e.jsx("div",{className:"w-2/4 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-gray-900 ",children:e.jsxs("div",{className:"h-full flex flex-col space-y-5",children:[e.jsxs("div",{className:"px-5 py-2 flex space-x-5 shadow border-b-2",children:[e.jsxs("span",{className:"text-lg grow text-title",children:["Block User @",i.second_name]}),e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}),e.jsx("div",{className:"px-8 grow overflow-y-auto"}),e.jsxs("div",{className:"text-center p-5 flex-auto justify-center",children:[e.jsx(le,{className:"w-16 h-16 flex items-center  mx-auto"}),e.jsx("h2",{className:"text-xl font-bold py-4 text-title",children:"Are you sure?"}),e.jsx("p",{className:"text-sm text-gray-500 px-8",children:"Do you really want to delete your blog ? This process cannot be undone"})]}),e.jsxs("div",{className:"p-3  mt-2 text-center space-x-4 flex justify-around",children:[e.jsx(j,{onClick:()=>{s.off()},className:"mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",children:"Cancel"}),t?e.jsx(j,{disabled:!0,className:"mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",children:"Please wait..."}):e.jsx(j,{onClick:()=>u(i.id),className:"mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",children:"OK"})]})]})})},Le=()=>{var w;const s=N(o=>{var y;return(y=o.user.detail)==null?void 0:y.data}),{id:i}=T(),t=Number(i),r=te(),{sendRequest:h}=E(),[c,u]=x.useState(!1),a=N(o=>o.user.user);x.useEffect(()=>{const o=!t||s.id===Number(t);u(o),window.scroll(0,0)},[s,t]),x.useEffect(()=>{t&&h({type:b.GET_USER_ID,slug:t.toString()})},[i]);const[l,f]=x.useState(""),[g,n]=_(!1),p=x.useState(a.checkStatusFollow),d=async o=>{p?await h({type:b.UNFOLLOW_USER,data:null,slug:o.toString()}):await h({type:b.FOLLOW_USER,data:null,slug:o.toString()}),h({type:b.GET_USER_ID,slug:t.toString()})},v=async o=>{await h({type:b.START_CHAT,data:{user_id:o}}),r("/messenger")};return e.jsxs("div",{className:"container mx-auto min-h-0 px-4 py-16",children:[e.jsx("header",{className:"w-full p-4",children:e.jsx("div",{className:"relative p-4  w-full",children:e.jsx("div",{className:"flex items-center w-full   gap-5 pb-2",children:e.jsxs("div",{className:"grid grid-cols-12 my-4 px-8 w-full",children:[e.jsx("div",{className:"col-span-2",children:c?e.jsx(ne,{size:150}):e.jsx(re,{size:150,data:(w=a==null?void 0:a.avatar)==null?void 0:w.toString()})}),e.jsxs("div",{className:"col-span-10 flex flex-col w-full   mt-4  px-8",children:[e.jsx("p",{className:"text-2xl text-title font-bold",children:c?s==null?void 0:s.name:a==null?void 0:a.name}),e.jsxs("p",{className:"text-lg  text-blue-700",children:["@",c?s==null?void 0:s.second_name:a==null?void 0:a.second_name]}),e.jsx("p",{className:"text-md break-words text-gray-500",children:c?s==null?void 0:s.descriptions:a==null?void 0:a.descriptions}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex gap-10 mt-4",children:[e.jsxs("div",{className:"flex flex-col ",children:[e.jsx("span",{className:"text-gray-200 dark:text-black text-lg ",children:"Posts"}),e.jsx("span",{className:"text-gray-400 text-xl dark:text-black font-extrabold text-center",children:c?(s==null?void 0:s.sumBlog)||0:a==null?void 0:a.sumBLog})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-gray-200 text-lg dark:text-black ",children:"Following"}),e.jsx("span",{className:"text-gray-400 text-xl dark:text-black font-extrabold text-center",children:c?(s==null?void 0:s.totalFollowing)||0:a==null?void 0:a.totalFollowing})]}),e.jsxs("div",{className:"flex flex-col ",children:[e.jsx("span",{className:"text-gray-200 text-lg dark:text-black",children:"Follower"}),e.jsx("span",{className:"text-gray-400 text-xl dark:text-black font-extrabold text-center",children:c?(s==null?void 0:s.totalFollowers)||0:a==null?void 0:a.totalFollowers})]})]}),c?e.jsxs("div",{className:"flex gap-5 mt-4",children:[e.jsx(j,{onClick:()=>r("/editor"),variant:"gradient",size:"sm",children:"Add New Post"}),e.jsx(j,{onClick:()=>{n.on(),f("CREATE_SERIES")},variant:"gradient",size:"sm",children:"Add New Series"})]}):e.jsxs("div",{className:"flex gap-5 mt-4",children:[a.checkStatusFollow?e.jsx(j,{onClick:()=>{d(t)},variant:"gradient",size:"sm",children:"Unfollow"}):e.jsx(j,{onClick:()=>{d(t)},variant:"gradient",size:"sm",children:"Follow"}),e.jsx(j,{onClick:()=>{v(t)},variant:"gradient",size:"sm",children:"Message"}),e.jsx(j,{variant:"gradient",size:"sm",children:e.jsxs(W,{children:[e.jsx(P,{asChild:!0,children:e.jsx("button",{className:"hover:brightness-150 opacity-70 rounded-xl hover:bg-input p-2 h-fit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-5 h-5",id:"menumeatballs",children:e.jsx("path",{fill:"#ffff",d:"M12 10C13.1046 10 14 10.8954 14 12 14 13.1046 13.1046 14 12 14 10.8954 14 10 13.1046 10 12 10 10.8954 10.8954 10 12 10zM4 10C5.10457 10 6 10.8954 6 12 6 13.1046 5.10457 14 4 14 2.89543 14 2 13.1046 2 12 2 10.8954 2.89543 10 4 10zM20 10C21.1046 10 22 10.8954 22 12 22 13.1046 21.1046 14 20 14 18.8954 14 18 13.1046 18 12 18 10.8954 18.8954 10 20 10z",className:"color000000 svgShape"})})})}),e.jsxs(H,{className:"w-56 mr-2 dark:text-white dark:bg-stone-800",children:[e.jsx(V,{children:"Option"}),e.jsx(Z,{}),e.jsxs(q,{onClick:()=>{n.on(),f("REPORT")},className:"cursor-pointer hover:bg-white/30",children:[e.jsx(ie,{className:"w-6 h-6 mr-2"}),e.jsx("span",{children:"Report User"})]})]})]})})]})]})]})]})})})}),e.jsx("section",{className:"grid grid-cols-4 gap-5 ",children:e.jsx("div",{className:"col-span-4",children:e.jsx(pe,{})})}),e.jsxs(L,{flag:g,closeModal:n.off,children:[l==="CREATE_SERIES"?e.jsx(oe,{setFlag:n}):null,l==="REPORT"?e.jsx(ge,{setFlag:n,data:a}):null,l==="BLOCK"?e.jsx(je,{setFlag:n,data:a}):null]})]})};export{Le as default};