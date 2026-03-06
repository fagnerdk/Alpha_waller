const socket = io('ws://localhost:3009')

var  inp = document.getElementById("message");
 var usuario = document.querySelector(".usuario");
 var lista_msg1=document.getElementById("lista_msg")
 let mage_top =400



//lista de mensagens recebidas

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


//loguin do usuario
async function entra() {
   

  let id = "";
  let nome = "";
  let email = document.getElementById("email").value;
  let telefone = "";
  let senha = document.getElementById("senha").value;

  if (email == '' || senha == '') {
    alert('ola voce esquecel de prenche seus dados de loguin!')
  }
  
   fetch("http://localhost:3009/lista_usuario")
      .then((conta) => conta.json())
      .then((usuario) => {
        for(var i=0;i<usuario.rows.length;i++){

          
         
              if(usuario.rows[i].email === email && usuario.rows[i].senha === senha){
               console.log(usuario.rows[i].email)
             document.getElementById("caixa_loga").style.display = "none";

             document.getElementById("foto_cap").style.display = "";
             document.getElementById("usuario_root").style.display = "";
            
               document.getElementById("foto_cap").style.backgroundImage = "url(https://scontent-for2-1.xx.fbcdn.net/v/t39.30808-1/540755178_1075118294778490_2111210186256199447_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHZw7oEYgQxm7nDvPT5tuncvZpRUb2OThS9mlFRvY5OFI4FfnQPn6e7RPgWskjU7xKJiMQvhliJtpACQ25BY6Me&_nc_ohc=d27Qr9u7pa0Q7kNvwE1Yfmo&_nc_oc=Adn2dWGQ0XFGR5Zhes2I4mhtrpFlsc5PAJjRR_N65-t4jzcbmYTs0OihbwJhWyEA7PQohFe-Ro1Ea5jUBkNa-ZPN&_nc_zt=24&_nc_ht=scontent-for2-1.xx&_nc_gid=gExyNnfkJz4MUT-LDsl7qQ&_nc_ss=8&oh=00_Afy0l2BPFTfC7FuZHOqY_dvPMoioxwD587U68kcIjnDruA&oe=69B0101A)";
             console.log("Login bem-sucedido!")
            
            
            }
          
          }
})}


 
//loguin do usuario



//em via mesagem
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
}

function x(){
  document.getElementById("caixa_loga").style.display = "none";
  document.getElementById("entra_loga").style.display = "";
}

//em via mesagem