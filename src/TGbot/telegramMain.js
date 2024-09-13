import TelegramBot from'node-telegram-bot-api';
import startBot from './scripts/processingCommandBots/startBot.js';
import registerUser from './scripts/processingCommandBots/registerUser.js';
import { API_KEY_BOT } from "./config.js";

const bot = new TelegramBot(API_KEY_BOT, {
    polling: true
});

bot.on("polling_error", err => console.log(err.data.error.message));

bot.onText(/\/start/, startBot(bot));

bot.onText(/\/reg/, registerUser(bot));
