(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),s=a.n(l),o=a(3),r=a(4),i=a(5),u=a(7),d=a(6),m=(a(13),a(14),function(e){var t=e.todos,a=e.userDeteil;return c.a.createElement("div",{className:"TodoList"},c.a.createElement("h2",null,"Todos:"),c.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"TodoList__item ".concat(e.completed&&"TodoList__item--completed")},c.a.createElement("label",{className:"TodoList__label"},c.a.createElement("span",{className:"TodoList__head"},"ID:"),c.a.createElement("span",{className:"TodoList__text"},e.id),c.a.createElement("input",{className:"TodoList__checkbox",type:"checkbox",checked:e.completed&&!0,onChange:function(){return e.completed}})),c.a.createElement("div",{className:"TodoList__user"},c.a.createElement("span",{className:"TodoList__head"},"User ID:"),c.a.createElement("span",{className:"TodoList__text"},e.userId)),c.a.createElement("p",{className:"TodoList__title"},c.a.createElement("span",{className:"TodoList__head"},"Title:"),c.a.createElement("span",{className:"TodoList__text"},e.title)),c.a.createElement("button",{type:"button",className:"TodoList__button",value:+e.userId,onClick:a},"User\xa0#1"))}))))}),p=function(e){var t=e.text,a=e.selectValue,n=e.changeList;return c.a.createElement("div",null,"Search:",c.a.createElement("input",{name:"input",value:t,onChange:n,type:"text"}),c.a.createElement("select",{name:"select",value:a,onChange:n},c.a.createElement("option",{value:"all"},"All"),c.a.createElement("option",{value:"active"},"Active"),c.a.createElement("option",{value:"completed"},"Completed")))},f=function(e){var t=e.users,a=e.userId,n=e.clearInfo;return c.a.createElement("div",{className:"CurrentUser"},c.a.createElement("h2",null,"Selected user:",a),c.a.createElement("ul",null,c.a.createElement("li",null,t[a-1].name),c.a.createElement("li",null,t[a-1].email),c.a.createElement("li",null,t[a-1].phone)),c.a.createElement("button",{type:"button",onClick:n},"Clear"))},h="https://mate-api.herokuapp.com",E=function(){return fetch("".concat(h,"/todos")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e}))},_=function(){return fetch("".concat(h,"/users")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e}))},v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={todosNew:[],todos:[],users:[],selectedUserId:0,input:"",select:""},e.componentDidMount=function(){E().then((function(t){return e.setState({todos:t,todosNew:t})})),_().then((function(t){return e.setState({users:t})}))},e.changeSelectedUserId=function(t){e.setState({selectedUserId:t.target.value})},e.clearUserInfo=function(){e.setState({selectedUserId:!1})},e.hendleFilter=function(t){var a=t.target,n=a.name,c=a.value,l=e.state.todos;e.setState(Object(o.a)({},n,c)),"input"===n&&e.setState({todosNew:l.filter((function(e){return null!==e.title&&e.title.includes(c)}))}),"select"===n&&("active"===c?e.setState({todosNew:l.filter((function(e){return!e.completed}))}):"completed"===c?e.setState({todosNew:l.filter((function(e){return e.completed}))}):"all"===c&&e.setState({todosNew:l}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todosNew,a=e.users,n=e.selectedUserId,l=e.input,s=e.select;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(p,{text:l,changeList:this.hendleFilter,selectValue:s}),c.a.createElement(m,{todos:t,userDeteil:this.changeSelectedUserId})),c.a.createElement("div",{className:"App__content"},n?c.a.createElement(f,{userId:n,users:a,clearInfo:this.clearUserInfo}):"No user selected"))}}]),a}(c.a.Component);s.a.render(c.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.562ffc3b.chunk.js.map