import TelegramBot from'node-telegram-bot-api';
import startBot from './scripts/processingCommandBots/startBot.js';
import registerUser from './scripts/processingCommandBots/registerUser.js';
import * as dotenv from 'dotenv';
dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
    polling: true
});

bot.on("polling_error", err => console.log(err.data.error.message));

bot.onText(/\/start/, startBot(bot));

bot.onText(/\/reg/, registerUser(bot));
