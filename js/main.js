function abonner(){
  confirm("voulez vous confirmer votre inscription?");

  if (true) {
    alert("merci pour votre confiance");
}
}
// onglet d'images

function f(val){

  switch(val)
  {
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
}
}


// aside du site
function b(val){

  switch(val)
  {
    case 1:
    document.getElementById("page1").style.display = "block";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";

    break;
    case 2:
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("page3").style.display = "none";

    break;
    case 3:
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    break;
}
}

// info images
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

// heure + chrono
var secondes = setInterval
  (function(){chrono(),
    times()} ,1000);

function times() {
var d = new Date();
var h = d.toLocaleTimeString();
document.getElementById("heure").innerHTML = h;
}

// fonction chrono
function chrono() {
  var t= 0;
  document.getElementById("temps").innerHTML = t;
}
