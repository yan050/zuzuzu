const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "indo",
  description: "Get a panda",
  category: "fun",
  run: async (bot, message, args) => {
    let subreddits = ["indonesia"];
    let img = await api(subreddits);
    const Embed = new MessageEmbed()
      .setTitle(`Indonesiaa!!`)
      .setURL(`https://reddit.com/r/${subreddits}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};