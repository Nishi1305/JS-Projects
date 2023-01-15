
let hover = document.querySelector('.lists_icon');
let submenu = document.querySelector('.ellipsis_list');

hover.addEventListener('click', () => {
   submenu.style.display = "block";
});

hover.addEventListener('dblclick', () => {
   submenu.style.display = "none";
});



let title = document.querySelector('.title');
let album = document.querySelector('.album');
let prev = document.querySelector('.prev');
let playPause = document.querySelector('#playPause');
let next = document.querySelector('.next');
let audio = document.querySelector('audio');
let img = document.querySelector('.Song_cover');
let myProgress = document.getElementById('myProgressBar');




//songlist

let songList = [
   {
      path:     "./songs/s1.mp3",
      songName: "Perfect",
      songAlbum:"Ed sheeran",
      cover:"./images/1.jpg"

   },
   {
      path:     "./songs/s2.mp3",
      songName: "Breathing",
      songAlbum:"Therapy",
      cover:"./images/m2.jpg"


   },
   {
      path:     "./songs/s3.mp3",
      songName: "Closer",
      songAlbum:"The Chainsmoker-Helsay ",
      cover:"./images/m3.jpg"


   },
   {
      path:     "./songs/s4.mp3",
      songName: "Mehmaan",
      songAlbum:"Mismatched",
      cover:"./images/m4.jpg"


   },
   {
      path:     "./songs/s5.mp3",
      songName: "Kahani",
      songAlbum:"Pritam-(From-Laal Singh)",
      cover:"./images/m5.jpg"


   },
   {
      path:     "./songs/s6.mp3",
      songName: "You Broke me first ",
      songAlbum:"Tata McRae",
      cover:"./images/m6.jpg"


   },
   {
      path:     "./songs/s7.mp3",
      songName: "Without Me",
      songAlbum:"Manic",
      cover:"./images/m7.jpg"


   },
   {
      path:     "./songs/s8.mp3",
      songName: "Kitni Haseen Hogi",
      songAlbum:"Arijit Singh",
      cover:"./images/m8.jpg"


   },
   {
      path:     "./songs/s9.mp3",
      songName: "Soch liya",
      songAlbum:"Radhe Shyam",
      cover:"./images/m9.jpg"


   },
   {
      path:     "./songs/s10.mp3",
      songName: "What If",
      songAlbum:"Jhhnny Orlando",
      cover:"./images/m10.jpg"
      

   },
   {
      path:     "./songs/s11.mp3",
      songName: "Rang Lageya",
      songAlbum:"Mohit Chauhan",
      cover:"./images/m11.jpg"


   }


];



let song_Playing = false;

//Play song//

function playSong(){
   song_Playing = true;
   audio.play();
   playPause.classList.add('fa-circle-pause');
   //change icon

   // playPause.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
}

//Pause song//

function pauseSong(){
   song_Playing = false;
   audio.pause();
   playPause.classList.remove('fa-circle-pause');

   // playPause.innerHTML =`<i class="fa-solid fa-circle-play"></i>`;

}


//play or pause song on click//

playPause.addEventListener("click", () => (song_Playing ?
   pauseSong() : playSong()));



//load song//


function loadSong(songList){
   title.textContent = songList.songName;
   album.textContent = songList.songAlbum;
   audio.src = songList.path;
   img.src = songList.cover;
}


//current song


let i = 0;



//on load -select first song from song list


loadSong(songList[i]);

//previous song

function prevSong(){
   i--;
   if (i<0){
      i = songList.length -1;

   }
   loadSong(songList[i]);
   playSong();
}
prev.addEventListener("click",prevSong);


//Next song

function nextSong(){
   i++;
   if (i > songList.length - 1){
      i = 0;

   }
   loadSong(songList[i]);
   playSong();
}
next.addEventListener("click",prevSong);









audio.addEventListener('timeupdate', ()=>{
   console.log('timeupdate');

   progress = parseInt((audio.currentTime/audio.duration)*100);
   console.log(progress);
   myProgress.value =progress
})

myProgress.addEventListener('change',()=>{
   audio.currentTime = myProgress.value * audio.duration/100;
})













