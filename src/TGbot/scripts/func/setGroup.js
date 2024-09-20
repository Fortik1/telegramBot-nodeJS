import fs from 'fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import getDataBD from "./getDataBD.js";

const filePath = resolve(cwd(), 'src/TGbot/simpleBD.json');

export default ({ id, group_name, group_id }) => {
    try {
        const data = getDataBD();
        let userData;
        for (const user of data.users) {
            if (String(user.user_id) === String(id)) {
                userData = user;
                break;
            };
        };

        userData.group_name = group_name;
        userData.group_id = group_id;

        fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
};
