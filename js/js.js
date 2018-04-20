


 $('#turnToContent').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-153+'px'
            }, 500);
        
        return false;
    });

  $('#turnToContent2').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-194+'px'
            }, 500);
         
        return false;
    });
    $('#turnToContent3').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-153+'px'
            }, 500);
        
        return false;
    });
       $('#turnToContent4').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-153+'px'
            }, 500);
       
        return false;
    });

 
       



        
       	$('#turnToContent').addClass('active');

       	
       $(window).scroll(function() {
       		if($(document).scrollTop()< $('.content3').offset().top - $(window).height()/1.5)/*$('.content3').offset().top*/
       		{
       			$('#turnToContent').addClass('active');
       			$('.nav li .s10').show();
       			
       		}
       		else{
       			$('#turnToContent').removeClass('active');
       			$('.nav li .s10').hide();

       		}
       });


       $(window).scroll(function() {
       		if($(document).scrollTop()> $('.content3').offset().top - $(window).height()/1.5)
       		{
       			$('#turnToContent2').addClass('active');
       			$('.nav li .s11').show();
       		}
       		else{
       			$('#turnToContent2').removeClass('active');
       			$('.nav li .s11').hide();
       		}
       });

       $(window).scroll(function() {
       		if($(document).scrollTop()> $('.content4').offset().top - $(window).height()/1.5)
       		{
       			$('#turnToContent3').addClass('active');
       			$('#turnToContent2').removeClass('active');
       			$('.nav li .s12').show();
       			$('.nav li .s11').hide();
       		}
       		else{
       			$('#turnToContent3').removeClass('active');

       			$('.nav li .s12').hide();
       		}
       });

        $(window).scroll(function() {
       		if($(document).scrollTop()> $('.content5').offset().top - $(window).height()/1.5)
       		{
       			$('#turnToContent4').addClass('active');
       			$('#turnToContent3').removeClass('active');
       			$('.nav li .s13').show();
       			$('.nav li .s12').hide();
       		}
       		else{
       			$('#turnToContent4').removeClass('active');
       			$('.nav li .s13').hide();
       		}
       });
       
     
       
     
 
