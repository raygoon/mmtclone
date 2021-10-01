const images = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg","i.jpg","m.jpg"];
const randImg = images[Math.floor(Math.random() * images.length)];
const viewBG = document.createElement("img");
let backImg = document.getElementById("body");
viewBG.className = "bgimg";

function backImgLoad(){
    viewBG.src = `img/low_img/${randImg}`;
    backImg.style.backgroundRepeat = "repeat";
    backImg.style.backgroundSize = "cover";
    backImg.style.backgroundImage =`url(${viewBG.src})`;
}

document.addEventListener("DOMContentLoaded",backImgLoad);

window.onload = function(){
    viewBG.src = `img/${randImg}`;
    console.log("윈도우로드");
    backImg.style.backgroundRepeat = "repeat";
    backImg.style.backgroundSize = "cover";
    backImg.style.backgroundImage =`url(${viewBG.src})`;
}




