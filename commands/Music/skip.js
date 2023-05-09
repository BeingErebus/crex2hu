const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "skip",
	aliases: ["s"],
	category: "Music",
	description: "Skip the current playing track!",
	args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
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
const previoustrack = player.get("previoustrack");
  if(player.queueRepeat){
    if(previoustrack){
      player.queue.add(previoustrack)
    }
  }
  if(player.trackRepeat){
    if(previoustrack){
      player.queue.unshift(previoustrack)
    }
  }
        player.stop();
        message.react("<:skip:1066040642859450398>")
        
        }
    };