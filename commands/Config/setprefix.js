const { MessageEmbed } = require("discord.js");

const { default_prefix } = require(`${process.cwd()}/config.json`)
module.exports = {
    name: "setprefix",
    category: "Settings",
    description: "Set Custom Prefix",
    args: false,
    usage: "",
    aliases: ["prefix"],
    permission: [],
    owner: false,
    async execute(message, args, client, prefix) {
     
 if (!args[0]) {
    const embed = new MessageEmbed()
        .setDescription(`The prefix for this server is \`${prefix}\``)
        .setColor("#2f3136")
      return message.channel.send({ embeds: [embed] });
    }
      if (!message.member.permissions.has('MANAGE_GUILD') && !'701643179212013568'.includes(message.author.id)) return message.channel.send({embeds: [new MessageEmbed().setColor("#2f3136").setDescription('You must have `Manage Server` permission to use this command.')]});
    if (args[1]) {
       const embed = new MessageEmbed()
        .setDescription("<:cross1:1074564046134718474> | You can not set prefix a double argument")
        .setColor("#2f3136")
      return message.channel.send({ embeds: [embed] });
    }

    if (args[0].length > 3) {
       const embed = new MessageEmbed()
        .setDescription("<:cross1:1074564046134718474> | You can not send prefix more than 3 characters")
        .setColor("#2f3136")
      return message.channel.send({ embeds: [embed] });
    }

    if (args.join("") === "!") {
      client.db.delete(`prefix_${message.guild.id}`);
      const embed = new MessageEmbed()
        .setDescription("<:Success:1074564018385211424> | Reseted Prefix")
        .setColor("#2f3136")
      return await message.channel.send({ embeds: [embed] });
    }

    client.db.set(`prefix_${message.guild.id}`, args[0]);
    const embed = new MessageEmbed()
       .setDescription(`<:Success:1074564018385211424> | Set Bot's Prefix to ${args[0]}`)
       .setColor("#2f3136")
    await message.channel.send({ embeds: [embed] });
  },
};
