import { startBot, newUser } from '../../answerText.js';
import checkUserInBd from '../func/checkUserInList.js';
import getDataBD from "../func/getDataBD.js";
import getNameGroup from "../func/getNameGroup.js";

export default (bot) => async (msg) => {
    try {
        await bot.sendMessage(msg.chat.id, startBot);

        if (checkUserInBd(msg.from.id)) {
           // await bot.sendMessage(msg.chat.id, registerText); ToDo сообщить пользователю к какой группе он прекриплен
        } else {
            await bot.sendMessage(msg.chat.id, newUser, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Поиск по названию', callback_data: 'search'}],
                        [{ text: 'Весь список групп', callback_data: 'allGroupList'}]
                    ]
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
};
