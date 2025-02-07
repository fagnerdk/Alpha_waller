 let b ='54,31'
 let x =2.30
 b = String(b).replace(".", "")
 b = String(b).replace(",", ".")
    let pois_soma =Number(b)+x
    console.log(pois_soma)
    
   let pp=pois_soma.toLocaleString("pt-br", {style:"currency", currency:"BRL"});
   
   console.log(pp)
   
   



