const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "settings",
    category: "Settings",
    description: "Shows the server settings.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      if (!message.member.permissions.has('MANAGE_GUILD') && !'701643179212013568'.includes(message.author.id)) return message.channel.send({embeds: [new MessageEmbed().setColor("#2f3136").setDescription('You must have `Manage Guild` permission to use this command.')]});
      let vc;
      let ap = await client.db.get(`auto_${message.guild.id}`)
      let tw = await client.db.get(`247_${message.guild.id}`)
      if(tw === "true") vc = await client.db.get(`vcid_${message.guild.id}`)
      const embed = new MessageEmbed()
      .setAuthor(`${client.user.username} Settings`, client.user.displayAvatarURL(), "https://discord.gg/ejSESjpgsF")
      .setColor("#2f3136")
      .setDescription(`**<a:prefix:1071399795664629872> Prefix** ${prefix}`)
      .addField(`<:infinity:1071400120861601823> 24/7`, tw === `true` ? "<:spectron_red_off:1088883505511014450><:spectron_green_on:1088883648125739109>" : "<:spectron_red_off:1088883505511014450><:spectron_green_on:1088883648125739109>")
      if(tw === `true`){
      embed.addField(`<:voice:1071392780200464424> 24/7 VC`, `<#${vc}>`)
    }
      embed.addField(`<:autoplay:1066039405741084712> Autoplay`, ap === `true` ? "<:spectron_red_off:1088883505511014450><:spectron_green_on:1088883648125739109>" : "<:spectron_red_off:1088883505511014450><:spectron_green_on:1088883648125739109>")
      message.channel.send({embeds: [embed]})
    }
}
