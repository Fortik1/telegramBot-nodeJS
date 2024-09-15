import { parseFromString } from 'dom-parser';
import * as cheerio from "cheerio";
import getContentByRef from "./getContentByRef.js";


export default async (link) => {
    //const testLink = 'https://schedule.mstimetables.ru/publications/cdb2a14c-a891-4f9f-b56c-7e8eb559c766#/groups/11/lessons?date=2024-09-16';

    const content = await getContentByRef(link);

    const $ = cheerio.load(content);

    const elementArray = [];

    $('.col.col-6').each((index, element) => {
        const dom = parseFromString($(element).html());
        const span = dom.getElementsByTagName('span');

        const lessons = dom.getElementsByTagName('tbody')[0].childNodes.reduce((acc, el) => {
            const timeDom = parseFromString(el.innerHTML).getElementsByClassName('time')[0];
            const [timeStart, timeStop] = parseFromString(timeDom.innerHTML).getElementsByTagName('div');

            let lessonsArr = [];

            const rowLessons = parseFromString(el.innerHTML).getElementsByClassName('row-lessons')[0];
            const lessonsDom = parseFromString(rowLessons.innerHTML).getElementsByClassName('lesson');

            if (!!lessonsDom) {
                lessonsDom.forEach((les) => {
                    const [lesson, teacher, cab] = les.childNodes;

                    const lessonObj = {
                        lesson: parseFromString(lesson.innerHTML).getElementsByTagName('span')[0].childNodes[0].text,
                        teacher: teacher.childNodes[0].text,
                        cab: cab ? cab.childNodes[0].text : '',
                    };

                    lessonsArr.push(lessonObj);
                });
            };

            const res = {
                timeStart: timeStart.childNodes[0].text,
                timeStop: timeStop.childNodes[0].text,
                lessonsArr
            };

            acc.push(res);
            return acc;
        }, []);

        const data = {
            weekDay: span[0].childNodes[0].text,
            date: span[2].childNodes[0].text,
            lessons
        };

        elementArray.push(data);
    });

    return elementArray;
};
