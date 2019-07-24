(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},35:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(19),r=a.n(o),c=(a(40),a(9)),s=a(10),i=a(12),m=a(11),u=a(13),d=(a(24),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.books,a=this.props.cart,n="Your list is empty!";return this.props.emptyResultString&&(n=this.props.emptyResultString),l.a.createElement("div",{className:"m-4"},(!t||0===t.length)&&l.a.createElement("p",{className:"text-center w-responsive mx-auto mb-3"},n),t&&t.length>0&&l.a.createElement("div",{style:{height:"70vh",overflow:"auto"}},l.a.createElement("table",{id:"dtVerticalScrollExample",className:"table table-striped"},l.a.createElement("thead",{className:"primary-color white-text"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}),l.a.createElement("th",{scope:"col"},"Book Name"),l.a.createElement("th",{scope:"col"},"Author"),l.a.createElement("th",{scope:"col"},"Category"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null,t&&t.map(function(t,n){return l.a.createElement("tr",{key:n},l.a.createElement("th",{scope:"row"},n+1),l.a.createElement("td",null,t.BookName),l.a.createElement("td",null,t.Author),l.a.createElement("td",null,t.Category),l.a.createElement("td",null,l.a.createElement("h6",null,l.a.createElement("a",{onClick:function(){return e.props.onCartUpdate(t)}},a.has(t.id)?l.a.createElement("span",{className:"badge badge-danger"},"Remove"):l.a.createElement("span",{className:"badge badge-success"},"Add"))),l.a.createElement("h6",null,l.a.createElement("a",{href:t.Links[0]},l.a.createElement("span",{className:"badge badge-info"},"Download")))))})))))}}]),t}(l.a.Component)),p=a(3),h={"content-type":"application/json","api-Key":"B886F1DAC41FB38BA0126061A30AE32A"},E=function(e){return fetch("https://librarysearchservice.search.windows.net/indexes/booksindex/docs?api-version=2019-05-06&search="+e.text,{method:"GET",headers:h}).then(function(e){return e.json()}).then(function(e){return e.value})},g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Filter"),l.a.createElement("section",{className:"my-4"},l.a.createElement("h4",null,"Language"),l.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},l.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language1",name:"inlineDefaultRadiosExample",defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"language1"},"English")),l.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},l.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language2",name:"inlineDefaultRadiosExample"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"language2"},"Hindi")),l.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},l.a.createElement("input",{type:"radio",className:"custom-control-input",id:"language3",name:"inlineDefaultRadiosExample"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"language3"},"Spanish"))),l.a.createElement("section",{className:"my-4"},l.a.createElement("h4",null,"Format"),l.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format1",defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"format1"},"pdf")),l.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format2",defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"format2"},"epub")),l.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"format3",defaultChecked:!0}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"format3"},"txt"))),l.a.createElement("section",{className:"my-4"},l.a.createElement("h4",null,"Categories"),l.a.createElement("select",{className:"custom-select",style:{height:"500px"},multiple:!0},l.a.createElement("option",{value:"2"},"Math"),l.a.createElement("option",{value:"3"},"Science"),l.a.createElement("option",{value:"4"},"Arts & Music"),l.a.createElement("option",{value:"5"},"Biographies"),l.a.createElement("option",{value:"6"},"Business"),l.a.createElement("option",{value:"7"},"Finance"),l.a.createElement("option",{value:"8"},"Economics"),l.a.createElement("option",{value:"9"},"Computers & Tech"),l.a.createElement("option",{value:"1"},"Fairy Tales"),l.a.createElement("option",{value:"10"},"Fiction"))))}}]),t}(l.a.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],query:{text:"",language:"en",format:[],categories:[]},modal:!1},a.updateQueryText=function(e){var t=a.state.query;t.text=e,a.setState({query:t})},a.addAllBooks=function(){a.props.onCartAddAll(a.state.books)},a.removeAllBooks=function(){a.props.onCartRemoveAll(a.state.books)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onSearchClicked",value:function(e){e.preventDefault();var t=this;E(this.state.query).then(function(e){console.log(e),e&&t.setState({books:e})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row my-5"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement(g,null)),l.a.createElement("div",{className:"col-md-9"},l.a.createElement("form",{className:"form-inline mx-4 mb-4"},l.a.createElement("input",{className:"form-control",style:{width:"100%"},type:"search","aria-label":"Search",placeholder:"Search by title or author",value:this.state.query.text,onChange:function(t){return e.updateQueryText(t.target.value)}}),l.a.createElement("button",{className:"btn btn-primary btn-md ml-4 my-2 my-sm-0",onClick:function(t){return e.onSearchClicked(t)}},"Search")),l.a.createElement(d,{books:this.state.books,cart:this.props.cart,onCartUpdate:function(t){return e.props.onCartUpdate(t)},emptyResultString:""}),this.state.books&&this.state.books.length>0&&l.a.createElement(p.e,null,l.a.createElement(p.a,{color:"danger",disabled:this.state.books<=0,onClick:this.removeAllBooks},"Remove all"),l.a.createElement(p.a,{color:"primary",disabled:this.state.books<=0,onClick:this.addAllBooks},"Add all")))))}}]),t}(n.Component),b=a(18),f=a(21),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isModalOpen:!1,collection:{name:null,books:[]}},a.toggleCollectionModal=function(e){if(e){var t=Object(f.a)(a);E({text:"*"}).then(function(a){if(console.log(a),a){if(t.props.cart.size>0){var n=!0,l=!1,o=void 0;try{for(var r,c=a[Symbol.iterator]();!(n=(r=c.next()).done);n=!0){var s=r.value;t.props.cart.has(s.id)&&(s.isAdded=!0)}}catch(m){l=!0,o=m}finally{try{n||null==c.return||c.return()}finally{if(l)throw o}}}var i={name:e,books:a};t.setState({isModalOpen:!0,collection:i})}}).catch(function(e){console.log(e),alert("Failed to retrieve collection!")})}else a.setState({isModalOpen:!1,collection:{name:null,books:[]}})},a.addAllBooks=function(){a.props.onCartAddAll(a.state.collection.books)},a.removeAllBooks=function(){a.props.onCartRemoveAll(a.state.collection.books)},a.closeCollectionModal=function(){a.toggleCollectionModal(null)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row my-5"},l.a.createElement("div",{className:"card-deck"},l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/images/15.jpg",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"K-12 US Literature"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Robert Koester")),l.a.createElement("p",null,"Language: English"),l.a.createElement("p",{className:"card-text"},"This collection comprises works of American literature from colonial to contemporary times, including poetry, short stories, novels, drama, and nonfiction. The literary works provide opportunities for critical writing, creative projects, and online discussions. Students develop vocabulary skills and refresh their knowledge of grammar, usage, and mechanics in preparation for standardized tests."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("K-12 US Literature")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/images/15.jpg",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"STEM for high school students"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Darren Moffatt")),l.a.createElement("p",null,"Language: English, Spanish"),l.a.createElement("p",{className:"card-text"},"Discover meaningful, rigorous books and text sets for a fresh take on STEM/STEAM study. Our books explore the physical, life, health, earth and space sciences along with engineering, art, mathematics, and technology. These high-interest nonfiction, realistic fiction, and science fiction books provide an engaging opportunity to discuss timely topics that will expand student knowledge and inspire the scientists of the future."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("STEM for high school students")}},"Open collection"))),l.a.createElement("div",{className:"card xs-4"},l.a.createElement("div",{className:"view overlay"},l.a.createElement("img",{className:"card-img-top",src:"https://mdbootstrap.com/img/Photos/Others/images/15.jpg",alt:"Card image cap"}),l.a.createElement("a",null,l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Fairy Tales"),l.a.createElement("h6",null,"Curated by ",l.a.createElement("a",null,"Darren Moffatt")),l.a.createElement("p",null,"Language: English"),l.a.createElement("p",{className:"card-text"},"Read our huge collection of famous fairy tales and bedtime stories. Brothers Grimm fairy tales, Hans Christian Andersen, Charles Perrault, Aesop's fables,..."),l.a.createElement("button",{type:"button",className:"btn btn-primary btn-md",onClick:function(){return e.toggleCollectionModal("Fairy Tales")}},"Open collection"))))),l.a.createElement(p.d,{isOpen:this.state.isModalOpen,toggle:this.closeCollectionModal,centered:!0,size:"lg"},l.a.createElement(p.f,{toggle:this.closeCollectionModal},this.state.collection.name),l.a.createElement(d,{books:this.state.collection.books,cart:this.props.cart,onCartUpdate:function(t){return e.props.onCartUpdate(t)},emptyResultString:"Collection result is empty!"}),l.a.createElement(p.e,null,l.a.createElement(p.a,{color:"secondary",onClick:this.closeCollectionModal},"Close"),l.a.createElement(p.a,{color:"danger",disabled:this.state.collection.books<=0,onClick:this.removeAllBooks},"Remove all"),l.a.createElement(p.a,{color:"primary",disabled:this.state.collection.books<=0,onClick:this.addAllBooks},"Add all"))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={cart:new Map,modal:!1,navItem:""},a.toggleCartModal=function(){a.setState({modal:!a.state.modal})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"onCartUpdate",value:function(e){var t=this.state.cart;t.has(e.id)?t.delete(e.id):t.set(e.id,e),this.setState({cart:t})}},{key:"onCartAddAll",value:function(e){var t=!0,a=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value,c=this.state.cart;c.set(r.id,r),this.setState({cart:c})}}catch(s){a=!0,n=s}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}}},{key:"onCartRemoveAll",value:function(e){var t=!0,a=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value,c=this.state.cart;c.delete(r.id),this.setState({cart:c})}}catch(s){a=!0,n=s}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}}},{key:"updateNavItem",value:function(e){this.setState({navItem:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark primary-color"},l.a.createElement(p.g,{className:"navbar-brand",to:"/",href:"/"},"Dongle Library"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"+(""===this.state.navItem?" active":"")},l.a.createElement(p.g,{className:"nav-link",to:"/",href:"/",onClick:function(){return e.updateNavItem("")}},"Home",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"+("/explore"===this.state.navItem?" active":"")},l.a.createElement(p.g,{className:"nav-link",to:"/explore",href:"/explore",onClick:function(){return e.updateNavItem("/explore")}},"Explore",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("div",{className:"navbar-right"},l.a.createElement(p.b,null,l.a.createElement(p.a,{onClick:this.toggleCartModal},l.a.createElement(p.c,{icon:"shopping-cart",className:"mr-2"}),"Cart",l.a.createElement("span",{className:"badge badge-danger ml-2"},this.state.cart.size>100?"100+":this.state.cart.size)),l.a.createElement(p.d,{isOpen:this.state.modal,toggle:this.toggleCartModal,centered:!0,size:"lg"},l.a.createElement(p.f,{toggle:this.toggleCartModal},"Cart"),l.a.createElement(d,{books:Array.from(this.state.cart.values()),cart:this.state.cart,onCartUpdate:function(t){return e.onCartUpdate(t)},emptyResultString:"Your cart is empty!"}),l.a.createElement(p.e,null,l.a.createElement(p.a,{color:"secondary",onClick:this.toggleCartModal},"Close"),l.a.createElement(p.a,{color:"primary",disabled:this.state.cart.size<=0},"Download Now"))))))),l.a.createElement(b.a,{exact:!0,path:["/","/front-end"],render:function(){return l.a.createElement(v,{cart:e.state.cart,onCartUpdate:function(t){return e.onCartUpdate(t)},onCartAddAll:function(t){return e.onCartAddAll(t)},onCartRemoveAll:function(t){return e.onCartRemoveAll(t)}})}}),l.a.createElement(b.a,{exact:!0,path:"/explore",render:function(){return l.a.createElement(y,{cart:e.state.cart,onCartUpdate:function(t){return e.onCartUpdate(t)},onCartAddAll:function(t){return e.onCartAddAll(t)},onCartRemoveAll:function(t){return e.onCartRemoveAll(t)}})}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(20);r.a.render(l.a.createElement(N.a,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.0dc1d569.chunk.js.map