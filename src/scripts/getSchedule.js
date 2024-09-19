import axios from "axios";

const link = 'https://schedule.mstimetables.ru/api/publications/group/lessons';

export const getSchedule = async (_groupInfo) => {
    const groupInfo = {
        groupId: 13,
        date: "2024-09-16",
        publicationId: "cdb2a14c-a891-4f9f-b56c-7e8eb559c766" // всегда использовать это, т.к. это наша ссылка на наше расписание
    };

    const { data } = await axios.post(link, groupInfo);

    const scheduleWeek = data.lessons.reduce((acc, element, index) => {
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

    // const d = {
    //     1: {
    //         1: {
    //             startTime,
    //             endTime,
    //             lessons: [
    //                 {
    //                     lesson: "",
    //                     teacher: "",
    //                     cabinet: ""
    //                 }
    //             ]
    //         }
    //     }
    // }

    const scheduleData = {
        groupName: data.group.name,

    };

    console.log(scheduleWeek);
};
