const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "skipto",
	aliases: ["jump"],
	category: "Music",
	description: "Skip to the selected queue number.",
	args: true,
    usage: "<Number of song in queue>",
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
                .setDescription("<:cross1:1074564046134718474> | There is no music playing.");
            return message.channel.send({embeds: [thing]});
        }

        const position = Number(args[0]);
		
		if (!position || position < 0 || position > player.queue.size) { 
			let thing = new MessageEmbed()
                .setColor("#2f3136")
				.setDescription(`<:cross1:1074564046134718474> | Can't Find The Song`)
            return message.channel.send({embeds: [thing]});
		}

       if(position === 1){
        player.stop();
       }
       else{
        player.queue.remove(0, position - 1);
        player.stop();
       }
		
		const emojijump = message.client.emoji.jump;

		let thing = new MessageEmbed()
			.setDescription(`${emojijump} Forwarded **${position}** Songs`)
			.setColor("#2f3136")
			
		return message.channel.send({embeds: [thing]});
	
    }
};