function clickedPageButton(page){
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

