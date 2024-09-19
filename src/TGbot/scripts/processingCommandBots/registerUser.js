import addUser from '../func/addNewUser.js';
import checkUserInBd from '../func/checkUserInList.js';
import setGroup from "../func/setGroup.js";

export default (ctx) => {
    const [group_name, group_id] = ctx.data.split('_');
    const id = ctx.from.id;
    const first_name = ctx.from.first_name;
    const username = ctx.from.username;
    const chat_id = ctx.message.chat.id;

    if (checkUserInBd(id)) {
        setGroup({ id, group_name, group_id });
    } else {
        addUser({ id, first_name, username, chat_id, group_name, group_id });
    };
};
