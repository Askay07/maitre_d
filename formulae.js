function calculate(){

var total = document.getElementsById("uno").value;
var tipR = document.getElementsById("dos").value;

var taxA = Math.round(total * (5.5/100));
var tip = Math.round(total * tipR);
var Gtotal = Math.round(total + tip + taxA);

var taxA = document.querySelector('#uno')
var tip = document.querySelector('#dos')
var Gtotal = document.querySelector('#tres')


}

document.getElementById("lamo").onclick = function() {
calculate();
}