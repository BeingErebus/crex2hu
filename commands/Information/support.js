const { MessageEmbed, MessageActionRow, MessageButton, } = require("discord.js");

module.exports = {
 name: "support",
    category: "Info",
    aliases: [ "server" ],
    description: "To get Support server link or report a issue (bug)!",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

      const row = new MessageActionRow()
           .addComponents(new MessageButton()
    .setLabel("Support Server")
    .setStyle("LINK")
    .setURL("https://discord.gg/ejSESjpgsF")
           );
           const embed = new MessageEmbed()
      .setDescription("[Click here](https://discord.gg/ejSESjpgsF) to join our support server.")
      .setColor("#2f3136")
      return message.reply({
                    embeds: [embed], components: [row]})
    }
}