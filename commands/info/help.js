const { MessageEmbed } = require("discord.js");
const emoji = require("../../emoji.json")
module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField(`${emoji.party}  Description`, command.description || "Not Provided :(")
        .addField(`${emoji.party} Usage`, "`" + command.usage + "`" || "Not Provied")
        .addField(`${emoji.party} Category`, command.category  || "Not Provided")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setAuthor(`⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝`)
        .setDescription(`
${emoji.biru} | **Ethereal Bot Command**
**⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝**
${emoji.biru} ‣ **Gunakan e!help <command> Untuk Melihat Info Dari Command Tersebut**
${emoji.biru} ‣ **Prefix Dari Bot : e!**
${emoji.biru} ‣ **Bot Dibuat Oleh Eza And Iyann**
**⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝**`)
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            {name: `${emoji.lord} ‣ **Moderation**`, value: '**``Ban``** |'},
            {name: `${emoji.guling2} ‣ **Fun**`, value: '**``Triggerd``** | **``Ascii``**'},
            {name: `${emoji.lord} ‣ **Info**`, value: '**``Help``** | **``Botinfo``**'},
            {name: `${emoji.guling2} ‣ **Roleplay**`, value: '**``Slap``** | **``Kiss``**'},
            {name: `${emoji.lord} ‣ **Image**`, value: '**``Neko``** |'},
        )
        .setTimestamp();

         return message.channel.send(emx);
    }
  }
}