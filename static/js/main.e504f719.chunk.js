(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(8),i=n.n(a),s=n(9),c=n(10),r=n(12),l=n(11),o=n(2),j=n.n(o),u=(n(17),n(1)),b=n(5),h=n(6),m=(n(18),n(0)),O=function(t){var e=t.listimage,n=t.itemWidth,a=t.frameSize,i=t.step,s=t.infinite,c=t.animationDuration,r=Object(o.useState)(0),l=Object(h.a)(r,2),j=l[0],O=l[1],p=Object(o.useState)([]),d=Object(h.a)(p,2),g=d[0],f=d[1],x=Object(o.useState)({width:a*n,translate:-2*n,transition:"all ".concat(c/1e3,"s ease")}),v=Object(h.a)(x,2),S=v[0],y=v[1];Object(o.useEffect)((function(){f(s?[].concat(Object(b.a)(e.slice(e.length-i,e.length)),Object(b.a)(e),Object(b.a)(e.slice(0,i))):e)}),[s]),Object(o.useEffect)((function(){y(s?Object(u.a)(Object(u.a)({},S),{},{width:a*n,translate:n*-i,transition:"all ".concat(c/1e3,"s ease")}):Object(u.a)(Object(u.a)({},S),{},{width:a*n,translate:0,transition:"all ".concat(c/1e3,"s ease")})),O(0)}),[n,a,i,s,c]),Object(o.useEffect)((function(){S.translate>0&&s&&setTimeout((function(){y(Object(u.a)(Object(u.a)({},S),{},{translate:(e.length-1)*-n,transition:""}))}),0),S.translate<=-e.length*n&&s&&setTimeout((function(){y(Object(u.a)(Object(u.a)({},S),{},{translate:-1*n,transition:""}))}),0),(0!==S.translate&&""===S.transition||S.translate!==-e.length*n&&""===S.transition)&&setTimeout((function(){y(Object(u.a)(Object(u.a)({},S),{},{transition:"all ".concat(c/1e3,"s ease")}))}),c/10)}),[S,s,c]);var F=function(t){if(s){var e=t?S.translate+i*n:S.translate-i*n;y(Object(u.a)(Object(u.a)({},S),{},{translate:e}))}else s||(j&&t&&(y(Object(u.a)(Object(u.a)({},S),{},{translate:S.translate+i*n})),O(j-1)),j<Math.floor(g.length/i)&&!t&&(y(Object(u.a)(Object(u.a)({},S),{},{translate:S.translate-i*n})),O(j+1)))};return Object(m.jsxs)("div",{className:"Carousel",style:{width:"".concat(S.width,"px")},children:[Object(m.jsx)("ul",{className:"Carousel__list",style:{translate:"".concat(S.translate,"px"),transition:"".concat(S.transition)},children:g.map((function(t,e){return Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:t,alt:"".concat(e),style:{width:"".concat(n,"px")}})},"".concat(e+1))}))}),Object(m.jsx)("button",{type:"button",onClick:function(){F(!0)},children:"Prev"}),Object(m.jsx)("button",{type:"button",onClick:function(){F(!1)},children:"Next"})]})},p=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,FrameSize:3,step:3,infinite:!0,animationDuration:300},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,a=e.itemWidth,i=e.FrameSize,s=e.step,c=e.infinite,r=e.animationDuration;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{children:["Carousel with"," ",n.length," ","images"]}),Object(m.jsx)(O,{listimage:n,itemWidth:a,frameSize:i,step:s,infinite:c,animationDuration:r}),Object(m.jsxs)("div",{className:"Managment",children:[Object(m.jsxs)("label",{htmlFor:"ItemWidth",children:[Object(m.jsx)("span",{children:"width elements"}),Object(m.jsx)("input",{type:"text",name:"ItemWidth",id:"ItemWidth",value:this.state.itemWidth,onChange:function(e){return t.setState({itemWidth:+e.target.value})}})]}),Object(m.jsxs)("label",{htmlFor:"FrameSize",children:[Object(m.jsx)("span",{children:"Frame Size"}),Object(m.jsx)("input",{type:"text",name:"FrameSize",id:"FrameSize",value:this.state.FrameSize,onChange:function(e){return t.setState({FrameSize:+e.target.value})}})]}),Object(m.jsxs)("label",{htmlFor:"step",children:[Object(m.jsx)("span",{children:"Step"}),Object(m.jsx)("input",{type:"text",name:"step",id:"step",value:this.state.step,onChange:function(e){return t.setState({step:+e.target.value})}})]}),Object(m.jsxs)("label",{htmlFor:"infinite",children:[Object(m.jsx)("span",{children:"infinite"}),Object(m.jsx)("input",{type:"checkbox",name:"infinite",id:"infinite",checked:this.state.infinite,onChange:function(){return t.setState({infinite:!c})}})]}),Object(m.jsxs)("label",{htmlFor:"animationDuration",children:[Object(m.jsx)("span",{children:"Animation Duration"}),Object(m.jsx)("input",{type:"text",name:"animationDuration",id:"animationDuration",value:this.state.animationDuration,onChange:function(e){return t.setState({animationDuration:+e.target.value})}})]})]})]})}}]),n}(j.a.Component),d=p;i.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e504f719.chunk.js.map