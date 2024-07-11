function soma(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9) {
  return v0 + v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9;
}

function resutado() {
  var vl0 = document.getElementById("pvl1").value;
  var vl1 = document.getElementById("pvl2").value;
  var vl2 = document.getElementById("pvl3").value;
  var vl3 = document.getElementById("pvl4").value;
  var vl4 = document.getElementById("pvl5").value;
  var vl5 = document.getElementById("pvl6").value;
  var vl6 = document.getElementById("pvl7").value;
  var vl7 = document.getElementById("pvl8").value;
  var vl8 = document.getElementById("pvl9").value;
  var vl9 = document.getElementById("pvl10").value;
 
  
    
    var res =soma(
      Number(vl0),
      Number(vl1),
      Number(vl2),
      Number(vl3),
      Number(vl4),
      Number(vl5),
      Number(vl6),
      Number(vl7),
      Number(vl8),
      Number(vl9)
    )
    document.getElementById("soma_totau").value = res.toFixed(2);
  
 
}

setInterval(() => {
  resutado();
}, 1500);

