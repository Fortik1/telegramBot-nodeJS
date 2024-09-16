import puppeteer from "puppeteer";

export default async (link) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(link, {
        waitUntil: "networkidle2",
    });

    await page.waitForSelector('body');

    const content = await page.content();

    await browser.close();

    return content;
};
