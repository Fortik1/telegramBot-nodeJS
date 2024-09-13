import TelegramBot from'node-telegram-bot-api';
import startBot from './scripts/processingCommandBots/startBot.js';
import registerUser from './scripts/processingCommandBots/registerUser.js';
import getApiKeyBot from './getApiKeyBot.js';

const { API_KEY_BOT } = getApiKeyBot();

const bot = new TelegramBot(API_KEY_BOT, {
    polling: true
});

bot.on("polling_error", err => console.log(err.data.error.message));

bot.onText(/\/start/, startBot(bot));

bot.onText(/\/reg/, registerUser(bot));
