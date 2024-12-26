const section = document.querySelector(".headerStyle") as HTMLElement; 

function checkVisibility(){
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if(isVisible){
        section.classList.add("animate-slide-up");
    }
}

window.addEventListener("scroll", checkVisibility);
checkVisibility(); 