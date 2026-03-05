document.addEventListener("DOMContentLoaded",()=>{
    const btnNest = document.querySelector("#btn-next")
    const train = document.querySelector(".train")
    const btnPrev =document.querySelector("#btn-prev")
    
    let count = 0
    let slides = train.children.length //리스트의 갯수
    train.style.width =`${100*slides}%`

    btnNest.addEventListener("click",()=>{
        count++
        if(count>slides-1){count=slides-1}
    //train 클래스가 왼쪽으로 1000픽셀 씩 이동 
        train.style.transform =`translateX(${-(100/slides)*count}%)`
    });

    btnPrev.addEventListener("click",()=>{
        count--
        if(count<0){count=slides-1}
        train.style.transform = `translateX(${-(100/slides)*count}%)`
    })




});

//스와이퍼 JS