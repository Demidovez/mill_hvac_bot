import { Markup } from "telegraf";

const COMMON = [
  ["1A", "2ABC", "2D"],
  ["5A1", "5A2", "6A"],
  ["6B", "8A", "8G"],
  ["9C", "18", "10/12"],
  ["13", "14"],
];

const TEPLOPUNKT = [["Теплопункт"]];

const TEST = [["Производительность"]];

export default {
  COMMON: Markup.keyboard(COMMON).resize(),
  TEPLOPUNKT: Markup.keyboard(TEPLOPUNKT).resize(),
  INLINE_LEVEL_HELP: Markup.inlineKeyboard([
    Markup.button.callback("Справка", "level_help"),
  ]),
  TEST: Markup.keyboard(TEST).resize(),
};
