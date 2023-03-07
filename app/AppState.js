import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])

  snacks = [
    new Snack({ name: 'Candy-bar', price: 2.50, imgUrl: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25hY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Charcuterie Board', price: 12.75, imgUrl: 'https://images.unsplash.com/photo-1604307078172-9b46710cc5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Oreos', price: 3.25, imgUrl: 'https://images.unsplash.com/photo-1599629954294-14df9ec8bc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNuYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' })
  ]

  money = 0

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
