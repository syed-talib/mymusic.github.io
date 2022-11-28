let music = document.getElementById("music");
let playy = document.getElementById("play");
let pausee = document.getElementById("pause");
pausee.style.display="none";
playy.onclick=function(){
    playy.style.display="none";
    pausee.style.display="block";
    music.play();
}
pausee.onclick=function(){
    playy.style.display="block";
    pausee.style.display="none";
    music.pause();
}
music.addEventListener("ended",function(){
    location.reload();
});
