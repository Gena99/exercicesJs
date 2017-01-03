function testerType( a,b){
  if(typeof a  == typeof b){
 			 console.log("a et b sont de type identique")
  }else{
	  console.log("a et b ne sont pas de type identiques")
  }
}
console.log("nouvelle comparaison");
var a =2, b=4;
testerType(a,b);
var c =2, d="4";
testerType(c,d); 
testerType(2, 3); 
