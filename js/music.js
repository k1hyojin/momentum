const songs = [
    {song:"./music/music0.mp3", cover:"./music/mcover0.jpg", title:"Anoter Love", artist:"Blush'ko"},
    {song:"./music/music1.mp3", cover:"./music/mcover1.jpg", title:"Assumptions", artist:"Kye Russoul"},
    {song:"./music/music2.mp3", cover:"./music/mcover2.jpg", title:"Ottolenghi", artist:"Loyle Carner"}
];

const album = document.getElementById("cover");
const musicTitle = document.querySelector("#music li span:nth-of-type(1)");
const artist = document.querySelector("#music li span:nth-of-type(2)");
const musicBar = document.querySelector("#music li input");
const startTime = document.querySelector("#music li em:nth-of-type(1)");
const endTime = document.querySelector("#music li em:nth-of-type(2)");
const backward = document.querySelector(".rewind");
const musicBtn = document.querySelector("#music li:nth-of-type(3)");
const forward = document.querySelector(".forward");
let currentMusic = 0;
const myAudio = new Audio();


function playList(i){
    myAudio.src = songs[i].song;
    album.innerHTML = `<img src="${songs[i].cover}">`;
    musicTitle.innerText = songs[i].title;
    artist.innerText = ` - ${songs[i].artist}`;
    setTimeout(()=>{
        musicBar.max = myAudio.duration;
        let min = Math.floor(myAudio.duration/60);
        let sec = Math.floor(myAudio.duration%60);
        endTime.innerText = `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
        play();
    },100);
}

let musicSet = setInterval(()=>{
    musicBar.value = myAudio.currentTime;
    let min = Math.floor(myAudio.currentTime/60);
    let sec = Math.floor(myAudio.currentTime%60);
    startTime.innerText = `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
    if(myAudio.currentTime === myAudio.duration){
        nextList();
    }
},500);

// 재생버튼/음악 재생
function musicPlay(){
    if(musicBtn.classList.contains("pause")){
        myAudio.pause();
    }else{
        myAudio.play();
    }
    musicBtn.classList.toggle("pause");
}

// 곡재생
function play(){
    musicBtn.classList.remove("pause");
    musicPlay();
}

// 음악 재생 바
musicBar.addEventListener("click",()=>{
    myAudio.currentTime = musicBar.value;
})

// 다음곡 재생
function nextList(){
    if(currentMusic >= songs.length-1){
        currentMusic = 0;
    }else{
        currentMusic++;
    }
    playList(currentMusic);
    play();
}

// 이전곡 재생
function prevList(){
    if(currentMusic <= 0){
        currentMusic = songs.length-1;
    }else{
        currentMusic--;
    }
    playList(currentMusic);
    play();
}

backward.addEventListener("click",prevList);
forward.addEventListener("click", nextList);
musicBtn.addEventListener("click", musicPlay);