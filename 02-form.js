/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const o=document.querySelector(".feedback-form");o.addEventListener("input",s=>{s.preventDefault(),console.log("Input event fired",s);let r=o.elements.email.value,l=o.elements.message.value.toString().trim();console.log("email:",r),console.log("message:",l),localStorage.setItem("feedback-form-state",JSON.stringify({email:r,message:l}))});let n=localStorage.getItem("feedback-form-state")||null;n=JSON.parse(n);n!==null&&(o.elements.email.value=n.email,o.elements.message.value=n.message);o.addEventListener("submit",s=>{s.preventDefault();let r=o.elements.email.value,l=o.elements.message.value.toString().trim();console.log({email:r,message:l}),localStorage.removeItem("feedback-form-state"),s.currentTarget.reset()});
//# sourceMappingURL=02-form.js.map
