(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{45:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=a(2),s=a(3),i=a(5),u=a(4),m=a(6),h=(a(50),a(22)),p=a(21),g=a(10),d=a(11);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var b,E,v,O,w,y,j,k,N,x,C,D,S,M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={collapse1:!1,collapseID:""},a.toggleCollapse=function(e){return function(){a.setState((function(t){return{collapseID:t.collapseID!==e?e:""}}))}},a.toggleSingleCollapse=function(e){a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state,Object(p.a)({},e,!a.state[e])))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement(d.d,{className:"hamburger-menu",style:{backgroundColor:"#D43A39",padding:"10px"}},r.a.createElement(d.h,{color:"amber lighten-4",style:{marginTop:"0px"},light:!0},r.a.createElement(d.d,null,r.a.createElement(d.e,{color:"white",id:"hamburger1",onClick:function(){return e.toggleSingleCollapse("collapse1")}}),r.a.createElement(d.c,{isOpen:this.state.collapse1,navbar:!0},r.a.createElement(d.i,{left:!0},r.a.createElement(d.f,{active:!0},r.a.createElement(d.g,{to:"/yes-no",style:{color:"white"}},"Yes / No Questions")),r.a.createElement(d.f,null,r.a.createElement(d.g,{to:"/this-that",style:{color:"white"}},"This or That Questions")),r.a.createElement(d.f,null,r.a.createElement(d.g,{to:"/decide",style:{color:"white"}},"Let the Guru decide things for you")),r.a.createElement(d.f,null,r.a.createElement(d.g,{to:"/advice",style:{color:"white"}},"Ask the Guru for an Advice")))))))),r.a.createElement("h1",{className:"home-h1"},"Are you tired of making decisions on your own?"),r.a.createElement("h2",{className:"home-h2"},"Ask the Guru!"),r.a.createElement("div",{className:"home"},r.a.createElement("section",{className:"home-buttons"},r.a.createElement("button",{className:"btn btn-danger",style:{height:"70px"}},r.a.createElement(g.c,{to:"/yes-no",style:{textDecoration:"none",color:"white"}},"Yes / No Questions")),r.a.createElement("button",{className:"btn btn-danger",style:{height:"70px"}},r.a.createElement(g.c,{to:"/this-that",style:{textDecoration:"none",color:"white"}},"This or That Questions")),r.a.createElement("button",{className:"btn btn-danger",style:{height:"70px"}},r.a.createElement(g.c,{to:"/decide",style:{textDecoration:"none",color:"white"}},"Let the Guru decide things for you")),r.a.createElement("button",{className:"btn btn-danger",style:{height:"70px"}},r.a.createElement(g.c,{to:"/advice",style:{textDecoration:"none",color:"white"}},"Ask the Guru for an Advice"))),r.a.createElement("img",{className:"guru-img1",src:"./images/guru1.png"})))}}]),t}(n.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.show,a=e.value,n=e.handleToggle,o=e.handleChange;return r.a.createElement("div",{className:"dropdown-container"},r.a.createElement("label",{className:"arrow"},r.a.createElement("input",{type:"button",value:a,className:"dropdown-btn",onClick:n})),r.a.createElement("ul",{className:"dropdown-list",hidden:!t},this.props.options.map((function(e){return r.a.createElement("li",{className:"option",onClick:o(e.question)},r.a.createElement(g.c,{to:e.link,style:{textDecoration:"none"}},e.question))}))))}}]),t}(n.Component),q=[{question:"Will I ever find true love?",link:"/answer1"},{question:"Second question?",link:"/answer1"},{question:"Third question?",link:"/answer1"},{question:"Fourth question?",link:"/answer1"}],G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleToggle=function(e){e.target.focus(),a.setState({show:!a.state.show})},a.handleChange=function(e){return function(){a.setState({value:e,show:!1})}},a.state={show:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"question-section"},r.a.createElement("img",{className:"guru-img1",src:"./images/guru1.png"}),r.a.createElement("span",null,"Guru,"),r.a.createElement(T,{show:this.state.show,value:this.state.value,handleToggle:this.handleToggle,handleChange:this.handleChange,options:q})))}}]),t}(n.Component),A=a(16),F=a.n(A),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={randomAnswer:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.a.get("https://yesno.wtf/api/").then((function(t){e.setState({randomAnswer:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"response-container"},r.a.createElement("h1",{style:{textTransform:"capitalize"}},this.state.randomAnswer.answer,"..."),r.a.createElement("img",{src:this.state.randomAnswer.image,style:{maxWidth:"250px",borderRadius:"50%"}}),r.a.createElement("img",{className:"speech-image",src:"./images/speech-bubble.png"}),r.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"})))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={randomAdvice:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.a.get("https://api.adviceslip.com/advice").then((function(t){e.setState({randomAdvice:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.randomAdvice.slip&&(b=this.state.randomAdvice.slip.advice),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"response-container"},r.a.createElement("p",{style:{marginTop:"100px",marginLeft:"0"}},b),r.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"})))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setOptions=function(e){var t;a.setState((t={},Object(p.a)(t,e.target.option1,e.target.value),Object(p.a)(t,e.target.option2,e.target.value),t))},a.submitOptions=function(e){e.preventDefault();a.state.option1,a.state.option2;console.log(a.option1),console.log(a.option2)},a.state={option1:"",option2:"",show:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"thisthat-container"},r.a.createElement("img",{className:"guru-img1",src:"./images/guru1.png"}),r.a.createElement("h4",null,"Guru, pick one for me:"),r.a.createElement("p",null,r.a.createElement("i",null,"Enter below the two options you are in between:")),r.a.createElement("form",null,r.a.createElement("div",{className:"thisthat-input-container"},r.a.createElement("input",{type:"text",name:"option1",placeholder:"Option 1",onChange:this.setOptions}),r.a.createElement("span",null,"OR"),r.a.createElement("input",{type:"text",name:"option2",placeholder:"Option 2",onChange:this.setOptions})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},r.a.createElement(g.c,{to:"/answer2",style:{textDecoration:"none",color:"white"}},"Pick Now ")))))}}]),t}(n.Component),L="https://api.giphy.com/v1/gifs/search?api_key=sa9xw4Yo24USK2G5qleY0Y4HdBWjcDf2&q=",R="&limit=1&offset=0&rating=G&lang=en",W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setOptions=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value),(function(){}))},a.mySubmitHandler=function(e){e.preventDefault(),E=[a.state.option1,a.state.option2];var t=Math.floor(2*Math.random());a.setState({guruOption:E[t]}),v=L.concat(E[t],R),console.log(v),fetch(v).then((function(e){return e.json()})).then((function(e){console.log(e.data),a.setState({randomGif:e},console.log(a.state.randomGif))}))},a.state={option1:"",option2:"",guruOption:"",randomGif:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="";return e=this.state.guruOption?r.a.createElement("p",{style:{textTransform:"capitalize"}}," ",this.state.guruOption," is the best option "):"",this.state.randomGif.data&&(O=this.state.randomGif.data[0].images.original.url),r.a.createElement("div",{className:"thisthat-answer"},r.a.createElement("img",{id:"answer-image",src:"./images/guru2.png"}),r.a.createElement("h4",{className:"answer-input-container"},"Guru, pick one for me:"),r.a.createElement("p",null,r.a.createElement("i",null,"Enter below two options, and the Guru will pick one for you:")),r.a.createElement("form",{onSubmit:this.mySubmitHandler},r.a.createElement("div",{className:"thisthat-input-container"},r.a.createElement("input",{type:"text",name:"option1",placeholder:"Option 1",value:this.state.option1,onChange:this.setOptions}),r.a.createElement("span",null,"OR"),r.a.createElement("input",{type:"text",name:"option2",placeholder:"Option 2",value:this.state.option2,onChange:this.setOptions})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"}," Pick Now ")),e,r.a.createElement("img",{style:{width:"200px"},src:O}),r.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"}),r.a.createElement("img",{id:"bubble-answer",src:"./images/baloon.png"}))}}]),t}(n.Component),H=[{question:"Should I go out tonight?",link:"/answer3"},{question:"I'm hungry, what should I eat?",link:"/eat"},{question:"Third question?",link:"/answer1"},{question:"Fourth question?",link:"/answer3"}],Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleToggle=function(e){e.target.focus(),a.setState({show:!a.state.show})},a.handleChange=function(e){return function(){a.setState({value:e,show:!1})}},a.state={show:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"question-section"},r.a.createElement("img",{className:"guru-img1",src:"./images/guru1.png"}),r.a.createElement("span",null,"Guru,"),r.a.createElement(T,{show:this.state.show,value:this.state.value,handleToggle:this.handleToggle,handleChange:this.handleChange,options:H})))}}]),t}(n.Component),z=Math.floor(2*Math.random())+1,B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).loadTrailerorNot=function(){return null!=a.state.randomMovie.trailer?(y=a.state.randomMovie.trailer,j=y.replace("watch?v=","embed/"),k=j.replace("http:","https:"),r.a.createElement("iframe",{src:k,style:{width:"420",height:"315",borderRadius:"30%"},allowFullScreen:!0}," ")):r.a.createElement("h3",null,"Synopsis: ",a.state.randomMovie.synopsis)},a.state={randomMovie:{},randomDrink:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tv-v2.api-fetch.website/random/movie",{cache:"no-store"}).then((function(e){return e.json()})).then((function(t){return e.setState({randomMovie:t})})).catch((function(e){console.log(e)})),F.a.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(t){e.setState({randomDrink:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(z),1==z?this.state.randomMovie?(w=this.state.randomMovie.title,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"response-container"},r.a.createElement("p",null,"Nope, not a good idea..."),r.a.createElement("p",null,"you should stay home and watch:"),r.a.createElement("h3",null,w),this.loadTrailerorNot(),r.a.createElement("img",{className:"speech-image",src:"./images/speech-bubble.png"}),r.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"})))):r.a.createElement("div",null,"Loading..."):this.state.randomDrink.drinks?(N=this.state.randomDrink.drinks[0].strDrink,x=this.state.randomDrink.drinks[0].strDrinkThumb,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"response-container"},r.a.createElement("p",null,"Yes, go out and have some fun"),r.a.createElement("p",null,"buy yourself a drink, I feel like you need a"),r.a.createElement("h3",null,N),r.a.createElement("img",{className:"speech-image",src:"./images/speech-bubble.png"}),r.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"}),r.a.createElement("img",{src:x,style:{width:"200px"}})))):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={randomMeal:{}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(t){e.setState({randomMeal:t.data}),console.log(e.state.randomMeal)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.randomMeal.meals&&(C=this.state.randomMeal.meals[0].strMeal,D=this.state.randomMeal.meals[0].strSource,S=this.state.randomMeal.meals[0].strMealThumb),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"response-container"},r.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"}),r.a.createElement("h4",null,"Have some ",C),r.a.createElement("img",{style:{width:"100px",borderRadius:"50%"},src:S}),r.a.createElement("p",null,"I even found the recipe for you ",r.a.createElement("a",{href:D,target:"_blank"}," here.")," "),r.a.createElement("p",null,"Now, don't be lazy and go cook.")))}}]),t}(n.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:M}),r.a.createElement(h.a,{exact:!0,path:"/yes-no",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(h.a,{exact:!0,path:"/answer1",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(h.a,{exact:!0,path:"/this-that",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(h.a,{exact:!0,path:"/answer2",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(h.a,{exact:!0,path:"/decide",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(h.a,{exact:!0,path:"/answer3",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(h.a,{exact:!0,path:"/eat",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(h.a,{exact:!0,path:"/advice",render:function(){return r.a.createElement(P,null)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76);console.log("hi"),l.a.render(r.a.createElement(g.b,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.aebd7fd0.chunk.js.map