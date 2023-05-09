const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Info",
    aliases: [ "addme", "links", "inv"],
    description: "Shows Crex's official invite links!",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Crex")
    .setStyle("LINK")
    .setURL(`https://discord.com/oauth2/authorize?client_id=1088522233170886726&permissions=8&scope=bot%20applications.commands`)
			);

          const mainPage = new MessageEmbed()
            .setTitle("Invite Links For Crex!")
             .setColor("#2f3136")
            .addField('Crex', `[Invite Me](https://discord.com/oauth2/authorize?client_id=1088522233170886726&permissions=8&scope=bot%20applications.commands)`, true)
            .addField('Support Server', `[Click Here](https://discord.gg/ejSESjpgsF)`)
           message.channel.send({embeds: [mainPage], components: [row]})
    }
}