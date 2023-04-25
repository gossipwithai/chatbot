const Insta = require("./insta.js");
const client = new Insta.Client();
const alexa = require("alexa-bot-api");
const ai = new alexa();

client.on("connected", () => {
  console.log(`${client.user.username} Is Ready Now For Chats`);
});

client.on("messageCreate", async (message) => {
  if (message.author.id === client.user.id) return
  message.markSeen();
  const reply = await ai.getReply(message.content, "english");
  message.chat.sendMessage(reply);
});

client.login(process.env.USERNAME, process.env.PASSWORD);
