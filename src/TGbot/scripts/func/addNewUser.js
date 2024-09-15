import fs from 'fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import getDataBD from "./getDataBD.js";

const filePath = resolve(cwd(), 'src/TGbot/simpleBD.json');

export default (userInfo) => {
    const { id, first_name, username, chat_id, name_group} = userInfo;
    try {
        const data = getDataBD();
        const userData = {
            user_id: id,
            first_name,
            user_name: username,
            name_group,
            notification: true,
            chat_id
        };

        const newData = {
            users_list: [...data.users_list, id],
            users: [...data.users, userData],
            group_list: data.group_list
        };

        fs.writeFileSync(filePath, JSON.stringify(newData));
    } catch (error) {
        console.log(error);
    }
};
