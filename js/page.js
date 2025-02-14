function openPage(page){
    let pageDiv = document.createElement("div");

    pageDiv.classList.add("page");
    pageDiv.style.backgroundColor = page.color;

    document.getElementById("home").appendChild(pageDiv);
}