import{p as g,m as e,T as N,B as n,s as d,U as k,h as j,u as C,W as L,X as B,Y as S,Z as R,a0 as O,a1 as w,aF as y,aG as T,az as E,aH as _,aI as M,a5 as G,i as I,j as D,k as A,R as K,a6 as H,_ as v,t as b,a8 as P,n as V}from"./index-3393d987.js";import{a as z,C as U}from"./comment-352c736f.js";import{X as F}from"./x-b4c3552e.js";const Y=({setFlag:s,id:r})=>{const{isLoading:l,sendRequest:o}=g(),h=async t=>{const i=t.toString();t&&(await o({type:d.DELETE_BLOG,slug:i}),o({type:d.LIST_BLOG_DRAFT}),o({type:d.LIST_BLOG}))};return e.jsx("div",{className:"w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal dark:bg-stone-200 overflow-y-scroll",children:e.jsxs("div",{children:[e.jsx("div",{className:"px-5 py-2 flex justify-end space-x-5 shadow border-b-2 ",children:e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})}),e.jsxs("div",{className:"text-center p-5 flex-auto justify-center",children:[e.jsx(N,{className:"w-16 h-16 flex items-center  mx-auto"}),e.jsx("h2",{className:"text-xl font-bold py-4 text-title",children:"Are you sure?"}),e.jsx("p",{className:"text-sm text-gray-500 px-8",children:"Do you really want to delete your blog ? This process cannot be undone"})]}),e.jsxs("div",{className:"p-3  mt-2 text-center space-x-4 flex justify-around",children:[e.jsx(n,{onClick:()=>{s.off()},children:"Cancel"}),l?e.jsx(n,{disabled:!0,children:"Please wait..."}):e.jsx(n,{onClick:()=>h(r),children:"Delete"})]})]})})},$=({setFlag:s,id:r,setIsBookmark:l,idCategories:o})=>{const{isLoading:h,sendRequest:t}=g(),{iduser:i}=k(),a=Number(i);console.log(o);const p=async f=>{await t({type:d.BOOKMARK_BLOG,data:null,slug:f.toString()}),l&&l(u=>!u),s.off(),t({type:d.LIST_BLOG}),t({type:d.LIST_BLOG_BOOKMARK}),t({type:d.GET_USER_ID,slug:a.toString()}),t({type:d.GET_BLOG_CATEGORIES,slug:o})};return e.jsx("div",{className:"w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal dark:bg-stone-200  overflow-y-scroll",children:e.jsxs("div",{children:[e.jsx("div",{className:"px-5 py-2 flex justify-end space-x-5 shadow border-b-2 ",children:e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})}),e.jsxs("div",{className:"text-center p-5 flex-auto justify-center",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",id:"bookmark",className:"w-10 h-10 flex justify-center mx-auto",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"a",x1:"11",x2:"37",y1:"24",y2:"24",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#f12711"}),e.jsx("stop",{offset:"1",stopColor:"#f5af19"})]})}),e.jsx("path",{fill:"url(#a)",d:"M37,7V41a1,1,0,0,1-1,1,1,1,0,0,1-.5-.14L24,35.16l-11.5,6.7A1,1,0,0,1,11,41V7a1,1,0,0,1,1-1H36A1,1,0,0,1,37,7Z"})]}),e.jsx("h2",{className:"text-xl font-bold py-4 text-title",children:"Are you sure?"}),e.jsx("p",{className:"text-sm text-gray-500 px-8",children:"Do you really want to bookmark your blog ? This process cannot be undone"})]}),e.jsxs("div",{className:"p-3 flex justify-around   mt-2 text-center space-x-4 ",children:[e.jsx(n,{onClick:()=>{s.off()},children:"Cancle"}),h?e.jsxs(n,{disabled:!0,title:"Save",children:[e.jsx("svg",{viewBox:"0 -0.5 25 25",height:"20px",width:"20px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",d:"M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z",clipRule:"evenodd",fillRule:"evenodd"})}),e.jsx("span",{className:"text-sm text-title-foreground font-bold pr-1",children:"Please wait..."})]}):e.jsxs(n,{onClick:()=>{p(r)},title:"Save",children:[e.jsx("svg",{viewBox:"0 -0.5 25 25",height:"20px",width:"20px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",d:"M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z",clipRule:"evenodd",fillRule:"evenodd"})}),"Save Post"]})]})]})})},J=({setFlag:s,id:r,setUnBookmark:l,idCategories:o})=>{const{isLoading:h,sendRequest:t}=g(),i=async a=>{const p=a.toString();await t({type:d.UNBOOKMARK_BLOG,data:null,slug:p}),l&&l(f=>!f),s.off(),t({type:d.LIST_BLOG_BOOKMARK}),t({type:d.LIST_BLOG}),t({type:d.GET_BLOG_CATEGORIES,slug:o})};return e.jsx("div",{className:"w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal dark:bg-stone-200 overflow-y-scroll",children:e.jsxs("div",{children:[e.jsx("div",{className:"px-5 py-2 flex justify-end space-x-5 shadow border-b-2 ",children:e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})}),e.jsxs("div",{className:"text-center p-5 flex-auto justify-center",children:[e.jsx("h2",{className:"text-xl font-bold py-4 text-title",children:"Are you sure?"}),e.jsx("p",{className:"text-sm text-gray-500 px-8",children:"Do you really want to unbookmark your blog ? This process cannot be undone"})]}),e.jsxs("div",{className:"p-3  mt-2 text-center space-x-4 flex justify-around",children:[e.jsx(n,{onClick:()=>{s.off()},children:"Cancel"}),h?e.jsx(n,{disabled:!0,children:"Please wait..."}):e.jsx(n,{onClick:()=>i(r),children:"Confirm"})]})]})})},Q=({setFlag:s,data:r})=>e.jsx("div",{className:"w-2/4 h-2/3 sm:x-0  rounded-xl shadow bg-gray-800 dark:bg-stone-200  ",children:e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"px-5 py-2 flex space-x-5 shadow border-b-2 ",children:[e.jsx("h1",{className:"text-lg grow text-title dark:text-black",children:"Comment"}),e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}),e.jsx("div",{className:"w-full h-full pb-4 overflow-y-auto",children:e.jsx("div",{className:"border-t-2 p-2",children:e.jsx("div",{className:"relative mx-4  flex flex-col  p-2  rounded-xl space-y-5",children:e.jsx(z,{idBlog:r==null?void 0:r.id,showForm:!1})})})})]})}),q=({url:s})=>(j.useEffect(()=>{window.FB&&window.FB.XFBML.parse()},[]),e.jsx("div",{className:"fb-share-button","data-href":s,"data-layout":"button_count"})),ee=({setDisplayCreate:s,setDisplayModal:r,data:l})=>{var t;const o=C(i=>i.user.detail.data),h=((t=l==null?void 0:l.users)==null?void 0:t.id)===(o==null?void 0:o.id);return e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsx(B,{asChild:!0,children:e.jsx("button",{className:"hover:brightness-150 opacity-70 rounded-xl hover:bg-input p-2 h-fit",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",className:"w-5 h-5 dark:text-black",id:"menumeatballs",children:e.jsx("path",{fill:"currentColor",d:"M12 10C13.1046 10 14 10.8954 14 12 14 13.1046 13.1046 14 12 14 10.8954 14 10 13.1046 10 12 10 10.8954 10.8954 10 12 10zM4 10C5.10457 10 6 10.8954 6 12 6 13.1046 5.10457 14 4 14 2.89543 14 2 13.1046 2 12 2 10.8954 2.89543 10 4 10zM20 10C21.1046 10 22 10.8954 22 12 22 13.1046 21.1046 14 20 14 18.8954 14 18 13.1046 18 12 18 10.8954 18.8954 10 20 10z",className:"color000000 svgShape"})})})}),e.jsxs(S,{className:"w-56 mr-2 dark:bg-stone-800 dark:text-white",children:[e.jsx(R,{children:"Option"}),e.jsx(O,{}),h?e.jsxs(w,{onClick:()=>{s.on(),r("DELETE")},className:"cursor-pointer dark:hover:bg-white/30",children:[e.jsx(N,{className:"w-6 h-6 mr-2"}),e.jsx("span",{children:"Delete"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(w,{className:"cursor-pointer dark:hover:bg-white/30",onClick:()=>{s.on(),r("HIDE")},children:[e.jsx(y,{className:"w-6 h-6 mr-2"}),e.jsx("span",{children:"Hide"})]}),e.jsxs(w,{onClick:()=>{s.on(),r("REPORT")},className:"cursor-pointer dark:hover:bg-white/30",children:[e.jsx(T,{className:"w-6 h-6 mr-2"}),e.jsx("span",{children:"Report Blog"})]})]}),e.jsx(w,{onClick:()=>{s.on(),l.isSave?r("UNBOOKMARK"):r("BOOKMARK")},className:"cursor-pointer dark:hover:bg-white/30",children:l!=null&&l.isSave?e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"mr-2 "}),e.jsx("span",{children:"Unbookmark"})]}):e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"w-6 h-6 mr-2"}),e.jsx("span",{children:"Bookmark"})]})}),e.jsxs(w,{className:"cursor-pointer dark:hover:bg-white/30",children:[e.jsx(M,{className:"w-6 h-6 mr-2"}),e.jsx(q,{url:`https://pddkhoa.github.io/keyhub-web/blog/${l.id}`})]})]})]})})},se=({setFlag:s,data:r})=>{const[l,o]=j.useState(!1),{axiosJWT:h,accessToken:t}=G(),i=[{id:1,reason:"Ngôn từ gây thù ghét"},{id:2,reason:"Thông tin sai sự thật"},{id:3,reason:"Nội dung phản cảm"},{id:4,reason:"Ảnh phản cảm"}],[a,p]=j.useState([]),f=c=>{const m=a.indexOf(c);if(m===-1)p([...a,c]);else{const x=[...a];x.splice(m,1),p(x)}};j.useEffect(()=>{const c=i.filter(m=>a.includes(m.id)).map(m=>m.reason).join(", ");u.setFieldValue("reason",c)},[a]);const u=I({initialValues:{blog_id:"",reason:""},validationSchema:D().shape({reason:A().matches(K.noBlank).required("Required")}),validateOnChange:!0,onSubmit:async c=>{const m={blog_id:r.id,reason:c.reason};o(!0);try{const{body:x}=await H.reportBlog(m,t,h);x!=null&&x.success?(o(!1),v.success(x.message),s.off()):(o(!1),v.error((x==null?void 0:x.message)||"Error"))}catch(x){console.log(x),o(!1)}}});return e.jsx("div",{className:"w-2/4 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow dark:bg-stone-200 bg-gray-900 ",children:e.jsxs("div",{className:"h-full flex flex-col space-y-5",children:[e.jsxs("div",{className:"px-5 py-2 flex space-x-5 shadow border-b-2",children:[e.jsx("span",{className:"text-lg grow text-title",children:"Report"}),e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 dark:text-black transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}),e.jsx("div",{className:"px-8 grow overflow-y-auto",children:e.jsx("form",{onSubmit:u.handleSubmit,children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsxs("div",{className:"relative px-2 py-2",children:[e.jsx(b,{className:"text-md text-title-foreground",children:"Reason"}),i.map(c=>e.jsxs("div",{className:"items-top flex space-x-2 mt-4",children:[e.jsx(U,{id:c.id.toString(),onCheckedChange:()=>f(c.id),checked:a.includes(c.id)}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:c.id.toString(),className:"text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-black ",children:c.reason}),e.jsx("p",{className:"text-sm dark:text-gray-500",children:"You may choice many reason"})]})]},c.id))]}),e.jsxs("div",{className:"relative px-2 py-2",children:[e.jsx(b,{htmlFor:"reason",className:"text-md text-title-foreground",children:"Other"}),e.jsx(P,{className:"mt-2",id:"reason",name:"reason",placeholder:"Tell us a reason report",maxLength:150,onBlur:u.handleBlur,value:u.values.reason,onChange:u.handleChange}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:u.errors.reason&&u.touched.reason?e.jsx(F,{className:"text-red-500"}):null})]})]}),e.jsxs("div",{className:" py-2 border-t",children:[l?e.jsxs(n,{className:"px-5 py-1.5 float-right",disabled:!0,children:[e.jsx(V,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]}):e.jsx(n,{type:"submit",className:"px-5 py-1.5 float-right",disabled:u.isSubmitting||!u.isValid,children:"Save"}),e.jsx("button",{type:"button",onClick:s.off,className:"px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200",children:"Close"})]})]})})})]})})},le=({setFlag:s,id:r,setIsHide:l})=>{const{isLoading:o,sendRequest:h}=g(),t=async i=>{try{h({type:d.HIDE_BLOG,data:null,slug:i.toString()}),l&&l(a=>({...a,[i]:!0})),s.off()}catch(a){console.error("Error hiding blog:",a)}};return e.jsx("div",{className:"w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal dark:bg-stone-200  overflow-y-scroll",children:e.jsxs("div",{children:[e.jsx("div",{className:"px-5 py-2 flex justify-end space-x-5 shadow border-b-2 ",children:e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})}),e.jsxs("div",{className:"text-center p-5 flex-auto justify-center",children:[e.jsx(y,{className:" h-12 flex justify-center w-full"}),e.jsx("h2",{className:"text-xl font-bold py-4 text-title",children:"Are you sure?"}),e.jsx("p",{className:"text-sm text-gray-500 px-8",children:"Do you really want to hide your blog ? This process cannot be undone"})]}),e.jsxs("div",{className:"p-3 flex justify-around   mt-2 text-center space-x-4 ",children:[e.jsx(n,{onClick:()=>{s.off()},children:"Cancle"}),o?e.jsxs(n,{disabled:!0,title:"Save",className:"cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 p-2",children:[e.jsx("svg",{viewBox:"0 -0.5 25 25",height:"20px",width:"20px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"1.5",d:"M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z",clipRule:"evenodd",fillRule:"evenodd"})}),e.jsx("span",{className:"text-sm text-title-foreground font-bold pr-1",children:"Please wait..."})]}):e.jsx(n,{onClick:()=>{t(r)},title:"Save",children:"Confirm"})]})]})})};export{ee as D,le as H,Q as P,J as R,$ as S,Y as a,se as b};
