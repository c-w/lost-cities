(this["webpackJsonplost-cities"]=this["webpackJsonplost-cities"]||[]).push([[0],{107:function(e,t,a){e.exports=a(136)},135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),l=a(89),i=a.n(l),s=a(96),u=a(97),m=a(98),d=a(99),p=a(100),y=a(101),h=a(102),f=a(45),g=a(23),v=a(17),b=a(29),E=a(31),O=a(32),j=a(24),k=a.n(j),C=a(184),S=a(20),P=a(90),w=a.n(P),R=a(40),N=a.n(R),A=a(141),x=a(171),T=a(175),W=a(174),D=a(170),B=a(172),U=a(173),F=a(142),I=a(21),L=a(169),G=N()((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));var J=function(e){var t=e.onClick,a=e.label,n=e.icon,o=G();return r.a.createElement(L.a,{color:"primary","aria-label":a,className:o.fab,onClick:t},r.a.createElement(I.a,{icon:n}))},$=a(35),H=a(91),M=a.n(H),Z=a(71),q=a.n(Z),z=a(72),K=a.n(z),Q=a(69),V=a.n(Q),X=a(70),Y=a.n(X),_=a(92),ee=a.n(_),te=a(188),ae=a(9),ne="user-astronaut",re=[-1,-2,-3];function oe(e){return-1!==re.indexOf(e)}var ce=[].concat(re,[2,3,4,5,6,7,8,9,10]),le=[ee.a[800],q.a[500],V.a[500],K.a[500],Y.a[500]];var ie=Object(te.a)({id:"game",initial:"round1Player1",context:{gameRound:1,activePlayer:ne,player1Scores:[],player2Scores:[]},states:{round1Player1:{entry:["setRound1","setPlayer1"],on:{DONE:{target:"round1Player2",actions:["setPlayer1Score"]}}},round1Player2:{entry:["setRound1","setPlayer2"],on:{DONE:{target:"round2Player1",actions:["setPlayer2Score"]}}},round2Player1:{entry:["setRound2","setPlayer1"],on:{DONE:{target:"round2Player2",actions:["setPlayer1Score"]}}},round2Player2:{entry:["setRound2","setPlayer2"],on:{DONE:{target:"round3Player1",actions:["setPlayer2Score"]}}},round3Player1:{entry:["setRound3","setPlayer1"],on:{DONE:{target:"round3Player2",actions:["setPlayer1Score"]}}},round3Player2:{entry:["setRound3","setPlayer2"],on:{DONE:{target:"highscore",actions:["setPlayer2Score"]}}},highscore:{entry:Object(ae.b)({gameRound:null,activePlayer:null}),exit:Object(ae.b)({player1Scores:[],player2Scores:[]}),on:{RESTART:{target:"round1Player1"}}}}},{actions:{setRound1:Object(ae.b)({gameRound:1}),setRound2:Object(ae.b)({gameRound:2}),setRound3:Object(ae.b)({gameRound:3}),setPlayer1:Object(ae.b)({activePlayer:ne}),setPlayer2:Object(ae.b)({activePlayer:"user-ninja"}),setPlayer1Score:Object(ae.b)({player1Scores:function(e,t){return[].concat(Object($.a)(e.player1Scores),[t.payload])}}),setPlayer2Score:Object(ae.b)({player2Scores:function(e,t){return[].concat(Object($.a)(e.player2Scores),[t.payload])}})}}),se={winner:"Winner",label:"Label",player1:"Player 1",player2:"Player 2",round:"Round {0}",total:"Total",restart:"Restart",investment:"Investment",clickToStart:"Click to start expedition",score:"Score: {0}",done:"Done",lostCities:"Lost Cities",player1Score:"Player 1 score",player2Score:"Player 2 score",activePlayer:"Active player"},ue=N()((function(e){return{winnerIcon:{paddingLeft:e.spacing(1),color:"#D4AF37"},totalRow:{fontWeight:e.typography.fontWeightBold}}}));var me=function(e){var t=e.player1Scores,a=e.player2Scores,o=e.onActionClick,c=ue(),l=k()(t),i=k()(a),s=r.a.createElement(I.a,{className:c.winnerIcon,icon:"trophy","aria-label":se.winner});return r.a.createElement(n.Fragment,null,r.a.createElement(D.a,{component:A.a},r.a.createElement(x.a,null,r.a.createElement(B.a,null,r.a.createElement(U.a,null,r.a.createElement(W.a,{align:"center"},r.a.createElement(F.a,{variant:"srOnly"},se.label)),r.a.createElement(W.a,{align:"center"},r.a.createElement(I.a,{icon:ne,"aria-label":se.player1}),l>i&&s),r.a.createElement(W.a,{align:"center"},r.a.createElement(I.a,{icon:"user-ninja","aria-label":se.player2}),i>l&&s))),r.a.createElement(T.a,null,w()(t,a).map((function(e,t){var a=Object(S.a)(e,2),n=a[0],o=a[1];return r.a.createElement(U.a,{key:t},r.a.createElement(W.a,{align:"center"},se.round.format(t+1)),r.a.createElement(W.a,{align:"center"},n),r.a.createElement(W.a,{align:"center"},o))})),r.a.createElement(U.a,null,r.a.createElement(W.a,{className:c.totalRow,align:"center"},se.total),r.a.createElement(W.a,{className:c.totalRow,align:"center"},l),r.a.createElement(W.a,{className:c.totalRow,align:"center"},i))))),r.a.createElement(J,{onClick:o,icon:"redo",label:se.restart}))},de=a(18),pe=a(93),ye=a(73),he=a.n(ye),fe=a(94),ge=a.n(fe),ve=a(185),be=a(179),Ee=a(178),Oe=a(187),je=a(177),ke=a(176),Ce=a(180),Se=a(4),Pe=a(186),we=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={checked:!1},a.onChange=function(e){var t=a.props,n=t.onChange,r=t.data,o=e.target.checked;a.setState({checked:o},(function(){return n({checked:o,data:r})}))},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.onChange,e.data,Object(Se.a)(e,["onChange","data"])),a=this.state.checked;return r.a.createElement(Pe.a,Object.assign({onChange:this.onChange,checked:a},t))}}]),t}(n.PureComponent),Re=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).onChange=function(e){var t=e.data,n=e.checked,r=a.props.onChange,o=Object(pe.a)({},a.state);o[t]=n;var c=Object.entries(o).filter((function(e){var t=Object(S.a)(e,2);t[0];return t[1]})).map((function(e){var t=Object(S.a)(e,2),a=t[0];t[1];return parseInt(a,10)}));a.setState(o,(function(){return r(function(e){if(0===e.length)return 0;var t=M()(e,oe),a=Object(S.a)(t,2),n=a[0],r=a[1];return(k()(r)-20)*(n.length+1)+(e.length>=8?20:0)}(c))}))},a.state=he()(ce.map((function(e){return[e,!1]}))),a.ColorCheckbox=ge()({root:{color:e.color,"&$checked":{color:e.color}},checked:{}})((function(e){return r.a.createElement(we,Object.assign({color:"default"},e))})),a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.props.color;return r.a.createElement(Oe.a,{component:"fieldset",style:{width:"100%"}},r.a.createElement(ke.a,null,ce.map((function(a){return r.a.createElement(je.a,{key:a,control:r.a.createElement(e.ColorCheckbox,{data:a,onChange:e.onChange}),label:r.a.createElement("div",{style:{color:t}},oe(a)?r.a.createElement(I.a,{icon:"handshake","aria-label":se.investment}):r.a.createElement(F.a,null,a))})}))))}}]),t}(n.PureComponent),Ne=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={score:null},a.onChange=function(e){var t=a.props,n=t.color,r=t.onChange;a.setState({score:e},(function(){return r({color:n,score:e})}))},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.color,t=this.state.score;return r.a.createElement(ve.a,null,r.a.createElement(Ee.a,null,r.a.createElement(F.a,{style:{color:e}},r.a.createElement(I.a,{icon:"compass"}),"\xa0",r.a.createElement(F.a,{variant:"body1",component:"span"},null==t?se.clickToStart:se.score.format(t)))),r.a.createElement(be.a,null,r.a.createElement(Re,{color:e,onChange:this.onChange})))}}]),t}(n.PureComponent),Ae=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state=he()(le.map((function(e){return[e,0]}))),a.onScoreChange=function(e){var t=e.color,n=e.score;return a.setState(Object(de.a)({},t,n))},a.onActionClick=function(){return a.props.onActionClick(k()(Object.values(a.state)))},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{padding:"".concat(16,"px")}},r.a.createElement(Ce.a,{container:!0,spacing:2},le.map((function(t){return r.a.createElement(Ce.a,{key:t,item:!0,xs:12,sm:6,lg:!0},r.a.createElement(Ne,{color:t,onChange:e.onScoreChange}))})))),r.a.createElement(J,{onClick:this.onActionClick,icon:"check",label:se.done}))}}]),t}(n.PureComponent),xe=a(182),Te=a(181),We=a(143),De=a(183),Be=N()((function(e){return{appBar:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},title:{flexGrow:1},gameRound:{flexGrow:1}}}));function Ue(e){var t=e.className;return r.a.createElement(F.a,{variant:"h6",component:"h1",className:t},se.lostCities)}function Fe(e){var t=e.className,a=e.gameRound;return r.a.createElement(F.a,{variant:"subtitle1",component:"span",className:t},se.round.format(a))}function Ie(e){var t=e.score,a=e.avatar,n=e.active,o=e.label;return r.a.createElement(Te.a,{badgeContent:t,color:"secondary","aria-label":o,showZero:!0,max:999,overlap:"circle"},r.a.createElement(We.a,{color:"inherit",disabled:!n,"aria-label":n?se.activePlayer:null},r.a.createElement(I.a,{icon:a})))}var Le=function(e){var t=e.gameRound,a=e.player1Score,o=e.player2Score,c=e.activePlayer,l=Be();return r.a.createElement(xe.a,{position:"sticky",className:l.appBar},r.a.createElement(De.a,null,r.a.createElement(Ue,{className:l.title,gameRound:t}),null!=t&&r.a.createElement(n.Fragment,null,r.a.createElement(Fe,{className:l.gameRound,gameRound:t}),r.a.createElement(Ie,{label:se.player1Score,score:a,avatar:ne,active:c===ne}),r.a.createElement(Ie,{label:se.player2Score,score:o,avatar:"user-ninja",active:"user-ninja"===c}))))},Ge=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={current:ie.initialState},a.service=Object(C.a)(ie).onTransition((function(e){return a.setState({current:e})})),a.onScorerClick=function(e){return a.service.send({type:"DONE",payload:e})},a.onGameEndClick=function(e){return a.service.send({type:"RESTART",payload:e})},a}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.service.start()}},{key:"componentWillUnmount",value:function(){this.service.stop()}},{key:"render",value:function(){var e=this.state.current,t=e.context,a=t.activePlayer,o=t.gameRound,c=t.player1Scores,l=t.player2Scores;return r.a.createElement(n.Fragment,null,r.a.createElement(Le,{gameRound:o,player1Score:k()(c),player2Score:k()(l),activePlayer:a}),e.matches("highscore")?r.a.createElement(me,{player1Scores:c,player2Scores:l,onActionClick:this.onGameEndClick}):r.a.createElement(Ae,{key:e.value,onActionClick:this.onScorerClick}))}}]),t}(n.PureComponent),Je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(135);i.a.extend(String.prototype,{}),f.b.add(s.faCheck,u.faCompass,m.faHandshake,d.faRedo,p.faTrophy,y.faUserAstronaut,h.faUserNinja),c.a.render(r.a.createElement(Ge,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lost-cities",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/lost-cities","/service-worker.js");Je?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$e(t,e)}))}}()}},[[107,1,2]]]);
//# sourceMappingURL=main.f700e011.chunk.js.map