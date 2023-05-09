const { MessageEmbed } = require("discord.js");
const db = require("../../schema/playlist");

module.exports = {
    name: "playlist-addqueue",
    aliases: ["pl-addqueue"],
    category: "Playlist",
    description: "Saves Current Queue To Playlist",
    args: true,
    usage: "<playlist name>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {

        const Name = args[0];
        const player = message.client.manager.get(message.guild.id);
        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("#2f3136")
                .setDescription("There is no music playing.");
            return message.reply({ embeds: [thing] });
        }
        const data = await db.find({ UserId: message.author.id, PlaylistName: Name })
        if (!data) {
            return message.reply({ embeds: [new MessageEmbed().setColor("#2F3136").setDescription(`<:cross1:1074564046134718474> | You don't have any Playlist named **${Name}**.`)] });
        }
        if (data.length == 0) {
            return message.reply({ embeds: [new MessageEmbed().setColor("#2F3136").setDescription(`<:cross1:1074564046134718474> | You don't have any Playlist named **${Name}**.`)] });
        }
        const song = player.queue.current;
        const tracks = player.queue;

        let oldSong = data.Playlist;
        if (!Array.isArray(oldSong)) oldSong = [];
        const newSong = [];
        if (player.queue.current) {
            newSong.push({
                "title": song.title,
                "uri": song.uri,
                "author": song.author,
                "duration": song.duration
            });
        }
        for (const track of tracks)
            newSong.push({
                "title": track.title,
                "uri": client.config.support,
                "author": track.author,
                "duration": track.duration
            });
        const playlist = oldSong.concat(newSong);
        await db.updateOne({
            UserId: message.author.id,
            PlaylistName: Name,
        },
            {
                $set: {
                    Playlist: playlist
                }

            });
        const embed = new MessageEmbed()
            .setAuthor(`Added Queue To Playlist ${Name}`, message.author.displayAvatarURL({dynamic: true}), "https://discord.gg/ejSESjpgsF")
            .setDescription(`<:queue:1066040371576057936> **Total Tracks Added: ${playlist.length - oldSong.length}**`)
            .setColor("#2F3136")
        return message.channel.send({ embeds: [embed] })

    }
}