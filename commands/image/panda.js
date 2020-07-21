const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "panda",
    category: "image",
    description: "Foto Panda Ges",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Nih foto panda`)
            .setColor(`#f3f3f3`)
            .setDescription(`*Silahkan Didonlod*`)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}