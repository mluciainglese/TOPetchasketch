// Creating divs for a grid

let divContainer = document.querySelector(".gridContainer")

for (i = 0; i < 256; i++){
    let newDiv = document.createElement("div")
    newDiv.classList.add("square")
    divContainer.appendChild(newDiv)
}