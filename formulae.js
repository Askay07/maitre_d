<script>
  
  function calculate() {
    
  var total = document.getElementById("uno").value;
  var tipR = document.getElementById("dos").value;
  
  var taxA = (parseFloat(total) * (5.5 / 100));
  var tip = (parseFloat(total) * parseFloat(tipR));
  var Gtotal = (parseFloat(total) + parseFloat(tip) + parseFloat(taxA));

  if (!isNaN(Gtotal)) {

    document.getElementById("tres").innerHTML = taxA;
    document.getElementById("quatro").innerHTML = tip;
    document.getElementById("cinco").innerHTML = Gtotal;

  }
  
  }
  </script>