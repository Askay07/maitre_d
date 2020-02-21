function calculate(){

    var total = document.getElementsById("1").value;
    var tipR = document.getElementsById("2").value;
    
    var taxA = total * (5.5/100);
    var tipA = (total * tipR);
    var Gtotal = (total + tipA + taxA);
    
    document.getElementById("1").innerHTML = taxA;
    document.getElementById("2").innerHTML = tipA;
    document.getElementById("cinco").innerHTML = Gtotal;
    }
    
    document.getElementById("lamo").onclick = function() {
        
    calculate();
    
    };
    