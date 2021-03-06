const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

module.exports = {
  name: "math",
  category: "Fun",
  description: "Mencari Jawaban Dari Soal Matematika",
  usage: "math (soal +, -, /, *)",
  run: async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send("Please Give Me Equation!");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setFooter(`Tamako`, client.user.displayAvatarURL())
        .setTitle(`**Jawabannya Adalah**`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Please Give Me Valid Equation | Try Again Later!`).then(() => console.log(error));
    }
  }
};