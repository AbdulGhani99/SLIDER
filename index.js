$(document).ready(function(){

$('.next').click(function(){

    
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    var len = nextImg.length;
    
   
    alert(len);

    if(len > 0){


        currentImg.removeClass('active');
        nextImg.addClass('active');
        }
    // else if(len==0){
    //     $('img:nth-child(0)').addClass=('active');
    //     }
    
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