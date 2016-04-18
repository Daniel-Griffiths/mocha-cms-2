!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","jquery-ui/sortable"],e):e(window.jQuery)}(function(e){"use strict";function t(e,t,s){return e>t&&t+s>e}e.widget("mjs.nestedSortable",e.extend({},e.ui.sortable.prototype,{options:{disableParentChange:!1,doNotClear:!1,expandOnHover:700,isAllowed:function(){return!0},isTree:!1,listType:"ol",maxLevels:0,protectRoot:!1,rootID:null,rtl:!1,startCollapsed:!1,tabSize:20,branchClass:"mjs-nestedSortable-branch",collapsedClass:"mjs-nestedSortable-collapsed",disableNestingClass:"mjs-nestedSortable-no-nesting",errorClass:"mjs-nestedSortable-error",expandedClass:"mjs-nestedSortable-expanded",hoveringClass:"mjs-nestedSortable-hovering",leafClass:"mjs-nestedSortable-leaf",disabledClass:"mjs-nestedSortable-disabled"},_create:function(){var t,s=this;if(this.element.data("ui-sortable",this.element.data("mjs-nestedSortable")),!this.element.is(this.options.listType))throw t="nestedSortable: Please check that the listType option is set to your actual list type",new Error(t);this.options.isTree&&this.options.expandOnHover&&(this.options.tolerance="intersect"),e.ui.sortable.prototype._create.apply(this,arguments),this.options.isTree&&e(this.items).each(function(){var e=this.item,t=e.hasClass(s.options.collapsedClass),i=e.hasClass(s.options.expandedClass);e.children(s.options.listType).length?(e.addClass(s.options.branchClass),t||i||(s.options.startCollapsed?e.addClass(s.options.collapsedClass):e.addClass(s.options.expandedClass))):e.addClass(s.options.leafClass)})},_destroy:function(){return this.element.removeData("mjs-nestedSortable").removeData("ui-sortable"),e.ui.sortable.prototype._destroy.apply(this,arguments)},_mouseDrag:function(t){var s,i,o,l,r,n,a,h,p,d,c,u,f,m,g,v,C=this,b=this.options,y=!1,_=e(document);for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<b.scrollSensitivity?(y=this.scrollParent.scrollTop()+b.scrollSpeed,this.scrollParent.scrollTop(y)):t.pageY-this.overflowOffset.top<b.scrollSensitivity&&(y=this.scrollParent.scrollTop()-b.scrollSpeed,this.scrollParent.scrollTop(y)),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<b.scrollSensitivity?(y=this.scrollParent.scrollLeft()+b.scrollSpeed,this.scrollParent.scrollLeft(y)):t.pageX-this.overflowOffset.left<b.scrollSensitivity&&(y=this.scrollParent.scrollLeft()-b.scrollSpeed,this.scrollParent.scrollLeft(y))):(t.pageY-_.scrollTop()<b.scrollSensitivity?(y=_.scrollTop()-b.scrollSpeed,_.scrollTop(y)):e(window).height()-(t.pageY-_.scrollTop())<b.scrollSensitivity&&(y=_.scrollTop()+b.scrollSpeed,_.scrollTop(y)),t.pageX-_.scrollLeft()<b.scrollSensitivity?(y=_.scrollLeft()-b.scrollSpeed,_.scrollLeft(y)):e(window).width()-(t.pageX-_.scrollLeft())<b.scrollSensitivity&&(y=_.scrollLeft()+b.scrollSpeed,_.scrollLeft(y))),y!==!1&&e.ui.ddmanager&&!b.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),r=this.placeholder.offset().top,this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),this.hovering=this.hovering?this.hovering:null,this.mouseentered=this.mouseentered?this.mouseentered:!1,function(){var e=this.placeholder.parent().parent();e&&e.closest(".ui-sortable").length&&(n=e)}.call(this),a=this._getLevel(this.placeholder),h=this._getChildLevels(this.helper),c=document.createElement(b.listType),s=this.items.length-1;s>=0;s--)if(i=this.items[s],o=i.item[0],l=this._intersectsWithPointer(i),l&&i.instance===this.currentContainer){if(-1!==o.className.indexOf(b.disabledClass))if(2===l){if(p=this.items[s+1],p&&p.item.hasClass(b.disabledClass))continue}else if(1===l&&(d=this.items[s-1],d&&d.item.hasClass(b.disabledClass)))continue;if(u=1===l?"next":"prev",o!==this.currentItem[0]&&this.placeholder[u]()[0]!==o&&!e.contains(this.placeholder[0],o)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],o):!0)){if(this.mouseentered||(e(o).mouseenter(),this.mouseentered=!0),b.isTree&&e(o).hasClass(b.collapsedClass)&&b.expandOnHover&&(this.hovering||(e(o).addClass(b.hoveringClass),this.hovering=window.setTimeout(function(){e(o).removeClass(b.collapsedClass).addClass(b.expandedClass),C.refreshPositions(),C._trigger("expand",t,C._uiHash())},b.expandOnHover))),this.direction=1===l?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(i))break;e(o).mouseleave(),this.mouseentered=!1,e(o).removeClass(b.hoveringClass),this.hovering&&window.clearTimeout(this.hovering),this.hovering=null,!b.protectRoot||this.currentItem[0].parentNode===this.element[0]&&o.parentNode!==this.element[0]?b.protectRoot||this._rearrange(t,i):this.currentItem[0].parentNode!==this.element[0]&&o.parentNode===this.element[0]?(e(o).children(b.listType).length||(o.appendChild(c),b.isTree&&e(o).removeClass(b.leafClass).addClass(b.branchClass+" "+b.expandedClass)),f="down"===this.direction?e(o).prev().children(b.listType):e(o).children(b.listType),void 0!==f[0]&&this._rearrange(t,null,f)):this._rearrange(t,i),this._clearEmpty(o),this._trigger("change",t,this._uiHash());break}}if(function(){var e=this.placeholder.prev();m=e.length?e:null}.call(this),null!=m)for(;"li"!==m[0].nodeName.toLowerCase()||-1!==m[0].className.indexOf(b.disabledClass)||m[0]===this.currentItem[0]||m[0]===this.helper[0];){if(!m[0].previousSibling){m=null;break}m=e(m[0].previousSibling)}if(function(){var e=this.placeholder.next();g=e.length?e:null}.call(this),null!=g)for(;"li"!==g[0].nodeName.toLowerCase()||-1!==g[0].className.indexOf(b.disabledClass)||g[0]===this.currentItem[0]||g[0]===this.helper[0];){if(!g[0].nextSibling){g=null;break}g=e(g[0].nextSibling)}return this.beyondMaxLevels=0,null==n||null!=g||b.protectRoot&&n[0].parentNode==this.element[0]||!(b.rtl&&this.positionAbs.left+this.helper.outerWidth()>n.offset().left+n.outerWidth()||!b.rtl&&this.positionAbs.left<n.offset().left)?null==m||m.hasClass(b.disableNestingClass)||!(m.children(b.listType).length&&m.children(b.listType).is(":visible")||!m.children(b.listType).length)||b.protectRoot&&this.currentItem[0].parentNode===this.element[0]||!(b.rtl&&this.positionAbs.left+this.helper.outerWidth()<m.offset().left+m.outerWidth()-b.tabSize||!b.rtl&&this.positionAbs.left>m.offset().left+b.tabSize)?this._isAllowed(n,a,a+h):(this._isAllowed(m,a,a+h+1),m.children(b.listType).length||(m[0].appendChild(c),b.isTree&&m.removeClass(b.leafClass).addClass(b.branchClass+" "+b.expandedClass)),r&&r<=m.offset().top?m.children(b.listType).prepend(this.placeholder):m.children(b.listType)[0].appendChild(this.placeholder[0]),"undefined"!=typeof n&&this._clearEmpty(n[0]),this._trigger("change",t,this._uiHash())):(n.after(this.placeholder[0]),v=!n.children(b.listItem).children("li:visible:not(.ui-sortable-helper)").length,b.isTree&&v&&n.removeClass(this.options.branchClass+" "+this.options.expandedClass).addClass(this.options.leafClass),"undefined"!=typeof n&&this._clearEmpty(n[0]),this._trigger("change",t,this._uiHash())),this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t){this.beyondMaxLevels&&(this.placeholder.removeClass(this.options.errorClass),this.domPosition.prev?e(this.domPosition.prev).after(this.placeholder):e(this.domPosition.parent).prepend(this.placeholder),this._trigger("revert",t,this._uiHash())),e("."+this.options.hoveringClass).mouseleave().removeClass(this.options.hoveringClass),this.mouseentered=!1,this.hovering&&window.clearTimeout(this.hovering),this.hovering=null,this._relocate_event=t,this._pid_current=e(this.domPosition.parent).parent().attr("id"),this._sort_current=this.domPosition.prev?e(this.domPosition.prev).next().index():0,e.ui.sortable.prototype._mouseStop.apply(this,arguments)},_intersectsWithSides:function(e){var s=this.options.isTree?.8:.5,i=t(this.positionAbs.top+this.offset.click.top,e.top+e.height*s,e.height),o=t(this.positionAbs.top+this.offset.click.top,e.top-e.height*s,e.height),l=t(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),r=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&l||"left"===n&&!l:r&&("down"===r&&i||"up"===r&&o)},_contactContainers:function(){this.options.protectRoot&&this.currentItem[0].parentNode===this.element[0]||e.ui.sortable.prototype._contactContainers.apply(this,arguments)},_clear:function(){var t,s;for(e.ui.sortable.prototype._clear.apply(this,arguments),(this._pid_current!==this._uiHash().item.parent().parent().attr("id")||this._sort_current!==this._uiHash().item.index())&&this._trigger("relocate",this._relocate_event,this._uiHash()),t=this.items.length-1;t>=0;t--)s=this.items[t].item[0],this._clearEmpty(s)},serialize:function(t){var s=e.extend({},this.options,t),i=this._getItemsAsjQuery(s&&s.connected),o=[];return e(i).each(function(){var t=(e(s.item||this).attr(s.attribute||"id")||"").match(s.expression||/(.+)[-=_](.+)/),i=(e(s.item||this).parent(s.listType).parent(s.items).attr(s.attribute||"id")||"").match(s.expression||/(.+)[-=_](.+)/);t&&o.push((s.key||t[1])+"["+(s.key&&s.expression?t[1]:t[2])+"]="+(i?s.key&&s.expression?i[1]:i[2]:s.rootID))}),!o.length&&s.key&&o.push(s.key+"="),o.join("&")},toHierarchy:function(t){function s(t){var o,l=(e(t).attr(i.attribute||"id")||"").match(i.expression||/(.+)[-=_](.+)/),r=e(t).data();return r.nestedSortableItem&&delete r.nestedSortableItem,l?(o={id:l[2]},o=e.extend({},o,r),e(t).children(i.listType).children(i.items).length>0&&(o.children=[],e(t).children(i.listType).children(i.items).each(function(){var e=s(this);o.children.push(e)})),o):void 0}var i=e.extend({},this.options,t),o=[];return e(this.element).children(i.items).each(function(){var e=s(this);o.push(e)}),o},toArray:function(t){function s(t,r,n){var a,h,p,d=n+1;if(e(t).children(i.listType).children(i.items).length>0&&(r++,e(t).children(i.listType).children(i.items).each(function(){d=s(e(this),r,d)}),r--),a=e(t).attr(i.attribute||"id").match(i.expression||/(.+)[-=_](.+)/),r===o?h=i.rootID:(p=e(t).parent(i.listType).parent(i.items).attr(i.attribute||"id").match(i.expression||/(.+)[-=_](.+)/),h=p[2]),a){var c=e(t).data("name");l.push({id:a[2],parent_id:h,depth:r,left:n,right:d,name:c})}return n=d+1}var i=e.extend({},this.options,t),o=i.startDepthCount||0,l=[],r=1;return i.excludeRoot||(l.push({item_id:i.rootID,parent_id:null,depth:o,left:r,right:2*(e(i.items,this.element).length+1)}),r++),e(this.element).children(i.items).each(function(){r=s(this,o,r)}),l=l.sort(function(e,t){return e.left-t.left})},_clearEmpty:function(t){function s(t,s,i,o){o&&(s=[i,i=s][0]),e(t).removeClass(s).addClass(i)}var i=this.options,o=e(t).children(i.listType),l=o.is(":not(:empty)"),r=i.doNotClear||l||i.protectRoot&&e(t)[0]===this.element[0];i.isTree&&(s(t,i.branchClass,i.leafClass,r),r&&l&&s(t,i.collapsedClass,i.expandedClass)),r||o.remove()},_getLevel:function(e){var t,s=1;if(this.options.listType)for(t=e.closest(this.options.listType);t&&t.length>0&&!t.is(".ui-sortable");)s++,t=t.parent().closest(this.options.listType);return s},_getChildLevels:function(t,s){var i=this,o=this.options,l=0;return s=s||0,e(t).children(o.listType).children(o.items).each(function(e,t){l=Math.max(i._getChildLevels(t,s+1),l)}),s?l+1:l},_isAllowed:function(e,t,s){var i=this.options,o=this.placeholder.closest(".ui-sortable").nestedSortable("option","maxLevels"),l=this.currentItem.parent().parent(),r=i.disableParentChange&&("undefined"!=typeof e&&!l.is(e)||"undefined"==typeof e&&l.is("li"));r||!i.isAllowed(this.placeholder,e,this.currentItem)?(this.placeholder.addClass(i.errorClass),s>o&&0!==o?this.beyondMaxLevels=s-o:this.beyondMaxLevels=1):s>o&&0!==o?(this.placeholder.addClass(i.errorClass),this.beyondMaxLevels=s-o):(this.placeholder.removeClass(i.errorClass),this.beyondMaxLevels=0)}})),e.mjs.nestedSortable.prototype.options=e.extend({},e.ui.sortable.prototype.options,e.mjs.nestedSortable.prototype.options)});