!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function h(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),s?h(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=g();if(w(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?m(n,a-(e-c)):n}(e))}function T(e){return f=void 0,p&&r?h(e):(r=o=void 0,u)}function S(){var e=g(),n=w(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),h(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},S.flush=function(){return void 0===f?u:T(g())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const h=document.querySelector(".feedback-form"),j="feedback-form-state";let w={};!function(){let e=JSON.parse(localStorage.getItem(j));if(!e)return;w=e,h.elements.email.value=w.email||"",h.elements.message.value=w.message||""}(),h.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(w))}),500)),h.addEventListener("submit",(function(e){if(e.preventDefault(),!e.target.email.value||!e.target.message.value)return alert("Please fill in all the fields!");console.log(w),h.reset(),localStorage.removeItem(j)}))}();
//# sourceMappingURL=03-feedback.c7700316.js.map