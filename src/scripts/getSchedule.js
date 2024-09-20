import axios from "axios";

const link = 'https://schedule.mstimetables.ru/api/publications/group/lessons';

export const getSchedule = async (groupInfo) => {

    const { date } = groupInfo;

    const { data } = await axios.post(link, groupInfo);

    const scheduleWeek = data.lessons.reduce((acc, element) => {
        const { weekday, lesson, startTime, endTime, teachers, cabinet, subject } = element;

        if (!acc[weekday]) {
          acc[weekday] = {};
        };

        if (!acc[weekday][lesson]) {
          acc[weekday][lesson] = { lessons: [] };
        };

        const currentLessen = acc[weekday][lesson];

        currentLessen.startTime = startTime;
        currentLessen.endTime = endTime;
        currentLessen.lessons.push({
            teachers: teachers[0].fio,
           cabinet: cabinet ? cabinet.name : null,
           lesson: subject.name
        });


        return acc;

    }, {});

    const scheduleData = {
        groupName: data.group.name,
        scheduleWeek,
        dateStartWeek: date,
    };

    return scheduleData;
};
