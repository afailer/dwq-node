webpackJsonp([0],{FBrj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Gu7T"),n=a.n(i),o=this;function s(){}function r(t){var e=this;this.canvas=t,this.pen=t.getContext("2d"),this.main_loop=function(){e.pen.clearRect(0,0,9999,9999);for(var t=0;t<s.prototype.elements.length;t++)s.prototype.elements[t].living(),s.prototype.elements[t].draw(e.pen);requestAnimationFrame(e.main_loop)},this.main_loop(),this.currentX=0,this.currentY=0,this.onDrag=function(t,a,i){if("down"==i)e.currentX=0,e.currentY=0;else{var n=t-e.currentX,o=a-e.currentY,s=!1;r.prototype.translateX+n<0?(r.prototype.translateX+=n,e.currentX=t,s=!0):n=0,r.prototype.translateY+o<0?(r.prototype.translateY+=o,e.currentY=a,s=!0):o=0,s&&e.pen.translate(n,o)}},this.backToStart=function(){alert("backToStart"),e.pen.translate(-r.prototype.translateX,-r.prototype.translateY)}}s.prototype={elements:[],saveLines:function(t){var e;(e=s.prototype.elements).splice.apply(e,[0,0].concat(n()(t)))},saveElement:function(t){s.prototype.elements.push(t)},getElement:function(t){for(var e=0;e<o.elements.length;e++)if(s.prototype.elements.data.id==t.id)return e;return-1}},r.prototype={translateX:0,translateY:0};var h={prototype:{defaultBorder:.1,defaultBorderColor:"#ccc",RectBgColor:"#f0f",RectWidth:50,RectHeight:30,CircleBgColor:"#ff0000",CircleRadius:20,CircleHoverBgColor:"#00ff00",CircleSelectColor:"#0000ff",lineWidth:2,lineSelectWidth:4,LineColor:"#333",lineSelectColor:"#0fff00",lineHoverColor:"#0f00f0",lineLabelBg:"#FFFFFF",lineLabelWidth:60,lineLabelHeight:10,hoverElementId:0,SelectElementId:0}},d=h;function l(){}l.prototype={activeEle:"",startDragEvent:{onDrag:!1},startTime:"",clientList:{},listen:function(t,e){l.prototype.clientList[t]||(l.prototype.clientList[t]=[]),l.prototype.clientList[t].push(e)},trigger:function(){var t=Array.prototype.shift.call(arguments),e=l.prototype.clientList[t];if(!e||0===e.length)return!1;for(var a=0;a<e.length;a++)e[a].apply(this,arguments)},handleClick:function(t){for(var e=0;e<s.prototype.elements.length;e++)s.prototype.elements[e].caculate(t)&&alert("ok")},handleMouseDown:function(t){for(var e=0;e<s.prototype.elements.length;e++)s.prototype.elements[e].caculate(t)&&(l.prototype.startTime=(new Date).getTime(),l.prototype.activeEle=s.prototype.elements[e],l.prototype.activeEle.data.isActive=!0,d.prototype.SelectElementId=s.prototype.elements[e].data.id);""==l.prototype.activeEle&&(l.prototype.trigger("drag",0,0,"down"),l.prototype.startDragEvent.onDrag=!0,l.prototype.startDragEvent.offsetX=t.offsetX,l.prototype.startDragEvent.offsetY=t.offsetY)},handleMouseUp:function(){""!=l.prototype.activeEle&&(new Date).getTime()-this.startTime<300&&l.prototype.activeEle.onClick(),""!=l.prototype.activeEle&&(l.prototype.activeEle.data.isActive=!1),l.prototype.startDragEvent.onDrag=!1,this.activeEle=""},handleMouseMove:function(t){if(console.log(this.activeEle),""==this.activeEle)if(l.prototype.startDragEvent.onDrag)l.prototype.onDrag(t);else for(var e=0;e<s.prototype.elements.length;e++)s.prototype.elements[e].caculate(t)?d.prototype.hoverElementId=s.prototype.elements[e].data.id:d.prototype.hoverElementId=0;else this.activeEle.update(t)},onDrag:function(t){var e=t.offsetX-l.prototype.startDragEvent.offsetX,a=t.offsetY-l.prototype.startDragEvent.offsetY;l.prototype.trigger("drag",e,a)}};var p=a("KmDb"),c=a.n(p);function f(){}function y(t){this.old_x=t.x,this.old_y=t.y,this.isActive=!1,this.data=t}function u(t){this.data=t}function g(t){this.data=t,void 0==this.data.beginPoint.linkNum&&void 0==this.data.endPoint.linkNum&&(this.data.beginPoint.linkNum=this.data.beginPoint.id,this.data.endPoint.linkNum=this.data.beginPoint.id),void 0==this.data.beginPoint.linkNum&&void 0!=this.data.endPoint.linkNum&&(this.data.beginPoint.linkNum=this.data.endPoint.linkNum),void 0!=this.data.beginPoint.linkNum&&void 0==this.data.endPoint.linkNum&&(this.data.endPoint.linkNum=this.data.beginPoint.linkNum)}function P(t){this.data=t}f.prototype={changeTragetElement:function(t){for(var e=0;e<s.prototype.elements.length;e++)if(s.prototype.elements[e].data.id!=t.data.id&&s.prototype.elements[e].data.x){var a=Math.abs(t.data.x-s.prototype.elements[e].data.x),i=Math.abs(t.data.y-s.prototype.elements[e].data.y),n=c()(a,i),o=(t.data.x-s.prototype.elements[e].data.x)/n,r=(t.data.y-s.prototype.elements[e].data.y)/n;n<50&&(s.prototype.elements[e].data.x=s.prototype.elements[e].data.x-(50-n)*o*.1,s.prototype.elements[e].data.y=s.prototype.elements[e].data.y-(50-n)*r*.1)}},livingCycle:function(){for(var t="",e=0;e<s.prototype.elements.length;e++)s.prototype.elements[e].data.isActive&&(t=s.prototype.elements[e]);if(""!=t)for(var a=0;a<s.prototype.elements.length;a++)s.prototype.elements[a].data.linkNum==t.data.linkNum&&s.prototype.elements[a].data.id!=t.data.id&&s.prototype.elements[a].data;var i=Math.abs(this.data.beginPoint.x-this.data.endPoint.x),n=Math.abs(this.data.beginPoint.y-this.data.endPoint.y),o=c()(i,n),r=(this.data.beginPoint.x-this.data.endPoint.x)/o,h=this.data.beginPoint.y-this.data.endPoint.y;o>300&&(this.data.endPoint.x=this.data.endPoint.x+(o-300)*r*.01,this.data.endPoint.y=this.data.endPoint.y+(o-300)*h*.01)}},y.prototype={caculate:function(t){var e=t.offsetX-r.prototype.translateX-this.data.x,a=t.offsetY-r.prototype.translateY-this.data.y;if(Math.sqrt(e*e+a*a)<this.data.radius)return!0},draw:function(t){t.beginPath(),t.arc(this.data.x,this.data.y,this.data.radius,0,2*Math.PI,!1),t.fillStyle="#ccc",t.strokeStyle="#ff0000",t.fill(),t.stroke(),t.closePath()},update:function(t){this.data.x=t.offsetX-r.prototype.translateX,this.data.y=t.offsetY-r.prototype.translateY,this.data.x-this.data.radius<0&&(this.data.x=this.data.radius),this.data.y-this.data.radius<0&&(this.data.y=this.data.radius)},living:function(){var t=.92*(this.data.x-this.old_x),e=.92*(this.data.y-this.old_y);this.old_x=this.data.x,this.old_y=this.data.y,this.data.isActive||(this.data.x+=t,this.data.y+=e),this.data.x-this.data.radius<0&&(this.data.x=this.data.radius,this.old_x=this.data.x+.2*t),this.data.y-this.data.radius<0&&(this.data.y=this.data.radius,this.old_y=this.data.y+.2*e),f.prototype.changeTragetElement(this)},addChildren:function(t){v.prototype.addElements(t)},onClick:function(){}},u.prototype={caculate:function(t){var e=t.offsetX-this.data.x,a=t.offsetY-this.data.y;if(e>0&&e<this.data.width&&a>0&&a<this.data.height)return!0},draw:function(t){t.beginPath(),t.rect(this.data.x,this.data.y,this.data.width,this.data.height),t.fillStyle=this.data.bg,t.strokeStyle=this.data.border,t.fill(),t.stroke()},update:function(t){this.data.x=t.offsetX-this.data.width/2,this.data.y=t.offsetY-this.data.height/2},onClick:function(){l.prototype.trigger("eleClick","aaa"),this.addChildren(this.children)},living:function(){}},g.prototype={draw:function(t){t.beginPath(),t.lineWidth=2,t.strokeStyle="#333",t.moveTo(this.data.endPoint.x,this.data.endPoint.y),t.lineTo(this.data.beginPoint.x+this.data.beginPoint.width/2,this.data.beginPoint.y+this.data.beginPoint.height/2),t.stroke(),t.closePath();var e,a,i,n,o,s,r,h=this.data.endPoint.x,d=this.data.endPoint.y,l=this.data.beginPoint.x+this.data.beginPoint.width/2,p=this.data.beginPoint.y+this.data.beginPoint.height/2,f=c()(p-d,l-h),y=h+20*(l-h)/f,u=d+20*(p-d)/f;l>=h?(e=Math.asin((p-d)/f),r=f/2*Math.sin(e),s=f/2*Math.cos(e)):(e=Math.PI-Math.asin((p-d)/f),r=f/2*Math.sin(e),s=f/2*Math.cos(e)),l>=h&&(a=20*Math.cos(e-Math.PI/8),n=20*Math.sin(e-Math.PI/8),i=20*Math.cos(e+Math.PI/8),o=20*Math.sin(e+Math.PI/8)),l<h&&(a=20*Math.cos(Math.PI-e+Math.PI/8),n=20*Math.sin(Math.PI-e+Math.PI/8),i=20*Math.cos(Math.PI-e-Math.PI/8),o=20*Math.sin(Math.PI-e-Math.PI/8)),t.lineWidth=2,t.strokeStyle="#333",t.beginPath(),l>=h&&(t.moveTo(y+a,u+n),t.lineTo(y,u),t.lineTo(y+i,u+o),t.closePath()),l<h&&(t.moveTo(y-a,u+n),t.lineTo(y,u),t.lineTo(y-i,u+o),t.closePath()),t.fill();var g=void 0,P=void 0,v=c()(60,20)/2,M=Math.asin(10/v);t.save(),t.beginPath(),l>=h?(g=h+s-v*Math.cos(e+M),P=d+r-v*Math.sin(e+M),t.translate(g,P),t.rotate(e)):(g=h+s+v*Math.cos(e+M),P=d+r+v*Math.sin(e+M),t.translate(g,P),t.rotate(e-Math.PI)),this.rectOriginX=g,this.rectOriginY=P,this.rectWidth=60,this.rectHeight=20,t.rect(0,0,60,20),t.fillStyle="#058",t.fill(),t.fillStyle="#fff",t.font="10px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("1231123123",30,10,60),t.closePath(),t.restore()},caculate:function(t){var e=this.data.endPoint.x,a=this.data.endPoint.y,i=this.data.beginPoint.x,n=this.data.beginPoint.y,o=t.offsetX,s=t.offsetY,r=c()(n-a,i-e),h=c()(s-a,o-e),d=c()(n-s,i-o),l=(r+h+d)/2,p=void 0;if(e==i){if(p=Math.abs(o-e),e==o)return!1}else if(a==n){if(p=Math.abs(s-a),a==s)return!1}else{if(e>i&&(o<=i||o>=e))return!1;if(e<i&&(o<=e||o>=i))return!1;p=2*Math.sqrt(l*(l-r)*(l-h)*(l-d))/r}if(p<=10)return!0},onClick:function(t){console.log("点击线：line")},update:function(t,e){this.beginPoint=t,this.endPoint=e},living:function(){var t=Math.abs(this.data.beginPoint.x-this.data.endPoint.x),e=Math.abs(this.data.beginPoint.y-this.data.endPoint.y),a=c()(t,e),i=(this.data.beginPoint.x-this.data.endPoint.x)/a,n=(this.data.beginPoint.y-this.data.endPoint.y)/a;if(a>300){var o=(a-300)*i*.2,s=(a-300)*n*.2;this.data.beginPoint.isActive||(this.data.beginPoint.x-=o,this.data.beginPoint.y-=s),this.data.endPoint.isActive||(this.data.endPoint.x+=o,this.data.endPoint.y+=s)}}},P.prototype={draw:function(t){var e=(this.data.beginPoint.x+this.data.endPoint.x)/2,a=(this.data.beginPoint.y+this.data.endPoint.y)/2,i=c()(Math.abs(this.data.endPoint.x-this.data.beginPoint.x),Math.abs(this.data.endPoint.y-this.data.beginPoint.y)),n=(this.data.endPoint.x-this.data.beginPoint.x)/i,o=(this.data.endPoint.y-this.data.beginPoint.y)/i,s=e,r=a;t.beginPath(),t.lineWidth=2,t.strokeStyle="#333",t.moveTo(this.data.beginPoint.x,this.data.beginPoint.y);var h=parseInt(r+60*n),d=parseInt(s-60*o);t.quadraticCurveTo(d,h,this.data.endPoint.x,this.data.endPoint.y),t.stroke();var l,p,f,y,u,g,P=this.data.endPoint.x,v=this.data.endPoint.y,M=d,m=h,b=this.data.beginPoint.x,x=this.data.beginPoint.y,k=P+20*(M-P)/c()(m-v,M-P),w=v+20*(m-v)/c()(m-v,M-P);M>=P?(l=Math.asin((m-v)/c()(m-v,M-P)),c()(m-v,M-P)/3*Math.sin(l),c()(m-v,M-P),Math.cos(l)):(l=Math.PI-Math.asin((m-v)/c()(m-v,M-P)),c()(m-v,M-P)/3*2*Math.sin(l),c()(m-v,M-P),Math.cos(l)),M>=P&&(p=16*Math.cos(l-Math.PI/8),y=16*Math.sin(l-Math.PI/8),f=16*Math.cos(l+Math.PI/8),u=16*Math.sin(l+Math.PI/8)),M<P&&(p=16*Math.cos(Math.PI-l+Math.PI/8),y=16*Math.sin(Math.PI-l+Math.PI/8),f=16*Math.cos(Math.PI-l-Math.PI/8),u=16*Math.sin(Math.PI-l-Math.PI/8)),g=b>=P?Math.asin((x-v)/c()(x-v,b-P)):Math.PI-Math.asin((x-v)/c()(x-v,b-P)),t.lineWidth=3,t.strokeStyle="#333",t.beginPath(),M>=P&&(t.moveTo(k+p,w+y),t.lineTo(k,w),t.lineTo(k+f,w+u),t.closePath()),M<P&&(t.moveTo(k-p,w+y),t.lineTo(k,w),t.lineTo(k-f,w+u),t.closePath()),t.fill();var C=c()(100,20)/2,E=void 0,I=void 0,D=.25*(this.data.endPoint.x+this.data.beginPoint.x)+.5*d,T=.25*(this.data.endPoint.y+this.data.beginPoint.y)+.5*h,N=Math.asin(10/C);t.save(),t.beginPath(),b>P?(E=D-C*Math.cos(g+N),I=T-C*Math.sin(g+N),t.translate(E,I),t.rotate(g)):(E=D+C*Math.cos(g+N),I=T+C*Math.sin(g+N),t.translate(E,I),t.rotate(g-Math.PI)),t.rect(0,0,100,20),t.fillStyle="#058",t.fill(),t.fillStyle="#fff",t.font="10px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("1231123123",50,10,50),t.restore()},caculate:function(t){var e=this.data.endPoint.x,a=this.data.endPoint.y,i=this.data.beginPoint.x,n=this.data.beginPoint.y,o=t.offsetX-RoleController.prototype.translateX,s=t.offsetY-RoleController.prototype.translateY,r=c()(n-a,i-e),h=c()(s-a,o-e),d=c()(n-s,i-o),l=(r+h+d)/2,p=(i+e)/2,f=(n+a)/2,y=c()(Math.abs(e-i),Math.abs(a-n)),u=(a-n)/y,g=parseInt(f+60*((e-i)/y)),P=parseInt(p-60*u),v=void 0,M=void 0,m=void 0,b=void 0,x=void 0;if(e==i){if(v=Math.abs(o-e),m=Math.abs(s-n)/Math.abs(n-a),b=Math.pow(1-m,2)*i+2*m*(1-m)*P+Math.pow(m,2)*e,x=Math.pow(1-m,2)*n+2*m*(1-m)*g+Math.pow(m,2)*a,M=Math.abs(o-b),a>n&&(s<=n||s>=a)||a<n&&(s<=a||s>=n))return!1}else if(a==n){if(v=Math.abs(s-a),m=Math.abs(o-i)/Math.abs(i-e),b=Math.pow(1-m,2)*i+2*m*(1-m)*P+Math.pow(m,2)*e,x=Math.pow(1-m,2)*n+2*m*(1-m)*g+Math.pow(m,2)*a,M=Math.abs(s-x),e>i&&(o<=i||o>=e)||e<i&&(o<=e||o>=i))return!1}else{if(e>i&&(o<=i||o>=e)||e<i&&(o<=e||o>=i))return!1;if(a>n&&(s<=n||s>=a)||a<n&&(s<=a||s>=n))return!1;v=2*Math.sqrt(l*(l-r)*(l-h)*(l-d))/r,m=Math.sqrt(Math.pow(d,2)-Math.pow(v,2))/r,b=Math.pow(1-m,2)*i+2*m*(1-m)*P+Math.pow(m,2)*e,x=Math.pow(1-m,2)*n+2*m*(1-m)*g+Math.pow(m,2)*a,M=c()(o-b,s-x)}if(M<=10)return!0},onClick:function(t){console.log("点击线：Bezier"),console.log(this.data.LineColor)},update:function(t,e){this.beginPoint=t,this.endPoint=e},living:function(){var t=Math.abs(this.data.beginPoint.x-this.data.endPoint.x),e=Math.abs(this.data.beginPoint.y-this.data.endPoint.y),a=c()(t,e),i=(this.data.beginPoint.x-this.data.endPoint.x)/a,n=(this.data.beginPoint.y-this.data.endPoint.y)/a;if(a>300){var o=(a-300)*i*.2,s=(a-300)*n*.2;this.data.beginPoint.isActive||(this.data.beginPoint.x-=o,this.data.beginPoint.y-=s),this.data.endPoint.isActive||(this.data.endPoint.x+=o,this.data.endPoint.y+=s)}}};a("OMJi");function v(){}v.prototype={types:{circle:function(t){return new y(t)},rect:function(t){return new u(t)},line:function(t){return new g(t)},BezierLine:function(t){return new P(t)}},addElement:function(t){s.prototype.saveElement(v.prototype.types[t.type](t))},addLines:function(t){for(var e=[],a=0;a<t.length;a++)e.push(v.prototype.types[t[a].type](t[a]));s.prototype.saveLines(e)},addElements:function(t){for(var e=0;e<t.length;e++)v.prototype.addElement(t[e])}};var M=a("woOf"),m=a.n(M),b={getCircleDatas:function(t){for(var e=[],a=0;a<t.length;a++){var i={type:"circle"};i.x=Math.ceil(50+700*Math.random()),i.y=Math.ceil(50+700*Math.random()),i.radius=20,i.width=0,i.height=0,m()(i,t[a]),e.push(i)}return e},getRectDatas:function(t){for(var e=[],a=0;a<t.length;a++){var i={type:"rect"};i.x=50+700*Math.random(),i.y=50+700*Math.random(),i.radius=30,i.width=50,i.height=30,m()(i,t[a]),e.push(i)}return e},getLineDatas:function(t,e){for(var a=[],i=0;i<e.length;i++){var n={};n.type=b.getLineType(e[i],e),n.beginPoint=t[b.getTargetPoint(t,e[i].startNode)],n.endPoint=t[b.getTargetPoint(t,e[i].endNode)],a.push(n)}return a},getTargetPoint:function(t,e){for(var a=0;a<t.length;a++)if(t[a].id===e)return a},getLineType:function(t,e){for(var a=0;a<e.length;a++)if(e[a].endNode==t.startNode&&e[a].startNode==t.endNode)return"BezierLine";return"line"},test:function(){alert("datas")}},x=b,k={name:"CanvasDemo",data:function(){return{nodes:[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"b"},{id:4,name:"b"},{id:5,name:"b"},{id:6,name:"b"}],relationships:[{startNode:1,endNode:2,rel:"friends"},{startNode:2,endNode:1,rel:"friends"},{startNode:2,endNode:3,rel:"friends"},{startNode:4,endNode:5,rel:"friends"}],elements:[{type:"rect",bg:"#ff0",border:"#f0f",name:"dsf"}],circleDatas:[],lines:[],roleCtrl:""}},methods:{getCircleDatas:function(){var t;(t=this.circleDatas).splice.apply(t,[0,0].concat(n()(x.getCircleDatas(this.nodes))))},getLineDatas:function(){var t;(t=this.lines).splice.apply(t,[0,0].concat(n()(x.getLineDatas(this.circleDatas,this.relationships))))},backToStart:function(){this.roleCtrl.backToStart()},initCanvas:function(){var t=this;this.roleCtrl=new r(this.$refs.canvas),l.prototype.listen("eleClick",function(t){}),l.prototype.listen("drag",function(e,a,i){t.roleCtrl.onDrag(e,a,i)}),this.$refs.canvas.addEventListener("mousedown",function(t){return l.prototype.handleMouseDown(t)},!1),this.$refs.canvas.addEventListener("mouseup",function(t){return l.prototype.handleMouseUp(t)},!1),this.$refs.canvas.addEventListener("mousemove",function(t){return l.prototype.handleMouseMove(t)},!1)},resetData:function(){var t=x.getRectDatas(this.elements);v.prototype.addElements(t),v.prototype.addElements(this.circleDatas),v.prototype.addLines(this.lines)}},mounted:function(){this.getCircleDatas(),this.getLineDatas(),this.initCanvas(),this.resetData()}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvas-container"},[e("input",{attrs:{type:"button",value:"backToStart"},on:{click:this.backToStart}}),this._v(" "),e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:"800",height:"800"}})])},staticRenderFns:[]};var C=a("VU/8")(k,w,!1,function(t){a("MrYl")},"data-v-9a578d64",null);e.default=C.exports},MrYl:function(t,e){}});
//# sourceMappingURL=0.cf69cd2d38a8aacd0e6a.js.map