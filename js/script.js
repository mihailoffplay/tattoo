//Бегущая строка
$(function() {
    $('.banner').marquee({
      duration: 7000,
      startVisible: true,
      duplicated: true
    });
  });

//Burger menu
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active'),
    document.querySelector('.menu').classList.toggle('active');
});  

//Modal window (popup)
$('[data-modal=feedback]').on('click', function() {
  $('.overlay, #feedback').fadeIn('slow');
  });
  $('.modal_close').on('click', function(){
      $('.overlay, #feedback').fadeOut('slow');
});
