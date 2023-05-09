const { MessageEmbed, MessageActionRow, MessageButton, } = require("discord.js");
const axios = require("axios");
module.exports = {
    name: "servericon",
    category: "Info",
    aliases: [ "servericon", "serverav", "serveravatar" ],
    description: "Get guild icon",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

    const row = new MessageActionRow()

    .addComponents([

        new MessageButton() .setURL(message.guild.iconURL({ size: 2048, dynamic: true, format: "png"})) .setLabel("PNG") .setStyle("LINK"),

        new MessageButton() .setURL(message.guild.iconURL({ size: 2048, dynamic: true, format: "jpg"})) .setLabel("JPG") .setStyle("LINK"),

        new MessageButton() .setURL(message.guild.iconURL({ size: 2048, dynamic: true, format: "webp"})) .setLabel("WEBP")  .setStyle("LINK")
])
const embed = new MessageEmbed()
.setAuthor(`Servericon Of ${message.guild.name}`)
.setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))
.setColor("#2f3136")

message.channel.send({embeds: [embed], components: [row]});

    }
}