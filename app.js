const qwerty = document.getElementById ("qwerty")
const overLay = document.getElementById ("overlay")
const phrase = document.getElementById ("phrase")
const btnReset = document.querySelector (".btn__reset")
let wrongAnswers = 0
let words = [
'The early bird gets the word',
'wild goose chase',
'Your guess is as good as mine',
'By the skin of your teeth',
'Get a taste of your own medicine',
'Ignorance is bliss']


btnReset.addEventListener("click", () =>{
   overLay.style.display = "none"
})
function getRandomArray() {
   return words.randomNumber = Math.floor(Math.random() * words.length + 1)
    
}








