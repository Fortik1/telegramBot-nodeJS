import { search } from "../../answerText.js";
import registerUser from "./registerUser.js";
import getGroups from "../../../scripts/getGroups.js";

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
                const groups = await getGroups();
                await bot.editMessageText('Вот список всех групп', {
                   chat_id: ctx.message.chat.id,
                    message_id: ctx.message.message_id,
                    reply_markup: {
                        inline_keyboard: groups.reduce((acc, el) => {
                            acc.push([{ text: el.name, callback_data: `${el.name}_${el.id}` }]);
                            return acc;
                        }, [])
                    }
                });
                break;
            }
            default: {
                registerUser(ctx);
                await bot.deleteMessage(ctx.message.chat.id, ctx.message.message_id);
                await bot.sendMessage(ctx.message.chat.id, `Прикрепил вас к группе ${ctx.data.split('_')[0]}`, {
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
