const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "unban",
    category: "Mod",
    aliases: [ "ub" ],
    description: "",
    args: false,
    usage: "",
    permission: [],
    owner: false,

    execute: async (message, args, client, prefix) => {

      
        if(!args[0])
        {
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | Command Usage : \`${prefix}unban <user_id>\``)]})
        }
        const bans = await message.guild.bans.fetch().catch(() => { });
        let reason = args.slice(1).join(' ');
        if(!reason) reason = `No Reason given`;

        let user = bans.map(x => x.user).find(u => u.id === args[0]);

        if(!user){
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:cross1:1074564046134718474> | I couldn't find that member in ban list.`)]})
        }

        message.guild.members.unban(user ? user.id : args[0],`${message.author.tag} | ${reason}`);
        return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:Success:1074564018385211424> | SuccessFully **Unbanned** ${user.tag} | **Executed by** : ${message.author.tag}\n | **Reason** : ${reason}`)]});
    }
}


