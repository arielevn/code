const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        //do something
    }
})

//determine which type of key that is clicked
const key = e.target
const action = key.dataset.action

if (!action){
    console.log('number key!')
}

if(
    action === 'add' ||
    action === 'substract' ||
    action === 'divide' ||
    action === 'multiply'
){
    console.log('operator key!')
}

if(action === 'decimal'){
    console.log('decimal key!')
}

if(action === 'clear'){
    console.log('clear key!')
}

if(action === 'calculate'){
    console.log('equal key!')
}