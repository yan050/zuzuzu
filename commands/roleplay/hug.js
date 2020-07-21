const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "hug",
  category: "roleplay",
  description: "memeluk seseorang",
  aliases: ["peluk", "meluk"],
  run: async (bot, message, args) => {
    if (!message.mentions.users.first())
      return message.channel.send("Mau Meluk Siapa Nihh :3");

    fetch("https://nekos.life/api/v2/img/hug")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
          .setAuthor(`Acieee`)
          .setTitle(
            `${bot.user.username} Memeluk ${
              message.mentions.users.first().username
            }. Jangan Keras Keras Pak!`
          )
          .setImage(body.url)
          .setFooter(
            bot.user.username.toUpperCase(),
            bot.user.displayAvatarURL()
          );

        return message.channel.send(embed);
      });
  }
};
