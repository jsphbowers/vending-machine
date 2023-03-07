import { appState } from "../AppState.js";


class MoneyService {
  addMoney() {
    appState.money += .25
    // console.log(appState.money);
    console.log(appState.money)
  }
}

export const moneyService = new MoneyService()
