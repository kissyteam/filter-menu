modulex.add("filter-menu",["xtemplate/runtime","menu","component/extension/content-box","util"],function(e,t,n){var a,l,r,s=e("xtemplate/runtime"),i=e("menu"),c=e("component/extension/content-box"),o=e("util");a=function(e){var t=e=function a(e){{var t,a=this,n=a.root,l=a.buffer,r=a.scope,s=(a.runtime,a.name,a.pos),i=r.data,c=r.affix,o=n.nativeCommands,u=n.utils,p=u.callFn;u.callCommand,o.range,o.foreach,o.forin,o.each,o["with"],o["if"],o.set,o.include,o.parse,o.extend,o.block,o.macro,o["debugger"]}l.data+='<div class="';var d;d=p(a,r,{escape:1,params:["input-wrap"]},l,["getBaseCssClasses"]),l=l.writeEscaped(d),l.data+='">\r\n    <div class="',s.line=2;var h;h=p(a,r,{escape:1,params:["placeholder"]},l,["getBaseCssClasses"]),l=l.writeEscaped(h),l.data+='">\r\n        ',s.line=3;var f=(t=c.placeholder)!==e?t:(t=i.placeholder)!==e?t:r.resolveLooseUp(["placeholder"]);l=l.writeEscaped(f),l.data+='\r\n    </div>\r\n    <input class="',s.line=5;var g;g=p(a,r,{escape:1,params:["input"]},l,["getBaseCssClasses"]),l=l.writeEscaped(g),l.data+='"\r\n            autocomplete="off"/>\r\n</div>\r\n<div class="',s.line=8;var v;v=p(a,r,{escape:1,params:["content"]},l,["getBaseCssClasses"]),l=l.writeEscaped(v),l.data+='">';var m=(t=c.content)!==e?t:(t=i.content)!==e?t:r.resolveLooseUp(["content"]);return l=l.write(m),l.data+="</div>",l};return t.TPL_NAME=n.id||n.name,e}(),l=function(e){var t=a,n=s,l=new n(t);return e=function(){return l.render.apply(l,arguments)}}(),r=function(e){var t=i,n=l,a="menuitem-hit",r=c,s=o;return e=t.extend([r],{bindUI:function(){var e=this,t=e.get("filterInput");t.on("input",e.handleFilterEvent,e)},handleMouseEnterInternal:function(e){var t=this;t.callSuper(e),t.getKeyEventTarget()[0].select()},handleFilterEvent:function(){var e,t=this,n=t.get("filterInput"),a=t.get("highlightedItem");t.set("filterStr",n.val()),e=n.val(),t.get("allowMultiple")&&(e=e.replace(/^.+,/,"")),!e&&a?a.set("highlighted",!1):!e||a&&a.get("visible")||(a=t._getNextEnabledHighlighted(0,1),a&&a.set("highlighted",!0))},_onSetFilterStr:function(e){this.filterItems(e)},_onSetPlaceholder:function(e){this.get("placeholderEl").html(e)},getKeyEventTarget:function(){return this.get("filterInput")},filterItems:function(e){var t=this,n=t.get("prefixCls"),l=t.get("placeholderEl"),r=t.get("filterInput");if(l[e?"hide":"show"](),t.get("allowMultiple")){var i,c=[],o=e.match(/(.+)[,\uff0c]\s*([^\uff0c,]*)/),u=[];if(o&&(u=o[1].split(/[,\uff0c]/)),/[,\uff0c]$/.test(e)){if(c=[],o){c=u,i=u[u.length-1];var p=t.get("highlightedItem"),d=p&&p.get("content");d&&d.indexOf(i)>-1&&i&&(c[c.length-1]=d),r.val(c.join(",")+",")}e=""}else o&&(e=o[2]||""),c=u;var h=t.get("enteredItems");h.length!==c.length&&t.set("enteredItems",c)}var f=t.get("children"),g=e&&new RegExp(s.escapeRegExp(e),"ig");s.each(f,function(t){var l=t.get("content");e?l.indexOf(e)>-1?(t.set("visible",!0),t.get("el").html(l.replace(g,function(e){return'<span class="'+n+a+'">'+e+"</span>"}))):t.set("visible",!1):(t.get("el").html(l),t.set("visible",!0))})},reset:function(){var e=this;e.set("filterStr",""),e.set("enteredItems",[]),e.get("filterInput").val("")}},{ATTRS:{handleGestureEvents:{value:!0},focusable:{value:!0},allowTextSelection:{value:!0},contentTpl:{value:n},filterInput:{selector:function(){return"."+this.getBaseCssClass("input")}},filterInputWrap:{selector:function(){return"."+this.getBaseCssClass("input-wrap")}},placeholder:{render:1,sync:0,parse:function(){var e=this.get("placeholderEl");return e&&e.html()}},placeholderEl:{selector:function(){return"."+this.getBaseCssClass("placeholder")}},filterStr:{},enteredItems:{value:[]},allowMultiple:{value:!1}},xclass:"filter-menu"})}(),n.exports=r});