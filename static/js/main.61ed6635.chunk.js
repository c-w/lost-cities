(this["webpackJsonplost-cities"]=this["webpackJsonplost-cities"]||[]).push([[0],{105:function(e,a,t){e.exports=t(134)},133:function(e,a,t){},134:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),o=t.n(c),l=t(94),i=t(95),s=t(96),u=t(97),m=t(98),y=t(99),p=t(100),h=t(42),d=t(22),b=t(17),g=t(28),v=t(30),E=t(31),f=t(139),O=t(169),j=t(173),P=t(172),C=t(168),k=t(170),S=t(171),R=t(50),w=t.n(R),N=t(167),x=t(19),A=w()((function(e){return{fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}}));var D=function(e){var a=e.onClick,t=e.label,n=e.icon,c=A();return r.a.createElement(N.a,{color:"primary","aria-label":t,className:c.fab,onClick:a},r.a.createElement(x.a,{icon:n}))},T=t(24),B=t(89),F=t.n(B),W=t(58),G=t.n(W),H=t(70),I=t.n(H),U=t(71),J=t.n(U),Y=t(68),$=t.n(Y),L=t(69),M=t.n(L),Z=t(90),q=t.n(Z),z=t(186),K=t(9),Q="user-astronaut",V=[-1,-2,-3];function X(e){return-1!==V.indexOf(e)}var _=[].concat(V,[2,3,4,5,6,7,8,9,10]),ee=[q.a[800],I.a[500],$.a[500],J.a[500],M.a[500]];var ae=Object(z.a)({id:"game",initial:"round1Player1",context:{gameRound:1,activePlayer:Q,player1Score:0,player2Score:0},states:{round1Player1:{entry:["setRound1","setPlayer1"],on:{DONE:{target:"round1Player2",actions:["setPlayer1Score"]}}},round1Player2:{entry:["setRound1","setPlayer2"],on:{DONE:{target:"round2Player1",actions:["setPlayer2Score"]}}},round2Player1:{entry:["setRound2","setPlayer1"],on:{DONE:{target:"round2Player2",actions:["setPlayer1Score"]}}},round2Player2:{entry:["setRound2","setPlayer2"],on:{DONE:{target:"round3Player1",actions:["setPlayer2Score"]}}},round3Player1:{entry:["setRound3","setPlayer1"],on:{DONE:{target:"round3Player2",actions:["setPlayer1Score"]}}},round3Player2:{entry:["setRound3","setPlayer2"],on:{DONE:{target:"highscore",actions:["setPlayer2Score"]}}},highscore:{entry:Object(K.b)({gameRound:null,activePlayer:null}),exit:Object(K.b)({player1Score:0,player2Score:0}),on:{RESTART:{target:"round1Player1"}}}}},{actions:{setRound1:Object(K.b)({gameRound:1}),setRound2:Object(K.b)({gameRound:2}),setRound3:Object(K.b)({gameRound:3}),setPlayer1:Object(K.b)({activePlayer:Q}),setPlayer2:Object(K.b)({activePlayer:"user-ninja"}),setPlayer1Score:Object(K.b)({player1Score:function(e,a){return e.player1Score+a.payload}}),setPlayer2Score:Object(K.b)({player2Score:function(e,a){return e.player2Score+a.payload}})}});var te=function(e){var a=e.player1Score,t=e.player2Score,c=e.onActionClick;return r.a.createElement(n.Fragment,null,r.a.createElement(C.a,{component:f.a},r.a.createElement(O.a,null,r.a.createElement(k.a,null,r.a.createElement(S.a,null,r.a.createElement(P.a,{align:"center"},"Player"),r.a.createElement(P.a,{align:"center"},"Score"),r.a.createElement(P.a,{align:"center"},"Winner"))),r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(P.a,{align:"center"},r.a.createElement(x.a,{icon:Q,"aria-label":"Player 1"})),r.a.createElement(P.a,{align:"center"},a),r.a.createElement(P.a,{align:"center"},a>t&&r.a.createElement(x.a,{icon:"trophy","aria-label":"Yes"}))),r.a.createElement(S.a,null,r.a.createElement(P.a,{align:"center"},r.a.createElement(x.a,{icon:"user-ninja","aria-label":"Player 2"})),r.a.createElement(P.a,{align:"center"},t),r.a.createElement(P.a,{align:"center"},t>a&&r.a.createElement(x.a,{icon:"trophy","aria-label":"Yes"})))))),r.a.createElement(D,{onClick:c,icon:"redo",label:"Restart"}))},ne=t(18),re=t(91),ce=t(72),oe=t.n(ce),le=t(92),ie=t.n(le),se=t(183),ue=t(177),me=t(176),ye=t(185),pe=t(175),he=t(174),de=t(178),be=t(141),ge=t(4),ve=t(184),Ee=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={checked:!1},t.onChange=function(e){var a=t.props,n=a.onChange,r=a.data,c=e.target.checked;t.setState({checked:c},(function(){return n({checked:c,data:r})}))},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=(e.onChange,e.data,Object(ge.a)(e,["onChange","data"])),t=this.state.checked;return r.a.createElement(ve.a,Object.assign({onChange:this.onChange,checked:t},a))}}]),a}(n.PureComponent),fe=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(g.a)(this,Object(v.a)(a).call(this,e))).onChange=function(e){var a=e.data,n=e.checked,r=t.props.onChange,c=Object(re.a)({},t.state);c[a]=n;var o=Object.entries(c).filter((function(e){var a=Object(T.a)(e,2);a[0];return a[1]})).map((function(e){var a=Object(T.a)(e,2),t=a[0];a[1];return parseInt(t,10)}));t.setState(c,(function(){return r(function(e){if(0===e.length)return 0;var a=F()(e,X),t=Object(T.a)(a,2),n=t[0],r=t[1];return(G()(r)-20)*(n.length+1)+(e.length>=8?20:0)}(o))}))},t.state=oe()(_.map((function(e){return[e,!1]}))),t.ColorCheckbox=ie()({root:{color:e.color,"&$checked":{color:e.color}},checked:{}})((function(e){return r.a.createElement(Ee,Object.assign({color:"default"},e))})),t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this,a=this.props.color;return r.a.createElement(ye.a,{component:"fieldset",style:{width:"100%"}},r.a.createElement(he.a,null,_.map((function(t){return r.a.createElement(pe.a,{key:t,control:r.a.createElement(e.ColorCheckbox,{data:t,onChange:e.onChange}),label:r.a.createElement("div",{style:{color:a}},X(t)?r.a.createElement(x.a,{icon:"handshake","aria-label":"Investment"}):r.a.createElement(be.a,null,t))})}))))}}]),a}(n.PureComponent),Oe=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={score:null},t.onChange=function(e){var a=t.props,n=a.color,r=a.onChange;t.setState({score:e},(function(){return r({color:n,score:e})}))},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props.color,a=this.state.score;return r.a.createElement(se.a,null,r.a.createElement(me.a,null,r.a.createElement(be.a,{style:{color:e}},r.a.createElement(x.a,{icon:"compass"}),"\xa0",r.a.createElement(be.a,{variant:"body1",component:"span"},null==a?"Click to start expedition":"Score: ".concat(a)))),r.a.createElement(ue.a,null,r.a.createElement(fe,{color:e,onChange:this.onChange})))}}]),a}(n.PureComponent),je=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state=oe()(ee.map((function(e){return[e,0]}))),t.onScoreChange=function(e){var a=e.color,n=e.score;return t.setState(Object(ne.a)({},a,n))},t.onActionClick=function(){return t.props.onActionClick(G()(Object.values(t.state)))},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{padding:"".concat(16,"px")}},r.a.createElement(de.a,{container:!0,spacing:2},ee.map((function(a){return r.a.createElement(de.a,{key:a,item:!0,xs:12,sm:6,lg:!0},r.a.createElement(Oe,{color:a,onChange:e.onScoreChange}))})))),r.a.createElement(D,{onClick:this.onActionClick,icon:"check",label:"Done"}))}}]),a}(n.PureComponent),Pe=t(180),Ce=t(179),ke=t(140),Se=t(181),Re=w()((function(e){return{root:{flexGrow:1},appBar:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},title:{flexGrow:1},gameRound:{flexGrow:1}}}));function we(e){var a=e.className;return r.a.createElement(be.a,{variant:"h6",component:"h1",className:a},"Lost Cities")}function Ne(e){var a=e.className,t=e.gameRound;return r.a.createElement(be.a,{variant:"subtitle1",component:"span",className:a},"Round ",t)}function xe(e){var a=e.score,t=e.avatar,n=e.active,c=e.label;return r.a.createElement(Ce.a,{badgeContent:a,color:"secondary","aria-label":c,showZero:!0,overlap:"circle"},r.a.createElement(ke.a,{color:"inherit",disabled:!n},r.a.createElement(x.a,{icon:t})))}var Ae=function(e){var a=e.gameRound,t=e.player1Score,c=e.player2Score,o=e.activePlayer,l=Re();return r.a.createElement("div",{className:l.root},r.a.createElement(Pe.a,{position:"static",className:l.appBar},r.a.createElement(Se.a,null,r.a.createElement(we,{className:l.title,gameRound:a}),null!=a&&r.a.createElement(n.Fragment,null,r.a.createElement(Ne,{className:l.gameRound,gameRound:a}),r.a.createElement(xe,{label:o===Q?"Player 1 score, active player":"Player 1 score",score:t,avatar:Q,active:o===Q}),r.a.createElement(xe,{label:"user-ninja"===o?"Player 2 score, active player":"Player 2 score",score:c,avatar:"user-ninja",active:"user-ninja"===o})))))},De=t(182),Te=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={current:ae.initialState},t.service=Object(De.a)(ae).onTransition((function(e){return t.setState({current:e})})),t.onScorerClick=function(e){return t.service.send({type:"DONE",payload:e})},t.onHighscoreClick=function(e){return t.service.send({type:"RESTART",payload:e})},t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.service.start()}},{key:"componentWillUnmount",value:function(){this.service.stop()}},{key:"render",value:function(){var e=this.state.current,a=e.context,t=a.activePlayer,c=a.gameRound,o=a.player1Score,l=a.player2Score;return r.a.createElement(n.Fragment,null,r.a.createElement(Ae,{gameRound:c,player1Score:o,player2Score:l,activePlayer:t}),e.matches("highscore")?r.a.createElement(te,{player1Score:o,player2Score:l,onActionClick:this.onHighscoreClick}):r.a.createElement(je,{key:e.value,onActionClick:this.onScorerClick}))}}]),a}(n.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(133);h.b.add(l.faCheck,i.faCompass,s.faHandshake,u.faRedo,m.faTrophy,y.faUserAstronaut,p.faUserNinja),o.a.render(r.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.61ed6635.chunk.js.map