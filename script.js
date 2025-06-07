//créer une instance du loader te de son conteneur !
const loaderContainer = querySelector(".loaderContainer");
//faire disparaître le loader une fois la page complètement chargée !
Windows.addEventListener("load",(e)=>{
    loaderContainer.classList.add("fonduOut");
    setTimeout((e) => {
       loaderContainer.classList.add("hidden"); 
    }, 400);
});