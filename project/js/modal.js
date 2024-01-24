const modal = document.querySelector(`.modal`)
const modalTriggerButton = document.querySelector(`#btn-get`)
const modalCloseButton = document.querySelector(`.modal_close`)

const openModal = () => {
    modal.style.display = `block`
    document.body.style.overflow = `hidden`
}
openModal()
const closeModal = () => {
    modal.style.display = `none`
    document.body.style.overflow = ``
}
modalTriggerButton.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal){
        closeModal()
    }
}

//скрол
const scrollHandler = () =>{
    if ((window.innerHeight + window.screenY) >= document.body.offsetHeight){
        openModal()
        window.removeEventListener(`scroll` , scrollHandler)
    }
}
window.addEventListener(`scroll` , scrollHandler)

// console.log (window.innerHeight)
// console.log(window. screenY)
// console.log(document.body.offsetHeight)

//модальное окно каждый 10 секунд
// setTimeout(openModal , 10000)
