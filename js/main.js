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

// Function to let user choose grid size

document.querySelector("button").addEventListener("click", getUserInput)

function getUserInput(){
    let userInput = Number(document.querySelector("input").value)
    
    if (isNaN(userInput) || userInput < 1 || userInput > 100 || userInput % 1 != 0){
        alert ("Please enter a number between 1 and 100")
        return;
    } else {
        divContainer.innerHTML = ""

        function createGrid(userInput){
            for (let i = 0; i < userInput*userInput; i++) {
                let newDiv = document.createElement("div")
                newDiv.classList.add("square")
                divContainer.appendChild(newDiv)
            }       
        }
        
        createGrid(userInput)
    }

}