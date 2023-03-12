/* IMPORTS */
import Card from '../components/Card.js'
import exampleCards from '../utils/examples.js'

/* CONSTANTS */
const cardsSection = document.querySelector('.cards')
const templateSelector = '#card'

/* FUNCTIONS*/
//добавление сгенерированных объявлений в разметку страницы
function renderCard(cardData) {
  cardsSection.append(createCard(cardData))
}
//создание разметки объявления
const createCard = (cardData) => {
  const card = new Card(cardData, templateSelector)
  return card.generateCard()
}
//перебор массива объявлений и передача каждого в функцию отрисовки отдельного элемента
function renderCards() {
  exampleCards.forEach((exampleCard) => {
    renderCard(exampleCard)
  })
}

renderCards()
renderCards()
renderCards()
renderCards()
















