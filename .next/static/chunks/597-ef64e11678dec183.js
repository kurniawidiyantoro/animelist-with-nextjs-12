(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,c=o(n(7294)),a=n(6273),u=n(2725),l=n(3462),s=n(1018),f=n(7190),p=n(1210),d=n(8684),y={};function h(e,t,n,r){if(e&&a.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;y[t+"%"+n+(o?"%"+o:"")]=!0}}var b=c.default.forwardRef(function(e,t){var n,o,b=e.href,v=e.as,g=e.children,m=e.prefetch,O=e.passHref,j=e.replace,w=e.shallow,R=e.scroll,x=e.locale,C=e.onClick,P=e.onMouseEnter,E=e.onTouchStart,k=e.legacyBehavior,M=void 0===k?!0!==Boolean(!1):k,D=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,M&&("string"==typeof n||"number"==typeof n)&&(n=c.default.createElement("a",null,n));var _=!1!==m,S=c.default.useContext(l.RouterContext),T=c.default.useContext(s.AppRouterContext);T&&(S=T);var N=c.default.useMemo(function(){var e=r(a.resolveHref(S,b,!0),2),t=e[0],n=e[1];return{href:t,as:v?a.resolveHref(S,v):n||t}},[S,b,v]),L=N.href,I=N.as,z=c.default.useRef(L),K=c.default.useRef(I);M&&(o=c.default.Children.only(n));var A=M?o&&"object"==typeof o&&o.ref:t,B=r(f.useIntersection({rootMargin:"200px"}),3),Z=B[0],U=B[1],F=B[2],G=c.default.useCallback(function(e){(K.current!==I||z.current!==L)&&(F(),K.current=I,z.current=L),Z(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[I,A,L,F,Z]);c.default.useEffect(function(){var e=U&&_&&a.isLocalURL(L),t=void 0!==x?x:S&&S.locale,n=y[L+"%"+I+(t?"%"+t:"")];e&&!n&&h(S,L,I,{locale:t})},[I,L,U,x,_,S]);var H={ref:G,onClick:function(e){M||"function"!=typeof C||C(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,u,l,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(p=e).currentTarget.target)||"_self"===d)&&!p.metaKey&&!p.ctrlKey&&!p.shiftKey&&!p.altKey&&(!p.nativeEvent||2!==p.nativeEvent.which)&&a.isLocalURL(n)){e.preventDefault();var p,d,y=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:u}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};s?c.default.startTransition(y):y()}}(e,S,L,I,j,w,R,x,Boolean(T),_)},onMouseEnter:function(e){M||"function"!=typeof P||P(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!_&&T)&&a.isLocalURL(L)&&h(S,L,I,{priority:!0})},onTouchStart:function(e){M||"function"!=typeof E||E(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!_&&T)&&a.isLocalURL(L)&&h(S,L,I,{priority:!0})}};if(!M||O||"a"===o.type&&!("href"in o.props)){var V=void 0!==x?x:S&&S.locale,$=S&&S.isLocaleDomain&&p.getDomainLocale(I,V,S.locales,S.domainLocales);H.href=$||d.addBasePath(u.addLocale(I,V,S&&S.defaultLocale))}return M?c.default.cloneElement(o,H):c.default.createElement("a",Object.assign({},D,H),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var c=r.default.createContext(null);t.GlobalLayoutRouterContext=c;var a=r.default.createContext(null);t.TemplateContext=a},1664:function(e,t,n){e.exports=n(8418)},9886:function(e,t,n){"use strict";var r=n(7294),o=n(5697),i=n.n(o),c=n(4184),a=n.n(c),u=n(2040),l=["className","cssModule","color","body","inverse","outline","tag","innerRef"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f={body:i().bool,className:i().string,color:i().string,cssModule:i().object,innerRef:i().oneOfType([i().object,i().string,i().func]),inverse:i().bool,outline:i().bool,tag:u.iC};function p(e){var t=e.className,n=e.cssModule,o=e.color,i=e.body,c=e.inverse,f=e.outline,p=e.tag,d=e.innerRef,y=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,l),h=(0,u.mx)(a()(t,"card",!!c&&"text-white",!!i&&"card-body",!!o&&"".concat(f?"border":"bg","-").concat(o)),n);return r.createElement(void 0===p?"div":p,s({},y,{className:h,ref:d}))}p.propTypes=f,t.Z=p},4610:function(e,t,n){"use strict";var r=n(7294),o=n(5697),i=n.n(o),c=n(4184),a=n.n(c),u=n(2040),l=["className","cssModule","innerRef","tag"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f={className:i().string,cssModule:i().object,innerRef:i().oneOfType([i().object,i().string,i().func]),tag:u.iC};function p(e){var t=e.className,n=e.cssModule,o=e.innerRef,i=e.tag,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,l),f=(0,u.mx)(a()(t,"card-body"),n);return r.createElement(void 0===i?"div":i,s({},c,{className:f,ref:o}))}p.propTypes=f,t.Z=p},9816:function(e,t,n){"use strict";var r=n(7294),o=n(5697),i=n.n(o),c=n(4184),a=n.n(c),u=n(2040),l=["className","cssModule","tag"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f={className:i().string,cssModule:i().object,tag:u.iC};function p(e){var t=e.className,n=e.cssModule,o=e.tag,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,l),c=(0,u.mx)(a()(t,"card-title"),n);return r.createElement(void 0===o?"div":o,s({},i,{className:c}))}p.propTypes=f,t.Z=p},1442:function(e,t,n){"use strict";var r=n(7294),o=n(5697),i=n.n(o),c=n(2040);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=["className","cssModule","tag","innerRef"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y={children:i().node,tag:c.iC,innerRef:i().oneOfType([i().object,i().func,i().string]),className:i().string,cssModule:i().object},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(b,e);var t,n,o,i,y,h=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=d(b);if(n){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function b(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,b),(t=h.call(this,e)).getRef=t.getRef.bind(p(t)),t.submit=t.submit.bind(p(t)),t}return i=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.tag,i=e.innerRef,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u),s=(0,c.mx)(t,n);return r.createElement(void 0===o?"form":o,l({},a,{ref:i,className:s}))}}],s(b.prototype,i),y&&s(b,y),Object.defineProperty(b,"prototype",{writable:!1}),b}(r.Component);h.propTypes=y,t.Z=h},7261:function(e,t,n){"use strict";var r=n(7294),o=n(5697),i=n.n(o),c=n(4184),a=n.n(c),u=n(2040);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={children:i().node,type:i().string,size:i().oneOfType([i().number,i().string]),bsSize:i().string,valid:i().bool,invalid:i().bool,tag:u.iC,innerRef:i().oneOfType([i().object,i().func,i().string]),plaintext:i().bool,addon:i().bool,className:i().string,cssModule:i().object},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(v,e);var t,n,o,i,c,b=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=h(v);if(n){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return y(e)}(this,e)});function v(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,v),(t=b.call(this,e)).getRef=t.getRef.bind(y(t)),t.focus=t.focus.bind(y(t)),t}return i=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=void 0===o?"text":o,c=e.bsSize,l=e.valid,p=e.invalid,d=e.tag,y=e.addon,h=e.plaintext,b=e.innerRef,v=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s),g=["switch","radio","checkbox"].indexOf(i)>-1,m="select"===i,O=d||(m||"textarea"===i?i:"input"),j="form-control";h?(j="".concat(j,"-plaintext"),O=d||"input"):"range"===i?j="form-range":m?j="form-select":g&&(j=y?null:"form-check-input"),v.size&&/\D/g.test(v.size)&&((0,u.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=v.size,delete v.size);var w=(0,u.mx)(a()(t,p&&"is-invalid",l&&"is-valid",!!c&&(m?"form-select-".concat(c):"form-control-".concat(c)),j),n);return("input"===O||d&&"function"==typeof d)&&(v.type="switch"===i?"checkbox":i),v.children&&!(h||"select"===i||"string"!=typeof O||"select"===O)&&((0,u.O4)('Input with a type of "'.concat(i,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete v.children),r.createElement(O,f({},v,{ref:b,className:w,"aria-invalid":p}))}}],p(v.prototype,i),c&&p(v,c),Object.defineProperty(v,"prototype",{writable:!1}),v}(r.Component);v.propTypes=b,t.Z=v},4017:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(7294),o=n(5697),i=n.n(o),c=n(4184),a=n.n(c),u=n(2040),l=r.createContext(),s=r.createContext();function f(e){var t=e.children,n=r.useState(null),o=n[0],i=n[1],c=r.useRef(!1);r.useEffect(function(){return function(){c.current=!0}},[]);var a=r.useCallback(function(e){c.current||i(e)},[]);return r.createElement(l.Provider,{value:o},r.createElement(s.Provider,{value:a},t))}var p=r.createContext({}),d=r.createContext({});function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=["className","cssModule","direction","isOpen","group","size","nav","setActiveFromChild","active","tag","menuRole"];function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w={a11y:i().bool,disabled:i().bool,direction:i().oneOf(["up","down","start","end","left","right"]),group:i().bool,isOpen:i().bool,nav:i().bool,active:i().bool,size:i().string,tag:u.iC,toggle:i().func,children:i().node,className:i().string,cssModule:i().object,dropup:i().bool,inNavbar:i().bool,setActiveFromChild:i().bool,menuRole:i().oneOf(["listbox","menu"])},R=[u.Do.space,u.Do.enter,u.Do.up,u.Do.down,u.Do.end,u.Do.home],x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(s,e);var t,n,o,i,c,l=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=j(s);if(n){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return O(e)}(this,e)});function s(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).addEvents=t.addEvents.bind(O(t)),t.handleDocumentClick=t.handleDocumentClick.bind(O(t)),t.handleKeyDown=t.handleKeyDown.bind(O(t)),t.removeEvents=t.removeEvents.bind(O(t)),t.toggle=t.toggle.bind(O(t)),t.handleMenuRef=t.handleMenuRef.bind(O(t)),t.handleToggleRef=t.handleToggleRef.bind(O(t)),t.containerRef=r.createRef(),t.menuRef=r.createRef(),t.toggleRef=r.createRef(),t}return i=[{key:"componentDidMount",value:function(){this.handleProps()}},{key:"componentDidUpdate",value:function(e){this.props.isOpen!==e.isOpen&&this.handleProps()}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"handleMenuRef",value:function(e){this.menuRef.current=e}},{key:"handleToggleRef",value:function(e){this.toggleRef.current=e}},{key:"handleDocumentClick",value:function(e){if(!e||3!==e.which&&("keyup"!==e.type||e.which===u.Do.tab)){var t=this.getContainer(),n=this.getMenu(),r=this.getToggle().contains(e.target),o=n&&n.contains(e.target)&&n!==e.target,i=!1;t&&(i=t.classList.contains("input-group")&&t.classList.contains("dropdown")&&"INPUT"===e.target.tagName),((!r||i)&&!o||"keyup"===e.type&&e.which!==u.Do.tab)&&this.toggle(e)}}},{key:"handleKeyDown",value:function(e){var t,n=this,r="menuitem"===e.target.getAttribute("role")||"option"===e.target.getAttribute("role"),o=this.getMenuCtrl()===e.target,i=u.Do.tab===e.which;if(!/input|textarea/i.test(e.target.tagName)&&(!i||this.props.a11y)&&(!i||r||o)&&((-1!==R.indexOf(e.which)||e.which>=48&&e.which<=90)&&e.preventDefault(),!this.props.disabled&&(o&&([u.Do.space,u.Do.enter,u.Do.up,u.Do.down].indexOf(e.which)>-1?(this.props.isOpen||this.toggle(e),setTimeout(function(){var e;return null===(e=n.getMenuItems()[0])||void 0===e?void 0:e.focus()})):this.props.isOpen&&i?(e.preventDefault(),null===(t=this.getMenuItems()[0])||void 0===t||t.focus()):this.props.isOpen&&e.which===u.Do.esc&&this.toggle(e)),this.props.isOpen&&r))){if([u.Do.tab,u.Do.esc].indexOf(e.which)>-1)this.toggle(e),this.getMenuCtrl().focus();else if([u.Do.space,u.Do.enter].indexOf(e.which)>-1)e.target.click(),this.getMenuCtrl().focus();else if([u.Do.down,u.Do.up].indexOf(e.which)>-1||[u.Do.n,u.Do.p].indexOf(e.which)>-1&&e.ctrlKey){var c=this.getMenuItems(),a=c.indexOf(e.target);u.Do.up===e.which||u.Do.p===e.which&&e.ctrlKey?a=0!==a?a-1:c.length-1:(u.Do.down===e.which||u.Do.n===e.which&&e.ctrlKey)&&(a=a===c.length-1?0:a+1),c[a].focus()}else if(u.Do.end===e.which){var l=this.getMenuItems();l[l.length-1].focus()}else if(u.Do.home===e.which)this.getMenuItems()[0].focus();else if(e.which>=48&&e.which<=90){for(var s=this.getMenuItems(),f=String.fromCharCode(e.which).toLowerCase(),p=0;p<s.length;p+=1)if((s[p].textContent&&s[p].textContent[0].toLowerCase())===f){s[p].focus();break}}}}},{key:"handleProps",value:function(){this.props.isOpen?this.addEvents():this.removeEvents()}},{key:"getContextValue",value:function(){return{toggle:this.toggle,isOpen:this.props.isOpen,direction:"down"===this.props.direction&&this.props.dropup?"up":this.props.direction,inNavbar:this.props.inNavbar,disabled:this.props.disabled,onMenuRef:this.handleMenuRef,onToggleRef:this.handleToggleRef,menuRole:this.props.menuRole}}},{key:"getContainer",value:function(){return this.containerRef.current}},{key:"getMenu",value:function(){return this.menuRef.current}},{key:"getToggle",value:function(){return this.toggleRef.current}},{key:"getMenuCtrl",value:function(){return this._$menuCtrl||(this._$menuCtrl=this.getToggle()),this._$menuCtrl}},{key:"getItemType",value:function(){return"listbox"===this.props.menuRole?"option":"menuitem"}},{key:"getMenuItems",value:function(){var e=this.getMenu()||this.getContainer();return[].slice.call(e.querySelectorAll('[role="'.concat(this.getItemType(),'"]')))}},{key:"addEvents",value:function(){var e=this;["click","touchstart","keyup"].forEach(function(t){return document.addEventListener(t,e.handleDocumentClick,!0)})}},{key:"removeEvents",value:function(){var e=this;["click","touchstart","keyup"].forEach(function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)})}},{key:"toggle",value:function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)}},{key:"render",value:function(){var e,t=this,n=(0,u.CE)(this.props,["toggle","disabled","inNavbar","a11y"]),o=n.className,i=n.cssModule,c=n.direction,l=n.isOpen,s=n.group,d=n.size,y=n.nav,g=n.setActiveFromChild,m=n.active,O=n.tag,j=(n.menuRole,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(n,h)),w=O||(y?"li":"div"),R=!1;g&&r.Children.map(this.props.children[1].props.children,function(e){e&&e.props.active&&(R=!0)});var x=(0,u.mx)(a()(o,!!y&&!!m&&"active",!!g&&!!R&&"active",(e={"btn-group":s},v(e,"btn-group-".concat(d),!!d),v(e,"dropdown",!s),v(e,"dropup","up"===c),v(e,"dropstart","start"===c||"left"===c),v(e,"dropend","end"===c||"right"===c),v(e,"show",l),v(e,"nav-item",y),e)),i);return this.context.insideInputGroup?r.createElement(p.Provider,{value:this.getContextValue()},r.createElement(f,null,r.Children.map(this.props.children,function(e){return r.cloneElement(e,{onKeyDown:t.handleKeyDown})}))):r.createElement(p.Provider,{value:this.getContextValue()},r.createElement(f,null,r.createElement(w,b({},j,v({},"string"==typeof w?"ref":"innerRef",this.containerRef),{onKeyDown:this.handleKeyDown,className:x}))))}}],g(s.prototype,i),c&&g(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s}(r.Component);x.propTypes=w,x.defaultProps={a11y:!0,isOpen:!1,direction:"down",nav:!1,active:!1,inNavbar:!1,setActiveFromChild:!1},x.contextType=d;var C=["className","cssModule","tag","type","size"];function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E={className:i().string,cssModule:i().object,size:i().string,tag:u.iC,type:i().string};function k(e){var t=e.className,n=e.cssModule,o=e.tag,i=(e.type,e.size),c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,C),l=(0,u.mx)(a()(t,"input-group",i?"input-group-".concat(i):null),n);return"dropdown"===e.type?r.createElement(x,P({},c,{className:l})):r.createElement(d.Provider,{value:{insideInputGroup:!0}},r.createElement(void 0===o?"div":o,P({},c,{className:l})))}k.propTypes=E;var M=k}}]);