const Canvacord = require('canvacord');
const canvas = new Canvacord();
const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "jail",
run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const image = await canvas.jail(user.displayAvatarURL({ format: "png" }));
    const attachment = new MessageAttachment(image, "jail.png");
    return message.channel.send(attachment);
}
  }