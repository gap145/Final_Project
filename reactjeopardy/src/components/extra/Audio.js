let sounds = {};
sounds.flip = new Audio("assets/audio/CardFlip.mp3");
sounds.flipBack = new Audio("assets/audio/CardFlip.mp3");
sounds.countdown = new Audio("assets/audio/TimerMusic.mp3");

export let play = sound => {
    if (sounds[sound]) {
        sounds[sound].currentTime = 0;
        sounds[sound].play();
    }
};

export let stop = sound => {
    if (sounds[sound]) {
        sounds[sound].pause();
    }
};