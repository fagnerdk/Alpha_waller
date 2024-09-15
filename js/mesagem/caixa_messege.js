var body = document.querySelector("body");
body.addEventListener("click", (valo) => {
  if (
    valo.target.childNodes.length == 3 &&
    valo.target.childNodes[2].innerHTML == "online"
    
  ) {
    
    fetch("http://localhost:3000/kaio3")
      .then((respose) => respose.json())
      .then((data) => {

       
        // mesage
          document.getElementById('colega').innerText= data[1].mesagen
        document.getElementById("colega").style.display = "";
        document.getElementById("1").innerText = "0";

      })
      .catch((erro) => console.error(erro));
  }
 // console.log(valo.target.childNodes)
});
