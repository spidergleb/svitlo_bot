const TelegramBot = require("node-telegram-bot-api");
const { checkLight } = require("./svitlo");
require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error("Please provide a valid token for your Telegram bot");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log("Bot is running...");

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  const messageToReturn = (await checkLight()) || "Помилка";
  console.log("🚀 ~ bot.on ~ messageToReturn:", messageToReturn);
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "sad");
});
