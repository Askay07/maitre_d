function calculate(){

var total = document.getElementsById("uno").value;
var tipR = document.getElementsById("dos").value;

var taxA = Math.round(total * (5.5/100));
var tip = Math.round(total * tipR);
var Gtotal = Math.round(total + tip + taxA);

document.getElementById("tres").innerHTML = taxA
document.getElementById("quatro").innerHTML = tip
document.getElementById("cinco").innerHTML = Gtotal


}

document.getElementById("lamo").onclick = function() {
calculate();
};