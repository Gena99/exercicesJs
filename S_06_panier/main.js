var Produit = function (nom, prix){
	this.nom = nom;
	this.prix = prix;
};

var Panier = function(){
	this.totalHT = 0;
	this.totalTTC = 0;
	this.ajoute = function(produit){
		console.log('Ajout du produit > ' + produit.nom);
		this.totalHT = this.totalHT + produit.prix;
	};
	this.retire = function(produit){};

}
var baguette = new Produit('baguette', 0.87);
var croissant = new Produit('croissant', 0.81);
var panier = new Panier();
console.log('total Ht du panier : ' + panier.totalHT);
panier.ajoute(baguette);
console.log('total Ht du panier : ' + panier.totalHT);
panier.ajoute(croissant);
console.log('total Ht du panier : ' + panier.totalHT);
