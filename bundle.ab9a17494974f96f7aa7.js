"use strict";(self.webpackChunkwiredcraft_test_fullstack=self.webpackChunkwiredcraft_test_fullstack||[]).push([[83],{83:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(885),a=r(7294),u=r(6974),o=r(9342),l=r(1358),s=r(2991),c=r(5504),i=r(4185),f=r(5893);function d(){var e=(0,s.TL)(),t=(0,s.CG)((function(e){return e.user.status})),r=(0,u.s0)(),d=(0,o.lr)(),y=(0,n.Z)(d,1)[0].get("code");return y||(0,a.useEffect)((function(){r("/",{state:"error"})})),(0,a.useEffect)((function(){"idle"===t&&y&&e((0,c.x4)({provider:"github",code:y}))}),[]),(0,a.useEffect)((function(){"succeeded"===t?(r("/",{state:"success"}),l.A.show({title:"Login Successful!",content:"You may now vote and create your own talks.",type:"success",duration:3e3})):"failed"===t&&(r("/",{state:"error"}),l.A.show({title:"There was an error logging in.",content:"Please try again later.",type:"error",duration:3e3}))}),[t]),(0,f.jsx)(i.default,{})}},885:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,u=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return u}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);