const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled");const d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3);e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","true")}))}));
//# sourceMappingURL=01-color-switcher.d30bc89b.js.map