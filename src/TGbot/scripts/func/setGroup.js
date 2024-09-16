import fs from 'fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import getDataBD from "./getDataBD.js";

const filePath = resolve(cwd(), 'src/TGbot/simpleBD.json');

export default ({ id, name_group }) => {
    try {
        const data = getDataBD();
        let userData;
        for (const user of data.users) {
            if (String(user.user_id) === String(id)) {
                userData = user;
                break;
            };
        };

        userData.name_group = name_group;

        fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
};
