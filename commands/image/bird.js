const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bird",
    category: "image",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/bird";

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Bird Image`)
            .setColor(`#f3f3f3`)
            .setDescription(`*Dah donlod lah*`)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}