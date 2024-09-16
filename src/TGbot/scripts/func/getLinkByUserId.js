import getDataBD from "./getDataBD.js";

export default (id) => {
    const usersList = getDataBD('users');
    const groupList = getDataBD('group_list');
    let nameGroup;
    let link;

    for (const user of usersList) {
        if (user.user_id === id) {
            nameGroup = user.name_group;
            break
        };
    };

    for (const { name_group, link_schedule } of groupList) {
        if (String(name_group) === String(nameGroup)) {
            link = link_schedule;
            break;
        };
    };

    return link;
};
