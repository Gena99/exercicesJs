function expandedForm(input){     // Déclare la fonction
  var output = [];                // Déclare la variable
  input = input.toString();       // Déclare l'input et le                                         transforme en string
  var splited = input.split('');  // Découpe la chaine et la push                               dans un tableau
  
  for(var i = 0 ; i < splited.length; i++){ // Pour chaque                                               caractère ...
    if(splited[i] !== '0'){                 // si caractère n'est                                       pas 0 ...
    output.push(splited[i] + ' x ' + Math.pow(10,splited.length-i-1));     // push le caractère + x + 10e (longueur de l'input - position du caractère - 1)
    }     // Si caractère = 0 : on ne le traite pas et on passe au suivant
  }
  
  console.log(output.join(' + '));    //affiche le résultat demandé par l'utilisateur
}
  