//1
const wrapper = document.querySelector(".wrapper")
const samuraiPersons = () => {
    const request = new XMLHttpRequest()
    // console.log(request);
    request.open('GET', 'persons.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const samuraiPersons = JSON.parse(request.response)
        samuraiPersons.forEach((person) =>{
            const {name, age, person_photo} = person
            const personCard = document.createElement('div')
            personCard.setAttribute('class', 'personCard')
            personCard.innerHTML = `
            <div class="userPhoto">
            <img src="${person.photo}" alt="${name}">
</div>
            <h2>${person.name} </h2>
            <p>${person.magic}</p>
             <span>${person.color}</span>`

            wrapper.append(personCard)
        })
    })
}
samuraiPersons()


//2
const button = document.querySelector(`#btn`)

button.addEventListener(`click` , () => {
    const request = new XMLHttpRequest()
    request.open('GET' , 'any.json')
    request.setRequestHeader('Content-type' , 'application/json')
    request.send()

    request.addEventListener(`load` ,() => {
        const data = JSON.parse(request.response)
        document.querySelector(`.name`).innerHTML = data.name
        document.querySelector(`.age`).innerHTML = data.age
        document.querySelector(`.hobby`).innerHTML = data.hobby
    })
})

