webpackJsonp([1],{Lamv:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[this._v("DHBW Vorlesungsplan")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(e){n("Lamv")},null,null).exports,s=n("/ocq"),a=n("mtWM"),c=n.n(a),u={data:function(){return{isLoading:!1,courses:{},course:"",ios:!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform),link:"webcal://"+window.location.host+"/lectures/"}},beforeMount:function(){this.fetchCourses()},methods:{subscribe:function(){window.location.href=this.link+this.course;var e=this;e.isLoading=!0,setTimeout(function(){e.isLoading=!1},1e4)},fetchCourses:function(){var e=this;c.a.get(window.location.origin+"/courses").then(function(t){e.courses=t.data})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.ios?n("div",[n("b-field",{attrs:{label:"1. Kurs wählen"}},[Object.keys(e.courses).length>0?n("b-select",{staticStyle:{"text-align":"center"},attrs:{placeholder:"Kurs",rounded:""},model:{value:e.course,callback:function(t){e.course=t},expression:"course"}},e._l(Object.keys(e.courses),function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(e.courses[t].title))])})):n("b-select",{staticStyle:{"text-align":"center"},attrs:{placeholder:"Kurs",rounded:"",loading:""}})],1),e._v(" "),e.course?n("b-field",{attrs:{label:"2. Kalender durch klick abonnieren"}},[n("div",[n("button",{staticClass:"button is-primary is-medium",attrs:{href:e.link+e.course},on:{click:e.subscribe}},[e._v("\n                    Abonnieren\n                ")])])]):e._e(),e._v(" "),n("b-loading",{attrs:{active:e.isLoading,canCancel:!0},on:{"update:active":function(t){e.isLoading=t}}})],1):n("div",[n("br"),e._v("\n        Leider funktioniert diese Seite derzeit nur auf iOS Geräten. Bitte schau später noch einmal vorbei!\n    ")])])},staticRenderFns:[]},d=n("VU/8")(u,l,!1,null,null,null).exports;i.a.use(s.a);var p=new s.a({routes:[{path:"/",name:"LandingPage",component:d}]}),f=n("MMSg"),v=n.n(f);n("doPI");i.a.use(v.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},doPI:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8ac8f2a2bfbc082831d2.js.map