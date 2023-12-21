import{c as g,l as j,r as v,a as b,o as w,b as y,g as N,_ as o,d as c,u as k,e as S,f as L,h as B,i as E,j as U,k as d,R as m,m as e,L as x,$ as u,I as h,B as p,n as q}from"./index-5568676a.js";const F=g("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),$=g("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),z=async(n,r,t)=>{r(j());try{const{body:s}=await v(b.post("/auth/login",n));if(s!=null&&s.success){const{userDetails:l}=w(s.result.token);r(y(s.result)),r(N(l.users)),o.success(s.message),l.users.role==="ADMIN"?t("/admin/dashboard"):t("/")}else r(c()),o.error((s==null?void 0:s.message)||"Error")}catch(s){r(c()),console.log(s)}},I=()=>{const n=k(i=>i.auth.isLoading),r=S(),t=L(),[s,l]=B.useState(!1),a=E({initialValues:{username:"",password:""},validationSchema:U().shape({username:d().matches(m.noBlank).required("Required"),password:d().matches(m.noBlank).required("Required")}),onSubmit:async i=>{const f={username:i.username,password:i.password};z(f,r,t)}});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"relative bg-gradient-to-b  from-gray-900 via-gray-900 to-[rgb(7,16,45)] bottom-0 leading-5 h-full overflow-hidden",children:e.jsxs("div",{className:" relative min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl ",children:[e.jsx("div",{className:"flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10 mr-20",children:e.jsxs("div",{className:"self-start  lg:flex flex-col  text-white",children:[e.jsx("h1",{className:"my-3 font-semibold text-4xl uppercase",children:"Welcome back"}),e.jsx("p",{className:"text-xl opacity-75",children:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"})]})}),e.jsx("div",{className:"flex justify-center self-center z-10",children:e.jsxs("div",{className:"p-12 bg-card brightness-125 mx-auto rounded-3xl border w-96 ",children:[e.jsxs("div",{className:"mb-7",children:[e.jsxs("h3",{className:"font-semibold text-2xl text-title",children:["Sign In"," "]}),e.jsxs("p",{className:"text-title-foreground",children:["Don'thave an account?"," ",e.jsx(x,{to:"/register",className:"text-sm text-purple-700 hover:text-purple-700",children:"Sign Up"})]})]}),e.jsx("div",{className:"space-y-6",children:e.jsxs("form",{onSubmit:a.handleSubmit,className:"space-y-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(u,{htmlFor:"username",className:"text-sm text-title-foreground",children:"Username"}),e.jsx(h,{type:"text",id:"username",name:"username",onBlur:a.handleBlur,onChange:a.handleChange,value:a.values.username,placeholder:"Username",className:"w-full text-sm  px-4 py-3 bg-input border  border-border rounded-lg "})]}),e.jsxs("div",{className:"relative",children:[e.jsx(u,{htmlFor:"password",className:"text-sm text-title-foreground",children:"Password"}),e.jsx(h,{type:s?"text":"password",id:"password",name:"password",onBlur:a.handleBlur,onChange:a.handleChange,value:a.values.password,placeholder:"Password",className:"w-full text-sm  px-4 py-3 bg-input border  border-border rounded-lg "}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3",children:e.jsx("div",{className:"cursor-pointer z-50 text-title-foreground",onClick:()=>l(!s),children:s?e.jsx(F,{}):e.jsx($,{})})}),e.jsx("div",{className:"flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{className:"text-sm ml-auto",children:e.jsx(x,{to:"/forgotpassword",className:"text-purple-700 hover:text-purple-600",children:"Forgot your password?"})})}),e.jsx("div",{children:n?e.jsxs(p,{disabled:!0,className:"w-full",children:[e.jsx(q,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]}):e.jsx(p,{type:"submit",className:"w-full flex justify-center",disabled:a.isSubmitting||!a.isValid,children:"Sign Up"})})]})})]})})]})})})};export{I as default};
