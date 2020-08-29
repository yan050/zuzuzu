const Discord = require('discord.js')
const config = require('../../config.json')
const emoji = require('../../emoji.json');

module.exports = {
  name: "8ball",
  description: "Bertanya Kepada 8ball",
  category: "fun",
  aliases: ["ask"],
run: async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let replies = [
    "Yes!",
    "No!",
    "Hmm I don't Know",
    "I think.. Yes",
    "ofcourse Yes",
    "ofcourse No",
    "Nope",
    "What? NO!",
    "OMG Yes!",
    "I Don't Know. Ask Someone",
    "Ask Me Again The Question",
    "IWIBUVVKJASFYU NO!!!",
    "Are You Serious? YES!"
    ];
    
    if(!userArgs) {
    return message.channel.send('How am I going to predict nothing?')
    }

    let result = replies[Math.floor(Math.random()*(replies.length))]

    const embed = new Discord.MessageEmbed()
    .setTitle('Legendary :8ball: Berkata')
    .setDescription(`**${message.author.tag} Question:**\n${args}\n**My Answer:**\n${result} ${emoji.buwong}`)
    .setFooter(`${bot.user.username}`)
    .setColor("RANDOM")
    .setTimestamp()

    message.channel.send(embed);
}
}