import puppeteer from "puppeteer"; // faze de cria sao 

console.log("o robo esta ligado ");

async function b() {
  const browser = await puppeteer.launch({ headless: false }); //'shell'
  const page = await browser.newPage();
  await page.goto("https://www.google.com/finance/quote/VALE3:BVMF");
  
  
}
//https://www.bing.com/search?q=deva11+dividendos&qs=SS&pq=deva11+di&sc=9-9&cvid=63DD5B679A76490AAF2B9D53FF1D8C63&FORM=QBRE&sp=1&ghc=1&lq=0
b()
