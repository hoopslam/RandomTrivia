(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var r,c,a,s=t(0),o=t.n(s),i=t(15),u=t.n(i),b=t(3),d=t(4),l=t.n(d),p=t(9),x=t(2),j=t(5),f=t(6),h=f.b.div(r||(r=Object(j.a)(["\n\tmax-width: 1100px;\n\tbackground: #ebfeff;\n\tborder-radius: 10px;\n\tborder: 2px solid #0085a3;\n\tpadding: 20px;\n\tbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n\n\tp {\n\t\tfont-size: 1rem;\n\t}\n"]))),g=f.b.div(c||(c=Object(j.a)(["\n    transition: all 0.3s ease;\n    \n    :hover {\n        opacity: 0.8;\n    }\n\n    button {\n        cursor: pointer;\n        user-select: none;\n        font-size: 0.8rem;\n        width: 100%;\n        height: 40px;\n        margin: 5px 0;\n        background: ",";\n        border: 3px solid #fff;\n        box-shadow: 1px 2px 0px rgba(0,0,0,0.1);\n        border-radius: 10px;\n        color: #fff;\n        text-shadow: 0px 1px 0px rgba(0,0,0,0.25);\n        }\n    }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),O=t(1),m=function(n){var e=n.question,t=n.answers,r=n.callback,c=n.userAnswer,a=n.questionNumber,s=n.totalQuestions;return Object(O.jsxs)(h,{children:[Object(O.jsxs)("p",{className:"number",children:["Question: ",a," / ",s]}),Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(O.jsx)("div",{children:t.map((function(n){return Object(O.jsx)(g,{correct:(null===c||void 0===c?void 0:c.correctAnswer)===n,userClicked:(null===c||void 0===c?void 0:c.answer)===n,children:Object(O.jsx)("button",{disabled:!!c,value:n,onClick:r,children:Object(O.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},w=t(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(a||(a={}));var v,k,y=function(){var n=Object(p.a)(l.a.mark((function n(e,t){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&category=22&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c.results.map((function(n){return Object(w.a)(Object(w.a)({},n),{},{answers:(e=[].concat(Object(b.a)(n.incorrect_answers),[n.correct_answer]),Object(b.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),S=Object(f.a)(v||(v=Object(j.a)(["\n    html {\n        height: 100%;\n    }\n\n    body {\n        background:rgb(200,200,200);\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    *{\n        box-sizing: border-box;\n    }\n"]))),q=f.b.div(k||(k=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    > p {\n        color: white;\n    }\n\n    .score {\n        color: white;\n        font-size: 2rem;\n        margin: 0;\n    }\n\n    h1 {\n        font-size: 70px;\n        font-weight: 400;\n        text-align: center;\n        margin: 20px;\n    }\n\n    .start, .next {\n        cursor: pointer;\n        background: rgb(200,200,200);\n        border: 2px solid #d38558;\n        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);\n        border-radius: 10px;\n        height: 40px;\n        margin: 20px 0;\n        padding: 0 40px;\n    }\n\n    .start {\n        max-width: 200px;\n    }\n"])));var z=function(){var n=Object(s.useState)(!1),e=Object(x.a)(n,2),t=e[0],r=e[1],c=Object(s.useState)([]),o=Object(x.a)(c,2),i=o[0],u=o[1],d=Object(s.useState)(0),j=Object(x.a)(d,2),f=j[0],h=j[1],g=Object(s.useState)([]),w=Object(x.a)(g,2),v=w[0],k=w[1],z=Object(s.useState)(0),_=Object(x.a)(z,2),A=_[0],N=_[1],M=Object(s.useState)(!0),Q=Object(x.a)(M,2),C=Q[0],E=Q[1];console.log(i);var I=function(){var n=Object(p.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),E(!1),n.next=4,y(10,a.EASY);case 4:e=n.sent,u(e),N(0),k([]),h(0),r(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{}),Object(O.jsxs)(q,{children:[Object(O.jsx)("h1",{children:"World Geography Quiz"}),C||10===v.length?Object(O.jsx)("button",{className:"start",onClick:I,children:"Start"}):null,!C&&Object(O.jsxs)("p",{className:"score",children:["Score: ",A]}),t&&Object(O.jsx)("p",{children:"Loading Questions"}),!t&&!C&&Object(O.jsx)(m,{questionNumber:f+1,totalQuestions:10,question:i[f].question,answers:i[f].answers,userAnswer:v?v[f]:void 0,callback:function(n){if(!C){var e=n.currentTarget.value,t=i[f].correct_answer===e;t&&N((function(n){return n+1}));var r={question:i[f].question,answer:e,correct:t,correctAnswer:i[f].correct_answer};k((function(n){return[].concat(Object(b.a)(n),[r])}))}}}),C||t||v.length!==f+1||9===f?null:Object(O.jsx)("button",{className:"next",onClick:function(){var n=f+1;10===n?E(!0):h(n)},children:"Next Question"})]})]})};u.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.bd9e5e24.chunk.js.map