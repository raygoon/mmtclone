const images = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg","i.jpg","m.jpg"];
const randImg = images[Math.floor(Math.random() * images.length)];
const viewBG = document.createElement("img");
let backImg = document.getElementById("body");

viewBG.src = `img/${randImg}`;
viewBG.className = "bgimg";

window.onload = function(){
    backImg.style.backgroundRepeat = "repeat";
    backImg.style.backgroundSize = "cover";
    backImg.style.backgroundImage =`url(${viewBG.src})`;
}

