(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{302:function(e,t,a){e.exports={users:"Users_users__3YskH"}},303:function(e,t,a){e.exports={user:"User_Item_user__3QkvN",user_wrapper:"User_Item_user_wrapper__3YhgG",name:"User_Item_name__1ReeB",city:"User_Item_city__fA4K5",mob_btn:"User_Item_mob_btn__17lt9"}},304:function(e,t,a){e.exports={pagination:"Pagination_pagination__mqiy-",selected:"Pagination_selected__1HJP1"}},306:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(302),o=a.n(s),l=a(104),i=a(6),c=a(303),u=a.n(c),m=a(12),f=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:u.a.user_wrapper},r.a.createElement("div",{className:u.a.user},r.a.createElement(m.b,{to:"/profile/".concat(e.user.id)},r.a.createElement("img",{src:e.user.photos.small?e.user.photos.small:"https://baturevich.ru/images/cn/user2.jpg",alt:"user-img"})),r.a.createElement("div",{className:u.a.name_and_city},r.a.createElement(m.b,{to:"/profile/".concat(e.user.id)},r.a.createElement("p",{className:u.a.name},e.user.name)),r.a.createElement("p",{className:u.a.city},e.user.city?e.user.city:"Chelyabinsk")),e.user.followed?r.a.createElement("button",{disabled:e.followInProgress.some((function(t){return t===e.user.id})),onClick:function(){return e.unFollowedUser(e.user.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followInProgress.some((function(t){return t===e.user.id})),onClick:function(){return e.followedUser(e.user.id)}},"Follow")),"mobile"===e.device?e.user.followed?r.a.createElement("button",{className:u.a.mob_btn,disabled:e.followInProgress.some((function(t){return t===e.user.id})),onClick:function(){return e.unFollowedUser(e.user.id)}},"Unfollow"):r.a.createElement("button",{className:u.a.mob_btn,disabled:e.followInProgress.some((function(t){return t===e.user.id})),onClick:function(){return e.followedUser(e.user.id)}},"Follow"):null)))},d=a(94),p=a(53),g=a(304),_=a.n(g),w=r.a.memo((function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],s=0;s<=t;s++)s>0&&a.push(s);var o=Object(n.useState)(1),l=Object(p.a)(o,2),i=l[0],c=l[1],u=Math.ceil(t/(e.portionSize||10)),m=(i-1)*e.portionSize,f=i*e.portionSize;return r.a.createElement("ul",{className:_.a.pagination},i>1&&r.a.createElement("span",{onClick:function(){return c(i-1)}},r.a.createElement("i",{className:"fa fa-angle-left"})),a.filter((function(e){return e>=m&&e<=f})).map((function(t){return r.a.createElement("li",{key:Math.random(0),className:e.currentPage===t&&_.a.selected,onClick:function(){return function(t){var a=t;e.onChangePage(a,e.pageSize)}(t)}},t)})),u>i&&r.a.createElement("span",{onClick:function(){return c(i+1)}},r.a.createElement("i",{className:"fa fa-angle-right"})))}));t.default=Object(i.b)((function(e){return{users:e.users_page.users,totalUsersCount:e.users_page.totalUsersCount,currentPage:e.users_page.currentPage,pageSize:e.users_page.pageSize,isLoading:e.users_page.isLoading,followInProgress:e.users_page.followInProgress,device:e.app.device}}),{getUsersTC:l.c,followTC:l.b,unFollowTC:l.d})((function(e){Object(n.useEffect)((function(){e.getUsersTC(e.currentPage,e.pageSize)}),[]);var t=function(t){e.followTC(t)},a=function(t){e.unFollowTC(t)};return r.a.createElement("div",{className:o.a.users},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(w,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onChangePage:function(t,a){e.getUsersTC(t,a)},portionSize:"mobile"===e.device?5:20}),e.isLoading?r.a.createElement(d.a,null):e.users.map((function(n){return r.a.createElement(f,{key:3*Math.random(),user:n,unFollowedUser:a,followedUser:t,followInProgress:e.followInProgress,device:e.device})})))))}))}}]);
//# sourceMappingURL=4.9a30b717.chunk.js.map