//_______________________________________________________________
const http = require("http");
const express = require("express");
const app = express();

var server = require("http").createServer(app);
app.get("/", (request, response) => {
  console.log(" TerPing Aing Hayyuk");
  response.sendStatus(200);
});
const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//_______________________________________________________________

const { token, default_prefix } = require("./config.json");
const { badwords } = require("./data.json");
const { config } = require("dotenv");
const discord = require("discord.js");
const emoji = require("./emoji.json");
const client = new discord.Client({
  disableEveryone: true
});

//_______________________________________________________________________________
const db = require("quick.db");
const { addexp } = require("./handlers/xp.js");
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

//_______________________________________________________________________________
client.on("ready", () => {
  console.log(`Aku Sudah Siap Dipakai!`);
  let statuses = [
    `Yuzuru!! | ${client.users.cache.size} User`,
    `y.help | ${client.users.cache.size} User`,
    `#StayAtHome | ${client.users.cache.size} User`
  ]; //Your Status's
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/NINJA"
    });
  }, 10000);
});

//_______________________________________________________________________________

function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

//_______________________________________________________________________________

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    if (is_url(message.content) === false) {
    }

    //_______________________________________________________________________________

    let confirm = false;
    var i;
    for (i = 0; i < badwords.length; i++) {
      if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
    }

    if (confirm) {
      message.delete();
      return message.channel.send(
        `${emoji.guling2} | Badword Terdeteksi!! Menghapus Pesan..`
      );
    }
  }

  //_______________________________________________________________________________

  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);

  return addexp(message);
});

//_______________________________________________________________________________

client.on("guildMemberAdd", member => {
  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let wembed = new discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#ff2050")
    .setThumbnail(member.user.avatarURL())
    .setDescription(
      `Selamat Datang, Semoga Betah Yaa :3 ${emoji.wel}${emoji.come}`
    );

  client.channels.cache.get(chx).send(wembed);
});
//_______________________________________________________________________________

client.snipes = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});

client.login(token);
//_______________________________________________________________________________
