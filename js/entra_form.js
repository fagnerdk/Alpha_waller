
 var erro_t =document.querySelector('.h1_0')

async function entra() {
  var id = '';
  var nome = "kaio";
  var email = document.getElementById("email").value;
  var telefone = '';
  var senha = document.getElementById("senha").value;

  
    fetch("http://localhost:3000/usuario")
      .then((conta) => conta.json())
      .then((usuario) => {
        for (let i = 0; i < usuario.length; i++) {
         
          if (usuario[i].email == email && usuario[i].senha == senha) {

            var armaze=usuario[i].id + " " +usuario[i].nome + " " +usuario[i].email + " " + usuario[i].telefone
            document.getElementById("caixa_loga").style.display = "none";
            document.getElementById("foto_cap").style.display = "";
            ///var usuario_onlane=document.cookie=true
            
          }
          else {
            setTimeout(()=>{
            erro_t.innerHTML='erro email ou senha incorreta'
            erro_t.style.color='#f10505'
            erro_t.style.fontSize='20px'
          },900)
        
      }
        }
      });
  
}