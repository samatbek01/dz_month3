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
const scrollDown = () => {
    if(window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight){
        openModal()
        document.removeEventListener("scroll", scrollDown)
    }
}
document.addEventListener('scroll', scrollDown)

//модальное окно каждый 10 секунд
setTimeout(openModal , 10000)
