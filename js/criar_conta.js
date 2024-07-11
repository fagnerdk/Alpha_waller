
function criar(){
    document.getElementById('caixa_loga').style.display = "none";
    document.getElementById('caixa_criar').style.display = "";
}

function criar_conta(criar_conta) {
   

  var data_form = $("#" + criar_conta);
  data_form.submit(function (e) {
    e.preventDefault();
    //console.log(e)

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

    document.getElementById('caixa_loga').style.display = "";
      document.getElementById('caixa_criar').style.display = "none";

  });
}
