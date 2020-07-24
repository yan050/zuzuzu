const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "meme",
    description: "Mendapatkan Random Meme!!",
    category: "Fun",
    usage: "meme",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/meme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`**Error 404 :v | Coba Lagi Bang!!**`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Kita Mempunyai Meme!: `)
            .setDescription(data.caption)
            .setColor('#f3f3f3')
            .setImage(data.image)

        await message.channel.send(embed)
    }
}