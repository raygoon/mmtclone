const images = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg","i.jpg","m.jpg"];
const randImg = images[Math.floor(Math.random() * images.length)];
const viewLowBG = document.createElement("img");
const viewBG = document.createElement("img");
let backImg = document.getElementById("body");

viewLowBG.src = `img/low_img/${randImg}`;
viewBG.src = `img/${randImg}`;
viewBG.className = "bgimg";

window.onload = function(){
    backImg.style.backgroundRepeat = "repeat";
    backImg.style.backgroundSize = "cover";
    backImg.style.backgroundImage =`url(${viewLowBG.src})`;
    console.log(backImg.style.backgroundImage);
}

function waitForImageToLoad(imageElement){
    return new Promise(resolve=>{imageElement.onload = resolve})
}

waitForImageToLoad(viewLowBG).then(()=>{
    viewLowBG.src = `img/${randImg}`;
    return new Promise(resolve=>{viewLowBG.onload = resolve});
});

