const Discord = require('discord.js');
module.exports = {
  name :"supreme",
  category: "fun",
  description: "Membuat Text Menjadi Suprim",
run: async (client, message, args) => {
if (!args[0]) return message.channel.send("Please Add Text To Supremeify");
        
        const supreme = new Discord.MessageEmbed()
        .setColor('#de0000')
        .setTitle('Gabut Beut Lu Tong!')
        .setImage(`https://api.alexflipnote.dev/supreme?text=${args.join("%20")}`)
        .setFooter(`Requested By ${message.author.tag}`)
        .setTimestamp();
        
message.channel.send(supreme);
}
}