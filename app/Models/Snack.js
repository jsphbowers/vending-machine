export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get listTemplate() {
    return `
    <div class="col-3 card m-2" onclick="app.moneyController.purchase('${this.name}')">
    <img class="p-3"
      src=${this.imgUrl}
      alt="${this.name}">
    <div>
      <h3 class="text-center">${this.name}</h3>
      <h5 class="text-end">$ ${this.price}</h5>
    </div>
  </div>
  `
  }
}
