(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{OyCN:function(t,e,o){"use strict";var n=o("DZdY"),r=(o("q1tI"),o("9eSz")),i=o.n(r),a=o("AeFk"),c=Object(n.a)("section",{target:"e91yqhb0",label:"HeroContainer"})("width:100%;max-width:1300px;padding:25px 10px;h2{text-align:center;}.image{display:none;}@media (min-width: 500px){.quote{h2,p{font-size:2rem;}p{text-align:justify;}}}@media (min-width: 767px){display:flex;flex-direction:",(function(t){return t.reverse?"row-reverse":"row"}),";padding:0;.quote{width:60%;padding:50px 10px;h2,p{font-size:3.6rem;}h2{margin-bottom:50px;}}.image{display:block;width:40%;height:437px;}}");e.a=function(t){var e=t.title,o=t.quote,n=t.author,r=t.image.nodes[0].sharp.fluid,s="undefined"!=typeof window?window.location.pathname:"";return Object(a.b)(c,{reverse:"/blog"===s},Object(a.b)("div",{className:"quote"},Object(a.b)("h2",null,e),Object(a.b)("p",null,"”",o,"”"),Object(a.b)("p",{className:"author"},"- ",n)),Object(a.b)(i.a,{fluid:r,className:"image"}))}},RMHg:function(t,e,o){"use strict";var n=o("DZdY"),r=(o("q1tI"),o("Wbzz")),i=o("AeFk");var a=Object(n.a)(r.Link,{target:"epdv3hr0",label:"ProjectContainer"})({name:"625150",styles:"width:90vw;max-width:650px;height:125px;margin-bottom:10px;background-color:var(--black);color:var(--white);text-decoration:none;display:flex;align-items:center;justify-content:center;border-radius:25px;@media (min-width: 600px){width:47.5vw;height:190px;font-size:3rem;}"}),c=function(t){var e=t.text,o=t.link;return Object(i.b)(a,{to:o},e)},s=o("TLii");var l=Object(n.a)("section",{target:"e1ttmwnd0",label:"ProjectsContainer"})({name:"wvtvhf",styles:"padding:25px 0;display:flex;flex-direction:column;align-items:center;h2,.projects__container{margin-bottom:10px;}.projects__container{a{margin-bottom:10px;&:last-child{margin-bottom:0;}}}@media (min-width: 600px){h2{font-size:3.6rem;}.projects__container{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;grid-gap:10px;a:nth-of-type(1){grid-column:1/2;grid-row:1/3;height:400px;}a:nth-of-type(2){grid-column:2/3;grid-row:1/2;}a:nth-of-type(3){grid-column:2/3;grid-row:2/3;}}}"});e.a=function(){var t=Object(r.useStaticQuery)("1124938644").allDatoCmsProject.nodes,e="undefined"!=typeof window?window.location.pathname:"";return Object(i.b)(l,null,Object(i.b)("h2",null,"Proyectos destacados"),Object(i.b)("div",{className:"projects__container"},t.map((function(t,o){var n=t.titulo,r=t.slug;return Object(i.b)(c,{key:"Proyecto-"+o,text:n,link:"/"===e?"projects/"+r:r})}))),"/"===e&&Object(i.b)(s.a,{text:"ver más",color:"var(--black)",background:"var(--white)",link:!0,to:"/projects"}))}},TLii:function(t,e,o){"use strict";var n=o("DZdY"),r=(o("q1tI"),o("Wbzz")),i=o("AeFk"),a=Object(n.a)("button",{target:"e1v9z25b0",label:"ButtonContainer"})("width:150px;height:50px;display:flex;justify-content:center;align-items:center;font-family:var(--bold);background:transparent;border:2px solid ",(function(t){return t.color}),";position:relative;a{color:",(function(t){return t.color}),";text-decoration:none;text-transform:uppercase;span{position:relative;z-index:2;transition:color 0.5s;transition-delay:1.25s;}&:hover span{color:",(function(t){return t.background}),';}&::before{content:"";position:absolute;left:-20px;top:50%;transform:translateY(-50%);width:20px;height:2px;background:',(function(t){return t.color}),";box-shadow:5px -8px 0 ",(function(t){return t.color}),",5px 8px 0 ",(function(t){return t.color}),";transition:width 0.5s,left 0.5s,height 0.5s,box-shadow 0.5s;transition-delay:1s,0.5s,0s,0s;}&:hover::before{width:60%;height:100%;left:-2px;box-shadow:5px 0 0 ",(function(t){return t.color}),",5px 0 0 ",(function(t){return t.color}),';transition-delay:0s,0.5s,1s,1s;}&::after{content:"";position:absolute;right:-20px;top:50%;transform:translateY(-50%);width:20px;height:2px;background:',(function(t){return t.color}),";box-shadow:-5px -8px 0 ",(function(t){return t.color}),",-5px 8px 0 ",(function(t){return t.color}),";transition:width 0.5s,right 0.5s,height 0.5s,box-shadow 0.5s;transition-delay:1s,0.5s,0s,0s;}&:hover::after{width:60%;height:100%;right:-2px;box-shadow:-5px 0 0 ",(function(t){return t.color}),",-5px 0 0 ",(function(t){return t.color}),";transition-delay:0s,0.5s,1s,1s;}}@media (min-width: 600px){width:200px;height:80px;font-size:2.8rem;}");e.a=function(t){var e=t.text,o=t.color,n=t.background,c=t.to,s=void 0===c?"#":c,l=t.link,d=void 0!==l&&l;return Object(i.b)(a,{color:o,background:n},d?Object(i.b)(r.Link,{to:s},Object(i.b)("span",null," ",e)):e)}},hoZb:function(t,e,o){"use strict";o.r(e);o("q1tI");var n=o("Wbzz"),r=o("uSmJ"),i=o("OyCN"),a=o("RMHg"),c=o("AeFk");e.default=function(){var t=Object(n.useStaticQuery)("2757874882").data;return Object(c.b)(r.a,null,Object(c.b)(i.a,{title:"Proyectos",author:"Muhammad Ali",quote:"Para ser un campeón, tienes que creer que eres el mejor; si no lo eres, haz como si lo fueras.",image:t}),Object(c.b)(a.a,null))}}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-cf773253ac99abea249f.js.map