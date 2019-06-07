(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},25:function(e,t,n){e.exports=n(39)},34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),s=n(2),i=n(8),l=n(21),u=(n(34),n(12)),m=n(22),f=n(24),d=n(3),h=n(5),p=n(6),b=n(9),v=n(7),g=n(10),w=n(23),E=function(e){var t=e.show,n=e.onClose,a=e.children;return r.a.createElement("div",{className:"modal ".concat(t?"":"hidden")},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"modal-close",onClick:n},"\xd7"),a))};E.defaultProps={show:!1,onClose:function(){},children:[]};var C=E,y=function(e){var t=e.index,n=e.operation,a=e.onChange,o=n.symbol,c=n.min,s=n.max,i=n.active;return r.a.createElement("div",{className:"config-row"},r.a.createElement("div",{className:"config-row-item"},r.a.createElement("label",{htmlFor:"active-".concat(t),className:"switch"},r.a.createElement("input",{id:"active-".concat(t),type:"checkbox",onChange:a,checked:i}),r.a.createElement("span",{className:"slider round"}))),r.a.createElement("div",{className:"config-row-item"},r.a.createElement("span",{className:"symbol"},o)),r.a.createElement("div",{className:"config-row-item"},r.a.createElement("label",{htmlFor:"min"},r.a.createElement("span",{className:"label-text"},"Min:"),r.a.createElement("input",{className:"medium-integer",id:"min-".concat(t),type:"number",value:c.toString(),onChange:a}))),r.a.createElement("div",{className:"config-row-item"},r.a.createElement("label",{htmlFor:"max"},r.a.createElement("span",{className:"label-text"},"Max:"),r.a.createElement("input",{className:"medium-integer",id:"max-".concat(t),type:"number",value:s.toString(),onChange:a}))))};y.defaultProps={operation:{symbol:"",min:0,max:0,active:!0},onChange:function(){}};var N=y,O=function(e){return{type:"update_config",data:e}},j=(n(14),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},n.handleClick=function(){n.setState({show:!0})},n.handleClose=function(){n.setState({show:!1}),n.props.onClose()},n.handleOperationChange=function(e,t){var a,r=n.props,o=r.config,c=r.updateConfig,s=o.operations,i=e.target,l=i.id,u=i.value,m=i.type,f=l.split("-")[0];switch(m.toLowerCase()){case"checkbox":a=!s[t][f];break;case"number":a=u.length>0?Number.parseInt(u,10):0;break;default:a=u}s[t][f]=a,c(Object(d.a)({},o,{operations:s}))},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.config,n=this.state.show;return r.a.createElement(a.Fragment,null,r.a.createElement(w.a,{icon:"cog",onClick:this.handleClick}),r.a.createElement(C,{show:n,onClose:this.handleClose},r.a.createElement("p",null,"Config"),t.operations.map(function(t,n){return r.a.createElement(N,{index:n,key:t.symbol,operation:t,onChange:function(t){e.handleOperationChange(t,n)}})})))}}]),t}(a.Component));j.defaultProps={config:{operations:[],timeBetweenQuestions:0},updateConfig:function(){},onClose:function(){}};var S=Object(i.b)(function(e){return{config:e.config}},function(e){return Object(s.b)({updateConfig:O},e)})(j),x=function(e){var t=e.onConfigClose;return r.a.createElement("header",{className:"app-header"},r.a.createElement("span",{className:"header-item"},r.a.createElement(S,{onClose:t})))};x.defaultProps={onConfigClose:function(){}};var k=x,Q=n(13),A=n.n(Q),q={userAnswer:"",resultString:"",displayResult:!1,correct:!1},R=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(v.a)(t).call(this,e))).onUpdate=function(){n.setState(q)},n.createResult=function(e,t,n){return{question:e,userAnswer:t,answer:n,correct:t===n}},n.checkAnswer=function(e){return e.correct?{resultString:"You are correct",displayResult:!0,correct:e.correct}:{resultString:"That is not the correct answer",displayResult:!0,correct:e.correct}},n.handleChange=function(e){var t=e.target.value.trim();n.setState({userAnswer:t,displayResult:!1})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.userAnswer,a=n.props.timeBetweenQuestions;if(Number.isNaN(t))n.setState({resultString:"Error '".concat(t,"' is not a number"),displayResult:!0});else{var r=n.props,o=r.answer,c=r.question,s=r.onQuestionAnswered,i=n.createResult(c,Number(t),o);n.setState(n.checkAnswer(i)),setTimeout(function(){s(i)},a)}},n.state=q,n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){A.a.isEqual(e,this.props)||(this.onUpdate(),this.answerInput.focus())}},{key:"render",value:function(){var e=this,t=this.props.question,n=this.state,a=n.userAnswer,o=n.displayResult,c=n.resultString,s=n.correct;return t.length?r.a.createElement("form",{className:"question-container",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"question"},"".concat(t)),r.a.createElement("div",{className:"answer"},r.a.createElement("input",{type:"number",ref:function(t){e.answerInput=t},value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("div",{className:"result ".concat(s?"correct":"")},o?c:null)):null}}]),t}(a.Component);R.defaultProps={answer:void 0,question:"",onQuestionAnswered:function(){},timeBetweenQuestions:2e3};var P=R,B=function(e){var t=e.number,n=e.question,a=e.answer,o=e.userAnswer,c=e.correct;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,o),r.a.createElement("td",null,c?"Yes":"No"))},M=function(e){var t=e.history;return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Number"),r.a.createElement("th",null,"Question"),r.a.createElement("th",null,"Expected Answer"),r.a.createElement("th",null,"You Answered"),r.a.createElement("th",null,"Correct?")),function(e){return e.slice(0).reverse().map(function(e){return r.a.createElement(B,{key:e.number,number:e.number,question:e.question,answer:e.answer,userAnswer:e.userAnswer,correct:e.correct})})}(t)))};M.defaultProps={history:[]};var F=M,I=function(e){var t=e.numberCorrect,n=e.totalQuestions,a="".concat(t,"/").concat(n),o=n>0?t/n:0,c=A.a.round(100*o,2);return r.a.createElement("div",{className:"score"},"Score: ".concat(c,"% (").concat(a,")"))};I.defaultProps={numberCorrect:0,totalQuestions:0};var D=I,U=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},Y=function(e){for(var t=e.toString(),n=Math.floor(t.length/3),a=t.length%3,r=t.substring(0,a),o=0;o<n;o+=1){var c=a+3*o,s=c+3;r+="".concat(o>0&&n>0||a>0?",":"").concat(t.substring(c,s))}return r},J=function(e,t){for(var n=[],a=0;a<2;a+=1)n[a]=U(e.min,e.max);return{question:"".concat(Y(n[0])," ").concat(e.symbol," ").concat(Y(n[1])),answer:t(n[0],n[1])}},T={randomNumber:U,createQuestion:function(e){var t=e.reduce(function(e,t){return t.active&&e.push(t),e},[]),n=t[U(0,t.length-1)];switch(n.symbol){case"+":return J(n,function(e,t){return e+t});case"-":return J(n,function(e,t){return e-t});case"\xd7":return J(n,function(e,t){return e*t});case"\xf7":return function(e){for(var t=U(e.min,e.max),n=U(e.min,e.max);0===n;)n=U(e.min,e.max);return{question:"".concat(Y(t*n)," ").concat(e.symbol," ").concat(Y(n)),answer:t}}(n);default:return null}}},_=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleQuestionAnswered=function(e){var t=n.props.config,a=T.createQuestion(t.operations);n.setState(function(t){return Object(d.a)({history:[].concat(Object(f.a)(t.history),[Object(d.a)({number:t.history.length+1},e)]),numberCorrect:t.numberCorrect+(e.correct?1:0)},a)})},n.handleConfigClose=function(){var e=n.props.config,t=T.createQuestion(e.operations);n.setState(Object(d.a)({},t))},n.handleReset=function(){n.setState({history:[]})},n.state={question:"",answer:void 0,numberCorrect:0,history:[]},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.config,t=T.createQuestion(e.operations);this.setState(Object(d.a)({},t))}},{key:"render",value:function(){var e=this.props.config,t=this.state,n=t.question,a=t.answer,o=t.numberCorrect,c=t.history;return r.a.createElement("div",null,r.a.createElement(k,{onConfigClose:this.handleConfigClose}),r.a.createElement(D,{numberCorrect:o,totalQuestions:c.length}),r.a.createElement("div",{className:"app-item"},r.a.createElement(P,{question:n,answer:a,onQuestionAnswered:this.handleQuestionAnswered,timeBetweenQuestions:e.timeBetweenQuestions})),r.a.createElement(F,{history:c}))}}]),t}(a.Component);_.defaultProps={config:{}};var L=Object(i.b)(function(e){return{config:e.config}})(_);u.b.add(m.a);var z=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(L,null))},G={operations:[{symbol:"+",min:0,max:9,active:!0},{symbol:"-",min:0,max:9,active:!0},{symbol:"\xd7",min:0,max:9,active:!0},{symbol:"\xf7",min:0,max:9,active:!0}],timeBetweenQuestions:1500},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"update_config":return Object(d.a)({},e,{config:t.data});default:return e}},K=Object(s.c)({config:H}),V=Object(s.d)(K,Object(s.a)(l.a));c.a.render(r.a.createElement(i.a,{store:V},r.a.createElement(z,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.87f49849.chunk.js.map