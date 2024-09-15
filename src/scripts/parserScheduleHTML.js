import { parseFromString } from 'dom-parser';
import * as cheerio from "cheerio";
import getCurrentDate from "./getCurrentDate.js";
import getContentByRef from "./getContentByRef.js";

const parserScheduleHTML = async () => {
    const link = 'https://schedule.mstimetables.ru/publications/cdb2a14c-a891-4f9f-b56c-7e8eb559c766#/groups';

    const content = await getContentByRef(link);

    const $ = cheerio.load(content);

    const elementsArray = [];

    $('.d-flex.flex-column').each( (_index, element ) => {
        parseFromString($(element).html())
            .getElementsByClassName('link')
            .map((el) => elementsArray.push(el));
    });

    const weekDate = getCurrentDate();

    const normalizeArray = elementsArray.map((element) => {
        const linkSchedule = link + element.attributes[1].value.split('groups')[1] + '?date=' + weekDate;
        const nameGroup = element.childNodes[0].text;
        return {
            nameGroup,
            linkSchedule,
        }
    });

    return normalizeArray;
};

export default parserScheduleHTML;
