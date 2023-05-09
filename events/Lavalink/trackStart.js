const { MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
    
module.exports = async (client, player, track, payload) => {
   player.set(`previoustrack`, track);
  const emojiplay = client.emoji.play;
  let tr = track.title;
  let result = tr.substring(0, 63);
   const channel = client.channels.cache.get(player.textChannel);
if(!channel.guild.me.permissionsIn(channel).has('VIEW_CHANNEL')) return player.destroy();
  const song = player.queue.current
  var total = song.duration;
  const thing = new MessageEmbed()
        .setAuthor("Now Playing", client.user.displayAvatarURL(), "https://discord.gg/ejSESjpgsF")
        .setDescription(`<a:Playing_Audio:1066040244698365952> [${result}](${client.config.support})`)
        .addField("<:clock:1066039433582887025> Duration", `${convertTime(total)}`, true)
        .addField("<:user:1066040692595495043> Requester", `<@${track.requester.id}>`, true)
        .setColor("#2f3136")

        const But1 = new MessageButton().setCustomId("vdown").setEmoji("<:voldown:1066040773453287484>").setStyle("SECONDARY");
    
        const But2 = new MessageButton().setCustomId("rewind").setEmoji("<:seekbackward:1066040472377753703>").setStyle("SECONDARY"); 
     
     
        const But3 = new MessageButton().setCustomId("pause").setEmoji("<:pause:1066040132253261905>").setStyle("SUCCESS");
     
        const But4 = new MessageButton().setCustomId("forward").setEmoji("<:seekforward:1066040499137429585>").setStyle("SECONDARY");
         
        const But5 = new MessageButton().setCustomId("vup").setEmoji("<:volup:1066040808509296712>").setStyle("SECONDARY");
     
        const But6 = new MessageButton().setCustomId("back").setEmoji("<:previous:1066040308187545722>").setStyle("SECONDARY");
     
        const But7 = new MessageButton().setCustomId("right").setEmoji("<a:buttrfly:1071416923981619250>").setStyle("SECONDARY").setDisabled(true);
     
        const But8 = new MessageButton().setCustomId("stop").setEmoji("<:stop:1071414261693300788>").setStyle("DANGER");
     
        const But9 = new MessageButton().setCustomId("left").setEmoji("<a:buttrfly:1071416923981619250>").setStyle("SECONDARY").setDisabled(true);
     
        const But10 = new MessageButton().setCustomId("skip").setEmoji("<:skip:1066040642859450398>").setStyle("SECONDARY");
   
   const row = new MessageActionRow().addComponents(But1, But2, But3, But4, But5);
   const row1 = new MessageActionRow().addComponents(But6, But7, But8, But9, But10)
   try{
  let NowPlaying = await client.channels.cache
    .get(player.textChannel)
    .send({ embeds: [thing], components: [row, row1] });
  player.set("nowplayingMSG", NowPlaying);
   }catch(err) {
}

        
}