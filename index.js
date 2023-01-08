const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(token, { polling: true });
const username = process.env.USERNAME;

async function sendMessage() {
    await bot.sendMessage(chatId, 'Workflow ejecutado correctamente tras el último commit. Saludos ' + username);
    console.log('Mensaje enviado');
    process.exit(0);
}

sendMessage();