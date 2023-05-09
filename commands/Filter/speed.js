const {
  MessageEmbed
} = require(`discord.js`);
module.exports = {
  name: `speed`,
  category: `Filter`,
  description: `Speeds Up The Song`,
  usage: `speed`,
   player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = message.client.manager.players.get(message.guild.id);
    if(!player) return;
    if (!args.length)
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setColor("#2f3136")
          .setDescription(`<:cross1:1074564046134718474> | Enter The Speed Limit between < 0.1 - 2.0 >`)
        ]
      });
    if (isNaN(args[0]))
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setColor("#2f3136")
          .setDescription(`Enter A Valid Speed`)
        ]
      });
    if (Number(args[0]) > 2 || Number(args[0]) <= 0)
      return message.channel.send({
        embeds: [new MessageEmbed()
          .setColor("#2f3136")
          .setDescription(`<:cross1:1074564046134718474> | Enter The Speed Limit between < 0.1 - 2.0 >`)
        ]
      });
    player.node.send({
      op: "filters",
      guildId: message.guild.id,
      equalizer: player.bands.map((gain, index) => {
        var Obj = {
          "band": 0,
          "gain": 0,
        };
        Obj.band = Number(index);
        Obj.gain = Number(gain)
        return Obj;
      }),
      timescale: {
        "speed": Number(args[0]),
        "pitch": 1.0,
        "rate": 1.0
      },
    });
    if (!message.channel) return;
    return message.channel.send({
      embeds: [new MessageEmbed()
        .setColor("#2f3136")
        .setDescription(`<:Success:1074564018385211424> | Speed Set To **${args[0]}**`)
      ]
    });
  }
};
