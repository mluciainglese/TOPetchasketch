// Creating divs for a grid

let divContainer = document.querySelector(".gridContainer")

for (i = 0; i < 256; i++){
    let newDiv = document.createElement("div")
    newDiv.classList.add("square")
    divContainer.appendChild(newDiv)
}

// Creating hover functionality

divContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")){
        event.target.style.backgroundColor = "rgb(186, 121, 255)"
    }
})