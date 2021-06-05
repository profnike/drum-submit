let allAudios= document.querySelectorAll('audio');
function stopAllAudio(){
    allAudios.forEach(function(audio){
        audio.pause();
});
}

let c=document.getElementById("clap");
    c.addEventListener('click', clap);
function clap(e){

    let aud1= document.querySelector('audio[data-key="0"]');
    stopAllAudio();
    aud1.play();
    aud1.currentTime =0;
}; 


let h=document.getElementById("hihat");
    h.addEventListener('click', hihat);
function hihat(e){

    let aud= document.querySelector('audio[data-key="1"]');
    stopAllAudio();
    aud.play();
    aud.currentTime =0;
}; 


  
   let k=document.getElementById("kick");
    k.addEventListener('click', kick);
function kick(e){
   
    let audi= document.querySelector('audio[data-key="2"]');
    stopAllAudio();
    audi.play();
    audi.currentTime =0;
};  
let o=document.getElementById("openhat");
    o.addEventListener('click', openhat);
function openhat(e){
    console.log(e);
    let audio4= document.querySelector('audio[data-key="70"]');
    stopAllAudio();
    audio4.play();
    audio4.currentTime =0;
    
}; 

let b=document.getElementById("boom");
    b.addEventListener('click', boom);
function boom(e){
    
    let audi05= document.querySelector('audio[data-key="71"]');
    stopAllAudio();
    audi05.play();
    audio5.currentTime =0;
    
};



let r=document.getElementById("ride");
    r.addEventListener('click',ride);
function ride(e){
    
    let audio6= document.querySelector('audio[data-key="72"]');
    stopAllAudio();
    audio6.play();
    audio6.currentTime =0;
};  

let s=document.getElementById("snare");
    s.addEventListener('click',snare);
function snare(e){
    
    let audio7= document.querySelector('audio[data-key="74"]');
    stopAllAudio();
    audio7.play();
    audio7.currentTime =0;
};
let to=document.getElementById("tom");
    to.addEventListener('click',tom);
function tom(e){
    
    let audio8= document.querySelector('audio[data-key="75"]');
    stopAllAudio();
    audio8.play();
    audio8.currentTime =0;
};  
let ti=document.getElementById("tink");
    ti.addEventListener('click',tink);
function tink(e){
    
    let audio9= document.querySelector('audio[data-key="76"]');
    stopAllAudio();
    audio9.play();
    audio9.currentTime =0;
};    

    
    


