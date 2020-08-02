const Canvacord = require('canvacord');
const canvas = new Canvacord();
const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "wanted",
run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const image = await canvas.wanted(user.displayAvatarURL({ format: "png" }));
    const attachment = new MessageAttachment(image, "trash.png");
    return message.channel.send(attachment);
}
  }