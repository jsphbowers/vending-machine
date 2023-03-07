import { appState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnacks() {
  let template = ''
  let snacks = appState.snacks
  snacks.forEach(snack => template += snack.listTemplate)
  setHTML('snacks', template)

}

export class SnackController {
  constructor() {
    _drawSnacks()
  }
}