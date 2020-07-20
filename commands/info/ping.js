const discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "Ping",
  category: "info",
  run: (client, message, args) => {
    let start = Date.now();

    message.channel
      .send({ embed: { description: "Pinging...", color: "RANDOM" } })
      .then(m => {
        let end = Date.now();

        let embed = new discord.MessageEmbed()
          .setAuthor("Ping!", message.author.avatarURL())
          .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
          .addField("Message Latency", end - start + "ms", true)
          .setColor("RANDOM");
        m.edit(embed).catch(e => message.channel.send(e));
      });
  }
};
