import{c as W,D as V,h as n,O as X,F as G,K as F,J as L,M as I,N as H,aJ as Y,aK as Q,m as e,A as M,C as Z,a5 as R,i as ee,j as se,k as ae,R as te,a6 as S,_ as $,a8 as re,B as E,n as ne,U as O,ae as le,V as ce,aL as oe,T as ie,aM as q,a2 as de,ab as xe,a3 as ue}from"./index-5cc48746.js";import{L as B}from"./Label-0b3e38bc.js";import{X as fe}from"./x-db8991d3.js";const he=W("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),J="Checkbox",[pe,Ee]=V(J),[me,ge]=pe(J),be=n.forwardRef((s,c)=>{const{__scopeCheckbox:t,name:f,checked:v,defaultChecked:p,required:g,disabled:o,value:j="on",onCheckedChange:b,...m}=s,[x,i]=n.useState(null),l=X(c,a=>i(a)),r=n.useRef(!1),N=x?!!x.closest("form"):!0,[h=!1,d]=G({prop:v,defaultProp:p,onChange:b}),u=n.useRef(h);return n.useEffect(()=>{const a=x==null?void 0:x.form;if(a){const k=()=>d(u.current);return a.addEventListener("reset",k),()=>a.removeEventListener("reset",k)}},[x,d]),n.createElement(me,{scope:t,state:h,disabled:o},n.createElement(F.button,L({type:"button",role:"checkbox","aria-checked":y(h)?"mixed":h,"aria-required":g,"data-state":P(h),"data-disabled":o?"":void 0,disabled:o,value:j},m,{ref:l,onKeyDown:I(s.onKeyDown,a=>{a.key==="Enter"&&a.preventDefault()}),onClick:I(s.onClick,a=>{d(k=>y(k)?!0:!k),N&&(r.current=a.isPropagationStopped(),r.current||a.stopPropagation())})})),N&&n.createElement(Ce,{control:x,bubbles:!r.current,name:f,value:j,checked:h,required:g,disabled:o,style:{transform:"translateX(-100%)"}}))}),je="CheckboxIndicator",ve=n.forwardRef((s,c)=>{const{__scopeCheckbox:t,forceMount:f,...v}=s,p=ge(je,t);return n.createElement(H,{present:f||y(p.state)||p.state===!0},n.createElement(F.span,L({"data-state":P(p.state),"data-disabled":p.disabled?"":void 0},v,{ref:c,style:{pointerEvents:"none",...s.style}})))}),Ce=s=>{const{control:c,checked:t,bubbles:f=!0,...v}=s,p=n.useRef(null),g=Y(t),o=Q(c);return n.useEffect(()=>{const j=p.current,b=window.HTMLInputElement.prototype,x=Object.getOwnPropertyDescriptor(b,"checked").set;if(g!==t&&x){const i=new Event("click",{bubbles:f});j.indeterminate=y(t),x.call(j,y(t)?!1:t),j.dispatchEvent(i)}},[g,t,f]),n.createElement("input",L({type:"checkbox","aria-hidden":!0,defaultChecked:y(t)?!1:t},v,{tabIndex:-1,ref:p,style:{...s.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(s){return s==="indeterminate"}function P(s){return y(s)?"indeterminate":s?"checked":"unchecked"}const U=be,Ne=ve,z=n.forwardRef(({className:s,...c},t)=>e.jsx(U,{ref:t,className:M("w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",s),...c,children:e.jsx(Ne,{className:M("flex items-center justify-center text-current"),children:e.jsx(Z,{className:"h-4 w-4"})})}));z.displayName=U.displayName;const ke=({setFlag:s,comment:c})=>{var x;const[t,f]=n.useState(!1),{accessToken:v,axiosJWT:p}=R(),g=[{id:1,reason:"Spam"},{id:2,reason:"Thông tin sai sự thật"},{id:3,reason:"Gây thù ghét"},{id:4,reason:"Nội dung không phù hợp"}],[o,j]=n.useState([]),b=i=>{const l=o.indexOf(i);if(l===-1)j([...o,i]);else{const r=[...o];r.splice(l,1),j(r)}};n.useEffect(()=>{const i=g.filter(l=>o.includes(l.id)).map(l=>l.reason).join(", ");m.setFieldValue("reason",i)},[o]);const m=ee({initialValues:{comment_id:"",reason:""},validationSchema:se().shape({reason:ae().matches(te.noBlank).required("Required")}),validateOnChange:!0,onSubmit:async i=>{const l={comment_id:c.id,reason:i.reason};f(!0);try{const{body:r}=await S.reportComment(l,v,p);r!=null&&r.success?(f(!1),$.success(r.message),s.off()):(f(!1),$.error((r==null?void 0:r.message)||"Error"))}catch(r){console.log(r),f(!1)}}});return e.jsx("div",{className:"w-2/4 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-gray-900 ",children:e.jsxs("div",{className:"h-full flex flex-col space-y-5",children:[e.jsxs("div",{className:"px-5 py-2 flex space-x-5 shadow border-b-2",children:[e.jsxs("span",{className:"text-lg grow text-title",children:["Report Comment of @",(x=c==null?void 0:c.users)==null?void 0:x.name]}),e.jsx("button",{className:"block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors",onClick:s.off,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})})})]}),e.jsx("div",{className:"px-8 grow overflow-y-auto",children:e.jsx("form",{onSubmit:m.handleSubmit,children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsxs("div",{className:"relative px-2 py-2",children:[e.jsx(B,{className:"text-md text-title-foreground",children:"Reason"}),g.map(i=>e.jsxs("div",{className:"items-top flex space-x-2 mt-4",children:[e.jsx(z,{id:i.id.toString(),onCheckedChange:()=>b(i.id),checked:o.includes(i.id)}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsx("label",{htmlFor:i.id.toString(),className:"text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:i.reason}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You may choice many reason"})]})]},i.id))]}),e.jsxs("div",{className:"relative px-2 py-2",children:[e.jsx(B,{className:"text-md text-title-foreground",children:"Other"}),e.jsx(re,{className:"mt-2",id:"reason",name:"reason",placeholder:"Tell us a reason report",maxLength:150,onBlur:m.handleBlur,value:m.values.reason,onChange:m.handleChange}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:m.errors.reason&&m.touched.reason?e.jsx(fe,{className:"text-red-500"}):null})]})]}),e.jsxs("div",{className:" py-2 border-t",children:[t?e.jsxs(E,{className:"px-5 py-1.5 float-right",disabled:!0,children:[e.jsx(ne,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]}):e.jsx(E,{type:"submit",className:"px-5 py-1.5 float-right",disabled:m.isSubmitting||!m.isValid,children:"Save"}),e.jsx("button",{type:"button",onClick:s.off,className:"px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200",children:"Close"})]})]})})})]})})},Re=({idBlog:s,showForm:c})=>{const[t,f]=n.useState(),{id:v}=O(),p=Number(v),[g,o]=n.useState(!1),[j,b]=n.useState(!1),{axiosJWT:m,accessToken:x}=R(),[i,l]=n.useState();n.useEffect(()=>{o(!0),(async()=>{let d=s;!d&&p&&(d=p);try{const{body:u}=await S.getCommentByBlog(d,x,m);u!=null&&u.success?(o(!1),f(u==null?void 0:u.result)):(o(!1),console.error(u==null?void 0:u.message))}catch(u){console.error(u),o(!1)}})()},[j]),console.log(t);const r=t==null?void 0:t.filter(h=>(h==null?void 0:h.parentComment)===null),N=h=>t==null?void 0:t.filter(d=>{var u;return((u=d.parentComment)==null?void 0:u.id)===h});return g?e.jsx(le,{}):e.jsxs("div",{className:"flex flex-col w-full space-y-3 mt-5",children:[e.jsx("div",{className:"text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100 dark:text-black",children:"Comments"}),c?e.jsx("div",{className:"relative flex flex-col  ",children:e.jsx(K,{setPosting:b,idBlog:s})}):null,r&&(r==null?void 0:r.length)>0?r==null?void 0:r.map(h=>e.jsx(e.Fragment,{children:e.jsx(A,{comment:h,child:N(h.id),childComment:N,activeComment:i,setActiveComment:l,setPosting:b,nestingLevel:0,idBlog:s},h.id)})):null]})},A=({comment:s,activeComment:c,setActiveComment:t,setPosting:f,idBlog:v,childComment:p,nestingLevel:g})=>{var D,T,_;const o=c&&c.type==="replying"&&c.id===s.id,{axiosJWT:j,accessToken:b}=R(),m=3,[x,i]=n.useState(!1),l=p(s.id),r=l.length,N=async w=>{if(w){f(!0);const{body:C}=await S.deleteComment(w,b,j);C!=null&&C.success?(f(!1),$.success(C.message)):(console.log(C==null?void 0:C.message),f(!1),$.error((C==null?void 0:C.message)||"Error"))}},h=w=>ue(w),[d,u]=n.useState(!1),[a,k]=ce(!1);return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col w-full max-w-2xl p-4 divide-y rounded-md divide-gray-700 bg-gray-900  text-gray-100",children:[e.jsxs("div",{className:"flex justify-between p-4",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("div",{children:e.jsx("img",{src:(T=(D=s==null?void 0:s.users)==null?void 0:D.avatar)==null?void 0:T.toString(),alt:"",className:"object-cover w-12 h-12 rounded-full bg-gray-500"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold",children:(_=s==null?void 0:s.users)==null?void 0:_.name}),e.jsxs("span",{className:"text-xs text-gray-400",children:[h(s.createdAt),"."]})]})]}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx("button",{onClick:()=>{k.on(),u(!0)},className:"inline-flex items-center flex-column hover:brightness-150",children:e.jsx(oe,{className:"w-4 h-6"})}),e.jsx("button",{onClick:()=>{N(s.id)},className:"inline-flex items-center  ml-4 flex-column hover:brightness-150",children:e.jsx(ie,{className:"w-6 h-6"})}),e.jsx("div",{className:"flex items-center space-x-2 hover:brightness-150 cursor-pointer",children:g<=m?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>{t({id:s==null?void 0:s.id,type:"replying"})},className:"inline-flex items-center flex-column group group-hover:brightness-150",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-6 h-6 group-hover:brightness-150",id:"reply",children:[e.jsxs("linearGradient",{id:"a",x1:"169.657",x2:"406.21",y1:"131.461",y2:"368.014",gradientTransform:"matrix(1 0 0 -1 0 514)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0",stopColor:"#332c81"}),e.jsx("stop",{offset:"1",stopColor:"#e21d73"})]}),e.jsx("path",{fill:"url(#a)",d:"M14.1 191.4 186 43c15-13 38.8-2.4 38.8 17.7v78.2C381.6 140.7 506 172.1 506 320.8c0 60-38.7 119.4-81.4 150.5-13.3 9.7-32.3-2.5-27.4-18.2 44.3-141.6-21-179.2-172.5-181.4v85.9c0 20.2-23.7 30.7-38.8 17.7L14.1 226.9c-10.8-9.4-10.8-26.2 0-35.5z"})]})}),e.jsx("span",{className:"mt-2 text-title font-black group-hover:brightness-150",children:r})]}):null})]})]}),e.jsx("div",{className:"p-4 space-y-2 text-sm text-gray-400",children:e.jsx("p",{children:s.content})})]}),r>0?e.jsxs("div",{className:"mt-2 ml-6 text-title flex gap-2 hover:bg-input w-fit p-2 rounded-xl items-center cursor-pointer",onClick:()=>{i(!x)},children:[e.jsx("span",{children:e.jsx(he,{className:`w-5 h-5 duration-200 text-gray-300 ${x?"rotate-180":""}`})}),e.jsxs("span",{className:"flex gap-2 items-center text-gray-300",children:[r," ",e.jsx(q,{className:"ml-2 w-6 h-6 "})]})]}):null,o&&e.jsx("div",{className:"mt-2 ml-10 rounded-lg",children:e.jsx(K,{setPosting:f,parentId:s.id,setActiveComment:t,idBlog:v})}),x?e.jsx(e.Fragment,{children:l&&(l==null?void 0:l.length)>0&&e.jsx("div",{className:"pt-1 md-10 ml-10",children:l==null?void 0:l.map(w=>e.jsx(A,{childComment:p,comment:w,isChild:!0,setActiveComment:t,activeComment:c,setPosting:f,parentId:s.id,nestingLevel:g+1},w.id))})}):null,e.jsx(de,{flag:a,closeModal:k.off,children:d?e.jsx(ke,{setFlag:k,comment:s}):null})]})},K=({setPosting:s,parentId:c,setActiveComment:t,idBlog:f})=>{const{id:v}=O(),p=Number(v),g=p||f,{axiosJWT:o,accessToken:j}=R(),[b,m]=n.useState(),x=(b==null?void 0:b.length)===0,[i,l]=n.useState(!1),r=async d=>{const u={parent_id:c,content:d};if(d){s(!0);const{body:a}=await S.replyComment(u,g,j,o);a!=null&&a.success&&t?(s(!1),$.success(a.message),t(null)):(console.log(a==null?void 0:a.message),$.error((a==null?void 0:a.message)||"Error"),s(!1))}},N=async d=>{const u={content:d};if(d){s(!0);const{body:a}=await S.addComment(u,g,j,o);a!=null&&a.success?(s(!1),$.success(a.message)):(console.log(a==null?void 0:a.message),$.error((a==null?void 0:a.message)||"Error"),s(!1))}},h=d=>{d==null||d.preventDefault(),b&&(c?(console.log(g),r(b)):(console.log(g),N(b))),m("")};return e.jsxs("form",{onSubmit:h,className:" flex flex-col border w-full mx-auto max-w-5xl p-2  divide-y rounded-md divide-gray-700 bg-gray-900 dark:bg-white/70 dark:text-black text-gray-100",children:[e.jsx("div",{className:"flex justify-between p-4",children:e.jsx("div",{className:"flex space-x-4",children:e.jsx(xe,{size:50})})}),e.jsx("div",{className:"space-y-2 text-sm text-gray-400 dark:text-black",children:e.jsx("div",{className:`flex flex-row w-full  rounded-lg p-2 ${i&&x?" border-red-500 border":null}`,children:e.jsx("span",{className:"flex flex-col relative flex-1  ",children:e.jsx("textarea",{name:"comment",onChange:d=>{m(d.target.value)},onFocus:()=>l(!0),onBlur:()=>l(!1),placeholder:"Comment in area",value:b,className:"flex flex-1  bg-transparent outline-none rounded-lg text-title-foreground p-2 placeholder:text-gray-600 dark:placeholder:text-black placeholder:italic",rows:3})})})}),e.jsx("div",{className:"flex flex-row gap-3 justify-end items-center p-3 px-4 border-t text-title-foreground",children:e.jsxs("div",{className:"flex  gap-5",children:[c&&t?e.jsx(E,{onClick:()=>{t(null)},className:"disabled:cursor-not-allowed disabled:brightness-75",children:"Cancle"}):null,e.jsxs(E,{disabled:x,type:"submit",children:["Comment",e.jsx(q,{className:"w-6 h-6 ml-2"})]})]})})]})};export{z as C,Re as a};
