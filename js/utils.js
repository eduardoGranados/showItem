/**
 * Created by Granados on 31/07/14.
 */

FastClick.attach(document.body);


//MANERA LENTA --> para comparar
$.fn.draggableSlow = function() {
    var offset = null;
    var start = function(e) {
        $(this).css({
            'transition-duration' : '0s',
            '-webkit-transition-duration' : '0s',
            '-moz-transition-duration' : '0s'
        });
        var orig = e.originalEvent;
        var pos = $(this).position();
        offset = {
            x: orig.changedTouches[0].pageX - pos.left,
            y: orig.changedTouches[0].pageY - pos.top
        };
    };
    var moveMe = function(e) {
        e.preventDefault();
        var orig = e.originalEvent;
        $(this).css({
            top: orig.changedTouches[0].pageY - offset.y,
            left: orig.changedTouches[0].pageX - offset.x
        });
    };
    var end = function(e) {
        //do nothing
    };
    //NOTA>dejar solo los eventos 'touch' en una app terminada
    this.bind("touchstart mousedown", start);
    this.bind("touchmove mousemove", moveMe);
    this.bind("touchend mouseup", end);
};

//MANERA FLUIDA --> forzamos aceleracion gpu con 'translate3d'
$.fn.draggableFast = function() {
    var offset = null;

    var start = function(e) {
        $(this).css({
            'transition-duration' : '0s',
            '-webkit-transition-duration' : '0s',
            '-moz-transition-duration' : '0s'
        });
        var orig = e.originalEvent;
        var pos = $(this).position();

        offset = {
            x: orig.changedTouches[0].pageX - pos.left,
            y: orig.changedTouches[0].pageY - pos.top
        };
    };
    var moveMe = function(e) {
        e.preventDefault();
        var orig = e.originalEvent;
        var X = ((orig.changedTouches[0].pageX));
        var Y = ((orig.changedTouches[0].pageY));
        //NOTA> prefijo -moz- es para que se vea en firefox, en una app terminada no deberia ir.
        $(this).css({
            'transition-timing-function': 'ease',
            '-webkit-transition-timing-function': 'ease',
            '-moz-transition-timing-function': 'ease',
            '-ms-transition-timing-function': 'ease',
            '-webkit-transform':'translate3d('+ (X - offset.x)+'px,'+(Y - offset.y)+'px,0px)',
            '-moz-transform':'translate3d('+ (X - offset.x)+'px,'+(Y - offset.y)+'px,0px)',
            '-ms-transform':'translate3d('+ (X - offset.x)+'px,'+(Y - offset.y)+'px,0px)',
            'transform':'translate3d('+ (X - offset.x)+'px,'+(Y - offset.y)+'px,0px)'
        });
    };
    var end = function(e) {
        //do nothing
    };
    //NOTA>dejar solo los eventos 'touch' en una app terminada
    this.bind("touchstart mousedown", start);
    this.bind("touchmove mousemove", moveMe);
    this.bind("touchend mouseup", end);
};

var draggable_area = $("#drag-container");
draggable_area.draggableSlow();


$('#slow-click').click(function(){
    draggable_area.css({
        top: 0,
        left: 0,
        '-webkit-transform':'translate3d(0px,0,0px)',
        '-moz-transform':'translate3d(0px,0,0px)',
        '-ms-transform':'translate3d(0px,0,0px)',
        'transform':'translate3d(0px,0,0px)'
    });
    draggable_area.unbind("touchstart mousedown");
    draggable_area.unbind("touchmove mousemove");
    draggable_area.unbind("touchend mouseup");
    draggable_area.draggableSlow();
});
$('#fast-click').click(function(){
    draggable_area.css({
        top: 0,
        left: 0,
        '-webkit-transform':'translate3d(0px,0,0px)',
        '-moz-transform':'translate3d(0px,0,0px)',
        '-ms-transform':'translate3d(0px,0,0px)',
        'transform':'translate3d(0px,0,0px)'
    });
    draggable_area.unbind("touchstart mousedown");
    draggable_area.unbind("touchmove mousemove");
    draggable_area.unbind("touchend mouseup");
    draggable_area.draggableFast();
});

//ejemplo para animar algo

$('#animate').click(function(){
    //cuanto tiempo dura la animación
    draggable_area.css({
        'transition-duration' : '400ms',
        '-webkit-transition-duration' : '400ms',
        '-moz-transition-duration' : '400ms',
        '-ms-transition-duration' : '400ms'
    });

    //ANIMACIONES >
    draggable_area.css({
        //Mover
//        '-webkit-transform':'translate3d(200px,250px,0px)','-moz-transform':'translate3d(200px,250px,0px)','transform':'translate3d(200px,250px,0px)'
        //Escalar
//        '-webkit-transform':'scale3d(2,2,0)','-moz-transform':'scale3d(2,2,0)','transform':'scale3d(2,2,0)'
        //Rotar
        '-webkit-transform':'rotateY(180deg)','-moz-transform':'rotateY(180deg)','transform':'rotateY(180deg)'
    });

    //descomentar aqui tambien dependiendo de la animación
    draggable_area.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(e) {
        draggable_area.css({
            //Mover
//            '-webkit-transform':'translate3d(0px,0px,0px)','-moz-transform':'translate3d(0px,0px,0px)','transform':'translate3d(0px,0px,0px)',
            //Escalar
//            '-webkit-transform':'scale3d(1,1,0)','-moz-transform':'scale3d(1,1,0)','transform':'scale3d(1,1,0)',
            //Rotar
            '-webkit-transform':'rotateY(0deg)','-moz-transform':'rotateY(0deg)','transform':'rotateY(0deg)'
        });
    });
});


$('#show-item').click(function(){
    $('#item-display').css({
        '-webkit-transform':'translate3d(0,0,0)','-moz-transform':'translate3d(0,0,0)','-ms-transform':'translate3d(0,0,0)','transform':'translate3d(0,0,0)'
    });
});
$('#close-display').click(function(){
    $('#item-display').css({
        '-webkit-transform':'translate3d(0,100%,0)','-moz-transform':'translate3d(0,100%,0)','-ms-transform':'translate3d(0,100%,0)','transform':'translate3d(0,100%,0)'
    });
});

var bandera= 0;
$('#item-flipper').click(function(){
    if(bandera == 0){
        $('#item-image').css({

            '-webkit-transform': 'rotateY(-180deg)','-moz-transform': 'rotateY(-180deg)','-ms-transform': 'perspective(1000px) rotateY(180deg)'
        });
        $('#item-text').css({

            '-webkit-transform': 'rotateY(0deg)','-moz-transform': 'rotateY(0deg)','-ms-transform': 'perspective(1000px) rotateY(0deg)'
        });
        bandera=1;
    }else{
        $('#item-image').css({

            '-webkit-transform': 'rotateY(0deg)','-moz-transform': 'rotateY(0deg)','-ms-transform': 'perspective(1000px) rotateY(0deg)'
        });
        $('#item-text').css({

            '-webkit-transform': 'rotateY(180deg)','-moz-transform': 'rotateY(180deg)','-ms-transform': 'perspective(1000px) rotateY(-180deg)'
        });

        bandera=0;
    }
});


