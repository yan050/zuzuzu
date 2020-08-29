const Canvacord = require('canvacord');
const canvas = new Canvacord();
const { MessageAttachment } = require("discord.js");
module.exports = {
  name: "changemymind",
  category: "image",
run: async (client, message, args) => {
    const text = args.join(" ");
    if(!text) return message.channel.send("you need some text there");
    const image = await canvas.changemymind(text);
    const attachment = new MessageAttachment(image, "changemymind.png");
    return message.channel.send(attachment);

}

}