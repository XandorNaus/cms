(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},5202:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("8bbf"),i=a.n(n),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.actions.length||e.showToolbar,expression:"actions.length || showToolbar"}],staticClass:"toolbar"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"selectallcontainer"},[a("div",{staticClass:"btn",attrs:{role:"checkbox",tabindex:"0","aria-checked":"false"},on:{click:e.handleSelectAll}},[a("div",{staticClass:"checkbox",class:{checked:!0===e.isSelectAll}})])]),e._l(e.actions,(function(t,n){return e.checks.length?a("div",{key:n},[a("admin-table-action-button",{attrs:{label:t.label,icon:t.icon,action:t.action,actions:t.actions,ids:e.checks},on:{reload:e.reload}})],1):e._e()}))],2)]),a("div",{staticClass:"tableview",class:{loading:e.isLoading}},[a("vuetable",{ref:"vuetable",attrs:{"per-page":e.perPage,css:e.tableCss,fields:e.fields,"api-url":e.apiUrl,"api-mode":!!e.apiUrl,data:e.tableData,"pagination-path":"links.pagination"},on:{"vuetable:loaded":e.init,"vuetable:pagination-data":e.onPaginationData},scopedSlots:e._u([{key:"checkbox",fn:function(t){return[a("admin-table-checkbox",{attrs:{id:t.rowData.id,checks:e.checks,"select-all":e.isSelectAll},on:{addCheck:e.addCheck,removeCheck:e.removeCheck}})]}},{key:"statusName",fn:function(t){return[void 0!==t.rowData.status?a("span",{staticClass:"status",class:{enabled:t.rowData.status}}):e._e(),t.rowData.url?a("a",{staticClass:"cell-bold",attrs:{href:"props.rowData.url"}},[e._v(e._s(t.rowData.name))]):e._e(),t.rowData.url?e._e():a("span",{staticClass:"cell-bold"},[e._v(e._s(t.rowData.name))])]}},{key:"reorder",fn:function(e){return[a("i",{staticClass:"move icon",attrs:{"data-id":e.rowData.id}})]}},{key:"delete",fn:function(t){return[a("admin-table-delete-button",{attrs:{id:t.rowData.id,name:t.rowData.name,"action-url":e.deleteAction},on:{reload:e.reload}})]}}])}),a("admin-table-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)])},r=[],o=a("75fc"),l=a("c3d0"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.tablePagination?a("div",{staticClass:"flex pagination"},[a("div",{staticClass:"page-link",class:[e.isOnFirstPage?"disabled":""],attrs:{"data-icon":"leftangle",title:"Previous Page"},on:{click:function(t){return e.loadPage("prev")}}}),a("div",{staticClass:"page-link",class:[e.isOnLastPage?"disabled":""],attrs:{"data-icon":"rightangle",title:"Next Page"},on:{click:function(t){return e.loadPage("next")}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.tablePagination,expression:"tablePagination"}],staticClass:"page-info"},[e._v(e._s(e.tablePagination.from)+"-"+e._s(e.tablePagination.to)+" of "+e._s(e.tablePagination.total))])]):e._e()},u=[],d=a("eb37"),h={name:"AdminTablePagination",mixins:[d["a"]]},f=h,p=a("2877"),b=Object(p["a"])(f,c,u,!1,null,"323af1d0",null),m=b.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"delete icon",attrs:{title:e._f("t")("Delete","app"),role:"button",href:"#"},on:{click:function(t){return t.preventDefault(),e.handleClick(t)}}})},g=[],k=(a("7f7f"),a("c5f6"),a("cebe")),C=a.n(k),_={name:"AdminTableDeleteButton",props:{id:[Number,String],name:String,actionUrl:String},data:function(){return{}},methods:{confirmDelete:function(e){return confirm(Craft.t("app","Are you sure you want to delete “{name}”?",{name:e}))},handleClick:function(){var e=this;this.confirmDelete(this.name)&&C.a.post(Craft.getActionUrl(this.actionUrl),{id:this.id},{headers:{"X-CSRF-Token":Craft.csrfTokenValue}}).then((function(t){t.data&&void 0!==t.data.success&&t.data.success&&(Craft.cp.displayNotice(Craft.t("app","“{name}” deleted.",{name:e.name})),e.$emit("reload"))}))}}},x=_,A=Object(p["a"])(x,v,g,!1,null,"d8d59e62",null),y=A.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"checkbox",class:{checked:e.isChecked},attrs:{title:e._f("t")("Select","app")},on:{click:function(t){return t.preventDefault(),e.handleClick(t)}}})},w=[],S={name:"AdminTableCheckbox",props:{id:Number,checked:Boolean,selectAll:Boolean,checks:Array},data:function(){return{}},computed:{isChecked:function(){return-1!==this.checks.indexOf(this.id)}},methods:{handleClick:function(){this.isChecked?this.$emit("removeCheck",this.id):this.$emit("addCheck",this.id)}},created:function(){},watch:{selectAll:function(){this.selectAll?this.$emit("addCheck",this.id):this.$emit("removeCheck",this.id)}}},D=S,O=Object(p["a"])(D,P,w,!1,null,"864fbe1a",null),T=O.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{ref:"adminMenuBtn",attrs:{method:"post"}},[a("input",{attrs:{type:"hidden",name:e.tokenName},domProps:{value:e.tokenValue}}),a("input",{attrs:{type:"hidden",name:"action"},domProps:{value:e.action}}),a("input",{attrs:{type:"hidden",name:e.param},domProps:{value:e.value}}),e._l(e.ids,(function(e,t){return a("input",{key:t,attrs:{type:"hidden",name:"ids[]"},domProps:{value:e}})})),a("div",{staticClass:"btn menubtn",attrs:{"data-icon":e.icon}},[e._v(e._s(e.label))]),e.actions.length?a("div",{staticClass:"menu"},[a("ul",{staticClass:"padded"},e._m(0),0)]):e._e()],2)},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return e._l(e.actions,(function(t,n){return a("li",{key:n},[a("a",{class:{error:void 0!==t.error&&t.error},attrs:{href:"#","data-param":t.param,"data-value":t.value,"data-ajax":t.ajax},on:{click:function(a){return a.preventDefault(),e.handleClick(t.param,t.value,t.action,t.ajax)}}},[t.status?a("span",{class:"status "+t.status}):e._e(),e._v(e._s(t.label)+"\n        ")])])}))}],M={name:"AdminTableActionButton",props:{label:String,icon:String,action:String,actions:Array,ids:Array},data:function(){return{tokenName:Craft.csrfTokenName,tokenValue:Craft.csrfTokenValue,param:"",value:""}},methods:{handleClick:function(e,t,a,n){var i=this;if(n){var s={ids:this.ids};s[e]=t,Craft.postActionRequest(a,s,(function(e){e.success&&Craft.cp.displayNotice(Craft.t("app","Updated.")),i.$emit("reload")}))}else this.action=a,this.param=e,this.value=t,this.$nextTick((function(){i.$refs.adminMenuBtn.submit()}))}},created:function(){},mounted:function(){var e=this;this.$nextTick((function(){Craft.initUiElements(e.$refs.adminMenuBtn)}))}},E=M,N=Object(p["a"])(E,$,j,!1,null,"25e29ec8",null),B=N.exports,U=a("aa47"),V={components:{Vuetable:l["a"],AdminTablePagination:m,AdminTableCheckbox:T,AdminTableDeleteButton:y,AdminTableActionButton:B},props:["actions","checkboxes","columns","container","deleteAction","tableDataEndpoint","perPage","reorderAction","reorderSuccessMessage","reorderFailMessage","tableData"],data:function(){return{checks:[],currentPage:1,tableClass:"data fullwidth",showToolbar:!1,isLoading:!0,isSelectAll:!1,sortable:null}},methods:{init:function(){var e=this.$el.querySelector(".vuetable-body");this.reorderAction&&e&&(this.sortable=U["a"].create(e,{handle:".move.icon",onSort:this.updateSortOrder})),this.isLoading=!1},updateSortOrder:function(e){var t=this,a=e.newIndex+(this.currentPage>1?(this.currentPage-1)*this.perPage:0);a+=1;var n=e.item.querySelector(".move.icon");if(n){var i={id:n.dataset.id,position:a};Craft.postActionRequest(this.reorderAction,i,(function(e){e&&e.success&&Craft.cp.displayNotice(t.reorderSuccessMessage)}))}else Craft.cp.displayError(this.reorderFailMessage)},addCheck:function(e){-1===this.checks.indexOf(e)&&this.checks.push(e)},removeCheck:function(e){var t=this.checks.indexOf(e);t>=0&&this.checks.splice(t,1)},handleSelectAll:function(){this.isSelectAll=!this.isSelectAll},deselectAll:function(){this.checks=[],this.isSelectAll=!1},reload:function(){this.isLoading=!0,this.deselectAll(),this.$refs.vuetable.reload()},onPaginationData:function(e){this.currentPage=e.current_page,this.$refs.pagination.setPaginationData(e)},onChangePage:function(e){this.$refs.vuetable.changePage(e)}},computed:{apiUrl:function(){return this.tableDataEndpoint?Craft.getActionUrl(this.tableDataEndpoint):""},fields:function(){var e=[];return this.checkboxes&&this.actions.length&&e.push({name:"__slot:checkbox",titleClass:"thin",dataClass:"checkbox-cell"}),e=[].concat(Object(o["a"])(e),Object(o["a"])(this.columns)),this.reorderAction&&e.push({name:"__slot:reorder",title:"",titleClass:"thin"}),this.deleteAction&&e.push({name:"__slot:delete",titleClass:"thin"}),e},tableCss:function(){return{tableClass:this.tableClass,handleIcon:"move icon",loadingClass:"loading"}}}},F=V,L=(a("5c0b"),Object(p["a"])(F,s,r,!1,null,null,null)),q=L.exports;function I(e,t,a){return Craft.t(t,e,a)}i.a.filter("t",I),Craft.VueAdminTable=Garnish.Base.extend({init:function(e){this.setSettings(e,Craft.VueAdminTable.defaults);var t=this.settings;return new i.a({components:{App:q},data:function(){return{}},render:function(e){return e(q,{props:t})}}).$mount(this.settings.container)}},{defaults:{actions:[],checkboxes:!1,columns:[],container:null,deleteAction:null,perPage:3,reorderAction:null,reorderSuccessMessage:Craft.t("app","Items reordered."),reorderFailMessage:Craft.t("app","Couldn’t reorder items."),search:!1,tableData:[],tableDataEndpoint:null}})},"5c0b":function(e,t,a){"use strict";var n=a("5202"),i=a.n(n);i.a},"8bbf":function(e,t){e.exports=Vue},cebe:function(e,t){e.exports=axios}});
//# sourceMappingURL=app.js.map