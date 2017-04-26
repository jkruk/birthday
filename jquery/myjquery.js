// JavaScript Document

$(document).ready(function(){
var yamadate=new Date();
$('#yamadate').html(yamadate.getFullYear());
$('body').css({'opacity':'1'});
$('#home1').css({'height':$(window).height()});
$('#nav').css({'top':-($('#menulist').height()+1)});

$('#play_video').click(function(){
	
	if($(this).hasClass('pv_en')){
		
		$(this).after('	<div id="video_zone"><iframe src="https://player.vimeo.com/video/12130156?autoplay=1&color=f5f8fa&title=0&byline=0&portrait=0&loop=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
		
		}else if($(this).hasClass('pv_jp')){
			
			$(this).after('	<div id="video_zone"><iframe src="https://player.vimeo.com/video/12130156?autoplay=1&color=f5f8fa&title=0&byline=0&portrait=0&loop=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
			
			}
	
	$('#video_zone').click(function(){
	
	$(this).remove();
	
	});
	
	});

/*--------sound---------------*/	
var menu_audio = $('#menuSound')[0];
var ja_audio=$('#jaSound')[0];

$('.artclose').click(
    function(){
	menu_audio.play();
	});
	
/*$('.ja').click(
     function(){
	ja_audio.play();
	}
	);
*/
/*--------------------------------*/
var toggled = 0;
function burg(){
$('.artclose').click(function(){
  if(toggled==0){
	  $('.burgx').css({'transform':'rotate(-135deg)','margin-top':'7px'});
	  $('.burgx2').css({'opacity':'0'});
	  $('.burgx3').css({'transform':'rotate(135deg)','margin-top':'7px'});
	  $('#nav').css({'top':'0'});
	  
	  if($('#slogan').css('display','blcok')){
		  $('#slogan').css('opacity',0);
		  $('#menulogo').css('opacity',1);
		  }
	toggled++;
  }
  else{
      $('.burgx').css({'transform':'rotate(-180deg)','margin-top':'0px'});
	  $('.burgx2').css({'opacity':'1'});
	  $('.burgx3').css({'transform':'rotate(180deg)','margin-top':'14px'});
	  $('#nav').css({'top':-($('#menulist').height()+1)});
	  toggled--;
	  if($(window).scrollTop()<=255&&$('title').html()=='YAMA'){//$(window).innerHeight()
		  $('#slogan').css('opacity',1);
		  $('#menulogo').css('opacity',0);
		  }
  }
});
}
var toggled_mo = 0;
function burg_mo(){
	
	$('.artclose_mo').click(function(){
		if(toggled_mo==0){
			  $('.burgx_mo').css({'transform':'rotate(-135deg)','margin-top':'10px'});
	          $('.burgx2_mo').css({'opacity':'0'});
	          $('.burgx3_mo').css({'transform':'rotate(135deg)','margin-top':'10px'});
			 
			  $('#menulist_mo').css({'height':'100%'});
			  $('#menulist_mo').css({'opacity':'1'});
			toggled_mo++;}
		else{
			$('.burgx_mo').css({'transform':'rotate(-180deg)','margin-top':'0px'});
	        $('.burgx2_mo').css({'opacity':'1'});
	        $('.burgx3_mo').css({'transform':'rotate(180deg)','margin-top':'20px'});
	    
			$('#menulist_mo').css({'height':'0'});
			$('#menulist_mo').css({'opacity':'0'});
			toggled_mo--;};
		
		});
	
	}

function menuAnime(){
	
	if($(window).scrollTop()>=255)
	  {
	  $('#slogan').css('opacity',0);
	  $('#menulogo').css('opacity',1);
	  }else{
		  if(toggled!=0&&$(window).scrollTop()<=255)
		  {
			  $('#menulogo').css('opacity',1);
			  $('#slogan').css('opacity',0);
		  }else{
		  $('#slogan').css('opacity',1);
		 $('#menulogo').css('opacity',0);
			   }
		   };

//menuanime		
}

if($('title').html()=='YAMA'){
	$(window).on('scroll',menuAnime);
	menuAnime();
	}


/*----------------------------------------------------*/	
function scrollHidenav(){
	
	var prev_top = 0,
    curr_top = 0;
    $(window).scroll(function() {
    curr_top = $(window).scrollTop();
	
	//$('title').html('cur:'+curr_top+'+'+'prev'+prev_top); 
		
	if (curr_top < prev_top) {
        
		if(toggled != 0){
			
		   
		   $('#nav').css({'top':'0px'});
		   
		   }else{
			   
		   $('#nav').css({'top':-($('#menulist').height()+1)});
		   
			   }
	    }else if(prev_top<=0||curr_top<=0){
			$('#nav').css({'top':-($('#menulist').height()+1)});
			}
		else{
			
           if(toggled != 0){
			   
		   
		   $('#nav').css({'top':'0px'});
		   
		   }else{
			   
		   $('#nav').css({'top':-$('#menulist').height()-$('#menu').height()-30-1});
		   
		   }
		   
    }
	
    setTimeout(function(){ prev_top = curr_top; },0);
});

}

function setLeft(){	
	
	var biggestlogo_time=setTimeout(function(){$('#biggestlogo').css('opacity',1)},1000);
	
	 setTimeout(function(){
   $('#guideline').css('opacity',1);
   var ballani=setInterval(function(){
		$('#guideline').animate({'height':'0','bottom':'0','opacity':'1'},1800,'easeInOutQuart',
		function(){
		$('#guideline').css({'height':'110px','bottom':'100px','opacity':'0'});
		})}
		,1200);
   }
   ,50);
	
}

/*------------------------------------*/
burg();
burg_mo();
scrollHidenav();
setLeft();

})