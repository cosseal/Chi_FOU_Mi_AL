//
//créer un tableau avec les images?

var btnsUt = document.querySelectorAll("#choixUt .btn");
var btnsPC = document.querySelectorAll("#choixPC.btn");
var result = document.getElementById("result");
var scoreUt =0;
var scorePC = 0;
var i;

for (let i in btnsUt)
{
    btnsUt[i].onclick = function ()
    {
    var choixIA = Math.floor (Math.random()*3);
    i = parseInt(i);

    if (i === choixIA) {
        result.innerHTML = "Egalité";
    }
    else if ((i === 0 && choixIA === 2) || (i === 1 && choixIA === 0) || (i === 3 && choixIA === 1))
    {
        result.innerHTML = "Gagné";
        scoreUt ++;
    }
    else if ((choixIA === 0 && i === 2) || (choixIA === 1 && i === 0) || (choixIA === 3 && i === 1))
    {
        result.innerHTML = "Perdu";
        scorePC ++;
    }

    document.getElementById("score1").innerHTML = scoreUt;
    document.getElementById("score2").innerHTML = scorePC;
    }
}






