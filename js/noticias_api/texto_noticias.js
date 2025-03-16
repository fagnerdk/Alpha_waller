let caixa_usuario = document.getElementById('caixa_usuario')
let arba = document.getElementById("arba")
let testo = document.getElementById("texto_noticia");
let lista_msg = document.getElementById("lista_msg")

arba.addEventListener("click", () => {
  if (arba.style.marginLeft == '99px') {
    caixa_usuario.style.width = "0px"
    arba.style.marginLeft = '0px'
    lista_msg.style.width = '483px'
    lista_msg.style.marginLeft = '1px'
    document.getElementById('form').style.marginLeft = '1px'
    document.getElementById('form').style.width = '527px'
    lista_msg.style.display=""
  }
  else {
    caixa_usuario.style.width = "100px"
    arba.style.marginLeft = '99px'
    testo.style.width = "318px"
    testo.style.height = "175px";
    lista_msg.style.marginLeft = `101px`
    lista_msg.style.width = '384px'
    document.getElementById('form').style.marginLeft = '103px'
    document.getElementById('form').style.width = '425px'
    lista_msg.style.display=""

  }
  //console.log(arba.style.marginLeft)
})


{

  testo.style.width = "318px";
  testo.style.height = "175px";

  testo.addEventListener("mouseover", () => {
     lista_msg.style.display="none"
    var lagura = [...testo.style.width]
    var autura = [...testo.style.height]
    for (let i = 0; i < lagura.length; i++) {
      console.log(lagura.length)
      if (lagura.length >= 3 && lagura.length <= 9000000) {
        testo.style.width = "318px"
      
      } else (
        testo.style.width = "318px"


      )
      /** */
      if (lagura.length >= 3 && lagura.length <= 9000000) {
        caixa_usuario.style.width = "0px"
        arba.style.marginLeft = '0px'

        document.getElementById('form').style.marginLeft = '1px'
        document.getElementById('form').style.width = '527px'
      }
      /** */
    }
    for (let i = 0; i < autura.length; i++) {
      var soma = ''
      if (autura[i] == 4) {
        soma = autura[0] + autura[1]

      } else {
        soma = autura[0] + autura[1] + autura[2]
      }
      console.log(soma)
      if (soma >= "249") {
        console.log((testo.style.height = "249px"));
      }
    }


  });
}
const d = new Date();

function mybt() {
  var pesquisa = document.getElementById("pesquisar").value; //barra de pesquisa
  const pl = pesquisa;
  const moedas = "b85201d65c134e308e36e7d966fa8f3d";
  const url = `https://newsapi.org/v2/everything?q=${pl}&from=${d.getFullYear()}-${d.getMonth()}-${d.getDate()}&sortBy=publishedAt&apiKey=${moedas}`;

  async function getText() {
    let myObject = await fetch(url);
    let myText = await myObject.json();
    let res =testo
    

    if(myText.totalResults>0){
      res.style.color="black"
      res = (testo.innerText =
      myText.articles[0].title +
      "" +
      myText.articles[0].description +
      "" +
      myText.articles[0].content);
      
    document.getElementById("pesquisar").value = "";

    document.getElementById("lupa").style.cursor = "progress";
    setTimeout(() => {
      if (typeof res == "string") {
       
        document.getElementById("lupa").style.cursor = "pointer";
      }
    }, 1000);
    }else{
      res.style.color="red"
      res.innerText =`nao a resutado para esta pesquissa ${pesquisa} no momento `
      document.getElementById("pesquisar").value = "";
      
         
    }
  }
  getText();


}
