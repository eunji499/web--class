       document.addEventListener("DOMContentLoaded",function(){ //문서가 모두 로드된 후에 실행되는 이벤트를 등록하는 메서드
            btn1.addEventListener("click",function(){
                alert("안녕하세요~");
            }); //태그에 클릭 이벤트를 등록하는 메서드

            const btu2 = document.querySelector("#btn2");

            const box = document.querySelector(".box");
            btu2.addEventListener("click",function(){
                box.style.backgroundColor = "skyblue";
            }); //태그에 배경 색을 넣는 이벤트를 등록하는 메서드

            const btu3 = document.querySelector("#btn3");
            btu3.addEventListener("click",function(){
                box.style.backgroundColor = "initial";
            }); //태그에 배경 색을 지우는 이벤트를 등록하는 메서드

            let baseFontSize = 20; //글씨의 기본 크기
            let minFontSize = 15; //글씨의 최소 크기
            let maxFontSize = 30; //글씨의 최대 크기
            const chip = document.querySelector(".chip"); //글씨의 크기를 보여주는 칩을 선택하는 코드

            const btnSmallFont = document.querySelector("#btn-small-font");//글씨 - 버튼을 선택하는 코드
            const html = document.querySelector("html");//html 태그를 선택하는 코드 / 글씨의 크기를 조절하기 위해 html 태그를 선택하는 코드

            btnSmallFont.addEventListener("click",function(){
                if(baseFontSize<=minFontSize){ 
                    alert(`${minFontSize}픽셀 보다 줄어들 수 없습니다.`);
                return} //글씨의 크기가 최소 크기보다 작아지는 것을 방지하는 코드
                baseFontSize -=1 //글씨의 크기를 1씩 줄이는 코드
                chip.innerHTML = `${baseFontSize}px`;
                html.style.fontSize = `${baseFontSize}px`; //글씨의 크기를 줄이는 이벤트를 등록하는 메서드
            });

            const btnLargeFont = document.querySelector("#btn-large-font");//글씨 + 버튼을 선택하는 코드
            btnLargeFont.addEventListener("click",function(){
                if(baseFontSize>=maxFontSize){
                    alert(`${maxFontSize}픽셀 보다 커질 수 없습니다.`)}
                baseFontSize +=1 //글씨의 크기를 1씩 늘리는 코드
                chip.innerHTML = `${baseFontSize}px`;
                html.style.fontSize = `${baseFontSize}px`; //글씨의 크기를 늘리는 이벤트를 등록하는 메서드
            });

            const btnDefaultFont = document.querySelector("#btn-default-font");//기본크기 버튼을 선택하는 코드
            btnDefaultFont.addEventListener("click",function(){
                baseFontSize = 20; //글씨의 크기를 기본 크기로 초기화하는 코드
                chip.innerHTML = `${baseFontSize}px`;
                html.style.fontSize = `${baseFontSize}px`; //글씨의 크기를 기본 크기로 초기화하는 이벤트를 등록하는 메서드
            });
        });


