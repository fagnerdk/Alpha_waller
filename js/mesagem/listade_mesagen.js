
/*listas de todas mesaden*/

 api_lista_mg ("http://localhost:3009/lista_mesagen")
let mage_top =400
async function api_lista_mg(obj){

 const linte_obj = await fetch(obj)
 const lista_mg = await linte_obj.json()

 
 for (let i =  0 ; i < lista_mg.rows.length ; i++){
 
   
    //console.log(lista_mg.rows[i])
  
      // cria lista para usuario

    
        const id_usuario= document.createElement("li");

        id_usuario.id =i
        
        id_usuario.style.backgroundColor = "rgb(5, 246, 9)";
        id_usuario.style.padding = "5px";
        id_usuario.style.width = "100px";
        id_usuario.style.marginLeft = `190px`;
        id_usuario.style.marginTop = `${mage_top}`;
        id_usuario.style.margin='15px;'
        id_usuario.style.borderRadius = "80px 80px 80px 0px";
        id_usuario.style.textAlign="center"
        id_usuario.innerHTML=lista_mg.rows[i].mesagen
        document.getElementById("lista").appendChild(id_usuario);


    
 
 }


}

/*listas de todas mesaden*/




        