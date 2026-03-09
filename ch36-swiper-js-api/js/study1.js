document.addEventListener("DOMContentLoaded",function(){

    const swiper = new Swiper('.station', {
        direction:`vertical`,
        loop:true,
        slidesPerView:2,
        spaceBetween:"20px",
        speed:500
    });
    const swiper2 = new Swiper('.station2', {
        direction:`horizontal`,
        loop:true,
        slidesPerView:1,
        spaceBetween:"10px",
        speed:500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
    });
   const swiper3 = new Swiper(".station3", {
        direction:`horizontal`,
        loop:true,
        slidesPerView:1,
        spaceBetween:"10px",
        speed:500,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    })
    });

