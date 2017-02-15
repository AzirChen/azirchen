$(window).scroll(function(){
var wintop = $(window).scrollTop(), docheight = 
    
    $(document).height(), winheight = $(window).height();
            var scrolled = (wintop/(docheight-winheight))*100;
  
        $('.scroll-line').css('width', (scrolled + '%'));
});

/*$(document).ready(function () {
	$(".about").click(function () {
	  $("html,body").animate(function(){
	  	scrollTop:$("#about").offset().top },
	  	{duration:500,easing:"swing"});
	  // return false;
	});
	$(".skill").click(function () {
	  $("html,body").animate(function(){
	  	scrollTop:$("#skill").offset().top },
	  	800);
	  return false;
	});
	$(".article").click(function () {
	  $("html,body").animate(function(){
	  	scrollTop:$("#article").offset().top },
	  	800);
	  return false;
	});
	$(".contact").click(function () {
	  $("html,body").animate(function(){
	  	scrollTop:$("#contact").offset().top },
	  	800);
	  return false;
	});
});
*/
