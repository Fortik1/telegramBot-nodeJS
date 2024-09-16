import getDataBD from "../func/getDataBD.js";
import { setGroup } from "../../answerText.js";

export default (bot) => async (msg) => {
    try {
        await bot.sendMessage(msg.chat.id, setGroup, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Поиск по названию', callback_data: 'search'}],
                    [{ text: 'Список всех групп', callback_data: 'allGroupList'}]
                ]
            }
        });
    } catch (e) {
        console.log(e);
    }
};
