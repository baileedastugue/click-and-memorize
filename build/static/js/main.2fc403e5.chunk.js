(this["webpackJsonpclicky-app"]=this["webpackJsonpclicky-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":0,"image":"https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIyMjh9&auto=format&fit=crop&w=800&q=60","alt":"plant with white background","clicked":false},{"id":1,"image":"https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","alt":"plant with white background","clicked":false},{"id":2,"image":"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","alt":"plant with white background","clicked":false},{"id":3,"image":"https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","alt":"plant with white background","clicked":false},{"id":4,"image":"https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","alt":"plant with white background","clicked":false},{"id":5,"image":"https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","alt":"plant with white background","clicked":false},{"id":6,"image":"https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","alt":"plant with white background","clicked":false}]')},,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(3),r=a.n(n);a(14);var o=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},l=a(4),s=a(5),u=a(8),h=a(7),d=a(1);a(15);var m=function(e){return c.a.createElement("div",{className:"img-container"},c.a.createElement("button",null,c.a.createElement("img",{id:e.id,alt:e.alt,src:e.image,"data-clicked":e.clicked,onClick:e.beenClicked})))},f=a(6),p=a.n(f);var g=function(e){return c.a.createElement("nav",{className:"navbar",style:p.a.nav},e.children)},b=function(e){return c.a.createElement("div",null,c.a.createElement("p",null,"Your Score: ",e.yourScore),c.a.createElement("p",null,"High Score: ",e.highScore))},y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={yourScore:0,highScore:0},e.handleIncrement=function(){e.setState({yourScore:e.state.yourScore+1}),e.state.yourScore>=e.state.highScore&&e.setState({highScore:e.state.highScore+1})},e.handleLoss=function(){e.setState({yourScore:0})},e.restartGame=function(){for(var t=0;t<d.length;t++)document.getElementById(t).setAttribute("data-clicked",!1);e.handleLoss()},e.shuffleImages=function(){for(var e=d.length-1;e>0;e--){var t=Math.floor(Math.random()*e),a=d[e];d[e]=d[t],d[t]=a}},e.beenClicked=function(t){"true"===t.target.getAttribute("data-clicked")?(console.log(t.target),console.log("you lost"),e.restartGame()):(t.target.setAttribute("data-clicked",!0),console.log(t.target.getAttribute("data-clicked",!0)),e.handleIncrement()),e.shuffleImages()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(o,null,c.a.createElement(g,null,c.a.createElement(b,{yourScore:this.state.yourScore,highScore:this.state.highScore})),d.map((function(t){return c.a.createElement(m,Object.assign({},t,{beenClicked:e.beenClicked}))})))}}]),a}(c.a.Component);var k=function(){return c.a.createElement(o,null,c.a.createElement(y,null))};r.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.2fc403e5.chunk.js.map