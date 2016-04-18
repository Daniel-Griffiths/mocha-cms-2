$(function(){

	initialize();
  
/* 
|-------------------------------------------------------
| Ajax Page Loading
|-------------------------------------------------------
*/ 
 
	function loadUrl(url){ 
		history.pushState(null, null, url); 
		$('#container-load').load(url + ' #container-load ');
	}

	/* navigate when pressing the back and forwards browser buttons */
	window.onpopstate =  function(event) {
		loadUrl(window.location.pathname.substr(7)); 
	};

	/* load the new page content */
	$('a:not(.no-ajax)').click(function(event){
		event.preventDefault();

		var url = $(this).attr('href');

		/* specifically for logout redirect the user */
		if(url == 'logout' || url == '/'){
			window.location.href = url;
		} else {
			loadUrl(url);	
		}
	});

	/* re-trigger certain js events */
	$(document).ajaxComplete(function(){
		initialize();
	});

/*
|-------------------------------------------------------
| Active Navigation
|-------------------------------------------------------
*/

	$('.sidebar__link').click(function(){
		$('.sidebar__link').removeClass('sidebar__link--active');
		$(this).addClass('sidebar__link--active'); 
	});

/*
|-------------------------------------------------------
| Toast Notifactions
|-------------------------------------------------------
*/

function toast(text, color){

	/* remove existing toast popups */
	$(".toast-notifaction").remove();

	if (!color){
		$("body").append("<div class='toast-notifaction'>" + text + "</div>");
	} else {
		$("body").append("<div style='background:" + color + "' class='toast-notifaction'>" + text + "</div>");
	}

	/* add remove toast click handler */
	$(".toast-notifaction").click(function() {
		$(this).hide();
	});

	/* fadein the new toast popup */
	$(".toast-notifaction")
	.fadeIn("fast")
	.delay(5000)
	.fadeOut();
}

/*
|-------------------------------------------------------
| Edit Content
|-------------------------------------------------------
*/

	$('.save-content').on('click',function(e){

		e.preventDefault();
 
		$.ajax({
            type: "POST",
            url: "save-content",
            data: $('.save-content-form').serialize(),
        }).done(function(responce){ 
			toast(responce);
		});
	});

/*
|-------------------------------------------------------
| Wysiwyg Editor
|-------------------------------------------------------
*/

	function initialize(){ 
	
		tinymce.init({  
			selector:'#editor',
			height : 300,
			plugins: 'table,link,preview,fullscreen,image,wordcount,spellchecker,code',
		}); 

/*
|-------------------------------------------------------
| Data Tables
|-------------------------------------------------------
*/

		//$('.table-list').DataTable();

/*
|-------------------------------------------------------
| Edit Menu
|-------------------------------------------------------
*/
 

		$('#sortable-menu').nestedSortable({
			update: function () {
				list = $('#sortable-menu').nestedSortable('toArray');
				console.log(list);
			}
		});

  } //end initialise
 
}); //end document