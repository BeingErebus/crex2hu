const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    category: "Mod",
    aliases: [ "b" ],
    description: "",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

        if(!args[0])
        {
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | Command Usage : \`${prefix}ban <user> [reason]\``)]})
        }
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | Please prove me a valid user.`)]})

        let reason = args.slice(1).join(' ');
        if(!reason) reason = `No Reason given`;

        if(user.id === message.guild.ownerId) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | You can't **Ban** Server Owner Dumb`)]})
        if(client.config.ownerID.includes(user.id)) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | I can't **Ban** my owner.`)]})

        if(user.id == message.member.id) return message.channel.send({emebds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | You cannot **Ban** Yourself.`)]})
        if(!user.bannable) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | I can't **ban** that user.Please check my role position and permissions.`)]})
        message.guild.members.ban(user.id,{reason : `${message.author.id} | ${reason}`}).catch((err) => {
            message.channel.send({emebds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | I can't **Ban** that user.Please check my role position and permissions.`)]})
        });
        return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:Success:1074564018385211424> | SuccessFully **Banned** ${user.user.tag} | **Executed by** : ${message.author.tag}\n | **Reason** : ${reason}`)]})

      


      }
    }