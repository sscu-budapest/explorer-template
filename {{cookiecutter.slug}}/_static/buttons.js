function hideReveal(className, panelIndex, imagePanel = false) {
    let elements = document.getElementsByClassName(className);
    if (elements[panelIndex].style.display == "block") {
      elements[panelIndex].style.display = "none";
    } else {
      elements[panelIndex].style.display = "block";
    }
    if (imagePanel) {
        var images = document.getElementsByClassName("slideshow")[panelIndex].getElementsByClassName("myslides");
        for (let i = 0; i < images.length; i++){
            images[i].style.display = "none";
            }      
        
        
        slideImage(panelIndex, 0);     

    }
}
   
function slideImage(panelIndex, slideIndex ){
    var nextIndex = 0
    var images = document.getElementsByClassName("slideshow")[panelIndex].getElementsByClassName("myslides");
    for (let i = 0; i < images.length; i++){
        if (images[i].style.display == "block"){
            if (i + slideIndex >= images.length){
                nextIndex = - 1 + slideIndex;
            }
            else if (i + slideIndex < 0){
                nextIndex = images.length + slideIndex;
            }
            else{
                nextIndex = i + slideIndex;
            }
            images[i].style.display = "none";
            break;
        }
    }
    images[nextIndex].style.display = "block";
}

