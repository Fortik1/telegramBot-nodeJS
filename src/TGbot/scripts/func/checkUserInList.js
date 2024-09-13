import getData from './getDataBD.js';

export default (verifiedUserId) => {
    const userIs = getData('users_list').indexOf(verifiedUserId);
    return userIs !== -1 ? true : false;
};
