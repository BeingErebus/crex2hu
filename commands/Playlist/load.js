const { MessageEmbed } = require("discord.js");
const { TrackUtils, Player } = require("erela.js");
const db = require("../../schema/playlist");

module.exports = {
    name: "playlist-load",
    aliases: ["pl-load"],
    category: "Playlist",
    description: "Loads All Song Of Playlist To Queue.",
    args: true,
    usage: "<playlist name>",
    permission: [],
    owner: false,
    player: false,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {

        const Name = args[0];
        const player = message.client.manager.create({
            guild: message.guildId,
            voiceChannel: message.member.voice.channelId,
            textChannel: message.channelId,
            volume: 100,
            selfDeafen: true,
        });
        if (player && player.state !== "CONNECTED") 
        player.connect();

        const data = await db.findOne({ UserId: message.author.id, PlaylistName: Name })
        if (!data) {
            return message.reply({ embeds: [new MessageEmbed().setColor("#2F3136").setDescription(`<:cross1:1074564046134718474> | You don't have any Playlist named **${Name}**.`)] });
        }
        if (!player) return;
        let count = 0;
        const m = await message.reply({ embeds: [new MessageEmbed().setColor("#2F3136").setDescription(`Started loading **${data.Playlist.length}** Tracks from Playlist **${Name}**`)]})
      try{
        for (const track of data.Playlist) {
          if (client.config.support.match(client.Lavasfy.spotifyPattern))           {
             await client.Lavasfy.requestToken();
             let node = client.Lavasfy.nodes.get("main");
             let Searched = await node.load(client.config.support);
             if (Searched.loadType.startsWith("TRACK")) {
       player.queue.add(TrackUtils.build(Searched.tracks[0], message.author));
             ++count;
              }
          }
            else{
            let s = await player.search(client.config.support ? client.config.support : track.title, message.author);
            if (s.loadType === "TRACK_LOADED") {
                if (player.state !== "CONNECTED") player.connect();
                if (player) player.queue.add(s.tracks[0]);
                ++count;
            } else if (s.loadType === "SEARCH_RESULT") {
                if (player.state !== "CONNECTED") 
                player.connect();
                if (player) player.queue.add(s.tracks[0]);
                ++count;
            };
          }
        };
      }catch(err) { }
        if (player && !player.queue.current) 
        player.destroy();
        if (!player.playing && player.queue.size) player.play();
        if (count <= 0) return await m.edit({ embeds: [new MessageEmbed().setColor("#2F3136").setDescription(`<:cross1:1074564046134718474> | Can't load tracks from Playlist **${Name}**`)]}).catch(err => { })

        return await m.edit({ embeds: [new MessageEmbed().setColor("#2F3136").setDescription(`<:Success:1074564018385211424> | Successfully loaded **${count}** Tracks from Playlist **${Name}**`)]}).catch(err => { })
    }

};