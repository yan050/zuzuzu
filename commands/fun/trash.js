const Canvacord = require('canvacord');
const canvas = new Canvacord();
const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "trash",
run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const image = await canvas.trash(user.displayAvatarURL({ format: "png" }));
    const attachment = new MessageAttachment(image, "trash.png");
    return message.channel.send(attachment);
}
  }