const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "stats",
    category: "Info",
    aliases: [ "botinfo" ],
    description: "About botinfo",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => { 

      try {
        let dev = [], cdev = [], supp =[];
        let user = await client.users.fetch(`926712074132930660`);//Peace Dev
        dev.push(`[${user.username}](https://discord.com/users/926712074132930660)`);
        const row = new MessageActionRow()

.addComponents(

       new MessageButton()

        .setStyle("SECONDARY")
        .setEmoji("1062859198955794552")
        .setLabel(`${client.guilds.cache.size} Servers`)
        .setCustomId(`hehe`)
        .setDisabled(true),

        new MessageButton()

        .setStyle("SECONDARY")
        .setEmoji("1062859089627062462")
        .setLabel(`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Users`)
        .setCustomId(`haha`)
        .setDisabled(true),
       new MessageButton()

        .setStyle("SECONDARY")
        .setEmoji("1062859731556905070")
        .setLabel(`${client.channels.cache.size} Channels`)
        .setCustomId(`haho`)
        .setDisabled(true),
       new MessageButton()

        .setStyle("SECONDARY")
        .setEmoji("1062859502912819311")
        .setLabel(`${Math.round(client.ws.ping)} Ping`)
        .setCustomId(`hahy`)
        .setDisabled(true),
) 
        const statsEmbed = new MessageEmbed()
        .setColor("#2f3136")
          .setAuthor(`${client.user.username} 's Information`, client.user.displayAvatarURL())
          .setThumbnail(message.guild.iconURL({dynamic: true}))
          .setDescription(`**Name: <@${client.user.id}>\nUsers: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\nServers: ${client.guilds.cache.size}\nChannels: ${client.channels.cache.size}**`)
          .addField(`**__Owners__**`, `[NotHerHacker...!!](https://discord.com/users/926722572555534356), [! ~ Sandeep Baboria..?](https://discord.com/users/1031105449736540200), [~ Flexx </>](https://discord.com/users/1070384846385463366)`)
          .addField(`**__Supporters__**`, `[!              𝐑ᴀᴠᴀɴ](https://discord.com/users/1032692870580277248), [!   𝐑𝐨𝐥𝐥𝐞𝐱..!🚬](https://discord.com/users/261553832549548032)`)
        message.channel.send({embeds: [statsEmbed], components: [row]});
    } catch (e) {
      const emesdf = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(`An Error Occurred`)
      .setDescription(`\`\`\`${e.message}\`\`\``);
      return message.channel.send({embeds: [emesdf]});
    }
 
    }
}