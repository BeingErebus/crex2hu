const { Util, MessageEmbed, Permissions } = require("discord.js");
const { TrackUtils, Player } = require("erela.js");
const { convertTime } = require('../../utils/convert.js');

module.exports = {
    name: "previous",
    category: "Music",
    aliases: ["back"],
    description: "Plays The Previous Song",
    permission: [],
    args: false,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
   execute: async (message, args, client, prefix) => {
const { channel } = message.member.voice;
        var player = message.client.manager.get(message.guild.id);
        const err = new MessageEmbed();
         err.setColor("#2f3136");
        if (!player.queue.current) {
                err.setDescription("<:cross1:1074564046134718474> | There Is Nothing Playing..");
            return message.channel.send({embeds: [err]});
        }
        if(!player.queue.previous){
          err.setDescription(`<:cross1:1074564046134718474> | There Is No Previous Song`)
          return message.channel.send({embeds: [err]});
        }
        else {
            player.queue.unshift(player.queue.previous);
            player.stop();
            return message.react(`<:previous:1066040308187545722>`)
        }
   }
}
        