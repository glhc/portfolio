(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(n,e,t){n.exports=t(24)},17:function(n,e,t){},18:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(6),o=t.n(i),l=(t(17),t(18),t(2)),c=t(3),s=t(1),m=t.n(s);function d(){var n=Object(l.a)(["\n  border: solid transparent 1px;\n  width: 18rem;\n  word-wrap: break-word;\n  background-color: ",";\n  border-radius: .25rem;\n  display: flex;\n  flex-direction: column;\n  background-clip: border-box;\n  min-width: 0;\n  margin: 10px;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: left;\n\n  .image-holder {\n    height: 180px;\n    background-color: ",";\n    width: 100%;\n    border-top-left-radius: calc(.25rem - 1px);\n    border-top-right-radius: calc(.25rem - 1px);\n    overflow: none;\n\n    .no-image {\n      margin-top: 4rem;\n      margin-left: 4rem;\n      display: inline-block;\n      text-align: center;\n      justify-self: center;\n    }\n  }\n\n  .card-body {\n    flex: 1 1 auto;\n    padding: 1.25rem;\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  .card-title {\n    margin-bottom: .75rem;\n    font-size: 1.125rem;\n    text-anchor: middle;\n  }\n\n  .card-button {\n    border-radius: .25rem;\n    background-color: ",";\n    border: solid transparent 1px;\n    line-height: 1.5rem;\n    text-align: center;\n    vertical-align: middle;\n    display: inline-block;\n    padding: .375rem .75rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    user-select: none;\n    text-decoration: none;\n    color: ",";\n    font-weight: 400;\n\n  }\n\n  .card-text {\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    margin-top: 0;\n    margin-bottom: 1.5rem;\n\n    @media (min-width: 576px) {\n      height: 5rem;\n    }\n  }\n\n  .card:hover {\n    border: solid red 2px;\n    \n    .card-text {\n      height: unset;\n    }\n  }\n\n  .card-button-container {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-content: space-between;\n  }\n\n  \n\n  .card-button:hover {\n    background-color: ",";\n  }\n"]);return d=function(){return n},n}var u=c.a.article(d(),m.a.base02,m.a.base01,m.a.violet,m.a.base2,m.a.orange);function p(n){return r.a.createElement(u,{className:"card"},r.a.createElement("div",{className:"image-holder"},n.imageUrl?r.a.createElement("img",{src:n.imageUrl,alt:"screenshot of the project"}):r.a.createElement("h3",{className:"no-image"},"No Image Found")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},n.title&&n.title),r.a.createElement("p",{className:"card-text"},n.description?n.description:"la la lalala lal al al al lala lal al la la  la aala"),r.a.createElement("div",{className:"card-button-container"},n.siteUrl&&r.a.createElement("a",{className:"card-button live",href:n.siteUrl},"Visit Site"),n.codeUrl&&r.a.createElement("a",{className:"card-button code",href:n.codeUrl},"View Code"))))}var g=[{title:"Pathfinder",description:"An algorithm visualiser that solves generated graphs using algorithms like A*, Djikstra's and more. lalalalalallalalalalallalzla apples",siteUrl:"https://glhc.github.io/pathfinder",codeUrl:"https://github.com/pathfinder"},{title:"GA_Chat",description:"A social media messinging board that was built with React and Ruby on Rails.",codeUrl:"https://github.com/glhc/ga_chat"},{title:"RecipeDB",description:"Suggests recipes based on the recipes that you have at hand.",codeUrl:"https://github.com/glhc/ga_chat"},{title:"To-Do List",description:"A stylised, responsive to-do application which can be published to Heroku.",siteUrl:"https://glhc.github.io/todo",codeUrl:"https://github.com/glhc/todo"}];function h(){var n=Object(l.a)(["\n\n  .card-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    justify-content: center;\n\n    @media (min-width: 576px) {\n      align-items: flex-start;\n      align-content: flex-start;\n      justify-content: flex-start;\n      padding-left: 3rem;\n    }\n\n  }\n\n\n  .projects-section-title {\n    text-align: center;\n    font-size: 2rem;\n\n    @media (min-width: 576px){\n      text-align: left;\n      margin-left: 5rem;\n      margin-bottom: 2rem;\n    }\n  }\n"]);return h=function(){return n},n}var f=c.a.section(h());function b(){var n=g.map((function(n,e){return r.a.createElement(p,{title:n.title,description:n.description,siteUrl:n.siteUrl,codeUrl:n.codeUrl,key:e})}));return r.a.createElement(f,{className:"portfolio"},r.a.createElement("h2",{className:"projects-section-title"},"Projects"),r.a.createElement("div",{className:"card-container"},n))}function w(){var n=Object(l.a)(["\n  position: sticky;\n  top: 0;\n  padding-top: 8px;\n  font-size: 1.9rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  ion-icon {\n    margin-left: 0.4rem;\n    margin-right: 0.4rem;\n    cursor: pointer;\n  }\n\n  @media (min-width: 576px) {\n    justify-content: flex-end;\n\n    .social-buttons {\n      margin-right: 3rem;\n    }\n  }\n"]);return w=function(){return n},n}var x=c.a.header(w());function v(){return r.a.createElement(x,null,r.a.createElement("div",{className:"social-buttons"},r.a.createElement("ion-icon",{name:"logo-github",onClick:function(){window.open("https://github.com/glhc")}}),r.a.createElement("ion-icon",{name:"logo-twitter",onClick:function(){window.open("https://twitter.com/glhc_")}}),r.a.createElement("ion-icon",{name:"logo-linkedin",onClick:function(){window.open("https://linkedin.com/patrickahorne")}}),r.a.createElement("ion-icon",{name:"mail",onClick:function(){window.location.href="mailto:patrickahorne@gmail.com"}})),r.a.createElement("div",{className:"spacer-right"}))}function E(){var n=Object(l.a)(["\n  \n"]);return E=function(){return n},n}c.a.section(E());t(23);function k(){var n=Object(l.a)(['\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    \n    font-family: "Spartan";\n    font-size: 2rem;\n    font-weight: extra-bold;\n\n    grid-template-rows: 3fr 1fr 1fr 3fr;\n    \n    .text {\n      display: inherit;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      flex-grow: 100;\n    }\n\n    /* Put the sentences in the middle */\n    p {\n      display: flex;\n    }\n    p:nth-child(1) {\n      grid-row: 2 / 3;\n      /* fix name not respecting leading space character */\n    }\n    p:nth-child(2) {\n      grid-row: 3 / 4;\n    }\n\n    button {\n      background-color: $base03;\n      border: solid '," 2px;\n      border-radius: 1px;\n      font-size: 20px;\n      font-weight: 400;\n      color: ",";\n\n\n      display: flex;\n      flex-direction: row;\n      align-self: center;\n      justify-self: end;\n\n      i {\n        color: ",";\n        font-size: 33px;\n      }\n      \n    }\n\n    button:focus {\n      outline: none;\n    }\n\n    margin-bottom: 10px;\n\n  #down-arrow {\n    color: ",";\n    font-size: 4rem;\n    animation-duration: 1.8s;\n    position: absolute;\n    bottom: 1rem;\n  }\n\n  .accent {\n    color: ",";\n  }\n\n  ion-icon {\n    color: $base01;\n\n  }\n"]);return k=function(){return n},n}var y=c.a.section(k(),m.a.magenta,m.a.magenta,m.a.magenta,m.a.magenta,m.a.magenta);function N(){return r.a.createElement(y,null,r.a.createElement("section",{className:"landing"},r.a.createElement("article",{className:"text"},r.a.createElement("div",null,"Hi, I'm ",r.a.createElement("wbr",null),r.a.createElement("span",{className:"accent",id:"name"},"Patrick Horne"),".",r.a.createElement("wbr",null)),"I'm a full-stack web developer.")),r.a.createElement("i",{className:"material-icons animated infinite bounce",id:"down-arrow"},"keyboard_arrow_down"))}var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(N,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.be93c6a5.chunk.js.map