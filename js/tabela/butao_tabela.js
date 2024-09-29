
var valo_ct = [
  "corta0",
  "corta1",
  "corta2",
  "corta3",
  "corta4",
  "corta5",
  "corta6",
  "corta7",
  "corta8",
  "corta9",
];
valo_ct = ["", "", "", "", "", "", "", "", "", ""];


//buta//

async function my1() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data1").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd1").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia
  document.getElementById("pl1").value = papel; //barra de pesquisa

  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta1").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl1").value = papeis * cotaçao


}

async function my2() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data2").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd2").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl2").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta2").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl2").value = papeis * cotaçao;


}
async function my3() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data3").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd3").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl3").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta3").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl3").value = papeis * cotaçao;
}
async function my4() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data4").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd4").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl4").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta4").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl4").value = papeis * cotaçao;
}

async function my5() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data5").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd5").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl5").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta5").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl5").value = papeis * cotaçao;
}

async function my6() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data6").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd6").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl6").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta6").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl6").value = papeis * cotaçao;
}

async function my7() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data7").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd7").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl7").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta7").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl7").value = papeis * cotaçao;
}

async function my8() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data8").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd8").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl8").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta8").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl8").value = papeis * cotaçao;
}

async function my9() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data9").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd9").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl9").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta9").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl9").value = papeis * cotaçao;
}

async function my10() {
  var but2 = document.getElementById("mydata").value; //data
  document.getElementById("data10").value = but2; //data

  const nomer_pl2 = document.getElementById("mynome").value; //  nome do papel
  const pl = nomer_pl2; //  nome do papel

  const moedas = "7eFzfu6GZjKq6kde536ovJ";
  const url = `https://brapi.dev/api/quote/${pl}?token=${moedas}`;

  var papeis = document.getElementById("mynumber").value; // quantidade de papel
  document.getElementById("qtd10").value = papeis; // quantidade de papel
  document.getElementById("mynumber").value = ""; // lipa input

  let myObject = await fetch(url);
  let myText = await myObject.json();
  btc = myText.results[0]; // entrada

  const papel = btc.symbol; // nomes
  const cotaçao = btc.regularMarketPrice;
  const Mín = btc.regularMarketDayLow; // minima do dia
  const Máx = btc.regularMarketPreviousClose; // max do dia

  document.getElementById("pl10").value = papel; //barra de pesquisa
  document.getElementById("mynome").value = ""; // lipa input

  document.getElementById("corta10").value = valo_ct[0] = cotaçao; // valo de mecado
  document.getElementById("pvl10").value = papeis * cotaçao;
}
