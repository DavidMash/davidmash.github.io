(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(8),s=a.n(n),i=(a(23),a(3)),r=a(4),l=a(6),o=a(5),h=a(15),j=a.n(h),d=(a(24),a(2)),u=a(16),b=a.n(u),m=a(0);var O=function(e){var t=Object(c.useState)(null),a=Object(d.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(null),r=Object(d.a)(i,2),l=r[0],o=r[1],h=Object(c.useState)(null),j=Object(d.a)(h,2),u=j[0],O=j[1],f=Object(c.useState)(null),p=Object(d.a)(f,2),x=p[0],v=p[1],g=Object(c.useState)(!1),y=Object(d.a)(g,2),w=y[0],N=y[1],M=Object(c.useRef)(null),k=Object(c.useRef)(null),C=Object(c.useRef)(null),S=Object(c.useRef)(null),D=Object(c.useRef)(null),R=Object(c.useRef)(null),I=Object(c.useState)(!1),A=Object(d.a)(I,2),E=A[0],F=A[1],L=Object(c.useState)(!1),H=Object(d.a)(L,2),T=H[0],W=H[1],q=Object(c.useState)(!1),B=Object(d.a)(q,2),z=B[0],P=B[1],V=Object(c.useState)(!1),_=Object(d.a)(V,2),U=_[0],G=_[1],J=Object(c.useState)(!0),$=Object(d.a)(J,2),Y=($[0],$[1]);function K(){if(k.current&&k.current.files[0]){var e=k.current.files[0].name;if(!/(\.mp3|\.wav|\.mp4)$/i.exec(e))return void alert("Invalid file type for audio visualizer. Try again with an MP3, MP4, or WAV file.")}n&&(n.pause(),n.currentTime=0),o(null),v(null),O(null),null!=n&&(n.src="!",n.remove()),s(new Audio)}function Q(){if(n&&R.current){var e=R.current.value;n.volume=e/100}}function X(e){n&&u?(u.resume(),!0===e||n.paused?(n.play(),F(!0)):(n.pause(),F(!1))):K()}return Object(c.useEffect)((function(){if(l&&x&&u){var e=function(e,t,a){var c=O*a,n=e.canvas,s=t.canvas;t.clearRect(0,0,t.canvas.width,t.canvas.height),t.font=c+"px monospace";for(var i,r,l,o,h,j,d,u,b,m,f,p,x=e.getImageData(0,0,e.canvas.width,e.canvas.height).data,v=c,g=Math.floor(c/(s.width/n.width)),y=Math.floor(c/(s.height/n.height)),w=0;w<s.height;w+=v){p=Math.floor(w/(s.height/n.height));for(var N=w/v%2===0?0:c/2;N<s.width;N+=v)f=Math.floor(N/(s.width/n.width)),j=4*(p*n.width+f),d=4*(p*n.width+f-g/2),u=4*(p*n.width+f+g/2),b=4*((p-y/2)*n.width+f),m=4*((p+y/2)*n.width+f),(h=((x[j+3]?x[j+3]:0)+(x[d+3]?x[d+3]:0)+(x[u+3]?x[u+3]:0)+(x[b+3]?x[b+3]:0)+(x[m+3]?x[m+3]:0))/5)<=0||(r=((x[j]?x[j]:0)+(x[d]?x[d]:0)+(x[u]?x[u]:0)+(x[b]?x[b]:0)+(x[m]?x[m]:0))/5,l=((x[j+1]?x[j+1]:0)+(x[d+1]?x[d+1]:0)+(x[u+1]?x[u+1]:0)+(x[b+1]?x[b+1]:0)+(x[m+1]?x[m+1]:0))/5,o=((x[j+2]?x[j+2]:0)+(x[d+2]?x[d+2]:0)+(x[u+2]?x[u+2]:0)+(x[b+2]?x[b+2]:0)+(x[m+2]?x[m+2]:0))/5,i=I[Math.floor(I.length*(Math.max(h,1)/256))],t.fillStyle="rgba("+r+","+l+","+o+","+h/10+")",t.fillText(i,N,w+c/2))}},t=function(e,t,a){t=Math.trunc(t),a=Math.min(Math.trunc(a),e.length);for(var c=0,n=t;n<a;n++)c+=e[n];return c/(a-t-1)},a=function(e,t,a){t=Math.trunc(t),a=Math.min(Math.trunc(a),e.length);for(var c=0,n=t;n<a;n++)c=Math.max(c,e[n]);return c},c=function(e,t,a,c){h[e]>p&&(p=h[e]);var n=8*h[e]*Math.pow(h[e]/p,1.5*(1-e/h.length))*((e+h.length/2)/h.length),s=n,i=(Math.random()-.5)*n/32,r=(Math.random()-.5)*n/32,l=(Math.random()-.5)*n/32;d.fillRect(a+i,c-s/4+r,t+l,s/2)},s=function(e){for(var t=0,a=0,c=0;c<e.length/2;c++)t+=e[c],e[c]>a&&(a=e[c]);var n=t/(e.length/2);return(a>10*n||n>p/2)&&(A=(A+a/(20*n)+n/p)%255),"hsl(".concat(r(n,A,255,A/4,360),", 100%, 50%,")+.01+")"},i=function(e){for(var t=0,a=0,c=e.length/2;c<e.length;c++)t+=e[c],e[c]>a&&(a=e[c]);var n=t/(e.length/2);return(a>200*n||n>p/2)&&(E=(E+a/(200*n)+n/p)%255),"hsl(".concat(r(n,E,255,n/4,360),", 100%, 50%,")+.01+")"},r=function(e,t,a,c,n){return c+(e-t)/(a-t)*(n-c)};x.connect(l),l.connect(u.destination),X(!0);var o=l.frequencyBinCount,h=new Uint8Array(o),j=C.current.getContext("2d"),d=S.current.getContext("2d",{willReadFrequently:!0}),b=document.createElement("CANVAS"),m=b.getContext("2d");S.current.style.width="100%",S.current.style.height="100%",C.current.style.width="100%",C.current.style.height="100%",S.current.style.transition="all 2s",S.current.style.opacity="0",S.current.width=M.current.offsetWidth/4,S.current.height=M.current.offsetHeight/4,b.width=M.current.offsetWidth/4,b.height=M.current.offsetHeight/4,C.current.width=M.current.offsetWidth,C.current.height=M.current.offsetHeight;var O=M.current.offsetHeight/40;M.current.addEventListener("resize",(function(){S.current.width=M.current.offsetWidth/4,S.current.height=M.current.offsetHeight/4,b.width=M.current.offsetWidth/4,b.height=M.current.offsetHeight/4,C.current.width=M.current.offsetWidth,C.current.height=M.current.offsetHeight,O=M.current.offsetHeight/40}));var f,p=1,v=0,g=!1,y=!0,w=!1,N=0,k=0,D=1,R=1,I=[" ","'","^","*",";","D","a","v","i","d","M","a","s","h","$","%","#","@","?","0","1","!"],A=0,E=0;!function r(){if("!"!==n.src.charAt(n.src.length-1)){requestAnimationFrame(r),l.getByteFrequencyData(h);var o=0,u=0,b=0,O=0,x=0,M=0;if(h&&h.length>0){var C=d.createLinearGradient(0,0,d.canvas.width,0),I=i(h);C.addColorStop(0,I),C.addColorStop(.5,s(h)),C.addColorStop(1,I),d.fillStyle=C;for(var A=d.canvas.height/2,E=0,F=h.length-1;F>=0&&!(h[F]-20>0);F--)E++;for(var L=d.canvas.width/h.length/2,H=0,T=d.canvas.width,W=0;W<h.length-E;W++)c(W,L,H,A),c(W,L,T,A),H+=d.canvas.width/(h.length-E)/2,T-=d.canvas.width/(h.length-E)/2;o=t(h,0,h.length),u=t(h,12*h.length/16,h.length),b=a(h,12*h.length/16,h.length),O=t(h,h.length/16,3*h.length/16),x=t(h,0,h.length/16),M=a(h,0,h.length/16)}if(g=g&&!(M>1.01*p)&&O+u>2*o||O+u>3.2*o,y=!w||y&&!(M<.8*p)&&O+u<3*o||O+u<2*o,w=w&&b+O>u+x/2||2*b+O>u+x||g&&2*b+O>u/2+x,g?("0.4"!==S.current.style.opacity&&(S.current.style.opacity="0.4"),v=(v+1)%360,N=x/16*(O<5*u?-1:1),d.save(),d.translate(d.canvas.width/2,d.canvas.height/2),d.rotate(Math.PI/180*v*N),d.translate(-d.canvas.width/2,-d.canvas.height/2),d.globalAlpha=.02,d.drawImage(d.canvas,0,0),d.restore()):y&&(v=0,1.8*b<=o?"0"!==S.current.style.opacity&&(S.current.style.opacity="0"):"0.4"!==S.current.style.opacity&&(S.current.style.opacity="0.4"),f=d.getImageData(0,0,d.canvas.width,d.canvas.height),N=o<10?o/2:(N<0&&M>=p||M>=p&&.5*x>O+u?-1:1)*o/8,d.clearRect(0,0,d.canvas.width,d.canvas.height),d.putImageData(f,0,-N,0,0,d.canvas.width,d.canvas.height/2),d.putImageData(f,0,N,0,d.canvas.height/2,d.canvas.width,d.canvas.height/2)),w){k=(!g&&k<0&&M>O+b||M>2.8*(O+u)?-1:1)*(b-u*(g?4:1))/(20*o);var q=d.canvas.width*k,B=d.canvas.height*k;f=d.getImageData(0,0,d.canvas.width,d.canvas.height),m.clearRect(0,0,m.canvas.width,m.canvas.height),m.drawImage(d.canvas,0,0),d.clearRect(0,0,d.canvas.width,d.canvas.height),d.drawImage(m.canvas,0-q/2,0-B/2,d.canvas.width+q,d.canvas.height+B)}else k=0;o>40&&(R=R>=1.5&&u>2.5*o||u>3.8*o?3:R>=1.2&&O>2*o||O>3.2*o?2:1),o>40&&D!==R&&(D+=(R-D)/16,Math.abs(R-D)<.01&&(D=R)),e(d,j,D)}}()}}),[l,x,u]),Object(c.useEffect)((function(){u&&n&&(o(u.createAnalyser()),v(u.createMediaElementSource(n)))}),[u,n]),Object(c.useEffect)((function(){if(n){n.addEventListener("timeupdate",(function(){if(n&&D.current){var e=n.currentTime/n.duration*100;D.current.value=e}})),n.src=k.current&&k.current.files[0]?URL.createObjectURL(k.current.files[0]):"/music/song.mp3",n.addEventListener("loadeddata",(function(){Q(),N(!0)})),n.addEventListener("ended",(function(){F(!1)})),O(new(window.AudioContext||window.webkitAudioContext))}}),[n]),Object(m.jsx)(b.a,{onChange:Y,children:Object(m.jsxs)("div",{style:e.style,className:"canvas-area no-select",ref:M,children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"main-header-container",children:Object(m.jsx)("h2",{className:"main-header",style:E?{opacity:0,transition:"2s opacity"}:{opacity:.8,transition:"3s opacity"},children:"David Mash"})}),Object(m.jsx)("div",{className:"control-panel",onClick:X,children:E?Object(m.jsx)("img",{alt:"",src:"/images/pause-button.png",className:"pause-button"}):Object(m.jsx)("img",{alt:"",src:"/images/play-button.png",className:"play-button"})}),Object(m.jsx)("br",{}),Object(m.jsx)("canvas",{ref:C,id:"frequency",onClick:X}),Object(m.jsx)("canvas",{ref:S,id:"background"}),Object(m.jsx)("img",{alt:"",src:"/images/main_images/"+e.imageNumber+".jpeg",style:{objectFit:"cover",minHeight:"100%",height:"100%",minWidth:"100%",width:"auto",position:"absolute",zIndex:"-3",top:"0px",left:"0px"}}),Object(m.jsx)("div",{className:"bottom-controls-1",onMouseOver:function(){T||W(!0)},onMouseLeave:function(){T&&W(!1)},style:T?{opacity:.8,transition:"opacity 300ms"}:E?{opacity:0,transition:"opacity 300ms"}:{opacity:.6,transition:"opacity 300ms"},children:Object(m.jsx)("input",{className:"file-input song-upload-button",type:"file",ref:k,onChange:K})}),Object(m.jsxs)("div",{className:"bottom-controls-2",onMouseOver:function(){z||P(!0)},onMouseLeave:function(){z&&P(!1)},style:z?{opacity:.8,transition:"opacity 300ms"}:E?{opacity:0,transition:"opacity 300ms"}:{opacity:.6,transition:"opacity 300ms"},children:[Object(m.jsx)("img",{className:"slider-icon-left",src:"/images/volume-down.png",alt:""}),Object(m.jsx)("input",{ref:R,className:"volume-bar",type:"range",min:"0",max:"100",id:"volume-control",defaultValue:100,onInput:function(){Q()}}),Object(m.jsx)("img",{className:"slider-icon-right",src:"/images/volume-up.png",alt:""})]}),w?Object(m.jsx)("div",{className:"bottom-controls-3",onMouseOver:function(){U||G(!0)},onMouseLeave:function(){U&&G(!1)},style:U?{opacity:.8,transition:"opacity 300ms"}:E?{opacity:0,transition:"opacity 300ms"}:{opacity:.6,transition:"opacity 300ms"},children:Object(m.jsx)("input",{ref:D,className:"scrub-bar",type:"range",min:"0",max:"100",defaultValue:0,id:"scrub-bar",disabled:!w,onInput:function(){!function(){if(n&&D.current){var e=D.current.value/100*n.duration;n.currentTime=e}else K()}()}})}):Object(m.jsx)(m.Fragment,{})]})})},f=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={imageNumber:Math.floor(2*Math.random())},e}return Object(r.a)(a,[{key:"render",value:function(){return this.props.data?Object(m.jsxs)("header",{id:"home",children:[Object(m.jsx)("div",{className:"main-visual-container",children:Object(m.jsx)(O,{style:{width:"100%",position:"absolute",zIndex:"0",top:"0px",left:"0px"},imageNumber:this.state.imageNumber})}),Object(m.jsx)("nav",{id:"nav-wrap",children:Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]}):null}}]),a}(c.Component),p=a(7),x=a(10),v=a(32),g=a(9),y=function(e){var t=e.children,a=Object(x.a)(e,["children"]),n=Object(c.useState)(!1),s=Object(d.a)(n,2),i=s[0],r=s[1],l=Object(c.useRef)(null),o={transition:"opacity ".concat(500,"ms ease-in-out"),opacity:0},h={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};return Object(m.jsx)(g.a,{onEnter:function(){return r(!0)},children:Object(m.jsx)("div",{children:Object(m.jsx)(v.a,Object(p.a)(Object(p.a)({nodeRef:l,in:i,timeout:500,classNames:"fade"},a),{},{children:function(e){return Object(m.jsx)("div",{ref:l,style:Object(p.a)(Object(p.a)({},o),h[e]),children:t})}}))})})},w=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(y,{bottom:!0,children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsx)("ul",{className:"copyright",children:Object(m.jsx)("li",{children:"David Mash - 2023"})})]})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(c.Component),N=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,a=this.props.data.bio,c=this.props.data.linkedin,n=this.props.data.email,s=this.props.data.resumedownload;return Object(m.jsx)("section",{id:"about",children:Object(m.jsx)(y,{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:t,alt:"David Mash"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:a}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:n}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:"\ud83d\udd17 LinkedIn"})]})]}),Object(m.jsx)("div",{className:"columns download",children:Object(m.jsx)("p",{children:Object(m.jsxs)("a",{href:s,className:"button",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),a}(c.Component),M=function(e){var t=e.children,a=e.direction,n=void 0===a?"left":a,s=Object(x.a)(e,["children","direction"]),i=Object(c.useState)(!1),r=Object(d.a)(i,2),l=r[0],o=r[1],h=Object(c.useRef)(null),j={transition:"opacity ".concat(500,"ms ease-in-out"),opacity:0},u={entering:{opacity:1,position:"relative",left:0,transition:"left 1000ms"},entered:{opacity:1,position:"relative",left:0,transition:"left 1000ms"},exiting:{opacity:0,position:"absolute",left:"-100%"},exited:{opacity:0,position:"absolute",left:"-100%"}};return Object(m.jsx)(g.a,{onEnter:function(){return o(!0)},children:Object(m.jsx)("div",{children:Object(m.jsx)(v.a,Object(p.a)(Object(p.a)({nodeRef:h,in:l,timeout:500,classNames:"slide-".concat(n)},s),{},{children:function(e){return Object(m.jsx)("div",{ref:h,style:Object(p.a)(Object(p.a)({},j),u[e]),children:t})}}))})})},k=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var t=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)})),n=this.props.data.skills.map((function(t){var a=e.getRandomColor(),c="bar-expand "+t.name.toLowerCase(),n=t.level;return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:n,backgroundColor:a},className:c}),Object(m.jsx)("em",{children:t.name})]},t.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsx)(M,{children:Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:a})})})]})}),Object(m.jsx)(M,{children:Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(m.jsx)(M,{children:Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:t}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:n})})]})]})})]})}}]),a}(c.Component),C=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)(y,{children:Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:e})})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(M,{children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("form",{id:"contactForm",name:"contactForm",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",children:"Submit"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(m.jsx)("div",{id:"message-warning",children:" An error has occurred. Consider emailing davidmash134@gmail.com from your regular email service."}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]})]})})})]})}}]),a}(c.Component),S=0,D=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(m.jsx)("button",{className:"columns portfolio-item",children:Object(m.jsx)("div",{className:"item-wrap",children:Object(m.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[Object(m.jsx)("img",{className:"project-link-image",alt:e.title,src:t}),Object(m.jsx)("h5",{style:{textAlign:"center"},children:e.title}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.description})]})})},S++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)(y,{children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Here are some things that I have worked on."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),a}(c.Component),R=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={resumeData:{}},c}return Object(r.a)(a,[{key:"getResumeData",value:function(){j.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(f,{data:this.state.resumeData.main}),Object(m.jsx)(N,{data:this.state.resumeData.main}),Object(m.jsx)(k,{data:this.state.resumeData.resume}),Object(m.jsx)(D,{data:this.state.resumeData.portfolio}),Object(m.jsx)(C,{data:this.state.resumeData.main}),Object(m.jsx)(w,{data:this.state.resumeData.main})]})}}]),a}(c.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};s.a.render(Object(m.jsx)(R,{}),document.getElementById("root")),I()}},[[30,1,2]]]);
//# sourceMappingURL=main.b9c5b1ef.chunk.js.map