module.exports = {
  name: "verify",
run: async (client, message, args) => {
  if (message.channel.id !== "695533613760118804") {
    return;
  }
  await message.delete();
  await message.member.roles.add("695549358942191686");
  return;
}
}