console.log('welcom to spotify');
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let song = [
    {songNmae: "let me love you" ,filepath: "song/1.mp3",coverPath:"cover/cover.jpg"},
    {songNmae: "let me love you" ,filepath: "song/1.mp3",coverPath:"cover/cover.jpg"},
    {songNmae: "let me love you" ,filepath: "song/1.mp3",coverPath:"cover/cover.jpg"},
    {songNmae: "let me love you" ,filepath: "song/1.mp3",coverPath:"cover/cover.jpg"},
    {songNmae: "let me love you" ,filepath: "song/1.mp3",coverPath:"cover/cover.jpg"},

]


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity =0

    }
    else{
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
})




audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgress.value =progress
})

myProgress.addEventListener('change',()=>{
    audioElement.currentTime = myProgress.value * audioElement.duration/100;
})