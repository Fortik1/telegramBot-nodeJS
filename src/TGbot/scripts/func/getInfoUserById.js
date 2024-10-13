import getDataBD from "./getDataBD.js";
import getCurrentDate from "../../../scripts/getCurrentDate.js";

export default (id) => {
    let userData;

    for (const user of getDataBD('users')) {
        if (user.user_id === id) {
          userData = user;
          break;
        };
    };

    return {
        groupId: userData.group_id,
        date: getCurrentDate(),
        publicationId: "cdb2a14c-a891-4f9f-b56c-7e8eb559c766",
    };
};