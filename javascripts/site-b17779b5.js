typeof $WH=="undefined"&&($WH={wowheadRemote:!0});if(typeof $WowheadPower=="undefined")var $WowheadPower=new function(){function V(){if(e){var t=document.createElement("script");t.src="//wowjs.zamimg.com/js/basic.js?5",n.appendChild(t)}else{$();var r=$WH.isset("g_ptractive")&&g_ptractive;r||(W.ptr="www")}}function $(){if(h)return;h=!0,$WH.aE(document,"mouseover",Q)}function J(e){var t=$WH.g_getCursorPos(e);f=t.x,l=t.y}function K(e,n){if(e.nodeName!="A"&&e.nodeName!="AREA")return-2323;if(!e.href.length&&!e.rel)return;if(e.rel&&e.rel.indexOf("np")!=-1)return;var r,i,s,f,l={};u=l;var h=function(e,t,n){t=="buff"||t=="sock"||t=="map"?l[t]=!0:t=="rand"||t=="ench"||t=="lvl"||t=="c"||t=="diff"?l[t]=parseInt(n):t=="gems"||t=="pcs"||t=="forg"||t=="know"?l[t]=n.split(":"):t=="who"||t=="domain"?l[t]=n:t=="when"&&(l[t]=new Date(parseInt(n)))},p=!1;t.applyto&1&&(i=2,s=3,e.href.indexOf("http://")==0||e.href.indexOf("https://")==0?(r=1,f=e.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead|thottbot)\.com\/\??(item|quest|spell|achievement|transmog-set|statistic|npc|object)=([0-9]+)/),f==null&&(f=e.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead|thottbot)\.com\/\??(profile)=([^&#]+)/)),x=0):(p=!0,f=e.href.match(/()\/\??(item|quest|spell|achievement|transmog-set|statistic|npc|object)=([0-9]+)/),f==null&&(f=e.href.match(/()\/\??(profile)=([^&#]+)/)),x=1)),f==null&&e.rel&&t.applyto&2&&(r=0,i=1,s=2,f=e.rel.match(/(item|quest|spell|achievement|transmog-set|statistic|npc|object).?([0-9]+)/),f==null&&(f=e.rel.match(/(profile).?([^&#]+)/)),x=1),e.href.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g,h),e.rel&&e.rel.replace(/([a-zA-Z]+)=?([a-zA-Z0-9:-]*)/g,h);if(l.gems&&l.gems.length>0){var d;for(d=Math.min(3,l.gems.length-1);d>=0;--d)if(parseInt(l.gems[d]))break;++d,d==0?delete l.gems:d<l.gems.length&&(l.gems=l.gems.slice(0,d))}if(f){var v,m="www";a=e,l.domain?m=l.domain:r&&f[r]?m=f[r].split(".")[0]:p&&($WH.isset("g_beta")&&g_beta?m="cata":$WH.isset("g_ptr")&&g_ptr?m="ptr":$WH.isset("g_old")&&g_old&&(m="old")),W[m]&&(m=W[m]),v=$WH.g_getLocaleFromDomain(m);if(m=="ptr")v="ptr";else if(m=="beta"||m=="cata")v="beta";o=m;if(e.href.indexOf("#")!=-1&&document.location.href.indexOf(f[i]+"="+f[s])!=-1)return;c=e.parentNode.className.indexOf("icon")==0&&e.parentNode.nodeName=="DIV"?1:0,e.onmouseout||(c==0&&(e.onmousemove=G),e.onmouseout=Y),J(n);var g=$WH.g_getIdFromTypeName(f[i]),y=f[s];nt(g,y,v,l)}}function Q(e){e=$WH.$E(e);var t=e._target,n=0;while(t!=null&&n<5&&K(t,e)==-2323)t=t.parentNode,++n}function G(e){e=$WH.$E(e),J(e),$WH.Tooltip.move(f,l,0,0,F,I)}function Y(){r=null,a=null,$WH.Tooltip.hide()}function Z(e,t){return(u&&u.buff?"buff":"tooltip")+(t?t:"")+"_"+z[e]}function et(e){return(u&&u.buff?"buff":"")+"spells_"+z[e]}function tt(e,t,n){var r=R[e][0];r[t]==null&&(r[t]={}),r[t].status==null&&(r[t].status={}),r[t].response==null&&(r[t].response={}),r[t].status[n]==null&&(r[t].status[n]=T)}function nt(e,t,n,o){o||(o={});var a=ut(t,o);r=e,i=a,s=n,u=o,tt(e,a,n);var f=R[e][0];f[a].status[n]==L||f[a].status[n]==k?it(f[a][Z(n)],f[a].icon,f[a].map,f[a][et(n)],f[a][Z(n,2)]):f[a].status[n]==N||f[a].status[n]==A?it(q.loading):rt(e,t,n,null,o)}function rt(e,t,n,r,i){var s=ut(t,i),o=R[e][0];if(o[s].status[n]!=T&&o[s].status[n]!=C)return;o[s].status[n]=N,r||(o[s].timer=setTimeout(function(){st.apply(this,[e,s,n])},333));var u="";for(var a in i){if(a!="rand"&&a!="ench"&&a!="gems"&&a!="sock"&&a!="diff")continue;typeof i[a]=="object"?u+="&"+a+"="+i[a].join(":"):i[a]===!0?u+="&"+a:u+="&"+a+"="+i[a]}var f=$WH.g_getDomainFromLocale(n);n=="ptr"?f="ptr":n=="beta"&&(f="cata");var l="";typeof g_dev=="undefined"||!g_dev?l+=document.location.protocol+"//"+f+".wowhead.com":window.location.hostname.indexOf("dev.wowhead.com")!=-1&&f!="www"&&window.location.hostname.indexOf(f)!=0&&(l+=document.location.protocol+"//"+f+"."+window.location.hostname),$WH.g_ajaxIshRequest(l+"/"+R[e][1]+"="+t+"&power"+u),U[e]&&!U[e][n]&&$WH.g_ajaxIshRequest(l+U[e].url)}function it(t,n,o,h,p){a&&a._fixTooltip&&(t=a._fixTooltip(t,r,i,a));var d=!1;if(!t)t=R[r][2]+" not found :(",n="inv_misc_questionmark",d=!0;else if(u!=null){if(u.forg&&$WH.g_reforgeStats[u.forg]){var v=$WH.g_reforgeStats[u.forg],m=[v.i1];for(var g in $WH.g_individualToGlobalStat)$WH.g_individualToGlobalStat[g]==m[0]&&m.push(g);var y;if((y=t.match(new RegExp("(<!--(stat|rtg)("+m.join("|")+")-->)[+-]?([0-9]+)")))&&!t.match(new RegExp("<!--(stat|rtg)"+v.i2+"-->[+-]?[0-9]+"))){var b=Math.floor(y[4]*v.v),w=LANG.traits[v.s2][0];v.i2==6?t=t.replace("<!--rs-->","<br />+"+b+" "+w):t=t.replace("<!--rr-->",$WH.sprintfa(LANG.tooltip_genericrating,w.toLowerCase(),v.i2,b)),t=t.replace(y[0],y[1]+(y[4]-b)),t=t.replace("<!--rf-->",'<span class="q2">'+$WH.sprintfa(LANG.tooltip_reforged,b,LANG.traits[v.s1][2],LANG.traits[v.s2][2])+"</span><br />")}}if(u.pcs&&u.pcs.length){var E=i.match(/^(\d+)/);E=E[1];var S=0;for(var g=0,T=u.pcs.length;g<T;++g){var y;if(y=t.match(new RegExp("<span><!--si([0-9]+:)*"+u.pcs[g]+'(:[0-9]+)*--><a href="/??item=(\\d+)">(.+?)</a></span>')))t=t.replace(y[0],'<span class="q8"><!--si'+u.pcs[g]+'--><a href="/item='+y[3]+'">'+($WH.isset("g_items")&&g_items[u.pcs[g]]?g_items[u.pcs[g]]["name_"+z[s]]:y[4])+"</a></span>"),++S}S>0&&(t=t.replace("(0/","("+S+"/"),t=t.replace(new RegExp("<span>\\(([0-"+S+"])\\)","g"),'<span class="q2">($1)'))}u.know&&u.know.length&&(t=$WH.g_setTooltipSpells(t,u.know,h)),u.lvl&&(t=$WH.g_setTooltipLevel(t,u.lvl,u.buff)),u.who&&u.when&&(t=t.replace("<table><tr><td><br />",'<table><tr><td><br /><span class="q2">'+$WH.sprintf(q.achievementcomplete,u.who,u.when.getMonth()+1,u.when.getDate(),u.when.getFullYear())+"</span><br /><br />"),t=t.replace(/class="q0"/g,'class="r3"'))}u.map&&o&&o.getMap&&(p=o.getMap()),c==1?($WH.Tooltip.setIcon(null),$WH.Tooltip.show(a,t,null,null,null,p)):($WH.Tooltip.setIcon(n),$WH.Tooltip.showAtXY(t,f,l,F,I,p)),e&&$WH.Tooltip.logo&&($WH.Tooltip.logo.style.display=x?"block":"none")}function st(e,t,n){if(r==e&&i==t&&s==n){it(q.loading);var o=R[e][0];o[t].timer=setTimeout(function(){ot.apply(this,[e,t,n])},3850)}}function ot(e,t,n){var o=R[e][0];o[t].status[n]=C,r==e&&i==t&&s==n&&it(q.noresponse)}function ut(e,t){return e+(t.rand?"r"+t.rand:"")+(t.ench?"e"+t.ench:"")+(t.gems?"g"+t.gems.join(","):"")+(t.sock?"s":"")}var e=$WH.wowheadRemote,t={applyto:3},n=document.getElementsByTagName("head")[0],r,i,s,o,u,a,f,l,c=0,h=!1,p={},d={},v={},m={},g={},y={},b={},w={},E={},S=1,x=1,T=0,N=1,C=2,k=3,L=4,A=5,O=1,M=2,_=3,D=5,P=6,H=10,B=101,j=100,F=15,I=15,q={loading:"Loading...",noresponse:"No response from server :(",achievementcomplete:"Achievement earned by $1 on $2/$3/$4"},R={1:[p,"npc","NPC"],2:[d,"object","Object"],3:[v,"item","Item"],5:[m,"quest","Quest"],6:[g,"spell","Spell"],10:[y,"achievement","Achievement"],100:[E,"profile","Profile"],101:[b,"transmog-set","Transmog Set"]},U={3:{url:"/data=item-scaling"},6:{url:"/data=spell-scaling"}},z={0:"enus",2:"frfr",3:"dede",6:"eses",7:"ruru",8:"ptbr",ptr:"ptr",beta:"beta"},W={wotlk:"www",cata:"www"};if(e)var X={getId:function(){return 0},getName:function(){return"enus"}};this.init=function(){e&&$WH.ae(n,$WH.ce("link",{type:"text/css",href:"//wowcss.zamimg.com/css/basic.css?5",rel:"stylesheet"})),$()},this.loadScales=function(e,t){var n=R[e][0];for(var r in z)if(t==r||!t&&!isNaN(r)){U[e][r]=1;for(var i in n)n[i].status[r]==A&&n[i].response[r]&&n[i].response[r]()}},this.register=function(e,t,n,o){var u=R[e][0];tt(e,t,n);if(U[e]&&!U[e][n]){u[t].status[n]=A,u[t].response[n]=this.register.bind(this,e,t,n,o);return}u[t].timer&&(clearTimeout(u[t].timer),u[t].timer=null),!$WH.wowheadRemote&&o.map&&(u[t].map==null&&(u[t].map=new Mapper({parent:$WH.ce("div"),zoom:3,zoomable:!1,buttons:!1})),u[t].map.update(o.map),delete o.map),$WH.cO(u[t],o);if(u[t].status[n]==N||u[t].status[n]==A)u[t][Z(n)]?u[t].status[n]=L:u[t].status[n]=k;r==e&&t==i&&s==n&&it(u[t][Z(n)],u[t].icon,u[t].map,u[t][et(n)],u[t][Z(n,2)])},this.registerNpc=function(e,t,n){this.register(O,e,t,n)},this.registerObject=function(e,t,n){this.register(M,e,t,n)},this.registerItem=function(e,t,n){this.register(_,e,t,n)},this.registerTransmogSet=function(e,t,n){this.register(B,e,t,n)},this.registerQuest=function(e,t,n){this.register(D,e,t,n)},this.registerSpell=function(e,t,n){this.register(P,e,t,n)},this.registerAchievement=function(e,t,n){this.register(H,e,t,n)},this.registerProfile=function(e,t,n){this.register(j,e,t,n)},this.request=function(e,t,n,r){r||(r={});var i=ut(t,r);tt(e,i,n),rt(e,t,n,1,r)},this.requestItem=function(e,t){this.request(_,e,X.getId(),t)},this.requestSpell=function(e){this.request(P,e,X.getId())},this.getStatus=function(e,t,n){var r=R[e][0];return r[t]!=null?r[t].status[n]:T},this.getItemStatus=function(e,t){this.getStatus(_,e,t)},this.getSpellStatus=function(e,t){this.getStatus(P,e,t)},e&&(this.set=function(e){$WH.cO(t,e)},this.showTooltip=function(e,t,n){J(e),it(t,n)},this.hideTooltip=function(){$WH.Tooltip.hide()},this.moveTooltip=function(e){G(e)}),V()};(function(e,t,n){function G(n,r,i){var o=t.createElement(n);return r&&(o.id=s+r),i&&(o.style.cssText=i),e(o)}function Y(e){var t=T.length,n=(U+e)%t;return n<0?t+n:n}function Z(e,t){return Math.round((/%/.test(e)?(t==="x"?N.width():N.height())/100:1)*parseInt(e,10))}function et(e){return B.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(e)}function tt(){var t,n=e.data(R,i);n==null?(B=e.extend({},r),console&&console.log&&console.log("Error: cboxElement missing settings object")):B=e.extend({},n);for(t in B)e.isFunction(B[t])&&t.slice(0,2)!=="on"&&(B[t]=B[t].call(R));B.rel=B.rel||R.rel||"nofollow",B.href=B.href||e(R).attr("href"),B.title=B.title||R.title,typeof B.href=="string"&&(B.href=e.trim(B.href))}function nt(t,n){e.event.trigger(t),n&&n.call(R)}function rt(){var e,t=s+"Slideshow_",n="click."+s,r,i,o;B.slideshow&&T[1]?(r=function(){M.text(B.slideshowStop).unbind(n).bind(f,function(){if(B.loop||T[U+1])e=setTimeout(J.next,B.slideshowSpeed)}).bind(a,function(){clearTimeout(e)}).one(n+" "+l,i),g.removeClass(t+"off").addClass(t+"on"),e=setTimeout(J.next,B.slideshowSpeed)},i=function(){clearTimeout(e),M.text(B.slideshowStart).unbind([f,a,l,n].join(" ")).one(n,function(){J.next(),r()}),g.removeClass(t+"on").addClass(t+"off")},B.slideshowAuto?r():i()):g.removeClass(t+"off "+t+"on")}function it(t){V||(R=t,tt(),T=e(R),U=0,B.rel!=="nofollow"&&(T=e("."+o).filter(function(){var t=e.data(this,i),n;return t&&(n=t.rel||this.rel),n===B.rel}),U=T.index(R),U===-1&&(T=T.add(R),U=T.length-1)),W||(W=X=!0,g.show(),B.returnFocus&&e(R).blur().one(c,function(){e(this).focus()}),m.css({opacity:+B.opacity,cursor:B.overlayClose?"pointer":"auto"}).show(),B.w=Z(B.initialWidth,"x"),B.h=Z(B.initialHeight,"y"),J.position(),d&&N.bind("resize."+v+" scroll."+v,function(){m.css({width:N.width(),height:N.height(),top:N.scrollTop(),left:N.scrollLeft()})}).trigger("resize."+v),nt(u,B.onOpen),H.add(A).hide(),P.html(B.close).show()),J.load(!0))}function st(){!g&&t.body&&(Q=!1,N=e(n),g=G(K).attr({id:i,"class":p?s+(d?"IE6":"IE"):""}).hide(),m=G(K,"Overlay",d?"position:absolute":"").hide(),y=G(K,"Wrapper"),b=G(K,"Content").append(C=G(K,"LoadedContent","width:0; height:0; overflow:hidden"),L=G(K,"LoadingOverlay").add(G(K,"LoadingGraphic")),A=G(K,"Title"),O=G(K,"Current"),_=G(K,"Next"),D=G(K,"Previous"),M=G(K,"Slideshow").bind(u,rt),P=G(K,"Close")),y.append(G(K).append(G(K,"TopLeft"),w=G(K,"TopCenter"),G(K,"TopRight")),G(K,!1,"clear:left").append(E=G(K,"MiddleLeft"),b,S=G(K,"MiddleRight")),G(K,!1,"clear:left").append(G(K,"BottomLeft"),x=G(K,"BottomCenter"),G(K,"BottomRight"))).find("div div").css({"float":"left"}),k=G(K,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),H=_.add(D).add(O).add(M),e(t.body).append(m,g.append(y,k)))}function ot(){return g?(Q||(Q=!0,j=w.height()+x.height()+b.outerHeight(!0)-b.height(),F=E.width()+S.width()+b.outerWidth(!0)-b.width(),I=C.outerHeight(!0),q=C.outerWidth(!0),g.css({"padding-bottom":j,"padding-right":F}),_.click(function(){J.next()}),D.click(function(){J.prev()}),P.click(function(){J.close()}),m.click(function(){B.overlayClose&&J.close()}),e(t).bind("keydown."+s,function(e){var t=e.keyCode;W&&B.escKey&&t===27&&(e.preventDefault(),J.close()),W&&B.arrowKey&&T[1]&&(t===37?(e.preventDefault(),D.click()):t===39&&(e.preventDefault(),_.click()))}),e("."+o,t).live("click",function(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),it(this))})),!0):!1}var r={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p=!e.support.opacity&&!e.support.style,d=p&&!n.XMLHttpRequest,v=s+"_IE6",m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J,K="div",Q;if(e.colorbox)return;e(st),J=e.fn[i]=e[i]=function(t,n){var s=this;t=t||{},st();if(ot()){if(!s[0]){if(s.selector)return s;s=e("<a/>"),t.open=!0}n&&(t.onComplete=n),s.each(function(){e.data(this,i,e.extend({},e.data(this,i)||r,t))}).addClass(o),(e.isFunction(t.open)&&t.open.call(s)||t.open)&&it(s[0])}return s},J.position=function(e,t){function a(e){w[0].style.width=x[0].style.width=b[0].style.width=e.style.width,b[0].style.height=E[0].style.height=S[0].style.height=e.style.height}var n=0,r=0,i=g.offset(),o,u;N.unbind("resize."+s),g.css({top:-9e4,left:-9e4}),o=N.scrollTop(),u=N.scrollLeft(),B.fixed&&!d?(i.top-=o,i.left-=u,g.css({position:"fixed"})):(n=o,r=u,g.css({position:"absolute"})),B.right!==!1?r+=Math.max(N.width()-B.w-q-F-Z(B.right,"x"),0):B.left!==!1?r+=Z(B.left,"x"):r+=Math.round(Math.max(N.width()-B.w-q-F,0)/2),B.bottom!==!1?n+=Math.max(N.height()-B.h-I-j-Z(B.bottom,"y"),0):B.top!==!1?n+=Z(B.top,"y"):n+=Math.round(Math.max(N.height()-B.h-I-j,0)/2),g.css({top:i.top,left:i.left}),e=g.width()===B.w+q&&g.height()===B.h+I?0:e||0,y[0].style.width=y[0].style.height="9999px",g.dequeue().animate({width:B.w+q,height:B.h+I,top:n,left:r},{duration:e,complete:function(){a(this),X=!1,y[0].style.width=B.w+q+F+"px",y[0].style.height=B.h+I+j+"px",B.reposition&&setTimeout(function(){N.bind("resize."+s,J.position)},1),t&&t()},step:function(){a(this)}})},J.resize=function(e){W&&(e=e||{},e.width&&(B.w=Z(e.width,"x")-q-F),e.innerWidth&&(B.w=Z(e.innerWidth,"x")),C.css({width:B.w}),e.height&&(B.h=Z(e.height,"y")-I-j),e.innerHeight&&(B.h=Z(e.innerHeight,"y")),!e.innerHeight&&!e.height&&(C.css({height:"auto"}),B.h=C.height()),C.css({height:B.h}),J.position(B.transition==="none"?0:B.speed))},J.prep=function(t){function o(){return B.w=B.w||C.width(),B.w=B.mw&&B.mw<B.w?B.mw:B.w,B.w}function u(){return B.h=B.h||C.height(),B.h=B.mh&&B.mh<B.h?B.mh:B.h,B.h}if(!W)return;var n,r=B.transition==="none"?0:B.speed;C.remove(),C=G(K,"LoadedContent").append(t),C.hide().appendTo(k.show()).css({width:o(),overflow:B.scrolling?"auto":"hidden"}).css({height:u()}).prependTo(b),k.hide(),e(z).css({"float":"none"}),d&&e("select").not(g.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(l,function(){this.style.visibility="inherit"}),n=function(){function y(){p&&g[0].style.removeAttribute("filter")}var t,n,o=T.length,u,a="frameBorder",l="allowTransparency",c,d,v,m;if(!W)return;c=function(){clearTimeout($),L.hide(),nt(f,B.onComplete)},p&&z&&C.fadeIn(100),A.html(B.title).add(C).show();if(o>1){typeof B.current=="string"&&O.html(B.current.replace("{current}",U+1).replace("{total}",o)).show(),_[B.loop||U<o-1?"show":"hide"]().html(B.next),D[B.loop||U?"show":"hide"]().html(B.previous),B.slideshow&&M.show();if(B.preloading){t=[Y(-1),Y(1)];while(n=T[t.pop()])m=e.data(n,i),m&&m.href?(d=m.href,e.isFunction(d)&&(d=d.call(n))):d=n.href,et(d)&&(v=new Image,v.src=d)}}else H.hide();B.iframe?(u=G("iframe")[0],a in u&&(u[a]=0),l in u&&(u[l]="true"),u.name=s+ +(new Date),B.fastIframe?c():e(u).one("load",c),u.src=B.href,B.scrolling||(u.scrolling="no"),e(u).addClass(s+"Iframe").appendTo(C).one(h,function(){u.src="//about:blank"})):c(),B.transition==="fade"?g.fadeTo(r,1,y):y()},B.transition==="fade"?g.fadeTo(r,0,function(){J.position(0,n)}):J.position(r,n)},J.load=function(t){var n,r,i=J.prep;X=!0,z=!1,R=T[U],t||tt(),nt(h),nt(a,B.onLoad),B.h=B.height?Z(B.height,"y")-I-j:B.innerHeight&&Z(B.innerHeight,"y"),B.w=B.width?Z(B.width,"x")-q-F:B.innerWidth&&Z(B.innerWidth,"x"),B.mw=B.w,B.mh=B.h,B.maxWidth&&(B.mw=Z(B.maxWidth,"x")-q-F,B.mw=B.w&&B.w<B.mw?B.w:B.mw),B.maxHeight&&(B.mh=Z(B.maxHeight,"y")-I-j,B.mh=B.h&&B.h<B.mh?B.h:B.mh),n=B.href,$=setTimeout(function(){L.show()},100),B.inline?(G(K).hide().insertBefore(e(n)[0]).one(h,function(){e(this).replaceWith(C.children())}),i(e(n))):B.iframe?i(" "):B.html?i(B.html):et(n)?(e(z=new Image).addClass(s+"Photo").error(function(){B.title=!1,i(G(K,"Error").html(B.imgError))}).load(function(){var e;z.onload=null,B.scalePhotos&&(r=function(){z.height-=z.height*e,z.width-=z.width*e},B.mw&&z.width>B.mw&&(e=(z.width-B.mw)/z.width,r()),B.mh&&z.height>B.mh&&(e=(z.height-B.mh)/z.height,r())),B.h&&(z.style.marginTop=Math.max(B.h-z.height,0)/2+"px"),T[1]&&(B.loop||T[U+1])&&(z.style.cursor="pointer",z.onclick=function(){J.next()}),p&&(z.style.msInterpolationMode="bicubic"),setTimeout(function(){i(z)},1)}),setTimeout(function(){z.src=n},1)):n&&k.load(n,B.data,function(t,n,r){i(n==="error"?G(K,"Error").html(B.xhrError):e(this).contents())})},J.next=function(){!X&&T[1]&&(B.loop||T[U+1])&&(U=Y(1),J.load())},J.prev=function(){!X&&T[1]&&(B.loop||U)&&(U=Y(-1),J.load())},J.close=function(){W&&!V&&(V=!0,W=!1,nt(l,B.onCleanup),N.unbind("."+s+" ."+v),m.fadeTo(200,0),g.stop().fadeTo(300,0,function(){g.add(m).css({opacity:1,cursor:"auto"}).hide(),nt(h),C.remove(),setTimeout(function(){V=!1,nt(c,B.onClosed)},1)}))},J.remove=function(){e([]).add(g).add(m).remove(),g=null,e("."+o).removeData(i).removeClass(o).die()},J.element=function(){return e(R)},J.settings=r})(jQuery,document,this),function(){$(function(){var e,t,n;return $("a[href*=#]").click(function(){if(location.hostname===this.hostname&&location.pathname===this.pathname)return $("html, body").animate({scrollTop:$(this.hash).offset().top-20},500)}),$("a[href$=png], *[rel=lightbox], *[rel=prettyPhoto], *[rel=colorbox]").colorbox(),n=function(){return $(this).css({background:"#333"})},t=function(){return $(this).css({background:"#0b0b0b"})},e=function(){var e,t;e=$(this),t=e.attr("title"),t||(t=e.attr("alt").replace(/\~(right|left|center)$/,"")),e.colorbox({href:e.attr("src"),title:t,width:"75%"});if(e.attr("alt").indexOf("~center")>0)return e.parent("p").css({textAlign:"center"})},$("#body p img").css({cursor:"pointer"}).hover(n,t).each(e)})}.call(this);