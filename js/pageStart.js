let pages = [];

fetch('./js/pages.json').then(response => {
    return response.json();
}).then(data => {
    pages = data.pages;
})

function welcome(){
    document.getElementById("startText").classList.add("start-text-remove");

    let welcomeDiv = document.getElementById("welcome");
    let page = document.getElementById("page");

    welcomeDiv.classList.add("menu-state")
    page.classList.add("page-state")

    setTimeout(() => {
        createLogoLetters();
    }, 4500); //has to be the same amount of time it takes for the opening animation to finish
}

function createLogoLetters(){
    let welcome = [
        {
            "letter": "W",
            "color": "yellow",
            "direction": "top",
        },
        {
            "letter": "E",
            "color": "green",
            "direction": "right",
        },
        {
            "letter": "L",
            "color": "blue",
            "direction": "bottom",
        },
        {
            "letter": "C",
            "color": "red",
            "direction": "left",
        },
        {
            "letter": "O",
            "color": "purple",
            "direction": "top",
        },
        {
            "letter": "M",
            "color": "orange",
            "direction": "right",
        },
        {
            "letter": "E",
            "color": "yellow",
            "direction": "bottom",
        }
    ];

    let logoDiv = document.getElementById("logoDiv");


    for(let i = 0; i < welcome.length; i++){
        console.log(welcome[i].letter);
        let logoLetter = document.createElement("div");

        logoLetter.classList.add("logo-letter");

        logoLetter.innerHTML = welcome[i].letter;
        logoLetter.style.backgroundColor = welcome[i].color;

        setTimeout(function(){
            console.log('animating');
            logoLetter.classList.add("logo-letter-anim-" + welcome[i].direction);
        }, 500 * i);

        logoDiv.appendChild(logoLetter);

        setTimeout(function(){
            logoLetter.classList.add("logo-letter-anim-fly-up");
        }, 500 * i + 2000);
    }

    setTimeout(() => {
        logoDiv.remove();
        document.getElementById("startText").remove();

        createHomeScreen();
    },9000);
}

function createHomeScreen(){    
    let pageButtonDiv = document.getElementById("pageButtonDiv");

    homeScreen = true;

    document.getElementById("swipeCommand").style.opacity = 1;

    for(let i = 0; i < pages.length; i++){
        setTimeout(() => {
            let pageButton = document.createElement("div");
            pageButton.classList.add("page-button");
            pageButton.innerHTML = pages[i].name;

            pageButtonDiv.appendChild(pageButton);

            setTimeout(() => {
                pageButton.classList.add("page-button-idle");
            }, 250 * i);
        }, 250 * i);
    }
}