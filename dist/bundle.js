!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var s={sizes:{width:32,height:32},pen:{width:1,colors:{current:"#000000",second:"#ffffff"}},screens:{},fps:1};function o(e,t,n,s,o,a){const i=o.getContext("2d");let c=Math.abs(n-e),r=Math.abs(s-t),l=e<n?1:-1,d=t<s?1:-1,u=c-r;for(i.fillRect(n,s,a,a),i.fill();e!=n||t!=s;){i.fillRect(e,t,a,a);let n=2*u;n>-r&&(u-=r,e+=l),n<c&&(u+=c,t+=d)}}function a(e,t){const n=e.getContext("2d"),o=t.getContext("2d"),a=s.sizes.width,i=n.getImageData(0,0,a,a);o.putImageData(i,0,0)}function i(e){const t=e.target,n=s.screens.mainCanvas,i=t.getContext("2d"),c=n.getContext("2d"),r=s.pen.colors.current,l=n.offsetWidth,d=s.sizes.width,u=s.pen.width;let m=Math.floor(e.offsetX/l*d),p=Math.floor(e.offsetY/l*d);c.fillStyle=r,c.fillRect(m,p,u,u),i.clearRect(0,0,d,d),t.onmousemove=e=>{const t=Math.floor(e.offsetX/l*d),s=Math.floor(e.offsetY/l*d);o(m,p,t,s,n,u),m=t,p=s},t.onmouseup=()=>{t.onmousemove=e=>{const t=Math.floor(e.offsetX/l*d),n=Math.floor(e.offsetY/l*d);i.clearRect(0,0,d,d),i.fillRect(t,n,u,u)},a(s.screens.mainCanvas,s.currentFrame.children[0])}}function c(e){const t=[];for(let n=0;n<e.length;n+=4){const s=[e[n],e[n+1],e[n+2],e[n+3]];t.push(s)}return t}function r(e,t){return t[0]==e[0]&&t[1]==e[1]&&t[2]==e[2]&&t[3]==e[3]}function l(e,t,n,s){const o=e%n,a=Math.floor(e/n);t.fillStyle=s,t.fillRect(o,a,1,1)}function d(){const e=s.screens.mainCanvas,t=e.getContext("2d"),n=s.pen.colors.current,o=e.offsetWidth,i=s.sizes.width,d=Math.floor(event.offsetX/o*i),u=Math.floor(event.offsetY/o*i),m=[[d,u]];let p=c(t.getImageData(0,0,i,i).data);const f=p[u*i+d];for(;m.length;){let e,s,o=m.pop(),a=o[0],d=o[1],u=d*i+a;for(;d-- >=0&&r(f,p[u]);)u-=i;for(u+=i,d++,s=!1,e=!1;d++<+i-1&&r(f,p[u]);)l(u,t,i,n),p=c(t.getImageData(0,0,i,i).data),a>0&&(r(f,p[u-1])?s||(m.push([a-1,d]),s=!0):s&&(s=!1)),a<i-1&&(r(f,p[u+1])?e||(m.push([a+1,d]),e=!0):e&&(e=!1)),u+4<p.length&&(u+=i)}a(s.screens.mainCanvas,s.currentFrame.children[0])}function u(){const e=event.target,t=s.screens.mainCanvas,n=e.getContext("2d"),o=t.getContext("2d"),i=t.offsetWidth,c=s.sizes.width,r=s.pen.width;let l=Math.floor(event.offsetX/i*c),d=Math.floor(event.offsetY/i*c);o.clearRect(l,d,r,r),e.onmousemove=e=>{const t=Math.floor(e.offsetX/i*c),s=Math.floor(e.offsetY/i*c);o.clearRect(t,s,r,r),n.clearRect(0,0,c,c),n.fillRect(t,s,r,r)},e.onmouseup=()=>{e.onmousemove=e=>{const t=Math.floor(e.offsetX/i*c),s=Math.floor(e.offsetY/i*c);n.clearRect(0,0,c,c),n.fillRect(t,s,r,r)},a(s.screens.mainCanvas,s.currentFrame.children[0])}}function m(){const e=s.screens.mainCanvas,t=e.getContext("2d"),n=e.offsetWidth,o=s.sizes.width,a=Math.floor(event.offsetX/n*o),i=Math.floor(event.offsetY/n*o),r=function(e){let t=parseInt(e[0],10).toString(16),n=parseInt(e[1],10).toString(16),s=parseInt(e[2],10).toString(16),o=parseInt(e[3],10).toString(16);return t=1==t.length?"0"+t:t,n=1==n.length?"0"+n:n,s=1==s.length?"0"+s:s,o=1==o.length?"0"+o:o,"#"+t+n+s}(c(t.getImageData(0,0,o,o).data)[i*o+a]);document.querySelector(".current_color").value=r,s.pen.colors.current=r}function p(){const e=s.screens.mainCanvas,t=e.getContext("2d"),n=s.pen.colors.current,o=e.offsetWidth,i=s.sizes.width,d=Math.floor(event.offsetX/o*i),u=Math.floor(event.offsetY/o*i),m=c(t.getImageData(0,0,i,i).data),p=m[u*i+d];m.forEach((e,s)=>{r(p,e)&&l(s,t,i,n)}),a(s.screens.mainCanvas,s.currentFrame.children[0])}function f(){const e=s.screens.mainCanvas,t=e.getContext("2d"),n=s.pen.colors.current,i=e.offsetWidth,c=s.sizes.width,r=s.pen.width,l=Math.floor(event.offsetX/i*c),d=Math.floor(event.offsetY/i*c);let u=l,m=d;t.fillStyle=n,t.strokeStyle=n,t.lineWidth=r,t.fillRect(l,d,r,r),e.onmousemove=e=>{u=Math.floor(e.offsetX/i*c),m=Math.floor(e.offsetY/i*c),t.clearRect(0,0,c,c),t.beginPath(),t.moveTo(l,d),t.lineTo(u,m),t.stroke()},e.onmouseup=()=>{t.clearRect(0,0,c,c),o(l,d,u,m,e,r),event.target.onmousemove=null,a(s.screens.mainCanvas,s.currentFrame.children[0])},e.onmouseout=()=>{event.target.onmousemove=null}}function h(){s.screens.hoverCanvas.removeEventListener("mousedown",i),s.screens.hoverCanvas.removeEventListener("click",d),s.screens.hoverCanvas.removeEventListener("mousedown",u),s.screens.hoverCanvas.removeEventListener("click",m),s.screens.hoverCanvas.removeEventListener("click",p),s.screens.hoverCanvas.removeEventListener("mousedown",f)}var v={0:{icon:"/piskel/source/components/tools/icons/pen.svg",description:"Pen",utils:()=>{h(),s.screens.hoverCanvas.addEventListener("mousedown",i)}},1:{icon:"/piskel/source/components/tools/icons/eraser.svg",description:"Eraser",utils:()=>{h(),s.screens.hoverCanvas.addEventListener("mousedown",u)}},2:{icon:"/piskel/source/components/tools/icons/bucket.svg",description:"Bucket",utils:()=>{h(),s.screens.hoverCanvas.addEventListener("click",d)}},3:{icon:"/piskel/source/components/tools/icons/paint_roller.svg",description:"Paint same color",utils:()=>{h(),s.screens.hoverCanvas.addEventListener("click",p)}},4:{icon:"/piskel/source/components/tools/icons/stroke.svg",description:"Stroke",utils:()=>{h(),s.screens.mainCanvas.addEventListener("mousedown",f)}},5:{icon:"/piskel/source/components/tools/icons/pipette.svg",description:"Pipette",utils:()=>{h(),s.screens.hoverCanvas.addEventListener("click",m)}},6:{icon:"/piskel/source/components/tools/icons/trash.svg",description:"Trash",utils:()=>{!function(){const e=s.screens.mainCanvas.getContext("2d"),t=s.sizes.width;e.clearRect(0,0,t,t),a(s.screens.mainCanvas,s.currentFrame.children[0])}()}},7:{icon:"/piskel/source/components/tools/icons/pen.svg",description:""}};function g(){s.frames.forEach((e,t)=>{const n=e.children[1].children[0];e.value=t,n.textContent=t+1})}function C(){if(event.target&&event.target.matches("button.frame-delete")){const e=event.target.parentElement.parentElement.value;1!==s.frames.length&&(s.frames[e].remove(),s.frames.splice(e,1),g())}}function E(){const e=event.target.parentElement.parentElement,t=e.value,n=w(t+2),o=s.frames.splice(t+1,s.frames.length-1);a(e.children[0],n.children[0]),e.after(n),s.frames.push(n),s.frames=s.frames.concat(o),g()}function w(e){const t=document.createElement("li");t.value=e-1;const n=document.createElement("canvas");n.classList.add("frames--items-canvas"),n.width=s.sizes.width,n.height=s.sizes.height;const o=document.createElement("div");o.classList.add("frames--items-controls");const i=document.createElement("button");i.classList.add("frame-number"),i.textContent=e;const c=document.createElement("button");c.classList.add("frame-delete");const r=document.createElement("img");c.addEventListener("click",C),c.appendChild(r);const l=document.createElement("button");l.classList.add("frame-drag_drop");const d=document.createElement("img");l.appendChild(d);const u=document.createElement("button");u.classList.add("frame-duplicate");const m=document.createElement("img");return u.appendChild(m),u.addEventListener("click",E),o.appendChild(i),o.appendChild(c),o.appendChild(l),o.appendChild(u),t.appendChild(n),t.appendChild(o),t.onmouseenter=()=>{c.style.opacity="1",l.style.opacity="1",u.style.opacity="1"},t.onmouseleave=()=>{c.style.opacity="0",l.style.opacity="0",u.style.opacity="0"},t.onclick=()=>{s.currentFrame!=t&&(s.currentFrame.classList.remove("current_frame"),t.classList.add("current_frame"),s.currentFrame=t,event.target==t.children[0]&&a(s.currentFrame.children[0],s.screens.mainCanvas))},t}function L(){const e=s.screens.previewCanvas;let t=s.frames,n=t.length,o=s.fps,a=1e3/o,i=0,c=Date.now();requestAnimationFrame((function r(){requestAnimationFrame(r);let l=Date.now(),d=l-c;d>a&&(c=l-d%a,t=s.frames,n=t.length,o=s.fps,a=1e3/o,t[i].children[0]&&(!function(e,t){const n=e.getContext("2d"),o=t.getContext("2d"),a=s.sizes.width,i=n.getImageData(0,0,a,a);o.putImageData(i,0,0)}(t[i].children[0],e),i++),i==n&&(i=0))}))}function y(){const e=event.target,t=e.value;if(s.currentSize!=e){s.currentSize.classList.remove("current"),e.classList.add("current"),s.sizes.width=t,s.sizes.height=t,s.currentSize=e,s.screens.mainCanvas.width=t,s.screens.mainCanvas.height=t,s.screens.hoverCanvas.width=t,s.screens.hoverCanvas.height=t,s.screens.previewCanvas.width=t,s.screens.previewCanvas.height=t;for(let e of s.frames){const n=e.children[0];n.width=t,n.height=t}}}function b(){const e=event.target,t=e.parentElement.parentElement;e.classList.contains("active")?(e.classList.remove("active"),t.style.width="50px"):(e.classList.add("active"),t.style.width="220px")}function k(){const e=document.createElement("div");e.classList.add("tools_palette"),e.appendChild(function(){const e=document.createElement("ul");e.classList.add("pen_size");for(let t=0;t<4;t++){const n=document.createElement("li");n.value=t+1,0==t&&(n.classList.add("active_size"),s.currentPenSize=n),n.addEventListener("click",()=>{s.pen.width=n.value,s.currentPenSize||(n.classList.add("active_size"),s.currentPenSize=n),s.currentPenSize.classList.remove("active_size"),n.classList.add("active_size"),s.currentPenSize=n}),e.appendChild(n)}return e}()),e.appendChild(function(){const e=document.createElement("ul");e.classList.add("tools"),s.tools=[];for(let t in v){const n=document.createElement("li"),o=document.createElement("img");o.src=v[t].icon,n.setAttribute("description",v[t].description),n.addEventListener("click",v[t].utils),"Trash"!==v[t].description&&n.addEventListener("click",()=>{s.currentTool||(n.classList.add("active_tool"),s.currentTool=n),s.currentTool.classList.remove("active_tool"),n.classList.add("active_tool"),s.currentTool=n}),n.onmouseenter=e=>{const s=e.target.getBoundingClientRect().left,o=e.target.getBoundingClientRect().top,a=e.target.getBoundingClientRect().width,i=e.target.getBoundingClientRect().height,c=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div");c.classList.add("toolTip"),r.classList.add("toolTip--arrow"),l.classList.add("toolTip--discription"),l.innerHTML=v[t].description,c.appendChild(r),c.appendChild(l),document.body.appendChild(c);const d=c.getBoundingClientRect().height;c.style.left=s+a+"px",c.style.top=o+(i-d)/2+"px",n.onmouseleave=e=>{c.remove()}},n.appendChild(o),e.appendChild(n),s.tools.push(n)}return e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("palette");const t=document.createElement("input");t.type="color",t.classList.add("current_color"),t.addEventListener("change",()=>{s.pen.colors.current=t.value});const n=document.createElement("input");n.type="color",n.classList.add("second_color"),n.value="#ff0000";const o=document.createElement("span");o.classList.add("change_color_icon"),o.addEventListener("click",()=>{s.pen.colors.current=n.value,s.pen.colors.second=t.value,t.value=s.pen.colors.current,n.value=s.pen.colors.second});const a=document.createElement("img");return a.src="./source/components/palette/arrows.svg",o.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(o),e}());const t=document.createElement("div");t.classList.add("left_side--container"),t.appendChild(e),t.appendChild(function(){const e=document.createElement("div");e.classList.add("frames");const t=document.createElement("ul");t.classList.add("frames--items");const n=w(1);n.classList.add("current_frame"),s.currentFrame=n,s.frames=[],s.frames.push(n),t.appendChild(n);const o=document.createElement("button");return o.classList.add("frames--add_new_frame"),o.textContent="Add new frame",o.addEventListener("click",()=>{const e=w(s.frames.length+1);s.frames.push(e),t.appendChild(e)}),e.appendChild(t),e.appendChild(o),e}());const n=document.createElement("div");n.classList.add("middle--container"),n.appendChild(function(){const e=document.createElement("canvas"),t=document.createElement("canvas"),n=document.createElement("div");return e.id="main_canvas",t.id="hover_canvas",n.classList.add("frame_of_canvas"),e.width=s.sizes.width,e.height=s.sizes.height,t.width=s.sizes.width,t.height=s.sizes.height,s.screens.mainCanvas=e,s.screens.hoverCanvas=t,n.appendChild(e),n.appendChild(t),n}());const o=document.createElement("div");o.classList.add("right_side--container"),o.appendChild(function(){const e=document.createElement("canvas");return e.id="preview_canvas",e.width=s.sizes.width,e.height=s.sizes.height,e.addEventListener("click",()=>{e.requestFullscreen()}),s.screens.previewCanvas=e,L(),e}()),o.appendChild(function(){const e=document.createElement("div");e.classList.add("frame_fps");const t=document.createElement("span");t.classList.add("counter_fps"),t.textContent=s.fps+" FPS";const n=document.createElement("input");return n.type="range",n.min="1",n.max="24",n.value=s.fps,n.oninput=()=>{t.textContent=n.value+" FPS",s.fps=n.value},e.appendChild(t),e.appendChild(n),e}());const a=document.createElement("div");a.classList.add("settings--container"),a.appendChild(function(){const e=document.createElement("div");e.classList.add("settings");const t=document.createElement("button");t.classList.add("settings--icon"),t.addEventListener("click",b);const n=document.createElement("div");n.classList.add("settings--canvas_size");const o=document.createElement("div");o.classList.add("settings--canvas_size-title"),o.textContent="Canvas sizes";const a=document.createElement("ul");a.classList.add("settings--canvas_size-list_sizes");const i=document.createElement("li");i.value=32,i.textContent="32x32",i.addEventListener("click",y),i.classList.add("current"),s.currentSize=i;const c=document.createElement("li");c.value=64,c.textContent="64x64",c.addEventListener("click",y);const r=document.createElement("li");return r.value=128,r.textContent="128x128",r.addEventListener("click",y),a.appendChild(i),a.appendChild(c),a.appendChild(r),n.appendChild(o),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}());const i=document.createElement("main");return i.appendChild(t),i.appendChild(n),i.appendChild(o),i.appendChild(a),i}!function(){const e=document.createDocumentFragment(),t=function(){const e=document.createElement("header");return e.innerHTML='<div class="label">\n                            Piskel\n                        </div>\n                        <div class="file_name">\n                            New piskel*\n                        </div>\n                        <div class="navigation_buttons">\n                            <button>Sing up</button>\n                            <button>Sing in</button>\n                        </div>',e}(),n=function(){const e=document.createElement("div");return e.classList.add("main_present"),e.innerHTML='<div class="preview">\n        <div class="information">\n            <div class="information--title">Piskel is a free online editor for animated sprites & pixel art</div>\n            <div class="information-description">Try an example or simply create a new sprite.</div>\n            <div class="information--buttons">\n                <button>Sing in</button>\n                <button class="initProject">Create Sprite</button>\n            </div>\n        </div>\n        <div class="screenshot">\n            <img src="./source/layouts/mainPresent/animations/srceenshot.png" alt="screenshot">\n            <img src="./source/layouts/mainPresent/animations/rotor.gif" alt="rotor" class="rotor">\n        </div>\n    </div>\n</div>\n\n<div class="examples">\n    <div class="examples--title">Example sprites</div>\n    <ul class="examples--list">\n        <li>\n            <a href="https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgICAyJ2kCQw/edit">\n                <img src="./source/layouts/mainPresent/animations/megaman.gif" alt="megaman">\n            </a>\n        </li>\n        <li>\n            <a href="https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgICA_eOjCgw/edit">\n                <img src="./source/layouts/mainPresent/animations/mix.gif" alt="mix">\n            </a>\n        </li>\n        <li>\n            <a href="https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgICfx5ygCQw/edit">\n                <img src="./source/layouts/mainPresent/animations/llama.gif" alt="llama">\n            </a>\n        </li>\n        <li>\n            <a href="https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgIDfmPWVCww/edit">\n                <img src="./source/layouts/mainPresent/animations/snakes.gif" alt="snakes">\n            </a>\n        </li>\n        <li>\n            <a href="https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgICwuvn-Cgw/edit">\n                <img src="./source/layouts/mainPresent/animations/stormtrooper.gif" alt="stormtrooper">\n            </a>\n        </li>\n        <li>\n            <a href="https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgICf1u3kCAw/edit">\n                <img src="./source/layouts/mainPresent/animations/panda.gif" alt="panda">\n            </a>\n        </li>\n    </ul>\n</div>',e}(),o=k();o.style.display="none";const a=function(){const e=document.createElement("footer");return e.innerHTML='<div class="footer--description">\n                                Created by <a href="https://github.com/Lansyfonseka">\n                                    <img src="/piskel/source/layouts/mainPresent/animations/github.svg" alt="github">\n                                    Lansyfonseka\n                                </a>\n                            </div>\n                            <div class="footer--icon">Piskel</div>',e}();e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(a),document.body.appendChild(e),function(){const e=document.querySelector(".initProject"),t=document.querySelector(".label"),n=document.querySelector(".main_present"),s=document.querySelector("main"),o=document.querySelector("footer");e.addEventListener("click",()=>{n.style.display="none",o.style.display="none",s.style.display="grid"}),t.addEventListener("click",()=>{n.style.display="block",o.style.display="block",s.style.display="none"})}(),function(){const e=s.screens.hoverCanvas,t=e.getContext("2d");e.onmouseenter=n=>{let o=e.offsetWidth;const a=s.sizes.width,i=s.pen.width;t.fillStyle="#538a57",e.onmousemove=e=>{const n=Math.floor(e.offsetX/o*a),s=Math.floor(e.offsetY/o*a);t.clearRect(0,0,a,a),t.fillRect(n,s,i,i)},e.onmouseout=e=>{t.clearRect(0,0,a,a)}}}()}()},function(e,t){}]);