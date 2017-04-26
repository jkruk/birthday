// JavaScript Document

$(document).ready(function() {



var height=$("div.myspin_piclist").find("li").width();
$("div.myspin_piclist").find("li").css("height",height);

var $imgs=$('li','#slide_container');
var $dots=$('li','#slide_dot');
$dots.eq(0).addClass('active');
$imgs.addClass('img_none');
$imgs.eq(0).addClass('img_now');

var i=0;

var timer=setInterval(function(){
	if(i==$dots.length){
		i=0;
		}
	
	$dots.removeClass('active');
	$dots.eq(i).addClass('active');
	$imgs.removeClass('img_now');
	$imgs.eq(i).addClass('img_now');
	i++;
	
	},3000);

$dots.click(function(){
	var index=$(this).index();
	i=index;
	$dots.removeClass('active');
	$(this).addClass('active');
	
	$imgs.removeClass('img_now');
	$imgs.eq(index).addClass('img_now');
	
	});


//ready   
});

