/**
 * Copyright © by ThemeTidy.com
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * All rights reserved
 * This file or theme or template or image or any code or any design not be directly usable, you can only able to use this file or theme or template or image or any code or any design, if you any this item from here https://www.themetidy.com/
 * Check here https://www.themetidy.com/ for details about Copyright and Terms of condition to use this file or theme or template or image or any code or any design
 * Author -> ThemeTidy.com
 * Email -> admin@themetidy.com
 */

/*******************************************************************************************
 * IIFE - Immediately Invoked Function Expression
 * The global jQuery object (window.jQuery, window, document) is passed as a parameter
 *******************************************************************************************/
!function(a,b,c){a(function(){d.initDomReady()}),a(b).load(function(){d.initWindowReady()});var d={initDomReady:function(){this.initAddToCart(),this.initFilter()},initWindowReady:function(){this.initToolTip(),this.initIE10ViewPortHack()},showSuccessMessage:function(b){var c=a("#paira-ajax-success-message");c.find(".paira-success-message-title").text(b),c.modal("show")},showCommonMessage:function(b){var c=a("#paira-common-message");c.find(".paira-common-message-details").html(b),c.modal("show")},ajaxAddToCart:function(b,c){var e="quantity="+c+"&id="+b;return a.ajax({url:"/cart/add.js",type:"get",data:e,dataType:"json",beforeSend:function(){a(".paira-loading").show()},error:function(b){a(".paira-loading").hide();var c='<i class="fa fa-info-circle font-size-16"></i> '+a.parseJSON(b.responseText).description;d.showCommonMessage(c)}})},initAddToCart:function(){a(c).on("click",".paira-add-to-cart",function(b){b.preventDefault();var c=a(this).parents(".paira-product").find(".paira-product-title").text(),e=parseInt(a(this).attr("data-item-quantity")),f=a(this).attr("data-varient-id");d.ajaxAddToCart(f,e).done(function(){a(".paira-loading").hide(),Shopify.getCart(function(b){var c=Shopify.formatMoney(b.total_price);a(".paira-cart-total-price").html('<span class="money">'+c+"</span>"),a(".paira-cart-item-count").html(b.item_count)}),d.showSuccessMessage(c)})})},filterDefaultData:function(){var b=c.location.href,d=b.split("?"),e=d[0].substr(d[0].lastIndexOf("/")+1);if(e?a(".paira-filter-category option[value='"+e+"']").attr("selected","selected"):(e=b.substr(b.lastIndexOf("/")+1),a(".paira-filter-category option[value='"+e+"']").attr("selected","selected")),d[1]){var f=d[1].split("=");"sort_by"==f[0]&&f[1]&&a(".paira-sort-by option[value='"+f[1]+"']").attr("selected","selected")}},initFilter:function(){a(c).on("change",".paira-filter-category",function(){var d=c.location.href,e=d.split("?"),f=a(this).val();e[1]&&(f=f+"?"+e[1]),b.location.href=f}),a(c).on("change",".paira-filter-tag",function(){var d=c.location.href,e=d.split("?"),f=a(this).val();e[1]&&(f=f+"?"+e[1]),b.location.href=f}),a(c).on("change",".paira-sort-by",function(){var d=c.location.href,e=d.split("?"),f=a(this).val();e[1]&&(d=e[0]),d=d+"?sort_by="+f.replace(/\+/g,"%20"),b.location.href=d}),d.filterDefaultData()},initToolTip:function(){a('[data-toggle="tooltip"]').length&&a('[data-toggle="tooltip"]').tooltip()},initIE10ViewPortHack:function(){"use strict";if(navigator.userAgent.match(/IEMobile\/10\.0/)){var a=c.createElement("style");a.appendChild(c.createTextNode("@-ms-viewport{width:auto!important}")),c.querySelector("head").appendChild(a)}}}}(window.jQuery,window,document);
/**********************************************************************************************
 * The global jQuery object (window.jQuery, window, document) is passed as a parameter
 **********************************************************************************************/