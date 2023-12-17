var blepArray = ['blepneutraal.png', 'blepblij.png', 'blepteleurgesteld.png'];
//alle variabelen boven in aan gemaakt en gekoppeld met de html.
var rozeKrans
var blauweKrans
var witteKrans
var paarseKrans

var rozeBloem = document.querySelector("img.roze");
var blauweBloem = document.querySelector("img.blauw");
var witteBloem = document.querySelector("img.wit");
var paarseBloem = document.querySelector("img.paars");

var klaarButton = document.querySelector("button.klaar");
var resetButton = document.querySelector("button.reset");
var audio;

//Show/hide image with JavaScript. (z.d.). Stack Overflow. https://stackoverflow.com/questions/15318357/show-hide-image-with-javascript
rozeKrans = document.querySelector("img.rozekrans")
rozeKrans.style.visibility = 'hidden';

blauweKrans = document.querySelector("img.blauwekrans")
blauweKrans.style.visibility = 'hidden';

witteKrans = document.querySelector("img.wittekrans")
witteKrans.style.visibility = 'hidden';

paarseKrans = document.querySelector("img.paarsekrans")
paarseKrans.style.visibility = 'hidden';

//Illustraties zijn van te voren hidden en worden visible gemaakt in de functie. 
function rozeBloemAan(){
    rozeKrans.style.visibility = 'visible';
}

function blauweBloemAan(){
    blauweKrans.style.visibility = 'visible';
}

function witteBloemAan(){
    witteKrans.style.visibility = 'visible';
}

function paarseBloemAan(){
    paarseKrans.style.visibility = 'visible';
}

//if else statement + audio
//!= does not equal, zonder else if veranderd het als er niks staat
//Eakin, N. (2021, 16 december). Adding sound to your JS web App - Noah Eakin - Medium. Medium. https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.
function klaarBlepReactie(){
    if(blauweKrans.style.visibility == 'visible'){
        blep = document.getElementById("blep").src = "images/" + blepArray[2];
        blep = document.getElementById("blep").alt= 'Blep is teleurgesteld';
        audio = new Audio("audio/sad.mp4");
        audio.play();
       
    }
    else if(rozeKrans.style.visibility != 'visible' && blauweKrans.style.visibility != 'visible' && witteKrans.style.visibility != 'visible' && paarseKrans.style.visibility != 'visible'){
        blep = document.getElementById("blep").src = "images/" + blepArray[0];
        blep = document.getElementById("blep").alt= 'Blep is neutraal';
    }
    else{
        blep = document.getElementById("blep").src = "images/" + blepArray[1];
        blep = document.getElementById("blep").alt= 'Blep is blij';
        audio = new Audio("audio/happy.mp4");
        audio.play();
    }

}


//Alles weg zodat je opnieuw kan beginnen
function resetAllesWeg(){
    rozeKrans.style.visibility = 'hidden';
    blauweKrans.style.visibility = 'hidden';
    witteKrans.style.visibility = 'hidden';
    paarseKrans.style.visibility = 'hidden';

    blep = document.getElementById("blep").src = "images/" + blepArray[0];
    blep = document.getElementById("blep").alt= 'Blep is neutraal';
}

//Alle 'buttons' zijn clickbaar
rozeBloem.addEventListener("click", rozeBloemAan)
blauweBloem.addEventListener("click", blauweBloemAan)
witteBloem.addEventListener("click", witteBloemAan)
paarseBloem.addEventListener("click", paarseBloemAan)

klaarButton.addEventListener("click",klaarBlepReactie)
resetButton.addEventListener("click", resetAllesWeg)

