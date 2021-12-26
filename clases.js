// Declarando una clase
// const Rectangulo = class {

// }

// Expresión de clase
// clases declaradas cn class no tienen Hositing
class Rectangulo {

}


// Hoisting
// Y esto es cuando tomamos variables definidas con var
// y funciones definidas con function
//y las lleva al comienzo del archivo


function Cuadrado() {}
console.log(Cuadrado, Rectangulo)

const r = new Rectangulo()



class Chancho {
    propiedad = 'mi propiedad'

    // propiedad privada
    #hambre
    constructor(estado = 'regular', hambre = false) {
        this.estado  = estado
        this.#hambre = hambre
        // console.log(`soy un chancho feliz ${estado}`)
    }

    hablar () {
        console.log( ` soy un chancho ${this.estado} ${this.#hambre? 'con mucha hambe': 'sastifecho'  }` )
    }

    static comer() {
        console.log(this,'estoy comiendo!')
    }
}

Chancho.comer()
const feliz = new Chancho( 'felizzz' )
feliz.hablar()
// feliz.comer()
// const otro = new Chancho(  )
// otro.hablar()
