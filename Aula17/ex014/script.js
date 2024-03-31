function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Dia
        img.src = 'fotomanha.webp'
        document.body.style.background = '#ac9c1e'
    }else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = 'fototarde.webp'
        document.body.style.background = '#d67747'
    }else {
        //Noite
        img.src = 'fotonoite.webp'
        document.body.style.background = '#303948'
    }
}