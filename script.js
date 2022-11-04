function carregar() {
    var msg = window.document.getElementById("mensagem")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        //Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = "#DAA520"
    }
    else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'td.jpg'
        document.body.style.background = "#F4A460"
    }
    else{
       //Boa noite
       img.src = 'noite.jpg'
       document.body.style.background = "#4B0082"
    }
}
