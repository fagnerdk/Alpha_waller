const form = document.querySelector(".form");
let usuario = document.querySelector(".usuario");
var mesagen = document.getElementById("nome1");

form.addEventListener("click", (valo) => {
  if (valo.target.attributes.class.value == "butao_delete") {
    mesagen.value = "";
  }

  if (valo.target.attributes.class.value == "butao_msg") {
    
    usuario.innerHTML = mesagen.value;
    mesagen.value;
  }
});

function enviar_for(id_form_msg) {
  var id_form = $("#" + id_form_msg);

  id_form.submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: id_form.attr("method"),
      url: id_form.attr("action"),
      data: id_form.serialize(),
      success: function (i) {
        console.log("mesagen enviada com sucesso!");

        console.log(i);
      },
      erro: function () {
        console.log("erro");
      },
    });

    mesagen.value = "";
  });
}
