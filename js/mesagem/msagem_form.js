
 const socket = io('ws://localhost:3009');
 let  inp = document.getElementById("message");
 let usuario = document.querySelector(".usuario");
 let mage_top =400



socket.on('message',text =>{

 let usuario = document.createElement('li')
 
        usuario.id = socket.id
        console.log(usuario)
        usuario.style.backgroundColor = "rgb(5, 134, 246)";
        usuario.style.padding = "5px";
        usuario.style.width = "100px";
        usuario.style.marginLeft = `20px`;
        usuario.style.marginTop = `${mage_top}`;
        usuario.style.borderRadius = "80px 80px 0px 80px";
        usuario.style.display='flex'
        usuario.style.textAlign='center'
        usuario.style.margin='10px'
        usuario.innerHTML = text
        document.getElementById("lista").appendChild(usuario);

    inp.value=''
})

function enviar_for(id_form_msg) {
 
const text=inp.value

if (inp.value=='') {
  console.log('erro')
}else{
 socket.emit('message',text)

 }
 
    
  //console.log(inp.value)
 
}
