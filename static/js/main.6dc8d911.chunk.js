(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{40:function(e,t,n){e.exports=n(69)},45:function(e,t,n){},47:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(30),c=n.n(o),i=(n(45),n(20)),l=n.n(i),s=n(31),u=n(12),m=n(13),h=n(19),d=n(17),v=(n(47),n(87)),p=n(89),f=n(90),E=n(91),b=(Object(v.a)((function(e){return{textAlign:"right"}})),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{position:"relative"},r.a.createElement(f.a,null,r.a.createElement(E.a,{variant:"h6"},r.a.createElement("h3",null,"Covid19 India live"),r.a.createElement("p",null,"created by: Aniket Shetye  ",r.a.createElement("br",null),"Api credits: covid19india.org")))))}}]),n}(a.Component)),g=n(33),y=n.n(g),j=n(92),w=n(93),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={states:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.a.get("https://api.covid19india.org/data.json").then((function(e){console.log(e),t.setState({states:e.data.statewise})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{class:"content"},r.a.createElement(b,null),this.state.states.map((function(e){return r.a.createElement(j.a,{class:"jumbo",style:{textAlign:"center"}},r.a.createElement(w.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("b",null,e.state)),r.a.createElement(E.a,{variant:"h5",component:"h2"},"Confirmed:",e.confirmed),r.a.createElement(E.a,{variant:"h5",component:"h2"},"Recovered:",e.recovered),r.a.createElement(E.a,{variant:"h5",component:"h2"},"Deaths:",e.deaths)))})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6dc8d911.chunk.js.map