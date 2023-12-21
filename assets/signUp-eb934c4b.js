import{p as S,h,i as B,j as $,k as d,R as i,q,s as k,m as e,L as F,t as n,I as o,S as R,v as _,w as E,x as A,y as m,C as c,B as u,n as U}from"./index-b4240993.js";import{$ as L,a as V,b as M}from"./index-ddf8162f.js";import{X as r}from"./x-60f236c8.js";const T=()=>{const{isLoading:p,sendRequest:j}=S(),[x,g]=h.useState("Male"),[a,f]=h.useState({length:!1,lowercase:!1,uppercase:!1,number:!1,specialChar:!1,space:!1}),b=t=>{const l=t.target.value;s.setFieldValue("password",l);const v=/\s/.test(l),N=l.length>=8,w=/[a-z]/.test(l),y=/[A-Z]/.test(l),C=/[0-9]/.test(l),P=/[@#$%^_&+=]/.test(l);f({length:N,lowercase:w,uppercase:y,number:C,specialChar:P,space:v})},s=B({initialValues:{username:"",email:"",name:"",password:"",confirmPass:"",phone:"",second_name:"",gender:"",roles:["user"]},validationSchema:$().shape({name:d().matches(i.noBlank).required("Required"),second_name:d().matches(i.noBlank).required("Required"),username:d().matches(i.noBlank).required("Required"),email:d().matches(i.noBlank).matches(i.email,"Email invalid").required("Required"),phone:d().matches(i.phone,"Phone invalid").required("Required"),password:d().matches(i.password,"Password invalid").required("required"),confirmPass:d().oneOf([q("password")],"Confirm password not match.").required("Confirm password is required.")}),validateOnChange:!0,onSubmit:async t=>{const l={username:t.username,email:t.email,name:t.name,password:t.password,phone:t.phone,second_name:t.second_name,gender:x,roles:["user"]};j({type:k.REGISTER,data:l})}});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"relative bg-gradient-to-b  from-gray-900 via-gray-900 to-[rgb(7,16,45)] bottom-0 leading-5 h-full overflow-hidden",children:e.jsx("div",{className:"relative h-screen my-10  sm:flex sm:flex-row  justify-center bg-transparent ",children:e.jsx("div",{className:"flex justify-center self-center z-10",children:e.jsxs("div",{className:"p-12 bg-card brightness-125 mx-auto rounded-3xl min-w-0 ",children:[e.jsxs("div",{className:"mb-7",children:[e.jsx("h3",{className:"font-semibold text-2xl text-title",children:"Sign Up "}),e.jsxs("p",{className:"text-title-foreground",children:["Already have an account?",e.jsx(F,{to:"/login",className:"text-sm text-purple-700 hover:text-purple-700",children:"Sign in"})]})]}),e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"grid grid-cols-2 space-x-5",children:[e.jsxs("div",{className:"relative",children:[e.jsx(n,{htmlFor:"name",className:"text-sm text-title-foreground",children:"Full Name"}),e.jsx(o,{type:"text",id:"name",name:"name",onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.name,placeholder:"Full Name",className:"w-full text-sm  px-4 py-3 bg-input  border  border-border rounded-lg "}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:s.errors.name&&s.touched.name?e.jsx(r,{className:"text-red-500"}):null})]}),e.jsxs("div",{className:"relative",children:[e.jsx(n,{htmlFor:"second_name",className:"text-sm text-title-foreground",children:"Nickname"}),e.jsx(o,{type:"text",id:"second_name",name:"second_name",onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.second_name,placeholder:"Nickname",className:"w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:s.errors.second_name&&s.touched.second_name?e.jsx(r,{className:"text-red-500"}):null})]})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsxs("div",{className:"relative",children:[e.jsx(n,{htmlFor:"username",className:"text-sm text-title-foreground",children:"Username"}),e.jsx(o,{type:"text",id:"username",name:"username",onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.username,placeholder:"Username",className:"w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:s.errors.username&&s.touched.username?e.jsx(r,{className:"text-red-500"}):null})]})}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsxs("div",{className:"relative",children:[e.jsx(n,{htmlFor:"email",className:"text-sm text-title-foreground",children:"Email"}),e.jsx(o,{type:"text",id:"email",name:"email",onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.email,placeholder:"Email",className:"w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:s.errors.email&&s.touched.email?e.jsx(r,{className:"text-red-500"}):null})]})}),e.jsxs("div",{className:"grid grid-cols-2 space-x-5",children:[e.jsxs("div",{className:"relative ",children:[e.jsx(n,{htmlFor:"phone",className:"text-sm text-title-foreground",children:"Phone"}),e.jsx(o,{type:"text",id:"phone",name:"phone",onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.phone,placeholder:"Phone",className:"w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:s.errors.phone&&s.touched.phone?e.jsx(r,{className:"text-red-500"}):null})]}),e.jsxs("div",{children:[e.jsx(n,{htmlFor:"gender",className:"text-sm text-title-foreground",children:"Gender"}),e.jsxs(R,{name:"gender",onValueChange:g,defaultValue:x,children:[e.jsx(_,{className:"w-full text-sm",children:e.jsx(E,{placeholder:"Gender"})}),e.jsxs(A,{children:[e.jsx(m,{value:"Male",children:"Male"}),e.jsx(m,{value:"Femnale",children:"Female"}),e.jsx(m,{value:"Other",children:"Other"})]})]})]})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsxs("div",{className:"relative",children:[e.jsx(n,{htmlFor:"password",className:"text-sm text-title-foreground",children:"Password"}),e.jsxs(L,{children:[e.jsx(V,{asChild:!0,children:e.jsx(o,{type:"password",id:"password",name:"password",onBlur:s.handleBlur,onChange:b,value:s.values.password,placeholder:"Password",className:"w-full bg-input border  border-border"})}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:s.errors.password&&s.touched.password?e.jsx(r,{className:"text-red-500"}):null}),e.jsx(M,{className:"my-2 relative w-80 p-6 bg-modal brightness-125 border-2 border-border rounded-2xl shadow-xl z-[60]",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:`text-sm flex justify-between border-b-2 items-center w-full ${a.length?"text-green-500":"text-red-500"}`,children:[e.jsx("span",{children:"At least 8 characters"}),a.length?e.jsx(c,{}):e.jsx(r,{})]}),e.jsxs("li",{className:`text-sm flex justify-between border-b-2 w-full ${a.lowercase?"text-green-500":"text-red-500"}`,children:[e.jsx("span",{children:"At least one lowercase letter"}),a.lowercase?e.jsx(c,{}):e.jsx(r,{})]}),e.jsxs("li",{className:`text-sm flex justify-between border-b-2 w-full ${a.uppercase?"text-green-500":"text-red-500"}`,children:[e.jsx("span",{children:"At least one uppercase letter"}),a.uppercase?e.jsx(c,{}):e.jsx(r,{})]}),e.jsxs("li",{className:`text-sm flex justify-between border-b-2 w-full ${a.number?"text-green-500":"text-red-500"}`,children:[e.jsx("span",{children:"At least one number"}),a.number?e.jsx(c,{}):e.jsx(r,{})]}),e.jsxs("li",{className:`text-sm flex justify-between border-b-2 w-full ${a.specialChar?"text-green-500":"text-red-500"}`,children:[e.jsx("span",{children:"At least one special character"}),a.specialChar?e.jsx(c,{}):e.jsx(r,{})]}),e.jsxs("li",{className:`text-sm flex justify-between border-b-2 w-full ${a.space?"text-red-500":"text-green-500"}`,children:[e.jsx("span",{children:"Password cannot contain spaces"}),a.space?e.jsx(r,{}):e.jsx(c,{})]})]})})]})]})}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsxs("div",{className:"relative",children:[e.jsx(n,{htmlFor:"confirmPass",className:"text-sm text-title-foreground",children:"Confirm Password"}),e.jsx(o,{type:"password",id:"confirmPass",name:"confirmPass",onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.confirmPass,placeholder:"Confirm Password",className:"w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"}),e.jsx("div",{className:"absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none",children:s.errors.confirmPass&&s.touched.confirmPass?e.jsx(r,{className:"text-red-500"}):null})]})}),e.jsx("div",{className:"grid grid-cols-1 pt-4",children:p?e.jsxs(u,{disabled:!0,children:[e.jsx(U,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]}):e.jsx(u,{type:"submit",disabled:s.isSubmitting||!s.isValid,children:"Sign Up"})})]})})]})})})})})};export{T as default};