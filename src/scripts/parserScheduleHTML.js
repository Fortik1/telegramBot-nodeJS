import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import { parseFromString } from 'dom-parser';

const parserScheduleHTML = async () => {
    const link = 'https://schedule.mstimetables.ru/publications/cdb2a14c-a891-4f9f-b56c-7e8eb559c766#/groups';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(link, {
        waitUntil: "networkidle2",
    });

    await page.waitForSelector('body');

    const content = await page.content();

    const $ = cheerio.load(content);

    const elementsArray = [];

    $('.d-flex.flex-column').each( (index, element ) => {
        parseFromString($(element).html())
            .getElementsByClassName('link')
            .map((el) => elementsArray.push(el));
    });

    const normalizeArray = elementsArray.map((element) => {
        const linkSchedule = link + element.attributes[1].value.split('groups')[1];
        const nameGroup = element.childNodes[0].text;
        return {
            nameGroup,
            linkSchedule,
        }
    });

    await browser.close();

    return normalizeArray;
};

export default parserScheduleHTML;
