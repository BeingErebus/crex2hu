const { MessageEmbed, MessageActionRow, MessageButton, } = require("discord.js");
const axios = require("axios");
module.exports = {
    name: "guildbanner",
    category: "Info",
    aliases: [ "serverbanner", "guildbanner" ],
    description: "Get guild banner",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

      const row = new MessageActionRow()

    .addComponents([

        new MessageButton() .setURL(message.guild.bannerURL({ size: 2048, dynamic: true, format: "gif"})) .setLabel("GIF") .setStyle("LINK")
])
      
        if(message.guild.banner) {
            let embed = new MessageEmbed()
              .setTitle(`Server Banner`)
              .setColor("#2f3136")
              .setImage(message.guild.bannerURL({size: 4096}))
            message.reply({embeds: [embed], components: [row]})
          } else {
            let embed = new MessageEmbed()
              .setDescription(`**This Server has no Banner!**`)
              .setColor("#2f3136")
              
              
            message.reply({embeds: [embed]})
          }

    }
}