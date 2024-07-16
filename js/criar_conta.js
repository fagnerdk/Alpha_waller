

async function criar() {
  document.getElementById("caixa_loga").style.display = "none";
  document.getElementById("caixa_criar").style.display = "";

}

/*async function criar_conta(criar_conta) {
  var email_true = document.getElementById('email_true').value
  var data_form = $("#" + criar_conta);
  console.log(data_form)
  data_form.submit(function (e) {
    e.preventDefault();

    fetch("http://localhost:3000/usuario")
      .then((res) => res.json())
      .then((conta) => {

        for (let i = 0; i < conta.length; i++) {



          if (conta[i].email == email_true) {
            ///digete augo para u usuario aqui
          } else {

            $.ajax({
              type: data_form.attr("method"),
              url: data_form.attr("action"),
              data: data_form.serialize(),
              success: function (i) {
                console.log("mesagen enviada com sucesso!");

              },
              erro: function () {
                console.log("erro");

              },
            });

          }
        }

      });



    document.getElementById("caixa_loga").style.display = "";
    document.getElementById("caixa_criar").style.display = "none";
  });
}
*/

$(document).ready((function(){
  var nome4 = $('#nome').innerT
  console.log(nome4)
})())