var mq = window.matchMedia( "(max-width: 600px)" );

if (mq.matches) {
	document.querySelector('#textTitle').innerHTML = "Relações Públicas<br>Comunicação Corporativa";
} else {
	document.querySelector('#textTitle').innerHTML = "Relações Públicas | Comunicação Corporativa";
}