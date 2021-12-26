const fn = (a,b,c) => console.log( a + b + c )

const arr = [1,2,3]

fn(...arr)

const arr1 = [5,6]

const arr2 = [...arr,...arr1] // esto equivale a const arr2 = arr.concat(arr1)

// console.log(arr2)


const obj1 = { a:1, b: 2 }
const obj2 = { b:5, c:'chanchito feliz' }

// const obj3 = { ...obj1 }
// obj1.a = 10

// console.log(obj3)


const obj4 = { ...obj1, ...obj2 }

console.log(obj4)

const onj5 = {
    ...obj1,
    loading: true,
    data: {
        prop: 'lala',
        animal: 'perrito'
    }
}

console.log(onj5)