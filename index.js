const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//songs 
const songs = ['hey','summer','ukelele'];

// keep track of the songs
let songIndex = 1;

//initially load songs
loadSong(songs[songIndex])

//update song details
function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;

}

function playSong() {
   musicContainer.classList.add('play')
   document.querySelector('i.fas').classList.remove('fa-play');
   document.querySelector('i.fas').classList.add('fa-pause');
   
}

function pauseSong() {

}

//Event Listeners
playBtn.addEventListener('click',()=> {

 const isPlaying = musicContainer.classList.contains('play');
 if(isPlaying){
    pauseSong()
 }else {
    playSong()
 }
})
