document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.querySelector('.btn-menu');
    const btnClose = document.querySelector('.btn-menu-close');
    const hidenGnb = document.querySelector('.hidenGnb');

    // 메뉴버튼을 누르면 숨겨진 메뉴가 나오는 기능
    btnMenu.addEventListener('click', function() {
        //hiddenGnb에 on클래스가 추가되면 메뉴가 나오게 되어 있음.
        hidenGnb.classList.add("on");});

    // 닫기버튼을 누르면 숨겨진 메뉴가 사라지는 기능
    btnClose.addEventListener('click', function() {
        //hiddenGnb에 on클래스가 제거되면 메뉴가 사라지게 되어 있음.
        hidenGnb.classList.remove("on");});
});