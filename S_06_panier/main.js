var Produit = function (nom, prix){
	this.nom = nom;
	this.prix = prix;
};

var Panier = function(){
	this.totalHT = 0;
	this.totalTTC = 0;
	this.ajoute = function(produit){
		console.log(produit);
		this.totalHT = this.totalHT + produit.prix;
    this.totalTTC = this.totalHT *1.196;
	};
	this.retire = function(produit){
		console.log(produit);
    this.totalHT = this.totalHT - produit.prix;
  };

}
var baguette = new Produit('baguette', 0.87);
var croissant = new Produit('croissant', 0.81);
var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);
panier.retire (baguette)
