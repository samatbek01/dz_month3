//PHONE CHECKER
const phoneInput = document.querySelector(`#phone_input`);
const phoneButton = document.querySelector(`#phone_button`);
const phoneResult = document.querySelector(`#phone_result`);

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener(`click` ,  () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = `OK`
        phoneResult.style.color = `green`
    }else{
        phoneResult.innerHTML = ` NOT OK`
        phoneResult.style.color = `red`
    }
})
//TAB SLIDER
const tabContents = document.querySelectorAll(`.tab_content_block`)
const tabItems = document.querySelectorAll(`.tab_content_item`)
const tabParent = document.querySelector(`.tab_content_items`)

let indexSlide = 0
const hideTabContent = () => {
    tabContents.forEach((tabContent) => {
        tabContent.style.display = `none`
    })
    tabItems.forEach((tabItem) =>{
        tabItem.classList.remove(`tab_content_item_active`)
    })
}
const showTabContent = (index = 0) =>{
    tabContents[index].style.display = `block`
    tabItems[index].classList.add(`tab_content_item_active`)
}
hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains(`tab_content_item`)){
        tabItems.forEach((tabItem , tabIndex) => {
            if(event.target === tabItem){
                hideTabContent()
                indexSlide = tabIndex
                showTabContent(tabIndex)
            }
        })
    }
}
const autoSlider = () => {
    setInterval(() => {
        indexSlide++
        if (indexSlide > tabContents.length - 1) {
            indexSlide = 0
        }
        hideTabContent()
        showTabContent(indexSlide)
    }, 3000)
}
autoSlider(indexSlide)

 // CONVERTOR
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')
const converter = (element, targetElement,targetElement2, currentValue) => {
    element.oninput = async () => {
      try {
          const response = await fetch(`../data/package.json`)
          const data = await response.json()
          switch (currentValue) {
              case 'som':
                  targetElement.value = (element.value / data.usd).toFixed(2)
                  targetElement2.value = (element.value / data.eur).toFixed(2)
                  break
              case 'usd':
                  targetElement.value = (element.value * data.usd).toFixed(2)
                  targetElement2.value = (element.value *  0.92).toFixed(2)
                  break
              case 'eur':
                  targetElement.value = (element.value * data.eur).toFixed(2)
                  targetElement2.value = (element.value * 1.09).toFixed(2)
                  break
              default:
                  break
          }
          element.value === '' ? targetElement.value = '' : ''
          element.value === '' ? targetElement2.value = '' : ''
      }catch (error){
          console.error(error)
      }
    }
}
converter(somInput, usdInput, eurInput, 'som')
converter(usdInput, somInput, eurInput ,'usd')
converter(eurInput, somInput, usdInput ,'eur')

//Card Switcher
const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1
const URl = 'https://jsonplaceholder.typicode.com/todos/'
const cardFetcher = async (id) => {
    try {
        const response = await fetch(`${URl}${count}`)
        const data = await response.json()
                card.innerHTML =  `
            <p>${data.title} </p>
            <p style="color: ${data.completed ? 'green' : 'red'}">
            ${data.completed}
            </p>
            <span>${data.id}</span>
`
                card.style.borderStyle = data.completed ? 'green': 'red'
    }catch (error){
        console.error(error)
    }
}
cardFetcher(count)
btnNext.onclick = () =>{
    count++
    if (count>200){
        count = 1
    }
    cardFetcher(count)
}

btnPrev.onclick = () =>{
    count--
    if (count < 1){
        count = 200
    }
    cardFetcher(count)
}

//Weather
const citySearchInput = document.querySelector('.cityName')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const BASE_URl = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
//query params
const citySearch =  () =>{
    citySearchInput.oninput = async (event) => {
        const response = await fetch(`${BASE_URl}?q=${event.target.value}&appid=${API_KEY}`)
        const data = await response.json()
        try {
            cityName.innerHTML = data.name ? data.name : 'город не найден...'
            cityTemp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'
        } catch (data){

        }
    }
}
citySearch()




