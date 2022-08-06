let valores = [3, 6, 4, 8, 6, 8, 1]
/*
console.log('Forma sem formatação')
console. log(valores)

console.log('Forma burra')
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

console.log('Forma inteligente')
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`O valor da posição ${pos} é ${valores[pos]}`)
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

