import getDataBD from "./getDataBD.js";

export default (userId) => {
    let name_group;
    for (const user of getDataBD('users')) {
        if (user.user_id === userId) {
            name_group = user.name_group;
            break;
        };
    };

    const reRegistration = `Вы уже зарегистрированы) \nВаша группа: ${name_group} \nЕсли вы хотите сменить номер группы, нажмите /set_group`;
    return reRegistration;
}
