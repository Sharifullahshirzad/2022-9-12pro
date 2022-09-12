

// const input = document.querySelector('#email')

// const inputs = document.querySelectorAll('input')

// const patterns ={
//     email:  /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]{2,8})\.([a-zA-Z0-9]{2,8})(\.[a-zA-Z0-9]{2,8})?$/,
//     phone : /^\d{10}$/,
//     password: /^[\w@-_]{6,20}$/,


// }

// function vaildate(field, regex){
//     if(regex.test(field.value)){
//         field.className = 'valid'
//     } else{
//         field.className = 'invalid'
//     }
// }

// inputs.forEach(function(input){


// input.addEventListener('keyup',function(e){


//     // console.log(e.target.attributes.name.value)


//     vaildate(e.target,patterns[e.target.attributes.name.value])
// })
// })


// function say(){
//     return 'hello'
// }


// console.log(say())

// let myfunc = ()=>{
//     console.log('hello frome function')
// }

// myfunc()

// hello = () => 'he dear '
// console.log(hello())


// sum = (a,b) =>'sum if A + B :' +(a+b)
// console.log(sum(4,6));

class person{
    constructor(name, age){
        this.thename= name;
        this.theage = age;

    }
}


let pobj = new person('hamid',23)
let pobj2 = new person('hiathullah',20)


console.log(pobj.thename)
console.log(pobj.theage)

console.log(pobj2.thename)
console.log(pobj2.theage)
