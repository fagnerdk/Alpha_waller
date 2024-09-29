var erro_t = document.querySelector(".h1_0");


localStorage.setItem('usuario_onlane', 'false');


async function entra() {
  var id = "";
  var nome = "kaio";
  var email = document.getElementById("email").value;
  var telefone = "";
  var senha = document.getElementById("senha").value;
  if (email == '' || senha == '') {
    alert('ola voce esquecel de prenche seus dados de loguin!')
  }
  else {


    fetch("http://localhost:3000/usuario")
      .then((conta) => conta.json())
      .then((usuario) => {
        //console.log(usuario)
        for (let i = 0; i < usuario.length; i++) {

          if (usuario[i].email == email && usuario[i].senha == senha) {
            var armaze =
              usuario[i].id +
              " " +
              usuario[i].nome +
              " " +
              usuario[i].email +
              " " +
              usuario[i].telefone;
            document.getElementById("caixa_loga").style.display = "none";
            document.getElementById("foto_cap").style.display = "";
            document.getElementById("usuario_root").style.display = "";

            localStorage.setItem('usuario_onlane', 'true');
            /*foto*/
            var foto_usuario = document.getElementById('foto_usuario')

            var foto_cap= document.getElementById("foto_cap")
                
                
            foto_usuario.addEventListener("change",async (vet)=>{
                var fali= vet.target || window.Event.srcElement
                var files = fali.files
                var fr=new FileReader();
            
                fr.onload=()=>{
                    foto_cap.style.backgroundImage=`url(${fr.result})`
                    console.log(files)
                }
               
                fr.readAsDataURL(files[0])
            })
            /*foto*/


          } else {
            setTimeout(() => {
              erro_t.innerHTML = "erro email ou senha incorreta";
              erro_t.style.color = "#f10505";
              erro_t.style.fontSize = "20px";
            }, 1200);
          }
        }
      }).catch((erro) => { alert("ola pedimos desculpa estomos com o sevido desligador!") })



  }
}


//foto

//document.getElementById('ipt').addEventListener('click', (e) => console.log(document.getElementById('ipt').value))