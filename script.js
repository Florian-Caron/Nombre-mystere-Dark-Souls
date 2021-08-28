var reponse;
var nbEssai;
const nbMax = 100;



function funcNouveauJeu(){
    // Génère le nombre à trouver
    reponse = Math.round(Math.random()* (nbMax - 1) + 1);

    // Initialise/réinitialise le nombre d'essai
    nbEssai = 0;

    // Active les input
    document.getElementById("proposer").removeAttribute("disabled");
    document.getElementById("solution").removeAttribute("disabled");
    document.getElementById("proposition").removeAttribute("disabled");
}

function funcSolution(){
    // Affiche la réponse
    document.getElementById("reponses").value = "La réponse était " + reponse
}

function funcProposer(){
    let proposition = parseInt(document.getElementById("proposition").value)
    nbEssai++
    document.getElementById("essaiNum").value = nbEssai;
     if (nbEssai<7) {
         if (proposition > 0 && proposition <= nbMax) {
             if (proposition === reponse) {
                 document.getElementById("message").value = "Vous avez gagné !"
                 document.getElementById("reponses").value += proposition
                 document.getElementById("proposer").setAttribute("disabled", "");
                 document.getElementById("solution").setAttribute("disabled", "");
                 document.getElementById("proposition").setAttribute("disabled", "");
             } else if (proposition > reponse) {
                 document.getElementById("message").value = "C'est moins..."
                 document.getElementById("reponses").value += proposition +"- "
             } else {
                 document.getElementById("message").value = "C'est plus!"
                 document.getElementById("reponses").value += proposition +"+ "
             }
         } else {
             alert("Veuillez entrer une valeur comprise entre 0 et " + nbMax )
         }
     } else {
         /*
         document.getElementById("reponses").value = "La réponse était " + reponse
         document.getElementById("message").value = "Vous avez perdu..."
         */


         document.getElementById("contenu").innerHTML = ''
         document.getElementById("contenu").style.backgroundSize = 'contain'
         document.getElementById("contenu").style.backgroundRepeat = 'no-repeat'
         document.getElementById("contenu").style.backgroundPosition = 'center'
         document.getElementById("contenu").style.backgroundImage = 'url("ded2.gif")'
         setTimeout(youdied, 500)


     }
}

function youdied(){
    let audio = new Audio('you_died.mp3');
    audio.play();
    document.getElementById("contenu").innerHTML = "<img ondblclick='window.location.reload()' src='ded.jpg' alt='témor' style='width: 100%; height: 100%; margin: 0; padding: 0; animation-name: perdu; animation-duration: 2s;'/>"

}