/*! For license information please see component---src-pages-index-js-d9f8390fe5ad830c2bae.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{9357:function(e,t,r){var n=r(7294),a=r(1883);t.Z=function(e){var t,r;let{description:o,title:l,children:s}=e;const{site:c}=(0,a.useStaticQuery)("63159454"),i=o||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?`${l} | ${d}`:l),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:l}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(r=c.siteMetadata)||void 0===r?void 0:r.author)||""}),n.createElement("meta",{name:"twitter:title",content:l}),n.createElement("meta",{name:"twitter:description",content:i}),s)}},9036:function(e,t,r){r.r(t),r.d(t,{Head:function(){return W},default:function(){return H}});var n=r(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}function l(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function s(...e){const t=e[0];if(1===e.length)return t;const r=()=>{const r=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const a=r.reduce(((t,{useScope:r,scopeName:n})=>({...t,...r(e)[`__scope${n}`]})),{});return(0,n.useMemo)((()=>({[`__scope${t.scopeName}`]:a})),[a])}};return r.scopeName=t.scopeName,r}function c(e){const t=(0,n.useRef)(e);return(0,n.useEffect)((()=>{t.current=e})),(0,n.useMemo)((()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}function i({prop:e,defaultProp:t,onChange:r=(()=>{})}){const[a,o]=function({defaultProp:e,onChange:t}){const r=(0,n.useState)(e),[a]=r,o=(0,n.useRef)(a),l=c(t);return(0,n.useEffect)((()=>{o.current!==a&&(l(a),o.current=a)}),[a,o,l]),r}({defaultProp:t,onChange:r}),l=void 0!==e,s=l?e:a,i=c(r);return[s,(0,n.useCallback)((t=>{if(l){const r="function"==typeof t?t(e):t;r!==e&&i(r)}else o(t)}),[l,e,o,i])]}const d=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{};r(3935);const m=(0,n.forwardRef)(((e,t)=>{const{children:r,...o}=e,l=n.Children.toArray(r),s=l.find(h);if(s){const e=s.props.children,r=l.map((t=>t===s?n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null:t));return(0,n.createElement)(u,a({},o,{ref:t}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,r):null)}return(0,n.createElement)(u,a({},o,{ref:t}),r)}));m.displayName="Slot";const u=(0,n.forwardRef)(((e,t)=>{const{children:r,...a}=e;return(0,n.isValidElement)(r)?(0,n.cloneElement)(r,{...f(a,r.props),ref:t?l(t,r.ref):r.ref}):n.Children.count(r)>1?n.Children.only(null):null}));u.displayName="SlotClone";const p=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function h(e){return(0,n.isValidElement)(e)&&e.type===p}function f(e,t){const r={...t};for(const n in t){const a=e[n],o=t[n];/^on[A-Z]/.test(n)?a&&o?r[n]=(...e)=>{o(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...o}:"className"===n&&(r[n]=[a,o].filter(Boolean).join(" "))}return{...e,...r}}const b=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>{const r=(0,n.forwardRef)(((e,r)=>{const{asChild:o,...l}=e,s=o?m:t;return(0,n.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,n.createElement)(s,a({},l,{ref:r}))}));return r.displayName=`Primitive.${t}`,{...e,[t]:r}}),{});const y="Switch",[v,g]=function(e,t=[]){let r=[];const a=()=>{const t=r.map((e=>(0,n.createContext)(e)));return function(r){const a=(null==r?void 0:r[e])||t;return(0,n.useMemo)((()=>({[`__scope${e}`]:{...r,[e]:a}})),[r,a])}};return a.scopeName=e,[function(t,a){const o=(0,n.createContext)(a),l=r.length;function s(t){const{scope:r,children:a,...s}=t,c=(null==r?void 0:r[e][l])||o,i=(0,n.useMemo)((()=>s),Object.values(s));return(0,n.createElement)(c.Provider,{value:i},a)}return r=[...r,a],s.displayName=t+"Provider",[s,function(r,s){const c=(null==s?void 0:s[e][l])||o,i=(0,n.useContext)(c);if(i)return i;if(void 0!==a)return a;throw new Error(`\`${r}\` must be used within \`${t}\``)}]},s(a,...t)]}(y),[x,E]=v(y),w=(0,n.forwardRef)(((e,t)=>{const{__scopeSwitch:r,name:s,checked:c,defaultChecked:d,required:m,disabled:u,value:p="on",onCheckedChange:h,...f}=e,[y,v]=(0,n.useState)(null),g=function(...e){return(0,n.useCallback)(l(...e),e)}(t,(e=>v(e))),E=(0,n.useRef)(!1),w=!y||Boolean(y.closest("form")),[N=!1,k]=i({prop:c,defaultProp:d,onChange:h});return(0,n.createElement)(x,{scope:r,checked:N,disabled:u},(0,n.createElement)(b.button,a({type:"button",role:"switch","aria-checked":N,"aria-required":m,"data-state":T(N),"data-disabled":u?"":void 0,disabled:u,value:p},f,{ref:g,onClick:o(e.onClick,(e=>{k((e=>!e)),w&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())}))})),w&&(0,n.createElement)(S,{control:y,bubbles:!E.current,name:s,value:p,checked:N,required:m,disabled:u,style:{transform:"translateX(-100%)"}}))})),N="SwitchThumb",k=(0,n.forwardRef)(((e,t)=>{const{__scopeSwitch:r,...o}=e,l=E(N,r);return(0,n.createElement)(b.span,a({"data-state":T(l.checked),"data-disabled":l.disabled?"":void 0},o,{ref:t}))})),S=e=>{const{control:t,checked:r,bubbles:o=!0,...l}=e,s=(0,n.useRef)(null),c=function(e){const t=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(r),i=function(e){const[t,r]=(0,n.useState)(void 0);return d((()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const n=t[0];let a,o;if("borderBoxSize"in n){const e=n.borderBoxSize,t=Array.isArray(e)?e[0]:e;a=t.inlineSize,o=t.blockSize}else a=e.offsetWidth,o=e.offsetHeight;r({width:a,height:o})}));return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)}),[e]),t}(t);return(0,n.useEffect)((()=>{const e=s.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked").set;if(c!==r&&n){const t=new Event("click",{bubbles:o});n.call(e,r),e.dispatchEvent(t)}}),[c,r,o]),(0,n.createElement)("input",a({type:"checkbox","aria-hidden":!0,defaultChecked:r},l,{tabIndex:-1,ref:s,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function T(e){return e?"checked":"unchecked"}const C=w,M=k,P=(...e)=>e.filter(((e,t,r)=>Boolean(e)&&r.indexOf(e)===t)).join(" ");var R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $=(0,n.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:o="",children:l,iconNode:s,...c},i)=>(0,n.createElement)("svg",{ref:i,...R,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:P("lucide",o),...c},[...s.map((([e,t])=>(0,n.createElement)(e,t))),...Array.isArray(l)?l:[l]]))),A=(e,t)=>{const r=(0,n.forwardRef)((({className:r,...a},o)=>{return(0,n.createElement)($,{ref:o,iconNode:t,className:P(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...a});var l}));return r.displayName=`${e}`,r},F=A("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var O=e=>{let{type:t,label:r,description:a,badgeText:o,helpText:l,placeholder:s,errorMessage:c}=e;const{0:i,1:d}=(0,n.useState)(!1),m=()=>i?n.createElement("p",{className:"text-secondary text-sm"},a," ",l):n.createElement("p",{className:"text-secondary text-sm"},a," ",n.createElement("button",{onClick:()=>d(!0),className:(l?"":"hidden")+" whitespace-nowrap text-gray-900 font-medium underline decoration-dashed hover:decoration-solid underline-offset-2 decoration-gray-400 hover:decoration-gray-800 focus-visible:outline-[var(--accent-color)]"},"See more",n.createElement(F,{size:16,className:"inline-block ml-0.5 mb-0.5"}))),u=()=>"textarea"==t?n.createElement("textarea",{className:`\n              ${c?"border-alert":"border-gray-300"}\n              border rounded p-2 py-1 text-primary focus-visible:outline-[var(--accent-color)]\n            `,rows:4,placeholder:s}):"select"==t?n.createElement("select",{className:`\n              ${c?"border-alert":"border-gray-300"}\n              border rounded p-1.5 py-1.5 text-primary font-medium focus-visible:outline-[var(--accent-color)]\n            `},n.createElement("option",{value:""},"Please choose an option"),n.createElement("option",{value:""},"Option 1"),n.createElement("option",{value:""},"Option 2"),n.createElement("option",{value:""},"Option 3"),n.createElement("option",{value:""},"Option 4"),n.createElement("option",{value:""},"Option 5")):n.createElement("input",{className:`\n              ${c?"border-alert":"border-gray-300 hover:border-gray-400"}\n              ${"date"==t||"tel"==t?"max-w-[200px]":""}\n              focus-visible:outline-[var(--accent-color)] border rounded p-2 py-1 text-primary transition\n            `,placeholder:s,type:t});return"switch"==t?n.createElement("div",null,n.createElement("div",{className:"flex gap-3 mb-3"},n.createElement(C,{className:"shrink-0 w-[42px] h-[25px] rounded-full relative focus:outline-[var(--accent-color)] outline-offset-1 bg-gray-200 data-[state=checked]:bg-[var(--accent-color)] outline-none cursor-pointer hover:bg-gray-300 transition duration-150 group z-1"},n.createElement(M,{className:"block w-[21px] h-[21px] bg-white rounded-full shadow-lg transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] group-hover:shadow-xl"})),n.createElement("div",{className:"flex flex-row gap-2 items-center"},n.createElement("label",{className:"font-medium text-primary"},r),n.createElement("div",{className:(o?"":"hidden")+" text-sm bg-gray-100 border border-gray-300 rounded px-1 text-primary font-medium"},o))),n.createElement(m,null)):n.createElement("div",{className:"flex flex-col gap-2"},n.createElement("div",{className:"flex flex-row gap-2 items-center"},n.createElement("label",{className:"font-medium text-primary"},r),n.createElement("div",{className:(o?"":"hidden")+" text-sm bg-gray-100 border border-gray-300 rounded px-1 text-primary font-medium"},o)),n.createElement(u,null),n.createElement("p",{className:(c?"":"hidden")+" text-alert text-sm"},c),n.createElement(m,null))};r(1883);const _=A("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var j=r.p+"static/stepcounter-09f26ccba289b923fe1f5d6c6bb550dc.png";var z=e=>{let{type:t}=e;if("embedded"!=t)return"hosted"==t?n.createElement("div",{className:"md:min-h-screen w-full md:w-[40%] md:max-w-[700px] bg-[var(--accent-color)] flex flex-col p-4 md:p-12"},n.createElement("div",{className:"flex flex-col grow gap-4 md:gap-12"},n.createElement("div",{className:"flex gap-3 items-center justify-center md:justify-start text-white"},n.createElement("div",{className:"h-8 w-8 bg-white rounded-full"}),"Rocket Rides"),n.createElement("h1",{className:"text-lg md:text-3xl text-white text-center md:text-left"},"Rocket Rides partners with Stripe for secure payments."),n.createElement("div",{className:"text-white flex items-center gap-1.5 text-sm"},n.createElement(_,{size:"18"}),"Return to Rocket Rides")),n.createElement("div",{className:"hidden md:flex flex-col text-white gap-4"},n.createElement("p",null,"Powered by Stripe"),n.createElement("p",null,"Terms"),n.createElement("p",null,"Privacy"))):"direct"==t?n.createElement("div",{className:"min-h-screen w-[500px] flex flex-col p-12 pr-0"},n.createElement("img",{src:j,alt:"",width:255,className:"self-end fixed mt-10"})):void 0},B=r.p+"static/statement-2bdd2bcecefa4a4dd6c892d3dfa8ca99.png",I=r(9357);const L=[{title:"Tell us more about your business",description:n.createElement(n.Fragment,null,"Stripe collects this information to better serve your business and help meet the requirements of regulators, financial partners, and our ",n.createElement("a",{className:"font-semibold text-[var(--accent-color)]"},"Services Agreement"),"."),fields:[{type:"",label:"Legal business name",description:"Must be identical to IRS-issued documents – including capitalization and punctuation.",helpText:n.createElement(n.Fragment,null,"If you’re unsure of your legal business name, check your ",n.createElement("span",{className:"font-semibold text-primary"},"Letter 147C")," or ",n.createElement("span",{className:"font-semibold text-primary"},"SS-4 Confirmation Letter"),"."),placeholder:"My Business, Inc.",errorMessage:"This is an error."},{type:"",label:"Employer Identification Number (EIN)",description:"If you use your Social Security number for business tax purposes, you can enter that instead.",helpText:"",placeholder:"12-3456789",errorMessage:"This is an error."},{type:"",label:"Business name",badgeText:"Optional",description:"The operating name of your company if it’s different than the legal name.",helpText:"",placeholder:"My Business",errorMessage:"This is an error."},{type:"select",label:"Industry",description:"Select the option that best matches the goods or service your customers will buy. This helps satisfy risk and compliance obligations.",helpText:"",placeholder:"",errorMessage:"This is an error."},{type:"url",label:"Business website",description:n.createElement(n.Fragment,null,n.createElement("a",{className:"font-semibold text-[var(--accent-color)]"},"Learn more")," about what information must appear on your business website."),helpText:"",placeholder:"my-website.com",errorMessage:"This is an error."},{type:"textarea",label:"Product description",description:"In 1-2 sentences, describe what you sell and when you typically charge your customers.",helpText:"",placeholder:"We provide comprehensive online courses in various subjects, and bill our users every month for continued access to classes.",errorMessage:"This is an error."},{type:"",label:"Social Security number",description:"We’re required to collect this information to verify your identity and keep Stripe’s payments secure.",helpText:n.createElement(n.Fragment,null,"If your business representative doesn’t have a Social Security number, you may need to update your business address to be outside the United States.",n.createElement("div",{className:"mb-2"}),"You previously provided the last 4 digits, but now we need all 9 because your payment volume has grown. ",n.createElement("a",{className:"font-medium text-[var(--accent-color)]"},"Learn more")),placeholder:"123-45-6789",errorMessage:"This is an error."}]},{title:"Add public details for customers",description:"This information may be visible in payment statements, invoices, and receipts.",fields:[{type:"",label:"Statement descriptor",description:"A short description that shows up on your customer’s statements.",helpText:n.createElement(n.Fragment,null,"Your statement decriptor should be 5-22 characters.",n.createElement("img",{src:B,className:"mt-3 max-w-[350px]"})),placeholder:"",errorMessage:"This is an error. It pushes the help text down when it appears."},{type:"",label:"Statement descriptor",description:"A short summary or label associated with transactions.",helpText:n.createElement(n.Fragment,null,"This is similar to the full statement descriptor. You may provide more specific details about a charge with dynamic suffixes. When a suffix is used, it is combined with the shortened descriptor on card statements.",n.createElement("img",{src:B,className:"mt-3 max-w-[350px]"})),placeholder:"",errorMessage:"This is an error."},{type:"switch",label:"Show phone number on receipts and invoices",description:"Hide your customer support number on invoices and receipts.",helpText:"Your customer support number will still be shown on customer bank and credit card statements."},{type:"tel",label:"Customer support phone number",description:"",helpText:"This phone number can be optionally surfaced on payment statements, invoices and receipts if you use Stripe for Payments. You can control the visibility of this information and update this information at any time in settings.",placeholder:"(123) 456-7890",errorMessage:"This is an error."}]}],W=()=>n.createElement(I.Z,{title:"Home"});var H=()=>{const{0:e,1:t}=(0,n.useState)(0),{0:r,1:a}=(0,n.useState)(!1),{0:o,1:l}=(0,n.useState)(!0),{0:s,1:c}=(0,n.useState)("hosted"),i=L[e],d=e=>{const t=e.target.value;"embedded"==t?(document.documentElement.style.setProperty("--accent-color","#0074D4"),c("embedded")):"hosted"==t?(document.documentElement.style.setProperty("--accent-color","#0074D4"),c("hosted")):"direct"==t&&(document.documentElement.style.setProperty("--accent-color","#675DFF"),c("direct"))},m=()=>n.createElement("div",{className:"flex flex-col bg-white shadow-lg rounded-lg fixed bottom-12 left-12 p-3 gap-3 z-50 border w-[250px] transition-transform text-primary"},n.createElement("div",{className:"flex flex-col gap-1"},n.createElement("label",{htmlFor:"nav-option"},"Type of onboarding"),n.createElement("select",{id:"nav-option",className:"border rounded px-1 py-1",value:s,onChange:d},n.createElement("option",{value:"hosted"},"Hosted"),n.createElement("option",{value:"embedded"},"Embedded"),n.createElement("option",{value:"direct"},"Direct"))),n.createElement("div",{className:"flex gap-2"},n.createElement("input",{type:"checkbox",id:"show-errors",checked:r,onChange:e=>a(e.target.checked)}),n.createElement("label",{htmlFor:"show-errors"},"Show form errors")),n.createElement("div",{className:("embedded"!=s?"":"hidden")+" flex gap-2"},n.createElement("input",{type:"color",id:"accent-color",onChange:e=>{return t=e.target.value,void document.documentElement.style.setProperty("--accent-color",t);var t},className:"w-6 bg-transparent"}),n.createElement("label",{htmlFor:"accent-color"},"Accent color")),n.createElement("div",{className:("embedded"==s?"":"hidden")+" flex gap-2"},n.createElement("input",{type:"checkbox",id:"show-borders",checked:o,onChange:e=>l(e.target.checked)}),n.createElement("label",{htmlFor:"show-borders"},"Show embedded borders")));return n.createElement("div",{className:`\n      ${"embedded"==s?"h-auto":"md:h-screen"}\n      flex gap-4 overflow-hidden justify-center flex-col md:flex-row`},n.createElement(m,null),n.createElement(z,{type:s}),n.createElement("div",{className:`\n        ${"hosted"==s||"direct"==s?"grow min-h-screen overflow-scroll":""}\n        ${"embedded"==s?"my-12":""}\n        ${"embedded"==s&&o?"border border-dashed border-2 border-[var(--accent-color)] my-12":""}\n        relative`},n.createElement("div",{className:`\n          ${"embedded"==s?"p-1":"p-6 md:p-12 md:py-20"}\n          flex flex-col gap-12 w-full md:max-w-[600px]`},n.createElement("div",{className:"header"},n.createElement("h1",{className:"text-3xl font-semibold text-primary mb-2"},i.title),n.createElement("p",{className:"text-lg text-secondary"},i.description)),i.fields.map(((t,a)=>n.createElement(O,{key:e+""+a,type:t.type||"text",label:t.label,badgeText:t.badgeText,description:t.description,helpText:t.helpText,placeholder:t.placeholder,errorMessage:r?t.errorMessage:""}))),n.createElement("div",{className:"flex grow gap-2 justify-end"},n.createElement("button",{type:"button",className:(0==e?"hidden":"")+" bg-gray-200 px-3 py-2 rounded font-medium grow focus-visible:outline-[var(--accent-color)]",onClick:()=>{0!=e&&t(e-1)}},"Back"),n.createElement("button",{type:"button",className:"bg-[var(--accent-color)] px-3 py-2 text-white rounded font-medium grow focus-visible:outline-[var(--accent-color)]",onClick:()=>{e!=L.length-1&&t(e+1)}},"Continue")))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d9f8390fe5ad830c2bae.js.map