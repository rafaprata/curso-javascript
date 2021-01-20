let num = [5, 2, 8, 9, 3 ]

console.log(num)
console.log(`O vetor tem ${num.length} posições`)

for(let i=0;i < num.length;i++){
    console.log(`O valor da posição ${i} é ${num[i]}.`)
}

num.sort()

console.log(`Quando uso num.sort() meu vetor fica assim: ${num}`)

num.push(1)

console.log(`Adicionei um valor, meu vetor ficou assim: ${num}`)

//Um jeito mais simplificado de utilizar o for, somente para ARRAY

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

if(num.indexOf(4) == -1){
    console.log(`O valor 4 não foi encontrado, retornando ${num.indexOf(4)}`)
} else{
    console.log(`O valor 4 está na posição ${num.indexOf(4)}.`)
}