var indiceImage = 0;

var afficheImage = function affiche(indiceImage){
	var diapo = document.getElementById("diapo");
	diapo.src = tabImages[indiceImage];
};

var imageSuivante = function suivant(){
	var diapo = document.getElementById("diapo");
	indiceImage++;
	if(indiceImage>(tabImages.length-1))
	{
		indiceImage=0;
	}
	afficheImage(indiceImage);
	console.log(indiceImage);
};

var button_suivant = document.getElementById("suivant");
button_suivant.addEventListener("click", imageSuivante);

var imagePrecedente = function precedent(){
	var diapo = document.getElementById("diapo");
	indiceImage--;
	if(indiceImage<0 )
	{
		indiceImage=tabImages.length-1;
	}
	afficheImage(indiceImage);
	console.log(indiceImage);
};

var button_precedent = document.getElementById("precedent");
button_precedent.addEventListener("click", imagePrecedente);


//var monTimer = window.setInterval(imageSuivante,3000);