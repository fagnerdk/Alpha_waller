/*gafico esta abaixo*/
var caixa_loga= document.getElementById('caixa_loga')
addEventListener("click", (vl) => {
 
  if (vl.target.id == "jn1") {

    document.getElementById("yuo_tube").src =
    "https://www.youtube.com/embed/MUcAp8gDO8I?si=stn3P-RDHtUye_PG";
   
    document.getElementById("myChart").innerText = "";
    caixa_loga.style.display='none'
    document.getElementById("entra_loga").style.display = "";
    document.getElementById('caixa_criar').style.display = "none";

  } else if (vl.target.id == "jn2") {

    document.getElementById("yuo_tube").src =
    "https://www.youtube.com/embed/sy17sU57OB8?si=VdwJjrfSlVUAq7Hs";

    document.getElementById("myChart").innerText = "";
    caixa_loga.style.display='none'
    document.getElementById("entra_loga").style.display = "";
    document.getElementById('caixa_criar').style.display = "none";

  }
  // grafico a baixo
  else if (vl.target.id == "grafico") {
    console.log(vl.target.id)
    var gafico_pl1 = document.querySelector("#pl1").value;
    var gafico_pl2 = document.querySelector("#pl2").value;
    var gafico_pl3 = document.querySelector("#pl3").value;
    var gafico_pl4 = document.querySelector("#pl4").value;
    var gafico_pl5 = document.querySelector("#pl5").value;
    var gafico_pl6 = document.querySelector("#pl6").value;
    var gafico_pl7 = document.querySelector("#pl7").value;
    var gafico_pl8 = document.querySelector("#pl8").value;
    var gafico_pl9 = document.querySelector("#pl9").value;
    var gafico_pl10 = document.querySelector("#pl10").value;

    let gafico_pl = [
      gafico_pl1,
      gafico_pl2,
      gafico_pl3,
      gafico_pl4,
      gafico_pl5,
      gafico_pl6,
      gafico_pl7,
      gafico_pl8,
      gafico_pl9,
      gafico_pl10,
    ];

    var gafico_vl1 = document.querySelector("#pvl1").value;
    var gafico_vl2 = document.querySelector("#pvl2").value;
    var gafico_vl3 = document.querySelector("#pvl3").value;
    var gafico_vl4 = document.querySelector("#pvl4").value;
    var gafico_vl5 = document.querySelector("#pvl5").value;
    var gafico_vl6 = document.querySelector("#pvl6").value;
    var gafico_vl7 = document.querySelector("#pvl7").value;
    var gafico_vl8 = document.querySelector("#pvl8").value;
    var gafico_vl9 = document.querySelector("#pvl9").value;
    var gafico_vl10 = document.querySelector("#pvl10").value;

    let gafico_vl = [
      gafico_vl1,
      gafico_vl2,
      gafico_vl3,
      gafico_vl4,
      gafico_vl5,
      gafico_vl6,
      gafico_vl7,
      gafico_vl8,
      gafico_vl9,
      gafico_vl10,
    ];

    var nome1 = [
      `${gafico_pl[0]}`,
      `${gafico_pl[1]}`,
      `${gafico_pl[2]}`,
      `${gafico_pl[3]}`,
      `${gafico_pl[4]}`,
      `${gafico_pl[5]}`,
      `${gafico_pl[6]}`,
      `${gafico_pl[7]}`,
      `${gafico_pl[8]}`,
      `${gafico_pl[9]}`,
    ];

    var yArray = [
      `${gafico_vl[0]}`,
      `${gafico_vl[1]}`,
      `${gafico_vl[2]}`,
      `${gafico_vl[3]}`,
      `${gafico_vl[4]}`,
      `${gafico_vl[5]}`,
      `${gafico_vl[6]}`,
      `${gafico_vl[7]}`,
      `${gafico_vl[8]}`,
      `${gafico_vl[9]}`,
    ];

    var data = [
      {
        x: nome1,
        y: yArray,
        type: "bar",
      },
    ];

    var layout = { title: "World Wide Wine Production" };

    Plotly.newPlot("myChart", data, layout);

    document.getElementById("yuo_tube").src = "";
    caixa_loga.style.display='none'
    document.getElementById("entra_loga").style.display = "";
    document.getElementById('caixa_criar').style.display = "none";
   
  }
  // grafico 
});

