const { Util, MessageEmbed, Permissions } = require("discord.js");
const { TrackUtils, Player } = require("erela.js");
const { convertTime } = require('../../utils/convert.js');

module.exports = {
    name: "replay",
    category: "Music",
    aliases: ["rp"],
    description: "Replays The Current Song",
    permission: [],
    owner: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: true,
   execute: async (message, args, client, prefix) => {
     		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("#2f3136")
                .setDescription("<:cross1:1074564046134718474> | There Is Nothing Playing.");
            return message.channel.send({embeds: [thing]});
        }
     player.seek(0);
     message.react(`<:loop:1066039818653552640>`).catch(() => {})
   }
}