var container = document.getElementById('sky');

var letters = {
    KeyA: {},
    KeyB: {},
    KeyC: {},
    KeyD: {},
    KeyE: {},
    KeyF: {},
    KeyG: {},
    KeyH: {},
    KeyI: {},
    KeyJ: {},
    KeyK: {},
    KeyL: {},
    KeyM: {},
    KeyN: {},
    KeyO: {},
    KeyP: {},
    KeyQ: {},
    KeyR: {},
    KeyS: {},
    KeyT: {},
    KeyU: {},
    KeyV: {},
    KeyW: {},
    KeyX: {},
    KeyY: {},
    KeyZ: {}
};
		var posleft = Math.floor(Math.random() * 1920);

		var postop = Math.floor(Math.random() * 1080);


document.addEventListener('keydown', function(event) {
	if (event.keyCode >= 65 && event.keyCode <= 73) {

		var div = document.createElement('div');
		div.classList.add('sml');
		sky.appendChild(div);
		div.style.position = "absolute";
		div.style.top = Math.floor(Math.random() * 1080) + 'px';
		div.style.left = Math.floor(Math.random() * 1920) + 'px';



	}else if (event.keyCode >= 74 && event.keyCode <= 82) {
		var div = document.createElement('div');
		div.classList.add('med');
		sky.appendChild(div);
		div.style.position = "absolute";
		div.style.top = Math.floor(Math.random() * 1080) + 'px';
		div.style.left = Math.floor(Math.random() * 1920) + 'px';
		
	}else if (event.keyCode >= 83 && event.keyCode <= 90) {
		var div = document.createElement('div');
		div.classList.add('lrg');
		sky.appendChild(div);
		div.style.position = "absolute";
		div.style.top = Math.floor(Math.random() * 1080) + 'px';
		div.style.left = Math.floor(Math.random() * 1920) + 'px';

	}else if (event.keyCode == 8) {
		sky.removeChild(sky.lastChild);
	}
});


	