setInterval(() => {
  var meis = document.getElementById("ip_soma0").value;
  var vede1 = document.getElementById("vede1").value;
  var vede2 = document.getElementById("vede2").value;
  var vede3 = document.getElementById("vede3").value;
  var vede4 = document.getElementById("vede4").value;
  var vede5 = document.getElementById("vede5").value;
  var vede6 = document.getElementById("vede6").value;
  var vede7 = document.getElementById("vede7").value;
  var vede8 = document.getElementById("vede8").value;
  var vede9 = document.getElementById("vede9").value;
  var vede10 = document.getElementById("vede10").value;
  document.getElementById("ip_soma1").value =
    Number(meis) *
    (Number(vede1) +
      Number(vede2) +
      Number(vede3) +
      Number(vede4) +
      Number(vede5) +
      Number(vede6) +
      Number(vede7) +
      Number(vede8) +
      Number(vede9) +
      Number(vede10));
}, 1500);

setInterval(() => {
  var anos = document.getElementById("ip1_soma").value;

  var vede10 = document.getElementById("ip_soma1").value;

  if(anos==0){
   
   }else{
    var vede=(12*anos)*vede10
    document.getElementById("ip_soma2").value = new Intl.NumberFormat().format(Number(vede.toFixed(2)))
   }
  
   
  //console.log( new Intl.NumberFormat().format(Number(vede.toFixed(2))))
}, 1500);

setInterval(() => {
  var a = document.getElementById("ip_soma2").value;
  var b = document.getElementById("soma_totau").value;
   
  var resut=(parseFloat( a.replace(",","."))) + Number(b)
  document.getElementById("total0").value =new Intl.NumberFormat().format(Number(resut))
 
  
}, 1500);
