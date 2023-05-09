const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "roleinfo",
    category: "Info",
    aliases: [ "ri" ],
    description: "To Get Information About A Role",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
      if(!args[0] || !role) return message.channel.send({embeds : [new MessageEmbed().setColor("#2f3136").setDescription(`<:cross1:1074564046134718474> | Please provide me a valid role.`)]})

      const em = new MessageEmbed().setColor("#2f3136").addFields([
          {
              name : `__General Information__`,
              value : `**Role Name** : ${role.name} \n **Role Id** : ${role.id} \n **Role Position** : ${role.rawPosition} / ${message.guild.roles.highest.rawPosition} \n **Role Color** : ${role.hexColor} \n **Role Created** : <t:${Math.round(role.createdTimestamp / 1000)}:R> \n **Hoisted?** : ${role.hoisted ? `<:Success:1074564018385211424>` : `<:cross1:1074564046134718474>`} \n **Mentionable?** : ${role.mantionable ? `<:Success:1074564018385211424>` : `<:cross1:1074564046134718474>`} \n **Integration** : ${role.manageable ? `True` : `False`}`
          },
          {
              name : `__Allowed Permissions__`,
              value : `${role.permissions.toArray().sort((a,b) => a.localeCompare(b)).map(x => `\`${x}\``).join(', ')}`
          }
      ]).setAuthor({name : `${role.name}'s Information` , iconURL : client.user.displayAvatarURL()}).setThumbnail(message.guild.iconURL({dynamic : true})).setFooter({text : `Requested By : ${message.author.tag}` , iconURL : message.author.displayAvatarURL({dynamic : true})})

      return message.channel.send({embeds : [em]});
    }
}