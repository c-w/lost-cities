(this["webpackJsonplost-cities"]=this["webpackJsonplost-cities"]||[]).push([[0],{107:function(e,t,a){e.exports=a(136)},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),l=a(89),i=a.n(l),s=a(96),u=a(97),m=a(98),d=a(99),p=a(100),y=a(101),h=a(102),g=a(45),f=a(23),v=a(17),b=a(29),E=a(31),O=a(32),S=a(24),j=a.n(S),k=a(184),C=a(19),P=a(20),w=a(90),R=a.n(w),N=a(40),A=a.n(N),x=a(141),T=a(171),W=a(175),D=a(174),I=a(170),B=a(172),L=a(173),U=a(142),F=a(21),G=a(169),J=A()((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));var $=function(e){var t=e.onClick,a=e.label,n=e.icon,o=J();return r.a.createElement(G.a,{color:"primary","aria-label":a,className:o.fab,onClick:t},r.a.createElement(F.a,{icon:n}))},H=a(35),M=a(91),Z=a.n(M),q=a(71),z=a.n(q),K=a(72),Q=a.n(K),V=a(69),X=a.n(V),Y=a(70),_=a.n(Y),ee=a(92),te=a.n(ee),ae=a(188),ne=a(9),re="user-astronaut",oe=[-1,-2,-3];function ce(e){return-1!==oe.indexOf(e)}var le=[].concat(oe,[2,3,4,5,6,7,8,9,10]),ie=[te.a[800],z.a[500],X.a[500],Q.a[500],_.a[500]];var se=Object(ae.a)({id:"game",initial:"round1Player1",context:{gameRound:1,activePlayer:re,player1Scores:[],player2Scores:[]},states:{round1Player1:{entry:["setRound1","setPlayer1"],on:{DONE:{target:"round1Player2",actions:["setPlayer1Score"]}}},round1Player2:{entry:["setRound1","setPlayer2"],on:{DONE:{target:"round2Player1",actions:["setPlayer2Score"]}}},round2Player1:{entry:["setRound2","setPlayer1"],on:{DONE:{target:"round2Player2",actions:["setPlayer1Score"]}}},round2Player2:{entry:["setRound2","setPlayer2"],on:{DONE:{target:"round3Player1",actions:["setPlayer2Score"]}}},round3Player1:{entry:["setRound3","setPlayer1"],on:{DONE:{target:"round3Player2",actions:["setPlayer1Score"]}}},round3Player2:{entry:["setRound3","setPlayer2"],on:{DONE:{target:"highscore",actions:["setPlayer2Score"]}}},highscore:{entry:Object(ne.b)({gameRound:null,activePlayer:null}),exit:Object(ne.b)({player1Scores:[],player2Scores:[]}),on:{RESTART:{target:"round1Player1"}}}}},{actions:{setRound1:Object(ne.b)({gameRound:1}),setRound2:Object(ne.b)({gameRound:2}),setRound3:Object(ne.b)({gameRound:3}),setPlayer1:Object(ne.b)({activePlayer:re}),setPlayer2:Object(ne.b)({activePlayer:"user-ninja"}),setPlayer1Score:Object(ne.b)({player1Scores:function(e,t){return[].concat(Object(H.a)(e.player1Scores),[t.payload])}}),setPlayer2Score:Object(ne.b)({player2Scores:function(e,t){return[].concat(Object(H.a)(e.player2Scores),[t.payload])}})}}),ue={winner:"Winner",label:"Label",player1:"Player 1",player2:"Player 2",round:"Round {0}",total:"Total",restart:"Restart",investment:"Investment",clickToStart:"Click to start expedition",score:"Score: {0}",done:"Done",lostCities:"Lost Cities",player1Score:"Player 1 score",player2Score:"Player 2 score",activePlayer:"Active player"},me=A()((function(e){return{winnerIcon:{paddingLeft:e.spacing(1),color:"#D4AF37"},totalRow:{fontWeight:e.typography.fontWeightBold}}}));var de=function(e){var t=e.player1Scores,a=e.player2Scores,o=e.onActionClick,c=me(),l=j()(t),i=j()(a),s=r.a.createElement(F.a,{className:c.winnerIcon,icon:"trophy","aria-label":ue.winner});return r.a.createElement(n.Fragment,null,r.a.createElement(I.a,{component:x.a},r.a.createElement(T.a,null,r.a.createElement(B.a,null,r.a.createElement(L.a,null,r.a.createElement(D.a,{align:"center"},r.a.createElement(U.a,{variant:"srOnly"},ue.label)),r.a.createElement(D.a,{align:"center"},r.a.createElement(F.a,{icon:re,"aria-label":ue.player1}),l>i&&s),r.a.createElement(D.a,{align:"center"},r.a.createElement(F.a,{icon:"user-ninja","aria-label":ue.player2}),i>l&&s))),r.a.createElement(W.a,null,R()(t,a).map((function(e,t){var a=Object(P.a)(e,2),n=a[0],o=a[1];return r.a.createElement(L.a,{key:t},r.a.createElement(D.a,{align:"center"},ue.round.format(t+1)),r.a.createElement(D.a,{align:"center"},n),r.a.createElement(D.a,{align:"center"},o))})),r.a.createElement(L.a,null,r.a.createElement(D.a,{className:c.totalRow,align:"center"},ue.total),r.a.createElement(D.a,{className:c.totalRow,align:"center"},l),r.a.createElement(D.a,{className:c.totalRow,align:"center"},i))))),r.a.createElement($,{onClick:o,icon:"redo",label:ue.restart}))},pe=a(18),ye=a(93),he=a(73),ge=a.n(he),fe=a(94),ve=a.n(fe),be=a(185),Ee=a(179),Oe=a(178),Se=a(187),je=a(177),ke=a(176),Ce=a(180),Pe=a(4),we=a(186),Re=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={checked:!1},a.onChange=function(e){var t=a.props,n=t.onChange,r=t.data,o=e.target.checked;a.setState({checked:o},(function(){return n({checked:o,data:r})}))},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.onChange,e.data,Object(Pe.a)(e,["onChange","data"])),a=this.state.checked;return r.a.createElement(we.a,Object.assign({onChange:this.onChange,checked:a},t))}}]),t}(n.PureComponent),Ne=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).onChange=function(e){var t=e.data,n=e.checked,r=a.props.onChange,o=Object(ye.a)({},a.state);o[t]=n;var c=Object.entries(o).filter((function(e){var t=Object(P.a)(e,2);t[0];return t[1]})).map((function(e){var t=Object(P.a)(e,2),a=t[0];t[1];return parseInt(a,10)}));a.setState(o,(function(){return r(function(e){if(0===e.length)return 0;var t=Z()(e,ce),a=Object(P.a)(t,2),n=a[0],r=a[1];return(j()(r)-20)*(n.length+1)+(e.length>=8?20:0)}(c))}))},a.state=ge()(le.map((function(e){return[e,!1]}))),a.ColorCheckbox=ve()({root:{color:e.color,"&$checked":{color:e.color}},checked:{}})((function(e){return r.a.createElement(Re,Object.assign({color:"default"},e))})),a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.props.color;return r.a.createElement(Se.a,{component:"fieldset",style:{width:"100%"}},r.a.createElement(ke.a,null,le.map((function(a){return r.a.createElement(je.a,{key:a,control:r.a.createElement(e.ColorCheckbox,{data:a,onChange:e.onChange}),label:r.a.createElement("div",{style:{color:t}},ce(a)?r.a.createElement(F.a,{icon:"handshake","aria-label":ue.investment}):r.a.createElement(U.a,null,a))})}))))}}]),t}(n.PureComponent),Ae=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={score:null},a.onChange=function(e){var t=a.props,n=t.color,r=t.onChange;a.setState({score:e},(function(){return r({color:n,score:e})}))},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.color,t=this.state.score;return r.a.createElement(be.a,null,r.a.createElement(Oe.a,null,r.a.createElement(U.a,{style:{color:e}},r.a.createElement(F.a,{icon:"compass"}),"\xa0",r.a.createElement(U.a,{variant:"body1",component:"span"},null==t?ue.clickToStart:ue.score.format(t)))),r.a.createElement(Ee.a,null,r.a.createElement(Ne,{color:e,onChange:this.onChange})))}}]),t}(n.PureComponent),xe=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state=ge()(ie.map((function(e){return[e,0]}))),a.onScoreChange=function(e){var t=e.color,n=e.score;return a.setState(Object(pe.a)({},t,n))},a.onActionClick=function(){return a.props.onActionClick(j()(Object.values(a.state)))},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{padding:"".concat(16,"px")}},r.a.createElement(Ce.a,{container:!0,spacing:2},ie.map((function(t){return r.a.createElement(Ce.a,{key:t,item:!0,xs:12,sm:6,lg:!0},r.a.createElement(Ae,{color:t,onChange:e.onScoreChange}))})))),r.a.createElement($,{onClick:this.onActionClick,icon:"check",label:ue.done}))}}]),t}(n.PureComponent),Te=a(182),We=a(181),De=a(143),Ie=a(183),Be=A()((function(e){return{appBar:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},title:{flexGrow:1},gameRound:{flexGrow:1}}}));function Le(e){var t=e.className;return r.a.createElement(U.a,{variant:"h6",component:"h1",className:t},ue.lostCities)}function Ue(e){var t=e.className,a=e.gameRound;return r.a.createElement(U.a,{variant:"subtitle1",component:"span",className:t},ue.round.format(a))}function Fe(e){var t=e.score,a=e.avatar,n=e.active,o=e.label;return r.a.createElement(We.a,{badgeContent:t,color:"secondary","aria-label":o,showZero:!0,max:999,overlap:"circle"},r.a.createElement(De.a,{color:"inherit",disabled:!n,"aria-label":n?ue.activePlayer:null},r.a.createElement(F.a,{icon:a})))}var Ge=function(e){var t=e.gameRound,a=e.player1Score,o=e.player2Score,c=e.activePlayer,l=Be();return r.a.createElement(Te.a,{position:"sticky",className:l.appBar},r.a.createElement(Ie.a,null,r.a.createElement(Le,{className:l.title,gameRound:t}),null!=t&&r.a.createElement(n.Fragment,null,r.a.createElement(Ue,{className:l.gameRound,gameRound:t}),r.a.createElement(Fe,{label:ue.player1Score,score:a,avatar:re,active:c===re}),r.a.createElement(Fe,{label:ue.player2Score,score:o,avatar:"user-ninja",active:"user-ninja"===c}))))},Je="game-state-machine",$e=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={current:se.initialState},a.service=Object(k.a)(se).onTransition((function(e){a.setState({current:e});try{localStorage.setItem(Je,JSON.stringify(e))}catch(t){console.error("LocalStorage not available",t)}})),a.onScorerClick=function(e){return a.service.send({type:"DONE",payload:e})},a.onGameEndClick=function(){return a.service.send({type:"RESTART"})},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem(Je)),t=C.a.create(e||se.initialState),a=se.resolveState(t);this.service.start(a)}},{key:"componentWillUnmount",value:function(){this.service.stop()}},{key:"render",value:function(){var e=this.state.current,t=e.context,a=t.activePlayer,o=t.gameRound,c=t.player1Scores,l=t.player2Scores;return r.a.createElement(n.Fragment,null,r.a.createElement(Ge,{gameRound:o,player1Score:j()(c),player2Score:j()(l),activePlayer:a}),e.matches("highscore")?r.a.createElement(de,{player1Scores:c,player2Scores:l,onActionClick:this.onGameEndClick}):r.a.createElement(xe,{key:e.value,onActionClick:this.onScorerClick}))}}]),t}(n.PureComponent),He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(135);i.a.extend(String.prototype,{}),g.b.add(s.faCheck,u.faCompass,m.faHandshake,d.faRedo,p.faTrophy,y.faUserAstronaut,h.faUserNinja),c.a.render(r.a.createElement($e,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lost-cities",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/lost-cities","/service-worker.js");He?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Me(t,e)}))}}()}},[[107,1,2]]]);
//# sourceMappingURL=main.331256e8.chunk.js.map