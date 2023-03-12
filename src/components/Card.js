class Card {
  constructor(cardData, templateSelector) {
    this._templateSelector = templateSelector
    this._name = cardData.name
    this._photoLink = cardData.photo
    this._price = cardData.price
    this._location = cardData.location
    this._date = cardData.date
    this._time = cardData.time
  }
  //метод для подготовки шаблона объявления
  _getTemplate() {
    return document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true)
  }
  //метод для добавления в шаблон данных из объекта с данными
  generateCard() {
    this._cardTemplateElement = this._getTemplate()
    this._cardTemplateElement.querySelector('.card__title').textContent = this._name
    this._cardTemplateElement.querySelector('.card__photo-container').style.backgroundImage = `url(${this._photoLink}`
    this._cardTemplateElement.querySelector('.card__price').textContent = `${this._price} ₽`
    this._cardTemplateElement.querySelector('#location').textContent = this._location
    this._cardTemplateElement.querySelector('#day').textContent = this._date

    this._cardTemplateElement.querySelector('#time').textContent = this._time
    //возвращение заполненной данными карточки объявления
    return this._cardTemplateElement
  }
}

export default Card

