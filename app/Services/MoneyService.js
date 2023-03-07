import { appState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";


class MoneyService {
  addQuarter() {
    appState.money += .25
    // console.log(appState.money);
    console.log(appState.money)
  }

  addDollar() {
    appState.money += 1
    // console.log(appState.money);
    console.log(appState.money)
  }

  purchase(snackName) {
    // `find the snack
    // compare if the snack's price is under the total added money
    // remove the price of the snack from the total money`
    let purchasedSnack = appState.snacks.find(snack => snack.name == snackName)
    if (purchasedSnack.price <= appState.money) {
      appState.money -= purchasedSnack.price
    } else {
      window.alert("Come back when you're a little more mmmmmmmm...richer")
    }

  }
}


export const moneyService = new MoneyService()
