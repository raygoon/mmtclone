const images = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg","i.jpg","m.jpg"];
const randImg =images[Math.floor(Math.random() * images.length)];
const viewLowBG = document.createElement("img");
const viewBG = document.createElement("img");

viewLowBG.src = `img/low_img/${randImg}`;
console.log(viewLowBG.src);
viewBG.src = `img/${randImg}`;
viewBG.className = "bgimg";

window.onload = function(){
    const backImg = document.getElementById("body").style;
    backImg.backgroundRepeat = "repeat";
    backImg.backgroundSize = "cover";
    backImg.backgroundImage =`url(${viewLowBG.src}), url(${viewBG.src})`;
}

// document.body.appendChild(viewBG);
