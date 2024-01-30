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

//Post data
const formElement = document.querySelector('form')

// const postData = (form) =>{
//     form.addEventListener('submit' , (event) =>{
//         event.preventDefault()
//
//         const request = new XMLHttpRequest()
//         request.open('POST' , 'server.php')
//         request.setRequestHeader('Content-type ' , 'application/json')
//
//         const formData = new FormData(form)
//         const user = {}
//         formData.forEach((item , index) => user[index] = item)
//         const userJson = JSON.stringify(user)
//
//         request.send()
//     })
// }
// postData(formElement)

const postData = async (url, data) =>{
    return fetch(url, {
        method:'POST',
        headers:{"Content-type" :"application/json" },
        body:data
    })
}
const bindPostData = (form) => {
    form.onsubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const user = {}
        formData.forEach((item , index) => user[index] = item)
        const userJson = JSON.stringify(user)
        window.location.pathname === '/project/index.html'?
            await postData('server.php' , userJson):
            await postData('../server.php' , userJson)
    }
}
bindPostData(formElement)
// console.log(window.location.pathname)