this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["handpicked-products"]=function(t){function e(e){for(var n,i,u=e[0],s=e[1],a=e[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(l&&l(e);b.length;)b.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={10:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=s;return c.push([613,2,1]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e){!function(){t.exports=this.React}()},109:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(6),c=Object(n.createElement)("img",{src:o.o+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},12:function(t,e){!function(){t.exports=this.wp.url}()},13:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},14:function(t,e){!function(){t.exports=this.moment}()},15:function(t,e){!function(){t.exports=this.wp.blocks}()},22:function(t,e){!function(){t.exports=this.wp.compose}()},23:function(t,e){!function(){t.exports=this.wp.blockEditor}()},26:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(13),o=r.n(n),c=r(24),i=r.n(c),u=function(){var t=i()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return r=t.sent,t.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},27:function(t,e,r){"use strict";r.d(e,"g",(function(){return b})),r.d(e,"d",(function(){return p})),r.d(e,"a",(function(){return g})),r.d(e,"h",(function(){return f})),r.d(e,"e",(function(){return h})),r.d(e,"b",(function(){return O})),r.d(e,"c",(function(){return j})),r.d(e,"f",(function(){return m}));var n=r(8),o=r.n(n),c=r(12),i=r(9),u=r.n(i),s=r(5),a=r(6);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,u=void 0===i?[]:i,s={per_page:a.f?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",d(d({},s),u))];return a.f&&r.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id").map((function(t){return d(d({},t),{},{parent:0})}))})).catch((function(t){throw t}))},p=function(t){return u()({path:"/wc/store/products/".concat(t)})},g=function(){return u()({path:"wc/store/products/attributes"})},f=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},h=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:a.g?100:0,orderby:a.g?"count":"name",order:a.g?"desc":"asc",search:n})];return a.g&&r.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id")}))},O=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",d({per_page:0},t))})},j=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},m=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})}},28:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},30:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(28));e.a=function(t){var e,r,i,u=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=u).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},344:function(t,e,r){"use strict";var n=r(16),o=r.n(n),c=r(13),i=r.n(c),u=r(24),s=r.n(u),a=r(18),l=r.n(a),d=r(19),b=r.n(d),p=r(17),g=r.n(p),f=r(20),h=r.n(f),O=r(21),j=r.n(O),m=r(11),y=r.n(m),w=r(0),v=r(5),k=r(22),_=(r(2),r(6)),S=r(27),E=r(26);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=y()(t);if(e){var o=y()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j()(this,r)}}var C=Object(k.createHigherOrderComponent)((function(t){var e=function(e){h()(c,e);var r,n=P(c);function c(){var t;return l()(this,c),(t=n.apply(this,arguments)).state={list:[],loading:!0},t.setError=t.setError.bind(g()(t)),t.debouncedOnSearch=Object(v.debounce)(t.onSearch.bind(g()(t)),400),t}return b()(c,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;Object(S.g)({selected:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(t){var e=this,r=this.props.selected;Object(S.g)({selected:r,search:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"setError",value:(r=s()(i.a.mark((function t(e){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(E.a)(e);case 2:r=t.sent,this.setState({list:[],loading:!1,error:r});case 4:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this,r=this.state,n=r.error,c=r.list,i=r.loading;return Object(w.createElement)(t,o()({},this.props,{error:n,products:c,isLoading:i,onSearch:_.f?function(t){e.setState({loading:!0}),e.debouncedOnSearch(t)}:null}))}}]),c}(w.Component);return e.defaultProps={selected:[]},e}),"withSearchedProducts");e.a=C},362:function(t,e,r){},37:function(t,e){!function(){t.exports=this.wp.keycodes}()},4:function(t,e){!function(){t.exports=this.wp.components}()},40:function(t,e){!function(){t.exports=this.wp.editor}()},43:function(t,e,r){"use strict";var n=r(8),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(4));function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,s=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(a(a({},r),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(a(a({},r),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return e(a(a({},r),{},{rating:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(a(a({},r),{},{button:!n}))}}))}},47:function(t,e){!function(){t.exports=this.wp.hooks}()},49:function(t,e){!function(){t.exports=this.ReactDOM}()},5:function(t,e){!function(){t.exports=this.lodash}()},51:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(0),o=r(7),c=r.n(o),i=r(48),u=r.n(i),s=r(6);function a(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,d=r.products,b=r.columns||s.a,p=r.rows||s.c,g=new Map;switch(g.set("limit",p*b),g.set("columns",b),c&&c.length&&(g.set("category",c.join(",")),i&&"all"===i&&g.set("cat_operator","AND")),n&&n.length&&(g.set("terms",n.map((function(t){return t.id})).join(",")),g.set("attribute",n[0].attr_slug),o&&"all"===o&&g.set("terms_operator","AND")),l&&("price_desc"===l?(g.set("orderby","price"),g.set("order","DESC")):"price_asc"===l?(g.set("orderby","price"),g.set("order","ASC")):"date"===l?(g.set("orderby","date"),g.set("order","DESC")):g.set("orderby",l)),e){case"woocommerce/product-best-sellers":g.set("best_selling","1");break;case"woocommerce/product-top-rated":g.set("orderby","rating");break;case"woocommerce/product-on-sale":g.set("on_sale","1");break;case"woocommerce/product-new":g.set("orderby","date"),g.set("order","DESC");break;case"woocommerce/handpicked-products":if(!d.length)return"";g.set("ids",d.join(",")),g.set("limit",d.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var f,h="[products",O=a(g);try{for(O.s();!(f=O.n()).done;){var j=u()(f.value,2);h+=" "+j[0]+'="'+j[1]+'"'}}catch(t){O.e(t)}finally{O.f()}return h+="]"}(e,t))}}},52:function(t,e){!function(){t.exports=this.wp.viewport}()},6:function(t,e,r){"use strict";r.d(e,"m",(function(){return o})),r.d(e,"n",(function(){return c})),r.d(e,"h",(function(){return i})),r.d(e,"j",(function(){return u})),r.d(e,"a",(function(){return s})),r.d(e,"i",(function(){return a})),r.d(e,"l",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"k",(function(){return b})),r.d(e,"b",(function(){return p})),r.d(e,"f",(function(){return g})),r.d(e,"g",(function(){return f})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return O})),r.d(e,"o",(function(){return j}));var n=r(3),o=(Object(n.getSetting)("currentUserIsAdmin",!1),Object(n.getSetting)("reviewRatingsEnabled",!0)),c=Object(n.getSetting)("showAvatars",!0),i=Object(n.getSetting)("max_columns",6),u=Object(n.getSetting)("min_columns",1),s=Object(n.getSetting)("default_columns",3),a=Object(n.getSetting)("max_rows",6),l=Object(n.getSetting)("min_rows",1),d=Object(n.getSetting)("default_rows",3),b=Object(n.getSetting)("min_height",500),p=Object(n.getSetting)("default_height",500),g=(Object(n.getSetting)("placeholderImgSrc",""),Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),f=Object(n.getSetting)("limitTags"),h=(Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0)),O=Object(n.getSetting)("homeUrl",""),j=(Object(n.getSetting)("couponsEnabled",!0),Object(n.getSetting)("shippingEnabled",!0),Object(n.getSetting)("taxesEnabled",!0),Object(n.getSetting)("displayItemizedTaxes",!1),Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1),Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[]),Object(n.getSetting)("isShippingCalculatorEnabled",!0),Object(n.getSetting)("isShippingCostHidden",!1),Object(n.getSetting)("woocommerceBlocksPhase",1),Object(n.getSetting)("wcBlocksAssetUrl","")),m=(Object(n.getSetting)("wcBlocksBuildUrl",""),Object(n.getSetting)("shippingCountries",{}),Object(n.getSetting)("allowedCountries",{}),Object(n.getSetting)("shippingStates",{}),Object(n.getSetting)("allowedStates",{}),Object(n.getSetting)("shippingMethodsExist",!1),Object(n.getSetting)("checkoutShowLoginReminder",!0),{id:0,title:"",permalink:""}),y=Object(n.getSetting)("storePages",{shop:m,cart:m,checkout:m,privacy:m,terms:m});y.shop.permalink,y.checkout.id,y.checkout.permalink,y.privacy.permalink,y.privacy.title,y.terms.permalink,y.terms.title,y.cart.id,y.cart.permalink,Object(n.getSetting)("checkoutAllowsGuest",!1),Object(n.getSetting)("checkoutAllowsSignup",!1),r(15)},60:function(t,e,r){"use strict";var n=r(8),o=r.n(n),c=r(35),i=r.n(c),u=r(10);r(2);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)&&Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c))}},613:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),c=r(15),i=r(6),u=r(60),s=r(635),a=Object(n.createElement)(s.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"})),l=(r(362),r(18)),d=r.n(l),b=r(19),p=r.n(b),g=r(20),f=r.n(g),h=r(21),O=r.n(h),j=r(11),m=r.n(j),y=r(23),w=r(40),v=r(4),k=(r(2),r(43)),_=r(31),S=r(344),E=r(30),P=function(t){var e=t.error,r=t.onChange,c=t.onSearch,i=t.selected,u=t.products,s=t.isLoading,a={clear:Object(o.__)("Clear all products","woo-gutenberg-products-block"),list:Object(o.__)("Products","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(o.__)("Search for products to display","woo-gutenberg-products-block"),selected:function(t){return Object(o.sprintf)(Object(o._n)("%d product selected","%d products selected",t,"woo-gutenberg-products-block"),t)},updated:Object(o.__)("Product search results updated.","woo-gutenberg-products-block")};return e?Object(n.createElement)(E.a,{error:e}):Object(n.createElement)(_.a,{className:"woocommerce-products",list:u,isLoading:s,selected:u.filter((function(t){var e=t.id;return i.includes(e)})),onSearch:c,onChange:r,messages:a})};P.defaultProps={selected:[],products:[],isLoading:!0};var C=Object(S.a)(P),x=r(65),A=r(109);function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var o=m()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O()(this,r)}}var M=function(t){f()(r,t);var e=D(r);function r(){return d()(this,r),e.apply(this,arguments)}return p()(r,[{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,r=t.setAttributes,c=e.columns,u=e.contentVisibility,s=e.orderby,a=e.alignButtons;return Object(n.createElement)(y.InspectorControls,{key:"inspector"},Object(n.createElement)(v.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(v.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:c,onChange:function(t){return r({columns:t})},min:i.j,max:i.h}),Object(n.createElement)(v.ToggleControl,{label:Object(o.__)("Align Buttons","woo-gutenberg-products-block"),help:a?Object(o.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:a,onChange:function(){return r({alignButtons:!a})}})),Object(n.createElement)(v.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(k.a,{settings:u,onChange:function(t){return r({contentVisibility:t})}})),Object(n.createElement)(v.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(x.a,{setAttributes:r,value:s})),Object(n.createElement)(v.PanelBody,{title:Object(o.__)("Products","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(C,{selected:e.products,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));r({products:e})}})))}},{key:"renderEditMode",value:function(){var t=this.props,e=t.attributes,r=t.debouncedSpeak,c=t.setAttributes;return Object(n.createElement)(v.Placeholder,{icon:Object(n.createElement)(u.a,{srcElement:a}),label:Object(o.__)("Hand-picked Products","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-handpicked-products"},Object(o.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-handpicked-products__selection"},Object(n.createElement)(C,{selected:e.products,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));c({products:e})}}),Object(n.createElement)(v.Button,{isPrimary:!0,onClick:function(){c({editMode:!1}),r(Object(o.__)("Showing Hand-picked Products block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var t=this.props,e=t.attributes,r=t.name,c=t.setAttributes,i=e.editMode;return e.isPreview?A.a:Object(n.createElement)(n.Fragment,null,Object(n.createElement)(y.BlockControls,null,Object(n.createElement)(v.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(v.Disabled,null,Object(n.createElement)(w.ServerSideRender,{block:r,attributes:e})))}}]),r}(n.Component),B=Object(v.withSpokenMessages)(M),T=r(51);Object(c.registerBlockType)("woocommerce/handpicked-products",{title:Object(o.__)("Hand-picked Products","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(u.a,{srcElement:a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("Handpicked Products","woo-gutenberg-products-block"),Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{align:{type:"string"},columns:{type:"number",default:i.a},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]},alignButtons:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},deprecated:[{attributes:{align:{type:"string"},columns:{type:"number",default:i.a},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]}},save:Object(T.a)("woocommerce/handpicked-products")}],edit:function(t){return Object(n.createElement)(B,t)},save:function(){return null}})},62:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},63:function(t,e){!function(){t.exports=this.wp.date}()},65:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(4);r(2);e.a=function(t){var e=t.value,r=t.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return r({orderby:t})}})}},69:function(t,e){!function(){t.exports=this.wp.dom}()},73:function(t,e){},74:function(t,e){},75:function(t,e){},76:function(t,e){},77:function(t,e){},79:function(t,e){},80:function(t,e){},81:function(t,e){},82:function(t,e){},84:function(t,e){},85:function(t,e){},86:function(t,e){},87:function(t,e){},88:function(t,e){},9:function(t,e){!function(){t.exports=this.wp.apiFetch}()}});