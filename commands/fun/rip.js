const Canvacord = require('canvacord');
const canvas = new Canvacord();
const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "rip",
run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const image = await canvas.rip(user.displayAvatarURL({ format: "png" }));
    const attachment = new MessageAttachment(image, "rip.png");
    return message.channel.send(attachment);
}
  }