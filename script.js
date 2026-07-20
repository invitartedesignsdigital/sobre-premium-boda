const boton=document.getElementById("btnAbrir");

const izquierda=document.getElementById("panelIzquierdo");

const derecha=document.getElementById("panelDerecho");

const musica=document.getElementById("musica");


boton.addEventListener("click",()=>{


musica.play();


izquierda.style.transform="translateX(-100%)";

derecha.style.transform="translateX(100%)";

boton.style.opacity="0";


setTimeout(()=>{

document.getElementById("overlay").style.display="none";

window.location.href="https://www.invitartedesigns.com/save-the-date-jose-y-adriana";

},1200);


});