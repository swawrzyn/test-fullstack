(self.webpackChunkwiredcraft_test_fullstack=self.webpackChunkwiredcraft_test_fullstack||[]).push([[79,800],{3079:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U});var n=r(4942),o=r(885),s=r(7294),i=r(246),l=r.n(i),a=r(5861),c=r(7757),u=r.n(c),d=r(2991),p=r(5018),f=r(3379),h=r.n(f),v=r(7795),m=r.n(v),y=r(569),b=r.n(y),w=r(3565),g=r.n(w),x=r(9216),k=r.n(x),j=r(4589),L=r.n(j),P=r(6003),O={};O.styleTagTransform=L(),O.setAttributes=g(),O.insert=b().bind(null,"head"),O.domAPI=m(),O.insertStyleElement=k(),h()(P.Z,O),P.Z&&P.Z.locals&&P.Z.locals;var S=r(1358),C=r(5893);function T(){var e=(0,d.TL)(),t=function(){var t=(0,a.Z)(u().mark((function t(r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e((0,p.xP)({sort:r.target.value,page:1}));case 2:S.A.show({title:"Talk added!",content:"Your talk has been successfully added!",type:"success",duration:3e3});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,C.jsx)("div",{className:"filter-bar",children:(0,C.jsx)("div",{className:"select",children:(0,C.jsxs)("select",{onChange:t,children:[(0,C.jsx)("option",{value:"popular",children:"Most Popular"}),(0,C.jsx)("option",{value:"newest",children:"Newest"})]})})})}var E=r(4184),Z=r.n(E),M=r(9490),_=r(5671),N=r(3144),R=r(9340),z=r(4575),W=r(1120);var A=function(e){(0,R.Z)(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,W.Z)(t);if(r){var o=(0,W.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,z.Z)(this,e)});function o(){return(0,_.Z)(this,o),n.apply(this,arguments)}return(0,N.Z)(o,[{key:"render",value:function(){return(0,C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"drop-shadow",width:this.props.size,height:this.props.size,viewBox:"0 0 24 24",stroke:"currentColor",children:(0,C.jsx)("path",{className:"icon",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})}}]),o}(s.Component),I=r(7848),D={};function H(e){return(0,C.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",height:e.size,width:e.size,xmlns:"http://www.w3.org/2000/svg",children:(0,C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}function B(e){return(0,C.jsx)("svg",{fill:"none",stroke:"currentColor",width:e.size,height:e.size,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}function G(e){var t=(0,d.TL)(),r=(0,d.CG)((function(e){return e.user.loggedIn})),n=(0,d.CG)((function(e){return e.user.user.voteTalkIds})),i=(0,s.useState)(!1),l=(0,o.Z)(i,2),a=l[0],c=l[1],u=Z()("l-card","py-4","my-8",{voted:a}),f=Z()("left","px-10",{checked:a});(0,s.useEffect)((function(){c(n.includes(e.id))}),[n]);var h=M.ou.fromISO(e.createdAt).toLocaleString(M.ou.DATETIME_SHORT);return(0,C.jsxs)("div",{className:u,children:[(0,C.jsxs)("button",{onClick:function(){r?t((0,p.Ns)(e.id)):S.A.show({title:"Login Required",content:"You must first login before you are able to vote.",type:"error",duration:3e3})},type:"button",className:f,children:[(0,C.jsx)(A,{fillColor:"none",size:48}),(0,C.jsx)("span",{className:"text-xl",children:e.voteCount})]}),(0,C.jsxs)("div",{className:"center pr-4",children:[(0,C.jsxs)("div",{className:"content",children:[(0,C.jsx)("div",{className:"title text-2xl text-bold text-blue",children:e.title}),(0,C.jsx)("div",{className:"desc text-lg",children:e.description})]}),(0,C.jsxs)("div",{className:"info py-2 text-gray flex items-center justify-start text-md",children:[(0,C.jsx)(H,{size:18}),(0,C.jsx)("span",{className:"user ml-1 mr-2",children:e.userName}),(0,C.jsx)(B,{size:18}),(0,C.jsx)("span",{className:"created ml-1 mr-2",children:h})]})]})]})}D.styleTagTransform=L(),D.setAttributes=g(),D.insert=b().bind(null,"head"),D.domAPI=m(),D.insertStyleElement=k(),h()(I.Z,D),I.Z&&I.Z.locals&&I.Z.locals;var Y=r(2448);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(){var e,t=(0,d.TL)(),r=(0,d.CG)((function(e){return(0,Y.ip)(e.talks)})),i=((0,d.CG)((function(e){return e.talks.status})),(0,s.useState)(!1)),a=(0,o.Z)(i,2),c=a[0],u=a[1],f=(0,d.CG)((function(e){return e.talks.sortType})),h=(0,d.CG)((function(e){return e.talks.meta}));return(0,s.useEffect)((function(){t((0,p.xP)({sort:"popular",page:1}))}),[]),e=r.map((function(e,t){return(0,C.jsx)(G,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.id)})),(0,C.jsxs)("div",{className:"w-full talks-container",children:[(0,C.jsx)(T,{}),(0,C.jsx)(l(),{pageStart:1,loadMore:function(e){console.log("loading page:",e),u(!0),t((0,p.xP)({sort:f,page:e})).then((function(){u(!1)}))},hasMore:!c&&h.currentPage<h.totalPages,initialLoad:!1,loader:(0,C.jsx)("div",{className:"w-full flex items-center justify-center text-gray text-md",children:"Loading"},0),children:e})]})}r(5800)},6003:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(8081),o=r.n(n),s=r(3645),i=r.n(s)()(o());i.push([e.id,".filter-bar{width:100%;display:flex;align-items:center;justify-content:flex-end}.filter-bar .select{width:33%}@media(max-width: 1024px){.filter-bar{justify-content:center}.filter-bar .select{width:100%}}",""]);const l=i},7848:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(8081),o=r.n(n),s=r(3645),i=r.n(s)()(o());i.push([e.id,".l-card{position:relative;width:100%;border:1px solid #d3d3d3;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);transition:all .15s ease-in;border-radius:5px;display:flex;align-items:center;justify-content:start;transform:scale(1)}.l-card:hover{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)}.l-card.voted{background-color:#feffef}.l-card .left{display:flex;flex-direction:column;width:15%;min-width:15%;align-items:center;justify-content:center}.l-card .left .icon{fill:#f5f5f5;transition:fill .15s ease-in;color:#2d2d2d}.l-card .left:hover{font-weight:700}.l-card .left:hover .icon{fill:#4ecbfc;color:transparent}.l-card .left:hover.checked{transition:color .15s ease-in;color:#000}.l-card .left:hover.checked .icon{fill:#4ea5fc}.l-card .left.checked{font-weight:700}.l-card .left.checked .icon{color:transparent;fill:#0353a4}.l-card .left.checked:hover{font-weight:700}.l-card .left.checked:hover .icon{fill:#4ea5fc;color:transparent}.l-card .center{display:flex;flex-grow:1;flex-direction:column;justify-content:space-between;align-items:flex-start}.l-card .center .content .title{word-break:break-all}.l-card .center .content .desc{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-all}@media(max-width: 1024px){.filter-bar{justify-content:center}.filter-bar .select{width:100%}}",""]);const l=i},1519:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(8081),o=r.n(n),s=r(3645),i=r.n(s)()(o());i.push([e.id,"",""]);const l=i},2703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,s,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return r.PropTypes=r,r}},5697:(e,t,r)=>{e.exports=r(2703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7761:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(7294),s=l(o),i=l(r(5697));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scrollListener=r.scrollListener.bind(r),r.eventListenerOptions=r.eventListenerOptions.bind(r),r.mousewheelListener=r.mousewheelListener.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(e){}return e}},{key:"eventListenerOptions",value:function(){return this.props.useCapture,this.isPassiveSupported()?{useCapture:this.props.useCapture,passive:!0}:{passive:!1}}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,r=this.getParentElement(e),n=void 0;if(this.props.useWindow){var o=document.documentElement||document.body.parentNode||document.body,s=void 0!==t.pageYOffset?t.pageYOffset:o.scrollTop;n=this.props.isReverse?s:this.calculateOffset(e,s)}else n=this.props.isReverse?r.scrollTop:e.scrollHeight-r.scrollTop-r.clientHeight;n<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,"function"==typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),r=t.children,n=t.element,o=t.hasMore,i=(t.initialLoad,t.isReverse),l=t.loader,a=(t.loadMore,t.pageStart,t.ref),c=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));c.ref=function(t){e.scrollComponent=t,a&&a(t)};var u=[r];return o&&(l?i?u.unshift(l):u.push(l):this.defaultLoader&&(i?u.unshift(this.defaultLoader):u.push(this.defaultLoader))),s.default.createElement(n,c,u)}}]),t}(o.Component);a.propTypes={children:i.default.node.isRequired,element:i.default.node,hasMore:i.default.bool,initialLoad:i.default.bool,isReverse:i.default.bool,loader:i.default.node,loadMore:i.default.func.isRequired,pageStart:i.default.number,ref:i.default.func,getScrollParent:i.default.func,threshold:i.default.number,useCapture:i.default.bool,useWindow:i.default.bool},a.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=a,e.exports=t.default},246:(e,t,r)=>{e.exports=r(7761)},5800:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var n=r(3379),o=r.n(n),s=r(7795),i=r.n(s),l=r(569),a=r.n(l),c=r(3565),u=r.n(c),d=r(9216),p=r.n(d),f=r(4589),h=r.n(f),v=r(1519),m={};m.styleTagTransform=h(),m.setAttributes=u(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),o()(v.Z,m);const y=v.Z&&v.Z.locals?v.Z.locals:void 0},885:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,s=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return s}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);