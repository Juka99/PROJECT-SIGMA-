// Skrolovanje menija

$(window).scroll(function(){
    const scroll = $(window).scrollTop();
    if(scroll > 50){
        $('nav').css('background','#0c0c0c');
        $('nav').css('padding','2% 0%');
    }

    else{
        $('nav').css('background','transparent');
        $('nav').css('padding','3% 0%');
    }
});

// Kraj skrolovanja menija

$(document).ready(function(){

    $('.trigger').on('click',function(){
        $('.side').toggleClass('side1');
    });

    $('.clos').on('click',function(){
        $('.side').toggleClass('side1');
    });

    $('.pulse').on('click',function(){
        $('.change').html('hajde');
    });

    $('.activInter').on('click',function(){
        $('.inter').toggleClass('inter2');
        $(this).toggleClass('activInter1');
        $('.cirInter').toggleClass('cirInter1');
        $('.staticRight').toggleClass('staticRight1');
    });

    $('.colorChanger').on('click',function(){
        $(this).toggleClass('colorChanger1');
    });

    $('.cu1').on('click',function(){
        $(this).css('background', 'rgb(241, 95, 27)');
        $('.cu2').css('background', 'whitesmoke');
        $('.cu3').css('background', 'whitesmoke');
        $('.klas1').css('top', '0px');
        $('.klas2').css('top', '300px');
        $('.klas3').css('top', '600px');
    });

    $('.cu2').on('click',function(){
        $(this).css('background', 'rgb(241, 95, 27)');
        $('.cu1').css('background', 'whitesmoke');
        $('.cu3').css('background', 'whitesmoke');
        $('.klas2').css('top', '0px');
        $('.klas1').css('top', '-300px');
        $('.klas3').css('top', '300px');
    });

    $('.cu3').on('click',function(){
        $(this).css('background', 'rgb(241, 95, 27)');
        $('.cu1').css('background', 'whitesmoke');
        $('.cu2').css('background', 'whitesmoke');
        $('.klas3').css('top', '0px');
        $('.klas1').css('top', '-600px');
        $('.klas2').css('top', '-300px');
    });

});

$(window).scroll(function () {
    var hT = $('#colGet1').offset().top,
      hH = $('#colGet1').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
      $('.make').css('opacity', '1');
    }
  });