window.addEventListener('DOMContentLoaded', function() {
    //modal window
  let btnTour = document.querySelector('.main_btna'), //выбрать тур
      btnConsult = document.querySelector('.main_btn'), //получить консультацию
      btnRasTour = document.getElementsByTagName('li')[7],
      overlay = document.querySelector('.overlay'),
      modal = document.querySelector('.modal'),
      closeModel = document.querySelector('.close');

    /*console.log(btnTour);
    console.log(btnConsult);
    console.log(btnRasTour);
    console.log(overlay);
    console.log(modal);
    console.log(closeModel);*/

    $('.main_btna, .main_btn').click(function(){
        $('.overlay').fadeIn(2000);
        overlay.style.display = 'block';  
        $('.modal').slideToggle("slow");
        modal.style.display = 'block'; 
    });

    btnRasTour.addEventListener('click', function(){
        overlay.style.display = 'block';
        modal.style.display = 'block';
    });
 
    $('.overlay, .close').click(function(){
        $('.overlay').fadeOut(500);
        $('.modal').slideToggle("slow");
    });




});