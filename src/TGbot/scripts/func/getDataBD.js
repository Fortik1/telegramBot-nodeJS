import fs from 'fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

export default (name = 'all') => {
    const filePath = resolve(cwd(), 'src/TGbot/simpleBD.json');
    const parseData = JSON.parse(fs.readFileSync(filePath, (err, data) => data));
    switch (name) {
        case 'users_list': {
            return parseData.users_list;
        }
        case 'users': {
            return parseData.users;
        }
        case 'group_list': {
            return parseData.group_list;
        }
        default: {
            return parseData;
        }
    }
};
