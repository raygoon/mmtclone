const images = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg"];
const randImg =images[Math.floor(Math.random() * images.length)];
const viewBG = document.createElement("img");
viewBG.src = `img/${randImg}`;

document.body.appendChild(viewBG);