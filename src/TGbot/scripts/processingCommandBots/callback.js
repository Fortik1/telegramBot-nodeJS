import { search} from "../../answerText.js";
import registerUser from "./registerUser.js";

export default (bot) => async (ctx) => {
    try {
        switch (ctx.data) {
            case 'search': {
                await bot.editMessageText(search, {
                    chat_id: ctx.message.chat.id,
                    message_id: ctx.message.message_id,
                });
            }
            case 'allGroupList': {
                console.log()
            }
            default: {
                registerUser(ctx);
            }
        }
    } catch (e) {
        console.log(e);
    }
};
