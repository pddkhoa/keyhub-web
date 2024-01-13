import{V as R,a6 as A,q as y,u,r as t,t as x,aA as z,n as s,B as C,a5 as O,a7 as E,_ as n}from"./index-12e1c6d0.js";import{G as S}from"./card-78723403.js";import"./hideBlog-3ddf612f.js";import"./comment-e21d3772.js";import"./Label-75bb2367.js";import"./x-edb74591.js";const V=()=>{const{id:r}=R(),B=Number(r),{axiosJWT:g,accessToken:h}=A(),{sendRequest:i}=y(),a=u(l=>{var e;return(e=l==null?void 0:l.admin)==null?void 0:e.categoriesById}),[f,p]=t.useState(a==null?void 0:a.checkFollowCategory),[N,o]=t.useState(!1),[_,w]=t.useState(!1),[b,v]=t.useState(!1),[I,j]=t.useState(!1);t.useEffect(()=>{i({type:x.GET_BLOG_CATEGORIES_BY_ID,slug:r})},[B,N]);const[c,T]=t.useState(""),F=t.useCallback(z.debounce(async l=>{const e={keyword:c,category_id:r};await i({type:x.SEARCH_BLOG_CATEGORIES,data:e})},500),[c]),d=u(l=>l.categories.blogSearch);function G(){F(c)}t.useEffect(()=>{(async()=>{await i({type:x.GET_BLOG_CATEGORIES,slug:r})})()},[r,_,b,I]);const m=u(l=>l.categories.listBlog),k=async l=>{if(f){o(!0);const{body:e}=await E.followCategories(l,h,g);e!=null&&e.success?(n.success(e==null?void 0:e.message),p(!1),o(!1)):(console.log(e==null?void 0:e.message),n.error((e==null?void 0:e.message)||"Error"),o(!1))}else{o(!0);const{body:e}=await E.followCategories(l,h,g);e!=null&&e.success?(n.success(e==null?void 0:e.message),p(!0),o(!1)):(console.log(e==null?void 0:e.message),o(!1),n.error((e==null?void 0:e.message)||"Error"))}};return s.jsx("div",{className:"min-h-0 w-full",children:a&&s.jsx(s.Fragment,{children:s.jsx("section",{className:"py-16 ",children:s.jsxs("div",{className:"container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12",children:[s.jsxs("div",{className:"bg-gray-900 dark:bg-white/90 dark:text-black text-white flex flex-col mx-auto lg:flex-row",children:[s.jsx("div",{className:"w-full lg:w-1/3",style:{backgroundImage:`url(${a==null?void 0:a.avatar})`,backgroundPosition:"center center",backgroundSize:"cover"}}),s.jsxs("div",{className:"flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 h-8 mb-8 text-violet-400",children:s.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),s.jsx("h2",{className:"text-3xl font-semibold leadi",children:a==null?void 0:a.name}),s.jsx("p",{className:"mt-4 mb-8 text-sm",children:a==null?void 0:a.description}),f?s.jsx(C,{variant:"gradient",onClick:()=>{k(a==null?void 0:a.id)},className:"self-start text-lg rounded-xl",children:"Unfollow"}):s.jsx(C,{variant:"gradient",onClick:()=>{k(a==null?void 0:a.id)},className:"self-start text-lg rounded-xl",children:"Follow"})]})]}),s.jsxs("div",{className:"col-span-3 flex items-center gap-5 mb-10",children:[" ",s.jsxs("div",{className:"items-center h-10 rounded-xl border-2 flex-1 compact flex px-4 overflow-hidden bg-input   cursor-text ",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"text-title-foreground mr-2 w-6 h-6",id:"search",children:[s.jsx("path",{fill:"none",d:"M0 0h24v24H0V0z"}),s.jsx("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})]}),s.jsx("input",{placeholder:"Search blog",id:"posts-search",value:c,onBlur:G,onChange:l=>T(l.target.value),className:"flex-1 h-10 rounded-12 text-theme-label-tertiary text-white dark:text-black hover:text-theme-label-primary min-w-0  bg-transparent typo-body caret-theme-label-link focus:outline-none"})]})]}),s.jsx("div",{className:"grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:d&&d.length>0?d.map(l=>s.jsx(S,{data:l,setIsBookmark:w,setUnBookmark:v,setIsHide:j,idCategories:r},l.id)):m&&m.length>0?m.map(l=>s.jsx(S,{data:l,idCategories:r,setIsBookmark:w,setUnBookmark:v,setIsHide:j},l.id)):s.jsx(O,{})})]})})})})};export{V as default};
