const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');

module.exports = {
	name: "nowplaying",
    aliases: ["abhi chal raha song"],
    category: "Music",
    description: "Shows details of current playing track.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: false,
	 execute: async (message, args, client, prefix) => {
  
        const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
          const emb = new MessageEmbed()
          emb.setDescription(`There Is Nothing Playing...`)
          emb.setColor("#2f3136")
            return message.channel.send({embeds: [emb]});
        }

        const song = player.queue.current

        const emojimusic = message.client.emoji.music;

        // Progress Bar
        var total = song.duration;
        var current = player.position;
        var size = 10;
        var emp = `<:bar:1071379987162218536>`;
        var line = '<:empty:1071379936230789151>';
        var slider = '<:bar:1071379987162218536>';
        
         let tr = song.title;
  let result = tr.substring(0, 63);
        let embed = new MessageEmbed()
        .setTitle("Now Playing")
            .setDescription(`[${result}...](${client.config.support})[<@${song.requester.id}>] \n[${progressbar(player, total, current, size, emp, line, slider)}] - ${convertTime(current)}/${convertTime(total)}`)
            .setColor("#2f3136")
         return message.channel.send({embeds: [embed]})
            
    }
};
function progressbar (player, total, current, size, emp, line, slider) {
       if (current > total) {
            const bar = line.repeat(size + 2);
            return bar;
        }
            const percentage = current / total;
            const progress = Math.round((size * percentage));
            const emptyProgress = size - progress;
            const progressText = emp.repeat(progress).replace(/.$/, `>`+slider);
            const emptyProgressText = line.repeat(emptyProgress);
            const bar = progressText + emptyProgressText;
            if (!String(bar).includes("<:bar:1071379987162218536>"))
            return `<:bar:1071379987162218536>${line.repeat(size - 1)}`;
            return bar;
        
    }