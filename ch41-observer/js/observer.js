document.addEventListener("DOMContentLoaded",()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                //태그가 화면에 들어왔을 때
                entry.target.classList.add("on")
            }
            else{
                //태그가 화면 밖으로 나갔을 때
                entry.target.classList.remove("on")
            }
        })
    },{
        threshold:0.5 // 태그가 화면에 50%이상 보일 때 트리거
    })
    document.querySelectorAll(".ltr,.blur").forEach(tag=>{observer.observe(tag)}) // 위에는 복사해서쓰고 이것만 고치면됨
})
