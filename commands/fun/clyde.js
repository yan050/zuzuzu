const Canvacord = require('canvacord');

const canvas = new Canvacord();

const { MessageAttachment } = require("discord.js");

module.exports = {

  name: "clyde",

  description: "Buat Clyde Berkata Anjay",

  category: "image",

run: async (client, message, args) => {

    const text = args.join(" ");

    if(!text) return message.channel.send("you need some text there");

    const image = await canvas.clyde(text);

    const attachment = new MessageAttachment(image, "clyde.png");

    return message.channel.send(attachment);

}

}