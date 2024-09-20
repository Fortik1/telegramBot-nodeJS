import createMessageSchedule from "../func/createMessageSchedule.js";
import {getSchedule} from "../../../scripts/getSchedule.js";
import getInfoUserById from "../func/getInfoUserById.js";

export default (bot) => async (msg) => {
    try {
        const waitMessage = await bot.sendMessage(msg.chat.id, 'Смотрю расписание...', {
            parse_mode: 'HTML'
        });

        const groupInfo = getInfoUserById(msg.from.id);

       const scheduleArr = createMessageSchedule(await getSchedule(groupInfo));

       await bot.deleteMessage(waitMessage.chat.id, waitMessage.message_id);

        await bot.sendMessage(msg.chat.id, `Расписание для группы: ${scheduleArr[0]}\nНачало недели: ${scheduleArr[1]}`);
        let weekDay = 0;
        const weekDayArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
       for (const schedule of scheduleArr.slice(2)) {
           // console.log(schedule.join(''));
          await bot.sendMessage(msg.chat.id, `<b>${weekDayArr[weekDay]}</b>\n${schedule.join('\n')}`, {
              parse_mode: 'HTML',
              disable_notification: true
          });
          weekDay += 1;
       };

        // await bot.editMessageText(schedule, {
       //    chat_id: waitMessage.chat.id,
       //    message_id: waitMessage.message_id,
       //     parse_mode: 'HTML'
       // });

    } catch (e) {
        console.log(e);
    }
};
