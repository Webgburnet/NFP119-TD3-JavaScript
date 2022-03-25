/* createRandomArray : construit un tableau de nombres entiers positifs choisis aléatoirement
Paramètres : 
  - n (entier > 0): le nombre d'éléments du tableau construit
  - max (entier > 0) : la valeur maximale (incluse) des éléments du tableau
Résultat :
  un tableau de taille n dont les éléments dont des nombres entiers aléatoirement choisis en 0 et max exclus  
Exemple :
createRandomArray(5,100)   -> [3, 85, 43, 75, 20]
*/

var tab = [];
var createRandomArray = function tableauNombreAleatoire(n,max){
	for (i=0;i<n;i++)
	{
		tab[i]=Math.floor(Math.random()*max); 
	}
	return tab;
};
createRandomArray(5,100)


var maxElement = function plus_grand_element (table){
	var nombre_max=tab1[0];
	for(i=1;i<table.length;i++){
		if(table[i]>nombre_max)
		{
			nombre_max=table[i];
		}
	}
	return nombre_max;
};
var tab1 = [3, 85, 43, 75, 20];
maxElement(tab1);

var nbOccurrences = function Occu(table,occurence){
	compteur = 0;
	for(i=0;i<table.length;i++){
		if(table[i]==occurence)
		{
			compteur++;
		}
	}
	return compteur;
}
nbOccurrences([3,5,4,7,5,4],5)// -> 2
nbOccurrences(["pim","bob","bill"],"bob")// -> 1
nbOccurrences(["pim","bob","bill"],"pam")// -> 0

var removeElement = function supp(table,supression){
	for(i=0;i<table.length;i++){
		if(table[i]==supression)
		{
			table.splice(i,1);
		}
	}
	console.log(table);
	return table;
};
removeElement([3,10,5,4,7,5,4],5)// -> [3,10,4,7,5,4]
removeElement(["pim","bob","bill"],"bob")// -> ["pim","bill"]
removeElement([3,10,5,4,7,5,4],12)// -> [3,10,5,4,7,5,4]   