import getLinkByUserId from "../func/getLinkByUserId.js";
import createMessageSchedule from "../func/createMessageSchedule.js";
import {getSchedule} from "../../../scripts/getSchedule.js";

export default (bot) => async (msg) => {
    try {
        const waitMessage = await bot.sendMessage(msg.chat.id, 'Смотрю расписание...', {
            parse_mode: 'HTML'
        });

        const link = getLinkByUserId(msg.from.id);

       const schedule = createMessageSchedule(await getSchedule(link));

       await bot.editMessageText(schedule, {
          chat_id: waitMessage.chat.id,
          message_id: waitMessage.message_id,
           parse_mode: 'HTML'
       });

    } catch (e) {
        console.log(e);
    }
};
