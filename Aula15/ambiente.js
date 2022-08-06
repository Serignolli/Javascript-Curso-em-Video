let num = [5, 4, 3, 2, 1]
/*
console.log(`Nosso vetor é o ${num}`)
console.log(`Vetor com ${num.length} elementos`)

num[5] = 0

console.log(`Novo array ${num}`)
console.log(`Array com ${num.length} elementos`)

num.push(6)

console.log(`Array 3.0 ${num}`)
console.log(`Array com ${num.length} elementos`)

console.log(`Primeiro valor é ${num[0]}`)
console.log(`Ultimo valor é ${num[6]}`)

num.sort()

console.log(`Array ordenado fica ${num}`)

console.log(`Primeiro valor é ${num[0]}`)
console.log(`Ultimo valor é ${num[6]}`)
*/
let pos1 = num.indexOf(3)
let pos2 = num.indexOf(7)
if (pos1 == -1) {
    console.log('Valor não encontrado')
}else{
    console.log(`O valor esta na posição ${pos1}`)
}