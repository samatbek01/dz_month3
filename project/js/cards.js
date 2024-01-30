const card = document.querySelector('.card');
const URl = 'https://jsonplaceholder.typicode.com/posts'

const cardSmall = async () => {
    try{
        const response = await fetch (URl)
        const data = await response.json()
        data.forEach (data => {
            const cardItem = document.createElement('div')
            cardItem.classList.add('cardBig')
            cardItem.innerHTML = `
            <div class="cardLong">
            <div class="cardImg">
            <img src="https://img.mercedes-benz-kiev.com/data/news/240-mercedes-benz-s-class-podrobnyy-obzor-komforta-i-bezopasnosti-flagmanskogo-sedana/mercedes-benz-s-class-1.jpg" alt="e-class">
                </div>
            </div>
            <h3 class="cardTitle">${data.title}</h3>
            <p class="cardText">${data.body}</p>
            `
            card.append(cardItem)
        })
    }catch (error){
        console.error(error)
    }
}
cardSmall()