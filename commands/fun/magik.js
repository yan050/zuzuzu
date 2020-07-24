const Canvacord = require('canvacord');

const canvas = new Canvacord();

const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "magik",
run: async (client, message, args) => {

    const user = message.mentions.users.first() || message.author;

    const image = await canvas.magik(user.displayAvatarURL({ format: "png" }));

    const attachment = new MessageAttachment(image, "triggered.gif");

    return message.channel.send(attachment);

}
}