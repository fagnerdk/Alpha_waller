
//clipito moeda

setInterval(() => {
  const moedas = "BTC-BRL";

  getText(`https://economia.awesomeapi.com.br/json/last/${moedas}`);

  async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.json();
    
    btc = myText.BTCBRL["code"];
   
    valo = myText.BTCBRL["bid"];
    var valo1 = [...valo]
   // console.log( valo1[0]+valo1[1]+valo1[3]);

    if(Number(valo1[3]+valo1[4]+valo1[5]) >= '001' ){
     var cor = document.getElementById("btc")
     cor.innerHTML = btc + " : " +valo1[0]+valo1[1]+valo1[2]+'.'+valo1[3]+valo1[4]+valo1[5];
     cor.style.color="lime";
    
    }else if(Number(valo1[3]+valo1[4]+valo1[5]) <= '000'){
      var cor = document.getElementById("btc")
     cor.innerHTML = btc + " : " +valo1[0]+valo1[1]+valo1[2]+'.'+valo1[3]+valo1[4]+valo1[5];
     cor.style.color="red";
     
     
    }
    
  }
}, 500);
