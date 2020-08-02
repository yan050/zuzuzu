const Canvacord = require('canvacord');
const canvas = new Canvacord();
const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "gay",
run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const image = await canvas.gay(user.displayAvatarURL({ format: "png" }));
    const attachment = new MessageAttachment(image, "gay.png");
    return message.channel.send(attachment);
}
  }