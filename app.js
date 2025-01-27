let imgURL="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/"
let imgBox=document.querySelector(".img-box");


for(i=200;i<1000;i++){
 let img=document.createElement("img");
imgBox.appendChild(img)
img.src+=`${imgURL}${i}.png`
}