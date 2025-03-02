

 
  async function lista_usuario(id){

    let obj_usuario ={

      id:id,
      email:email,
      telefone:telefone,
      nome:nome,
      senha:senha
    }
     const lista_obj=[]

   fetch("http://localhost:3009/lista_usuario")
      .then((conta) => conta.json())
      .then((usuario) => {

         


          for (var i = 0;   i < usuario.rows.length ; i++) {
            
             
             obj_usuario.id=usuario.rows[i].id
             obj_usuario.email=usuario.rows[i].email
             obj_usuario.telefone=usuario.rows[i].telefone
             obj_usuario.nome=usuario.rows[i].nome
             obj_usuario.senha=usuario.rows[i].senha
             
             lista_obj.push(obj_usuario)

          
          }
       
    })
    

    
   return lista_obj[0]

  }

  lista_usuario()

let promese = new Promise((erro,ok)=>{

   ok(lista_usuario())
  // erro('erro')

})

promese.then(

  function(valu){console.log(valu)},
  function(err){console.log(err)}

)