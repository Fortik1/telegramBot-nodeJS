import fs from 'fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import getDataBD from '../TGbot/scripts/func/getDataBD.js';

export default (groupsList) => {
    const filePath = resolve(cwd(), 'src/TGbot/simpleBD.json');
    const { users_list, users, group_list } = getDataBD();

    const new_group_list = groupsList.map(({ nameGroup, linkSchedule }) => {
        return {
            name_group: nameGroup,
            link_schedule: linkSchedule
        };
    });

    const newData = {
        users_list,
        users,
        group_list: [...group_list, ...new_group_list]
    }

    fs.writeFileSync(filePath, JSON.stringify(newData));

    console.log(JSON.parse(fs.readFileSync(filePath, 'utf-8')))
};