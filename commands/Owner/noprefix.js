const { MessageEmbed , MessageActionRow , MessageButton } = require("discord.js");
const peace = ['926712074132930660', '1070384846385463366', '1032692870580277248', '983668145967489025', '909273123122184212' ]
module.exports = {
    name: "noprefix",
    aliases: ["np"],
    category: "Owner",
    description: "",
    args: false,
    usage: "<string>",
    permission: [],
    owner: true,
    adminPermit : false,
    ownerPermit : false,

    execute: async (message, args, client, prefix) => {

      const embed = new MessageEmbed()
      .setColor(client.embedColor)
      if (!peace.includes(message.author.id)) return;
    }
  }
  