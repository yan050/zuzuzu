module.exports = {
  name: "restart",
  category: "owner",
  run: async (client, message, args) => {
    if (message.author.id !== "719100478268506115") {
      return message.channel.send(`You cannot use this command!`);
    }
    await message.channel.send(`Restarting bot...`);
    process.exit();
  }
};
