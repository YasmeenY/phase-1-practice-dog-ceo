console.log('%c HI', 'color: firebrick')

let breed =[]
document.addEventListener('DOMContentLoaded', function () {
    fetchImage()
    fetchBreed()
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImage(){
    fetch(imgUrl).then(response => response.json())
    .then(img => img.message.forEach(image => renderImg(image)))
}

function renderImg(image){
    const imageDiv = document.getElementById("dog-image-container") 
    const img = document.createElement("img")
    img.src = image
    imageDiv.appendChild(img)
}

const breedUrl = "https://dog.ceo/api/breeds/list/all"

function fetchBreed(){
    fetch(breedUrl).then(response => response.json())
    .then(breeds =>{
        breed = Object.keys(breeds.message)
        breedOptions(breed)
        addBreedSelectListener()
    })
}


function breedOptions(breed){
    const breedUl = document.getElementById("dog-breeds")
    removeChildren(breedUl)
    breed.forEach(breeds => {
        const breedLi = document.createElement("li")
        breedLi.textContent = breeds
        breedUl.appendChild(breedLi)
        breedLi.addEventListener("click", ()=>{
            breedLi.style.color = "red"
        })
    }) 
}

function showingLetterBreeds(letter){
    breedOptions(breed.filter(breeds => breeds.startsWith(letter)))
}

function removeChildren(element) {
    let child = element.lastElementChild
    while (child) {
        element.removeChild(child)
        child = element.lastElementChild
    }
}

function addBreedSelectListener() {
    let breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener('change', (e)=> {
        showingLetterBreeds(e.target.value)
    })
}

