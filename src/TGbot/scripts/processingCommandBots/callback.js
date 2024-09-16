import { search } from "../../answerText.js";
import registerUser from "./registerUser.js";
import getDataBD from "../func/getDataBD.js";

export default (bot) => async (ctx) => {
    try {
        switch (ctx.data) {
            case 'search': {
                await bot.editMessageText(search, {
                    chat_id: ctx.message.chat.id,
                    message_id: ctx.message.message_id,
                    parse_mode: 'HTML'
                });
                break;
            }
            case 'allGroupList': {
                await bot.editMessageText('Вот список всех групп', {
                   chat_id: ctx.message.chat.id,
                    message_id: ctx.message.message_id,
                    reply_markup: {
                        inline_keyboard: getDataBD('group_list').reduce((acc, { name_group }) => {
                            acc.push([{ text: name_group, callback_data: name_group }]);
                            return acc;
                        }, [])
                    }
                });
                break;
            }
            default: {
                registerUser(ctx);
                await bot.sendMessage(ctx.message.chat.id, `Прикрепил вас к группе ${ctx.data}`, {
                   reply_markup: {
                       keyboard: [
                           ['Расписание']
                       ],
                       resize_keyboard: true
                   }
                });
            }
        }
    } catch (e) {
        console.log(e);
    }
};
