import addUser from '../func/addNewUser.js';
import checkUserInBd from '../func/checkUserInList.js';
import setGroup from "../func/setGroup.js";

export default (ctx) => {
    const id = ctx.from.id;
    const first_name = ctx.from.first_name;
    const username = ctx.from.username;
    const name_group = ctx.data;
    const chat_id = ctx.message.chat.id;

    if (checkUserInBd(id)) {
        setGroup({ id, name_group });
    } else {
        addUser({ id, first_name, username, chat_id, name_group });
    };
};
