const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "baka",
  category: "roleplay",
  description: "Kalo Ada Yang Bodo Pake Aja Ni Command",
  aliases: ["bodo"],
  run: async (bot, message, args) => {
    if (!message.mentions.users.first())
      return message.channel.send("Siapa Sih Yang Bodoh?");

    fetch("https://nekos.life/api/v2/img/baka")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
          .setAuthor(`Baka`)
          .setTitle(
            `${message.author.username} Bilang ${
              message.mentions.users.first().username
            }. Baka, Kalo Bodo Jangan Ngajak Ngajak :v!`
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