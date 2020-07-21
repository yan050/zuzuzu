const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "cosplay",
  description: "Mendapatkan Foto Anime",
  category: "image",
  run: async (bot, message, args) => {
    let subreddits = ["cosplay"];
    let img = await api(subreddits);
    const Embed = new MessageEmbed()
      .setTitle(`CosPlay!!`)
      .setURL(`https://reddit.com/r/${subreddits}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};