//Declaração
let num = document.getElementById('txtnum')
let selnum = document.getElementById('selnum')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        selnum.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo foram inseridos ${total} números</p>`
        resultado.innerHTML += `<p>O maior número  digitado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor número  digitado foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos valores digitados é ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
