const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Info",
    aliases: [ "ab" ],
    description: "To get information about this bot!",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
          const row = new MessageActionRow()
           .addComponents(
        new MessageButton()
    .setLabel("Invite Me")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`),
    new MessageButton()
    .setLabel("Support Server")
    .setStyle("LINK")
    .setURL("https://discord.gg/crexbot")

			);
      const embed = new MessageEmbed()
        .setColor("#2f3136")
        .setAuthor(`About ${client.user.username}`, client.user.displayAvatarURL(), "https://discord.gg/crexbot")
        
        .setDescription(`Hey, I'm **${client.user.username}**. You can view all my commands by typing \`${prefix}help\`.`)
        .addField(`**__Owners__**`, `[NotHerHacker...!!](https://discord.com/users/926722572555534356), [! ~ Sandeep Baboria..?](https://discord.com/users/1031105449736540200), [~ Flexx </>](https://discord.com/users/1070384846385463366)`)
        .addField(`**__Supporters__**`, `[!              𝐑ᴀᴠᴀɴ](https://discord.com/users/1032692870580277248), [!   𝐑𝐨𝐥𝐥𝐞𝐱..!🚬](https://discord.com/users/261553832549548032)`)
        .setFooter({text : `Requested By : ${message.author.tag}` , iconURL : message.author.displayAvatarURL({dynamic : true})})
      message.channel.send({embeds: [embed], components: [row]})
    }
}