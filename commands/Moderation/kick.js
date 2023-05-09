const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    category: "Mod",
    aliases: [ "fuckban", "fuckoff" ],
    description: "",
    args: false,
    usage: "",
    permission: [],
    owner: false,

    execute: async (message, args, client, prefix) => {
        if(!args[0])
        {
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | Command Usage : \`${prefix}kick <user> [reason]\``)]})
        }
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) { return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | Please provide me a valid user.`)]}) }

        if(user.id === message.guild.ownerId) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`${client.embeds.cross} | You can't **Kick** Server Owner Dumb.`)]})
        if(client.config.ownerID.includes(user.id)) return message.channel.send({embeds : [ new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | I can't kick my owner.`)]})
        
        if(user.id === message.member.id) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | You can't **Kick** Yourself.`)]})
        if(!user.kickable) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | I can't **Kick** that user.Please check my role position and permissions.`)]})
        let reason = args.slice(1).join(' ');
        if(!reason) reason = `No Reason given`;
        message.guild.members.kick(user.id,{reason : `${message.author.tag} | ${reason}`}).catch((err) => {
            message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | I can't kick that user. Check my role position and permissions.`)]})
        });
        return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:Success:1074564018385211424> | SuccessFully **Kicked** ${user.user.tag} | **Executed by** : ${message.author.tag}\n | **Reason** : ${reason}`)]})
      }
    }