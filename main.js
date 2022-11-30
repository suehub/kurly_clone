// 상단 nav 고정
function navgo() {
    const header = document.querySelector(".HeaderWrapper"); // 헤더분획득
    const headerheight = header.clientHeight; //헤더높이
    document.addEventListener("scroll", (e) => {
        const scrollposition = pageYOffset; // 스크롤 위치
        const nav = document.querySelector(".navWrapper");
        if (headerheight <= scrollposition) {
        // 헤더 높이 <= 스크롤 위치면
        nav.classList.add("fix"); // fix 클래스를 nav 에 추가
        } else {
        nav.classList.remove("fix");
        }
    });
}

navgo();

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidePerView: 1,
    loop: true,

    autoplay: { 
        delay: 2500,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});

