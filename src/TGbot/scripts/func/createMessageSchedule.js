export default (schedule) => {
    const number = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣"];
    return schedule.reduce((acc, scheduleDay, index) => {
        return acc + `<b>${scheduleDay.weekDay}</b> ${scheduleDay.date} \n${scheduleDay.lessons.reduce((acc, lesson, ind) => {
                    return acc + `
    ${number[ind]} (${lesson.timeStart} - ${lesson.timeStop})\n ${lesson.lessonsArr.reduce((acc, les) => {
                            return acc + `
    Предмет: ${les.lesson || '==='} 
    Учитель: ${les.teacher || '==='}
    Кабинет: ${les.cab || '==='}\n `}, '')}`}, '')} \n`}, '');
};
