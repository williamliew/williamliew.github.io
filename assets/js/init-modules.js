// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {
	$(function() {
		// Init navigation
		$('#nav').ui_navigation();

		// Init carousel
		$('.carousel-static').ui_carousel({ pageSize: 2 });

		// Init tabs
		$('.ui-tab-control').ui_tabs();

		// init dropdown
		$('.ui-dropdown-wrapper').ui_dropdown();

		// init lightbox
		$('#trigger-lightbox').ui_lightbox({
			lightboxClass: 'ui-lightbox-mvc'
		});
		
		$('.ui-modal-trigger').ui_modal();
		
		$('.ui-dropdown-wrapper').ui_dropdown({
			triggerevent: 'click',
			fx: 'fade'
		});		

		// init input limiter
		$('#input-limiter-textbox').ui_input_limiter({
			limit : 10,
			displayAt : 4
		});

		$('#input-limiter-textarea').ui_input_limiter({
			limit : 30,
			displayAt : 0
		});


		// init accordion
		$('.ui-accordion-simple').ui_accordion();

		// init accordion
		$('.ui-accordion-large').ui_accordion();

		// slideshow
		steal(
			'plugins/slideshow/slideshow.min.js',
			function() {
				$('.ui-slideshow-jmvc').jmvc_slideshow({
					selectors : {
						slide : '.ui-slideshow-slide',
						pagerItem : '.ui-slideshow-pager-item',
						pagerWrapper : '.ui-slideshow-pager-wrapper',
						control : '.ui-slideshow-control'
					},
					width : 920,
					height : 390,
					delay : 3,
					stopOnTrigger : true,
					continuous : true,
					pager : true
				});
			}
		);

		/**
		 * Twitter stuff
		 */
		// Disable certain links in docs
		$('section [href^=#]').click(function (e) {
			e.preventDefault()
		})

		// make code pretty
		window.prettyPrint && prettyPrint()

		// add-ons
		$('.add-on :checkbox').on('click', function () {
			var $this = $(this)
				, method = $this.attr('checked') ? 'addClass' : 'removeClass'
			$(this).parents('.add-on')[method]('active')
		})

		// position static twipsies for components page
		if ($(".twipsies a").length) {
			$(window).on('load resize', function () {
				$(".twipsies a").each(function () {
					$(this)
						.tooltip({
							placement: $(this).attr('title')
						, trigger: 'manual'
						})
						.tooltip('show')
					})
			})
		}

		// add tipsies to grid for scaffolding
		if ($('#grid-system').length) {
			$('#grid-system').tooltip({
					selector: '.show-grid > div'
				, title: function () { return $(this).width() + 'px' }
			})
		}

		// fix sub nav on scroll
		var $win = $(window)
			, $nav = $('.subnav')
			, navTop = $('.subnav').length && $('.subnav').offset().top - 40
			, isFixed = 0

		processScroll()

		// hack sad times - holdover until rewrite for 2.1
		$nav.on('click', function () {
			if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10)
		})

		$win.on('scroll', processScroll)

		function processScroll() {
			var i, scrollTop = $win.scrollTop()
			if (scrollTop >= navTop && !isFixed) {
				isFixed = 1
				$nav.addClass('subnav-fixed')
			} else if (scrollTop <= navTop && isFixed) {
				isFixed = 0
				$nav.removeClass('subnav-fixed')
			}
		}

		// javascript build logic
		var inputsComponent = $("#components.download input")
			, inputsPlugin = $("#plugins.download input")
			, inputsVariables = $("#variables.download input")

		// toggle all plugin checkboxes
		$('#components.download .toggle-all').on('click', function (e) {
			e.preventDefault()
			inputsComponent.attr('checked', !inputsComponent.is(':checked'))
		})

		$('#plugins.download .toggle-all').on('click', function (e) {
			e.preventDefault()
			inputsPlugin.attr('checked', !inputsPlugin.is(':checked'))
		})

		$('#variables.download .toggle-all').on('click', function (e) {
			e.preventDefault()
			inputsVariables.val('')
		})

		// request built javascript
		$('.download-btn').on('click', function () {

			var css = $("#components.download input:checked")
						.map(function () { return this.value })
						.toArray()
				, js = $("#plugins.download input:checked")
						.map(function () { return this.value })
						.toArray()
				, vars = {}
				, img = ['glyphicons-halflings.png', 'glyphicons-halflings-white.png']

		$("#variables.download input")
			.each(function () {
				$(this).val() && (vars[ $(this).prev().text() ] = $(this).val())
			})

			$.ajax({
				type: 'POST'
			, url: /\?dev/.test(window.location) ? 'http://localhost:3000' : 'http://bootstrap.herokuapp.com'
			, dataType: 'jsonpi'
			, params: {
					js: js
				, css: css
				, vars: vars
				, img: img
			}
			})
		})
	})

// Modified from the original jsonpi https://github.com/benvinegar/jquery-jsonpi
$.ajaxTransport('jsonpi', function(opts, originalOptions, jqXHR) {
	var url = opts.url;

	return {
		send: function(_, completeCallback) {
			var name = 'jQuery_iframe_' + jQuery.now()
				, iframe, form

			iframe = $('<iframe>')
				.attr('name', name)
				.appendTo('head')

			form = $('<form>')
				.attr('method', opts.type) // GET or POST
				.attr('action', url)
				.attr('target', name)

			$.each(opts.params, function(k, v) {

				$('<input>')
					.attr('type', 'hidden')
					.attr('name', k)
					.attr('value', typeof v == 'string' ? v : JSON.stringify(v))
					.appendTo(form)
			})

			form.appendTo('body').submit()
		}
	}
})

}(window.jQuery)