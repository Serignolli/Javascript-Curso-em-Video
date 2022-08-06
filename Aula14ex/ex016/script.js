function contar() {
    //declaração de variaveis
    var txtinicio = window.document.getElementById('txtinicio')
    var txtfim = window.document.getElementById('txtfim')
    var txtpasso = window.document.getElementById('txtpasso')
    var resultado = document.getElementsById('resultado')
    //Verificar se tudo foi digitado
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        window.alert('[ERRO] Digite os dados corretamente')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        var ninicio = Number(txtinicio.value)
        var nfim = Number(txtfim.value)
        var npasso = Number(txtpasso.value)
        if (npasso == 0) {
            window.alert('Passo inválido, considerendo passo = 1')
            npasso = 1
        }
        //Contagem crescente
        if (ninicio < nfim) {
            for (var c = ninicio; c <= nfim; c += npasso) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        //Contagem regressiva
        } else {
            for (var c = ninicio; c >= nfim; c -= npasso) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
}