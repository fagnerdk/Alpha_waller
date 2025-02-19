fetch("http://localhost:3009/lista_usuario")
  .then((respose) => respose.json())
  .then((data) => {
    var usuario_id = 1;
     [0].id;
    
    for (var i = 0; i < data.length; i++) {
      console.log(data)
      if (i == 1) {
        console.log(data);
        const id_usuario = document.createElement("li");

        id_usuario.id =i;

        id_usuario.style.backgroundColor = "rgb(8, 8, 239)";
        id_usuario.style.width = "52px";
        id_usuario.style.marginLeft = "-19px";
        id_usuario.style.marginTop = "3px";
        id_usuario.style.borderRadius = "9px 0px 0px 0px";
        document.getElementById("").appendChild(id_usuario);

        const mesage_valo = document.createElement("div");
        mesage_valo.id = data[i].mesagen
        mesage_valo.style.backgroundColor = "lime";
        mesage_valo.style.width = "20px";
        mesage_valo.style.marginLeft = "45px";
        mesage_valo.style.textAlign = "center";
        mesage_valo.style.borderRadius = " 0px 0px 25px 25px";
        mesage_valo.style.border = "solid 1px #ffff00";
        document.getElementById(id_usuario.id).appendChild(mesage_valo);

        const mesage_spam = document.createElement("samp");
        mesage_spam.id = usuario_id += i;
        document.getElementById(mesage_valo.id).appendChild(mesage_spam);
        document.getElementById(mesage_spam.id).innerHTML = data[i].id

        const foto = document.createElement("div");
        foto.id = "foto_msg";
        document.getElementById(id_usuario.id).appendChild(foto);

        const conte = document.createElement("div");
        conte.id = "lane";
        conte.innerHTML = "online";
        conte.style.backgroundColor = "lime";
        document.getElementById(id_usuario.id).appendChild(conte);
      }
      
      
    }

    if ("online") {
      function onFunction() {
        var a = document.getElementById("lane");
        a.innerHTML = "online";
        a.style.backgroundColor = "lime";
        
      }
      onFunction();
      
    } else {
      function offFunction() {
        var b = document.getElementById("lane");
        b.innerHTML = " offline";
        b.style.backgroundColor = "red";
      }
    
      offFunction();
    }
  })
  .catch((erro) =>{ console.log(erro)});

  