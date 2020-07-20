const Discord = require('discord.js');
let days = 0;
let week = 0;

module.exports = {
    name: "uptime",
      category: "info",
    description: "Want to see the time from which the bot is online then this command is the right one!!",
    run: (client, message, args) => {
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} Hari, ${hours} Jam, ${minutes} Menit dan ${seconds} Detik`;

    let serverembed = new Discord.MessageEmbed()
        .setColor("#228B22")
        .addField('Uptime', uptime);

    message.channel.send(serverembed);

}
}