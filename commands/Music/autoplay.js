const { MessageEmbed, MessageActionRow, MessageButton, } = require("discord.js");

module.exports = {
    name: "autoplay",
    aliases: ["ap"],
    category: "Settings",
    description: "Toggle autoplay in this server!",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
   execute: async (message, args, client, prefix) => {
     const em1 = new MessageEmbed()

      if (!message.member.permissions.has('MANAGE_GUILD') && !'701643179212013568'.includes(message.author.id)) return message.channel.send({embeds: [new MessageEmbed().setColor("#2f3136").setDescription('You must have `Manage Guild` permission to use this command.')]});

        const player = message.client.manager.get(message.guild.id);


          let data = await client.db.get(`auto_${message.guild.id}`);
  if(!data)
  {
    client.db.set(`auto_${message.guild.id}`, `false`)
  }

        const emojireplay = message.client.emoji.autoplay;

        if (data === `false`) {
          client.db.set(`auto_${message.guild.id}`, `true`)
            let thing = new MessageEmbed()
                .setColor("#2f3136")
                .setDescription(`<:Success:1074564018385211424> | Autoplay mode is **enabled** in this server.`)
           return message.channel.send({embeds: [thing]});
        } else {
          client.db.set(`auto_${message.guild.id}`, `false`)
            let thing = new MessageEmbed()
                .setColor("#2f3136")
                .setDescription(`<:cross1:1074564046134718474> | Autoplay mode is **disabled** in this server.`)
               
            return message.channel.send({embeds: [thing]});
        }
   }
}