(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-520ec366"],{"32c0":function(e,t,s){},"41b9":function(e,t,s){e.exports=s.p+"img/avatar-default.849d500f.jpg"},"8b5a":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"titleBar"},[i("div",{staticClass:"float-left cursor-pointer",on:{click:e.logout}},[i("i",{staticClass:"fal fa-sign-out-alt"}),e._v(" Logout ")]),i("div",{staticClass:"float-right"},[i("div",{staticClass:"title"},[e._v(" "+e._s(e.user.username)+" ")]),i("img",{attrs:{src:e.user.profilePic||s("41b9")}})])]),i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[e._v(" Friends "),e.user.friends&&e.user.friends.length?i("span",[e._v(" - ["+e._s(e.user.friends.length)+"]")]):e._e(),i("div",{on:{click:e.reloadFriends}},[i("i",{staticClass:"fas fa-sync-alt float-right clickable"})])]),e.user.friends?[e.user.friends.length?e._l(e.user.friends,(function(t){return i("div",{key:t.uid,staticClass:"friend"},[i("img",{staticClass:"clickable round-highlight",attrs:{src:t.avatar}}),i("div",{staticClass:"name"},[e._v(" "+e._s(t.username)+" ")])])})):i("em",[e._v("No Friends online")])]:e._e(),i("div",{staticClass:"header"},[e._v(" Settings ")]),i("em",[e._v("Settings currently not available")])],2),i("div",{staticClass:"footer"},[e._v(" Core version: "),i("em",[e._v(e._s(e.coreVersion))]),i("br"),e._v(" Launcher version: "),i("em",[e._v(e._s(e.launcherUIVersion))])])])},n=[],r=s("5530"),a=s("2f62"),c={computed:Object(r["a"])(Object(r["a"])({},Object(a["b"])({user:"authentication/user"})),{},{showPeek:function(){return this.$store.getters["ui/showPeek"]},coreVersion:function(){return launcherVersion()},launcherUIVersion:function(){return"2.2.1"}}),created:function(){this.user.friends.length||this.reloadFriends()},methods:{checkClose:function(e){e.target===this.$el&&this.closePeek()},closePeek:function(){this.$store.dispatch("ui/setPeek",!1)},logout:function(){this.closePeek(),this.$store.dispatch("authentication/logout")},reloadFriends:function(){this.$store.dispatch("authentication/loadFriends")}}},o=c,l=(s("e95f"),s("2877")),u=Object(l["a"])(o,i,n,!1,null,"a6e43a64",null);t["default"]=u.exports},e95f:function(e,t,s){"use strict";s("32c0")}}]);
//# sourceMappingURL=chunk-520ec366.59e39e11.js.map