let allButtons = document.querySelectorAll(".rec-btn").length;
let sound1 = new Audio("sounds/MP3/Samp1.mp3");
let sound2 = new Audio("sounds/MP3/Samp2.mp3");
let sound3 = new Audio("sounds/MP3/Samp3.mp3");
let sound4 = new Audio("sounds/MP3/Samp4.mp3");
let sound5 = new Audio("sounds/MP3/Samp5.mp3");
let sound6 = new Audio("sounds/MP3/Samp6.mp3");
let allSounds = [sound1,sound2,sound3,sound4,sound5,sound6]

for (let i = 0; i < allButtons; i++){
  document.querySelectorAll(".rec-btn")[i].addEventListener("click", function(){
    let buttonKey = this.innerHTML[0].toLowerCase();
    playSound(buttonKey)
  })
}

document.addEventListener("keypress", function(event){
  playSound(event.key)
})



function playSound(el){
  if (el === 'a'){
    pauseReset();
    sound1.play();
  }
  if (el === 's'){
    pauseReset();
    sound2.play();
  }
  if (el === 'd'){
    pauseReset();
    sound3.play();
  }
  if (el === 'f'){
    pauseReset();
    sound4.play();
  }
  if (el === 'g'){
    pauseReset();
    sound5.play();
  }
  if (el === 'h'){
    pauseReset();
    sound6.play();
  }
}

// function playFast(audio){
//   if (audio.paused){
//     audio.play();
//   } else {
//     audio.pause();
//     audio.currentTime = 0;
//     audio.play();
//   }
// }

function pauseReset(){
  allSounds.forEach(el => {
    if (!el.paused){
      el.pause();
      el.currentTime = 0;
    }
  })
}