const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')
const display = document.querySelector('.calculator-display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
    //checks if the clicked element (e.target) is a button element within keys. 
    //This helps ensure only button clicks are processed (ignoring clicks outside buttons).
    
        //determine which type of key that is clicked
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        //remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
            .foreach(k => k.classList.remove('is-depressed'))
        
        //Replacing the display's content by clicked key
        if (!action){
            if(displayedNum === '0'){
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        
        if(
            action === 'add' ||
            action === 'substract' ||
            action === 'divide' ||
            action === 'multiply'
        ){
            key.classlist.add('is-depressed')
            //add custome attribute
            calculator.dataset.previousKeyType = 'operator'
        }
        
        const previousKeyType = calculator.dataset.previousKeyType

        if(action === 'decimal'){
            display.textContent = displayedNum + '.'
        }
        
        if(action === 'clear'){
            console.log('clear key!')
        }
        
        if(action === 'calculate'){
            console.log('equal key!')
        }
    }
})