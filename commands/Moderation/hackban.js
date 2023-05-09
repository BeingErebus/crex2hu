const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hackban",
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
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | Command Usage : \`${prefix}hacban <user> [reason]\``)]})
        }
        let user = args[0] || message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        let reason = args.slice(1).join(' ');
        if(!reason) reason = `No reason given`;
        if(!user) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | Please provide me a valid user.`)]});
        if(user.id === message.guild.ownerId) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | You cannot touch even Server Owner.`)]})
        if(client.config.ownerID.includes(user.id)) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | I cannot **HACK** n **BAN** my owner.`)]})
        if(user.id === message.member.id) return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | You cannot perform this hack on yourself.`)]})
        
        message.guild.members.ban(user,{reason : `${message.author.tag} | ${reason}`}).then(ban => {
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:Success:1074564018385211424> | SuccessFully **Hacked** N **Banned** <@${user}> | **Exectued by** : ${message.author.tag}\n | **Reason** : ${reason}`)]});
        })

      }
    }