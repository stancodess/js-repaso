// funciones que se declaran con la palabra reservada function
// funcionan como clases y tienen un contexto de this
function Fn() {

    this.props = 'propiedad'
    return 'chanchito feliz'
}

Fn.prototype.lala = function FuncionDePrototipo() {}

const r = new Fn()

// console.log(r.__proto__)


// fat arrow function
// no pueden ser llamadas con new, no tienen contexto de this

const fatFn = () => {
    this.prop = 'propiedad'
    return 'chanchito feliz'
}

const r1 = fatFn()

// console.log(r1)

// return implicito
const fnR = () => 2

console.log(fnR())