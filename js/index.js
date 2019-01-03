$(function(){
    $('#img').click(function(){
        $(this).toggleClass('max');
        $('.company').css('opacity','0.5');
        $(this).toggleClass('min');
        $('.company').css('opacity','1');
    })
    
    $('#submit').on('click',function(){
        $.ajax({
            type:'get',
            data:$('#form').serialize(),
            url:'form.json',
            dataType:'json',
        })
    })
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', 
        loop: true, // 循环模式选项
        autoplay:{
            disableOnInteraction: false,
        },
        speed:300,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        

      })   
})