import TelegramBot from'node-telegram-bot-api';
import startBot from './scripts/processingCommandBots/startBot.js';
import registerUser from './scripts/processingCommandBots/registerUser.js';
import getSchedule from './scripts/processingCommandBots/getSchedule.js';
import search from "./scripts/processingCommandBots/search.js";
import * as dotenv from 'dotenv';
import callback from "./scripts/processingCommandBots/callback.js";
import setGroup from "./scripts/processingCommandBots/setGroup.js";
import getGroups from "../scripts/getGroups.js";
dotenv.config();

export default () => {
    const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
        polling: true
    });

    bot.on("polling_error", err => console.log(err.data.error.message));

    bot.onText(/\/start/, startBot(bot));

    bot.on("callback_query", callback(bot));
    //bot.onText(/\/reg/, registerUser(bot));

    bot.onText(/группа/i, search(bot));

    bot.onText(/\/set_group/, setGroup(bot));

    bot.onText(/Расписание/i, getSchedule(bot))
};
