import { startBot, newUser } from '../../answerText.js';
import checkUserInBd from '../func/checkUserInList.js';
import getNameGroup from "../func/getNameGroup.js";

export default (bot) => async (msg) => {
    try {
        await bot.sendMessage(msg.chat.id, startBot);

        if (checkUserInBd(msg.from.id)) {
           // await bot.sendMessage(msg.chat.id, registerText); ToDo сообщить пользователю к какой группе он прекриплен
        } else {
            await bot.sendMessage(msg.chat.id, newUser, {
                reply_markup: {
                    inline_keyboard: getNameGroup()
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
};
