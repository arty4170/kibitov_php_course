(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),o=n("c65b"),s=n("e330"),a=n("1626"),c=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=i.Error,h=s(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!a(t))return h(this,e);var n=o(t,this,e);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=n("40d5"),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return s(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):o(i(e))}},"06c5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f"),n("00b4");var r=n("6b75");function i(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},"07ac":function(e,t,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,o(t)&&(t===u||i(t.prototype))?t=void 0:s(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0ca9":function(e,t,n){},"0cb2":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=Math.floor,s=r("".charAt),a=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,g=l;return void 0!==h&&(h=i(h),g=u),a(d,g,(function(i,a){var u;switch(s(a,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,f);case"<":u=h[c(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>p){var d=o(l/10);return 0===d?i:d<=p?void 0===r[d-1]?s(a,1):r[d-1]+s(a,1):i}u=r[l-1]}return void 0===u?"":u}))}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d3b":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("c430"),s=i("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),o&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[s]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),s=n("d784"),a=n("44e7"),c=n("825a"),u=n("1d80"),l=n("4840"),h=n("8aa5"),d=n("50c4"),f=n("577e"),p=n("dc4a"),g=n("4dae"),m=n("14c3"),v=n("9263"),_=n("9f7f"),b=n("d039"),y=_.UNSUPPORTED_Y,w=4294967295,O=Math.min,C=[].push,k=o(/./.exec),I=o(C),E=o("".slice),T=!b((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));s("split",(function(e,t,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var o=f(u(this)),s=void 0===n?w:n>>>0;if(0===s)return[];if(void 0===e)return[o];if(!a(e))return i(t,o,e,s);var c,l,h,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,_=new RegExp(e.source,p+"g");while(c=i(v,_,o)){if(l=_.lastIndex,l>m&&(I(d,E(o,m,c.index)),c.length>1&&c.index<o.length&&r(C,d,g(c,1)),h=c[0].length,m=l,d.length>=s))break;_.lastIndex===c.index&&_.lastIndex++}return m===o.length?!h&&k(_,"")||I(d,""):I(d,E(o,m)),d.length>s?g(d,0,s):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:i(t,this,e,n)}:t,[function(t,n){var r=u(this),s=void 0==t?void 0:p(t,e);return s?i(s,t,r,n):i(o,f(r),t,n)},function(e,r){var i=c(this),s=f(e),a=n(o,i,s,r,o!==t);if(a.done)return a.value;var u=l(i,RegExp),p=i.unicode,g=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(y?"g":"y"),v=new u(y?"^(?:"+i.source+")":i,g),_=void 0===r?w:r>>>0;if(0===_)return[];if(0===s.length)return null===m(v,s)?[s]:[];var b=0,C=0,k=[];while(C<s.length){v.lastIndex=y?0:C;var T,S=m(v,y?E(s,C):s);if(null===S||(T=O(d(v.lastIndex+(y?C:0)),s.length))===b)C=h(s,C,p);else{if(I(k,E(s,b,C)),k.length===_)return k;for(var x=1;x<=S.length-1;x++)if(I(k,S[x]),k.length===_)return k;C=b=T}}return I(k,E(s,b)),k}]}),!T,y)},"14c0":function(e,t,n){"use strict";n("ac1f"),n("1276");function r(e,t){return t[e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]}t["a"]={isoName:"ru",nativeName:"русский",label:{clear:"Очистить",ok:"OK",cancel:"Отмена",close:"Закрыть",set:"Установить",select:"Выбрать",reset:"Сбросить",remove:"Удалить",update:"Обновить",create:"Создать",search:"Поиск",filter:"Фильтр",refresh:"Обновить"},date:{days:"Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),daysShort:"Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),months:"Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_"),monthsShort:"Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"дней"},table:{noData:"Нет данных",noResults:"Совпадений не найдено",loading:"Загрузка...",selectedRecords:function(e){return e>0?e+" "+r(e,["строка выбрана","строки выбраны","строк выбрано"])+".":"Ни одна строка не выбрана."},recordsPerPage:"Строк на странице:",allRows:"Все",pagination:function(e,t,n){return e+"-"+t+" из "+n},columns:"Колонки"},editor:{url:"URL",bold:"Полужирный",italic:"Курсив",strikethrough:"Зачеркнутый",underline:"Подчеркнутый",unorderedList:"Маркированный список",orderedList:"Нумерованный список",subscript:"Подстрочный",superscript:"Надстрочный",hyperlink:"Гиперссылка",toggleFullscreen:"Полноэкранный режим",quote:"Цитата",left:"Выравнивание по левому краю",center:"Выравнивание по центру",right:"Выравнивание по правому краю",justify:"Выравнивание по ширине",print:"Печать",outdent:"Уменьшить отступ",indent:"Увеличить отступ",removeFormat:"Удалить форматирование",formatting:"Форматирование",fontSize:"Размер шрифта",align:"Выравнивание",hr:"Вставить горизонтальную линию",undo:"Отменить",redo:"Повторить",heading1:"Заголовок 1",heading2:"Заголовок 2",heading3:"Заголовок 3",heading4:"Заголовок 4",heading5:"Заголовок 5",heading6:"Заголовок 6",paragraph:"Параграф",code:"Код",size1:"Очень маленький",size2:"Маленький",size3:"Нормальный",size4:"Средний",size5:"Большой",size6:"Очень большой",size7:"Огромный",defaultFont:"Шрифт по умолчанию",viewSource:"Просмотреть исходный код"},tree:{noNodes:"Нет доступных узлов",noResults:"Совпадений не найдено"}}},"14c3":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("825a"),s=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var r=i(n,e,t);return null!==r&&o(r),r}if("RegExp"===a(e))return i(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return H})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return N})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return W})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return D})),n.d(t,"o",(function(){return G})),n.d(t,"p",(function(){return z})),n.d(t,"q",(function(){return J})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return P})),n.d(t,"t",(function(){return b})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return w})),n.d(t,"w",(function(){return _})),n.d(t,"x",(function(){return O})),n.d(t,"y",(function(){return y})),n.d(t,"z",(function(){return R})),n.d(t,"A",(function(){return S})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return U})),n.d(t,"D",(function(){return q})),n.d(t,"E",(function(){return A})),n.d(t,"F",(function(){return Y})),n.d(t,"G",(function(){return K})),n.d(t,"H",(function(){return x}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=s(e);return c.encodeByteArray(t,!0)},l=function(e){return u(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){const e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?E(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new k(r,s,n);return a}}function E(e,t){return e.replace(T,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return JSON.parse(e)}function x(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=S(h(o[0])||""),n=S(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},R=function(e){const t=j(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},P=function(e){const t=j(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(F(n)&&F(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function z(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function W(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=V(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=$),void 0===r.error&&(r.error=$),void 0===r.complete&&(r.complete=$);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function $(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},Y=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,g=function(e,t){this.stopped=e,this.result=t},m=g.prototype;e.exports=function(e,t,n){var r,v,_,b,y,w,O,C=n&&n.that,k=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),E=!(!n||!n.INTERRUPTED),T=i(t,C),S=function(e){return r&&f(r,"normal",e),new g(!0,e)},x=function(e){return k?(s(e),E?T(e[0],e[1],S):T(e[0],e[1])):E?T(e,S):T(e)};if(I)r=e;else{if(v=d(e),!v)throw p(a(e)+" is not iterable");if(c(v)){for(_=0,b=u(e);b>_;_++)if(y=x(e[_]),y&&l(m,y))return y;return new g(!1)}r=h(e,v)}w=r.next;while(!(O=o(w,r)).done){try{y=x(O.value)}catch(j){f(r,"throw",j)}if("object"==typeof y&&y&&l(m,y))return y}return new g(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},2532:function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("5a34"),s=n("1d80"),a=n("577e"),c=n("ab13"),u=i("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~u(a(s(this)),a(o(e)),arguments.length>1?arguments[1]:void 0)}})},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var i="firebase",o="9.6.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"2b3d":function(e,t,n){"use strict";n("3ca3");var r,i=n("23e7"),o=n("83ab"),s=n("0d3b"),a=n("da84"),c=n("0366"),u=n("e330"),l=n("37e8").f,h=n("6eeb"),d=n("19aa"),f=n("1a2d"),p=n("60da"),g=n("4df4"),m=n("4dae"),v=n("6547").codeAt,_=n("5fb2"),b=n("577e"),y=n("d44e"),w=n("9861"),O=n("69f3"),C=O.set,k=O.getterFor("URL"),I=w.URLSearchParams,E=w.getState,T=a.URL,S=a.TypeError,x=a.parseInt,j=Math.floor,R=Math.pow,P=u("".charAt),N=u(/./.exec),A=u([].join),L=u(1..toString),M=u([].pop),D=u([].push),F=u("".replace),U=u([].shift),q=u("".split),z=u("".slice),H=u("".toLowerCase),W=u([].unshift),B="Invalid authority",V="Invalid scheme",$="Invalid host",G="Invalid port",K=/[a-z]/i,Y=/[\d+-.a-z]/i,J=/\d/,Q=/^0x/i,X=/^[0-7]+$/,Z=/^\d+$/,ee=/^[\da-f]+$/i,te=/[\0\t\n\r #%/:<>?@[\\\]^|]/,ne=/[\0\t\n\r #/:<>?@[\\\]^|]/,re=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,ie=/[\t\n\r]/g,oe=function(e){var t,n,r,i,o,s,a,c=q(e,".");if(c.length&&""==c[c.length-1]&&c.length--,t=c.length,t>4)return e;for(n=[],r=0;r<t;r++){if(i=c[r],""==i)return e;if(o=10,i.length>1&&"0"==P(i,0)&&(o=N(Q,i)?16:8,i=z(i,8==o?1:2)),""===i)s=0;else{if(!N(10==o?Z:8==o?X:ee,i))return e;s=x(i,o)}D(n,s)}for(r=0;r<t;r++)if(s=n[r],r==t-1){if(s>=R(256,5-t))return null}else if(s>255)return null;for(a=M(n),r=0;r<n.length;r++)a+=n[r]*R(256,3-r);return a},se=function(e){var t,n,r,i,o,s,a,c=[0,0,0,0,0,0,0,0],u=0,l=null,h=0,d=function(){return P(e,h)};if(":"==d()){if(":"!=P(e,1))return;h+=2,u++,l=u}while(d()){if(8==u)return;if(":"!=d()){t=n=0;while(n<4&&N(ee,d()))t=16*t+x(d(),16),h++,n++;if("."==d()){if(0==n)return;if(h-=n,u>6)return;r=0;while(d()){if(i=null,r>0){if(!("."==d()&&r<4))return;h++}if(!N(J,d()))return;while(N(J,d())){if(o=x(d(),10),null===i)i=o;else{if(0==i)return;i=10*i+o}if(i>255)return;h++}c[u]=256*c[u]+i,r++,2!=r&&4!=r||u++}if(4!=r)return;break}if(":"==d()){if(h++,!d())return}else if(d())return;c[u++]=t}else{if(null!==l)return;h++,u++,l=u}}if(null!==l){s=u-l,u=7;while(0!=u&&s>0)a=c[u],c[u--]=c[l+s-1],c[l+--s]=a}else if(8!=u)return;return c},ae=function(e){for(var t=null,n=1,r=null,i=0,o=0;o<8;o++)0!==e[o]?(i>n&&(t=r,n=i),r=null,i=0):(null===r&&(r=o),++i);return i>n&&(t=r,n=i),t},ce=function(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)W(t,e%256),e=j(e/256);return A(t,".")}if("object"==typeof e){for(t="",r=ae(e),n=0;n<8;n++)i&&0===e[n]||(i&&(i=!1),r===n?(t+=n?":":"::",i=!0):(t+=L(e[n],16),n<7&&(t+=":")));return"["+t+"]"}return e},ue={},le=p({},ue,{" ":1,'"':1,"<":1,">":1,"`":1}),he=p({},le,{"#":1,"?":1,"{":1,"}":1}),de=p({},he,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),fe=function(e,t){var n=v(e,0);return n>32&&n<127&&!f(t,e)?e:encodeURIComponent(e)},pe={ftp:21,file:null,http:80,https:443,ws:80,wss:443},ge=function(e,t){var n;return 2==e.length&&N(K,P(e,0))&&(":"==(n=P(e,1))||!t&&"|"==n)},me=function(e){var t;return e.length>1&&ge(z(e,0,2))&&(2==e.length||"/"===(t=P(e,2))||"\\"===t||"?"===t||"#"===t)},ve=function(e){return"."===e||"%2e"===H(e)},_e=function(e){return e=H(e),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},be={},ye={},we={},Oe={},Ce={},ke={},Ie={},Ee={},Te={},Se={},xe={},je={},Re={},Pe={},Ne={},Ae={},Le={},Me={},De={},Fe={},Ue={},qe=function(e,t,n){var r,i,o,s=b(e);if(t){if(i=this.parse(s),i)throw S(i);this.searchParams=null}else{if(void 0!==n&&(r=new qe(n,!0)),i=this.parse(s,null,r),i)throw S(i);o=E(new I),o.bindURL(this),this.searchParams=o}};qe.prototype={type:"URL",parse:function(e,t,n){var i,o,s,a,c=this,u=t||be,l=0,h="",d=!1,p=!1,v=!1;e=b(e),t||(c.scheme="",c.username="",c.password="",c.host=null,c.port=null,c.path=[],c.query=null,c.fragment=null,c.cannotBeABaseURL=!1,e=F(e,re,"")),e=F(e,ie,""),i=g(e);while(l<=i.length){switch(o=i[l],u){case be:if(!o||!N(K,o)){if(t)return V;u=we;continue}h+=H(o),u=ye;break;case ye:if(o&&(N(Y,o)||"+"==o||"-"==o||"."==o))h+=H(o);else{if(":"!=o){if(t)return V;h="",u=we,l=0;continue}if(t&&(c.isSpecial()!=f(pe,h)||"file"==h&&(c.includesCredentials()||null!==c.port)||"file"==c.scheme&&!c.host))return;if(c.scheme=h,t)return void(c.isSpecial()&&pe[c.scheme]==c.port&&(c.port=null));h="","file"==c.scheme?u=Pe:c.isSpecial()&&n&&n.scheme==c.scheme?u=Oe:c.isSpecial()?u=Ee:"/"==i[l+1]?(u=Ce,l++):(c.cannotBeABaseURL=!0,D(c.path,""),u=De)}break;case we:if(!n||n.cannotBeABaseURL&&"#"!=o)return V;if(n.cannotBeABaseURL&&"#"==o){c.scheme=n.scheme,c.path=m(n.path),c.query=n.query,c.fragment="",c.cannotBeABaseURL=!0,u=Ue;break}u="file"==n.scheme?Pe:ke;continue;case Oe:if("/"!=o||"/"!=i[l+1]){u=ke;continue}u=Te,l++;break;case Ce:if("/"==o){u=Se;break}u=Me;continue;case ke:if(c.scheme=n.scheme,o==r)c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=m(n.path),c.query=n.query;else if("/"==o||"\\"==o&&c.isSpecial())u=Ie;else if("?"==o)c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=m(n.path),c.query="",u=Fe;else{if("#"!=o){c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=m(n.path),c.path.length--,u=Me;continue}c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,c.path=m(n.path),c.query=n.query,c.fragment="",u=Ue}break;case Ie:if(!c.isSpecial()||"/"!=o&&"\\"!=o){if("/"!=o){c.username=n.username,c.password=n.password,c.host=n.host,c.port=n.port,u=Me;continue}u=Se}else u=Te;break;case Ee:if(u=Te,"/"!=o||"/"!=P(h,l+1))continue;l++;break;case Te:if("/"!=o&&"\\"!=o){u=Se;continue}break;case Se:if("@"==o){d&&(h="%40"+h),d=!0,s=g(h);for(var _=0;_<s.length;_++){var y=s[_];if(":"!=y||v){var w=fe(y,de);v?c.password+=w:c.username+=w}else v=!0}h=""}else if(o==r||"/"==o||"?"==o||"#"==o||"\\"==o&&c.isSpecial()){if(d&&""==h)return B;l-=g(h).length+1,h="",u=xe}else h+=o;break;case xe:case je:if(t&&"file"==c.scheme){u=Ae;continue}if(":"!=o||p){if(o==r||"/"==o||"?"==o||"#"==o||"\\"==o&&c.isSpecial()){if(c.isSpecial()&&""==h)return $;if(t&&""==h&&(c.includesCredentials()||null!==c.port))return;if(a=c.parseHost(h),a)return a;if(h="",u=Le,t)return;continue}"["==o?p=!0:"]"==o&&(p=!1),h+=o}else{if(""==h)return $;if(a=c.parseHost(h),a)return a;if(h="",u=Re,t==je)return}break;case Re:if(!N(J,o)){if(o==r||"/"==o||"?"==o||"#"==o||"\\"==o&&c.isSpecial()||t){if(""!=h){var O=x(h,10);if(O>65535)return G;c.port=c.isSpecial()&&O===pe[c.scheme]?null:O,h=""}if(t)return;u=Le;continue}return G}h+=o;break;case Pe:if(c.scheme="file","/"==o||"\\"==o)u=Ne;else{if(!n||"file"!=n.scheme){u=Me;continue}if(o==r)c.host=n.host,c.path=m(n.path),c.query=n.query;else if("?"==o)c.host=n.host,c.path=m(n.path),c.query="",u=Fe;else{if("#"!=o){me(A(m(i,l),""))||(c.host=n.host,c.path=m(n.path),c.shortenPath()),u=Me;continue}c.host=n.host,c.path=m(n.path),c.query=n.query,c.fragment="",u=Ue}}break;case Ne:if("/"==o||"\\"==o){u=Ae;break}n&&"file"==n.scheme&&!me(A(m(i,l),""))&&(ge(n.path[0],!0)?D(c.path,n.path[0]):c.host=n.host),u=Me;continue;case Ae:if(o==r||"/"==o||"\\"==o||"?"==o||"#"==o){if(!t&&ge(h))u=Me;else if(""==h){if(c.host="",t)return;u=Le}else{if(a=c.parseHost(h),a)return a;if("localhost"==c.host&&(c.host=""),t)return;h="",u=Le}continue}h+=o;break;case Le:if(c.isSpecial()){if(u=Me,"/"!=o&&"\\"!=o)continue}else if(t||"?"!=o)if(t||"#"!=o){if(o!=r&&(u=Me,"/"!=o))continue}else c.fragment="",u=Ue;else c.query="",u=Fe;break;case Me:if(o==r||"/"==o||"\\"==o&&c.isSpecial()||!t&&("?"==o||"#"==o)){if(_e(h)?(c.shortenPath(),"/"==o||"\\"==o&&c.isSpecial()||D(c.path,"")):ve(h)?"/"==o||"\\"==o&&c.isSpecial()||D(c.path,""):("file"==c.scheme&&!c.path.length&&ge(h)&&(c.host&&(c.host=""),h=P(h,0)+":"),D(c.path,h)),h="","file"==c.scheme&&(o==r||"?"==o||"#"==o))while(c.path.length>1&&""===c.path[0])U(c.path);"?"==o?(c.query="",u=Fe):"#"==o&&(c.fragment="",u=Ue)}else h+=fe(o,he);break;case De:"?"==o?(c.query="",u=Fe):"#"==o?(c.fragment="",u=Ue):o!=r&&(c.path[0]+=fe(o,ue));break;case Fe:t||"#"!=o?o!=r&&("'"==o&&c.isSpecial()?c.query+="%27":c.query+="#"==o?"%23":fe(o,ue)):(c.fragment="",u=Ue);break;case Ue:o!=r&&(c.fragment+=fe(o,le));break}l++}},parseHost:function(e){var t,n,r;if("["==P(e,0)){if("]"!=P(e,e.length-1))return $;if(t=se(z(e,1,-1)),!t)return $;this.host=t}else if(this.isSpecial()){if(e=_(e),N(te,e))return $;if(t=oe(e),null===t)return $;this.host=t}else{if(N(ne,e))return $;for(t="",n=g(e),r=0;r<n.length;r++)t+=fe(n[r],ue);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return f(pe,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"==this.scheme&&1==t&&ge(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,n=e.username,r=e.password,i=e.host,o=e.port,s=e.path,a=e.query,c=e.fragment,u=t+":";return null!==i?(u+="//",e.includesCredentials()&&(u+=n+(r?":"+r:"")+"@"),u+=ce(i),null!==o&&(u+=":"+o)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?s[0]:s.length?"/"+A(s,"/"):"",null!==a&&(u+="?"+a),null!==c&&(u+="#"+c),u},setHref:function(e){var t=this.parse(e);if(t)throw S(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"==e)try{return new ze(e.path[0]).origin}catch(n){return"null"}return"file"!=e&&this.isSpecial()?e+"://"+ce(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(b(e)+":",be)},getUsername:function(){return this.username},setUsername:function(e){var t=g(b(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var n=0;n<t.length;n++)this.username+=fe(t[n],de)}},getPassword:function(){return this.password},setPassword:function(e){var t=g(b(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var n=0;n<t.length;n++)this.password+=fe(t[n],de)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?ce(e):ce(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,xe)},getHostname:function(){var e=this.host;return null===e?"":ce(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,je)},getPort:function(){var e=this.port;return null===e?"":b(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(e=b(e),""==e?this.port=null:this.parse(e,Re))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+A(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,Le))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){e=b(e),""==e?this.query=null:("?"==P(e,0)&&(e=z(e,1)),this.query="",this.parse(e,Fe)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){e=b(e),""!=e?("#"==P(e,0)&&(e=z(e,1)),this.fragment="",this.parse(e,Ue)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var ze=function(e){var t=d(this,He),n=arguments.length>1?arguments[1]:void 0,r=C(t,new qe(e,!1,n));o||(t.href=r.serialize(),t.origin=r.getOrigin(),t.protocol=r.getProtocol(),t.username=r.getUsername(),t.password=r.getPassword(),t.host=r.getHost(),t.hostname=r.getHostname(),t.port=r.getPort(),t.pathname=r.getPathname(),t.search=r.getSearch(),t.searchParams=r.getSearchParams(),t.hash=r.getHash())},He=ze.prototype,We=function(e,t){return{get:function(){return k(this)[e]()},set:t&&function(e){return k(this)[t](e)},configurable:!0,enumerable:!0}};if(o&&l(He,{href:We("serialize","setHref"),origin:We("getOrigin"),protocol:We("getProtocol","setProtocol"),username:We("getUsername","setUsername"),password:We("getPassword","setPassword"),host:We("getHost","setHost"),hostname:We("getHostname","setHostname"),port:We("getPort","setPort"),pathname:We("getPathname","setPathname"),search:We("getSearch","setSearch"),searchParams:We("getSearchParams"),hash:We("getHash","setHash")}),h(He,"toJSON",(function(){return k(this).serialize()}),{enumerable:!0}),h(He,"toString",(function(){return k(this).serialize()}),{enumerable:!0}),T){var Be=T.createObjectURL,Ve=T.revokeObjectURL;Be&&h(ze,"createObjectURL",c(Be,T)),Ve&&h(ze,"revokeObjectURL",c(Ve,T))}y(ze,"URL"),i({global:!0,forced:!s,sham:!o},{URL:ze})},"2ba4":function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},"2ca0":function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("06cf").f,s=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),h=n("c430"),d=i("".startsWith),f=i("".slice),p=Math.min,g=l("startsWith"),m=!h&&!g&&!!function(){var e=o(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!m&&!g},{startsWith:function(e){var t=a(u(this));c(e);var n=s(p(arguments.length>1?arguments[1]:void 0,t.length)),r=a(e);return d?d(t,r,n):f(t,n,n+r.length)===r}})},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("1cdc"),v=n("605d"),_=a.setImmediate,b=a.clearImmediate,y=a.process,w=a.Dispatch,O=a.Function,C=a.MessageChannel,k=a.String,I=0,E={},T="onreadystatechange";try{r=a.location}catch(P){}var S=function(e){if(h(E,e)){var t=E[e];delete E[e],t()}},x=function(e){return function(){S(e)}},j=function(e){S(e.data)},R=function(e){a.postMessage(k(e),r.protocol+"//"+r.host)};_&&b||(_=function(e){var t=p(arguments,1);return E[++I]=function(){c(l(e)?e:O(e),void 0,t)},i(I),I},b=function(e){delete E[e]},v?i=function(e){y.nextTick(x(e))}:w&&w.now?i=function(e){w.now(x(e))}:C&&!m?(o=new C,s=o.port2,o.port1.onmessage=j,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(R)?(i=R,a.addEventListener("message",j,!1)):i=T in g("script")?function(e){f.appendChild(g("script"))[T]=function(){f.removeChild(this),S(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:_,clear:b}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done);s=!0)if(o.push(r.value),t&&o.length===t)break}catch(c){a=!0,i=c}finally{try{s||null==n["return"]||n["return"]()}finally{if(a)throw i}}return o}}var o=n("06c5");n("d9e2");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){return r(e)||i(e,t)||Object(o["a"])(e,t)||s()}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("abc5");const i="devtools-plugin:setup",o="plugin:settings:set";class s{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e}},t&&t.on(o,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function a(e,t){const n=Object(r["b"])(),o=Object(r["a"])(),a=r["c"]&&e.enableEarlyProxy;if(!o||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new s(e,o):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:e,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}else o.emit(i,e,t)}},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4dae":function(e,t,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),s=n("8418"),a=r.Array,c=Math.max;e.exports=function(e,t,n){for(var r=o(e),u=i(t,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)s(h,d,e[u]);return h.length=d,h}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("7b0b"),a=n("9bdd"),c=n("e95a"),u=n("68ee"),l=n("07fa"),h=n("8418"),d=n("9a1f"),f=n("35a1"),p=r.Array;e.exports=function(e){var t=s(e),n=u(this),r=arguments.length,g=r>1?arguments[1]:void 0,m=void 0!==g;m&&(g=i(g,r>2?arguments[2]:void 0));var v,_,b,y,w,O,C=f(t),k=0;if(!C||this==p&&c(C))for(v=l(t),_=n?new this(v):p(v);v>k;k++)O=m?g(t[k],k):t[k],h(_,k,O);else for(y=d(t,C),w=y.next,_=n?new this:[];!(b=o(w,y)).done;k++)O=m?a(y,g,[b.value,k],!0):b.value,h(_,k,O);return _.length=k,_}},"4fad":function(e,t,n){var r=n("23e7"),i=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(e){return i(e)}})},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Hs})),n.d(t,"b",(function(){return Bs})),n.d(t,"c",(function(){return na})),n.d(t,"d",(function(){return Ks})),n.d(t,"e",(function(){return zs})),n.d(t,"f",(function(){return Ws}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");const a="@firebase/database",c="0.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="";function l(e){u=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(o["H"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(o["A"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(o["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),g=f("sessionStorage"),m=new s["b"]("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),_=function(e){const t=Object(o["G"])(e),n=new o["d"];n.update(t);const r=n.digest();return o["g"].encodeByteArray(r)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=b.apply(null,r):t+="object"===typeof r?Object(o["H"])(r):r,t+=" "}return t};let y=null,w=!0;const O=function(e,t){Object(o["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=s["a"].VERBOSE,y=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"===typeof e?y=e:(y=null,g.remove("logging_enabled"))},C=function(...e){if(!0===w&&(w=!1,null===y&&!0===g.get("logging_enabled")&&O(!0)),y){const t=b.apply(null,e);y(t)}},k=function(e){return function(...t){C(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);m.error(t)},E=function(...e){const t="FIREBASE FATAL ERROR: "+b(...e);throw m.error(t),new Error(t)},T=function(...e){const t="FIREBASE WARNING: "+b(...e);m.warn(t)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&T("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},j=function(e){if(Object(o["x"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},R="[MIN_NAME]",P="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===R||t===P)return-1;if(t===R||e===P)return 1;{const n=$(e),r=$(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(o["H"])(t))},M=function(e){if("object"!==typeof e||null===e)return Object(o["H"])(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(o["H"])(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},D=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){Object(o["e"])(!x(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,u;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let e=parseInt(h.substr(u,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},z=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function H(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const W=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,V=2147483647,$=function(e){if(W.test(e)){const t=Number(e);if(t>=B&&t<=V)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw T("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){T(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',T(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",ue="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if(Object(o["e"])("string"===typeof t,"typeof type must == string"),Object(o["e"])("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return F(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(o["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(o["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},ge={};function me(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function ve(e,t){const n=e.toString();return ge[n]||(ge[n]=t()),ge[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="start",ye="close",we="pLPCommand",Oe="pRTLPCB",Ce="id",ke="pw",Ie="ser",Ee="cb",Te="seg",Se="ts",xe="d",je="dframe",Re=1870,Pe=30,Ne=Re-Pe,Ae=25e3,Le=3e4;class Me{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _e(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Le)),j(()=>{if(this.isClosed_)return;this.scriptTagHolder=new De((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=r;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[be]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ee]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!Object(o["x"])()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!z())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(o["H"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(o["i"])(t),r=D(n,Ne);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(o["x"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[je]="t",n[Ce]=e,n[ke]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(o["H"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class De{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["x"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window[we+this.uniqueCallbackIdentifier]=e,window[Oe+this.uniqueCallbackIdentifier]=t,this.myIFrame=De.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){C("frame writing exception"),i.stack&&C(i.stack),C(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||C("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ce]=this.myID,e[ke]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Pe+n.length<=Re))break;{const e=this.pendingSegs.shift();n=n+"&"+Te+r+"="+e.seg+"&"+Se+r+"="+e.ts+"&"+xe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Ae)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){Object(o["x"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,Ue=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class ze{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=me(t),this.connURL=ze.connectionURL_(t,o,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={};return i[ee]=Z,!Object(o["x"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(i[ne]=re),t&&(i[te]=t),n&&(i[oe]=n),r&&(i[ae]=r),de(e,ce,i)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["x"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${u}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:"/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new qe(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new qe(this.connURL,[],e)}}catch(r){this.log_("Error instantiating WebSocket.");const e=r.message||r.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!ze.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(o["A"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(o["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(o["H"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=D(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ze.responsesRequiredToBeHealthy=2,ze.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,ze]}initTransports_(e){const t=ze&&ze["isAvailable"]();let n=t&&!ze.previouslyFailed();if(e.webSocketOnly&&(t||T("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ze];else{const e=this.transports_=[];for(const t of He.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=6e4,Be=5e3,Ve=10240,$e=102400,Ge="t",Ke="d",Ye="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new He(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$e?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ve?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?I("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&T("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(We))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(o["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Object(o["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["w"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new st}getInitialEvent(e){return Object(o["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ut("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function _t(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ut(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return yt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ot(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Ct{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["F"])(this.parts_[n]);Et(this)}}function kt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(o["F"])(t),Et(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=Object(o["F"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Tt(e))}function Tt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new St}getInitialEvent(e){return Object(o["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=1e3,jt=3e5,Rt=3e3,Pt=3e4,Nt=1.3,At=3e4,Lt="server_kill",Mt=3;class Dt extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Dt.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xt,this.maxReconnectDelay_=jt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o["x"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");St.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(o["H"])(i)),Object(o["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o["a"],n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))},Rt),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["e"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Dt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(o["j"])(e,"w")){const n=Object(o["E"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();T(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(o["s"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(o["z"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(o["H"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+Object(o["H"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(o["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>At&&(this.reconnectDelay_=xt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Dt.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},u=function(e){Object(o["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{T(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lt)},i))}catch(I){this.log_("Failed to get token: "+I),s||(this.repoInfo_.nodeAdmin&&T(I),c())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(o["u"])(this.interruptReasons_)&&(this.reconnectDelay_=xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>M(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ut(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Pt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(o["x"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,Object(o["w"])()?e["framework.cordova"]=1:Object(o["y"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return Object(o["u"])(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0,Dt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(R,e),r=new Ft(R,t);return 0!==this.compare(n,r)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class zt extends Ut{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw Object(o["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(P,qt)}makePost(e,t){return Object(o["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,qt)}toString(){return".key"}}const Ht=new zt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Bt.RED,this.left=null!=r?r:$t.EMPTY_NODE,this.right=null!=i?i:$t.EMPTY_NODE}copy(e,t,n,r,i){return new Bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $t.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0,Bt.BLACK=!1;class Vt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,t=$t.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $t(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return N(e.name,t.name)}function Kt(e,t){return N(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;function Jt(e){Yt=e}$t.EMPTY_NODE=new Vt;const Qt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();Object(o["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(o["j"])(t,".sv"),"Priority must be a string or number.")}else Object(o["e"])(e===Yt||e.isEmpty(),"priority of unexpected type.");Object(o["e"])(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(o["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(o["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(Object(o["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(o["e"])(r>=0,"Unknown leaf type: "+t),Object(o["e"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(P,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Ft(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new sn,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ln=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Bt(a,s.node,Bt.BLACK,null,null);{const c=parseInt(o/2,10)+t,u=i(t,c),l=i(c+1,r);return s=e[c],a=n?n(s):s,new Bt(a,s.node,Bt.BLACK,u,l)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const u=i(o+1,a),l=e[o],h=n?n(l):l;c(new Bt(h,l.node,r,null,u))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Bt.BLACK):(a(r,Bt.BLACK),a(r,Bt.RED))}return o},s=new un(e.length),a=o(s);return new $t(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(o["e"])(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(e){const t=Object(o["E"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $t?t:null}hasIndex(e){return Object(o["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(o["e"])(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ft.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?ln(n,e.getCompare()):dn;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const l=Object.assign({},this.indexes_);return l[c]=s,new fn(l,u)}addToIndexes(e,t){const n=Object(o["B"])(this.indexes_,(n,r)=>{const i=Object(o["E"])(this.indexSet_,r);if(Object(o["e"])(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ft.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),ln(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ft(e.name,r))),i.insert(e,e.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(o["B"])(this.indexes_,n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new Ft(e.name,r)):n}});return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class gn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&Object(o["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new gn(new $t(Kt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new gn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(o["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?pn:this.priorityNode_;return new gn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(o["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(an,(o,s)=>{t[o]=s.val(e),n++,i&&gn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(an,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":_(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vn?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new gn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}gn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends gn{constructor(){super(new $t(Kt),gn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return gn.EMPTY_NODE}isEmpty(){return!1}}const vn=new mn;Object.defineProperties(Ft,{MIN:{value:new Ft(R,gn.EMPTY_NODE)},MAX:{value:new Ft(P,vn)}}),zt.__EMPTY_NODE=gn.EMPTY_NODE,nn.__childrenNodeConstructor=gn,Jt(vn),on(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n=!0;function bn(e,t=null){if(null===e)return gn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(o["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,bn(t))}if(e instanceof Array||!_n){let n=gn.EMPTY_NODE;return F(e,(t,r)=>{if(Object(o["j"])(e,t)&&"."!==t.substring(0,1)){const e=bn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(bn(t))}{const n=[];let r=!1;const i=e;if(F(i,(e,t)=>{if("."!==e.substring(0,1)){const i=bn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ft(e,i)))}}),0===n.length)return gn.EMPTY_NODE;const o=ln(n,Gt,e=>e.name,Kt);if(r){const e=ln(n,an.getCompare());return new gn(o,bn(t),new fn({".priority":e},{".priority":an}))}return new gn(o,bn(t),fn.Default)}}rn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends Ut{constructor(e){super(),this.indexPath_=e,Object(o["e"])(!bt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}makePost(e,t){const n=bn(e),r=gn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,r)}maxPost(){const e=gn.EMPTY_NODE.updateChild(this.indexPath_,vn);return new Ft(P,e)}toString(){return mt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=bn(e);return new Ft(t,n)}toString(){return".value"}}const On=new wn,Cn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(e){return{type:"value",snapshotNode:e}}function In(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function En(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Tn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Object(o["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(En(t,a)):Object(o["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(In(t,n)):s.trackChildChange(Tn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,(e,r)=>{t.hasChild(e)||n.trackChildChange(En(e,r))}),t.isLeafNode()||t.forEachChild(an,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Tn(t,r,i))}else n.trackChildChange(In(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?gn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.indexedFilter_=new xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=jn.getStartPost_(e),this.endPost_=jn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new Ft(t,n))||(n=gn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=gn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(gn.EMPTY_NODE);const i=this;return t.forEachChild(an,(e,t)=>{i.matches(new Ft(e,t))||(r=r.updateImmediateChild(e,gn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.rangedFilter_=new jn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ft(t,n))||(n=gn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=gn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=gn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(gn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,gn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;Object(o["e"])(a.numChildren()===this.limit_,"");const c=new Ft(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Tn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(En(t,e));const n=a.updateImmediateChild(t,gn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(In(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&s(u,c)>=0?(null!=i&&(i.trackChildChange(En(u.name,u.node)),i.trackChildChange(In(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,gn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:P}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Pn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nn(e){return e.loadsAllData()?new xn(e.getIndex()):e.hasLimit()?new Rn(e):new jn(e)}function An(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===On?n="$value":e.index_===Ht?n="$key":(Object(o["e"])(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(o["H"])(n),e.startSet_&&(t["startAt"]=Object(o["H"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(o["H"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(o["H"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(o["H"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Ln(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=k("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(o["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Mn.getListenId_(e,n),a={};this.listens_[s]=a;const c=An(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(o["E"])(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=Mn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=An(e._queryParams),n=e._path.toString(),r=new o["a"];return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(o["C"])(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(o["A"])(a.responseText)}catch(e){T("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&T("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.rootNode_=gn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return{value:null,children:new Map}}function Un(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Fn());const i=e.children.get(r);t=ft(t),Un(i,t,n)}}function qn(e,t,n){null!==e.value?n(t,e.value):zn(e,(e,r)=>{const i=new ut(t.toString()+"/"+e);qn(r,i,n)})}function zn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=1e4,Bn=3e4,Vn=3e5;class $n{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Hn(e);const n=Wn+(Bn-Wn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,r)=>{r>0&&Object(o["j"])(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));class Qn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=Kn()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return Object(o["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new Qn(lt(),t,this.revert)}}return Object(o["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Qn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.source=e,this.path=t,this.type=Gn.LISTEN_COMPLETE}operationForChild(e){return bt(this.path)?new Xn(this.source,lt()):new Xn(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(e){return bt(this.path)?new Zn(this.source,lt(),this.snap.getImmediateChild(e)):new Zn(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Gn.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new Zn(this.source,lt(),t.value):new er(this.source,lt(),t)}return Object(o["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new er(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rr(e,t,n,r){const i=[],o=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Sn(t.childName,t.snapshotNode))}),ir(e,i,"child_removed",t,r,n),ir(e,i,"child_added",t,r,n),ir(e,i,"child_moved",o,r,n),ir(e,i,"child_changed",t,r,n),ir(e,i,"value",t,r,n),i}function ir(e,t,n,r,i,o){const s=r.filter(e=>e.type===n);s.sort((t,n)=>sr(e,t,n)),s.forEach(n=>{const r=or(e,n,o);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function or(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function sr(e,t,n){if(null==t.childName||null==n.childName)throw Object(o["f"])("Should only compare child_ events.");const r=new Ft(t.childName,t.snapshotNode),i=new Ft(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e,t){return{eventCache:e,serverCache:t}}function cr(e,t,n,r){return ar(new tr(t,n,r),e.serverCache)}function ur(e,t,n,r){return ar(e.eventCache,new tr(t,n,r))}function lr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function hr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const fr=()=>(dr||(dr=new $t(A)),dr);class pr{constructor(e,t=fr()){this.value=e,this.children=t}static fromObject(e){let t=new pr(null);return F(e,(e,n)=>{t=t.set(new ut(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(bt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=_t(new ut(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(bt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new pr(null)}}set(e,t){if(bt(e))return new pr(t,this.children);{const n=ht(e),r=this.children.get(n)||new pr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new pr(this.value,o)}}remove(e){if(bt(e))return this.children.isEmpty()?new pr(null):new pr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new pr(null):new pr(this.value,i)}return this}}get(e){if(bt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(bt(e))return t;{const n=ht(e),r=this.children.get(n)||new pr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new pr(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(_t(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(bt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),_t(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),_t(t,r),n):new pr(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(_t(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.writeTree_=e}static empty(){return new gr(new pr(null))}}function mr(e,t,n){if(bt(t))return new gr(new pr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=yt(i,t);return o=o.updateChild(s,n),new gr(e.writeTree_.set(i,o))}{const r=new pr(n),i=e.writeTree_.setTree(t,r);return new gr(i)}}}function vr(e,t,n){let r=e;return F(n,(e,n)=>{r=mr(r,_t(t,e),n)}),r}function _r(e,t){if(bt(t))return gr.empty();{const n=e.writeTree_.setTree(t,new pr(null));return new gr(n)}}function br(e,t){return null!=yr(e,t)}function yr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function wr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(e,n)=>{t.push(new Ft(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))}),t}function Or(e,t){if(bt(t))return e;{const n=yr(e,t);return new gr(null!=n?new pr(n):e.writeTree_.subtree(t))}}function Cr(e){return e.writeTree_.isEmpty()}function kr(e,t){return Ir(lt(),e.writeTree_,t)}function Ir(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?(Object(o["e"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ir(_t(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(_t(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t){return Kr(t,e)}function Tr(e,t,n,r,i){Object(o["e"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=mr(e.visibleWrites,t,n)),e.lastWriteId=r}function Sr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function xr(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(o["e"])(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&jr(t,r.path)?i=!1:Ot(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Rr(e),!0;if(r.snap)e.visibleWrites=_r(e.visibleWrites,r.path);else{const t=r.children;F(t,t=>{e.visibleWrites=_r(e.visibleWrites,_t(r.path,t))})}return!0}return!1}function jr(e,t){if(e.snap)return Ot(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ot(_t(e.path,n),t))return!0;return!1}function Rr(e){e.visibleWrites=Nr(e.allWrites,Pr,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Pr(e){return e.visible}function Nr(e,t,n){let r=gr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Ot(n,e)?(t=yt(n,e),r=mr(r,t,s.snap)):Ot(e,n)&&(t=yt(e,n),r=mr(r,lt(),s.snap.getChild(t)));else{if(!s.children)throw Object(o["f"])("WriteRecord should have .snap or .children");if(Ot(n,e))t=yt(n,e),r=vr(r,t,s.children);else if(Ot(e,n))if(t=yt(e,n),bt(t))r=vr(r,lt(),s.children);else{const e=Object(o["E"])(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=mr(r,lt(),n)}}}}}return r}function Ar(e,t,n,r,i){if(r||i){const o=Or(e.visibleWrites,t);if(!i&&Cr(o))return n;if(i||null!=n||br(o,lt())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ot(e.path,t)||Ot(t,e.path))},s=Nr(e.allWrites,o,t),a=n||gn.EMPTY_NODE;return kr(s,a)}return null}{const r=yr(e.visibleWrites,t);if(null!=r)return r;{const r=Or(e.visibleWrites,t);if(Cr(r))return n;if(null!=n||br(r,lt())){const e=n||gn.EMPTY_NODE;return kr(r,e)}return null}}}function Lr(e,t,n){let r=gn.EMPTY_NODE;const i=yr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(an,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Or(e.visibleWrites,t);return n.forEachChild(an,(e,t)=>{const n=kr(Or(i,new ut(e)),t);r=r.updateImmediateChild(e,n)}),wr(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=Or(e.visibleWrites,t);return wr(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function Mr(e,t,n,r,i){Object(o["e"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(t,n);if(br(e.visibleWrites,s))return null;{const t=Or(e.visibleWrites,s);return Cr(t)?i.getChild(n):kr(t,i.getChild(n))}}function Dr(e,t,n,r){const i=_t(t,n),o=yr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Or(e.visibleWrites,i);return kr(t,r.getNode().getImmediateChild(n))}return null}function Fr(e,t){return yr(e.visibleWrites,t)}function Ur(e,t,n,r,i,o,s){let a;const c=Or(e.visibleWrites,t),u=yr(c,lt());if(null!=u)a=u;else{if(null==n)return[];a=kr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function qr(){return{visibleWrites:gr.empty(),allWrites:[],lastWriteId:-1}}function zr(e,t,n,r){return Ar(e.writeTree,e.treePath,t,n,r)}function Hr(e,t){return Lr(e.writeTree,e.treePath,t)}function Wr(e,t,n,r){return Mr(e.writeTree,e.treePath,t,n,r)}function Br(e,t){return Fr(e.writeTree,_t(e.treePath,t))}function Vr(e,t,n,r,i,o){return Ur(e.writeTree,e.treePath,t,n,r,i,o)}function $r(e,t,n){return Dr(e.writeTree,e.treePath,t,n)}function Gr(e,t){return Kr(_t(e.treePath,t),e.writeTree)}function Kr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(o["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(o["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Tn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,En(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,In(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(o["f"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Tn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Qr=new Jr;class Xr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $r(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hr(this.viewCache_),i=Vr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){return{filter:e}}function ei(e,t){Object(o["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(o["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ti(e,t,n,r,i){const s=new Yr;let a,c;if(n.type===Gn.OVERWRITE){const u=n;u.source.fromUser?a=oi(e,t,u.path,u.snap,r,i,s):(Object(o["e"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered()&&!bt(u.path),a=ii(e,t,u.path,u.snap,r,i,c,s))}else if(n.type===Gn.MERGE){const u=n;u.source.fromUser?a=ai(e,t,u.path,u.children,r,i,s):(Object(o["e"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered(),a=ui(e,t,u.path,u.children,r,i,c,s))}else if(n.type===Gn.ACK_USER_WRITE){const o=n;a=o.revert?di(e,t,o.path,r,i,s):li(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Gn.LISTEN_COMPLETE)throw Object(o["f"])("Unknown operation type: "+n.type);a=hi(e,t,n.path,r,s)}const u=s.getChanges();return ni(t,a,u),{viewCache:a,changes:u}}function ni(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=lr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(kn(lr(t)))}}function ri(e,t,n,r,i,s){const a=t.eventCache;if(null!=Br(r,n))return t;{let c,u;if(bt(n))if(Object(o["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=hr(t),i=n instanceof gn?n:gn.EMPTY_NODE,o=Hr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=zr(r,hr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=ht(n);if(".priority"===l){Object(o["e"])(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();u=t.serverCache.getNode();const s=Wr(r,n,i,u);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(l)){u=t.serverCache.getNode();const e=Wr(r,n,a.getNode(),u);h=null!=e?a.getNode().getImmediateChild(l).updateChild(o,e):a.getNode().getImmediateChild(l)}else h=$r(r,l,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),l,h,o,i,s):a.getNode()}}return cr(t,c,a.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function ii(e,t,n,r,i,o,s,a){const c=t.serverCache;let u;const l=s?e.filter:e.filter.getIndexedFilter();if(bt(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,i,Qr,null)}const h=ur(t,u,c.isFullyInitialized()||bt(n),l.filtersNodes()),d=new Xr(i,h,o);return ri(e,h,n,i,d,a)}function oi(e,t,n,r,i,o,s){const a=t.eventCache;let c,u;const l=new Xr(i,t,o);if(bt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=cr(t,u,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),c=cr(t,u,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),u=a.getNode().getImmediateChild(i);let h;if(bt(o))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(vt(o)).isEmpty()?e:e.updateChild(o,r):gn.EMPTY_NODE}if(u.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,l,s);c=cr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function si(e,t){return e.eventCache.isCompleteForChild(t)}function ai(e,t,n,r,i,o,s){let a=t;return r.foreach((r,c)=>{const u=_t(n,r);si(t,ht(u))&&(a=oi(e,a,u,c,i,o,s))}),r.foreach((r,c)=>{const u=_t(n,r);si(t,ht(u))||(a=oi(e,a,u,c,i,o,s))}),a}function ci(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function ui(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=bt(n)?r:new pr(null).setTree(n,r);const l=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=ci(e,c,r);u=ii(e,u,new ut(n),l,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=ci(e,c,r);u=ii(e,u,new ut(n),l,i,o,s,a)}}),u}function li(e,t,n,r,i,o,s){if(null!=Br(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(bt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ii(e,t,n,c.getNode().getChild(n),i,o,a,s);if(bt(n)){let r=new pr(null);return c.getNode().forEachChild(Ht,(e,t)=>{r=r.set(new ut(e),t)}),ui(e,t,n,r,i,o,a,s)}return t}{let u=new pr(null);return r.foreach((e,t)=>{const r=_t(n,e);c.isCompleteForPath(r)&&(u=u.set(e,c.getNode().getChild(r)))}),ui(e,t,n,u,i,o,a,s)}}function hi(e,t,n,r,i){const o=t.serverCache,s=ur(t,o.getNode(),o.isFullyInitialized()||bt(n),o.isFiltered());return ri(e,s,n,r,Qr,i)}function di(e,t,n,r,i,s){let a;if(null!=Br(r,n))return t;{const c=new Xr(r,t,i),u=t.eventCache.getNode();let l;if(bt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=zr(r,hr(t));else{const e=t.serverCache.getNode();Object(o["e"])(e instanceof gn,"serverChildren would be complete if leaf node"),n=Hr(r,e)}n=n,l=e.filter.updateFullNode(u,n,s)}else{const i=ht(n);let o=$r(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=u.getImmediateChild(i)),l=null!=o?e.filter.updateChild(u,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,gn.EMPTY_NODE,ft(n),c,s):u,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=zr(r,hr(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Br(r,lt()),cr(t,l,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new xn(n.getIndex()),i=Nn(n);this.processor_=Zr(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(gn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(gn.EMPTY_NODE,s.getNode(),null),u=new tr(a,o.isFullyInitialized(),r.filtersNodes()),l=new tr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=ar(l,u),this.eventGenerator_=new nr(this.query_)}get query(){return this.query_}}function pi(e){return e.viewCache_.serverCache.getNode()}function gi(e){return lr(e.viewCache_)}function mi(e,t){const n=hr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function vi(e){return 0===e.eventRegistrations_.length}function _i(e,t){e.eventRegistrations_.push(t)}function bi(e,t,n){const r=[];if(n){Object(o["e"])(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function yi(e,t,n,r){t.type===Gn.MERGE&&null!==t.source.queryId&&(Object(o["e"])(hr(e.viewCache_),"We should always have a full cache before handling merges"),Object(o["e"])(lr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ti(e.processor_,i,t,n,r);return ei(e.processor_,s.viewCache),Object(o["e"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Oi(e,s.changes,s.viewCache.eventCache.getNode(),null)}function wi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,(e,t)=>{r.push(In(e,t))})}return n.isFullyInitialized()&&r.push(kn(n.getNode())),Oi(e,r,n.getNode(),t)}function Oi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return rr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci,ki;class Ii{constructor(){this.views=new Map}}function Ei(e){Object(o["e"])(!Ci,"__referenceConstructor has already been defined"),Ci=e}function Ti(){return Object(o["e"])(Ci,"Reference.ts has not been loaded"),Ci}function Si(e){return 0===e.views.size}function xi(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Object(o["e"])(null!=s,"SyncTree gave us an op for an invalid query."),yi(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(yi(o,t,n,r));return i}}function ji(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=zr(n,i?r:null),o=!1;e?o=!0:r instanceof gn?(e=Hr(n,r),o=!1):(e=gn.EMPTY_NODE,o=!1);const s=ar(new tr(e,o,!1),new tr(r,i,!1));return new fi(t,s)}return s}function Ri(e,t,n,r,i,o){const s=ji(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),_i(s,n),wi(s,n)}function Pi(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Di(e);if("default"===i)for(const[c,u]of e.views.entries())s=s.concat(bi(u,n,r)),vi(u)&&(e.views.delete(c),u.query._queryParams.loadsAllData()||o.push(u.query));else{const t=e.views.get(i);t&&(s=s.concat(bi(t,n,r)),vi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Di(e)&&o.push(new(Ti())(t._repo,t._path)),{removed:o,events:s}}function Ni(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ai(e,t){let n=null;for(const r of e.views.values())n=n||mi(r,t);return n}function Li(e,t){const n=t._queryParams;if(n.loadsAllData())return Fi(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Mi(e,t){return null!=Li(e,t)}function Di(e){return null!=Fi(e)}function Fi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){Object(o["e"])(!ki,"__referenceConstructor has already been defined"),ki=e}function qi(){return Object(o["e"])(ki,"Reference.ts has not been loaded"),ki}let zi=1;class Hi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pr(null),this.pendingWriteTree_=qr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wi(e,t,n,r,i){return Tr(e.pendingWriteTree_,t,n,r,i),i?to(e,new Zn(Kn(),t,n)):[]}function Bi(e,t,n=!1){const r=Sr(e.pendingWriteTree_,t),i=xr(e.pendingWriteTree_,t);if(i){let t=new pr(null);return null!=r.snap?t=t.set(lt(),!0):F(r.children,e=>{t=t.set(new ut(e),!0)}),to(e,new Qn(r.path,t,n))}return[]}function Vi(e,t,n){return to(e,new Zn(Yn(),t,n))}function $i(e,t,n){const r=pr.fromObject(n);return to(e,new er(Yn(),t,r))}function Gi(e,t){return to(e,new Xn(Yn(),t))}function Ki(e,t,n){const r=ao(e,n);if(r){const n=co(r),i=n.path,o=n.queryId,s=yt(i,t),a=new Xn(Jn(o),s);return uo(e,i,a)}return[]}function Yi(e,t,n,r){const i=t._path,o=e.syncPointTree_.get(i);let s=[];if(o&&("default"===t._queryIdentifier||Mi(o,t))){const a=Pi(o,t,n,r);Si(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;s=a.events;const u=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),l=e.syncPointTree_.findOnPath(i,(e,t)=>Di(t));if(u&&!l){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=lo(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=io(e,r);e.listenProvider_.startListening(ho(i),oo(e,i),o.hashFn,o.onComplete)}}}if(!l&&c.length>0&&!r)if(u){const n=null;e.listenProvider_.stopListening(ho(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(so(t));e.listenProvider_.stopListening(ho(t),n)});fo(e,c)}return s}function Ji(e,t,n,r){const i=ao(e,r);if(null!=i){const r=co(i),o=r.path,s=r.queryId,a=yt(o,t),c=new Zn(Jn(s),a,n);return uo(e,o,c)}return[]}function Qi(e,t,n,r){const i=ao(e,r);if(i){const r=co(i),o=r.path,s=r.queryId,a=yt(o,t),c=pr.fromObject(n),u=new er(Jn(s),a,c);return uo(e,o,u)}return[]}function Xi(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=yt(e,r);i=i||Ai(t,n),s=s||Di(t)});let a,c=e.syncPointTree_.get(r);if(c?(s=s||Di(c),i=i||Ai(c,lt())):(c=new Ii,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=gn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild((e,t)=>{const n=Ai(t,lt());n&&(i=i.updateImmediateChild(e,n))})}const u=Mi(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=so(t);Object(o["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=po();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const l=Er(e.pendingWriteTree_,r);let h=Ri(c,t,n,l,i,a);if(!u&&!s){const n=Li(c,t);h=h.concat(go(e,t,n))}return h}function Zi(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=yt(e,t),i=Ai(n,r);if(i)return i});return Ar(i,t,o,n,r)}function eo(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=yt(e,n);r=r||Ai(t,i)});let i=e.syncPointTree_.get(n);i?r=r||Ai(i,lt()):(i=new Ii,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new tr(r,!0,!1):null,a=Er(e.pendingWriteTree_,t._path),c=ji(i,t,a,o?s.getNode():gn.EMPTY_NODE,o);return gi(c)}function to(e,t){return no(t,e.syncPointTree_,null,Er(e.pendingWriteTree_,lt()))}function no(e,t,n,r){if(bt(e.path))return ro(e,t,n,r);{const i=t.get(lt());null==n&&null!=i&&(n=Ai(i,lt()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Gr(r,s);o=o.concat(no(a,c,e,t))}return i&&(o=o.concat(xi(i,e,r,n))),o}}function ro(e,t,n,r){const i=t.get(lt());null==n&&null!=i&&(n=Ai(i,lt()));let o=[];return t.children.inorderTraversal((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Gr(r,t),c=e.operationForChild(t);c&&(o=o.concat(ro(c,i,s,a)))}),i&&(o=o.concat(xi(i,e,r,n))),o}function io(e,t){const n=t.query,r=oo(e,n);return{hashFn:()=>{const e=pi(t)||gn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Ki(e,n._path,r):Gi(e,n._path);{const r=H(t,n);return Yi(e,n,null,r)}}}}function oo(e,t){const n=so(t);return e.queryToTagMap.get(n)}function so(e){return e._path.toString()+"$"+e._queryIdentifier}function ao(e,t){return e.tagToQueryMap.get(t)}function co(e){const t=e.indexOf("$");return Object(o["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function uo(e,t,n){const r=e.syncPointTree_.get(t);Object(o["e"])(r,"Missing sync point for query tag that we're tracking");const i=Er(e.pendingWriteTree_,t);return xi(r,n,i,null)}function lo(e){return e.fold((e,t,n)=>{if(t&&Di(t)){const e=Fi(t);return[e]}{let e=[];return t&&(e=Ni(t)),F(n,(t,n)=>{e=e.concat(n)}),e}})}function ho(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(qi())(e._repo,e._path):e}function fo(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=so(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function po(){return zi++}function go(e,t,n){const r=t._path,i=oo(e,t),s=io(e,n),a=e.listenProvider_.startListening(ho(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(o["e"])(!Di(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!bt(e)&&t&&Di(t))return[Fi(t).query];{let e=[];return t&&(e=e.concat(Ni(t).map(e=>e.query))),F(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(ho(r),oo(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mo(t)}node(){return this.node_}}class vo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new vo(this.syncTree_,t)}node(){return Zi(this.syncTree_,this.path_)}}const _o=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},bo=function(e,t,n){return e&&"object"===typeof e?(Object(o["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?yo(e[".sv"],t,n):"object"===typeof e[".sv"]?wo(e[".sv"],t):void Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},yo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(o["e"])(!1,"Unexpected server value: "+e)}},wo=function(e,t,n){e.hasOwnProperty("increment")||Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&Object(o["e"])(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(o["e"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},Oo=function(e,t,n,r){return ko(t,new vo(n,e),r)},Co=function(e,t,n){return ko(e,new mo(t),n)};function ko(e,t,n){const r=e.getPriority().val(),i=bo(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=bo(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new nn(o,bn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new nn(i))),r.forEachChild(an,(e,r)=>{const i=ko(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))}),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Eo(e,t){let n=t instanceof ut?t:new ut(t),r=e,i=ht(n);while(null!==i){const e=Object(o["E"])(r.node.children,i)||{children:{},childCount:0};r=new Io(i,r,e),n=ft(n),i=ht(n)}return r}function To(e){return e.node.value}function So(e,t){e.node.value=t,Lo(e)}function xo(e){return e.node.childCount>0}function jo(e){return void 0===To(e)&&!xo(e)}function Ro(e,t){F(e.node.children,(n,r)=>{t(new Io(n,e,r))})}function Po(e,t,n,r){n&&!r&&t(e),Ro(e,e=>{Po(e,t,!0,r)}),n&&r&&t(e)}function No(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Ao(e){return new ut(null===e.parent?e.name:Ao(e.parent)+"/"+e.name)}function Lo(e){null!==e.parent&&Mo(e.parent,e.name,e)}function Mo(e,t,n){const r=jo(n),i=Object(o["j"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Lo(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Lo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=/[\[\].#$\/\u0000-\u001F\u007F]/,Fo=/[\[\].#$\u0000-\u001F\u007F]/,Uo=10485760,qo=function(e){return"string"===typeof e&&0!==e.length&&!Do.test(e)},zo=function(e){return"string"===typeof e&&0!==e.length&&!Fo.test(e)},Ho=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),zo(e)},Wo=function(e,t,n,r){r&&void 0===t||Bo(Object(o["o"])(e,"value"),t,n)},Bo=function(e,t,n){const r=n instanceof ut?new Ct(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Tt(r));if("function"===typeof t)throw new Error(e+"contains a function "+Tt(r)+" with contents = "+t.toString());if(x(t))throw new Error(e+"contains "+t.toString()+" "+Tt(r));if("string"===typeof t&&t.length>Uo/3&&Object(o["F"])(t)>Uo)throw new Error(e+"contains a string greater than "+Uo+" utf8 bytes "+Tt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(F(t,(t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!qo(t)))throw new Error(e+" contains an invalid key ("+t+") "+Tt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');kt(r,t),Bo(e,o,r),It(r)}),n&&i)throw new Error(e+' contains ".value" child '+Tt(r)+" in addition to actual children.")}},Vo=function(e,t,n,r){if((!r||void 0!==n)&&!zo(n))throw new Error(Object(o["o"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},$o=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vo(e,t,n,r)},Go=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ko=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!qo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Ho(n))throw new Error(Object(o["o"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jo(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Qo(e,t,n){Jo(e,n),Zo(e,e=>wt(e,t))}function Xo(e,t,n){Jo(e,n),Zo(e,e=>Ot(e,t)||Ot(t,e))}function Zo(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(es(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function es(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();y&&C("event: "+n.toString()),G(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="repo_interrupt",ns=25;class rs{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new Io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function is(e,t,n){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||K())e.server_=new Mn(e.repoInfo_,(t,n,r,i)=>{as(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>cs(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["H"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Dt(e.repoInfo_,t,(t,n,r,i)=>{as(e,t,n,r,i)},t=>{cs(e,t)},t=>{us(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=ve(e.repoInfo_,()=>new $n(e.stats_,e.server_)),e.infoData_=new Dn,e.infoSyncTree_=new Hi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Vi(e.infoSyncTree_,t._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),ls(e,"connected",!1),e.serverSyncTree_=new Hi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const o=i(n,r);Xo(e.eventQueue_,t._path,o)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function os(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function ss(e){return _o({timestamp:os(e)})}function as(e,t,n,r,i){e.dataUpdateCount++;const s=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(o["B"])(n,e=>bn(e));a=Qi(e.serverSyncTree_,s,t,i)}else{const t=bn(n);a=Ji(e.serverSyncTree_,s,t,i)}else if(r){const t=Object(o["B"])(n,e=>bn(e));a=$i(e.serverSyncTree_,s,t)}else{const t=bn(n);a=Vi(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=Cs(e,s)),Xo(e.eventQueue_,c,a)}function cs(e,t){ls(e,"connected",t),!1===t&&ps(e)}function us(e,t){F(t,(t,n)=>{ls(e,t,n)})}function ls(e,t,n){const r=new ut("/.info/"+t),i=bn(n);e.infoData_.updateSnapshot(r,i);const o=Vi(e.infoSyncTree_,r,i);Xo(e.eventQueue_,r,o)}function hs(e){return e.nextWriteId_++}function ds(e,t){const n=eo(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const r=bn(n).withIndex(t._queryParams.getIndex()),i=Vi(e.serverSyncTree_,t._path,r);return Qo(e.eventQueue_,t._path,i),Promise.resolve(r)},n=>(_s(e,"get for query "+Object(o["H"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function fs(e,t,n,r,i){_s(e,"set",{path:t.toString(),value:n,priority:r});const o=ss(e),s=bn(n,r),a=Zi(e.serverSyncTree_,t),c=Co(s,a,o),u=hs(e),l=Wi(e.serverSyncTree_,t,c,u,!0);Jo(e.eventQueue_,l),e.server_.put(t.toString(),s.val(!0),(n,r)=>{const o="ok"===n;o||T("set at "+t+" failed: "+n);const s=Bi(e.serverSyncTree_,u,!o);Xo(e.eventQueue_,t,s),bs(e,i,n,r)});const h=xs(e,t);Cs(e,h),Xo(e.eventQueue_,h,[])}function ps(e){_s(e,"onDisconnectEvents");const t=ss(e),n=Fn();qn(e.onDisconnect_,lt(),(r,i)=>{const o=Oo(r,i,e.serverSyncTree_,t);Un(n,r,o)});let r=[];qn(n,lt(),(t,n)=>{r=r.concat(Vi(e.serverSyncTree_,t,n));const i=xs(e,t);Cs(e,i)}),e.onDisconnect_=Fn(),Xo(e.eventQueue_,lt(),r)}function gs(e,t,n){let r;r=".info"===ht(t._path)?Xi(e.infoSyncTree_,t,n):Xi(e.serverSyncTree_,t,n),Qo(e.eventQueue_,t._path,r)}function ms(e,t,n){let r;r=".info"===ht(t._path)?Yi(e.infoSyncTree_,t,n):Yi(e.serverSyncTree_,t,n),Qo(e.eventQueue_,t._path,r)}function vs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ts)}function _s(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function bs(e,t,n,r){t&&G(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}})}function ys(e,t,n){return Zi(e.serverSyncTree_,t,n)||gn.EMPTY_NODE}function ws(e,t=e.transactionQueueTree_){if(t||Ss(e,t),To(t)){const n=Es(e,t);Object(o["e"])(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&Os(e,Ao(t),n)}else xo(t)&&Ro(t,t=>{ws(e,t)})}function Os(e,t,n){const r=n.map(e=>e.currentWriteId),i=ys(e,t,r);let s=i;const a=i.hash();for(let l=0;l<n.length;l++){const e=n[l];Object(o["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=yt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),u=t;e.server_.put(u.toString(),c,r=>{_s(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Bi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Ss(e,Eo(e.transactionQueueTree_,t)),ws(e,e.transactionQueueTree_),Xo(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{T("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Cs(e,t)}},a)}function Cs(e,t){const n=Is(e,t),r=Ao(n),i=Es(e,n);return ks(e,i,r),r}function ks(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter(e=>0===e.status),a=s.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const s=t[c],u=yt(n,s.path);let l,h=!1;if(Object(o["e"])(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,l=s.abortReason,i=i.concat(Bi(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=ns)h=!0,l="maxretry",i=i.concat(Bi(e.serverSyncTree_,s.currentWriteId,!0));else{const n=ys(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Bo("transaction failed: Data returned ",r,s.path);let t=bn(r);const c="object"===typeof r&&null!=r&&Object(o["j"])(r,".priority");c||(t=t.updatePriority(n.getPriority()));const u=s.currentWriteId,l=ss(e),h=Co(t,n,l);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=hs(e),a.splice(a.indexOf(u),1),i=i.concat(Wi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Bi(e.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(Bi(e.serverSyncTree_,s.currentWriteId,!0))}Xo(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===l?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(l),!1,null))))}Ss(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)G(r[o]);ws(e,e.transactionQueueTree_)}function Is(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===To(r))r=Eo(r,n),t=ft(t),n=ht(t);return r}function Es(e,t){const n=[];return Ts(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Ts(e,t,n){const r=To(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ro(t,t=>{Ts(e,t,n)})}function Ss(e,t){const n=To(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,So(t,n.length>0?n:void 0)}Ro(t,t=>{Ss(e,t)})}function xs(e,t){const n=Ao(Is(e,t)),r=Eo(e.transactionQueueTree_,t);return No(r,t=>{js(e,t)}),js(e,r),Po(r,t=>{js(e,t)}),n}function js(e,t){const n=To(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(o["e"])(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Object(o["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Bi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?So(t,void 0):n.length=s+1,Xo(e.eventQueue_,Ao(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Ps(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):T(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ns=function(e,t){const n=As(e),r=n.namespace;"firebase.com"===n.domain&&E(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new ut(n.pathString)}},As=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=Rs(e.substring(l,h)));const d=Ps(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["H"])(this.snapshot.exportVal())}}class Ms{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(o["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return bt(this._path)?null:pt(this._path)}get ref(){return new Us(this._repo,this._path)}get _queryIdentifier(){const e=Ln(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Ln(this._queryParams)}isEqual(e){if(e=Object(o["q"])(e),!(e instanceof Fs))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+gt(this._path)}}class Us extends Fs{constructor(e,t){super(e,t,new Pn,!1)}get parent(){const e=vt(this._path);return null===e?null:new Us(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class qs{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ut(e),n=Hs(this.ref,e);return new qs(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new qs(n,Hs(this.ref,t),an)))}hasChild(e){const t=new ut(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zs(e,t){return e=Object(o["q"])(e),e._checkNotDeleted("ref"),void 0!==t?Hs(e._root,t):e._root}function Hs(e,t){return e=Object(o["q"])(e),null===ht(e._path)?$o("child","path",t,!1):Vo("child","path",t,!1),new Us(e._repo,_t(e._path,t))}function Ws(e,t){e=Object(o["q"])(e),Go("set",e._path),Wo("set",t,e._path,!1);const n=new o["a"];return fs(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Bs(e){return e=Object(o["q"])(e),ds(e._repo,e).then(t=>new qs(t,new Us(e._repo,e._path),e._queryParams.getIndex()))}class Vs{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ls("value",this,new qs(e.snapshotNode,new Us(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ms(this,e,t):null}matches(e){return e instanceof Vs&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class $s{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ms(this,e,t):null}createEvent(e,t){Object(o["e"])(null!=e.childName,"Child events should have a childName.");const n=Hs(new Us(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Ls(e.type,this,new qs(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof $s&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Gs(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{ms(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Ds(n,o||void 0),a="value"===t?new Vs(s):new $s(t,s);return gs(e._repo,e,a),()=>ms(e._repo,e,a)}function Ks(e,t,n,r){return Gs(e,"value",t,n,r)}Ei(Us),Ui(Us);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ys="FIREBASE_DATABASE_EMULATOR_HOST",Js={};let Qs=!1;function Xs(t,n,r,i,o){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||E("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",t.options.projectId),s=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Ns(s,o),u=c.repoInfo,l=void 0;"undefined"!==typeof e&&(l=Object({NODE_ENV:"production",BASE_URL:"/"})[Ys]),l?(a=!0,s=`http://${l}?ns=${u.namespace}`,c=Ns(s,o),u=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new X(X.OWNER):new Q(t.name,t.options,n);Ko("Invalid Firebase Database URL",c),bt(c.path)||E("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ea(u,t,h,new J(t.name,r));return new ta(d,t)}function Zs(e,t){const n=Js[t];n&&n[e.key]===e||E(`Database ${t}(${e.repoInfo_}) has already been deleted.`),vs(e),delete n[e.key]}function ea(e,t,n,r){let i=Js[t.name];i||(i={},Js[t.name]=i);let o=i[e.toURLString()];return o&&E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new rs(e,Qs,n,r),i[e.toURLString()]=o,o}class ta{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(is(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Us(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Zs(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&E("Cannot call "+e+" on a deleted database.")}}function na(e=Object(r["d"])(),t){return Object(r["b"])(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(e){l(r["a"]),Object(r["c"])(new i["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Xs(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(a,c,e),Object(r["f"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Dt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};ra()}).call(this,n("4362"))},5319:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),s=n("d784"),a=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),h=n("50c4"),d=n("577e"),f=n("1d80"),p=n("8aa5"),g=n("dc4a"),m=n("0cb2"),v=n("14c3"),_=n("b622"),b=_("replace"),y=Math.max,w=Math.min,O=o([].concat),C=o([].push),k=o("".indexOf),I=o("".slice),E=function(e){return void 0===e?e:String(e)},T=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),x=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,n){var o=S?"$":"$0";return[function(e,n){var r=f(this),o=void 0==e?void 0:g(e,b);return o?i(o,e,r,n):i(t,d(r),e,n)},function(e,i){var s=c(this),a=d(e);if("string"==typeof i&&-1===k(i,o)&&-1===k(i,"$<")){var f=n(t,s,a,i);if(f.done)return f.value}var g=u(i);g||(i=d(i));var _=s.global;if(_){var b=s.unicode;s.lastIndex=0}var T=[];while(1){var S=v(s,a);if(null===S)break;if(C(T,S),!_)break;var x=d(S[0]);""===x&&(s.lastIndex=p(a,h(s.lastIndex),b))}for(var j="",R=0,P=0;P<T.length;P++){S=T[P];for(var N=d(S[0]),A=y(w(l(S.index),a.length),0),L=[],M=1;M<S.length;M++)C(L,E(S[M]));var D=S.groups;if(g){var F=O([N],L,A,a);void 0!==D&&C(F,D);var U=d(r(i,void 0,F))}else U=m(N,a,A,L,D,i);A>=R&&(j+=I(a,R,A)+U,R=A+N.length)}return j+I(a,R)}]}),!x||!T||S)},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y})),n.d(t,"b",(function(){return Z})),n.d(t,"c",(function(){return X}));var r=n("7a23"),i=n("3f4e"),o="store";function s(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function u(e,t){if(!e)throw new Error("[vuex] "+t)}function l(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,a={};s(o,(function(t,n){a[n]=l(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["x"])({data:t}),e.strict&&y(e),i&&n&&e._withCommit((function(){i.data=null}))}function p(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!o&&!i){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=g(e,s,n);r.forEachMutation((function(t,n){var r=s+n;v(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;_(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;b(e,r,t,u)})),r.forEachChild((function(r,o){p(e,t,n.concat(o),r,i)}))}function g(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return m(e,t)}},state:{get:function(){return w(e.state,n)}}}),i}function m(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function v(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function _(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function b(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function y(e){Object(r["K"])((function(){return e._state.data}),(function(){u(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),u("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var C="vuex bindings",k="vuex:mutations",I="vuex:actions",E="vuex",T=0;function S(e,t){Object(i["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[C]},(function(n){n.addTimelineLayer({id:k,label:"Vuex Mutations",color:x}),n.addTimelineLayer({id:I,label:"Vuex Actions",color:x}),n.addInspector({id:E,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===E)if(n.filter){var r=[];L(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[A(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===E){var r=n.nodeId;m(t,r),n.state=M(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===E){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(E),n.sendInspectorState(E),n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=T++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:I,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var x=8702998,j=6710886,R=16777215,P={label:"namespaced",textColor:R,backgroundColor:j};function N(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function A(e,t){return{id:t||"root",label:N(t),tags:e.namespaced?[P]:[],children:Object.keys(e._children).map((function(n){return A(e._children[n],t+n+"/")}))}}function L(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[P]:[]}),Object.keys(t._children).forEach((function(i){L(e,t._children[i],n,r+i+"/")}))}function M(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=D(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?N(e):e,editable:!1,value:U((function(){return o[e]}))}}))}return i}function D(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=U((function(){return e[n]}))}else t[n]=U((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function U(e){try{return e()}catch(t){return t}}var q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},z={namespaced:{configurable:!0}};z.namespaced.get=function(){return!!this._rawModule.namespaced},q.prototype.addChild=function(e,t){this._children[e]=t},q.prototype.removeChild=function(e){delete this._children[e]},q.prototype.getChild=function(e){return this._children[e]},q.prototype.hasChild=function(e){return e in this._children},q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},q.prototype.forEachChild=function(e){s(this._children,e)},q.prototype.forEachGetter=function(e){this._rawModule.getters&&s(this._rawModule.getters,e)},q.prototype.forEachAction=function(e){this._rawModule.actions&&s(this._rawModule.actions,e)},q.prototype.forEachMutation=function(e){this._rawModule.mutations&&s(this._rawModule.mutations,e)},Object.defineProperties(q.prototype,z);var H=function(e){this.register([],e,!1)};function W(e,t,n){if(G(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");W(e.concat(r),t.getChild(r),n.modules[r])}}H.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},H.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},H.prototype.update=function(e){W([],this.root,e)},H.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),G(e,t);var i=new q(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&s(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},H.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},H.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var B={assert:function(e){return"function"===typeof e},expected:"function"},V={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},$={getters:B,mutations:B,actions:V};function G(e,t){Object.keys($).forEach((function(n){if(t[n]){var r=$[n];s(t[n],(function(t,i){u(r.assert(t),K(e,n,i,t,r.expected))}))}}))}function K(e,t,n,r,i){var o=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function Y(e){return new J(e)}var J=function e(t){var n=this;void 0===t&&(t={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new H(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),r.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};J.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&S(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){u(!1,"use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},J.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},J.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},J.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},J.prototype.watch=function(e,t,n){var i=this;return u("function"===typeof e,"store.watch only accepts a function."),Object(r["K"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},J.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},J.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),u(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},J.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},J.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},J.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},J.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(J.prototype,Q);ne((function(e,t){var n={};return te(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),ee(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=re(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),ne((function(e,t){var n={};return te(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),ee(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=re(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));var X=ne((function(e,t){var n={};return te(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),ee(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||re(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),Z=ne((function(e,t){var n={};return te(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),ee(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=re(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function ee(e){return te(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function te(e){return Array.isArray(e)||a(e)}function ne(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function re(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},"588e":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return tt})),n.d(t,"c",(function(){return et})),n.d(t,"d",(function(){return Xe}));var r=n("589b"),i=n("1fd5"),o=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i["c"]{constructor(e,t){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new l("unknown",e)}function f(e){return new l("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new l("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",e)}function m(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(e){return new l("unauthorized","User does not have permission to access '"+e+"'.")}function _(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new l("canceled","User canceled the upload/download.")}function y(e){return new l("invalid-url","Invalid URL '"+e+"'.")}function w(e){return new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function O(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function C(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function k(){return new l("no-download-url","The given file does not have any download URLs.")}function I(e){return new l("invalid-argument",e)}function E(){return new l("app-deleted","The Firebase app was deleted.")}function T(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(e,t){return new l("invalid-format","String does not match format '"+e+"': "+t)}function x(e){throw new l("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=j.makeFromUrl(e,t)}catch(r){return new j(e,"")}if(""===n.path)return n;throw w(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===s?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),_={bucket:1,path:2},b=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:_,postModify:u}];for(let s=0;s<b.length;s++){const t=b[s],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new j(e,i),t.postModify(n);break}}if(null==n)throw y(e);return n}}class R{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){o&&clearTimeout(o)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||s;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,g(!0)},n),g}function N(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return void 0!==e}function L(e){return"object"===typeof e&&!Array.isArray(e)}function M(e){return"string"===typeof e||e instanceof String}function D(e){return F()&&e instanceof Blob}function F(){return"undefined"!==typeof Blob}function U(e,t,n,r){if(r<t)throw I(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw I(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function z(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(H||(H={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t,n,r,i,o,s,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new B(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===H.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){const t=n.getErrorCode()===H.ABORT;return void e(!1,new B(!1,null,t))}const o=-1!==this.successCodes_.indexOf(i);e(!0,new B(o,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());A(e)?n(e):n()}catch(o){r(o)}else if(null!==i){const e=d();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?E():b();r(e)}else{const e=_();r(e)}};this.canceled_?t(!1,new B(!1,null,!0)):this.backoffId_=P(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&N(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class B{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function V(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function $(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function G(e,t){t&&(e["X-Firebase-GMPID"]=t)}function K(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Y(e,t,n,r,i,o){const s=z(e.urlParams),a=e.url+s,c=Object.assign({},e.headers);return G(c,t),V(c,n),$(c,o),K(c,r),new W(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Q(...e){const t=J();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(F())return new Blob(e);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function X(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class te{constructor(e,t){this.data=e,this.contentType=t||null}}function ne(e,t){switch(e){case ee.RAW:return new te(re(t));case ee.BASE64:case ee.BASE64URL:return new te(oe(e,t));case ee.DATA_URL:return new te(ae(t),ce(t))}throw d()}function re(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,o=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ie(e){let t;try{t=decodeURIComponent(e)}catch(n){throw S(ee.DATA_URL,"Malformed data URL.")}return re(t)}function oe(e,t){switch(e){case ee.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw S(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ee.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw S(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z(t)}catch(i){throw S(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class se{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw S(ee.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=ue(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ae(e){const t=new se(e);return t.base64?oe(ee.BASE64,t.rest):ie(t.rest)}function ce(e){const t=new se(e);return t.contentType}function ue(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){let n=0,r="";D(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(D(this.data_)){const n=this.data_,r=X(n,e,t);return null===r?null:new le(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new le(n,!0)}}static getBlob(...e){if(F()){const t=e.map(e=>e instanceof le?e.data_:e);return new le(Q.apply(null,t))}{const t=e.map(e=>M(e)?ne(ee.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new le(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){let t;try{t=JSON.parse(e)}catch(n){return null}return L(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function fe(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function pe(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t){return t}class me{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ge}}let ve=null;function _e(e){return!M(e)||e.length<2?e:pe(e)}function be(){if(ve)return ve;const e=[];function t(e,t){return _e(t)}e.push(new me("bucket")),e.push(new me("generation")),e.push(new me("metageneration")),e.push(new me("name","fullPath",!0));const n=new me("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new me("size");return i.xform=r,e.push(i),e.push(new me("timeCreated")),e.push(new me("updated")),e.push(new me("md5Hash",null,!0)),e.push(new me("cacheControl",null,!0)),e.push(new me("contentDisposition",null,!0)),e.push(new me("contentEncoding",null,!0)),e.push(new me("contentLanguage",null,!0)),e.push(new me("contentType",null,!0)),e.push(new me("metadata","customMetadata",!0)),ve=e,ve}function ye(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new j(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function we(e,t,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return ye(r,e),r}function Oe(e,t,n){const r=he(t);if(null===r)return null;const i=r;return we(e,i,n)}function Ce(e,t,n,r){const i=he(t);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map(t=>{const i=e["bucket"],o=e["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=q(a,n,r),u=z({alt:"media",token:t});return c+u});return c[0]}function ke(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){if(!e)throw d()}function Te(e,t){function n(n,r){const i=Oe(e,r,t);return Ee(null!==i),i}return n}function Se(e,t){function n(n,r){const i=Oe(e,r,t);return Ee(null!==i),Ce(i,r,e.host,e._protocol)}return n}function xe(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===t.getStatus()?p(e.bucket):403===t.getStatus()?v(e.path):n,r.serverResponse=n.serverResponse,r}return t}function je(e){const t=xe(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=f(e.path)),i.serverResponse=r.serverResponse,i}return n}function Re(e,t,n){const r=t.fullServerUrl(),i=q(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Ie(i,o,Se(e,n),s);return a.errorHandler=je(t),a}function Pe(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ne(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Pe(null,t)),r}function Ae(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=Ne(t,r,i),l=ke(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=le.getBlob(h,r,d);if(null===f)throw C();const p={name:u["fullPath"]},g=q(o,e.host,e._protocol),m="POST",v=e.maxUploadRetryTime,_=new Ie(g,m,Te(e,n),v);return _.urlParams=p,_.headers=s,_.body=f.uploadData(),_.errorHandler=xe(t),_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Le=null;class Me{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=H.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=H.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class De extends Me{initXhr(){this.xhr_.responseType="text"}}function Fe(){return Le?Le():new De}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(e,t){this._service=e,this._location=t instanceof j?t:j.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ue(e,t)}get root(){const e=new j(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=de(this._location.path);if(null===e)return null;const t=new j(this._location.bucket,e);return new Ue(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw T(e)}}function qe(e,t,n){e._throwIfRoot("uploadBytes");const r=Ae(e.storage,e._location,be(),new le(t,!0),n);return e.storage.makeRequestWithTokens(r,Fe).then(t=>({metadata:t,ref:e}))}function ze(e){e._throwIfRoot("getDownloadURL");const t=Re(e.storage,e._location,be());return e.storage.makeRequestWithTokens(t,Fe).then(e=>{if(null===e)throw k();return e})}function He(e,t){const n=fe(e._location.path,t),r=new j(e._location.bucket,n);return new Ue(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){return/^[A-Za-z]+:\/\//.test(e)}function Be(e,t){return new Ue(e,t)}function Ve(e,t){if(e instanceof Ke){const n=e;if(null==n._bucket)throw O();const r=new Ue(n,n._bucket);return null!=t?Ve(r,t):r}return void 0!==t?He(e,t):e}function $e(e,t){if(t&&We(t)){if(e instanceof Ke)return Be(e,t);throw I("To use ref(service, url), the first argument must be a Storage instance.")}return Ve(e,t)}function Ge(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:j.makeFromBucketSpec(n,e)}class Ke{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?j.makeFromBucketSpec(r,this._host):Ge(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=j.makeFromBucketSpec(this._url,e):this._bucket=Ge(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){U("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){U("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ue(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new R(E());{const i=Y(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ye="@firebase/storage",Je="0.9.2",Qe="storage";function Xe(e,t,n){return e=Object(i["q"])(e),qe(e,t,n)}function Ze(e){return e=Object(i["q"])(e),ze(e)}function et(e,t){return e=Object(i["q"])(e),$e(e,t)}function tt(e=Object(r["d"])(),t){e=Object(i["q"])(e);const n=Object(r["b"])(e,Qe),o=n.getImmediate({identifier:t});return o}function nt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Ke(n,i,o,t,r["a"])}function rt(){Object(r["c"])(new o["a"](Qe,nt,"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(Ye,Je,""),Object(r["f"])(Ye,Je,"esm2017")}rt()},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"b",(function(){return H})),n.d(t,"c",(function(){return z})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return Y}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.15",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",_="@firebase/database",b="@firebase/database-compat",y="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",C="@firebase/installations-compat",k="@firebase/messaging",I="@firebase/messaging-compat",E="@firebase/performance",T="@firebase/performance-compat",S="@firebase/remote-config",x="@firebase/remote-config-compat",j="@firebase/storage",R="@firebase/storage-compat",P="@firebase/firestore",N="@firebase/firestore-compat",A="firebase",L="9.6.5",M="[DEFAULT]",D={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[_]:"fire-rtdb",[b]:"fire-rtdb-compat",[y]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[C]:"fire-iid-compat",[k]:"fire-fcm",[I]:"fire-fcm-compat",[E]:"fire-perf",[T]:"fire-perf-compat",[S]:"fire-rc",[x]:"fire-rc-compat",[j]:"fire-gcs",[R]:"fire-gcs-compat",[P]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[A]:"fire-js-all"},F=new Map,U=new Map;function q(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function z(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())q(n,e);return!0}function H(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},B=new o["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=L;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw B.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["n"])(e,s.options)&&Object(o["n"])(n,s.config))return s;throw B.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new V(e,n,a);return F.set(i,c),c}function K(e=M){const t=F.get(e);if(!t)throw B.create("no-app",{appName:e});return t}function Y(e,t,n){var i;let o=null!==(i=D[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}z(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){z(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),Y(c,u,e),Y(c,u,"esm2017"),Y("fire-js","")}J("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5a34":function(e,t,n){var r=n("da84"),i=n("44e7"),o=r.TypeError;e.exports=function(e){if(i(e))throw o("The method doesn't accept regular expressions");return e}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5fb2":function(e,t,n){"use strict";var r=n("da84"),i=n("e330"),o=2147483647,s=36,a=1,c=26,u=38,l=700,h=72,d=128,f="-",p=/[^\0-\u007E]/,g=/[.\u3002\uFF0E\uFF61]/g,m="Overflow: input needs wider integers to process",v=s-a,_=r.RangeError,b=i(g.exec),y=Math.floor,w=String.fromCharCode,O=i("".charCodeAt),C=i([].join),k=i([].push),I=i("".replace),E=i("".split),T=i("".toLowerCase),S=function(e){var t=[],n=0,r=e.length;while(n<r){var i=O(e,n++);if(i>=55296&&i<=56319&&n<r){var o=O(e,n++);56320==(64512&o)?k(t,((1023&i)<<10)+(1023&o)+65536):(k(t,i),n--)}else k(t,i)}return t},x=function(e){return e+22+75*(e<26)},j=function(e,t,n){var r=0;e=n?y(e/l):e>>1,e+=y(e/t);while(e>v*c>>1)e=y(e/v),r+=s;return y(r+(v+1)*e/(e+u))},R=function(e){var t=[];e=S(e);var n,r,i=e.length,u=d,l=0,p=h;for(n=0;n<e.length;n++)r=e[n],r<128&&k(t,w(r));var g=t.length,v=g;g&&k(t,f);while(v<i){var b=o;for(n=0;n<e.length;n++)r=e[n],r>=u&&r<b&&(b=r);var O=v+1;if(b-u>y((o-l)/O))throw _(m);for(l+=(b-u)*O,u=b,n=0;n<e.length;n++){if(r=e[n],r<u&&++l>o)throw _(m);if(r==u){var I=l,E=s;while(1){var T=E<=p?a:E>=p+c?c:E-p;if(I<T)break;var R=I-T,P=s-T;k(t,w(x(T+R%P))),I=y(R/P),E+=s}k(t,w(x(I))),p=j(l,O,v==g),l=0,v++}}l++,u++}return C(t,"")};e.exports=function(e){var t,n,r=[],i=E(I(T(e),g,"."),".");for(t=0;t<i.length;t++)n=i[t],k(r,b(p,n)?"xn--"+R(n):n);return C(r,".")}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,d=c.f,f=u.f;while(i>s){var g,m=h(arguments[s++]),v=d?p(a(m),d(m)):a(m),_=v.length,b=0;while(_>b)g=v[b++],r&&!o(f,m,g)||(n[g]=m[g])}return n}:d},6547:function(e,t,n){var r=n("e330"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=o(s(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"66ce":function(e,t,n){"use strict";var r=n("51b0");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]}))},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(e){if(!o(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},m=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!h||i((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?m:g},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,_=function(e){return o(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var y=d.state||(d.state=new v),w=c(y.get),O=c(y.has),C=c(y.set);r=function(e,t){if(O(y,e))throw new m(g);return t.facade=e,C(y,e,t),t},i=function(e){return w(y,e)||{}},o=function(e){return O(y,e)}}else{var k=f("state");p[k]=!0,r=function(e,t){if(h(e,k))throw new m(g);return t.facade=e,l(e,k,t),t},i=function(e){return h(e,k)?e[k]:{}},o=function(e){return h(e,k)}}e.exports={set:r,get:i,has:o,enforce:_,getterFor:b}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return B}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const m=/\/$/,v=e=>e.replace(m,"");function _(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=E(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function y(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(t.matched[r],n.matched[i])&&C(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function C(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function E(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var T,S;(function(e){e["pop"]="pop",e["push"]="push"})(T||(T={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function x(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const j=/^[^#]+#/;function R(e,t){return e.replace(j,"#")+t}function P(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=P(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function F(e){const t=M.get(e);return M.delete(e),t}let U=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),y(n,"")}const s=y(n,e);return s+r+i}function z(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=q(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:T.pop,direction:l?l>0?S.forward:S.back:S.unknown})})};function c(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:N()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function H(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?N():null}}function W(e){const{history:t,location:n}=window,r={value:q(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:U()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=f({},t.state,H(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=f({},i.value,t.state,{forward:e,scroll:N()});o(s.current,s,!0);const a=f({},H(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function B(e){e=x(e);const t=W(e),n=z(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:R.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=o("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function J(e,t){return f(new Error,{type:e,[K]:!0},t)}function Q(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const X="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const o=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const h=c||X;if(h!==X){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},oe=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:oe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function ae(e,t,n){const r=te(se(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ae(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!de(h)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{s(d)}:g}function s(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw J(1,{location:e});s=i.record.name,a=f(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw J(1,{location:e,currentLocation:t});s=i.record.name,a=f({},t.params,e.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ge=/#/g,me=/&/g,ve=/\//g,_e=/=/g,be=/\?/g,ye=/\+/g,we=/%5B/g,Oe=/%5D/g,Ce=/%5E/g,ke=/%60/g,Ie=/%7B/g,Ee=/%7C/g,Te=/%7D/g,Se=/%20/g;function xe(e){return encodeURI(""+e).replace(Ee,"|").replace(we,"[").replace(Oe,"]")}function je(e){return xe(e).replace(Ie,"{").replace(Te,"}").replace(Ce,"^")}function Re(e){return xe(e).replace(ye,"%2B").replace(Se,"+").replace(ge,"%23").replace(me,"%26").replace(ke,"`").replace(Ie,"{").replace(Te,"}").replace(Ce,"^")}function Pe(e){return Re(e).replace(_e,"%3D")}function Ne(e){return xe(e).replace(ge,"%23").replace(be,"%3F")}function Ae(e){return null==e?"":Ne(e).replace(ve,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),o=Le(n<0?e:e.slice(0,n)),s=n<0?null:Le(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Re(e)):[r&&Re(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(J(4,{from:n,to:t})):e instanceof Error?a(e):V(e)?a(J(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function ze(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(He(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push(qe(c,n,r,o,e))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=d(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&qe(c,n,r,o,e)()}))}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function We(e){const t=Object(r["m"])(c),n=Object(r["m"])(u),i=Object(r["b"])(()=>t.resolve(Object(r["F"])(e.to))),o=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const a=Ke(e[t-2]);return t>1&&Ke(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["b"])(()=>o.value>-1&&Ge(n.params,i.value.params)),a=Object(r["b"])(()=>o.value>-1&&o.value===n.matched.length-1&&C(n.params,i.value.params));function l(n={}){return $e(n)?t[Object(r["F"])(e.replace)?"replace":"push"](Object(r["F"])(e.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const Be=Object(r["j"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=Object(r["x"])(We(e)),{options:i}=Object(r["m"])(c),o=Object(r["b"])(()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["l"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ve=Be;function $e(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ge(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Je=Object(r["j"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["m"])(l),o=Object(r["b"])(()=>e.route||i.value),c=Object(r["m"])(a,0),u=Object(r["b"])(()=>o.value.matched[c]);Object(r["v"])(a,c+1),Object(r["v"])(s,u),Object(r["v"])(l,o);const h=Object(r["y"])();return Object(r["K"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&O(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Qe(n.default,{Component:a,route:i});const l=s.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},g=Object(r["l"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Qe(n.default,{Component:g,route:i})||g}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Xe=Je;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Me,i=e.stringifyQuery||De,o=e.history;const s=Ue(),a=Ue(),d=Ue(),m=Object(r["D"])(G);let v=G;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=p.bind(null,e=>""+e),O=p.bind(null,Ae),C=p.bind(null,Le);function k(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map(e=>e.record)}function S(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=f({},r||m.value),"string"===typeof e){const i=_(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return f(i,s,{params:C(s.params),hash:Le(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=f({},e,{path:_(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];s=f({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=y(C(a.params));const u=b(i,f({},e,{hash:je(c),path:a.path})),l=o.createHref(u);return f({fullPath:u,hash:c,query:i===De?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function j(e){return"string"===typeof e?_(n,e,m.value.path):f({},e)}function R(e,t){if(v!==e)return J(8,{from:t,to:e})}function P(e){return q(e)}function M(e){return P(f(j(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=j(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function q(e,t){const n=v=x(e),r=m.value,o=e.state,s=e.force,a=!0===e.replace,c=U(n);if(c)return q(f(j(c),{state:o,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(i,r,n)&&(l=J(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):H(u,r)).catch(e=>Q(e)?e:ee(e,u,r)).then(e=>{if(e){if(Q(e,2))return q(f(j(e.to),{state:o,force:s,replace:a}),t||u)}else e=B(u,r,!0,a,o);return W(u,r,e),e})}function z(e,t){const n=R(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e,t){let n;const[r,i,o]=tt(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(qe(r,e,t))});const c=z.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(qe(r,e,t));return n.push(c),et(n)}).then(()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(qe(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=ze(o,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(qe(r,e,t));return n.push(c),et(n)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function W(e,t,n){for(const r of d.list())r(e,t,n)}function B(e,t,n,r,i){const s=R(e,t);if(s)return s;const a=t===G,c=h?history.state:{};n&&(r||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),m.value=e,re(e,t,n,a),ne()}let V;function K(){V=o.listen((e,t,n)=>{const r=x(e),i=U(r);if(i)return void q(f(i,{replace:!0}),r).catch(g);v=r;const s=m.value;h&&D(L(s.fullPath,n.delta),N()),H(r,s).catch(e=>Q(e,12)?e:Q(e,2)?(q(e.to,r).then(e=>{Q(e,20)&&!n.delta&&n.type===T.pop&&o.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||B(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===T.pop&&Q(e,20)&&o.go(-1,!1)),W(r,s,e)}).catch(g)})}let Y,X=Ue(),Z=Ue();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Y&&m.value!==G?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ne(e){Y||(Y=!0,K(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset())}function re(t,n,i,o){const{scrollBehavior:s}=e;if(!h||!s)return Promise.resolve();const a=!i&&F(L(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["n"])().then(()=>s(t,n,a)).then(e=>e&&A(e)).catch(e=>ee(e,t,n))}const ie=e=>o.go(e);let oe;const se=new Set,ae={currentRoute:m,addRoute:k,removeRoute:I,hasRoute:S,getRoutes:E,resolve:x,options:e,push:P,replace:M,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",Ve),e.component("RouterView",Xe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["F"])(m)}),h&&!oe&&m.value===G&&(oe=!0,P(o.location).catch(e=>{0}));const n={};for(const o in G)n[o]=Object(r["b"])(()=>m.value[o]);e.provide(c,t),e.provide(u,Object(r["x"])(n)),e.provide(l,m);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(v=G,V&&V(),m.value=G,oe=!1,Y=!1),i()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>O(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||i.push(a))}return[n,r,i]}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=d(n),u.source||(u.source=f.join("string"==typeof m?m:""))),e!==r?(h?!g&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},"6f53":function(e,t,n){var r=n("83ab"),i=n("e330"),o=n("df75"),s=n("fc6a"),a=n("d1e7").f,c=i(a),u=i([].push),l=function(e){return function(t){var n,i=s(t),a=o(i),l=a.length,h=0,d=[];while(l>h)n=a[h++],r&&!c(i,n)||u(d,e?[n,i[n]]:i[n]);return d}};e.exports={entries:l(!0),values:l(!1)}},7156:function(e,t,n){var r=n("1626"),i=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7a23":function(e,t,n){"use strict";n.d(t,"x",(function(){return Ce})),n.d(t,"y",(function(){return Fe})),n.d(t,"D",(function(){return Ue})),n.d(t,"F",(function(){return He})),n.d(t,"o",(function(){return r["I"]})),n.d(t,"p",(function(){return r["J"]})),n.d(t,"E",(function(){return r["L"]})),n.d(t,"a",(function(){return Or})),n.d(t,"b",(function(){return ki})),n.d(t,"d",(function(){return Ar})),n.d(t,"e",(function(){return $r})),n.d(t,"f",(function(){return Nr})),n.d(t,"g",(function(){return qr})),n.d(t,"h",(function(){return Vr})),n.d(t,"i",(function(){return zr})),n.d(t,"j",(function(){return rn})),n.d(t,"k",(function(){return ci})),n.d(t,"l",(function(){return Ii})),n.d(t,"m",(function(){return qt})),n.d(t,"n",(function(){return lt})),n.d(t,"q",(function(){return cn})),n.d(t,"r",(function(){return un})),n.d(t,"s",(function(){return wn})),n.d(t,"t",(function(){return Sr})),n.d(t,"u",(function(){return xt})),n.d(t,"v",(function(){return Ut})),n.d(t,"w",(function(){return St})),n.d(t,"z",(function(){return Xr})),n.d(t,"A",(function(){return Zr})),n.d(t,"B",(function(){return vr})),n.d(t,"C",(function(){return br})),n.d(t,"K",(function(){return Ht})),n.d(t,"L",(function(){return jt})),n.d(t,"M",(function(){return nr})),n.d(t,"c",(function(){return Bo})),n.d(t,"G",(function(){return Ao})),n.d(t,"H",(function(){return xo})),n.d(t,"I",(function(){return jo})),n.d(t,"J",(function(){return Eo})),n.d(t,"N",(function(){return qo})),n.d(t,"O",(function(){return Fo}));var r=n("9ff4");let i;const o=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&g)>0,l=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~g,i.n&=~g}t.length=n}},f=new WeakMap;let p=0,g=1;const m=30,v=[];let _;const b=Symbol(""),y=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.length||!v.includes(this))try{return v.push(_=this),E(),g=1<<++p,p<=m?h(this):O(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,T(),v.pop();const e=v.length;_=e>0?v[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let C=!0;const k=[];function I(){k.push(C),C=!1}function E(){k.push(C),C=!0}function T(){const e=k.pop();C=void 0===e||e}function S(e,t,n){if(!x())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;j(i,o)}function x(){return C&&void 0!==_}function j(e,t){let n=!1;p<=m?l(e)||(e.n|=g,n=!u(e)):n=!e.has(_),n&&(e.add(_),_.deps.push(e))}function R(e,t,n,i,o,s){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(y)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(y)));break;case"set":Object(r["t"])(e)&&u.push(a.get(b));break}if(1===u.length)u[0]&&P(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);P(c(e))}}function P(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==_||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=Object(r["H"])("__proto__,__v_isRef,__isVue"),A=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),L=q(),M=q(!1,!0),D=q(!0),F=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Re(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Re)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){I();const n=Re(this)[t].apply(this,e);return T(),n}}),e}function q(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ye:be:t?_e:ve).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(F,i))return Reflect.get(F,i,o);const a=Reflect.get(n,i,o);if(Object(r["E"])(i)?A.has(i):N(i))return a;if(e||S(n,"get",i),t)return a;if(De(a)){const e=!s||!Object(r["s"])(i);return e?a.value:a}return Object(r["v"])(a)?e?Ie(a):Ce(a):a}}const z=W(),H=W(!0);function W(e=!1){return function(t,n,i,o){let s=t[n];if(Se(s)&&De(s))return!1;if(!e&&!Se(i)&&(xe(i)||(i=Re(i),s=Re(s)),!Object(r["o"])(t)&&De(s)&&!De(i)))return s.value=i,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,o);return t===Re(o)&&(a?Object(r["j"])(i,s)&&R(t,"set",n,i,s):R(t,"add",n,i)),c}}function B(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&R(e,"delete",t,void 0,i),o}function V(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&A.has(t)||S(e,"has",t),n}function $(e){return S(e,"iterate",Object(r["o"])(e)?"length":b),Reflect.ownKeys(e)}const G={get:L,set:z,deleteProperty:B,has:V,ownKeys:$},K={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},Y=Object(r["h"])({},G,{get:M,set:H}),J=e=>e,Q=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Re(e),o=Re(t);t!==o&&!n&&S(i,"get",t),!n&&S(i,"get",o);const{has:s}=Q(i),a=r?J:n?Ae:Ne;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Re(n),i=Re(e);return e!==i&&!t&&S(r,"has",e),!t&&S(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&S(Re(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=Re(e);const t=Re(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function ne(e,t){t=Re(t);const n=Re(this),{has:i,get:o}=Q(n);let s=i.call(n,e);s||(e=Re(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function re(e){const t=Re(this),{has:n,get:r}=Q(t);let i=n.call(t,e);i||(e=Re(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&R(t,"delete",e,void 0,o),s}function ie(){const e=Re(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function oe(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Re(o),a=t?J:e?Ae:Ne;return!e&&S(s,"iterate",b),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function se(e,t,n){return function(...i){const o=this["__v_raw"],s=Re(o),a=Object(r["t"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),h=n?J:t?Ae:Ne;return!t&&S(s,"iterate",u?y:b),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!1)},r={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)}),[e,n,t,r]}const[ue,le,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?le:ue;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const pe={get:fe(!1,!1)},ge={get:fe(!1,!0)},me={get:fe(!0,!1)};const ve=new WeakMap,_e=new WeakMap,be=new WeakMap,ye=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(r["O"])(e))}function Ce(e){return Se(e)?e:Ee(e,!1,G,pe,ve)}function ke(e){return Ee(e,!1,Y,ge,_e)}function Ie(e){return Ee(e,!0,K,me,be)}function Ee(e,t,n,i,o){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Te(e){return Se(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return!(!e||!e["__v_isShallow"])}function je(e){return Te(e)||Se(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Pe(e){return Object(r["g"])(e,"__v_skip",!0),e}const Ne=e=>Object(r["v"])(e)?Ce(e):e,Ae=e=>Object(r["v"])(e)?Ie(e):e;function Le(e){x()&&(e=Re(e),e.dep||(e.dep=c()),j(e.dep))}function Me(e,t){e=Re(e),e.dep&&P(e.dep)}function De(e){return Boolean(e&&!0===e.__v_isRef)}function Fe(e){return qe(e,!1)}function Ue(e){return qe(e,!0)}function qe(e,t){return De(e)?e:new ze(e,t)}class ze{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:Ne(e)}get value(){return Le(this),this._value}set value(e){e=this.__v_isShallow?e:Re(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ne(e),Me(this,e))}}function He(e){return De(e)?e.value:e}const We={get:(e,t,n)=>He(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Be(e){return Te(e)?e:new Proxy(e,We)}class Ve{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Me(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Re(this);return Le(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t,n=!1){let i,o;const s=Object(r["p"])(e);s?(i=e,o=r["d"]):(i=e.get,o=e.set);const a=new Ve(i,o,s||!o,n);return a}Promise.resolve();function Ge(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){Ye(o,t,n)}return i}function Ke(e,t,n,i){if(Object(r["p"])(e)){const o=Ge(e,t,n,i);return o&&Object(r["y"])(o)&&o.catch(e=>{Ye(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(Ke(e[r],t,n,i));return o}function Ye(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Ge(s,null,10,[e,i,o])}Je(e,n,i,r)}function Je(e,t,n,r=!0){console.error(e)}let Qe=!1,Xe=!1;const Ze=[];let et=0;const tt=[];let nt=null,rt=0;const it=[];let ot=null,st=0;const at=Promise.resolve();let ct=null,ut=null;function lt(e){const t=ct||at;return e?t.then(this?e.bind(this):e):t}function ht(e){let t=et+1,n=Ze.length;while(t<n){const r=t+n>>>1,i=yt(Ze[r]);i<e?t=r+1:n=r}return t}function dt(e){Ze.length&&Ze.includes(e,Qe&&e.allowRecurse?et+1:et)||e===ut||(null==e.id?Ze.push(e):Ze.splice(ht(e.id),0,e),ft())}function ft(){Qe||Xe||(Xe=!0,ct=at.then(wt))}function pt(e){const t=Ze.indexOf(e);t>et&&Ze.splice(t,1)}function gt(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ft()}function mt(e){gt(e,nt,tt,rt)}function vt(e){gt(e,ot,it,st)}function _t(e,t=null){if(tt.length){for(ut=t,nt=[...new Set(tt)],tt.length=0,rt=0;rt<nt.length;rt++)nt[rt]();nt=null,rt=0,ut=null,_t(e,t)}}function bt(e){if(it.length){const e=[...new Set(it)];if(it.length=0,ot)return void ot.push(...e);for(ot=e,ot.sort((e,t)=>yt(e)-yt(t)),st=0;st<ot.length;st++)ot[st]();ot=null,st=0}}const yt=e=>null==e.id?1/0:e.id;function wt(e){Xe=!1,Qe=!0,_t(e),Ze.sort((e,t)=>yt(e)-yt(t));r["d"];try{for(et=0;et<Ze.length;et++){const e=Ze[et];e&&!1!==e.active&&Ge(e,null,14)}}finally{et=0,Ze.length=0,bt(e),Qe=!1,ct=null,(Ze.length||tt.length||it.length)&&wt(e)}}new Set;new Map;function Ot(e,t,...n){const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(t)]||i[c=Object(r["M"])(Object(r["e"])(t))];!u&&s&&(u=i[c=Object(r["M"])(Object(r["l"])(t))]),u&&Ke(u,e,6,o);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Ke(l,e,6,o)}}function Ct(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const i=e=>{const n=Ct(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function kt(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let It=null,Et=null;function Tt(e){const t=It;return It=e,Et=e&&e.type.__scopeId||null,t}function St(e){Et=e}function xt(){Et=null}function jt(e,t=It,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Rr(-1);const i=Tt(t),o=e(...n);return Tt(i),r._d&&Rr(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Rt(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:m}=e;let v,_;const b=Tt(e);try{if(4&n.shapeFlag){const e=o||i;v=Gr(h.call(e,e,d,s,p,f,g)),_=u}else{const e=t;0,v=Gr(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),_=t.props?u:Pt(u)}}catch(w){Er.length=0,Ye(w,e,1),v=zr(kr)}let y=v;if(_&&!1!==m){const e=Object.keys(_),{shapeFlag:t}=y;e.length&&7&t&&(a&&e.some(r["u"])&&(_=Nt(_,a)),y=Br(y,_))}return n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),v=y,Tt(b),v}const Pt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},Nt=(e,t)=>{const n={};for(const i in e)Object(r["u"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function At(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||Lt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?Lt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!kt(u,n))return!0}}return!1}function Lt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!kt(n,o))return!0}return!1}function Mt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Dt=e=>e.__isSuspense;function Ft(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):vt(e)}function Ut(e,t){if(ai){let n=ai.provides;const r=ai.parent&&ai.parent.provides;r===n&&(n=ai.provides=Object.create(r)),n[e]=t}else 0}function qt(e,t,n=!1){const i=ai||It;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(i.proxy):t}else 0}const zt={};function Ht(e,t,n){return Wt(e,t,n)}function Wt(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=ai;let u,l,h=!1,d=!1;if(De(e)?(u=()=>e.value,h=xe(e)):Te(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(Te),u=()=>e.map(e=>De(e)?e.value:Te(e)?$t(e):Object(r["p"])(e)?Ge(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>Ge(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Ke(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>$t(e())}let f=e=>{l=v.onStop=()=>{Ge(e,c,4)}};if(pi)return f=r["d"],t?n&&Ke(t,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:zt;const g=()=>{if(v.active)if(t){const e=v.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),Ke(t,c,3,[e,p===zt?void 0:p,f]),p=e)}else v.run()};let m;g.allowRecurse=!!t,m="sync"===o?g:"post"===o?()=>ur(g,c&&c.suspense):()=>{!c||c.isMounted?mt(g):g()};const v=new w(u,m);return t?n?g():p=v.run():"post"===o?ur(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,v)}}function Bt(e,t,n){const i=this.proxy,o=Object(r["D"])(e)?e.includes(".")?Vt(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const a=ai;ui(this);const c=Wt(o,s.bind(i),n);return a?ui(a):li(),c}function Vt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function $t(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),De(e))$t(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)$t(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{$t(e,t)});else if(Object(r["x"])(e))for(const n in e)$t(e[n],t);return e}function Gt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vn(()=>{e.isMounted=!0}),yn(()=>{e.isUnmounting=!0}),e}const Kt=[Function,Array],Yt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},setup(e,{slots:t}){const n=ci(),r=Gt();let i;return()=>{const o=t.default&&nn(t.default(),!0);if(!o||!o.length)return;const s=Re(e),{mode:a}=s;const c=o[0];if(r.isLeaving)return Zt(c);const u=en(c);if(!u)return Zt(c);const l=Xt(u,s,r,n);tn(u,l);const h=n.subTree,d=h&&en(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==kr&&(!Mr(u,d)||f)){const e=Xt(d,s,r,n);if(tn(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Zt(c);"in-out"===a&&u.type!==kr&&(e.delayLeave=(e,t,n)=>{const i=Qt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},Jt=Yt;function Qt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Xt(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:_}=t,b=String(e.key),y=Qt(n,e),w=(e,t)=>{e&&Ke(e,r,9,t)},O={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const o=y[b];o&&Mr(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,o=l;if(!n.isMounted){if(!i)return;t=m||c,r=v||u,o=_||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,y[i]===e&&delete y[i])};y[i]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return Xt(e,t,n,r)}};return O}function Zt(e){if(sn(e))return e=Br(e),e.children=null,e}function en(e){return sn(e)?e.children?e.children[0]:void 0:e}function tn(e,t){6&e.shapeFlag&&e.component?tn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function nn(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Or?(128&o.patchFlag&&r++,n=n.concat(nn(o.children,t))):(t||o.type!==kr)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function rn(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const on=e=>!!e.type.__asyncLoader;const sn=e=>e.type.__isKeepAlive;RegExp,RegExp;function an(e,t){return Object(r["o"])(e)?e.some(e=>an(e,t)):Object(r["D"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function cn(e,t){ln(e,"a",t)}function un(e,t){ln(e,"da",t)}function ln(e,t,n=ai){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(pn(t,r,n),n){let e=n.parent;while(e&&e.parent)sn(e.parent.vnode)&&hn(r,t,n,e),e=e.parent}}function hn(e,t,n,i){const o=pn(t,e,i,!0);wn(()=>{Object(r["K"])(i[t],o)},n)}function dn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function fn(e){return 128&e.shapeFlag?e.ssContent:e}function pn(e,t,n=ai,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;I(),ui(n);const i=Ke(t,n,e,r);return li(),T(),i});return r?i.unshift(o):i.push(o),o}}const gn=e=>(t,n=ai)=>(!pi||"sp"===e)&&pn(e,t,n),mn=gn("bm"),vn=gn("m"),_n=gn("bu"),bn=gn("u"),yn=gn("bum"),wn=gn("um"),On=gn("sp"),Cn=gn("rtg"),kn=gn("rtc");function In(e,t=ai){pn("ec",e,t)}let En=!0;function Tn(e){const t=Rn(e),n=e.proxy,i=e.ctx;En=!1,t.beforeCreate&&xn(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:v,beforeDestroy:_,beforeUnmount:b,destroyed:y,unmounted:w,render:O,renderTracked:C,renderTriggered:k,errorCaptured:I,serverPrefetch:E,expose:T,inheritAttrs:S,components:x,directives:j,filters:R}=t,P=null;if(l&&Sn(l,i,P,e.appContext.config.unwrapInjectedRef),a)for(const A in a){const e=a[A];Object(r["p"])(e)&&(i[A]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["v"])(t)&&(e.data=Ce(t))}if(En=!0,s)for(const A in s){const e=s[A],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=ki({get:t,set:o});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)jn(c[r],i,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{Ut(t,e[t])})}function N(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&xn(h,e,"c"),N(mn,d),N(vn,f),N(_n,p),N(bn,g),N(cn,m),N(un,v),N(In,I),N(kn,C),N(Cn,k),N(yn,b),N(wn,w),N(On,E),Object(r["o"])(T))if(T.length){const t=e.exposed||(e.exposed={});T.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=S&&(e.inheritAttrs=S),x&&(e.components=x),j&&(e.directives=j)}function Sn(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Mn(e));for(const o in e){const n=e[o];let s;s=Object(r["v"])(n)?"default"in n?qt(n.from||o,n.default,!0):qt(n.from||o):qt(n),De(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function xn(e,t,n){Ke(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function jn(e,t,n,i){const o=i.includes(".")?Vt(n,i):()=>n[i];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&Ht(o,n)}else if(Object(r["p"])(e))Ht(o,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>jn(e,t,n,i));else{const i=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(i)&&Ht(o,i,e)}else 0}function Rn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Pn(c,e,s,!0)),Pn(c,t,s)):c=t,o.set(t,c),c}function Pn(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Pn(e,o,n,!0),i&&i.forEach(t=>Pn(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Nn[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Nn={data:An,props:Fn,emits:Fn,methods:Fn,computed:Fn,beforeCreate:Dn,created:Dn,beforeMount:Dn,mounted:Dn,beforeUpdate:Dn,updated:Dn,beforeDestroy:Dn,beforeUnmount:Dn,destroyed:Dn,unmounted:Dn,activated:Dn,deactivated:Dn,errorCaptured:Dn,serverPrefetch:Dn,components:Fn,directives:Fn,watch:Un,provide:An,inject:Ln};function An(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Ln(e,t){return Fn(Mn(e),Mn(t))}function Mn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Dn(e,t){return e?[...new Set([].concat(e,t))]:t}function Fn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Un(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Dn(e[r],t[r]);return n}function qn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,Dr,1),e.propsDefaults=Object.create(null),Hn(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:ke(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function zn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=Re(o),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;Hn(e,t,o,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=Wn(u,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=t[a];if(u)if(Object(r["k"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const t=Object(r["e"])(a);o[t]=Wn(u,c,t,h,e,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&R(e,"set","$attrs")}function Hn(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let h;o&&Object(r["k"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:kt(e.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(s){const t=Re(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=Wn(o,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function Wn(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(ui(o),i=r[n]=e.call(null,t),li())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Bn(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const i=e=>{u=!0;const[n,i]=Bn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let h=0;h<s.length;h++){0;const e=Object(r["e"])(s[h]);Vn(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(Vn(t)){const n=s[e],i=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const e=Kn(Boolean,i.type),n=Kn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function Vn(e){return"$"!==e[0]}function $n(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Gn(e,t){return $n(e)===$n(t)}function Kn(e,t){return Object(r["o"])(t)?t.findIndex(t=>Gn(t,e)):Object(r["p"])(t)&&Gn(t,e)?0:-1}const Yn=e=>"_"===e[0]||"$stable"===e,Jn=e=>Object(r["o"])(e)?e.map(Gr):[Gr(e)],Qn=(e,t,n)=>{const r=jt((...e)=>Jn(t(...e)),n);return r._c=!1,r},Xn=(e,t,n)=>{const i=e._ctx;for(const o in e){if(Yn(o))continue;const n=e[o];if(Object(r["p"])(n))t[o]=Qn(o,n,i);else if(null!=n){0;const e=Jn(n);t[o]=()=>e}}},Zn=(e,t)=>{const n=Jn(t);e.slots.default=()=>n},er=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Re(t),Object(r["g"])(t,"_",n)):Xn(t,e.slots={})}else e.slots={},t&&Zn(e,t);Object(r["g"])(e.slots,Dr,1)},tr=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,Xn(t,o)),a=t}else t&&(Zn(e,t),a={default:1});if(s)for(const r in o)Yn(r)||r in a||delete o[r]};function nr(e,t){const n=It;if(null===n)return e;const i=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&$t(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function rr(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(I(),Ke(c,n,8,[e.el,a,e,t]),T())}}function ir(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let or=0;function sr(e,t){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const o=ir(),s=new Set;let a=!1;const c=o.app={_uid:or++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:Ei,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["p"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,u){if(!a){const l=zr(n,i);return l.appContext=o,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,wi(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function ar(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>ar(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(on(i)&&!o)return;const s=4&i.shapeFlag?wi(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=e;const l=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):De(l)&&(l.value=null)),Object(r["p"])(u))Ge(u,c,12,[a,h]);else{const t=Object(r["D"])(u),i=De(u);if(t||i){const i=()=>{if(e.f){const n=t?h[u]:u.value;o?Object(r["o"])(n)&&Object(r["K"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?h[u]=[s]:(u.value=[s],e.k&&(h[e.k]=u.value))}else t?(h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)):De(u)&&(u.value=a,e.k&&(h[e.k]=a))};a?(i.id=-1,ur(i,n)):i()}else 0}}function cr(){}const ur=Ft;function lr(e){return hr(e)}function hr(e,t){cr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Mr(e,t)&&(r=K(e),W(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Cr:_(e,t,n,r);break;case kr:b(e,t,n,r);break;case Ir:null==e&&y(t,n,r,s);break;case Or:N(e,t,n,r,i,o,s,a,c);break;default:1&h?k(e,t,n,r,i,o,s,a,c):6&h?A(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,o,s,a,c,J)}null!=l&&i&&ar(l,e&&e.ref,o,t||e,!t)},_=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},y=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},O=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=f(e),i(e,n,r),e=o;i(t,n,r)},C=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},k=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?E(t,n,r,i,o,s,a,c):j(e,t,i,o,s,a,c)},E=(e,t,n,o,c,u,l,d)=>{let f,p;const{type:m,props:v,shapeFlag:_,transition:b,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==g&&-1===y)f=e.el=g(e.el);else{if(f=e.el=a(e.type,u,v&&v.is,v),8&_?h(f,e.children):16&_&&x(e.children,f,null,o,c,u&&"foreignObject"!==m,l,d),w&&rr(e,null,o,"created"),v){for(const t in v)"value"===t||Object(r["z"])(t)||s(f,t,null,v[t],u,e.children,o,c,G);"value"in v&&s(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&Qr(p,o,e)}S(f,e,e.scopeId,l,o)}w&&rr(e,null,o,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;O&&b.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||O||w)&&ur(()=>{p&&Qr(p,o,e),O&&b.enter(f),w&&rr(e,null,o,"mounted")},c)},S=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;S(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},x=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Kr(e[u]):Gr(e[u]);v(null,c,t,n,r,i,o,s,a)}},j=(e,t,n,i,o,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||r["b"],g=t.props||r["b"];let m;n&&dr(n,!1),(m=g.onVnodeBeforeUpdate)&&Qr(m,n,t,e),f&&rr(t,e,n,"beforeUpdate"),n&&dr(n,!0);const v=o&&"foreignObject"!==t.type;if(d?R(e.dynamicChildren,d,u,n,i,v,a):c||U(e,t,u,null,n,i,v,a,!1),l>0){if(16&l)P(u,t,p,g,n,i,o);else if(2&l&&p.class!==g.class&&s(u,"class",null,g.class,o),4&l&&s(u,"style",p.style,g.style,o),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=g[a];l===c&&"value"!==a||s(u,a,c,l,o,e.children,n,i,G)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=d||P(u,t,p,g,n,i,o);((m=g.onVnodeUpdated)||f)&&ur(()=>{m&&Qr(m,n,t,e),f&&rr(t,e,n,"updated")},i)},R=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Or||!Mr(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,o,s,!0)}},P=(e,t,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&s(e,u,h,l,c,t.children,o,a,G)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||s(e,u,n[u],null,c,t.children,o,a,G);"value"in i&&s(e,"value",n.value,i.value)}},N=(e,t,n,r,o,s,a,u,l)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(u=u?u.concat(g):g),null==e?(i(h,n,r),i(d,n,r),x(t.children,n,d,o,s,a,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,n,o,s,a,u),(null!=t.key||o&&t===o.subTree)&&fr(e,t,!0)):U(e,t,n,d,o,s,a,u,l)},A=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):L(t,n,r,i,o,s,c):M(e,t,c)},L=(e,t,n,r,i,o,s)=>{const a=e.component=si(e,r,i);if(sn(e)&&(a.ctx.renderer=J),gi(a),a.asyncDep){if(i&&i.registerDep(a,D),!e.el){const e=a.subTree=zr(kr);b(null,e,t,n)}}else D(a,e,t,n,i,o,s)},M=(e,t,n)=>{const r=t.component=e.component;if(At(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,pt(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:l}=e,h=n;0,dr(e,!1),n?(n.el=l.el,F(e,n,a)):n=l,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Qr(t,u,n,l),dr(e,!0);const f=Rt(e);0;const p=e.subTree;e.subTree=f,v(p,f,d(p.el),K(p),e,o,s),n.el=f.el,null===h&&Mt(e,f.el),c&&ur(c,o),(t=n.props&&n.props.onVnodeUpdated)&&ur(()=>Qr(t,u,n,l),o)}else{let a;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=on(t);if(dr(e,!1),l&&Object(r["n"])(l),!f&&(a=u&&u.onVnodeBeforeMount)&&Qr(a,d,t),dr(e,!0),c&&X){const n=()=>{e.subTree=Rt(e),X(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Rt(e);0,v(null,r,n,i,e,o,s),t.el=r.el}if(h&&ur(h,o),!f&&(a=u&&u.onVnodeMounted)){const e=t;ur(()=>Qr(a,d,e),o)}256&t.shapeFlag&&e.a&&ur(e.a,o),e.isMounted=!0,t=n=i=null}},u=e.effect=new w(c,()=>dt(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,dr(e,!0),l()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,zn(e,t.props,r,n),tr(e,t.children,n),I(),_t(void 0,e.update),T()},U=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(u,d,n,r,i,o,s,a,c);if(256&f)return void q(u,d,n,r,i,o,s,a,c)}8&p?(16&l&&G(u,i,o),d!==u&&h(n,d)):16&l?16&p?z(u,d,n,r,i,o,s,a,c):G(u,i,o,!0):(8&l&&h(n,""),16&p&&x(d,n,r,i,o,s,a,c))},q=(e,t,n,i,o,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Kr(t[f]):Gr(t[f]);v(e[f],r,n,null,o,s,a,c,u)}l>h?G(e,o,s,!0,!1,d):x(t,n,i,o,s,a,c,u,d)},z=(e,t,n,i,o,s,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Kr(t[l]):Gr(t[l]);if(!Mr(r,i))break;v(r,i,n,null,o,s,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Kr(t[f]):Gr(t[f]);if(!Mr(r,i))break;v(r,i,n,null,o,s,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,r=e<h?t[e].el:i;while(l<=f)v(null,t[l]=u?Kr(t[l]):Gr(t[l]),n,r,o,s,a,c,u),l++}}else if(l>f)while(l<=d)W(e[l],o,s,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?Kr(t[l]):Gr(t[l]);null!=e.key&&m.set(e.key,l)}let _,b=0;const y=f-g+1;let w=!1,O=0;const C=new Array(y);for(l=0;l<y;l++)C[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=y){W(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(_=g;_<=f;_++)if(0===C[_-g]&&Mr(r,t[_])){i=_;break}void 0===i?W(r,o,s,!0):(C[i-g]=l+1,i>=O?O=i:w=!0,v(r,t[i],n,null,o,s,a,c,u),b++)}const k=w?pr(C):r["a"];for(_=k.length-1,l=y-1;l>=0;l--){const e=g+l,r=t[e],d=e+1<h?t[e+1].el:i;0===C[l]?v(null,r,n,d,o,s,a,c,u):w&&(_<0||l!==k[_]?H(r,n,d,2):_--)}}},H=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void H(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,J);if(a===Or){i(s,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Ir)return void O(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),i(s,t,n),ur(()=>c.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,()=>{a(),o&&o()})};r?r(s,a,u):u()}else i(s,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&ar(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!on(e);let g;if(p&&(g=s&&s.onVnodeBeforeUnmount)&&Qr(g,t,e),6&l)$(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&rr(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,J,r):u&&(o!==Or||h>0&&64&h)?G(u,t,n,!1,!0):(o===Or&&384&h||!i&&16&l)&&G(c,t,n),r&&B(e)}(p&&(g=s&&s.onVnodeUnmounted)||f)&&ur(()=>{g&&Qr(g,t,e),f&&rr(e,null,t,"unmounted")},n)},B=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Or)return void V(n,r);if(t===Ir)return void C(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},V=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},$=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,W(a,e,t,n)),c&&ur(c,t),ur(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)W(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Y=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),bt(),t._vnode=e},J={p:v,um:W,m:H,r:B,mt:L,mc:x,pc:U,pbc:R,n:K,o:e};let Q,X;return t&&([Q,X]=t(J)),{render:Y,hydrate:Q,createApp:sr(Y,Q)}}function dr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fr(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=Kr(o[r]),t.el=e.el),n||fr(e,t))}}function pr(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const gr=e=>e.__isTeleport;const mr="components";function vr(e,t){return yr(mr,e,!0,t)||e}const _r=Symbol();function br(e){return Object(r["D"])(e)?yr(mr,e,!1)||e:e||_r}function yr(e,t,n=!0,i=!1){const o=It||ai;if(o){const n=o.type;if(e===mr){const e=Oi(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=wr(o[e]||n[e],t)||wr(o.appContext[e],t);return!s&&i?n:s}}function wr(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Or=Symbol(void 0),Cr=Symbol(void 0),kr=Symbol(void 0),Ir=Symbol(void 0),Er=[];let Tr=null;function Sr(e=!1){Er.push(Tr=e?null:[])}function xr(){Er.pop(),Tr=Er[Er.length-1]||null}let jr=1;function Rr(e){jr+=e}function Pr(e){return e.dynamicChildren=jr>0?Tr||r["a"]:null,xr(),jr>0&&Tr&&Tr.push(e),e}function Nr(e,t,n,r,i,o){return Pr(qr(e,t,n,r,i,o,!0))}function Ar(e,t,n,r,i){return Pr(zr(e,t,n,r,i,!0))}function Lr(e){return!!e&&!0===e.__v_isVNode}function Mr(e,t){return e.type===t.type&&e.key===t.key}const Dr="__vInternal",Fr=({key:e})=>null!=e?e:null,Ur=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["D"])(e)||De(e)||Object(r["p"])(e)?{i:It,r:e,k:t,f:!!n}:e:null;function qr(e,t=null,n=null,i=0,o=null,s=(e===Or?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fr(t),ref:t&&Ur(t),scopeId:Et,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(Yr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),jr>0&&!a&&Tr&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Tr.push(u),u}const zr=Hr;function Hr(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==_r||(e=kr),Lr(e)){const r=Br(e,t,!0);return n&&Yr(r,n),r}if(Ci(e)&&(e=e.__vccOpts),t){t=Wr(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(je(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:Dt(e)?128:gr(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return qr(e,t,n,i,o,a,s,!0)}function Wr(e){return e?je(e)||Dr in e?Object(r["h"])({},e):e:null}function Br(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?Jr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Fr(c),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(Ur(t)):[o,Ur(t)]:Ur(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Or?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Br(e.ssContent),ssFallback:e.ssFallback&&Br(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Vr(e=" ",t=0){return zr(Cr,null,e,t)}function $r(e="",t=!1){return t?(Sr(),Ar(kr,null,e)):zr(kr,null,e)}function Gr(e){return null==e||"boolean"===typeof e?zr(kr):Object(r["o"])(e)?zr(Or,null,e.slice()):"object"===typeof e?Kr(e):zr(Cr,null,String(e))}function Kr(e){return null===e.el||e.memo?e:Br(e)}function Yr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Yr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Dr in t?3===r&&It&&(1===It.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=It}}else Object(r["p"])(t)?(t={default:t,_ctx:It},n=32):(t=String(t),64&i?(n=16,t=[Vr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["I"])([t.class,i.class]));else if("style"===e)t.style=Object(r["J"])([t.style,i.style]);else if(Object(r["w"])(e)){const n=t[e],o=i[e];!o||n===o||Object(r["o"])(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=i[e])}return t}function Qr(e,t,n,r=null){Ke(e,t,7,[n,r])}function Xr(e,t,n,i){let o;const s=n&&n[i];if(Object(r["o"])(e)||Object(r["D"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}function Zr(e,t,n={},r,i){if(It.isCE)return zr("slot","default"===t?null:{name:t},r&&r());let o=e[t];o&&o._c&&(o._d=!1),Sr();const s=o&&ei(o(n)),a=Ar(Or,{key:n.key||"_"+t},s||(r?r():[]),s&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function ei(e){return e.some(e=>!Lr(e)||e.type!==kr&&!(e.type===Or&&!ei(e.children)))?e:null}const ti=e=>e?hi(e)?wi(e)||e.proxy:ti(e.parent):null,ni=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ti(e.parent),$root:e=>ti(e.root),$emit:e=>e.emit,$options:e=>Rn(e),$forceUpdate:e=>()=>dt(e.update),$nextTick:e=>lt.bind(e.proxy),$watch:e=>Bt.bind(e)}),ri={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=2,o[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];En&&(a[t]=0)}}const h=ni[t];let d,f;return h?("$attrs"===t&&S(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=u.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(ni,a)||Object(r["k"])(o.config.globalProperties,a)}};const ii=ir();let oi=0;function si(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||ii,a={uid:oi++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bn(i,o),emitsOptions:Ct(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ot.bind(null,a),e.ce&&e.ce(a),a}let ai=null;const ci=()=>ai||It,ui=e=>{ai=e,e.scope.on()},li=()=>{ai&&ai.scope.off(),ai=null};function hi(e){return 4&e.vnode.shapeFlag}let di,fi,pi=!1;function gi(e,t=!1){pi=t;const{props:n,children:r}=e.vnode,i=hi(e);qn(e,n,i,t),er(e,r);const o=i?mi(e,t):void 0;return pi=!1,o}function mi(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pe(new Proxy(e.ctx,ri));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?yi(e):null;ui(e),I();const o=Ge(i,e,0,[e.props,n]);if(T(),li(),Object(r["y"])(o)){if(o.then(li,li),t)return o.then(n=>{vi(e,n,t)}).catch(t=>{Ye(t,e,0)});e.asyncDep=o}else vi(e,o,t)}else _i(e,t)}function vi(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=Be(t)),_i(e,n)}function _i(e,t,n){const i=e.type;if(!e.render){if(!t&&di&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=di(t,c)}}e.render=i.render||r["d"],fi&&fi(e)}ui(e),I(),Tn(e),T(),li()}function bi(e){return new Proxy(e.attrs,{get(t,n){return S(e,"get","$attrs"),t[n]}})}function yi(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=bi(e))},slots:e.slots,emit:e.emit,expose:t}}function wi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Be(Pe(e.exposed)),{get(t,n){return n in t?t[n]:n in ni?ni[n](e):void 0}}))}function Oi(e){return Object(r["p"])(e)&&e.displayName||e.name}function Ci(e){return Object(r["p"])(e)&&"__vccOpts"in e}const ki=(e,t)=>$e(e,t,pi);function Ii(e,t,n){const i=arguments.length;return 2===i?Object(r["v"])(t)&&!Object(r["o"])(t)?Lr(t)?zr(e,null,[t]):zr(e,t):zr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Lr(n)&&(n=[n]),zr(e,t,n))}Symbol("");const Ei="3.2.28",Ti="http://www.w3.org/2000/svg",Si="undefined"!==typeof document?document:null,xi=Si&&Si.createElement("template"),ji={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Si.createElementNS(Ti,e):Si.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Si.createTextNode(e),createComment:e=>Si.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Si.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&o){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{xi.innerHTML=r?`<svg>${e}</svg>`:e;const i=xi.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ri(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pi(e,t,n){const i=e.style,o=Object(r["D"])(n);if(n&&!o){for(const e in n)Ai(i,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Ai(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Ni=/\s*!important$/;function Ai(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Ai(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Di(e,t);Ni.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Ni,""),"important"):e[i]=n}}const Li=["Webkit","Moz","ms"],Mi={};function Di(e,t){const n=Mi[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Mi[t]=i;i=Object(r["f"])(i);for(let r=0;r<Li.length;r++){const n=Li[r]+i;if(n in e)return Mi[t]=n}return t}const Fi="http://www.w3.org/1999/xlink";function Ui(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Fi,t.slice(6,t.length)):e.setAttributeNS(Fi,t,n);else{const i=Object(r["C"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function qi(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let zi=Date.now,Hi=!1;if("undefined"!==typeof window){zi()>document.createEvent("Event").timeStamp&&(zi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Hi=!!(e&&Number(e[1])<=53)}let Wi=0;const Bi=Promise.resolve(),Vi=()=>{Wi=0},$i=()=>Wi||(Bi.then(Vi),Wi=zi());function Gi(e,t,n,r){e.addEventListener(t,n,r)}function Ki(e,t,n,r){e.removeEventListener(t,n,r)}function Yi(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=Qi(t);if(r){const s=o[t]=Xi(r,i);Gi(e,n,s,a)}else s&&(Ki(e,n,s,a),o[t]=void 0)}}const Ji=/(?:Once|Passive|Capture)$/;function Qi(e){let t;if(Ji.test(e)){let n;t={};while(n=e.match(Ji))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Xi(e,t){const n=e=>{const r=e.timeStamp||zi();(Hi||r>=n.attached-1)&&Ke(Zi(e,n.value),t,5,[e])};return n.value=e,n.attached=$i(),n}function Zi(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const eo=/^on[a-z]/,to=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?Ri(e,i,o):"style"===t?Pi(e,n,i):Object(r["w"])(t)?Object(r["u"])(t)||Yi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):no(e,t,i,o))?qi(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Ui(e,t,i,o))};function no(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&eo.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!eo.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const ro="transition",io="animation",oo=(e,{slots:t})=>Ii(Jt,uo(e),t);oo.displayName="Transition";const so={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ao=(oo.props=Object(r["h"])({},Jt.props,so),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),co=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function uo(e){const t={};for(const r in e)r in so||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,g=lo(o),m=g&&g[0],v=g&&g[1],{onBeforeEnter:_,onEnter:b,onEnterCancelled:y,onLeave:w,onLeaveCancelled:O,onBeforeAppear:C=_,onAppear:k=b,onAppearCancelled:I=y}=t,E=(e,t,n)=>{po(e,t?h:c),po(e,t?l:a),n&&n()},T=(e,t)=>{po(e,p),po(e,f),t&&t()},S=e=>(t,n)=>{const r=e?k:b,o=()=>E(t,e,n);ao(r,[t,o]),go(()=>{po(t,e?u:s),fo(t,e?h:c),co(r)||vo(t,i,m,o)})};return Object(r["h"])(t,{onBeforeEnter(e){ao(_,[e]),fo(e,s),fo(e,a)},onBeforeAppear(e){ao(C,[e]),fo(e,u),fo(e,l)},onEnter:S(!1),onAppear:S(!0),onLeave(e,t){const n=()=>T(e,t);fo(e,d),wo(),fo(e,f),go(()=>{po(e,d),fo(e,p),co(w)||vo(e,i,v,n)}),ao(w,[e,n])},onEnterCancelled(e){E(e,!1),ao(y,[e])},onAppearCancelled(e){E(e,!0),ao(I,[e])},onLeaveCancelled(e){T(e),ao(O,[e])}})}function lo(e){if(null==e)return null;if(Object(r["v"])(e))return[ho(e.enter),ho(e.leave)];{const t=ho(e);return[t,t]}}function ho(e){const t=Object(r["N"])(e);return t}function fo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function po(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function go(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let mo=0;function vo(e,t,n,r){const i=e._endId=++mo,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=_o(e,t);if(!s)return r();const u=s+"end";let l=0;const h=()=>{e.removeEventListener(u,d),o()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function _o(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(ro+"Delay"),o=r(ro+"Duration"),s=bo(i,o),a=r(io+"Delay"),c=r(io+"Duration"),u=bo(a,c);let l=null,h=0,d=0;t===ro?s>0&&(l=ro,h=s,d=o.length):t===io?u>0&&(l=io,h=u,d=c.length):(h=Math.max(s,u),l=h>0?s>u?ro:io:null,d=l?l===ro?o.length:c.length:0);const f=l===ro&&/\b(transform|all)(,|$)/.test(n[ro+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function bo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>yo(t)+yo(e[n])))}function yo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function wo(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Oo=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function Co(e){e.target.composing=!0}function ko(e){const t=e.target;t.composing&&(t.composing=!1,Io(t,"input"))}function Io(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Eo={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=Oo(o);const s=i||o.props&&"number"===o.props.type;Gi(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=Object(r["N"])(i)),e._assign(i)}),n&&Gi(e,"change",()=>{e.value=e.value.trim()}),t||(Gi(e,"compositionstart",Co),Gi(e,"compositionend",ko),Gi(e,"change",ko))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=Oo(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},To={deep:!0,created(e,t,n){e._assign=Oo(n),Gi(e,"change",()=>{const t=e._modelValue,n=Po(e),i=e.checked,o=e._assign;if(Object(r["o"])(t)){const e=Object(r["G"])(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if(Object(r["B"])(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(No(e,i))})},mounted:So,beforeUpdate(e,t,n){e._assign=Oo(n),So(e,t,n)}};function So(e,{value:t,oldValue:n},i){e._modelValue=t,Object(r["o"])(t)?e.checked=Object(r["G"])(t,i.props.value)>-1:Object(r["B"])(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=Object(r["F"])(t,No(e,!0)))}const xo={created(e,{value:t},n){e.checked=Object(r["F"])(t,n.props.value),e._assign=Oo(n),Gi(e,"change",()=>{e._assign(Po(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=Oo(i),t!==n&&(e.checked=Object(r["F"])(t,i.props.value))}},jo={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const o=Object(r["B"])(t);Gi(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(r["N"])(Po(e)):Po(e));e._assign(e.multiple?o?new Set(t):t:t[0])}),e._assign=Oo(i)},mounted(e,{value:t}){Ro(e,t)},beforeUpdate(e,t,n){e._assign=Oo(n)},updated(e,{value:t}){Ro(e,t)}};function Ro(e,t){const n=e.multiple;if(!n||Object(r["o"])(t)||Object(r["B"])(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],s=Po(o);if(n)Object(r["o"])(t)?o.selected=Object(r["G"])(t,s)>-1:o.selected=t.has(s);else if(Object(r["F"])(Po(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function Po(e){return"_value"in e?e._value:e.value}function No(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ao={created(e,t,n){Lo(e,t,n,null,"created")},mounted(e,t,n){Lo(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Lo(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Lo(e,t,n,r,"updated")}};function Lo(e,t,n,r,i){let o;switch(e.tagName){case"SELECT":o=jo;break;case"TEXTAREA":o=Eo;break;default:switch(n.props&&n.props.type){case"checkbox":o=To;break;case"radio":o=xo;break;default:o=Eo}}const s=o[i];s&&s(e,t,n,r)}const Mo=["ctrl","shift","alt","meta"],Do={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Mo.some(n=>e[n+"Key"]&&!t.includes(n))},Fo=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Do[t[e]];if(r&&r(n,t))return}return e(n,...r)},Uo={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qo=(e,t)=>n=>{if(!("key"in n))return;const i=Object(r["l"])(n.key);return t.some(e=>e===i||Uo[e]===i)?e(n):void 0};const zo=Object(r["h"])({patchProp:to},ji);let Ho;function Wo(){return Ho||(Ho=lr(zo))}const Bo=(...e)=>{const t=Wo().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Vo(e);if(!i)return;const o=t._component;Object(r["p"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Vo(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},_=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},y=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}y="undefined"!=typeof document?document.domain&&r?_(r):b():_(r);var e=s.length;while(e--)delete y[f][s[e]];return y()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=y(),void 0===t?n:o.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),g=n("3f8c"),m=n("ae93"),v=s.PROPER,_=s.CONFIGURABLE,b=m.IteratorPrototype,y=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",C="values",k="entries",I=function(){return this};e.exports=function(e,t,n,s,p,m,E){c(n,t,s);var T,S,x,j=function(e){if(e===p&&L)return L;if(!y&&e in N)return N[e];switch(e){case O:return function(){return new n(this,e)};case C:return function(){return new n(this,e)};case k:return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",P=!1,N=e.prototype,A=N[w]||N["@@iterator"]||p&&N[p],L=!y&&A||j(p),M="Array"==t&&N.entries||A;if(M&&(T=u(M.call(new e)),T!==Object.prototype&&T.next&&(o||u(T)===b||(l?l(T,b):a(T[w])||f(T,w,I)),h(T,R,!0,!0),o&&(g[R]=I))),v&&p==C&&A&&A.name!==C&&(!o&&_?d(N,"name",C):(P=!0,L=function(){return i(A,this)})),p)if(S={values:j(C),keys:m?L:j(O),entries:j(k)},E)for(x in S)(y||P||!(x in N))&&f(N,x,S[x]);else r({target:t,proto:!0,forced:y||P},S);return o&&!E||N[w]===L||f(N,w,L,{name:p}),g[t]=L,S}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"8a79":function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("06cf").f,s=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),h=n("c430"),d=i("".endsWith),f=i("".slice),p=Math.min,g=l("endsWith"),m=!h&&!g&&!!function(){var e=o(String.prototype,"endsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!m&&!g},{endsWith:function(e){var t=a(u(this));c(e);var n=arguments.length>1?arguments[1]:void 0,r=t.length,i=void 0===n?r:p(s(n),r),o=a(e);return d?d(t,o,i):f(t,i-o.length,i)===o}})},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),v=i("".indexOf),_=i("".replace),b=i("".slice),y=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=a.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],C=y||O||w||h||d;C&&(g=function(e){var t,n,i,a,c,h,d,C=this,k=l(C),I=o(e),E=k.raw;if(E)return E.lastIndex=C.lastIndex,t=r(g,E,I),C.lastIndex=E.lastIndex,t;var T=k.groups,S=w&&C.sticky,x=r(s,C),j=C.source,R=0,P=I;if(S&&(x=_(x,"y",""),-1===v(x,"g")&&(x+="g"),P=b(I,C.lastIndex),C.lastIndex>0&&(!C.multiline||C.multiline&&"\n"!==m(I,C.lastIndex-1))&&(j="(?: "+j+")",P=" "+P,R++),n=new RegExp("^(?:"+j+")",x)),O&&(n=new RegExp("^"+j+"$(?!\\s)",x)),y&&(i=C.lastIndex),a=r(p,S?n:C,P),S?a?(a.input=b(a.input,R),a[0]=b(a[0],R),a.index=C.lastIndex,C.lastIndex+=a[0].length):C.lastIndex=0:y&&a&&(C.lastIndex=C.global?a.index+a[0].length:i),O&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&T)for(a.groups=h=u(null),c=0;c<T.length;c++)d=T[c],h[d[0]]=a[d[1]];return a}),e.exports=g},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},9861:function(e,t,n){"use strict";n("e260");var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c65b"),a=n("e330"),c=n("0d3b"),u=n("6eeb"),l=n("e2cc"),h=n("d44e"),d=n("9ed3"),f=n("69f3"),p=n("19aa"),g=n("1626"),m=n("1a2d"),v=n("0366"),_=n("f5df"),b=n("825a"),y=n("861d"),w=n("577e"),O=n("7c73"),C=n("5c6c"),k=n("9a1f"),I=n("35a1"),E=n("d6d6"),T=n("b622"),S=n("addb"),x=T("iterator"),j="URLSearchParams",R=j+"Iterator",P=f.set,N=f.getterFor(j),A=f.getterFor(R),L=o("fetch"),M=o("Request"),D=o("Headers"),F=M&&M.prototype,U=D&&D.prototype,q=i.RegExp,z=i.TypeError,H=i.decodeURIComponent,W=i.encodeURIComponent,B=a("".charAt),V=a([].join),$=a([].push),G=a("".replace),K=a([].shift),Y=a([].splice),J=a("".split),Q=a("".slice),X=/\+/g,Z=Array(4),ee=function(e){return Z[e-1]||(Z[e-1]=q("((?:%[\\da-f]{2}){"+e+"})","gi"))},te=function(e){try{return H(e)}catch(t){return e}},ne=function(e){var t=G(e,X," "),n=4;try{return H(t)}catch(r){while(n)t=G(t,ee(n--),te);return t}},re=/[!'()~]|%20/g,ie={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},oe=function(e){return ie[e]},se=function(e){return G(W(e),re,oe)},ae=d((function(e,t){P(this,{type:R,iterator:k(N(e).entries),kind:t})}),"Iterator",(function(){var e=A(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),!0),ce=function(e){this.entries=[],this.url=null,void 0!==e&&(y(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===B(e,0)?Q(e,1):e:w(e)))};ce.prototype={type:j,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,n,r,i,o,a,c,u=I(e);if(u){t=k(e,u),n=t.next;while(!(r=s(n,t)).done){if(i=k(b(r.value)),o=i.next,(a=s(o,i)).done||(c=s(o,i)).done||!s(o,i).done)throw z("Expected sequence with length 2");$(this.entries,{key:w(a.value),value:w(c.value)})}}else for(var l in e)m(e,l)&&$(this.entries,{key:l,value:w(e[l])})},parseQuery:function(e){if(e){var t,n,r=J(e,"&"),i=0;while(i<r.length)t=r[i++],t.length&&(n=J(t,"="),$(this.entries,{key:ne(K(n)),value:ne(V(n,"="))}))}},serialize:function(){var e,t=this.entries,n=[],r=0;while(r<t.length)e=t[r++],$(n,se(e.key)+"="+se(e.value));return V(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var ue=function(){p(this,le);var e=arguments.length>0?arguments[0]:void 0;P(this,new ce(e))},le=ue.prototype;if(l(le,{append:function(e,t){E(arguments.length,2);var n=N(this);$(n.entries,{key:w(e),value:w(t)}),n.updateURL()},delete:function(e){E(arguments.length,1);var t=N(this),n=t.entries,r=w(e),i=0;while(i<n.length)n[i].key===r?Y(n,i,1):i++;t.updateURL()},get:function(e){E(arguments.length,1);for(var t=N(this).entries,n=w(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){E(arguments.length,1);for(var t=N(this).entries,n=w(e),r=[],i=0;i<t.length;i++)t[i].key===n&&$(r,t[i].value);return r},has:function(e){E(arguments.length,1);var t=N(this).entries,n=w(e),r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){E(arguments.length,1);for(var n,r=N(this),i=r.entries,o=!1,s=w(e),a=w(t),c=0;c<i.length;c++)n=i[c],n.key===s&&(o?Y(i,c--,1):(o=!0,n.value=a));o||$(i,{key:s,value:a}),r.updateURL()},sort:function(){var e=N(this);S(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,n=N(this).entries,r=v(e,arguments.length>1?arguments[1]:void 0),i=0;while(i<n.length)t=n[i++],r(t.value,t.key,this)},keys:function(){return new ae(this,"keys")},values:function(){return new ae(this,"values")},entries:function(){return new ae(this,"entries")}},{enumerable:!0}),u(le,x,le.entries,{name:"entries"}),u(le,"toString",(function(){return N(this).serialize()}),{enumerable:!0}),h(ue,j),r({global:!0,forced:!c},{URLSearchParams:ue}),!c&&g(D)){var he=a(U.has),de=a(U.set),fe=function(e){if(y(e)){var t,n=e.body;if(_(n)===j)return t=e.headers?new D(e.headers):new D,he(t,"content-type")||de(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),O(e,{body:C(0,w(n)),headers:C(0,t)})}return e};if(g(L)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return L(e,arguments.length>1?fe(arguments[1]):{})}}),g(M)){var pe=function(e){return p(this,F),new M(e,arguments.length>1?fe(arguments[1]):{})};F.constructor=pe,pe.prototype=F,r({global:!0,forced:!0},{Request:pe})}}e.exports={URLSearchParams:ue,getState:N}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d039"),s=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),g=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",_=i.TypeError,b=p>=51||!o((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),y=d("concat"),w=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},O=!b||!y;r({target:"Array",proto:!0,forced:O},{concat:function(e){var t,n,r,i,o,s=c(this),a=h(s,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],w(o)){if(i=u(o),d+i>m)throw _(v);for(n=0;n<i;n++,d++)n in o&&l(a,d,o[n])}else{if(d>=m)throw _(v);l(a,d++,o)}return a.length=d,a}})},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},"9bdd":function(e,t,n){var r=n("825a"),i=n("2a62");e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(s){i(e,"throw",s)}}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp,s=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=s||r((function(){return!o("a","y").sticky})),c=s||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return Q})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return o})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return G})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return z})),n.d(t,"w",(function(){return S})),n.d(t,"x",(function(){return $})),n.d(t,"y",(function(){return H})),n.d(t,"z",(function(){return K})),n.d(t,"A",(function(){return v})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return U})),n.d(t,"E",(function(){return q})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return R})),n.d(t,"L",(function(){return w})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return oe})),n.d(t,"O",(function(){return V}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=U(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return U(e)||z(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),v=r(g);function _(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=A(e),r=A(t),n||r)return!(!n||!r)&&_(e,t);if(n=z(e),r=z(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>b(e,t))}const w=e=>null==e?"":A(e)||z(e)&&(e.toString===W||!F(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()]}:!z(t)||A(t)||$(t)?t:String(t),C={},k=[],I=()=>{},E=()=>!1,T=/^on[^a-z]/,S=e=>T.test(e),x=e=>e.startsWith("onUpdate:"),j=Object.assign,R=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},P=Object.prototype.hasOwnProperty,N=(e,t)=>P.call(e,t),A=Array.isArray,L=e=>"[object Map]"===B(e),M=e=>"[object Set]"===B(e),D=e=>e instanceof Date,F=e=>"function"===typeof e,U=e=>"string"===typeof e,q=e=>"symbol"===typeof e,z=e=>null!==e&&"object"===typeof e,H=e=>z(e)&&F(e.then)&&F(e.catch),W=Object.prototype.toString,B=e=>W.call(e),V=e=>B(e).slice(8,-1),$=e=>"[object Object]"===B(e),G=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Y=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,Q=Y(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Z=Y(e=>e.replace(X,"-$1").toLowerCase()),ee=Y(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=Y(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let se;const ae=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("44ad"),s=n("fc6a"),a=n("a640"),c=i([].join),u=o!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(e){return c(s(this),void 0===e?",":e)}})},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("23cb"),s=n("5926"),a=n("07fa"),c=n("7b0b"),u=n("65f0"),l=n("8418"),h=n("1dde"),d=h("splice"),f=i.TypeError,p=Math.max,g=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,i,h,d,_,b=c(this),y=a(b),w=o(e,y),O=arguments.length;if(0===O?n=r=0:1===O?(n=0,r=y-w):(n=O-2,r=g(p(s(t),0),y-w)),y+n-r>m)throw f(v);for(i=u(b,r),h=0;h<r;h++)d=w+h,d in b&&l(i,h,b[d]);if(i.length=r,n<r){for(h=w;h<y-r;h++)d=h+r,_=h+n,d in b?b[_]=b[d]:delete b[_];for(h=y;h>y-r+n;h--)delete b[h-1]}else if(n>r)for(h=y-r;h>w;h--)d=h+r-1,_=h+n-1,d in b?b[_]=b[d]:delete b[_];for(h=0;h<n;h++)b[h+w]=arguments[h+2];return b.length=y-r+n,i}})},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),g=n("1626"),m=n("861d"),v=n("3a9b"),_=n("d9b5"),b=n("825a"),y=n("7b0b"),w=n("fc6a"),O=n("a04b"),C=n("577e"),k=n("5c6c"),I=n("7c73"),E=n("df75"),T=n("241c"),S=n("057f"),x=n("7418"),j=n("06cf"),R=n("9bf2"),P=n("37e8"),N=n("d1e7"),A=n("f36a"),L=n("6eeb"),M=n("5692"),D=n("f772"),F=n("d012"),U=n("90e3"),q=n("b622"),z=n("e538"),H=n("746f"),W=n("d44e"),B=n("69f3"),V=n("b727").forEach,$=D("hidden"),G="Symbol",K="prototype",Y=q("toPrimitive"),J=B.set,Q=B.getterFor(G),X=Object[K],Z=i.Symbol,ee=Z&&Z[K],te=i.TypeError,ne=i.QObject,re=o("JSON","stringify"),ie=j.f,oe=R.f,se=S.f,ae=N.f,ce=c([].push),ue=M("symbols"),le=M("op-symbols"),he=M("string-to-symbol-registry"),de=M("symbol-to-string-registry"),fe=M("wks"),pe=!ne||!ne[K]||!ne[K].findChild,ge=l&&d((function(){return 7!=I(oe({},"a",{get:function(){return oe(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=ie(X,t);r&&delete X[t],oe(e,t,n),r&&e!==X&&oe(X,t,r)}:oe,me=function(e,t){var n=ue[e]=I(ee);return J(n,{type:G,tag:e,description:t}),l||(n.description=t),n},ve=function(e,t,n){e===X&&ve(le,t,n),b(e);var r=O(t);return b(n),f(ue,r)?(n.enumerable?(f(e,$)&&e[$][r]&&(e[$][r]=!1),n=I(n,{enumerable:k(0,!1)})):(f(e,$)||oe(e,$,k(1,{})),e[$][r]=!0),ge(e,r,n)):oe(e,r,n)},_e=function(e,t){b(e);var n=w(t),r=E(n).concat(Ce(n));return V(r,(function(t){l&&!a(ye,n,t)||ve(e,t,n[t])})),e},be=function(e,t){return void 0===t?I(e):_e(I(e),t)},ye=function(e){var t=O(e),n=a(ae,this,t);return!(this===X&&f(ue,t)&&!f(le,t))&&(!(n||!f(this,t)||!f(ue,t)||f(this,$)&&this[$][t])||n)},we=function(e,t){var n=w(e),r=O(t);if(n!==X||!f(ue,r)||f(le,r)){var i=ie(n,r);return!i||!f(ue,r)||f(n,$)&&n[$][r]||(i.enumerable=!0),i}},Oe=function(e){var t=se(w(e)),n=[];return V(t,(function(e){f(ue,e)||f(F,e)||ce(n,e)})),n},Ce=function(e){var t=e===X,n=se(t?le:w(e)),r=[];return V(n,(function(e){!f(ue,e)||t&&!f(X,e)||ce(r,ue[e])})),r};if(h||(Z=function(){if(v(ee,this))throw te("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?C(arguments[0]):void 0,t=U(e),n=function(e){this===X&&a(n,le,e),f(this,$)&&f(this[$],t)&&(this[$][t]=!1),ge(this,t,k(1,e))};return l&&pe&&ge(X,t,{configurable:!0,set:n}),me(t,e)},ee=Z[K],L(ee,"toString",(function(){return Q(this).tag})),L(Z,"withoutSetter",(function(e){return me(U(e),e)})),N.f=ye,R.f=ve,P.f=_e,j.f=we,T.f=S.f=Oe,x.f=Ce,z.f=function(e){return me(q(e),e)},l&&(oe(ee,"description",{configurable:!0,get:function(){return Q(this).description}}),u||L(X,"propertyIsEnumerable",ye,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:Z}),V(E(fe),(function(e){H(e)})),r({target:G,stat:!0,forced:!h},{for:function(e){var t=C(e);if(f(he,t))return he[t];var n=Z(t);return he[t]=n,de[n]=t,n},keyFor:function(e){if(!_(e))throw te(e+" is not a symbol");if(f(de,e))return de[e]},useSetter:function(){pe=!0},useSimple:function(){pe=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:be,defineProperty:ve,defineProperties:_e,getOwnPropertyDescriptor:we}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:Oe,getOwnPropertySymbols:Ce}),r({target:"Object",stat:!0,forced:d((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(y(e))}}),re){var ke=!h||d((function(){var e=Z();return"[null]"!=re([e])||"{}"!=re({a:e})||"{}"!=re(Object(e))}));r({target:"JSON",stat:!0,forced:ke},{stringify:function(e,t,n){var r=A(arguments),i=t;if((m(t)||void 0!==e)&&!_(e))return p(t)||(t=function(e,t){if(g(i)&&(t=a(i,this,e,t)),!_(t))return t}),r[1]=t,s(re,null,r)}})}if(!ee[Y]){var Ie=ee.valueOf;L(ee,Y,(function(e){return a(Ie,this)}))}W(Z,G),F[$]=!0},a630:function(e,t,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),s=!o((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:s},{from:i})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},ab13:function(e,t,n){var r=n("b622"),i=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(r){}}return!1}},ab36:function(e,t,n){var r=n("861d"),i=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},addb:function(e,t,n){var r=n("4dae"),i=Math.floor,o=function(e,t){var n=e.length,c=i(n/2);return n<8?s(e,t):a(e,o(r(e,0,c),t),o(r(e,c),t),t)},s=function(e,t){var n,r,i=e.length,o=1;while(o<i){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,o=n.length,s=0,a=0;while(s<i||a<o)e[s+a]=s<i&&a<o?r(t[s],n[a])<=0?t[s++]:n[a++]:s<i?t[s++]:n[a++];return e};e.exports=o},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b05d:function(e,t,n){"use strict";var r=n("5530");n("a4d3"),n("b64b");n("d3b7"),n("159b"),n("07ac"),n("b0c0"),n("4de4"),n("caad"),n("2532");var i=n("7a23"),o=n("ade3");n("ac1f");function s(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0})}var a,c=Object(i["y"])(!1);function u(e,t){var n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function l(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}var h="ontouchstart"in window||window.navigator.maxTouchPoints>0;function d(e){a={is:Object(r["a"])({},e)},delete e.mac,delete e.desktop;var t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,Object(o["a"])({mobile:!0,ios:!0,platform:t},t,!0))}function f(e){var t=e.toLowerCase(),n=l(t),r=u(t,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);var o=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===o||t.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==o)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),!0===h&&!0===i.mac&&(!0===i.desktop&&!0===i.safari||!0===i.nativeMobile&&!0!==i.android&&!0!==i.ios&&!0!==i.ipad)&&d(i)),i}var p,g=navigator.userAgent||navigator.vendor||window.opera,m={has:{touch:!1,webStorage:!1},within:{iframe:!1}},v={userAgent:g,is:f(g),has:{touch:h},within:{iframe:window.self!==window.top}},_={install:function(e){var t=e.$q;!0===c.value?(e.onSSRHydrated.push((function(){c.value=!1,Object.assign(t.platform,v),a=void 0})),t.platform=Object(i["x"])(this)):t.platform=this}};s(v.has,"webStorage",(function(){if(void 0!==p)return p;try{if(window.localStorage)return p=!0,!0}catch(e){}return p=!1,!1})),!0===v.is.ios&&window.navigator.vendor.toLowerCase().indexOf("apple"),!0===c.value?Object.assign(_,v,a,m):Object.assign(_,v);var b=_,y=function(e,t){var n=Object(i["x"])(e),r=function(e){s(t,e,(function(){return n[e]}),(function(t){n[e]=t}))};for(var o in e)r(o);return t},w=(n("99af"),{hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0});try{var O=Object.defineProperty({},"passive",{get:function(){Object.assign(w,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,O),window.removeEventListener("qtest",null,O)}catch(ue){}function C(){}var k=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2?arguments[2]:void 0;function i(){var i=this,o=arguments,s=function(){t=void 0,!0!==r&&e.apply(i,o)};clearTimeout(t),!0===r&&void 0===t&&e.apply(this,o),t=setTimeout(s,n)}return i.cancel=function(){clearTimeout(t)},i},I=["sm","md","lg","xl"],E=w.passive,T=y({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:C,setDebounce:C,install:function(e){var t=this,n=e.$q,r=e.onSSRHydrated;if(n.screen=this,!0!==this.__installed){var i=void 0!==n.config.screen&&!0===n.config.screen.bodyClasses;this.__update=function(e){var n=window.innerWidth,r=window.innerHeight;if(r!==t.height&&(t.height=r),n!==t.width)t.width=n;else if(!0!==e)return;var o=t.sizes;t.gt.xs=n>=o.sm,t.gt.sm=n>=o.md,t.gt.md=n>=o.lg,t.gt.lg=n>=o.xl,t.lt.sm=n<o.sm,t.lt.md=n<o.md,t.lt.lg=n<o.lg,t.lt.xl=n<o.xl,t.xs=t.lt.sm,t.sm=!0===t.gt.xs&&!0===t.lt.md,t.md=!0===t.gt.sm&&!0===t.lt.lg,t.lg=!0===t.gt.md&&!0===t.lt.xl,t.xl=t.gt.lg,o=(!0===t.xs?"xs":!0===t.sm&&"sm")||!0===t.md&&"md"||!0===t.lg&&"lg"||"xl",o!==t.name&&(!0===i&&(document.body.classList.remove("screen--".concat(t.name)),document.body.classList.add("screen--".concat(o))),t.name=o)};var o,s={},a=16;this.setSizes=function(e){I.forEach((function(t){void 0!==e[t]&&(s[t]=e[t])}))},this.setDebounce=function(e){a=e};var u=function(){var e=getComputedStyle(document.body),n=void 0!==window.visualViewport?window.visualViewport:window;e.getPropertyValue("--q-size-sm")&&I.forEach((function(n){t.sizes[n]=parseInt(e.getPropertyValue("--q-size-".concat(n)),10)})),t.setSizes=function(e){I.forEach((function(n){e[n]&&(t.sizes[n]=e[n])})),t.__update(!0)},t.setDebounce=function(e){void 0!==o&&n.removeEventListener("resize",o,E),o=e>0?k(t.__update,e):t.__update,n.addEventListener("resize",o,E)},t.setDebounce(a),Object.keys(s).length>0?(t.setSizes(s),s=void 0):t.__update(),!0===i&&"xs"===t.name&&document.body.classList.add("screen--xs")};!0===c.value?r.push(u):u()}else void 0!==n.config.screen&&(!1===n.config.screen.bodyClasses?document.body.classList.remove("screen--".concat(this.name)):this.__update(!0))}}),S=(n("5319"),y({isActive:!1,mode:!1},{__media:void 0,set:function(e){S.mode=e,"auto"===e?(void 0===S.__media&&(S.__media=window.matchMedia("(prefers-color-scheme: dark)"),S.__updateMedia=function(){S.set("auto")},S.__media.addListener(S.__updateMedia)),e=S.__media.matches):void 0!==S.__media&&(S.__media.removeListener(S.__updateMedia),S.__media=void 0),S.isActive=!0===e,document.body.classList.remove("body--".concat(!0===e?"light":"dark")),document.body.classList.add("body--".concat(!0===e?"dark":"light"))},toggle:function(){S.set(!1===S.isActive)},install:function(e){var t=this,n=e.$q,r=e.onSSRHydrated,i=(e.ssrContext,n.config.dark);if(n.dark=this,!0!==this.__installed||void 0!==i){this.isActive=!0===i;var o=void 0!==i&&i;if(!0===c.value){var s=function(e){t.__fromSSR=e},a=this.set;this.set=s,s(o),r.push((function(){t.set=a,t.set(t.__fromSSR)}))}else this.set(o)}}})),x=S,j=n("6b75");function R(e){if(Array.isArray(e))return Object(j["a"])(e)}n("e01a"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function P(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var N=n("06c5");n("d9e2");function A(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function L(e){return R(e)||P(e)||Object(N["a"])(e)||A()}n("2ca0"),n("8a79"),n("d81d"),n("a434");var M=function(){return!0};function D(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function F(e){return!0===e.startsWith("#")&&(e=e.substr(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substr(0,e.length-1)),"#"+e}function U(e){if(!1===e.backButtonExit)return function(){return!1};if("*"===e.backButtonExit)return M;var t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push.apply(t,L(e.backButtonExit.filter(D).map(F))),function(){return t.includes(window.location.hash)}}var q={__history:[],add:C,remove:C,install:function(e){var t=this,n=e.$q;if(!0!==this.__installed){var r=v.is,i=r.cordova,o=r.capacitor;if(!0===i||!0===o){var s=n.config[!0===i?"cordova":"capacitor"];if((void 0===s||!1!==s.backButton)&&(!0!==o||void 0!==window.Capacitor&&void 0!==window.Capacitor.Plugins.App)){this.add=function(e){void 0===e.condition&&(e.condition=M),t.__history.push(e)},this.remove=function(e){var n=t.__history.indexOf(e);n>=0&&t.__history.splice(n,1)};var a=U(Object.assign({backButtonExit:!0},s)),c=function(){if(t.__history.length){var e=t.__history[t.__history.length-1];!0===e.condition()&&(t.__history.pop(),e.handler())}else!0===a()?navigator.app.exitApp():window.history.back()};!0===i?document.addEventListener("deviceready",(function(){document.addEventListener("backbutton",c,!1)})):window.Capacitor.Plugins.App.addListener("backButton",c)}}}}},z=(n("a15b"),n("1276"),n("fb6a"),{isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:function(e){return 1===e?"1 record selected.":(0===e?"No":e)+" records selected."},recordsPerPage:"Records per page:",allRows:"All",pagination:function(e,t,n){return e+"-"+t+" of "+n},columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}});function H(){var e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map((function(e,t){return 0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()})).join("-")}var W=y({__langPack:{}},{getLocale:H,set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=Object(r["a"])(Object(r["a"])({},e),{},{rtl:!0===e.rtl,getLocale:H}),n=document.documentElement;n.setAttribute("dir",!0===t.rtl?"rtl":"ltr"),n.setAttribute("lang",t.isoName),t.set=W.set,Object.assign(W.__langPack,t),W.props=t,W.isoName=t.isoName,W.nativeName=t.nativeName},install:function(e){var t=e.$q,n=e.lang;e.ssrContext;t.lang=W.__langPack,!0===this.__installed?void 0!==n&&this.set(n):this.set(n||z)}}),B=W;function V(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document.body;if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty("--q-".concat(e),t)}function $(e){!0===e.isComposing}function G(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function K(e,t){var n=e.is,r=e.has,i=e.within,o=[!0===n.desktop?"desktop":"mobile","".concat(!1===r.touch?"no-":"","touch")];if(!0===n.mobile){var s=G(n);void 0!==s&&o.push("platform-"+s)}if(!0===n.nativeMobile){var a=n.nativeMobileWrapper;o.push(a),o.push("native-mobile"),!0!==n.ios||void 0!==t[a]&&!1===t[a].iosStatusBarPadding||o.push("q-ios-padding")}else!0===n.electron?o.push("electron"):!0===n.bex&&o.push("bex");return!0===i.iframe&&o.push("within-iframe"),o}function Y(){var e=document.body.className,t=e;void 0!==a&&(t=t.replace("desktop","platform-ios mobile")),!0===v.has.touch&&(t=t.replace("no-touch","touch")),!0===v.within.iframe&&(t+=" within-iframe"),e!==t&&(document.body.className=t)}function J(e){for(var t in e)V(t,e[t])}var Q={install:function(e){if(!0!==this.__installed){if(!0===c.value)Y();else{var t=e.$q;void 0!==t.config.brand&&J(t.config.brand);var n=K(v,t.config);document.body.classList.add.apply(document.body.classList,n)}!0===v.is.ios&&document.body.addEventListener("touchstart",C),window.addEventListener("keydown",$,!0)}}},X={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Z=y({iconMapFn:null,__icons:{}},{set:function(e,t){var n=Object(r["a"])(Object(r["a"])({},e),{},{rtl:!0===e.rtl});n.set=Z.set,Object.assign(Z.__icons,n)},install:function(e){var t=this,n=e.$q,r=e.iconSet;e.ssrContext;void 0!==n.config.iconMapFn&&(this.iconMapFn=n.config.iconMapFn),n.iconSet=this.__icons,s(n,"iconMapFn",(function(){return t.iconMapFn}),(function(e){t.iconMapFn=e})),!0===this.__installed?void 0!==r&&this.set(r):this.set(r||X)}}),ee=Z,te="_q_",ne={},re=!1;function ie(){re=!0}var oe=[b,Q,x,T,q,B,ee];function se(e,t){t.forEach((function(t){t.install(e),t.__installed=!0}))}function ae(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(te,n.$q),se(n,oe),void 0!==t.components&&Object.values(t.components).forEach((function(t){Object(t)===t&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((function(t){Object(t)===t&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&se(n,Object.values(t.plugins).filter((function(e){return"function"===typeof e.install&&!1===oe.includes(e)}))),!0===c.value&&(n.$q.onSSRHydrated=function(){n.onSSRHydrated.forEach((function(e){e()})),n.$q.onSSRHydrated=function(){}})}var ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={version:"2.4.13"};!1===re?(void 0!==t.config&&Object.assign(ne,t.config),n.config=Object(r["a"])({},ne),ie()):n.config=t.config||{},ae(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})};t["a"]={version:"2.4.13",install:ce,lang:B,iconSet:ee}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,o,s,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),v=n("a4b4"),_=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,y=h.document,w=h.process,O=h.Promise,C=f(h,"queueMicrotask"),k=C&&C.value;k||(r=function(){var e,t;_&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},g||_||v||!b||!y?!m&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=d(u.then,u),s=function(){l(r)}):_?s=function(){w.nextTick(r)}:(p=d(p,h),s=function(){p(r)}):(a=!0,c=y.createTextNode(""),new b(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=k||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,g,m,v){for(var _,b,y=s(p),w=o(y),O=r(g,m),C=a(w),k=0,I=v||c,E=t?I(p,C):n||d?I(p,0):void 0;C>k;k++)if((f||k in w)&&(_=w[k],b=O(_,k,y),e))if(t)E[k]=b;else if(b)switch(e){case 3:return!0;case 5:return _;case 6:return k;case 2:u(E,_)}else switch(e){case 4:return!1;case 7:u(E,_)}return h?-1:i||l?l:E}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b980:function(e,t,n){var r=n("d039"),i=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c770:function(e,t,n){var r=n("e330"),i=r("".replace),o=function(e){return String(Error(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(o);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=i(e,s,"");return e}},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},caad:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d6d6:function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e,t){if(e<t)throw i("Not enough arguments");return e}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),o=n("9263"),s=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!s((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var g=r(/./[d]),m=t(d,""[e],(function(e,t,n,i,s){var a=r(e),c=t.exec;return c===o||c===l.exec?f&&!s?{done:!0,value:g(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,m[0]),i(l,d,m[1])}h&&c(l[d],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),s=o("map");r({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},d9e2:function(e,t,n){var r=n("23e7"),i=n("da84"),o=n("2ba4"),s=n("e5cb"),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=s(e,t,u),r({global:!0,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=s(a+"."+e,t,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(e){return function(t){return o(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),l("URIError",(function(e){return function(t){return o(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=s.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(o,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,d=n("e893"),f=o.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var g={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(g[t]=!0),t};d(m,f),m.prototype=p,p.constructor=m;var v="Symbol(test)"==String(f("test")),_=s(p.toString),b=s(p.valueOf),y=/^Symbol\((.*)\)[^)]+$/,w=s("".replace),O=s("".slice);h(p,"description",{configurable:!0,get:function(){var e=b(this),t=_(e);if(a(g,e))return"";var n=v?O(t,7,-1):w(t,y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=s.set,f=s.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e54f:function(e,t,n){},e5cb:function(e,t,n){"use strict";var r=n("d066"),i=n("1a2d"),o=n("9112"),s=n("3a9b"),a=n("d2bb"),c=n("e893"),u=n("7156"),l=n("e391"),h=n("ab36"),d=n("c770"),f=n("b980"),p=n("c430");e.exports=function(e,t,n,g){var m=g?2:1,v=e.split("."),_=v[v.length-1],b=r.apply(null,v);if(b){var y=b.prototype;if(!p&&i(y,"cause")&&delete y.cause,!n)return b;var w=r("Error"),O=t((function(e,t){var n=l(g?t:e,void 0),r=g?new b(e):new b;return void 0!==n&&o(r,"message",n),f&&o(r,"stack",d(r.stack,2)),this&&s(y,this)&&u(r,this,O),arguments.length>m&&h(r,arguments[m]),r}));if(O.prototype=y,"Error"!==_&&(a?a(O,w):c(O,w,{name:!0})),c(O,b),!p)try{y.name!==_&&o(y,"name",_),y.constructor=O}catch(C){}return O}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),g=n("d2bb"),m=n("d44e"),v=n("2626"),_=n("59ed"),b=n("1626"),y=n("861d"),w=n("19aa"),O=n("8925"),C=n("2266"),k=n("1c7e"),I=n("4840"),E=n("2cf4").set,T=n("b575"),S=n("cdf9"),x=n("44de"),j=n("f069"),R=n("e667"),P=n("01b4"),N=n("69f3"),A=n("94ca"),L=n("b622"),M=n("6069"),D=n("605d"),F=n("2d00"),U=L("species"),q="Promise",z=N.getterFor(q),H=N.set,W=N.getterFor(q),B=d&&d.prototype,V=d,$=B,G=u.TypeError,K=u.document,Y=u.process,J=j.f,Q=J,X=!!(K&&K.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,ie=2,oe=1,se=2,ae=!1,ce=A(q,(function(){var e=O(V),t=e!==String(V);if(!t&&66===F)return!0;if(c&&!$["finally"])return!0;if(F>=51&&/native code/.test(e))return!1;var n=new V((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[U]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&M&&!Z})),ue=ce||!k((function(e){V.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!y(e)||!b(t=e.then))&&t},he=function(e,t){var n,r,i,o=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&me(t),t.rejection=oe),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(G("Promise-chain cycle")):(r=le(n))?h(r,n,c,u):c(n)):u(o)}catch(d){l&&!i&&l.exit(),u(d)}},de=function(e,t){e.notified||(e.notified=!0,T((function(){var n,r=e.reactions;while(n=r.get())he(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},fe=function(e,t,n){var r,i;X?(r=K.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(i=u["on"+e])?i(r):e===ee&&x("Unhandled promise rejection",n)},pe=function(e){h(E,u,(function(){var t,n=e.facade,r=e.value,i=ge(e);if(i&&(t=R((function(){D?Y.emit("unhandledRejection",r,n):fe(ee,n,r)})),e.rejection=D||ge(e)?se:oe,t.error))throw t.value}))},ge=function(e){return e.rejection!==oe&&!e.parent},me=function(e){h(E,u,(function(){var t=e.facade;D?Y.emit("rejectionHandled",t):fe(te,t,e.value)}))},ve=function(e,t,n){return function(r){e(t,r,n)}},_e=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,de(e,!0))},be=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw G("Promise can't be resolved itself");var r=le(t);r?T((function(){var n={done:!1};try{h(r,t,ve(be,n,e),ve(_e,n,e))}catch(i){_e(n,i,e)}})):(e.value=t,e.state=re,de(e,!1))}catch(i){_e({done:!1},i,e)}}};if(ce&&(V=function(e){w(this,$),_(e),h(r,this);var t=z(this);try{e(ve(be,t),ve(_e,t))}catch(n){_e(t,n)}},$=V.prototype,r=function(e){H(this,{type:q,done:!1,notified:!1,parent:!1,reactions:new P,rejection:!1,state:ne,value:void 0})},r.prototype=p($,{then:function(e,t){var n=W(this),r=J(I(this,V));return n.parent=!0,r.ok=!b(e)||e,r.fail=b(t)&&t,r.domain=D?Y.domain:void 0,n.state==ne?n.reactions.add(r):T((function(){he(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=z(e);this.promise=e,this.resolve=ve(be,t),this.reject=ve(_e,t)},j.f=J=function(e){return e===V||e===o?new i(e):Q(e)},!c&&b(d)&&B!==Object.prototype)){s=B.then,ae||(f(B,"then",(function(e,t){var n=this;return new V((function(e,t){h(s,n,e,t)})).then(e,t)}),{unsafe:!0}),f(B,"catch",$["catch"],{unsafe:!0}));try{delete B.constructor}catch(ye){}g&&g(B,$)}a({global:!0,wrap:!0,forced:ce},{Promise:V}),m(V,q,!1,!0),v(q),o=l(q),a({target:q,stat:!0,forced:ce},{reject:function(e){var t=J(this);return h(t.reject,void 0,e),t.promise}}),a({target:q,stat:!0,forced:c||ce},{resolve:function(e){return S(c&&this===o?V:this,e)}}),a({target:q,stat:!0,forced:ue},{all:function(e){var t=this,n=J(t),r=n.resolve,i=n.reject,o=R((function(){var n=_(t.resolve),o=[],s=0,a=1;C(e,(function(e){var c=s++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=J(t),r=n.reject,i=R((function(){var i=_(t.resolve);C(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return cr})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ct})),n.d(t,"e",(function(){return lt}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function d(e,...t){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw m(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function w(e){b(e instanceof Function,"Expected a class definition");let t=y.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,y.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["n"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===E()||"https:"===E()}function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["t"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["w"])()||Object(r["y"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return M(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["C"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw q(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?j(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t=!1){const n=Object(r["q"])(e),i=await n.getIdToken(t),o=$(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:W(V(o.auth_time)),issuedAtTime:W(V(o.iat)),expirationTime:W(V(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function V(e){return 1e3*Number(e)}function $(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["h"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function G(e){const t=$(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,H(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=Object(r["q"])(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["C"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return B(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:O,stsTokenManager:C}=t;v(b&&C,e,"internal-error");const k=re.fromJSON(this.name,C);v("string"===typeof b,e,"internal-error"),ie(l,e.name),ie(h,e.name),v("boolean"===typeof y,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(m,e.name),ie(_,e.name);const I=new oe({uid:b,auth:e,email:h,emailVerified:y,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:_});return O&&Array.isArray(O)&&(I.providerData=O.map(e=>Object.assign({},e))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(r["r"])()){return/firefox\//i.test(e)}function de(e=Object(r["r"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["r"])()){return/crios\//i.test(e)}function pe(e=Object(r["r"])()){return/iemobile/i.test(e)}function ge(e=Object(r["r"])()){return/android/i.test(e)}function me(e=Object(r["r"])()){return/blackberry/i.test(e)}function ve(e=Object(r["r"])()){return/webos/i.test(e)}function _e(e=Object(r["r"])()){return/iphone|ipad|ipod/i.test(e)}function be(e=Object(r["r"])()){var t;return _e(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return Object(r["v"])()&&10===document.documentMode}function we(e=Object(r["r"])()){return _e(e)||ge(e)||ve(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["r"])());break;case"Worker":n=`${le(Object(r["r"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ee(this),this.idTokenSubscription=new Ee(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["q"])(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ie(e){return Object(r["q"])(e)}class Ee{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["l"])(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function je(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function Re(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Te{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Se(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="http://localhost";class Le extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Le(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ne(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ne(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ne(e,t)}buildRequest(){const e={requestUri:Ae,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["C"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function Fe(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const Ue={["USER_NOT_FOUND"]:"user-not-found"};async function qe(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),Ue)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ze({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ze({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return qe(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ze({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function We(e){const t=Object(r["D"])(Object(r["p"])(e))["link"],n=t?Object(r["D"])(Object(r["p"])(t))["deep_link_id"]:null,i=Object(r["D"])(Object(r["p"])(e))["deep_link_id"],o=i?Object(r["D"])(Object(r["p"])(i))["link"]:null;return o||i||n||t||e}class Be{constructor(e){var t,n,i,o,s,a;const c=Object(r["D"])(Object(r["p"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=He(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=We(e);try{return new Be(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(){this.providerId=Ve.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Be.parseLink(t);return v(n,"argument-error"),Pe._fromEmailAndCode(e,n.code,n.tenantId)}}Ve.PROVIDER_ID="password",Ve.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ve.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends $e{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Ge{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xe(e,t){return D(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,nt(r,i,t,e),n);v(o.idToken,r,"internal-error");const s=$(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(Ie(e),t)}async function at(e,t,n){const r=Ie(e),i=await Xe(r,{returnSecureToken:!0,email:t,password:n}),o=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ct(e,t,n){return st(Object(r["q"])(e),Ve.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,t,n,i){return Object(r["q"])(e).onAuthStateChanged(t,n,i)}function lt(e){return Object(r["q"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}function dt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,t))}new WeakMap;const ft="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ft,"1"),this.storage.removeItem(ft),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){const e=Object(r["r"])();return de(e)||_e(e)}const mt=1e3,vt=10;class _t extends pt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ye()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,vt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},mt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_t.type="LOCAL";const bt=_t;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends pt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yt.type="SESSION";const wt=yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ct(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await Ot(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.receivers=[];class It{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=kt("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function Tt(e){Et().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return"undefined"!==typeof Et()["WorkerGlobalScope"]&&"function"===typeof Et()["importScripts"]}async function xt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function jt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Rt(){return St()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="firebaseLocalStorageDb",Nt=1,At="firebaseLocalStorage",Lt="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dt(e,t){return e.transaction([At],t?"readwrite":"readonly").objectStore(At)}function Ft(){const e=indexedDB.deleteDatabase(Pt);return new Mt(e).toPromise()}function Ut(){const e=indexedDB.open(Pt,Nt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(At,{keyPath:Lt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(At)?t(n):(n.close(),await Ft(),t(await Ut()))})})}async function qt(e,t,n){const r=Dt(e,!0).put({[Lt]:t,value:n});return new Mt(r).toPromise()}async function zt(e,t){const n=Dt(e,!1).get(t),r=await new Mt(n).toPromise();return void 0===r?null:r.value}function Ht(e,t){const n=Dt(e,!0).delete(t);return new Mt(n).toPromise()}const Wt=800,Bt=3;class Vt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ut()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Bt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return St()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ct._getInstance(Rt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xt(),!this.activeServiceWorker)return;this.sender=new It(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&jt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ut();return await qt(e,ft,"1"),await Ht(e,ft),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>zt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ht(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Dt(e,!1).getAll();return new Mt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Vt.type="LOCAL";const $t=Vt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}function Kt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Yt().appendChild(r)})}function Qt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qt("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xt="recaptcha";async function Zt(e,t,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,e,"argument-error"),v(n.type===Xt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await Gt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{constructor(e){this.providerId=en.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return Zt(this.auth,e,Object(r["q"])(t))}static credential(e,t){return ze._fromVerification(e,t)}static credentialFromResult(e){const t=e;return en.credentialFromTaggedObject(t)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ze._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class nn extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ne(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rn(e){return ot(e.auth,new nn(e),e.bypassAuthState)}function on(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new nn(e),e.bypassAuthState)}async function sn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),rt(n,new nn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return on;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new x(2e3,1e4);class un extends an{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=kt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,cn.get())};e()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="pendingRedirect",hn=new Map;class dn extends an{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await fn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(e,t){const n=gn(t),r=pn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function pn(e){return w(e._redirectPersistence)}function gn(e){return ce(ln,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t,n=!1){const r=Ie(e),i=tn(r,t),o=new dn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=6e5;class _n{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(e))}saveEventToCache(e){this.cachedEventUids.add(bn(e)),this.lastProcessedEventTime=Date.now()}}function bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kn=/^https?/;async function In(e){if(e.config.emulator)return;const{authorizedDomains:t}=await On(e);for(const r of t)try{if(En(r))return}catch(n){}f(e,"unauthorized-domain")}function En(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!kn.test(n))return!1;if(Cn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new x(3e4,6e4);function Sn(){const e=Et().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xn(e){return new Promise((t,n)=>{var r,i,o;function s(){Sn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Sn(),n(p(e,"network-request-failed"))},timeout:Tn.get()})}if(null===(i=null===(r=Et().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Et().gapi)||void 0===o?void 0:o.load)){const t=Qt("iframefcb");return Et()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Jt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw jn=null,e})}let jn=null;function Rn(e){return jn=jn||xn(e),jn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new x(5e3,15e3),Nn="__/auth/iframe",An="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?j(t,An):`https://${e.config.authDomain}/${Nn}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=Mn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["C"])(o).slice(1)}`}async function Fn(e){const t=await Rn(e),n=Et().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Dn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Et().setTimeout(()=>{r(i)},Pn.get());function s(){Et().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qn=500,zn=600,Hn="_blank",Wn="http://localhost";class Bn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Vn(e,t,n,i=qn,o=zn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Un),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["r"])().toLowerCase();n&&(c=fe(l)?Hn:n),he(l)&&(t=t||Wn,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(be(l)&&"_self"!==c)return $n(t||"",c),new Bn(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Bn(d)}function $n(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",Kn="emulator/auth/handler";function Yn(e,t,n,o,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof $e){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["u"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Jn(e)}?${Object(r["C"])(u).slice(1)}`}function Jn({config:e}){return e.emulator?j(e,Kn):`https://${e.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="webStorageSupport";class Xn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=mn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Yn(e,t,n,k(),r);return Vn(e,o,kt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Tt(Yn(e,t,n,k(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Fn(e),n=new _n(e);return t.register("authEvent",t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Qn,{type:Qn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Qn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=In(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||_e()}}const Zn=Xn;class er{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class tr extends er{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tr(e)}_finalizeEnroll(e,t,n){return dt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Kt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(e){return tr._fromCredential(e)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",ir="0.19.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class or{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ar(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},s=new ke(t,r);return C(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new or(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["f"])(rr,ir,sr(e)),Object(i["f"])(rr,ir,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e=Object(i["d"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:Zn,persistence:[$t,bt,wt]})}ar("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("e8b5"),s=n("68ee"),a=n("861d"),c=n("23cb"),u=n("07fa"),l=n("fc6a"),h=n("8418"),d=n("b622"),f=n("1dde"),p=n("f36a"),g=f("slice"),m=d("species"),v=i.Array,_=Math.max;r({target:"Array",proto:!0,forced:!g},{slice:function(e,t){var n,r,i,d=l(this),f=u(d),g=c(e,f),b=c(void 0===t?f:t,f);if(o(d)&&(n=d.constructor,s(n)&&(n===v||o(n.prototype))?n=void 0:a(n)&&(n=n[m],null===n&&(n=void 0)),n===v||void 0===n))return p(d,g,b);for(r=new(void 0===n?v:n)(_(b-g,0)),i=0;g<b;g++,i++)g in d&&h(r,i,d[g]);return r.length=i,r}})},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.2805ce76.js.map