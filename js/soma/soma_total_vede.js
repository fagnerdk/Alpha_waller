
let x = ''
let y = ''
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
  document.getElementById("ip_soma1").value = new Intl.NumberFormat().format(Number(yield_vd.toFixed(3)))
  var resutado0 = new Intl.NumberFormat().format(Number(yield_vd.toFixed(3)))
  x = resutado0
}

setInterval(() => {
  meis()
  y = document.querySelector('#ip1_soma').value
  let soma = (valo1 = 0, valo2 = 0) => {
    valo1 = String(valo1).replace(",", ".")
    valo2 = String(valo2).replace(",", ".")

    let soma1 = Number(valo1)
    let soma2 = Number(valo2)
    
   
    let res = (4*soma2) * soma1
    if(Number.isNaN(res)){
      valo1 = String(valo1).replace(".", "")
      valo2 = String(valo2).replace(".", "")
      let soma3 = valo1
      let soma4 = valo2
     
      res = (4*soma4) * soma3
      return res
    }else{
      
    return res
  }
    
  }

  let promese = new Promise((ok, erro) => {
    if (soma(x, y) > 200000000000000000000) {
      erro(BigInt(soma(x, y)))
    } else {
      ok(soma(x, y))
    }
  });

  promese.then((i) => {
    document.querySelector("#ip_soma2").value = i.toLocaleString( {style:"currency", currency:"BRL"});
   // console.log(i)
  })

  promese.catch((i) => {
    document.querySelector("#ip_soma2").value = i.toLocaleString({style:"currency", currency:"BRL"});
    //console.log(i)
  })


}, 1500)