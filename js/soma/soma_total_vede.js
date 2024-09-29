
async function meis() {

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
  let yield_vd = Number(meis) *
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
  document.getElementById("ip_soma1").value = new Intl.NumberFormat().format(Number(yield_vd.toFixed(2)))

}
function remove(stryng) {


  return stryng.replace(",", "")
}


async function ano() {
  var anos = document.getElementById("ip1_soma").value;

  var yield_vd = document.getElementById("ip_soma1").value;

  let yield_vd0 = remove(yield_vd)
  let yield_rs = (12 * anos) * Number(yield_vd0)
  
     const obt_valo=[remove(yield_vd)]
    var rst = 0
    for(var i = 0; i < obt_valo.length;i++){
      rst =(12 * anos)* obt_valo[i]
    }
    
    document.getElementById("ip_soma2").value = new Intl.NumberFormat().format(Number(rst.toFixed(3)))
 
   

}
function remove1(stryng) {


  return stryng.replace(",", ".")
}
async function temp_arposento() {
  var arposento = document.getElementById("ip_soma2").value;
  const arposento1=[remove(arposento) ]

  var gasto = document.getElementById("soma_totau").value;

  var gasto1 = [remove1(gasto)]

 
  
  let som_1=0
  let som_2=0
  for(var i = 0 ; i < arposento1.length;i++){
    som_1 =Number(arposento1[i])
  }

  for(var i = 0 ; i < gasto1.length;i++){
    som_2 =Number(gasto1[i])
  }
  let tep= som_1+som_2
   
   
  document.getElementById("total0").value =new Intl.NumberFormat().format(Number(tep.toFixed(3)))
  
}


setInterval(() => {
  meis()
  ano()
  temp_arposento()
 
}, 1500)



