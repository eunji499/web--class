document.addEventListener("DOMContentLoaded",()=>{
    const tabs = document.querySelectorAll(".tabs>span")
    const tabsDescriptions = document.querySelectorAll(".tab-descriptions>section")

    tabs.forEach(function(span,i){
        span.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("active"))
            // 일단 3개의 span태그에 있는 active라는 클래스를 다 지운다.

            span.classList.add("active")
            //내가 클릭한 span태그에만 active라는 클래스가 추가됨.
            tabsDescriptions.forEach(section=>section.classList.remove("active"))
            tabsDescriptions[i].classList.add("active") 
        })

    })

    let fruits = ["사과","바나나","배"]
    fruits.forEach(function(fruit,i){
        console.log(fruit)
        console.log(i)
    });
    // forEach는 배열한테만 쓸수있는 코드, fruit(이름자유롭게 사용자가 입력)는 각각의 원소를 가르킴. i는 원소의 순번을 가르킴
    // (원수의 개수 만큼 반복하게됨.)

});