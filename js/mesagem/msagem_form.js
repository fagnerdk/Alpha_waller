
 const socket = io('ws://localhost:3009');
 var  inp = document.getElementById("message");
 var usuario = document.querySelector(".usuario");
 var lista_msg1=document.getElementById("lista_msg")
 let mage_top =400

 socket.on('message_rcb', (arg) => { 
let usuario_locau = document.createElement('li') 
usuario_locau.style.backgroundColor =" rgb(5, 134, 246)"
usuario_locau.style.padding = "5px";
usuario_locau.style.width = "100px";
usuario_locau.style.marginLeft = `20px`;
usuario_locau.style.marginTop = `${mage_top}`;
usuario_locau.style.borderRadius = "80px 80px 0px 80px";
usuario_locau.style.display='flex'
usuario_locau.style.textAlign='center'
usuario_locau.style.margin='10px'
usuario_locau.innerHTML = arg
lista_msg1.appendChild(usuario_locau);
})

socket.on('message',(text) =>{



 let usuario = document.createElement('li')
 
        usuario.style.backgroundColor = "rgb(5, 246, 9)";
        usuario.style.padding = "5px";
        usuario.style.width = "100px";
        usuario.style.marginLeft = `190px`;
        usuario.style.marginTop = `${mage_top}`;
        usuario.style.margin='15px;'
        usuario.style.borderRadius = "80px 80px 80px 0px";
        usuario.style.textAlign="center"
        usuario.innerHTML=text
        lista_msg1.appendChild(usuario);

    inp.value=''
})


function enviar_for() {
 lista_msg1.style.display=""
const text=inp.value

if (inp.value=='') {
  console.log('erro')
   inp.value=''
}else{
 socket.emit('message',text)
   inp.value=''

 }
 
  //console.log(inp.value)
 
}
