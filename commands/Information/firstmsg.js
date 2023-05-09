const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "firstmsg",
    category: "Info",
    aliases: [ "firstmsg"],
    description: "firstmsg",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
    
         
    const fetchMessages = await message.channel.messages.fetch({
        after: 1,
        limit: 1,
      });
      const msg = fetchMessages.first();
  
      
       const embed = new MessageEmbed()
          .setTitle(`First Messsage in ${message.guild.name}`)
          .setURL(msg.url)
          .setDescription("Content: " + msg.content)
          .addField("Author", `${msg.author}`)
          .addField('Message ID', `${msg.id}`)
          .addField('Created At', `${message.createdAt.toLocaleDateString()}`)
      .setColor("#2f3136")
      message.channel.send({ embeds: [embed] })

    }
}