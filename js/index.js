var selBtnIniciar = document.querySelector(".btn-iniciar");
var selGameTitle = document.querySelector(".game-title");

selBtnIniciar.addEventListener("click",function(){
	selBtnIniciar.parentElement.removeChild(selBtnIniciar);
	game();
})

function game(){
	
}