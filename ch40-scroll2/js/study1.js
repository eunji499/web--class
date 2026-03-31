document.addEventListener('DOMContentLoaded',()=>{
    const btnTop = document.querySelector('.btn-top');
    btnTop.addEventListener('click',()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    })

    const gnb = document.querySelector(".gnb")

    let lastScrollTop = 0;
    window.addEventListener('scroll',()=>{
        //스크롤 바가 움직일 떄 실행될 소스코드
        const scrollTop = window.pageXOffset || document.documentElement.scrollTop; //호환성을 위해서 만들어 놓은 소스코드
        
        if(scrollTop < lastScrollTop){
            // btnTop.style.display = 'flex';
            btnTop.classList.add("on")
            gnb.classList.add("on")
        }
        else{
            // btnTop.style.display = 'none';
            btnTop.classList.remove("on")
            gnb.classList.remove("on")
        }
        lastScrollTop = scrollTop 
        // <= 0 ? 0 : scrollTop;
    })

})