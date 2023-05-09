const { MessageEmbed, MessageActionRow, MessageButton, } = require("discord.js");
const axios = require("axios");
module.exports = {
    name: "avatar",
    category: "Info",
    aliases: [ "av" ],
    description: "To get user avatar",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

    const row = new MessageActionRow()

    .addComponents([

        new MessageButton() .setURL(member.displayAvatarURL({ size: 2048, dynamic: true, format: "png"})) .setLabel("PNG") .setStyle("LINK"),

        new MessageButton() .setURL(member.displayAvatarURL({ size: 2048, dynamic: true, format: "jpg"})) .setLabel("JPG") .setStyle("LINK"),

        new MessageButton() .setURL(member.displayAvatarURL({ size: 2048, dynamic: true, format: "webp"})) .setLabel("WEBP")  .setStyle("LINK")
])
const embed = new MessageEmbed()
.setAuthor(`Avatar Of ${member.user.username}`)
.setImage(member.displayAvatarURL({ dynamic: true, size: 2048 }))
.setColor("#2f3136")

message.channel.send({embeds: [embed], components: [row]});
    }
}