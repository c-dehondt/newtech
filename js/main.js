function abonner(){
  confirm("voulez vous confirmer votre inscription?");
}

// onglet d'images

function f(val)
{
  switch(val)
  {

    case 1:
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";

    break;
    case 1:
    document.getElementById("img1").style.display = "block";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";

    break;
    case 2:
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "block";
    document.getElementById("img3").style.display = "none";

    break;
    case 3:
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "block";
    break;

    default:
}
}

function on() {
    var x= document.getElementById("imgArticle").alt;
           document.getElementById("alt").innerHTML = x;
}

function off(){
         document.getElementById("alt").innerHTML = "";
}

// fonction date et heure

// date
var d = new Date();
var n = d.toLocaleDateString();
document.getElementById("date").innerHTML = n;

// heure
var secondes = setInterval
  (function(){
    times()} ,1000);

function times() {
var d = new Date();
var h = d.toLocaleTimeString();
document.getElementById("heure").innerHTML = h;
}

// fonction chrono
function chrono() {
  document.forms[0].sec.value=parseInt(document.forms[0].sec.value)+1;
  setTimeout('chrono()',1000);    }
