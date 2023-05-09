const { MessageEmbed, MessageActionRow, MessageButton, Permissions } = require("discord.js");
const Topgg = require("@top-gg/sdk");
const topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1NTQ3NjQ5MjE0NjU3MzMzMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI3NTY4NTIwfQ.LYpw-Vue3NxklBxFnHXL7RQRealqFnAbOSRqHMLBdaU");

module.exports = async (client, message) => {
   
   if (message.author.bot) return;
   if (!message.guild) return;
   const premrow = new MessageActionRow()
     .addComponents(new MessageButton()
     .setLabel("Premium")
     .setStyle("LINK")
     .setURL("https://discord.gg/ejSESjpgsF"));
 

   let prefix = await client.db.get(`prefix_${message.guild.id}`);
      if (prefix === null) prefix = client.prefix;
      
    const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
var m = "";
try{
var p1 = message.client.manager.get(message.guild.id);
if(!p1) m = "null";
else {
const ch = message.guild.channels.cache.get(p1.voiceChannel);
m = ch.rtcRegion;
}
}catch(e) {

}
    if (message.content.match(mention)) {
      const row = new MessageActionRow()
           .addComponents(
        new MessageButton()
    .setLabel("Invite Me")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`),
    new MessageButton()
    .setLabel("Support Server")
    .setStyle("LINK")
    .setURL("https://discord.gg/ejSESjpgsF")
			);
      const embed = new MessageEmbed()
        .setColor("#2f3136")
        .setTitle(`${message.guild.name}`)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(`Developed with ❤️ By - Crex HQ`, message.guild.iconURL({dynamic: true}))
        .setDescription(`Hey ${message.author},\nMy Prefix here is: \`${prefix}\`\nServer Id: \`${message.guild.id}\`\n\nType \`${prefix}\`**help** To Get The Command List.`);
      message.channel.send({embeds: [embed], components: [row]}).catch((error) => {
  return message.author.send({embeds: [new MessageEmbed().setColor("#2f3136").setDescription(`**I do not have required permissions in that channel!**`)]}).catch((err) => {
     });
   });
};

let npArray = [];

let np = ['926722572555534356', '926712074132930660', '1031105449736540200', '909273123122184212', '1032692870580277248'];
         let regex = RegExp(`^<@!?${client.user.id}>( |)`);
        let pre = message.content.match(regex) ? message.content.match(regex)[0] : prefix;
        if(!np.includes(message.author.id)){ if(!message.content.startsWith(pre)) return;}
       const args = np.includes(message.author.id) == false ? message.content.slice(pre.length).trim().split(/ +/) :  message.content.startsWith(pre) == true ? message.content.slice(pre.length).trim().split(/ +/) : message.content.trim().split(/ +/);

    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) ||
        client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    if(!message.guild.me.permissionsIn(message.channel).has(Permissions.FLAGS.SEND_MESSAGES))
return message.author.send({embeds: [new MessageEmbed().setColor("#2f3136").setDescription(`**I do not have permission to \`Send Messages\` in that channel!**`)]}).catch((error) => {

});

if (!message.guild.me.permissionsIn(message.channel).has([Permissions.FLAGS.READ_MESSAGE_HISTORY, Permissions.FLAGS.EMBED_LINKS, Permissions.FLAGS.ADD_REACTIONS, Permissions.FLAGS.USE_EXTERNAL_EMOJIS]))
return message.channel.send(`I require the permissions: \`Read Message History\`, \`Embed links\`, \`Use external emojis\`, \`Add reactions\`.\n\nMake sure to check all the other roles I have for that permission and remember to check channel-specific permissions.
Thank you.`);
    
    const embed = new MessageEmbed()
        .setColor("#ff1010");

    // args: true,

    if(command.premium)
   {
     let voted = await topgg.hasVoted(message.author.id);
    if(!'701643179212013568'.includes(message.author.id)  && !voted && !uprem && !sprem){
    const row = new MessageActionRow()
    .addComponents(new MessageButton()
    .setLabel("Vote Me")
    .setStyle("LINK")
    .setURL("https://top.gg/bot/855476492146573332/vote"), 
    new MessageButton()
    .setLabel("Premium")
    .setStyle("LINK")
    .setURL("https://discord.gg/ejSESjpgsF")
    );
      embed.setDescription("You must [vote](https://top.gg/bot/855476492146573332/vote) me to use this command. If you want to disable this then [click here](https://discord.gg/ejSESjpgsF) to buy [premium](https://discord.gg/ejSESjpgsF) to listen interruption free **music**!")
      .setColor("#f6ff00")
    return message.channel.send({embeds: [embed], components: [row]})
    }
  }
    const player = message.client.manager.get(message.guild.id);

    if (command.player && !player) {
        embed.setDescription(`You should 1st play a song to use this command`);
        return message.channel.send({embeds: [embed]});
    }

    if (command.inVoiceChannel && !message.member.voice.channel) {
        embed.setDescription("You Must Be **Connected** To A Voice Channel First");
        return message.channel.send({embeds: [embed]});
    }

    if (command.sameVoiceChannel && message.member.voice.channel !== message.guild.me.voice.channel) {
      if(message.guild.me.voice.channel)
      {
        embed.setDescription(`You Must Be **Connected** In ${message.guild.me.voice.channel} To Use This Command`);
        return message.channel.send({embeds: [embed]});
      }
    }

  
        if (command.args && !args.length) {
        let reply = ``;
        // usage: '',
        if (command.usage) {
        	 reply += `${prefix}${command.name} \`${command.usage}\``;
        }
        
        embed.setDescription(reply);
        return message.channel.send({embeds: [embed]});
    }

    try {
        command.execute(message, args, client, prefix);
    } catch (error) {
        console.log(error);
        embed.setDescription("There was an error executing that command.\nI have contacted the owner of the bot to fix it immediately.");
        return message.channel.send({embeds: [embed]});
    }
  }
