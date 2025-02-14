let pages = [];

let pageButtons = [];

function createHomeScreen(firstTime = true){    
    homeScreen = true;

    if(firstTime == true){
        swipeCommand = document.createElement("div");

        swipeCommand.classList.add("swipe-command");
    
        swipeCommand.innerHTML = "";
    
        swipeCommand.id = "swipeCommand";
    
        document.getElementById("home").appendChild(swipeCommand);
    }

    pageButtons = [];

    for(let i = 0; i < pages.length; i++){
        let pageButton = document.createElement("div");

        pageButtons.push(pageButton);

        pageButton.classList.add("page-button");
        pageButton.innerHTML = pages[i].name;
        pageButton.style.backgroundColor = pages[i].color;
        pageButton.style.color = "white";

        pageButton.addEventListener("click", () => {
            clickedPageButton(pages[i]);
        });

        console.log(pageButtons.length);

        if(pageButtons.length == pages.length){
            createHomeButtons(pageButtons);
        }
    }
}

function createHomeButtons(pageButtonsArray){
    for(let i = 0; i < pageButtonsArray.length; i++){
        document.getElementById("pageButtonDiv").appendChild(pageButtonsArray[i]);

        setTimeout(() => {
            setTimeout(() => {
                pageButtonsArray[i].classList.add("page-button-idle");
            }, 250 * i);
        },1000)
    }
}

function clickedPageButton(page){
    homeScreen = false;

    for(let i = 0; i < pageButtons.length; i++){
        setTimeout(() => {
            pageButtons[i].classList.add("page-button-remove");
        }, 250 * i);
    }

    setTimeout(() => {
        openPage(page);
    }, 1000);

    setTimeout(() => {
        for(let i = 0; i < pageButtons.length; i++){
            pageButtons[i].remove();
        }
    }, 5000);
}

