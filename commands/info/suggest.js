const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "ʚ🍓꒱╰〃suggestion︰" || x.name === "ʚ🍓꒱╰〃suggestion︰"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Suggestion Baru : " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    
    let ambed = new MessageEmbed()
    .setAuthor(`New Suggestion!!`)
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(`Suggestion Anda Telah Dikirim! Terima Kasih :)`)
    .setImage(`https://images.app.goo.gl/yFqUCDNSrLwiy8B38`)
    message.channel.send(ambed)
    
  }
}