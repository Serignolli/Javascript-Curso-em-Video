function verificar() {
    //Declaração das variaveis
    var resultado = window.document.getElementById('resultado')
    var txtano = window.document.getElementById('txtano')
    var ano = Number(txtano.value)
    var data = new Date()
    var anoatual = data.getFullYear()
    //Verificação de idade invalida
    if (txtano.value == 0 || txtano.value > anoatual) {
        window.alert('[ERRO] Verifque os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - ano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançaH.webp')
            } else if (idade < 18) {
                //adoslescente
                img.setAttribute('src', 'adolescentehomem.webp')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.webp')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.webp')
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançaM.webp')
            } else if (idade < 18) {
                //adoslescente
                img.setAttribute('src', 'adolescentemulher.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta.webp')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.webp')
            }
        }
        resultado.innerHTML = `Você é ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}