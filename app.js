const qwerty = document.getElementById ("qwerty")
const overLay = document.getElementById ("overlay")
const phrase = document.querySelector ("#phrase ul")
const btnReset = document.querySelector (".btn__reset")

let wrongAnswers = 0
let words = [
'The early bird gets the word',
'wild goose chase',
'Your guess is as good as mine',
'By the skin of your teeth',
'Get a taste of your own medicine',
'Ignorance is bliss']


const randomNumber = Math.floor(Math.random() * words.length)

btnReset.addEventListener("click", () =>{
   overLay.style.display = "none"
})
function getRandomArray(arr) {
 let randomArray = arr[randomNumber]
 return randomIndex =  randomArray.split([,])
}



function addPhraseToDisplay(arr){
   for(let i = 0;i < arr.length; i ++){
      const li = document.createElement("li")
      phrase.appendChild (li)
      li.textContent = arr[i]
   
   if(arr[i]=== " "){
      li.className = "space"
   }else{
      li.className = "letter"
   }
}
};

const randomWord = getRandomArray(words)

addPhraseToDisplay(randomWord)


const letters = document.getElementsByClassName('letter')
const checkLetter = (button) => {
   const right = "null"
   for(let i = 0;i < letters.length; i ++){
   if(button === letters[i].textContent.toLowerCase()){
      letters[i].classList.add('show')
      right = true
   }
   return right
}
}
const lives = document.querySelectorAll (".tries img")
qwerty.addEventListener ('click', (ev) => {
   if(ev.target.className === "BUTTON"){
      ev.target.className = 'chosen'
      ev.target.style.display = "none"
      
      const match = checkLetter(ev.target.textContent.toLowerCase());
   };
   if(match === "null"){
      lives[wrongAnswers].srcs = "images/lostHeart.jpg"
      wrongAnswers ++
   }


})
