const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "purge",
    category: "Mod",
    aliases: [ "clear" ],
    description: "Purge Messages",
    args: false,
    usage: "",
    permission: [],
    owner: false,

    execute: async (message, args, client, prefix) => {

        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            message.reply({embeds: [new MessageEmbed().setColor("#2f3136").setDescription(`<:cross1:1074564046134718474> | You must have \`Manage Messages\` permissions to use this command.`)]})
          } 
          else {
            const amount = args[0];
            if (!amount) {
              message.reply({embeds: [new MessageEmbed().setColor("#2f3136").setDescription(`<:cross1:1074564046134718474> | You must provide the number of messages to be deleted.`)]})
            } 
            else {
              if (!parseInt(amount)) {
                message.reply({embeds: [new MessageEmbed().setColor("#2f3136").setDescription(`<:cross1:1074564046134718474> | You must provide a valid number of messages to be deleted.`)]})
              } else if (amount >= 1000) {
                message.reply({embeds: [new MessageEmbed().setColor("#2f3136").setDescription(`<:cross1:1074564046134718474> | You can't delete more than **999** messages at a time.`)]})
              } else {
                await message.delete().catch((_) => { });
                Delete(message.channel, amount);
                message.channel.send({embeds: [new MessageEmbed().setColor("#2f3136").setDescription(`<:Success:1074564018385211424> | Successfully deleted ${amount} messages.`)]})
              }
            }
          }
        }
      }
      
      function Delete(channel, amount){
        for (let i = amount; i > 0; i-=100) {
          if (i > 100) {
            channel.bulkDelete(100).catch((_) => { });
          } else {
            channel.bulkDelete(i).catch((_) => { });
          }

      }
    }