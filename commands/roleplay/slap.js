const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "slap",
  description: "Slap People",
  category: "interaction",
  aliases: ["tampar", "tabok"],
  run: async (bot, message, args) => {
    if (!message.mentions.users.first())
      return message.channel.send("Please mention a user to be slapped!");

    fetch("https://nekos.life/api/v2/img/slap")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("**Aduh Kok Gk Bisa Ya? Coba Ulangin**");

        let embed = new Discord.MessageEmbed()
          .setAuthor(`Slap!`)
          .setTitle(
            `${message.author.username} slapped ${
              message.mentions.users.first().username
            }. Sakit? Enak!`
          )
          .setImage(body.url)
          .setFooter(
            bot.user.username.toLowerCase(),
            bot.user.displayAvatarURL()
          );

        return message.channel.send(embed);
      });
  }
};