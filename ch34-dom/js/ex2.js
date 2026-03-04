document.addEventListener("DOMContentLoaded", function() {
    const butNo = document.querySelector(".btn-no");
    const popup = document.querySelector(".popup");
    const modal = document.querySelector(".modal");
    butNo.addEventListener("click", function() {
        popup.classList.add("blind");
        modal.classList.add("blind");
});
    modal.addEventListener("click", function() { 
        popup.classList.add("blind");
        this.classList.add("blind"); // this는 modal을 가리킴
});
});