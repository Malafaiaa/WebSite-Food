function loader(){
	document.querySelector('.loader-container2').classList.add('fade-out2');
}

function fadeOut(){
	setInterval(loader, 2500);
}

window.onload = fadeOut();