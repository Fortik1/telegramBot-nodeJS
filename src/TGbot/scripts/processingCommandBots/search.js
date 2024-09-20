import { searchResult } from "../../answerText.js";
import getGroups from "../../../scripts/getGroups.js";

export default (bot) => async (msg) => {
    try {
        const groupList = await getGroups();
        const searchGroup = groupList.reduce((acc, el) => {
            if (el.name.toLowerCase().includes(msg.text.split(/группа /i)[1].toLowerCase())) {
                acc.push([{ text: el.name, callback_data: `${el.name}_${el.id}`}]);
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
