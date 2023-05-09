const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hide",
    category: "Mod",
    aliases: [ "hide" ],
    description: "Hide channel",
    args: false,
    usage: "",
    permission: [],
    owner: false,

    execute: async (message, args, client, prefix) => {

        if (!message.member.permissions.has('MANAGE_CHANNELS')){
            const error = new MessageEmbed()
              .setColor("#2f3136")
              .setDescription(`You must have \`Manage Channels\` permission to use this command.`)
            return message.reply({embeds: [error]});
          }
          const channel = message.mentions.channels.first()  || message.guild.channels.cache.get(args[0])  ||  message.channel;
          if(channel.manageable){
          channel.permissionOverwrites.edit(message.guild.id, {
            VIEW_CHANNEL: false,
            reason: `${message.author.tag} (${message.author.id})`
          })
          const emb = new MessageEmbed()
            .setDescription(`<:Success:1074564018385211424> | ${channel} has been hidden for @everyone role`)
            .setColor("#2f3136")
            return message.channel.send({embeds: [emb]})
          } 
        else {
            const embi = new MessageEmbed()
              .setDescription(`<:cross1:1074564046134718474> | I don't have adequate permissions to hide this channel.`)
              .setColor("#2f3136")
            return message.channel.send({embeds: [embi]})
          }

      }
    }

