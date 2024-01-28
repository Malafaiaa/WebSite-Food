function loader(){
	document.querySelector('.loader-container1').classList.add('fade-out1');
}

function fadeOut(){
	setInterval(loader, 2500);
}

window.onload = fadeOut();