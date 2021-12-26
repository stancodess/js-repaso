const arr = [0,1,2,3,4]

// const r = arr.filter(el => el > 2 )
const r = arr.filter(( el, i ) => {
    // console.log(i)
    return el > 2
} )



// console.log(r)

// const mapped = arr.map((el) => el *2 )

// console.log(mapped)

const users = [
    {id: 1, name: 'chanchito Feliz'},
    {id: 2, name: 'chanchito triste'},
    {id: 3, name: 'chanchito emocionado'},
    {id: 4, name: 'felipe'},
]


const mapped = users.map( (user) => `<h1>${user.name}</h1>` )

console.log(mapped)


const r1 = arr.reduce( (acc, el) => acc + el, 0 )