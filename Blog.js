$(document).ready(function() {
  $('.icon-menu').click(function(){
    $('.menu').animate({
      left: '0px'
    },200);
        
    $('body').animate({
      left:'285px'
    },200);
  });
    
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
});

$(document).ready(function(){
	$('#scroll').click(function(){
		$('html,body').animate({
			scrollTop:0
		});
	});
});

$(window).scroll(function(){
	if($(window).scrollTop() > 200){
		$('#scroll').show()
	}
	else{
		$('#scroll').hide()
	}
});

