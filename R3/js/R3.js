// Variables

let buttonPlay = document.getElementById('buttonPlay');
let modalBK = document.getElementById('modalBK');
let video = document.getElementById('video');
let banderaModal = false;

// Funciones
let main = () =>{
    buttonPlay.addEventListener('click',abrirCerrarModal);
    modalBK.addEventListener('click',abrirCerrarModal);
}

let abrirCerrarModal = () =>{
    if(banderaModal){
        modalBK.style.display = 'none'
        video.removeAttribute('autoplay')
        video.pause();
        banderaModal = false;
    }else{
        modalBK.style.display = 'flex';
        video.play();
        banderaModal = true
    }
}

main();
