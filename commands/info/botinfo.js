const Discord = require('discord.js');
const config = require('../../config.json');
const creator =require('../../creator.json');
const emoji = require('../../emoji.json')
module.exports = {
  name: "botinfo",
  description: "Menampilkan Info Dari Bot",
  category: "info",
run: async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${bot.user.username} Info`, bot.user.displayAvatarURL())
        .setColor('#45DDC0')
        .setFooter(`${bot.user.username}`)
        .addFields(
            {name: '**Bot Creator:**', value: `<@${creator.creator}> ${emoji.joget}`, inline: true},
            {name: '**Bot Name:**', value: `${bot.user.username}`},
            {name: '**Bot Used In:**', value: `${bot.guilds.cache.size} Server`},
            {name: '**Prefix:**', value: `${config.default_prefix}`},
            {name: '**Bot Version:**', value: `2.1.0`},
            {name: '**Bot Created at:**', value: '6/July/2020 08.24 PM'}
        )
        .setTimestamp()

        message.channel.send(embed);
}
}