$(document).click(function(){

$('.next').click(function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();


    var len = nextImg.length;
    if(len > 0){
        currentImg.removeClass('active');
        nextImg.addClass('active');
    }
 });


$('.prev').click(function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();


    var len = prevImg.length;
    if(len > 0){
        currentImg.removeClass('active');
        prevImg.addClass('active');
    }
 });
});