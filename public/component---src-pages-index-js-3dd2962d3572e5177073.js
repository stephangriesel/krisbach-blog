(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);a(49);var n=a(0),r=a.n(n),i=a(147),o=(a(140),function(e){var t=e.post;return r.a.createElement("article",null,r.a.createElement("h3",null,t.frontmatter.title),r.a.createElement("span",null,t.frontmatter.date),r.a.createElement("p",null,t.excerpt))}),c=a(146);a.d(t,"query",function(){return u});i.a.div.withConfig({displayName:"pages__LayoutWrapper",componentId:"sc-6kvjaa-0"})(["background:#000000;margin-bottom:1.45rem;text-align:center;h1{img{height:200px;}}"]),t.default=function(e){var t=e.data;return r.a.createElement(c.a,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(o,{key:t.id,post:t})}))};var u="918502205"},140:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(139),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(141),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,t,a){var n;e.exports=(n=a(143))&&n.default||n},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Kris Bach Blog"}}}}},143:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(48),u=a(2),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},144:function(e,t,a){e.exports=a.p+"static/logo-8085e69024fd6c9aa8a6ad3c6a7ac288.png"},145:function(e,t,a){},146:function(e,t,a){"use strict";var n=a(142),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(148),l=a.n(u),s=a(140),d=a(147),m=a(144),p=a.n(m),f=d.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["background:#000000;margin-bottom:1.45rem;text-align:center;h1{img{height:200px;}}"]),g=function(e){e.siteTitle;return i.a.createElement(f,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textTransform:"uppercase"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},i.a.createElement("img",{src:p.a,alt:"Kris Bach Logo"})))))},h=(a(145),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,color:"#FFFFFF"}},t))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-index-js-3dd2962d3572e5177073.js.map