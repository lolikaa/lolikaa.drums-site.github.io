function playSound(e)  {                                      
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return; // zatrzymaj funkcję jeśli null = no audio
    
    audio.currentTime = 0; // przewiń do początku
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
     if (e.propertyName !== 'transform') return;
 
    this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);