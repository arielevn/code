const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')

keys.addEventListener('Click', e => {
    if (e.target.matches('button')){
        //do something
    }
})