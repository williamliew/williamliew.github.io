!function(a,t){"use strict";function e(){var a=250,e=t(".lunch-idea"),o=t(".room"),n=o.width(),r=o.height(),l=0,c=2*Math.PI/e.length;e.each(function(){var e=Math.round(n/2+a*Math.cos(l)-t(this).width()/2),o=Math.round(r/2+a*Math.sin(l)-t(this).height()/2);window.console&&console.log(t(this).text(),e,o),t(this).css({left:e+"px",top:o+"px"}),l+=c})}{var o=["D32E46","FA522B","FAC72B","FAEE2B"],n=0;o[Math.floor(Math.random()*o.length)]}t(".create-event-form").on("submit",function(){var a=t(".event-name").val(),e=t(".event-planner").val();return t(".create-event-form").fadeOut("slow"),t(".room-wrapper").fadeIn("slow"),t(".room-name").html(a+" <small>organised by "+e+"</small>"),!1}),t(".idea-form").on("submit",function(){var a=t(".idea-name"),r=a.val();return t(".room").append('<div class="lunch-idea" data-votes="0" style="background-color: #'+o[Math.floor(Math.random()*o.length)]+'">'+r+' <br />+<span class="vote-count">0</span></div>'),a.val(""),n++,e(),!1}),t(".room").on("click",".lunch-idea",function(){var a=t(this),e=parseInt(a.attr("data-votes"));e++,a.attr("data-votes",e),a.children(".vote-count").text(e),console.log(e)})}(window,jQuery),!function(a,t){"use strict";var e=["D32E46","FA522B","FAA02B","FAC72B","FAEE2B"];e[Math.floor(Math.random()*e.length)],t(".create-event").on("click",function(){var a=t(".event-name").val(),e=t(".event-planner").val();return t(".create-event-form").fadeOut("slow"),t(".room-wrapper").fadeIn("slow"),t(".room-name").html(a+" <small>organised by "+e+"</small>"),!1}),t(".add-idea").on("click",function(){var a=t(".idea-name"),o=a.val();return t(".room").append('<div class="lunch-idea" data-votes="0" style="background-color: #'+e[Math.floor(Math.random()*e.length)]+'">'+o+' <br />+<span class="vote-count">0</span></div>'),a.val(""),!1}),t(".room").on("click",".lunch-idea",function(){var a=t(this),e=parseInt(a.attr("data-votes"));e++,a.attr("data-votes",e),a.children(".vote-count").text(e),console.log(e)})}(window,jQuery),!function(a,t){"use strict";var e=["D32E46","FA522B","FAA02B","FAC72B","FAEE2B"];e[Math.floor(Math.random()*e.length)],t(".create-event").on("click",function(){var a=t(".event-name").val(),e=t(".event-planner").val();return t(".create-event-form").fadeOut("slow"),t(".room-wrapper").fadeIn("slow"),t(".room-name").html(a+" <small>organised by "+e+"</small>"),!1}),t(".add-idea").on("click",function(){var a=t(".idea-name"),o=a.val();return t(".room").append('<div class="lunch-idea" data-votes="0" style="background-color: #'+e[Math.floor(Math.random()*e.length)]+'">'+o+' <br />+<span class="vote-count">0</span></div>'),a.val(""),!1}),t(".room").on("click",".lunch-idea",function(){var a=t(this),e=parseInt(a.attr("data-votes"));e++,a.attr("data-votes",e),a.children(".vote-count").text(e),console.log(e)})}(window,jQuery),!function(a,t){"use strict";var e=["D32E46","FA522B","FAA02B","FAC72B","FAEE2B"];e[Math.floor(Math.random()*e.length)],t(".create-event").on("click",function(){var a=t(".event-name").val(),e=t(".event-planner").val();return t(".create-event-form").fadeOut("slow"),t(".room-wrapper").fadeIn("slow"),t(".room-name").html(a+" <small>organised by "+e+"</small>"),!1}),t(".add-idea").on("click",function(){var a=t(".idea-name"),o=a.val();return t(".room").append('<div class="lunch-idea" data-votes="0" style="background-color: #'+e[Math.floor(Math.random()*e.length)]+'">'+o+' <br />+<span class="vote-count">0</span></div>'),a.val(""),!1}),t(".room").on("click",".lunch-idea",function(){var a=t(this),e=parseInt(a.attr("data-votes"));e++,a.attr("data-votes",e),a.children(".vote-count").text(e),console.log(e)})}(window,jQuery),!function(){"use strict";console.log("test")}(window,jQuery);