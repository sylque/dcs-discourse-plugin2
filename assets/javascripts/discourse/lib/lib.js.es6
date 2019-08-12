import { withPluginApi } from 'discourse/lib/plugin-api';import { Bellhop } from './bellhop';import { NotificationLevels } from 'discourse/lib/notification-levels';import { setDefaultHomepage } from 'discourse/lib/utilities';import SiteHeaderComponent from 'discourse/components/site-header';import TopicNavigation from 'discourse/components/topic-navigation';import Composer from 'discourse/models/composer';import ComposerController from 'discourse/controllers/composer';import ApplicationRoute from 'discourse/routes/application';var n=(...a)=>{var b="Docuss";b="undefined"!==typeof window?window.name.trim()||document.title.trim()||b:require(__dirname+"/package.json").name||b;b=b.substring(0,12);a=[`%c${b} %c- Docuss Error -`,"color:grey","color:red",...a];console.log(...a)};class p extends Error{constructor(a){super(a);this.name="DocussError"}}var q=a=>{throw new p(a);},r=(a,b)=>{if(!a)throw new p(`Assertion Failed${b?" - "+b:""}`);},t=a=>new Promise(b=>setTimeout(b,a));
function u(a,b,c,d){let e=h=>t(c).then(()=>a(h));try{return 0===b?Promise.reject(d):Promise.resolve(a(b)).then(h=>h||u(e,b-1))}catch(h){return Promise.reject(h)}}function v(a,b){let c=a.S.siteSettings.docuss_iframe_attributes;$(a.left).replaceWith(`
      <iframe id="dcs-left" width="0" min-width="0" frameborder="0"
          style="${a.left.style.cssText}" src="${b}" ${c}>
      </iframe>
    `);a.left=document.getElementById("dcs-left")}function w(a,b,c,d){a.la.animate?(a=a.la.animate([{left:b},{left:c}],{duration:200}),d&&(a.onfinish=d)):d&&d()}function x(a,b){w(a,"100%",1035<=window.innerWidth?"50%":"0%",b)}
function y(a,b){switch(a.pa){case null:switch(b){case 0:$("html").attr("dcs-layout",b);break;case 1:$("html").attr("dcs-layout",b);break;case 2:$("html").attr("dcs-layout",b);break;case 3:$("html").attr("dcs-layout",b)}break;case 0:switch(b){case 1:$("html").attr("dcs-layout",b);break;case 2:$("html").attr("dcs-layout",b);break;case 3:x(a,()=>{$("html").attr("dcs-layout",b)})}break;case 1:switch(b){case 0:$("html").attr("dcs-layout",b);break;case 2:$("html").attr("dcs-layout",b);break;case 3:$("html").attr("dcs-layout",
b)}break;case 2:switch(b){case 0:$("html").attr("dcs-layout",b);break;case 1:$("html").attr("dcs-layout",b);break;case 3:x(a,()=>{$("html").attr("dcs-layout",b)})}break;case 3:switch(b){case 0:$("html").attr("dcs-layout",b);w(a,1035<=window.innerWidth?"50%":"0%","100%");break;case 1:$("html").attr("dcs-layout",b);break;case 2:$("html").attr("dcs-layout",b),w(a,1035<=window.innerWidth?"50%":"0%","100%")}break;default:throw new p(void 0);}a.pa=b}
class z{constructor(a){this.S=a;this.left=document.getElementById("dcs-left");this.la=document.getElementById("dcs-ghost");this.pa=null}}function A(){$("html").toggleClass("dcs-wide",1035<=window.innerWidth)}window.addEventListener("resize",A);A();
function B(a){var b=a.lookup("controller:application");let c="dcs2";b.siteSettings.docuss_hide_sugg_topics&&(c+=" dcs-disable-sugg");b.siteSettings.docuss_hide_categories&&(c+=" dcs-disable-cats");b.siteSettings.docuss_hide_hamburger_menu&&(c+=" dcs-no-ham-menu");b.siteSettings.docuss_hide_tags&&(c+=" dcs-hide-tags");$("html").addClass(c);$("body").prepend('\n    <div id="dcs-ghost">\n      <div class="dcs-ghost-splitbar"></div>\n    </div>\n    <div id="dcs-container">\n      <div id="dcs-ios-wrapper">\n        <div id="dcs-left">\n        </div>\n      </div>\n      <div id="dcs-splitbar" onclick="onSplitbarClick()">\n        <div style="flex:1 0 0"></div>\n        <div id="dcs-splitbar-text">&gt;</div>\n        <div style="flex:1 0 0"></div>\n      </div>\n    </div>\n  ');
$("#main-outlet").wrap('<div id="dcs-right"></div>');var d=0,e=0;window.addEventListener("scroll",function(){$("#dcs-container:hover").length?window.scrollTo(d,e):(d=window.scrollX,e=window.scrollY)});a.g=new z(b);let h=a.lookup("router:main");window.onSplitbarClick=function(){let f=!a.g.S.get("showRight");h.transitionTo({queryParams:{showRight:f}})};(b=Discourse.User.current())&&b.admin&&$(document).keydown(function(f){65===f.keyCode&&f.altKey&&$("html").toggleClass("dcs-debug");66===f.keyCode&&
f.altKey&&y(a.g,1)})}var C=/[0-9A-Za-z_]+/g,D=null;function E(a){r("number"===typeof a.w&&1<=a.w);r("number"===typeof a.I&&1<=a.I);r("boolean"===typeof a.aa);D=a}function F(){r(D,"DcsTag not initialized")}function H(){F();return D}function I({a,f:b}){if(!J(a,D.w))throw new p(`Invalid pageName "${a}"`);if(b&&!J(b,D.I))throw new p(`Invalid triggerId "${b}"`);return b?`${"dcs"}-${a}-${b}`:`${"dcs"}-${a}`}
function K(a){F();if("dcs-comment"===a||"dcs-discuss"===a)return null;var b=a.split("-");if("dcs"!==b.shift())return null;a=b.shift();return J(a,D.w)?(b=b.shift())&&!J(b,D.I)?null:{a,f:b}:null}function J(a,b){F();return a&&a.length<=b&&a.match(C)&&(!D.aa||a===a.toLowerCase())}function L({c:a,L:b,P:c,M:d}){b.N.then(()=>{M({c:a,L:b,M:d,P:c})}).catch(e=>{c.startsWith("docuss")?y(a.g,0):y(a.g,1);throw e;})}
function M({c:a,L:b,P:c,M:d}){if(c.startsWith("topic.")){let e=a.lookup("route:topic").currentModel;u(()=>e.hasOwnProperty("tags"),15,200).then(()=>{N({c:a,L:b,P:c,M:d})},()=>{y(a.g,1)})}else N({c:a,L:b,P:c,M:d})}
function N({c:a,L:b,P:c,M:d}){if(c.startsWith("docuss"))d={b:0,a:(a.lookup("route:"+c).context||{}).page},O(b,d)||($("html").removeClass("dcs-tag dcs-topic dcs-comment dcs-discuss"),y(a.g,d.b));else{if("tags.intersection"===c){var e=a.lookup("route:tags.intersection"),h=e.currentModel;if("dcs-comment"===h.id||"dcs-discuss"===h.id)if(e=e.get("additionalTags")[0],e=K(e)){let {a:f,f:g}=e,k="dcs-comment"===h.id;h=k?"COMMENT":"DISCUSS";c=a.g.S.get("showRight")?3:2;if(O(b,{b:c,a:f,f:g,j:h}))return;d||(b=
k?"dcs-comment":"dcs-discuss",$("html").removeClass("dcs-tag dcs-topic dcs-comment dcs-discuss"),$("html").addClass(`dcs-tag ${b}`),P().then(()=>{{k&&$("#create-topic > .d-button-label").text("New Comment");let l=$("footer.topic-list-bottom");if(l.length){let m=`
      <div style="margin-left:12px">
        <p><i>No ${k?"comment":"topic"} yet</i></p>
      `;Discourse.User.current()||(m+="<p>(you need to log in before you can create one)</p>");m+="</div>";l.html(m);$(".tag-notifications-button").hide()}}}));y(a.g,c);return}}if(c.startsWith("topic.")){c=a.lookup("route:topic").currentModel;let f=(c.tags||[]).find(g=>K(g));if(f){let {a:g,f:k}=K(f),l=c.tags.includes("dcs-comment");h=l?"COMMENT":"DISCUSS";c=a.g.S.get("showRight")?3:2;if(O(b,{b:c,a:g,f:k,j:h}))return;d||(b=l?"dcs-comment":"dcs-discuss",$("html").removeClass("dcs-tag dcs-topic dcs-comment dcs-discuss"),
$("html").addClass(`dcs-topic ${b}`),P().then(()=>{l||$("#dcs-back").length||$('#main-outlet > .ember-view[class*="category-"]').prepend(`
      <div id="dcs-back" class="list-controls">
        <div class="container">
          <a style="line-height:28px" href="/tags/intersection/dcs-discuss/${f}">
            &#8630; Back to topic list
          </a>
        </div>
      </div>
    `)}));y(a.g,c);return}}$("html").removeClass("dcs-tag dcs-topic dcs-comment dcs-discuss");O(b,{b:1,pathname:location.pathname})||y(a.g,1)}}let P=()=>new Promise(a=>{Ember.run.schedule("afterRender",null,()=>a(void 0))});
function aa(a){return _.chain(a).reject(b=>b.deleted||"private_message"===b.archetype).map(b=>({Oa:b.topic_id,La:null===b.last_read_post_number&&(0!==b.notification_level&&!b.notification_level||b.notification_level>=NotificationLevels.sa),Qa:null!==b.last_read_post_number&&b.last_read_post_number<b.highest_post_number&&b.notification_level>=NotificationLevels.sa?b.highest_post_number-b.last_read_post_number:0})).reject(b=>!b.isNewTopic&&!b.unreadPostCount).value()}
function ba({J:a,ta:b,Z:c,i:d,origin:e}){Q.o.send("m2",{route:{layout:a.b,pageName:a.a,interactMode:a.j,triggerId:a.f,pathname:a.pathname},descr:b,counts:c,clientContext:d,origin:e})}
class ca{constructor(){this.o=new Bellhop;this.Y=this.C=null;this.o.on("connected",()=>{this.C&&(clearTimeout(this.C),this.C=null);this.Y&&this.Y()})}connect({ua:a,va:b,xa:c,timeout:d,za:e}){this.disconnect();this.Y=c;this.C=d?setTimeout(()=>{e&&e()},d):null;this.o.connect(a,b)}disconnect(){this.C&&(clearTimeout(this.C),this.C=null);this.o.disconnect()}isConnected(){return this.o.connected}ba(a){this.o.on("m4",b=>{a({J:R(b.data.route),mode:b.data.mode,i:b.data.clientContext})})}ca(a){this.o.on("m5",
b=>{a({hash:b.data.hash,mode:b.data.mode})})}ea(a){this.o.on("m6",b=>{a({D:b.data.category,T:b.data.discourseTitle,error:b.data.error})})}da(a){this.o.on("m7",b=>{b=b.data.map(c=>({src:R(c.src),s:R(c.dest)}));a(b)})}}let Q=new ca;function R(a){let b={};"layout"in a&&(b.b=a.layout);"pageName"in a&&(b.a=a.pageName);"interactMode"in a&&(b.j=a.interactMode);"triggerId"in a&&(b.f=a.triggerId);"pathname"in a&&(b.pathname=a.pathname);return b}
function da(a){let b={};"$schema"in a&&(b.Ca=a.$schema);"websiteName"in a&&(b.R=a.websiteName);"logo"in a&&(b.H={},"logoUrl"in a.logo&&(b.H.U=a.logo.logoUrl),"mobileLogoUrl"in a.logo&&(b.H.V=a.logo.mobileLogoUrl),"smallLogoUrl"in a.logo&&(b.H.X=a.logo.smallLogoUrl));"dcsTag"in a&&(b.G={},"maxPageNameLength"in a.dcsTag&&(b.G.w=a.dcsTag.maxPageNameLength),"maxTriggerIdLength"in a.dcsTag&&(b.G.I=a.dcsTag.maxTriggerIdLength),"forceLowercase"in a.dcsTag&&(b.G.aa=a.dcsTag.forceLowercase));"pages"in a&&
(b.u=a.pages.map(c=>{let d={};"name"in c&&(d.name=c.name);"url"in c&&(d.url=c.url);"needsProxy"in c&&(d.na=c.needsProxy);return d}));"webApp"in a&&(b.m={},"otherPagesPrefix"in a.webApp&&(b.m.A=a.webApp.otherPagesPrefix));"redirects"in a&&(b.O=a.redirects.map(c=>{let d={};"src"in c&&(d.src={},"pageName"in c.src&&(d.src.a=c.src.pageName),"layout"in c.src&&(d.src.b=c.src.layout),"interactMode"in c.src&&(d.src.j=c.src.interactMode),"triggerId"in c.src&&(d.src.f=c.src.triggerId),"pathname"in c.src&&(d.src.pathname=
c.src.pathname));"dest"in c&&(d.s={},"pageName"in c.dest&&(d.s.a=c.dest.pageName),"layout"in c.dest&&(d.s.b=c.dest.layout),"interactMode"in c.dest&&(d.s.j=c.dest.interactMode),"triggerId"in c.dest&&(d.s.f=c.dest.triggerId),"pathname"in c.dest&&(d.s.pathname=c.dest.pathname));return d}));"clientData"in a&&(b.clientData={},"decorator"in a.clientData&&(b.clientData.K={},"category"in a.clientData.decorator&&(b.clientData.K.D=a.clientData.decorator.category),"discourseTitle"in a.clientData.decorator&&
(b.clientData.K.T=a.clientData.decorator.discourseTitle),"pageProperties"in a.clientData.decorator&&(b.clientData.K.Ba=a.clientData.decorator.pageProperties.map(c=>{let d={};"pageNames"in c&&(d.oa=c.pageNames.slice(0));"category"in c&&(d.D=c.category);"discourseTitle"in c&&(d.T=c.discourseTitle);return d})),"injectCss"in a.clientData.decorator&&(b.clientData.K.Ha=a.clientData.decorator.injectCss.map(c=>{let d={};"pageNames"in c&&(d.oa=c.pageNames.slice(0));"css"in c&&(d.css=c.css.slice(0));return d})),
"injectTriggers"in a.clientData.decorator&&(b.clientData.K.wa=a.clientData.decorator.injectTriggers.map(c=>{let d={};"pageNames"in c&&(d.oa=c.pageNames.slice(0));"ids"in c&&(d.ma=c.ids.slice(0));"interactMode"in c&&(d.j=c.interactMode);"ui"in c&&(d.B={},"cssSelector"in c.ui&&(d.B.Fa=c.ui.cssSelector),"highlightable"in c.ui&&(d.B.Ga=c.ui.highlightable),"insertTextSpan"in c.ui&&(d.B.Ka=c.ui.insertTextSpan),"insertBalloon"in c.ui&&(d.B.Ia=c.ui.insertBalloon),"insertCountBadge"in c.ui&&(d.B.Ja=c.ui.insertCountBadge),
"subsection"in c.ui&&(d.B.ra={},"begin"in c.ui.subsection&&(d.B.ra.Da=c.ui.subsection.begin),"end"in c.ui.subsection&&(d.B.ra.end=c.ui.subsection.end)));"category"in c&&(d.D=c.category);"discourseTitle"in c&&(d.T=c.discourseTitle);return d}))));return b}
let ja=(a,b,c)=>{const d=a.map(e=>ea(e).then(h=>{fa(h,e);const f=da(h);try{ha(f,b,h.dcsTag,c)}catch(g){throw"string"===typeof g&&1<a.length&&(g=`In ${e} - ${g}`),g;}{let g=f.H;g&&(g.U=g.U&&(new URL(g.U,e)).href,g.V=g.V&&(new URL(g.V,e)).href,g.X=g.X&&(new URL(g.X,e)).href)}f.Aa=h;return f},()=>{throw`<p>Failed to load <a href="${e}" target="_blank">${e}</a></p>`+'<o>Possible causes:</p><ol><li>File is missing (click on the above url, this should open your file in a new tab) </li><li>File is hosted at a "https://" url and your Discourse forum is at a "http://" url (or the other way around)</li><li>File is not in json format (in the new tab that you\'ve just opened, does it look like JSON?)</li><li>File has not been validated (please check with the <a href="https://sylque.github.io/dcs-website-schema/public/validate.html" target="_blank">Docuss Validation Tool</a>)</li><li>File is blocked by an ad-blocker (try to disable any ad-blockers and refresh the page)</li><li>File is hosted on a server that doesn\'t support CORS (open the <a href="https://kb.mailster.co/how-can-i-open-the-browsers-console/" target="_blank">browser console</a> and look for some red text about "CORS policy")</li></ol>';
}));return Promise.all(d).then(e=>{ia(e);return e})};function fa(a,b){a.pages.forEach(c=>{c.url=(new URL(c.url,b)).href})}
function ha(a,b,c,d){E(a.G);let e="contains invalid characters or doesn't comply with dcsTag="+JSON.stringify(c);a.u.forEach(g=>{if(!J(g.name,D.w))throw`Page name "${g.name}" ${e}`;if(g.na&&!d)throw'Discourse setting "docuss proxy url" is required because a page has needsProxy=true';});a.O&&a.O.forEach(g=>{if(g=S(g))throw g;});if(a.m){if((c=a.m.A)&&!J(c,D.w-1))throw`Page name prefix "${c}" ${e}`;let g=(new URL(a.u[0].url)).origin;if(c=a.u.find(k=>(new URL(k.url)).origin!==g))throw`Invalid url "${c.url}": in a web app, all page urls should be of same origin`;
}if(a=a.clientData&&a.clientData.K){c=a.wa||[];var h=(a.Ba||[]).map(g=>g.D),f=c.map(g=>g.D);[a.D,...h,...f].forEach(g=>{if(g&&!b.includes(g))throw`Category "${g}" not found`;});c.forEach(g=>{g.ma.forEach(k=>{if("@GENERATE@"===k||"@GENERATE_FROM_HTML_ID@"===k){if(1!==g.ma.length)throw`Reserved trigger id "${k}" must be alone in field "trigger.ids"`;}else if(!J(k,D.I))throw`Trigger id "${k}" ${e}`;})})}}
function ia(a){let b=a[0].G;for(let h=1;h<a.length;++h){let f=a[h].G;Object.keys(b).forEach(g=>{if(b[g]!==f[g])throw`Fields dcsTag.${g} are not equal across websites`;})}let c={};a.forEach(h=>{if(c[h.R])throw`Duplicate website name "${h.R}" across websites`;c[h.R]=!0});let d=a.filter(h=>h.m).map(h=>h.m);1<d.length&&d.forEach(h=>{if(!h.A)throw"webApp.otherPagesPrefix must not be empty when there are several web apps";if(d.find(f=>f!==h&&f.A.startsWith(h.A)))throw"overlapping webApp.otherPagesPrefix across web apps";
});let e={};a.forEach(h=>{h.u.forEach(f=>{if(e[f.name])throw`Duplicate page name "${f.name}" (across websites or within same website)`;e[f.name]=!0;let g=d.find(k=>k!==h.m&&f.name.startsWith(k.A));if(g)throw`Page name "${f.name}" collides with page name prefix "${g.A}"`;})})}let ea=a=>new Promise((b,c)=>{$.getJSON(a).done(d=>b(d)).fail((d,e)=>{c(e)})});
function S(a){let b=Object.assign({},1===a.src.b||a.src.pathname?{b:1,pathname:"bla"}:2===a.src.b||3===a.src.b||a.src.j||a.src.f?{b:2,a:"a",j:"DISCUSS"}:{b:0,a:"a"},a.src);var c=T(b);if(c)return`Invalid redirect src=${JSON.stringify(a.src)} - ${c}`;let d=Object.assign({},a.s);Object.keys(d).forEach(e=>{"@SAME_AS_SRC@"===d[e]&&(d[e]=b[e])});if(c=T(d))return`Invalid redirect dest=${JSON.stringify(a.s)} - ${c}`}
function T(a){Object.keys(a).forEach(c=>void 0===a[c]&&delete a[c]);let b=1;switch(a.b){case 1:if(!a.pathname)return"Missing pathname";++b;break;case 2:case 3:if(!["COMMENT","DISCUSS"].includes(a.j))return"Missing or invalid interactMode";++b;if(a.f){if(!J(a.f,D.I))return"Invalid triggerId";++b}case 0:if(!a.a||!J(a.a,D.w))return"Missing or invalid pageName";++b;break;default:return"Missing or invalid layout"}if(Object.keys(a).length!==b)return"Too many arguments"}
function O(a,b){r(a.v);0!==b.b||b.a||(b.a=a.v[0].u[0].name);var c=T(b);c&&q(`Invalid route ${JSON.stringify(b)} - ${c}`);c=a.v.reduce((e,h)=>e.concat(h.O||[]),[]).concat(a.ja||[]);if(c=U({src:b,O:c}))return V(a,{J:c,mode:"REPLACE",i:a.i}),!0;a.F=b;if(1===b.b)return a.h||(a.h=a.v[0],$("html").addClass(`dcs-website-${a.h.R}`),a.h.H&&a.c.l.qa(a.h.H)),W(a),!1;let d=null;c=a.v.find(e=>{d=e.u.find(h=>h.name===b.a);return!!d||e.m&&b.a.startsWith(e.m.A)});if(!c)return X(a,"Page Not Found",`Unknown page "${b.a}".<br>`+
"Use the top left logo to come back to safety."),!1;if(c!==a.h){a.h&&$("html").removeClass(`dcs-website-${a.h.R}`);$("html").addClass(`dcs-website-${c.R}`);a.h=c;let e=Object.assign({},a.h.H,{href:a.h===a.v[0]?null:`/docuss/${a.h.u[0].name}`});a.c.l.qa(e);d=d||c.u[0]}if(!d)return W(a),!1;c=d.url;d.na&&(c=new URL(c),c.protocol=a.W.protocol,c.hostname+="."+a.W.hostname,a.W.port&&(c.port=a.W.port),c=c.href);c!==a.ka?(a.i=null,ka(a,{url:c,ya:()=>{W(a)}}),a.ka=c):W(a);return!1}
function X(a,b,c){Q.disconnect();a.ka=null;la().then(()=>{var d=a.c.g,e=`<h3>${b}</h3>${c}`;$(d.left).replaceWith(`    
      <div id="dcs-left" style="${d.left.style.cssText}">
        <div style="padding:20px">
          ${e}
        </div>
      </div>
    `);d.left=document.getElementById("dcs-left")});t(2E3).then(()=>{y(a.c.g,0)})}
function V(a,{J:b,mode:c,i:d}){let e=T(b);e&&q(`Invalid route ${JSON.stringify(b)} - ${e}`);if("PUSH"!==c&&"REPLACE"!==c)throw new p('setDiscourseRoute: missing or invalid argument "mode"');if(0===b.b)Y(a,`/docuss/${b.a}`,c,d);else if(1===b.b)Y(a,b.pathname,c,d);else{var {a:h,j:f,f:g}=b,k=I({a:h,f:g}),l=2===b.b?"?r=false":"";"DISCUSS"===f?Y(a,`/tags/intersection/dcs-discuss/${k}${l}`,c,d):Z(`/tags/${k}.json`).then(m=>{m=m.topic_list.topics;if(!m.length)return"not found";m=m.find(G=>G.tags.includes("dcs-comment"));
if(!m)throw new p("Error: no dcs-comment topic found in");Y(a,`/t/${m.Ma}/${m.id}${l}`,c,d);return"ok"},()=>"not found").then(m=>{"not found"===m&&Y(a,`/tags/intersection/dcs-comment/${k}${l}`,c,d)})}}function W(a){r(a.F);r(a.h);Q.isConnected()&&ba({J:a.F,ta:a.h.Aa,Z:a.h.Z,i:a.i,origin:location.origin});a.i=null}
function ka(a,{url:b,ya:c}){Q.disconnect();b=new URL(b);b.hash=location.hash;Discourse.User.current()&&b.searchParams.set("discourse-login",!0);v(a.c.g,b.href);Q.connect({ua:a.c.g.left,va:b.origin,xa:c,timeout:1E4,za:()=>{X(a,"Docuss Error: connection timeout",'Communication could not be established with the embedded website.<br />Please check that it includes one of the Docuss <a href="https://github.com/sylque/dcs-client" target="_blank">client libraries</a>.')}})}
function Y(a,b,c,d){let e=a.c.lookup("router:main");("PUSH"===c?e.transitionTo(b):e.replaceWith(b)).intent&&(a.i=d)}
class ma{constructor(a,b){this.c=b;this.ja=this.i=this.F=this.N=this.v=null;var c=a.SiteSettings.docuss_website_json_file;if(c)if(c=c.split("|").filter(e=>!e.startsWith("DISABLE")),c.length)if(a.SiteSettings.tagging_enabled){var d=a.SiteSettings.docuss_proxy_url;if(d)try{this.W=new URL(d)}catch(e){X(this,"Error in Discourse settings",'Invalid url in "docuss proxy url"');this.N=Promise.reject("Docuss error, see the home page");return}b=b.lookup("controller:application").site.categories.map(e=>e.name);
b=ja(c,b,d).then(e=>{E(e[0].G);F();var h=3+D.w+D.I+2;var f=a.SiteSettings.max_tag_length;if(h>f)throw`dcsTag=${JSON.stringify(H())} implies a max tag length of ${h}, which doesn't match Discourse setting "max tag length"=${f}`;h=H().aa;f=a.SiteSettings.force_lowercase_tags;if(h!==f)throw`dcsTag.forceLowercase=${h} doesn't match Discourse setting "force lowercase tags"=${f}`;return e}).catch(e=>{if("string"===typeof e)throw X(this,"Docuss - Error in website JSON file",e),"Docuss error, see the home page";
throw e;});c=Z("/tags.json").catch(e=>{"string"===typeof e&&X(this,"Docuss - Error loading tags",e);throw e;});this.N=Promise.all([b,c]).then(e=>{this.v=e[0];let h=e[1].tags;e=g=>{if(!h.find(k=>k.id===g))throw X(this,"Error in Docuss setup",`Missing required tag "${g}"`),"Docuss error - See the error message in the app";};e("dcs-comment");e("dcs-discuss");let f=h.reduce((g,k)=>{var l=k.id;k=k.count;if(0!==k&&(l=K(l))){const {a:m,f:G}=l;g.push({a:m,f:G,count:k})}return g},[]);this.v.forEach(g=>{let k=
g.u.map(m=>m.name),l=f.filter(m=>k.includes(m.a)||g.m&&m.a.startsWith(g.m.A));g.Z=na(l)})});Q.ba(this.ba.bind(this));Q.ca(this.ca.bind(this));Q.ea(this.ea.bind(this));Q.da(this.da.bind(this))}else X(this,"Error in Discourse settings",'"tagging enabled" must be set to true'),this.N=Promise.reject("Docuss error, see the home page");else X(this,"Error in Discourse settings",'All files in "docuss website json file" are disabled'),this.N=Promise.reject("Docuss error, see the home page");else X(this,"Error in Discourse settings",
'"docuss website json file" must be set'),this.N=Promise.reject("Docuss error, see the home page")}ba({J:a,mode:b,i:c}){V(this,{J:a,mode:b,i:c})}ca({hash:a,mode:b}){if(!a.startsWith("#"))throw new p(void 0);if("PUSH"!==b&&"REPLACE"!==b)throw new p(void 0);let c=this.c.lookup("location:discourse-location");"PUSH"===b?c.setURL(a):c.replaceURL(a)}ea(a){let {error:b,D:c,T:d}=a;if(b)n(b),X(this,b,"Use the top left logo to come back to safety.");else if(2===this.F.b||3===this.F.b){if(d){let e=oa(d);$(".dcs-title-prefix").remove();
$(".tag-show-heading").text(e).css({display:"inline-flex"});let h=this.c.lookup("router:main");u(()=>{if(!h.currentPath.startsWith("topic."))throw"bad route";const f=$(".fancy-title");return f.length&&f},15,200,"title not found").then(f=>{if("COMMENT"===this.F.j)f.text(e),f=$("#topic-title"),f.css("display","block"),$(".topic-map").length&&f.css("margin-top","50px");else{let g=this.c.lookup("controller:topic").get("model.title");f.html(`<span class="dcs-title-prefix">${e} | </span>${g}`)}},f=>{"bad route"!==
f&&n(f)})}if(c){a=this.c.lookup("controller:application").site.categories.find(h=>h.name===c);if(!a)throw new p(`Category "${c}" not found`);let e=this.c.lookup("controller:tags-show");e.set("category",a);e.set("canCreateTopicOnCategory",!0)}}}da(a){a.forEach(b=>{if(b=S(b))throw new p(b);});this.ja=a;(a=U({src:this.F,O:a}))&&V(this,{J:a,mode:"REPLACE",i:null})}}
let Z=a=>new Promise((b,c)=>{$.get(a,d=>b(d)).fail(()=>c(`get "${a}" failed`))}),la=()=>new Promise(a=>{Ember.run.schedule("afterRender",null,()=>a(void 0))});function U({src:a,O:b}){b=b.find(d=>0===Object.keys(d.src).filter(e=>{const h=d.src[e];return void 0===a[e]||void 0===h?!1:"string"===typeof h&&h.endsWith("*")?!a[e].startsWith(h.slice(0,-1)):h!==a[e]}).length);if(!b)return null;let c=Object.assign({},b.s);Object.keys(c).forEach(d=>{"@SAME_AS_SRC@"===c[d]&&(c[d]=a[d])});return c}
let pa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},oa=a=>a.replace(/[&<>"']/g,b=>pa[b]);function na(a){return a.map(b=>{let {a:c,f:d,count:e}=b;return{pageName:c,triggerId:d,count:e}})}let qa=()=>new Promise(a=>{Ember.run.schedule("afterRender",null,()=>a(void 0))});
var init=function(a,b){if(b.SiteSettings.docuss_enabled){SiteHeaderComponent.reopen({setTopic(){}});setDefaultHomepage("docuss");qa().then(()=>{B(a)});var c=new ma(b,a);a.lookup("controller:application").reopen({queryParams:{showRight:"r"},showRight:!0});var d=a.lookup("-view-registry:main");a.l={ga:null,ha:null,ia:null,fa:null,qa(f){a.l.ga=f&&f.U;a.l.ha=f&&f.V;a.l.ia=f&&f.X;a.l.fa=f&&f.href;f=$(".d-header").closest(".ember-view").attr("id");d[f].queueRerender()}};var e="",h=!0;withPluginApi("0.8.30",
f=>{f.reopenWidget("home-logo",{logoUrl(){return a.l.ga||this._super()},mobileLogoUrl(){return a.l.ha||this._super()},smallLogoUrl(){return a.l.ia||this._super()},href(){return a.l.fa||this._super()}});f.onAppEvent("page:changed",({["currentRouteName"]:g,["url"]:k})=>{if(k!==e){var l=k.split("?")[0]===e.split("?")[0];e=k;L({c:a,L:c,P:g,M:l});h&&a.lookup("controller:composer").shrink();h=!0}})});ComposerController.reopen({Ea:Ember.observer("model.composeState",function(){if(this.get("model.composeState")===
Composer.OPEN){var f=this.get("model"),g=f.tags||f.topic&&f.topic.tags,k=g&&g.find(l=>K(l));k&&(g=(f=f.topic)?`/t/${f.slug}/${f.id}?r=true`:`/tags/intersection/${g.includes("dcs-comment")?"dcs-comment":"dcs-discuss"}/${k}?r=true`,h=!1,a.lookup("router:main").transitionTo(g))}}),Na:Ember.observer("model.tags",function(){let f=this.get("model"),g=f&&f.tags,k=g&&g.find(l=>K(l));k&&g.includes("dcs-comment")&&(f.setProperties({title:`Docuss comments (${k})`}),setTimeout(()=>{$("#reply-control .save-or-cancel .d-button-label").text("Add Comment")},
0))})});ApplicationRoute.reopen({Pa:Ember.observer("topicTrackingState.messageCount",function(){var f=this.controllerFor("application").topicTrackingState.states;f=aa(f);f.length&&console.log("topicStateChanged: ",f)})});TopicNavigation.reopen({_performCheckSize(){if(this.element&&!this.isDestroying&&!this.isDestroyed){var f=this.get("info");if(f.get("topicProgressExpanded"))f.setProperties({renderTimeline:!0,renderAdminMenuButton:!0});else{var g=!this.site.mobileView;if(g){g=$("#main-outlet").width();
let k=document.documentElement.clientHeight;this.get("composerOpen")&&(k-=$("#reply-control").height());g=924<g&&520<k}f.setProperties({renderTimeline:g,renderAdminMenuButton:!g})}}}})}};export{init};
