const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const axios = require("axios");
module.exports = {
    name: "membercount",
    category: "Info",
    aliases: [ "mc" ],
    description: "Member Count",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {   

    const row = new MessageActionRow()
    .addComponents(
  
              new MessageButton()
   
               .setStyle("SECONDARY")
               .setEmoji("1062859089627062462")
               .setLabel(`${message.guild.memberCount}`)
               .setCustomId(`hahy`)
               .setDisabled(true),
    )

    const embed = new MessageEmbed()
    .setColor("#2f3136")
    .setTitle(`Members`)
    .setDescription(`**Only Humans** ${message.guild.memberCount}`)
    .setTimestamp()

    message.channel.send({ embeds: [embed], components: [row] });
    
    }
}