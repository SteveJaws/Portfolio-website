let touchStartX = 0;
let touchEndX = 0;

let homeScreen = false;

document.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
});

document.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50 && homeScreen) { // Adjust the threshold
        document.getElementById("swipeCommand").style.opacity = 0;
    }
}


document.getElementById("pageButtonDiv").addEventListener("scroll", (() => {
    if(homeScreen){
        document.getElementById("swipeCommand").style.opacity = 0;
    }
}));