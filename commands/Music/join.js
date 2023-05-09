const { MessageEmbed, MessageButton, MessageActionRow, Permissions } = require("discord.js");

module.exports = {
  name: "join",
  aliases: ["j"],
  category: "Music",
  description: "Join voice channel",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: false,
  inVoiceChannel: true,
  sameVoiceChannel: false,
  execute: async (message, args, client, prefix) => {


    
    const { channel } = message.member.voice;

   var player = message.client.manager.get(message.guild.id);

    if (!message.guild.me.permissionsIn(channel).has([Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK])) return message.channel.send({embeds: [new MessageEmbed().setColor("#2f3136").setDescription(`I don't have enough permissions connect your vc please give me permission \`CONNECT\` or \`SPEAK\`.`)]});
   
    const emojiJoin = message.client.emoji.join;

    if (!player) {

      const player = message.client.manager.create({
        guild: message.guild.id,
        voiceChannel: channel.id,
        textChannel: message.channel.id,
        volume: 50,
        selfDeafen: true,
      });

      player.connect();

      return message.react(`<:Success:1074564018385211424>`);

    } else{
      player.setVoiceChannel(channel.id)
      player.pause(false);
      
      const But1 = new MessageButton().setCustomId("vdown").setEmoji("<:voldown:1066040773453287484>").setStyle("SECONDARY");
    
      const But2 = new MessageButton().setCustomId("rewind").setEmoji("<:seekbackward:1066040472377753703>").setStyle("SECONDARY"); 
   
   
      const But3 = new MessageButton().setCustomId("pause").setEmoji("<:pause:1066040132253261905>").setStyle("SECONDARY");
   
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
    player.get('nowplayingMSG').edit({components: [row, row1]})
    }catch(e) {
}
        
    }
    return message.react(`<:Success:1074564018385211424>`);
  }
};
