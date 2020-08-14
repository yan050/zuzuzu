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
        .addField(`${emoji.party} Description`, command.description || "Not Provided :(")
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
${emoji.kado} | **Tamako Kitashirakawa Command**
**⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝**
${emoji.kado} ‣ **Gunakan t.help <command> Untuk Melihat Info Dari Command Tersebut**
${emoji.kado} ‣ **Prefix Dari Bot : t.**
${emoji.kado} ‣ **Bot Dibuat Oleh Iyann**
**⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝ ͝⏝**`)
        .setColor("BLUE")
        .setFooter(`Requested By : $(client` client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
            {name: `${emoji.guling2} ‣ **Moderation**`, value: 'Ban ‡ Kick'},
            {name: `${emoji.kannadance} ‣ **Fun**`, value:'**``Triggerd``** **│** **``Clyde``** **│** **``8ball``** **│** **``Ascii``** **│** **``Emojify``** **│** **``Changemymind``** **│** **``Deepfry``** **│** **``Delete``** **│** **``Gay``** **│** **``Rip``** **│** **``Supreme``** **│** **``Trash``** **│** **``Wanted``** **│** **``Math``** '},
            {name: `${emoji.guling2} ‣ **Info**`, value: '**``Help``** | **``Botinfo``** **│** **``Anime``** **│** **``Avatar``** **│** **``Corona``** **│** **``Imdb``** **│** **``Ping``** **│** **``Serverinfo``** **│** **``Uptime``** **│** **``Userinfo``** '},
            {name: `${emoji.kannadance} ‣ **Roleplay**`, value: '**``Slap``** | **``Kiss``**'},
            {name: `${emoji.guling2} ‣ **Image**`, value: '**``Neko``** |'},
        )
        .setTimestamp();

         return message.channel.send(emx);
    }
  }
}