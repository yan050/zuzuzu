const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "pat",
  category: "interaction",
  description: "Tau Lah Ya",
  aliases: ["menepuk"],
  run: async (bot, message, args) => {
    if (!message.mentions.users.first())
      return message.channel.send("Mau Menepuk Siapa Nih? :3");

    fetch("https://nekos.life/api/v2/img/pat")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("Whoops! I've broke, try again!");

        let embed = new Discord.MessageEmbed()
          .setAuthor(`Pat`)
          .setTitle(
            `${message.author.username} Menepuk ${
              message.mentions.users.first().username
            }. UmU`
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