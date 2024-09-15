import addUser from '../func/addNewUser.js';
import checkUserInBd from '../func/checkUserInList.js';
import getDataBD from "../func/getDataBD.js";
import { reRegistration } from "../../answerText.js";

export default (ctx) => {
    const user_id = ctx.from.id;
    const first_name = ctx.from.first_name;
    const user_name = ctx.from.username;
    const user_group_name = ctx.data;
    const chat_id = ctx.message.chat.id;
    const group_list = getDataBD('group_list');
    let link;

    if (checkUserInBd(user_id)) {

    } else {
        group_list.forEach(({ name_group, link_schedule }) => {
            if (name_group === user_group_name) {
                link = link_schedule;
            }
            return;
        });
    }

    console.log(link, user_group_name);
};
