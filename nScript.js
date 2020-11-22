console.log('This is Just a Test');

class Beat{
    constructor(audioSource){
        this.audio = new Audio (audioSource);
    }

    audioPlayer = () =>{
        this.audio.currentTime = 0;
        this.audio.play();
    }

}

triggerBeat = (event) =>{
    const keycode = event.keyCode;
    if (keycode in beats) {
        let keypop = beats[keycode];
        keypop.beat.audioPlayer();
    }
}

let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
    }
}

document.addEventListener('keydown', triggerBeat);