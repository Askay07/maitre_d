function calculate(){

    var total = document.getElementsById("uno").value;
    var tipR = document.getElementsById("dos").value;
    
    var taxA = total * (5.5/100);
    var tipA = (total * tipR);
    var Gtotal = (total + tipA + taxA);
    
    document.getElementById("tres").innerHTML = taxA;
    document.getElementById("quatro").innerHTML = tipA;
    document.getElementById("cinco").innerHTML = Gtotal;
    }
    
    document.getElementById("lamo").onclick = function() {
        
    calculate();
    
    };
    