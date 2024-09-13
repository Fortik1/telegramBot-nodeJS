import addUser from '../func/addNewUser.js';
import checkUserInBd from '../func/checkUserInList.js';
import { reRegistration } from "../../answerText.js";

export default (bot) => async (msg) => {
    try {
        if (checkUserInBd(msg.from.id)) {
            await bot.sendMessage(msg.chat.id, reRegistration);
        } else {
            await bot.sendMessage(msg.chat.id, );
            const { id, first_name, username } = msg.from;
            const chat_id = msg.chat.id;
            addUser({ id, first_name, username, chat_id });
        }
    } catch (error) {
        console.log(error);
    }
};
