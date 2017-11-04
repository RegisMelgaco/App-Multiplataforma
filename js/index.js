var selBtnIniciar = document.querySelector(".btn-iniciar");
var selGameTitle = document.querySelector(".game-title");

selBtnIniciar.addEventListener("click",function(){
	selBtnIniciar.parentElement.removeChild(selBtnIniciar);
	game();
})

function game(){
	
}

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

selGameTitle.innerHTML = acceleration.x;