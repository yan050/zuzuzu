const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "anipic",
  description: "Mendapatkan Foto Anime",
  category: "image",
  run: async (bot, message, args) => {
    let subreddits = ["anime"];
    let img = await api(subreddits);
    const Embed = new MessageEmbed()
      .setTitle(`A Anipic from r/${subreddits}`)
      .setURL(`https://reddit.com/r/${subreddits}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};