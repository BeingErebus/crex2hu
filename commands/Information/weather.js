const { MessageEmbed, MessageActionRow, MessageButton, } = require("discord.js");
module.exports = {
    name: "weather",
    category: "Info",
    aliases: [ "wet" ],
    description: "To get user banner",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        const name = args.join(" ");
    const place = args.join("-");
    if (!place) {
      return message.channel.send(
        "Please enter the name of a Country/City/Town"
      );
    }
    const link = `https://wttr.in/${place}.png?m`;
    const weblink = `https://wttr.in/${place}`;
    const embed = new MessageEmbed()
      .setTitle(`${name}'s Weather for Next 3 days`)
      .setImage(link)
      .setFooter("Made by ~ Crex HQ")
      .setColor("#2f3136");
    message.channel.send({ embeds: [embed] });
    }
}