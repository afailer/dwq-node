webpackJsonp([2],{"/Q/j":function(t,e){},"0mur":function(t,e){},"2bHb":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-link",{key:"demo1",attrs:{to:"/"}},[this._v(" demo1 ")]),this._v(" "),e("router-link",{key:"demo2",attrs:{to:"/demo2"}},[this._v(" demo2 ")]),this._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("0mur")},null,null).exports,r=a("/ocq"),s=(a("YP8n"),a("mtWM")),l=a.n(s);o.default.prototype.$http=l.a,o.default.use(r.a);var p=[{path:"/",name:"CanvasDemo",component:function(){return new Promise(function(t){t()}).then(a.bind(null,"YP8n"))}},{path:"/demo2",name:"demo2",component:function(){return a.e(0).then(a.bind(null,"FBrj"))}}],d=new r.a({scrollBehavior:function(){return{y:0}},routes:p}),h=a("zL8q"),c=a.n(h);a("tvR6"),a("2bHb");o.default.use(c.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:d,components:{App:n},template:"<App/>"})},YP8n:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Gu7T"),i=a.n(o);function n(){}function r(t){var e=this;this.canvas=t,this.pen=t.getContext("2d"),this.main_loop=function(){e.pen.clearRect(0,0,9999,9999);for(var t=0;t<n.prototype.elements.length;t++)n.prototype.elements[t].living(),n.prototype.elements[t].draw(e.pen);requestAnimationFrame(e.main_loop)},this.main_loop(),this.currentX=0,this.currentY=0,this.onDrag=function(t,a,o){if("down"==o)e.currentX=0,e.currentY=0;else{var i=t-e.currentX,n=a-e.currentY,s=!1;r.prototype.translateX+i<0?(r.prototype.translateX+=i,e.currentX=t,s=!0):i=0,r.prototype.translateY+n<0?(r.prototype.translateY+=n,e.currentY=a,s=!0):n=0,s&&e.pen.translate(i,n)}},this.backToStart=function(){e.pen.translate(-r.prototype.translateX,-r.prototype.translateY),r.prototype.translateX=0,r.prototype.translateY=0,n.prototype.resetData()}}n.prototype={elements:[],saveLines:function(t){var e;(e=n.prototype.elements).splice.apply(e,[0,0].concat(i()(t)))},saveElement:function(t){n.prototype.elements.push(t)},getElements:function(t){for(var e=[],a=0;a<n.prototype.elements.length;a++)n.prototype.elements[a].data.type==t&&e.push(n.prototype.elements[a]);return console.log(e),e},resetData:function(){console.log("resetData");for(var t=0;t<n.prototype.elements.length;t++)"circle"==n.prototype.elements[t].data.eleType&&(console.log(n.prototype.elements[t]),n.prototype.elements[t].data.x=parseInt(50+700*Math.random()),n.prototype.elements[t].data.y=parseInt(50+700*Math.random()),n.prototype.elements[t].old_x=n.prototype.elements[t].data.x,n.prototype.elements[t].old_y=n.prototype.elements[t].data.y)}},r.prototype={translateX:0,translateY:0};var s={};s.prototype={defaultBorder:.1,defaultBorderColor:"#ccc",RectBgColor:"#f0f",RectWidth:50,RectHeight:30,CircleBgColor:"#5CACEE",CircleRadius:24,CircleHoverBgColor:"#FFD39B",CircleSelectColor:"#FF8C69",CircleTextColor:"#333",CircleTextHoverColor:"#4876FF",CircleTextSelectColor:"#8B008B",CircleTextFont:"12",CircleTextSelectFont:"18",lineWidth:1,LineColor:"#333",lineSelectWidth:2,lineSelectColor:"#0fff00",lineHoverColor:"#9AFF9A",lineLabelWidth:50,lineLabelHeight:10,lineLabelBg:"#FFFFFF",lineTextMaxLength:5,lineLabelText:"#333",lineLabelTextFont:"14",lineLabelTextSelectFont:"18",hoverElementId:0,SelectElementId:0,bevel:10,bevelAngle:Math.PI/4};var l=s;function p(){}p.prototype={activeEle:"",startDragEvent:{onDrag:!1},startTime:0,clientList:{},listen:function(t,e){p.prototype.clientList[t]||(p.prototype.clientList[t]=[]),p.prototype.clientList[t].push(e)},trigger:function(){var t=Array.prototype.shift.call(arguments),e=p.prototype.clientList[t];if(!e||0===e.length)return!1;for(var a=0;a<e.length;a++)e[a].apply(this,arguments)},handleClick:function(t){for(var e=n.prototype.elements.length-1;e>=0;e--)n.prototype.elements[e].caculate(t)&&alert("ok")},handleMouseDown:function(t){for(var e=n.prototype.elements.length-1;e>=0;e--)if(n.prototype.elements[e].caculate(t))return(new Date).getTime()-p.prototype.startTime<300&&n.prototype.elements[e].onDoubleClick(),p.prototype.startTime=(new Date).getTime(),p.prototype.activeEle=n.prototype.elements[e],void(p.prototype.activeEle.data.isActive=!0);""==p.prototype.activeEle&&(p.prototype.trigger("drag",0,0,"down"),p.prototype.startDragEvent.onDrag=!0,p.prototype.startDragEvent.offsetX=t.offsetX,p.prototype.startDragEvent.offsetY=t.offsetY)},handleMouseUp:function(){""!=p.prototype.activeEle&&(new Date).getTime()-this.startTime<300&&(p.prototype.trigger("showInfo",p.prototype.activeEle.data),p.prototype.activeEle.onClick()),""!=p.prototype.activeEle&&(p.prototype.activeEle.data.isActive=!1),p.prototype.startDragEvent.onDrag=!1,this.activeEle=""},handleMouseMove:function(t){""!=this.activeEle&&this.activeEle.update(t),p.prototype.startDragEvent.onDrag&&p.prototype.onDrag(t);for(var e=!1,a=n.prototype.elements.length-1;a>=0;a--){if(n.prototype.elements[a].caculate(t))return l.prototype.hoverElementId=n.prototype.elements[a].data.id,p.prototype.trigger("showDetails",n.prototype.elements[a].data),void(e=!0);a==n.prototype.elements.length-1&&(l.prototype.hoverElementId=0)}e||p.prototype.trigger("showDetails",!1)},onDrag:function(t){var e=t.offsetX-p.prototype.startDragEvent.offsetX,a=t.offsetY-p.prototype.startDragEvent.offsetY;p.prototype.trigger("drag",e,a)}};var d=a("KmDb"),h=a.n(d);function c(){}function y(t){this.old_x=t.x,this.old_y=t.y,this.isActive=!1,this.data=t}function f(t){this.old_x=t.x,this.old_y=t.y,this.isActive=!1,this.data=t}function u(t){this.data=t}function v(t){this.data=t}c.prototype={changeTragetElement:function(t){for(var e=0;e<n.prototype.elements.length;e++)if(n.prototype.elements[e].data.id!=t.data.id&&n.prototype.elements[e].data.x){var a=Math.abs(t.data.x-n.prototype.elements[e].data.x),o=Math.abs(t.data.y-n.prototype.elements[e].data.y),i=h()(a,o),r=(t.data.x-n.prototype.elements[e].data.x)/i,s=(t.data.y-n.prototype.elements[e].data.y)/i;i<50&&(n.prototype.elements[e].data.x=n.prototype.elements[e].data.x-(50-i)*r*.1,n.prototype.elements[e].data.y=n.prototype.elements[e].data.y-(50-i)*s*.1)}},livingCycle:function(){for(var t="",e=0;e<n.prototype.elements.length;e++)n.prototype.elements[e].data.isActive&&(t=n.prototype.elements[e]);if(""!=t)for(var a=0;a<n.prototype.elements.length;a++)n.prototype.elements[a].data.linkNum==t.data.linkNum&&n.prototype.elements[a].data.id!=t.data.id&&n.prototype.elements[a].data;var o=Math.abs(this.data.beginPoint.x-this.data.endPoint.x),i=Math.abs(this.data.beginPoint.y-this.data.endPoint.y),r=h()(o,i),s=(this.data.beginPoint.x-this.data.endPoint.x)/r,l=this.data.beginPoint.y-this.data.endPoint.y;r>300&&(this.data.endPoint.x=this.data.endPoint.x+(r-300)*s*.01,this.data.endPoint.y=this.data.endPoint.y+(r-300)*l*.01)}},y.prototype={caculate:function(t){var e=t.offsetX-r.prototype.translateX-this.data.x,a=t.offsetY-r.prototype.translateY-this.data.y;return Math.sqrt(e*e+a*a)<l.prototype.CircleRadius},draw:function(t){t.beginPath(),t.strokeStyle=l.prototype.LineColor,t.arc(this.data.x,this.data.y,l.prototype.CircleRadius,0,2*Math.PI,!1),t.fillStyle=l.prototype.CircleBgColor,this.data.id==l.prototype.hoverElementId&&(t.fillStyle=l.prototype.CircleHoverBgColor),this.data.id==l.prototype.SelectElementId&&(t.fillStyle=l.prototype.CircleSelectColor),t.fill(),t.stroke();var e=this.data.name;t.fillStyle=l.prototype.CircleTextColor,t.font=l.prototype.CircleTextFont+"px Arial",this.data.id==l.prototype.hoverElementId&&(t.fillStyle=l.prototype.CircleTextHoverColor,t.font=l.prototype.CircleTextSelectFont+"px Arial"),this.data.id==l.prototype.SelectElementId&&(t.fillStyle=l.prototype.CircleTextSelectColor,t.font=l.prototype.CircleTextSelectFont+"px Arial"),t.textAlign="center",t.textBaseline="middle",t.fillText(e,this.data.x,this.data.y),t.closePath()},update:function(t){this.data.x=t.offsetX-r.prototype.translateX,this.data.y=t.offsetY-r.prototype.translateY,this.data.x-l.prototype.CircleRadius<0&&(this.data.x=l.prototype.CircleRadius),this.data.y-l.prototype.CircleRadius<0&&(this.data.y=l.prototype.CircleRadius)},living:function(){var t=.92*(this.data.x-this.old_x),e=.92*(this.data.y-this.old_y);this.old_x=this.data.x,this.old_y=this.data.y,this.data.isActive||(this.data.x+=t,this.data.y+=e),this.data.x-l.prototype.CircleRadius<0&&(this.data.x=l.prototype.CircleRadius,this.old_x=this.data.x+.2*t),this.data.y-l.prototype.CircleRadius<0&&(this.data.y=l.prototype.CircleRadius,this.old_y=this.data.y+.2*e),c.prototype.changeTragetElement(this)},addChildren:function(t){g.prototype.addElements(t)},onClick:function(){l.prototype.SelectElementId=this.data.id},onDoubleClick:function(){p.prototype.trigger("loadNewData",this.data)}},f.prototype={caculate:function(t){var e=t.offsetX-(this.data.x-this.data.width/2),a=t.offsetY-(this.data.y-this.data.height/2);if(e>0&&e<this.data.width&&a>0&&a<this.data.height)return!0},draw:function(t){t.beginPath(),t.lineWidth=.1,t.rect(this.data.x-this.data.width/2,this.data.y-this.data.height/2,this.data.width,this.data.height),t.fillStyle=this.data.bg,t.fill(),t.stroke()},update:function(t){this.data.x=t.offsetX,this.data.y=t.offsetY,this.data.x-this.data.width/2<0&&(this.data.x=this.data.width/2),this.data.y-this.data.height/2<0&&(this.data.y=this.data.height/2)},onClick:function(){p.prototype.trigger("eleClick","aaa")},living:function(){var t=.92*(this.data.x-this.old_x),e=.92*(this.data.y-this.old_y);this.old_x=this.data.x,this.old_y=this.data.y,this.data.isActive||(this.data.x+=t,this.data.y+=e),this.data.x-this.data.radius<0&&(this.data.x=this.data.radius,this.old_x=this.data.x+.2*t),this.data.y-this.data.radius<0&&(this.data.y=this.data.radius,this.old_y=this.data.y+.2*e),c.prototype.changeTragetElement(this)}},u.prototype={draw:function(t){t.beginPath(),t.lineWidth=l.prototype.lineWidth,t.strokeStyle=l.prototype.LineColor,this.data.id==l.prototype.hoverElementId&&(console.log(this.data.id+"----"),t.lineWidth=l.prototype.lineSelectWidth,t.strokeStyle=l.prototype.lineHoverColor),this.data.id==l.prototype.SelectElementId&&(t.lineWidth=l.prototype.lineSelectWidth,t.strokeStyle=l.prototype.lineSelectColor),t.moveTo(this.data.endPoint.x,this.data.endPoint.y),t.lineTo(this.data.beginPoint.x+this.data.beginPoint.width/2,this.data.beginPoint.y+this.data.beginPoint.height/2),t.stroke(),t.closePath();var e,a,o,i,n,r,s,p=this.data.endPoint.x,d=this.data.endPoint.y,c=this.data.beginPoint.x+this.data.beginPoint.width/2,y=this.data.beginPoint.y+this.data.beginPoint.height/2,f=h()(y-d,c-p),u=l.prototype.CircleRadius,v=p+u*(c-p)/f,g=d+u*(y-d)/f,m=l.prototype.bevel,x=l.prototype.bevelAngle;c>=p?(e=Math.asin((y-d)/f),s=f/2*Math.sin(e),r=f/2*Math.cos(e)):(e=Math.PI-Math.asin((y-d)/f),s=f/2*Math.sin(e),r=f/2*Math.cos(e)),c>=p&&(a=m*Math.cos(e-x/2),i=m*Math.sin(e-x/2),o=m*Math.cos(e+x/2),n=m*Math.sin(e+x/2)),c<p&&(a=m*Math.cos(Math.PI-e+x/2),i=m*Math.sin(Math.PI-e+x/2),o=m*Math.cos(Math.PI-e-x/2),n=m*Math.sin(Math.PI-e-x/2)),t.beginPath(),t.lineWidth=l.prototype.lineWidth,t.fillStyle=l.prototype.LineColor,this.data.id==l.prototype.hoverElementId&&(t.fillStyle=l.prototype.lineHoverColor),this.data.id==l.prototype.SelectElementId&&(t.fillStyle=l.prototype.lineSelectColor),c>=p&&(t.moveTo(v+a,g+i),t.lineTo(v,g),t.lineTo(v+o,g+n)),c<p&&(t.moveTo(v-a,g+i),t.lineTo(v,g),t.lineTo(v-o,g+n)),t.fill(),t.closePath();var b=l.prototype.lineLabelWidth,P=l.prototype.lineLabelHeight,M=void 0,C=void 0,T=h()(b,P)/2,w=Math.asin(P/2/T);t.save(),t.beginPath(),c>=p?(M=p+r-T*Math.cos(e+w),C=d+s-T*Math.sin(e+w),t.translate(M,C),t.rotate(e)):(M=p+r+T*Math.cos(e+w),C=d+s+T*Math.sin(e+w),t.translate(M,C),t.rotate(e-Math.PI)),this.rectOriginX=M,this.rectOriginY=C,this.rectWidth=b,this.rectHeight=P,t.rect(0,0,b,P),t.fillStyle=l.prototype.lineLabelBg,t.fill(),t.fillStyle=l.prototype.lineLabelText,t.font=l.prototype.lineLabelTextFont+"px Arial",this.data.id==l.prototype.hoverElementId&&(t.fillStyle=l.prototype.lineHoverColor,t.font=l.prototype.lineLabelTextSelectFont+"px Arial"),this.data.id==l.prototype.SelectElementId&&(t.fillStyle=l.prototype.lineSelectColor,t.font=l.prototype.lineLabelTextSelectFont+"px Arial");var S=l.prototype.lineTextMaxLength;t.textAlign="center",t.textBaseline="middle",this.data.rel.length>=S&&(this.data.rel=this.data.rel.replace(this.data.rel.substring(S),"...")),t.fillText(this.data.rel,b/2,P/2),t.closePath(),t.restore()},caculate:function(t){var e=this.data.endPoint.x,a=this.data.endPoint.y,o=this.data.beginPoint.x,i=this.data.beginPoint.y,n=t.offsetX-r.prototype.translateX,s=t.offsetY-r.prototype.translateY,l=h()(i-a,o-e),p=h()(s-a,n-e),d=h()(i-s,o-n),c=(l+p+d)/2,y=void 0;if(e==o){if(y=Math.abs(n-e),e==n)return!1}else if(a==i){if(y=Math.abs(s-a),a==s)return!1}else{if(e>o&&(n<=o||n>=e))return!1;if(e<o&&(n<=e||n>=o))return!1;y=2*Math.sqrt(c*(c-l)*(c-p)*(c-d))/l}if(y<=10)return!0},onClick:function(t){l.prototype.SelectElementId=this.data.id},update:function(t,e){this.beginPoint=t,this.endPoint=e},living:function(){var t=Math.abs(this.data.beginPoint.x-this.data.endPoint.x),e=Math.abs(this.data.beginPoint.y-this.data.endPoint.y),a=h()(t,e),o=(this.data.beginPoint.x-this.data.endPoint.x)/a,i=(this.data.beginPoint.y-this.data.endPoint.y)/a,n=0,r=0;this.data.beginPoint.id==l.prototype.SelectElementId||this.data.endPoint.id==l.prototype.SelectElementId||a>250&&(r=(a-250)*i*.2,(n=(a-250)*o*.2)>0&&n>30&&(n=30),n<0&&n<-30&&(n=-30),r>0&&r>30&&(r=30),r<0&&r<-30&&(r=-30)),a<150&&(n=(a-150)*o*.2,r=(a-150)*i*.2),this.data.beginPoint.isActive||this.data.beginPoint.id!=l.prototype.SelectElementId&&(this.data.beginPoint.x-=n,this.data.beginPoint.y-=r),this.data.endPoint.isActive||this.data.endPoint.id!=l.prototype.SelectElementId&&(this.data.endPoint.x+=n,this.data.endPoint.y+=r)}},v.prototype={draw:function(t){var e=(this.data.beginPoint.x+this.data.endPoint.x)/2,a=(this.data.beginPoint.y+this.data.endPoint.y)/2,o=h()(Math.abs(this.data.endPoint.x-this.data.beginPoint.x),Math.abs(this.data.endPoint.y-this.data.beginPoint.y)),i=(this.data.endPoint.x-this.data.beginPoint.x)/o,n=(this.data.endPoint.y-this.data.beginPoint.y)/o,r=e,s=a;t.beginPath(),t.lineWidth=l.prototype.lineWidth,t.strokeStyle=l.prototype.LineColor,this.data.id==l.prototype.hoverElementId&&(t.lineWidth=l.prototype.lineSelectWidth,t.strokeStyle=l.prototype.lineHoverColor),this.data.id==l.prototype.SelectElementId&&(t.lineWidth=l.prototype.lineSelectWidth,t.strokeStyle=l.prototype.lineSelectColor),t.moveTo(this.data.beginPoint.x,this.data.beginPoint.y);var p=parseInt(s+60*i),d=parseInt(r-60*n);t.quadraticCurveTo(d,p,this.data.endPoint.x,this.data.endPoint.y),t.stroke();var c,y,f,u,v,g,m=this.data.endPoint.x,x=this.data.endPoint.y,b=d,P=p,M=this.data.beginPoint.x,C=this.data.beginPoint.y,T=l.prototype.CircleRadius,w=m+T*(b-m)/h()(P-x,b-m),S=x+T*(P-x)/h()(P-x,b-m),E=l.prototype.bevel,D=l.prototype.bevelAngle,I=.25*(this.data.endPoint.x+this.data.beginPoint.x)+.5*d,L=.25*(this.data.endPoint.y+this.data.beginPoint.y)+.5*p;c=b>=m?Math.asin((p-x)/h()(p-x,d-m))+Math.PI/10:Math.PI-Math.asin((p-x)/h()(p-x,d-m))+Math.PI/10,b<m&&(y=E*Math.cos(Math.PI-c+D/2),u=E*Math.sin(Math.PI-c+D/2),f=E*Math.cos(Math.PI-c-D/2),v=E*Math.sin(Math.PI-c-D/2)),b>=m&&(y=E*Math.cos(c-D/2),u=E*Math.sin(c-D/2),f=E*Math.cos(c+D/2),v=E*Math.sin(c+D/2)),t.lineWidth=l.prototype.lineWidth,t.fillStyle=l.prototype.LineColor,t.save(),t.beginPath(),b>=m&&(t.moveTo(w+y,S+u),t.lineTo(w,S),t.lineTo(w+f,S+v),t.closePath()),b<m&&(t.moveTo(w-y,S+u),t.lineTo(w,S),t.lineTo(w-f,S+v),t.closePath()),t.fill(),console.log("角度:"+180*c/Math.PI,"差值："+(m-d)),t.restore(),g=M>=m?Math.asin((C-x)/h()(C-x,M-m)):Math.PI-Math.asin((C-x)/h()(C-x,M-m));var _=l.prototype.lineLabelWidth,k=l.prototype.lineLabelHeight,F=h()(_,k)/2,A=void 0,N=void 0,Y=Math.asin(k/2/F);t.save(),t.beginPath(),M>m?(A=I-F*Math.cos(g+Y),N=L-F*Math.sin(g+Y),t.translate(A,N),t.rotate(g)):(A=I+F*Math.cos(g+Y),N=L+F*Math.sin(g+Y),t.translate(A,N),t.rotate(g-Math.PI)),t.rect(0,0,_,k),t.fillStyle=l.prototype.lineLabelBg,t.fill(),t.fillStyle=l.prototype.lineLabelText,t.font=l.prototype.lineLabelTextFont+"px Arial",this.data.id==l.prototype.hoverElementId&&(t.fillStyle=l.prototype.lineHoverColor,t.font=l.prototype.lineLabelTextSelectFont+"px Arial"),this.data.id==l.prototype.SelectElementId&&(t.fillStyle=l.prototype.lineSelectColor,t.font=l.prototype.lineLabelTextSelectFont+"px Arial");var B=l.prototype.lineTextMaxLength;t.textAlign="center",t.textBaseline="middle",this.data.rel.length>=B&&(this.data.rel=this.data.rel.replace(this.data.rel.substring(B),"...")),t.fillText(this.data.rel,_/2,k/2),t.closePath(),t.restore()},caculate:function(t){var e=this.data.endPoint.x,a=this.data.endPoint.y,o=this.data.beginPoint.x,i=this.data.beginPoint.y,n=t.offsetX-r.prototype.translateX,s=t.offsetY-r.prototype.translateY,l=h()(i-a,o-e),p=h()(s-a,n-e),d=h()(i-s,o-n),c=(l+p+d)/2,y=(o+e)/2,f=(i+a)/2,u=h()(Math.abs(e-o),Math.abs(a-i)),v=(a-i)/u,g=parseInt(f+60*((e-o)/u)),m=parseInt(y-60*v),x=void 0,b=void 0,P=void 0,M=void 0;if(e==o){if(x=Math.abs(n-e),b=Math.abs(s-i)/Math.abs(i-a),P=Math.pow(1-b,2)*o+2*b*(1-b)*m+Math.pow(b,2)*e,M=Math.pow(1-b,2)*i+2*b*(1-b)*g+Math.pow(b,2)*a,Math.abs(n-P)<=10)return!0}else if(a==i){if(x=Math.abs(s-a),b=Math.abs(n-o)/Math.abs(o-e),P=Math.pow(1-b,2)*o+2*b*(1-b)*m+Math.pow(b,2)*e,M=Math.pow(1-b,2)*i+2*b*(1-b)*g+Math.pow(b,2)*a,Math.abs(s-M)<=10)return!0}else if(n<o&&n>e||n<e&&n>o||s<i&&s>a||s<a&&s>i)return x=2*Math.sqrt(c*(c-l)*(c-p)*(c-d))/l,b=Math.sqrt(Math.pow(d,2)-Math.pow(x,2))/l,P=Math.pow(1-b,2)*o+2*b*(1-b)*m+Math.pow(b,2)*e,M=Math.pow(1-b,2)*i+2*b*(1-b)*g+Math.pow(b,2)*a,h()(n-P,s-M)<=10},onClick:function(t){l.prototype.SelectElementId=this.data.id},update:function(t,e){this.beginPoint=t,this.endPoint=e},living:function(){var t=Math.abs(this.data.beginPoint.x-this.data.endPoint.x),e=Math.abs(this.data.beginPoint.y-this.data.endPoint.y),a=h()(t,e),o=(this.data.beginPoint.x-this.data.endPoint.x)/a,i=(this.data.beginPoint.y-this.data.endPoint.y)/a,n=0,r=0;a>230&&(r=(a-230)*i*.2,(n=(a-230)*o*.2)>0&&n>30&&(n=30),n<0&&n<-30&&(n=-30),r>0&&r>30&&(r=30),r<0&&r<-30&&(r=-30)),a<130&&(n=(a-130)*o*.2,r=(a-130)*i*.2),this.data.beginPoint.isActive||(this.data.beginPoint.x-=n,this.data.beginPoint.y-=r),this.data.endPoint.isActive||(this.data.endPoint.x+=n,this.data.endPoint.y+=r)}};a("OMJi");function g(){}g.prototype={eleTypes:{circle:function(t){return new y(t)},rect:function(t){return new f(t)},line:function(t){return new u(t)},BezierLine:function(t){return new v(t)}},addElement:function(t){n.prototype.saveElement(g.prototype.eleTypes[t.eleType](t))},addLines:function(t){for(var e=[],a=0;a<t.length;a++)console.log(t[a]),console.log(t[a].type),e.push(g.prototype.eleTypes[t[a].eleType](t[a]));n.prototype.saveLines(e),console.log(n.prototype.elements)},addElements:function(t){for(var e=0;e<t.length;e++)g.prototype.addElement(t[e])}};var m=a("woOf"),x=a.n(m),b={getCircleDatas:function(t){for(var e=[],a=0;a<t.length;a++){var o={eleType:"circle"};o.x=Math.ceil(50+700*Math.random()),o.y=Math.ceil(50+700*Math.random()),o.radius=20,o.width=0,o.height=0,o.name=t[a].properties.BrowseName,x()(o,t[a]),e.push(o)}return e},addCircleDatas:function(t,e){for(var a=[],o=0;o<t.length;o++){var i={eleType:"circle"};i.x=e.x+Math.ceil(50*Math.random()),i.y=e.y+Math.ceil(50*Math.random()),i.radius=20,i.width=0,i.height=0,i.name=t[o].properties.BrowseName,x()(i,t[o]),a.push(i)}return a},getRectDatas:function(t){for(var e=[],a=0;a<t.length;a++){var o={eleType:"rect"};o.x=50+700*Math.random(),o.y=50+700*Math.random(),o.radius=20,o.width=50,o.height=30,x()(o,t[a]),e.push(o)}return e},getLineDatas:function(t,e){for(var a=[],o=0;o<e.length;o++){var i={};i.eleType=b.getLineType(e[o],e),console.log(i.type),i.beginPoint=t[b.getTargetPoint(t,e[o].startNode)],i.endPoint=t[b.getTargetPoint(t,e[o].endNode)],i.rel=e[o].type,x()(i,e[o]),a.push(i)}return a},getTargetPoint:function(t,e){for(var a=0;a<t.length;a++)if(t[a].id===e)return a},getLineType:function(t,e){for(var a=0;a<e.length;a++)if(e[a].endNode==t.startNode&&e[a].startNode==t.endNode)return"BezierLine";return"line"},test:function(){alert("datas")}},P=b,M=a("//Fk"),C=a.n(M),T=a("mtWM"),w=a.n(T);w.a.interceptors.request.use(function(t){return t.headers["Content-Type"]="application/json; charset=UTF-8",t},function(t){return C.a.reject(t)}),w.a.interceptors.response.use(function(t){return t},function(t){return C.a.reject(t)});var S=w.a;var E={name:"CanvasDemo",data:function(){return{src:"",form:{},currentCircle:"",nodes:[{id:6,name:"6b"},{id:7,name:"7b"}],relationships:[{id:425,startNode:6,endNode:7,rel:"5friends"},{id:416,startNode:7,endNode:6,rel:"5friends"}],elements:[{type:"rect",bg:"#ff0",border:"#f0f",name:"dsf"}],circleDatas:[],roleCtrl:""}},methods:{getInitData:function(){var t=this;S({url:"/model/v1/model/nodes/0/access",method:"post",data:{ids:["8"]}}).then(function(e){t.getNodesRels(e.data.result[0].uri)}).catch(function(t){})},getNodesRels:function(t){var e=this;(function(t){return S({url:"/mdt/gremlin/query",method:"post",data:"return g.V().has('uri','"+t+"').bothE().otherV().path().by(__.valueMap(true))"})})(t).then(function(t){var a=e.getNewDatas(t.data.nodes),o=e.getNewDatas(t.data.relationships);e.addCircleEles(a,o)}).catch(function(t){})},getNewDatas:function(t){for(var e=[],a=0;a<t.length;a++){for(var o=!0,i=0;i<n.prototype.elements.length;i++)if(t[a].id==n.prototype.elements[i].data.id){o=!1;break}o&&e.push(t[a])}return e.length,e},addCircleEles:function(t,e){var a,o=null;o=""!=this.currentCircle?P.addCircleDatas(t,this.currentCircle):P.getCircleDatas(t),(a=this.circleDatas).splice.apply(a,[0,0].concat(i()(o))),g.prototype.addElements(o),this.addLines(e)},addLines:function(t){var e=P.getLineDatas(this.circleDatas,t);g.prototype.addLines(e)},backToStart:function(){this.roleCtrl.backToStart()},initCanvas:function(){var t=this;document.oncontextmenu=new Function("event.returnValue=false;"),document.onselectstart=new Function("event.returnValue=false;"),this.roleCtrl=new r(this.$refs.canvas),p.prototype.listen("loadNewData",function(e){t.currentCircle=e,t.getNodesRels(e.id)}),p.prototype.listen("showInfo",function(e){"circle"==e.eleType?t.form=e.properties:t.form={}}),p.prototype.listen("showDetails",function(e){0==e?t.$refs.info.style.display="none":(void 0!=e.src||"line"!=e.eleType&&"BezierLine"!=e.eleType?(t.src=e.src,t.$refs.info.style.left=t.$refs.canvas_con.offsetLeft+parseInt(e.x)+t.roleCtrl.translateX+"px",t.$refs.info.style.top=t.$refs.canvas_con.offsetTop+parseInt(e.y)+t.roleCtrl.translateY+"px"):(t.src=e.type,t.$refs.info.style.left=t.$refs.canvas_con.offsetLeft+parseInt((e.beginPoint.x+e.endPoint.x)/2)+t.roleCtrl.translateX+"px",t.$refs.info.style.top=t.$refs.canvas_con.offsetTop+parseInt((e.beginPoint.y+e.endPoint.y)/2)+t.roleCtrl.translateY+"px"),t.$refs.info.style.display="block")}),p.prototype.listen("drag",function(e,a,o){t.roleCtrl.onDrag(e,a,o)}),window.addEventListener("mouseup",function(t){return p.prototype.handleMouseUp(t)},!1),this.$refs.canvas.addEventListener("mousedown",function(t){return p.prototype.handleMouseDown(t)},!1),this.$refs.canvas.addEventListener("mousemove",function(t){return p.prototype.handleMouseMove(t)},!1)},resetData:function(){var t=P.getRectDatas(this.elements);g.prototype.addElements(t)}},mounted:function(){this.initCanvas(),this.getInitData()}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas-container"},[a("p",{ref:"info",staticClass:"info"},[t._v(t._s(t.src))]),t._v(" "),a("el-form",{ref:"form",staticClass:"elform",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"BrowseName"}},[a("el-input",{model:{value:t.form.BrowseName,callback:function(e){t.$set(t.form,"BrowseName",e)},expression:"form.BrowseName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Description"}},[a("el-input",{model:{value:t.form.Description,callback:function(e){t.$set(t.form,"Description",e)},expression:"form.Description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"DisplayName"}},[a("el-input",{model:{value:t.form.Description,callback:function(e){t.$set(t.form,"Description",e)},expression:"form.Description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"NodeClass"}},[a("el-input",{model:{value:t.form.NodeClass,callback:function(e){t.$set(t.form,"NodeClass",e)},expression:"form.NodeClass"}})],1)],1),t._v(" "),a("div",{ref:"canvas_con",staticClass:"canvas"},[a("span",{staticClass:"iconfont icon-fanhui backStart",on:{click:t.backToStart}}),t._v(" "),a("canvas",{ref:"canvas",attrs:{width:"800",height:"800"}})])],1)},staticRenderFns:[]};var I=a("VU/8")(E,D,!1,function(t){a("/Q/j")},"data-v-0c4631a7",null);e.default=I.exports},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.464426c5cfa20e6aff17.js.map