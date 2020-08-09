const Discord = require("discord.js");
const fetch = require("node-fetch");
const
module.exports = {
  name: "kiss",
  category: "interaction",
  description: "Mencium Seseorang",
  aliases: ["cium"],
  run: async (bot, message, args) => {
    if (!message.mentions.users.first())
      return message.channel.send("Mau Cium Siapa Nihh :3");

    fetch("https://waifu.pics/api/sfw")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
          .setAuthor(`Random Waifu Image Telah Spawn`)
          .setDescription(`Just Donload It`)
          .setImage(body.url)
          .setFooter(
            bot.user,
            bot.user.displayAvatarURL()
          );

        return message.channel.send(embed);
      });
  }
};