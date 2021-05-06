const qwerty = document.getElementById ("qwerty")
const overLay = document.getElementById ("overlay")
const phrase = document.querySelector ("#phrase ul")
const btnReset = document.querySelector (".btn__reset")

let wrongAnswers = 0
let words = [
'rise and shine',
'wild goose chase',
'Good as Gold',
'A diamond in the rough',
'As good as it gets',
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


const letters = document.getElementsByClassName('letter');

const checkLetter = (button) => {
   let right = null;
   for(i = 0;i < letters.length; i++){
   if(button === letters[i].textContent.toLowerCase()){
      letters[i].classList.add('show');
      right = true;
   }
}
   return right;

}
const lives = document.querySelectorAll (".tries img")

qwerty.addEventListener ('click', (ev) => {
   if(ev.target.tagName === "BUTTON"){
      ev.target.className = 'chosen';
      ev.target.style.display = "none";
      
      const match = checkLetter(ev.target.textContent.toLowerCase());
   if(match === null){
      lives[wrongAnswers].src = "images/lostHeart.png"
      wrongAnswers++
   }
   checkWin()
   
}
reset()
});

let title = document.querySelector('.title')
const shows = document.getElementsByClassName ('show')
function checkWin (){
if(letters.length === shows.length){
   overLay.className = "win"
   title.textContent = "You win"
   overLay.style.display = "flex"
   


}else if(wrongAnswers > 4){
  
   overLay.style.display = "flex"
   title.textContent = "You lose"
   overLay.className = "lose";
}
}

function reset () {
   btnReset.textContent = 'play again';
   btnReset.addEventListener('click', ()=> {
       location.reload();
       startButton.style.transition = '3s';
   });
 
 }   
console.log(randomWord)