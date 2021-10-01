const images = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg","i.jpg","m.jpg"];
const randImg = images[Math.floor(Math.random() * images.length)];
const viewLowBG = document.createElement("img");
const viewBG = document.createElement("img");
let backImg = document.getElementById("body").style;

viewLowBG.src = `img/low_img/${randImg}`;
viewBG.src = `img/${randImg}`;
viewBG.className = "bgimg";

window.onload = function(){
    backImg.backgroundRepeat = "repeat";
    backImg.backgroundSize = "cover";
    backImg.backgroundImage =`url(${viewLowBG.src})`;
    // changeHighRes();
    setTimeout(changeHighRes, 3000);
}

function changeHighRes() {
    backImg.backgroundImage =`url(${viewBG.src})`;
}