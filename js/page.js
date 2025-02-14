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

                    setTimeout(() => {
                        createHomeScreen();
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
                case "text-block":
                    pageBlock.innerHTML = page.pageBuilder[i].text;
                    break;
            }
    
            setTimeout(() => {
                pageDiv.appendChild(pageBlock);
            }, 500 * i);
        }
    }, 3000)
}