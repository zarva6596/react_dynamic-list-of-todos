(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),l=a.n(c),o=a(3),r=a(4),i=a(5),u=a(7),d=a(6),m=(a(13),a(14),function(e){var t=e.todos,a=e.userDeteil;return s.a.createElement("div",{className:"TodoList"},s.a.createElement("h2",null,"Todos:"),s.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return s.a.createElement("li",{key:e.id,className:"TodoList__item ".concat(e.completed&&"TodoList__item--completed")},s.a.createElement("label",{className:"TodoList__label"},s.a.createElement("span",{className:"TodoList__head"},"ID:"),s.a.createElement("span",{className:"TodoList__text"},e.id),s.a.createElement("input",{className:"TodoList__checkbox",type:"checkbox",checked:e.completed&&!0,onChange:function(){return e.completed}})),s.a.createElement("div",{className:"TodoList__user"},s.a.createElement("span",{className:"TodoList__head"},"User ID:"),s.a.createElement("span",{className:"TodoList__text"},e.userId)),s.a.createElement("p",{className:"TodoList__title"},s.a.createElement("span",{className:"TodoList__head"},"Title:"),s.a.createElement("span",{className:"TodoList__text"},e.title)),s.a.createElement("button",{type:"button",className:"TodoList__button",value:+e.userId,onClick:a},"User\xa0",e.userId))}))))}),p=function(e){var t=e.text,a=e.selectValue,n=e.changeList;return s.a.createElement("div",null,"Search:",s.a.createElement("input",{name:"input",value:t,onChange:n,type:"text"}),s.a.createElement("select",{name:"select",value:a,onChange:n},s.a.createElement("option",{value:"all"},"All"),s.a.createElement("option",{value:"active"},"Active"),s.a.createElement("option",{value:"completed"},"Completed")))},f=function(e){var t=e.users,a=e.userId,n=e.clearInfo;return s.a.createElement("div",{className:"CurrentUser"},s.a.createElement("h2",null,"Selected user:",a),s.a.createElement("ul",null,s.a.createElement("li",null,t[a-1].name),s.a.createElement("li",null,t[a-1].email),s.a.createElement("li",null,t[a-1].phone)),s.a.createElement("button",{type:"button",onClick:n},"Clear"))},h="https://mate-api.herokuapp.com",E=function(){return fetch("".concat(h,"/todos")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e}))},_=function(){return fetch("".concat(h,"/users")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e}))},v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={todosNew:[],todos:[],users:[],selectedUserId:0,input:"",select:""},e.componentDidMount=function(){E().then((function(t){return e.setState({todos:t,todosNew:t})})),_().then((function(t){return e.setState({users:t})}))},e.changeSelectedUserId=function(t){e.setState({selectedUserId:t.target.value})},e.clearUserInfo=function(){e.setState({selectedUserId:!1})},e.hendleFilter=function(t){var a=t.target,n=a.name,s=a.value,c=e.state.todos;if(e.setState(Object(o.a)({},n,s)),"input"===n&&e.setState({todosNew:c.filter((function(e){return null!==e.title&&e.title.includes(s)}))}),"select"===n)switch(s){case"active":e.setState({todosNew:c.filter((function(e){return!e.completed}))});break;case"completed":e.setState({todosNew:c.filter((function(e){return e.completed}))});break;default:e.setState({todosNew:c})}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todosNew,a=e.users,n=e.selectedUserId,c=e.input,l=e.select;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App__sidebar"},s.a.createElement(p,{text:c,changeList:this.hendleFilter,selectValue:l}),s.a.createElement(m,{todos:t,userDeteil:this.changeSelectedUserId})),s.a.createElement("div",{className:"App__content"},n?s.a.createElement(f,{userId:n,users:a,clearInfo:this.clearUserInfo}):"No user selected"))}}]),a}(s.a.Component);l.a.render(s.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fcf4eb34.chunk.js.map