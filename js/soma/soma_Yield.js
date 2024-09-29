
var pocetagem1 = () => {
    var ip_pcetag1 = document.getElementById('ip_pcetag1').value
    let yield = 0
    if (isNaN(ip_pcetag1)) {
        yield = parseFloat(ip_pcetag1.replace(",", ".")) / 100

        var corta1 = document.getElementById("corta1").value

        var vemelho1 = corta1 * yield
        document.getElementById("ip_cotaçao1").value = vemelho1.toFixed(2)
        var qtd1 = document.getElementById("qtd1").value * corta1 * yield
        document.getElementById("vede1").value = qtd1.toFixed(2)

    } else {

        yield = Number(ip_pcetag1) / 100
        var corta1 = document.getElementById("corta1").value
        var vemelho1 = corta1 * yield
        document.getElementById("ip_cotaçao1").value = vemelho1.toFixed(2)
        var qtd1 = document.getElementById("qtd1").value * corta1 * yield
        document.getElementById("vede1").value = qtd1.toFixed(2)
    }


}
var pocetagem2 = () => {

    var ip_pcetag2 = document.getElementById('ip_pcetag2').value
    let yield = 0

    if (isNaN(ip_pcetag2)) {
        yield = parseFloat(ip_pcetag2.replace(",", ".")) / 100
        var corta2 = document.getElementById("corta2").value
        var vemelho2 = corta2 * yield
        document.getElementById("ip_cotaçao2").value = vemelho2.toFixed(2)
        var qtd2 = document.getElementById("qtd2").value * corta2 * yield
        document.getElementById("vede2").value = qtd2.toFixed(2)
    } else {
        yield = Number(ip_pcetag2) / 100

        var corta2 = document.getElementById("corta2").value
        var vemelho2 = corta2 * yield
        document.getElementById("ip_cotaçao2").value = vemelho2.toFixed(2)
        var qtd2 = document.getElementById("qtd2").value * corta2 * yield
        document.getElementById("vede2").value = qtd2.toFixed(2)
    }

}
var pocetagem3 = () => {
    var ip_pcetag3 = document.getElementById('ip_pcetag3').value
    let yield = 0

    if (isNaN(ip_pcetag3)) {
        yield = parseFloat(ip_pcetag3.replace(",", ".")) / 100
        var corta3 = document.getElementById("corta3").value
        var vemelho3 = corta3 * yield
        document.getElementById("ip_cotaçao3").value = vemelho3.toFixed(2)
        var qtd3 = document.getElementById("qtd3").value * corta3 * yield
        document.getElementById("vede3").value = qtd3.toFixed(2)
    } else {
        yield = Number(ip_pcetag3) / 100
        var corta3 = document.getElementById("corta3").value
        var vemelho3 = corta3 * yield
        document.getElementById("ip_cotaçao3").value = vemelho3.toFixed(2)
        var qtd3 = document.getElementById("qtd3").value * corta3 * yield
        document.getElementById("vede3").value = qtd3.toFixed(2)

    }


}
var pocetagem4 = () => {
    var ip_pcetag4 = document.getElementById('ip_pcetag4').value
    let yield = 0

    if (isNaN(ip_pcetag4)) {
        yield = parseFloat(ip_pcetag4.replace(",", ".")) / 100
        var corta4 = document.getElementById("corta4").value
        var vemelho4 = corta4 * yield
        document.getElementById("ip_cotaçao4").value = vemelho4.toFixed(2)
        var qtd4 = document.getElementById("qtd4").value * corta4 * yield
        document.getElementById("vede4").value = qtd4.toFixed(2)
    } else {
        yield = Number(ip_pcetag4) / 100
        var corta4 = document.getElementById("corta4").value
        var vemelho4 = corta4 * yield
        document.getElementById("ip_cotaçao4").value = vemelho4.toFixed(2)
        var qtd4 = document.getElementById("qtd4").value * corta4 * yield
        document.getElementById("vede4").value = qtd4.toFixed(2)
    }
}
var pocetagem5 = () => {
    var ip_pcetag5 = document.getElementById('ip_pcetag5').value
    let yield = 0

    if (isNaN(ip_pcetag5)) {
        yield = parseFloat(ip_pcetag5.replace(",", ".")) / 100
        var corta5 = document.getElementById("corta5").value
        var vemelho5 = corta5 * yield
        document.getElementById("ip_cotaçao5").value = vemelho5.toFixed(2)
        var qtd5 = document.getElementById("qtd5").value * corta5 * yield
        document.getElementById("vede5").value = qtd5.toFixed(2)
    } else {
        yield = Number(ip_pcetag5) / 100
        var corta5 = document.getElementById("corta5").value
        var vemelho5 = corta5 * yield
        document.getElementById("ip_cotaçao5").value = vemelho5.toFixed(2)
        var qtd5 = document.getElementById("qtd5").value * corta5 * yield
        document.getElementById("vede5").value = qtd5.toFixed(2)

    }


}
var pocetagem6 = () => {
    var ip_pcetag6 = document.getElementById('ip_pcetag6').value
    let yield = 0

    if (isNaN(ip_pcetag6)) {
        yield = parseFloat(ip_pcetag6.replace(",", ".")) / 100
        var corta6 = document.getElementById("corta6").value
        var vemelho6 = corta6 * yield
        document.getElementById("ip_cotaçao6").value = vemelho6.toFixed(2)
        var qtd6 = document.getElementById("qtd6").value * corta6 * yield
        document.getElementById("vede6").value = qtd6.toFixed(2)

    } else {
        yield = Number(ip_pcetag6) / 100
        var corta6 = document.getElementById("corta6").value
        var vemelho6 = corta6 * yield
        document.getElementById("ip_cotaçao6").value = vemelho6.toFixed(2)
        var qtd6 = document.getElementById("qtd6").value * corta6 * yield
        document.getElementById("vede6").value = qtd6.toFixed(2)

    }

}
var pocetagem7 = () => {
    var ip_pcetag7 = document.getElementById('ip_pcetag7').value
    let yield = 0

    if (isNaN(ip_pcetag7)) {
        yield = parseFloat(ip_pcetag7.replace(",", ".")) / 100
        var corta7 = document.getElementById("corta7").value
        var vemelho7 = corta7 * yield
        document.getElementById("ip_cotaçao7").value = vemelho7.toFixed(2)
        var qtd7 = document.getElementById("qtd7").value * corta7 * yield
        document.getElementById("vede7").value = qtd7.toFixed(2)
    } else {
        yield = Number(ip_pcetag7) / 100
        var corta7 = document.getElementById("corta7").value
        var vemelho7 = corta7 * yield
        document.getElementById("ip_cotaçao7").value = vemelho7.toFixed(2)
        var qtd7 = document.getElementById("qtd7").value * corta7 * yield
        document.getElementById("vede7").value = qtd7.toFixed(2)
    }

}
var pocetagem8 = () => {
    var ip_pcetag8 = document.getElementById('ip_pcetag8').value
    let yield = 0

    if (isNaN(ip_pcetag8)) {
        yield = parseFloat(ip_pcetag8.replace(",", ".")) / 100
        var corta8 = document.getElementById("corta8").value
        var vemelho8 = corta8 * yield
        document.getElementById("ip_cotaçao8").value = vemelho8.toFixed(2)
        var qtd8 = document.getElementById("qtd8").value * corta8 * yield
        document.getElementById("vede8").value = qtd8.toFixed(2)
    } else {
        yield = Number(ip_pcetag8) / 100
        var corta8 = document.getElementById("corta8").value
        var vemelho8 = corta8 * yield
        document.getElementById("ip_cotaçao8").value = vemelho8.toFixed(2)
        var qtd8 = document.getElementById("qtd8").value * corta8 * yield
        document.getElementById("vede8").value = qtd8.toFixed(2)
    }

}
var pocetagem9 = () => {
    var ip_pcetag9 = document.getElementById('ip_pcetag9').value
    let yield = 0

    if (isNaN(ip_pcetag9)) {
        yield = parseFloat(ip_pcetag9.replace(",", ".")) / 100
        var corta9 = document.getElementById("corta9").value
        var vemelho9 = corta9 * yield
        document.getElementById("ip_cotaçao9").value = vemelho9.toFixed(2)
        var qtd9 = document.getElementById("qtd9").value * corta9 * yield
        document.getElementById("vede9").value = qtd9.toFixed(2)
    } else {
        yield = Number(ip_pcetag9) / 100
        var corta9 = document.getElementById("corta9").value
        var vemelho9 = corta9 * yield
        document.getElementById("ip_cotaçao9").value = vemelho9.toFixed(2)
        var qtd9 = document.getElementById("qtd9").value * corta9 * yield
        document.getElementById("vede9").value = qtd9.toFixed(2)
    }

}
var pocetagem10 = () => {
    var ip_pcetag10 = document.getElementById('ip_pcetag10').value
    let yield = 0

    if (isNaN(ip_pcetag10)) {
        yield = parseFloat(ip_pcetag10.replace(",", ".")) / 100
        var corta10 = document.getElementById("corta10").value
        var vemelho10 = corta10 * yield
        document.getElementById("ip_cotaçao10").value = vemelho10.toFixed(2)
        var qtd10 = document.getElementById("qtd10").value * corta10 * yield
        document.getElementById("vede10").value = qtd10.toFixed(2)
    } else {
        yield = Number(ip_pcetag10) / 100
        var corta10 = document.getElementById("corta10").value
        var vemelho10 = corta10 * yield
        document.getElementById("ip_cotaçao10").value = vemelho10.toFixed(2)
        var qtd10 = document.getElementById("qtd10").value * corta10 * yield
        document.getElementById("vede10").value = qtd10.toFixed(2)
    }
    
}

setInterval(() => {

    pocetagem1()
    pocetagem2()
    pocetagem3()
    pocetagem4()
    pocetagem5()
    pocetagem6()
    pocetagem7()
    pocetagem8()
    pocetagem9()
    pocetagem10()

}, 15000);
