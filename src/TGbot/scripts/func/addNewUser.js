import fs from 'fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import getDataBD from "./getDataBD.js";

const filePath = resolve(cwd(), 'src/TGbot/simpleBD.json');

export default (userInfo) => {
    const { id, first_name, username, chat_id, group_name, group_id} = userInfo;
    try {
        const data = getDataBD();
        const userData = {
            user_id: id,
            first_name,
            user_name: username,
            group_name,
            group_id,
            notification: true,
            chat_id
        };

        const newData = {
            users_list: [...data.users_list, id],
            users: [...data.users, userData],
        };

        fs.writeFileSync(filePath, JSON.stringify(newData));
    } catch (error) {
        console.log(error);
    }
};
