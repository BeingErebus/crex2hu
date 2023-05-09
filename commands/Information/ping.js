const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "ping",
    category: "Info",
    description: "Shows bot's Latency.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        const row = new MessageActionRow()
  .addComponents(

            new MessageButton()
 
             .setStyle("SECONDARY")
             .setEmoji("1052431089844637706")
             .setLabel(`${client.ws.ping} Ping`)
             .setCustomId(`hahy`)
             .setDisabled(true),
   )
     message.channel.send({components: [row]});
    }
}