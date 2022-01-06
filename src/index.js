console.log("script launched");
let mainContentEl = document.querySelector(".main-content");
let detailsTitle = document.querySelector(".details-title");
let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");//all HTML elements beloging tothe clas thumbnails-anchor
let selectedItem;
for(let i = 0; i < anchors.length;i++){
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault(); // canceling default of anchor element hitting
        showDetails();
        setDetails(anchors[i]); //setDetails function call passing referanse to appropriate anchor
    })
}
function setDetails(anchor){
    console.log("anchor element was presed", anchor);
    console.dir(anchor);
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src", hrefValue);
    if (selectedItem) {
        selectedItem.classList.remove("selected");
    }
    anchor.parentElement.classList.add("selected");
    selectedItem = anchor.parentElement;
    // get element with class thumbnails-title insaid the given anchor
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thumbnails-title`
    let thumbnaisTitleEl = document.querySelector(thumbnailsTitleSelector);
    // dog name exists inside thumbnaisTitleEl.textContent
    detailsTitle.textContent = `${thumbnaisTitleEl.textContent}: ${anchor.getAttribute('data-details-title')}`;
    
}
function showDetails(){
    mainContentEl.classList.remove('hidden');
}
function hideDetails(){
    mainContentEl.classList.add('hidden');
}