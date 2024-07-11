{
  var testo = document.getElementById("cs");
  testo.style.width = "318px";
  testo.style.height = "175px";
  testo.addEventListener("click", () => {
    var lagura=[...testo.style.width]
    var autura=[...testo.style.height]
    for (let i= 0; i < lagura.length; i++) {
     // console.log(lagura.length)
      if(lagura.length>=3 && lagura.length<=9000000){
        testo.style.width = "318px"
      }else(
        testo.style.width = "318px"
      )
           
    }
    for (let i= 0; i < autura.length; i++) {
      var soma=''
      if(autura[i]==4){
        soma= autura[0]+autura[1]
        
      }else{
        soma= autura[0]+autura[1]+autura[2]
      }
      console.log(soma) 
      if (soma >= "249"){
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
     
    const res = (document.getElementById("cs").innerText =
      myText.articles[0].title +
      "" +
      myText.articles[0].description +
      "" +
      myText.articles[0].content);
    document.getElementById("pesquisar").value = "";

    document.getElementById("lupa").style.cursor = "progress";
    setTimeout(() => {
      if (typeof res == "string") {
        console.log(typeof res);
        document.getElementById("lupa").style.cursor = "pointer";
      }
    }, 1000);
  }
  getText();
}
