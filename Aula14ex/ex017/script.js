function gerar() {
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    //Verificando se está preenchido
    if (txtnum.value.length == 0) {
        window.alert('[ERRO] preencha os dados corretamente')
    } else {
        var ntabuada = Number(txtnum.value)
        var n = 1
        tab.innerHTML = ''
        while (n <= 10) {
            var item = document.createElement('option')
            item.text = `${ntabuada} x ${n} = ${ntabuada * n}`
            item.value = `tab${n}`
            tab.appendChild(item)
            n++
        }
    }
}