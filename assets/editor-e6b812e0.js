import{r,f as B,u as z,ao as F,h as W,ap as i,aq as Z,a7 as v,i as $,n as e,ar as q,as as J,at as Q,d as U,au as G,_ as f,av as K,aw as X}from"./index-12e1c6d0.js";const ee=()=>{const x=r.useRef(),[_,I]=r.useState(!1);let d;const[t,u]=r.useState(),[y,o]=r.useState(!1),[m,C]=r.useState(!1),[g,E]=r.useState("STEP_ONE"),S=B(),p=z(s=>s.auth.login),j=F(p,S,U),b=p==null?void 0:p.data.token,w=W();r.useEffect(()=>{localStorage.removeItem("editorContent")},[location]);const k=r.useCallback(async()=>{const s=(await i(()=>import("./editorjs-89a16061.js"),[])).default,n=(await i(()=>import("./header-2930792d.js"),[])).default,a=(await i(()=>import("./embed-d4dcab87.js"),[])).default,l=(await i(()=>import("./list-854f5af5.js"),[])).default,H=(await i(()=>import("./code-baa198a3.js"),[])).default,R=(await i(()=>import("./inline-code-a351b6c2.js"),[])).default,D=(await i(()=>import("./paragraph-4645917e.js"),[])).default,A=(await i(()=>import("./quote-77d70b42.js"),[])).default,V=(await i(()=>import("./image-bc59ec90.js"),[])).default;x.current||(d=new s({holder:"editor",onReady:async()=>{x.current=d;const c=JSON.parse(localStorage.getItem("editorContent"));c.blocks.length!==0&&(d==null||d.render(c))},onChange:async()=>{const c=await(d==null?void 0:d.saver.save());localStorage.setItem("editorContent",JSON.stringify(c));const h=Z();C(!1),(c==null?void 0:c.blocks.length)!==0&&C(!0);const N=h.parse(c);u(M=>({...M,content:N==null?void 0:N.join("")}))},placeholder:"Type here to write your post...",inlineToolbar:!0,data:{blocks:[]},tools:{paragraph:{class:D,inlineToolbar:!0},header:n,image:{class:V,config:{uploader:{async uploadByFile(c){const{body:h}=await v.uploadFiles(c,b,j);return{success:1,file:{url:h==null?void 0:h.result}}}},withBorder:!0}},list:{class:l,inlineToolbar:!0},code:H,inlineCode:R,embed:a,quote:{class:A,inlineToolbar:!0,shortcut:"CMD+SHIFT+O",config:{quotePlaceholder:"Enter a quote",captionPlaceholder:"Quote's author"}}}}))},[]),T=$({initialValues:{title:"",content:"",description:"",categoryIds:"",tagIds:"",seriesId:"",avatar:""},onSubmit:async()=>{var n;let s;t&&(s={title:t.title,content:t.content,description:t.description,categoryIds:(n=t.categoryIds)==null?void 0:n.id,tagIds:t.tagIds.map(a=>a.id),seriesId:t.seriesId,avatar:t.avatar}),o(!0);try{const{body:a}=await v.createBlog(s,b,j);console.log(a),a!=null&&a.success?(o(!1),S(G),localStorage.removeItem("editorContent"),u({}),f.success("Create Thanh cong nha!"),w("/profile")):(o(!1),f.error((a==null?void 0:a.message)||"Erorr"))}catch(a){o(!1),console.log(a)}}});r.useEffect(()=>{T.setFieldValue("content",t==null?void 0:t.content)},[t==null?void 0:t.content,u]);const P=async()=>{var n,a;let s;t&&(s={title:t.title,content:t.content,description:t.description,categoryIds:(n=t.categoryIds)==null?void 0:n.id,tagIds:t.tagIds.length>0?(a=t.tagIds)==null?void 0:a.map(l=>l.id):void 0,seriesId:t.seriesId,avatar:t.avatar}),console.log(s);try{const{body:l}=await v.createBlogDaft(s,b,j);console.log(l),l!=null&&l.success?(o(!1),localStorage.removeItem("editorContent"),u({}),f.success("Add Draft Successfully"),w("/profile")):(o(!1),f.error((l==null?void 0:l.message)||"Erorr"))}catch(l){o(!1),console.log(l)}},L=async()=>{try{const{body:s}=await v.cancleBlog();console.log(s),s!=null&&s.success?(o(!1),localStorage.removeItem("editorContent"),u({}),w(0),f.success("Cancle Successfully!")):(o(!1),f.error((s==null?void 0:s.message)||"Erorr"))}catch(s){o(!1),console.log(s)}};if(r.useEffect(()=>{typeof window<"u"&&I(!0)},[]),r.useEffect(()=>{const s=async()=>{await k()};if(_)return s(),()=>{var n;(n=x.current)==null||n.destroy(),x.current=void 0}},[_,k,g]),!_)return null;const O=()=>{switch(g){case"STEP_ONE":return e.jsxs("div",{className:" w-full",children:[e.jsx("div",{id:"editor",className:`rounded-lg w-full p-2 border ${m?"border-border":"border-red-500"}`}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("p",{className:"text-sm text-gray-500",children:["Use"," ",e.jsx("kbd",{className:"rounded-md border bg-muted px-1 text-xs uppercase",children:"Tab"})," ","to open the command menu."]}),m?null:e.jsx("p",{className:"text-sm float-right text-red-500",children:"Content required"})]})]});case"STEP_TWO":return e.jsx(X,{report:t||{},setReport:u});case"STEP_THREE":return e.jsx(K,{report:t||{}})}};return e.jsx("div",{className:"container  min-h-0 px-9 py-10",children:e.jsxs("div",{className:" p-4 w-[1200px]  rounded-lg pt-10 mx-auto text-title space-y-10",children:[e.jsx("div",{className:"w-full mx-auto",children:e.jsx("div",{children:e.jsxs("ol",{className:"grid grid-cols-1 divide-x divide-border overflow-hidden rounded-lg border border-border text-sm text-title shadow-2xl  sm:grid-cols-3",children:[e.jsxs("li",{onClick:()=>{E("STEP_ONE")},className:`flex items-center  justify-center gap-2 p-4 hover:bg-gray-800 dark:text-black  cursor-pointer ${g==="STEP_ONE"?" bg-gray-800 text-white":null}`,children:[e.jsx("div",{className:"p-2 rounded-full bg-red-800 shadow-xl",children:e.jsx(q,{className:"w-5 h-5"})}),e.jsxs("p",{className:"leading-none",children:[e.jsxs("strong",{className:"block font-medium dark:text-black",children:[" ","Content"," "]}),e.jsxs("small",{className:"mt-1 dark:text-black",children:[" ","Fill content in area."," "]})]})]}),e.jsxs("li",{onClick:()=>{E("STEP_TWO")},className:`flex items-center justify-center gap-2 p-4 hover:bg-gray-800 dark:text-black hover:text-title-foreground cursor-pointer ${g==="STEP_TWO"?" bg-gray-800 text-title-foreground":null}`,children:[e.jsx("div",{className:"p-2 rounded-full bg-red-800 shadow-xl",children:e.jsx(J,{className:"w-5 h-5"})}),e.jsxs("p",{className:"leading-none",children:[e.jsxs("strong",{className:"block font-medium dark:text-black",children:[" ","Setting"," "]}),e.jsxs("small",{className:"mt-1 dark:text-black",children:[" ","Setting my blog"," "]})]})]}),e.jsxs("li",{onClick:()=>{E("STEP_THREE")},className:`flex items-center justify-center gap-2 p-4 hover:bg-gray-800 hover:text-title-foreground cursor-pointer ${g==="STEP_THREE"?" bg-gray-800 text-title-foreground":null}`,children:[e.jsx("div",{className:"p-2 rounded-full bg-red-800 shadow-xl",children:e.jsx(Q,{className:"w-5 h-5"})}),e.jsxs("p",{className:"leading-none",children:[e.jsxs("strong",{className:"block font-medium dark:text-black",children:[" ","Confirmation"," "]}),e.jsxs("small",{className:"mt-1 dark:text-black",children:[" ","Check last one"]})]})]})]})})}),e.jsx("div",{className:"fixed bottom-10 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-5",children:e.jsx("div",{className:"flex gap-5 space-x-5",children:e.jsxs("form",{onSubmit:T.handleSubmit,className:"flex gap-5",children:[e.jsx("button",{onClick:L,type:"button",className:"px-5 py-1.5 float-right button-cancle",children:e.jsx("svg",{viewBox:"0 0 448 512",className:"svgIcon",children:e.jsx("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})})}),e.jsx("button",{type:"button",onClick:P,disabled:!m||!(t!=null&&t.title),className:`px-5 py-1.5 float-right button-save-daft ${!m||!(t!=null&&t.title)?"cursor-not-allowed":"cursor-pointer"}`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:10,id:"save",className:"svgIcon-save",children:e.jsx("path",{fill:"#ffff",d:"M18 8.1V8A6 6 0 0 0 6.26 6.26 6 6 0 0 0 6 17.64V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.1a5 5 0 0 0 0-9.8ZM13 20h-2v-2h2Zm3-3v3h-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H8v-8h5.59L16 14.41Zm2-1.17V14a1 1 0 0 0-.29-.71l-3-3A1 1 0 0 0 14 10H7a1 1 0 0 0-1 1v4.47a4 4 0 0 1 1.27-7.4 1 1 0 0 0 .8-.8A4 4 0 0 1 16 8v1a1 1 0 0 0 1 1 3 3 0 0 1 1 5.83Z","data-name":"Layer 2"})})}),g==="STEP_THREE"?y?e.jsx("button",{className:`px-5 py-1.5 float-right button-save-end cursor-not-allowed
                      
                  `,disabled:!0,children:"Please Wait.."}):e.jsx("button",{type:"submit",className:`px-5 py-1.5 float-right button-save-end ${!m||!(t!=null&&t.title)?"cursor-not-allowed":"cursor-pointer"}`,disabled:!m||!(t!=null&&t.title),children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",id:"checkmark",className:"svgIcon-end",children:[e.jsx("path",{fill:"currentColor",d:"M8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8C13 10.7614 10.7614 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"}),e.jsx("path",{fill:"currentColor",d:"M10.8558 5.14907C11.048 5.34783 11.0481 5.67009 10.8558 5.86885L7.97222 8.85092C7.87992 8.94638 7.75474 9 7.6242 9 7.49367 9 7.36848 8.94638 7.27618 8.85093L6.14415 7.68025C5.95195 7.48148 5.95195 7.15922 6.14416 6.96046 6.33636 6.7617 6.64799 6.7617 6.84019 6.96047L7.6242 7.77125 10.1598 5.14908C10.352 4.95031 10.6636 4.95031 10.8558 5.14907zM6 10.5C6 10.2239 6.22386 10 6.5 10H9.49826C9.7744 10 9.99826 10.2239 9.99826 10.5 9.99826 10.7761 9.7744 11 9.49826 11H6.5C6.22386 11 6 10.7761 6 10.5z"})]})}):null]})})}),e.jsx("div",{children:O()})]})})};export{ee as default};