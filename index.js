let copyright = document.querySelector('.brand')
const YEAR  = new Date().getFullYear()
try {
    copyright.textContent = `© ${YEAR} Windowsill`
} catch(e) {}



const submitBtn = document.querySelector('.submit-btn');
const inputs = document.querySelectorAll('input')
const data = document.createElement('p')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()


    for (let i = 0; i < inputs.length; i++) {
       console.log(`${inputs[i].id}: `, inputs[i].value)
    }
})
