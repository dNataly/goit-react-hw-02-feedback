(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={statList:"Statistics_statList__1wBuk"}},,,,,,function(t,e,a){t.exports={controlsItem:"FeedbackOptions_controlsItem__enJmH"}},function(t,e,a){t.exports={notification:"Notification_notification__1Kzpx"}},,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(4),i=a.n(s),o=(a(16),a(5)),r=a(6),d=a(7),l=a(11),b=a(10),u=(a(17),a(8)),j=a.n(u),h=a(0);var v=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(h.jsx)("div",{children:Object.keys(e).map((function(t){return Object(h.jsx)("button",{type:"button",className:j.a.controlsItem,onClick:function(){a(t)},children:"".concat(t)},t)}))})},O=a(2),f=a.n(O);var x=function(t){var e=t.total,a=void 0===e?0:e,c=t.positiveFeedbackPercentage,n=void 0===c?0:c,s=t.good,i=t.bad,o=t.neutral;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{className:f.a.statList,children:[Object(h.jsxs)("li",{className:f.a.statListItem,children:["Good: ",Object(h.jsx)("span",{className:"statCounter",children:s})]}),Object(h.jsxs)("li",{className:f.a.statListItem,children:["Neutral: ",Object(h.jsx)("span",{className:"statCounter",children:o})]}),Object(h.jsxs)("li",{className:f.a.statListItem,children:["Bad: ",Object(h.jsx)("span",{className:"statCounter",children:i})]})]}),Object(h.jsxs)("p",{children:["Total: ",a]}),Object(h.jsxs)("p",{children:["Positive feedback: ",n,"%"]})]})};var k=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("div",{children:[e&&Object(h.jsx)("h2",{children:e}),a]})},p=a(9),m=a.n(p);var g=function(t){var e=t.message;return Object(h.jsx)("p",{className:m.a.notification,children:e})},F=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.setFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback();return e>0?Math.round(t.state.good/e*100):0},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.countTotalFeedback();return Object(h.jsxs)("div",{className:"Feedback-container",children:[Object(h.jsx)(k,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:this.state,onLeaveFeedback:this.setFeedback})}),Object(h.jsx)(k,{title:"Statistics",children:t>0?Object(h.jsx)(x,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positiveFeedbackPercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(g,{message:"No feedback given."})})]})}}]),a}(c.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.0617dac6.chunk.js.map