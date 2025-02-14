function openPage(page){
    let pageDiv = document.createElement("div");

    pageDiv.classList.add("page");
    pageDiv.style.backgroundColor = page.color;

    document.getElementById("home").appendChild(pageDiv);

    console.log(page.pageBuilder);

    setTimeout(() => {
        for(let i = 0; i < page.pageBuilder.length; i++){
            if(i == 0){
                let backButton = document.createElement("div");

                backButton.classList.add("back-button");

                backButton.innerHTML = "<-";

                backButton.addEventListener("click", () => {
                    pageDiv.classList.add("close-page");

                    let pageContent = pageDiv.getElementsByTagName("div");

                    for(let i = 0; i < pageContent.length; i++){
                        pageContent[i].style.display = "none";
                    }

                    setTimeout(() => {
                        createHomeScreen(false);
                        pageDiv.remove();
                    },2000)
                });

                pageDiv.appendChild(backButton);
            }

            let pageBlock = document.createElement("div");
    
            pageBlock.classList.add(page.pageBuilder[i].type);

            if(i % 2 == 0){
                pageBlock.classList.add("fly-in-left");
            } else {
                pageBlock.classList.add("fly-in-right");
            }
    
            switch(page.pageBuilder[i].type){
                case "image-block":
                    pageBlock.style.backgroundImage = "url(" + page.pageBuilder[i].image + ")";
                    break;
                case "image-big-block":
                    pageBlock.style.backgroundImage = "url(" + page.pageBuilder[i].image + ")";
                    break;
                case "text-block":
                    pageBlock.innerHTML = page.pageBuilder[i].text;
                    break;
                case "visit-button-block":
                    pageBlock.innerHTML = "Visit";
                    pageBlock.addEventListener("click", () => {
                        window.open(page.pageBuilder[i].link);
                    });
            }
    
            setTimeout(() => {
                pageDiv.appendChild(pageBlock);
            }, 500 * i);
        }
    }, 3000)
}