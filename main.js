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


