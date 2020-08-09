//_______________________________________________________________
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "neko",
  description: "Gratis Neko Bos",
  category: "image",
  aliases: ["kucing"],
  run: async (bot, message, args) => {

        fetch("https://waifu.pics/api/sfw")
      .then(res => res.json())
      .then(body => {
        if (!body)
          return message.channel.send("**Aduh Kok Gk Bisa Ya? Coba Ulangin**");

        let embed = new Discord.MessageEmbed()
          .setAuthor(`Yey Ada Neko`)
          .setTitle(
            `*Udah Donlod Aja Udah*`
          )
          .setImage(body.url)
          .setFooter(
            `Tamako`,
            bot.user.displayAvatarURL()
          );

        return message.channel.send(embed);
      });
  }
};
//_______________________________________________________________