(()=>{var _=Object.defineProperty;var y=(s,t,o)=>t in s?_(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o;var d=(s,t,o)=>(y(s,typeof t!="symbol"?t+"":t,o),o);var N=React,{Children:x,Component:P,Fragment:c,Profiler:D,PureComponent:w,StrictMode:F,Suspense:A,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:L,cloneElement:M,createContext:k,createElement:a,createFactory:H,createRef:G,forwardRef:V,isValidElement:U,lazy:j,memo:z,startTransition:J,unstable_act:W,useCallback:Y,useContext:q,useDebugValue:K,useDeferredValue:Q,useEffect:v,useId:Z,useImperativeHandle:$,useInsertionEffect:X,useLayoutEffect:ee,useMemo:te,useReducer:oe,useRef:re,useState:g,useSyncExternalStore:ae,useTransition:ne,version:se}=React;var le=ReactDOM,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ie,createPortal:ue,createRoot:f,findDOMNode:de,flushSync:ce,hydrate:me,hydrateRoot:pe,render:ve,unmountComponentAtNode:ge,unstable_batchedUpdates:fe,unstable_renderSubtreeIntoContainer:Ce,version:be}=ReactDOM;var Te=ReactBootstrap,{Accordion:_e,AccordionButton:ye,AccordionCollapse:Be,AccordionContext:Oe,AccordionHeader:Re,AccordionItem:Ie,Alert:Se,AlertHeading:Ee,AlertLink:Ne,Anchor:xe,Badge:Pe,Breadcrumb:De,BreadcrumbItem:we,Button:C,ButtonGroup:Fe,ButtonToolbar:Ae,Card:Le,CardBody:Me,CardFooter:ke,CardGroup:He,CardHeader:Ge,CardImg:Ve,CardImgOverlay:Ue,CardLink:je,CardSubtitle:ze,CardText:Je,CardTitle:We,Carousel:Ye,CarouselCaption:qe,CarouselItem:Ke,CloseButton:Qe,Col:Ze,Collapse:$e,Container:Xe,Dropdown:et,DropdownButton:tt,DropdownDivider:ot,DropdownHeader:rt,DropdownItem:at,DropdownItemText:nt,DropdownMenu:st,DropdownToggle:lt,Fade:it,Figure:ut,FigureCaption:dt,FigureImage:ct,FloatingLabel:mt,Form:pt,FormCheck:vt,FormControl:gt,FormFloating:ft,FormGroup:Ct,FormLabel:bt,FormSelect:ht,FormText:Tt,Image:_t,InputGroup:yt,ListGroup:Bt,ListGroupItem:Ot,Modal:Rt,ModalBody:It,ModalDialog:St,ModalFooter:Et,ModalHeader:Nt,ModalTitle:xt,Nav:Pt,NavDropdown:Dt,NavItem:wt,NavLink:Ft,Navbar:At,NavbarBrand:Lt,NavbarCollapse:Mt,NavbarOffcanvas:kt,NavbarText:Ht,NavbarToggle:Gt,Offcanvas:Vt,OffcanvasBody:Ut,OffcanvasHeader:jt,OffcanvasTitle:zt,OffcanvasToggling:Jt,Overlay:Wt,OverlayTrigger:b,PageItem:Yt,Pagination:qt,Placeholder:Kt,PlaceholderButton:Qt,Popover:l,PopoverBody:Zt,PopoverHeader:$t,ProgressBar:Xt,Ratio:eo,Row:to,SSRProvider:oo,Spinner:ro,SplitButton:ao,Stack:no,Tab:so,TabContainer:lo,TabContent:io,TabPane:uo,Table:co,Tabs:mo,ThemeProvider:po,Toast:vo,ToastBody:go,ToastContainer:fo,ToastHeader:Co,ToggleButton:bo,ToggleButtonGroup:ho,Tooltip:To,__esModule:_o,useAccordionButton:yo}=ReactBootstrap;var i=class{constructor(){d(this,"listeners",{});d(this,"anonId",0)}_on(t,o){let e=t.split(".")[1]?"":"."+String(++this.anonId);return t=t+e,this.listeners[t]=o,t}on(t){return Object.entries(t).map(([o,e])=>this._on(o,e))}_off(t){return t in this.listeners&&delete this.listeners[t]}off(t){return t.map(o=>this._off(o))}_post(t,o){return Object.entries(this.listeners).filter(([e,r])=>e.split(".")[0]===t).map(([e,r])=>r).filter(Boolean).map(async e=>e(o)).length}post(t){return Object.entries(t).map(([o,e])=>this._post(o,e)).reduce((o,e)=>o+e,0)}};var h=globalThis.Current=class{constructor(t,o={}){let e=this;return e.id=t,e.initialValues={...o},e.values=JSON.parse(sessionStorage.getItem(e.id)),(!e.values||Object.keys(e.values).length===0)&&(e.values={...e.initialValues}),e.reset=()=>{e.values={...e.initialValues}},e.set=(r,n)=>(r==="values"?Object.assign(e.values,{...n}):e.values[r]=n,n),addEventListener("beforeunload",()=>{sessionStorage.setItem(e.id,JSON.stringify(this.values))}),new Proxy(e,{set(r,n,T){r.set(n,T)},get(r,n){return n==="values"?r.values:r.values.hasOwnProperty(n)?r.values[n]:Reflect.get(...arguments)},has(r,n){return n in r.values},delete(r,n){return r.values[n]}})}};var u=new h("app",{state:"world"}),m=new i,O=a(l,{id:"popover-basic"},a(l.Header,{as:"h3"},"Popover right"),a(l.Body,null,"And here's some ",a("strong",null,"amazing")," content. It's very engaging. right?")),R=()=>a(b,{trigger:"hover",placement:"right",overlay:O},a(C,{variant:"success"},"hover")),p=class extends HTMLElement{connectedCallback(){let t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","react/bootstrap.min.css");let o=document.createElement("div"),e=this.attachShadow({mode:"open"});e.appendChild(t),e.appendChild(o),ReactDOM.createRoot(o).render(a(c,null,a(R,null)))}};customElements.define("x-search",p);var I=()=>{let[s,t]=g(u.state),o=e=>t(u.set("state",e));return v(()=>{let e=m.on({message:r=>o(r)});return()=>m.off(e)},[]),a(c,null,a("div",{className:"container"},a("div",{className:"row"},a("div",{className:"col"},a("h1",null,"Hello, ",s,"!"),a("button",{className:"btn btn-primary",onClick:()=>{setTimeout(()=>{m.post({message:new Date().toLocaleString()})},10)},title:"simulate external js call."},"post a local time"),a("button",{className:"btn btn-primary ms-2",onClick:()=>{u.reset(),o(u.state)}},"reset values"),a("button",{className:"btn btn-primary ms-2",onClick:()=>{document.location.reload()}},"reload page")))))},S=f(document.getElementById("root"));S.render(a(I,null));})();
//# sourceMappingURL=app.js.map
