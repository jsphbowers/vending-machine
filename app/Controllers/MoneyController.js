import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"
import { setText } from "../Utils/Writer.js"

function _drawMoney() {
  console.log("Drawing money")
  let template = ''

  template += '$' + appState.money
  setText('money', template)

}


export class MoneyController {
  constructor() {
    // console.log("hello from moneycontroller")
    appState.on('money', _drawMoney)
  }
  addQuarter() {
    console.log("adding Quarter")
    moneyService.addQuarter()
  }

  addDollar() {
    console.log("adding Dollar")
    moneyService.addDollar()
  }

  purchase(snackName) {
    console.log("money Please!")
    moneyService.purchase(snackName)
  }
}