import getDataBD from "../func/getDataBD.js";
import { searchResult } from "../../answerText.js";

export default (bot) => async (msg) => {
    try {
        const groupList = getDataBD('group_list');
        const searchGroup = groupList.reduce((acc, { name_group }) => {
            if (name_group.toLowerCase().includes(msg.text.split(/группа /i)[1].toLowerCase())) {
                acc.push([{ text: name_group, callback_data: name_group }]);
            }
            return acc;
        }, []);

        await bot.sendMessage(msg.chat.id, searchResult, {
            reply_markup: {
                inline_keyboard: searchGroup
            }
        });
    } catch (e) {
        console.log(e);
    }
};
