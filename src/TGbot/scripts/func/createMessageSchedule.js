export default (schedule) => {
    const number = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"];
    const { groupName, scheduleWeek, dateStartWeek } = schedule;

    const scheduleStringArr = Object.entries(scheduleWeek).reduce((acc, [_, lessons]) => {
        const lessonsArr = Object.entries(lessons).reduce((acc, [ind, lesson]) => {
            let lessonsDayString = `${number[ind - 1]}${lesson.startTime}-${lesson.endTime}`;
            lesson.lessons.forEach((lessonInDay) => {
                lessonsDayString = lessonsDayString + '\n' + `      ${lessonInDay.lesson}\n      ${lessonInDay.teachers}\n      ${lessonInDay.cabinet || ''}`;
            });
           acc.push(lessonsDayString);
           return acc;
        }, []);
        acc.push(lessonsArr);
        return acc;
    }, [groupName, dateStartWeek]);

  return scheduleStringArr;
};
