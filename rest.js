const rest = (...argumentos) => {
    console.log(argumentos)
}


rest(1,2,3)

const obj = {
    a:1, b:1, c:1, d:1
}

const { a } = obj

console.log(a);