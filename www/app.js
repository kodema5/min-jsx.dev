(()=>{var v=Object.defineProperty;var h=(o,t,s)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var u=(o,t,s)=>(h(o,typeof t!="symbol"?t+"":t,s),s);var O=React,{Children:y,Component:I,Fragment:m,Profiler:N,PureComponent:C,StrictMode:L,Suspense:x,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:D,cloneElement:T,createContext:w,createElement:r,createFactory:V,createRef:k,forwardRef:M,isValidElement:P,lazy:U,memo:j,startTransition:A,unstable_act:B,useCallback:F,useContext:H,useDebugValue:J,useDeferredValue:W,useEffect:d,useId:Y,useImperativeHandle:z,useInsertionEffect:q,useLayoutEffect:G,useMemo:K,useReducer:Q,useRef:X,useState:f,useSyncExternalStore:Z,useTransition:$,version:ee}=React;var te=ReactDOM,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:se,createPortal:ae,createRoot:p,findDOMNode:ne,flushSync:re,hydrate:oe,hydrateRoot:le,render:ie,unmountComponentAtNode:ue,unstable_batchedUpdates:ce,unstable_renderSubtreeIntoContainer:me,version:de}=ReactDOM;var l=class{constructor(){u(this,"listeners",{});u(this,"anonId",0)}_on(t,s){let e=t.split(".")[1]?"":"."+String(++this.anonId);return t=t+e,this.listeners[t]=s,t}on(t){return Object.entries(t).map(([s,e])=>this._on(s,e))}_off(t){return t in this.listeners&&delete this.listeners[t]}off(t){return t.map(s=>this._off(s))}_post(t,s){return Object.entries(this.listeners).filter(([e,a])=>e.split(".")[0]===t).map(([e,a])=>a).filter(Boolean).map(async e=>e(s)).length}post(t){return Object.entries(t).map(([s,e])=>this._post(s,e)).reduce((s,e)=>s+e,0)}};var _=globalThis.Last=class{constructor(t,s={}){let e=this;return e.id=t,e.initialValues={...s},e.values=JSON.parse(sessionStorage.getItem(e.id)),(!e.values||Object.keys(e.values).length===0)&&(e.values={...e.initialValues}),e.reset=()=>{e.values={...e.initialValues}},e.set=(a,n)=>(a==="values"?Object.assign(e.values,{...n}):e.values[a]=n,n),addEventListener("beforeunload",()=>{sessionStorage.setItem(e.id,JSON.stringify(this.values))}),new Proxy(e,{set(a,n,b){a.set(n,b)},get(a,n){return n==="values"?a.values:a.values.hasOwnProperty(n)?a.values[n]:Reflect.get(...arguments)},has(a,n){return n in a.values},delete(a,n){return a.values[n]}})}};var i=new _("app",{state:"world"}),c=new l,E=()=>{let[o,t]=f(i.state),s=e=>t(i.set("state",e));return d(()=>{let e=c.on({message:a=>s(a)});return()=>c.off(e)},[]),r(m,null,r("div",{className:"container"},r("div",{className:"row"},r("div",{className:"col"},r("h1",null,"Hello, ",o,"!"),r("button",{className:"btn btn-primary",onClick:()=>{setTimeout(()=>{c.post({message:new Date().toLocaleString()})},10)},title:"simulate external js call."},"post a local time"),r("button",{className:"btn btn-primary ms-2",onClick:()=>{i.reset(),s(i.state)}},"reset values"),r("button",{className:"btn btn-primary ms-2",onClick:()=>{document.location.reload()}},"reload page")))))},S=p(document.getElementById("root"));S.render(r(E,null));})();
//# sourceMappingURL=app.js.map
