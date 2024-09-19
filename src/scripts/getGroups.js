import axios from 'axios';

const link = 'https://schedule.mstimetables.ru/api/publications/cdb2a14c-a891-4f9f-b56c-7e8eb559c766/groups';

export default async () => {
    const { data } = await axios.get(link);
    return data;
};
