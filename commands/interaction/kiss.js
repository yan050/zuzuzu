const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "kiss",
  category: "interaction",
  description: "Mencium Seseorang",
  aliases: ["cium"],
  run: async (bot, message, args) => {
    if (!message.mentions.users.first())
      return message.channel.send("Mau Cium Siapa Nihh :3");

    fetch("https://nekos.life/api/v2/img/kiss")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
          .setAuthor(``)
          .setTitle(
            `${message.author.username} Mencium ${
              message.mentions.users.first().username
            }. Anjayyy Brani Euyy!`
          )
          .setImage(body.url)
          .setFooter(
            bot.user,
            bot.user.displayAvatarURL()
          );

        return message.channel.send(embed);
      });
  }
};