const openButton = document.querySelector('.openForm')
const closeBtn = document.querySelector('.close')
const formContainer = document.querySelector('.formContainer')

openButton.addEventListener('click', () => {
    formContainer.classList.remove('show')
})

closeBtn.addEventListener('click', () => {
    formContainer.classList.add('show')

})