const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const fetch = require("node-fetch");
const axios = require("axios");
module.exports = {
    name: "userinfo",
    category: "Info",
    aliases: [ "ui" ],
    description: "To Get Information About A User",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const m = message.guild.members.cache.get(member.id);
 const nick = member.nickname === null ? "None" : member.nickname;

  //Flag system
  const flags = {
  DISCORD_EMPLOYEE: "<a:staff:1071292199465144500>",
  DISCORD_PARTNER: "<a:partner:1071292306872860764>",
  BUGHUNTER_LEVEL_1: "<:bughunt:1071292712055214191>",
  BUGHUNTER_LEVEL_2: "<:bughunt2:1071292762714017832>",
  HYPESQUAD_EVENTS: "<:hypersquadevent:1071293129866612876>",
  HOUSE_BRAVERY: "<:Bravery:1071293351418155029>",
  HOUSE_BRILLIANCE: "<:brilliance:1071293249920172155>",
  HOUSE_BALANCE: "<:Balance:1071293459882840084>",
  EARLY_SUPPORTER: "<:earlysupporter:1069646103777120266>",
  SYSTEM: "<a:setting:1071309747300597790>",
  VERIFIED_BOT: "<:verifiedbot:1071293972061880423>",
  VERIFIED_DEVELOPER: "<:dev:1071294125657292860>",
  ACTIVE_DEVELOPER: "<:activedev:1071317266387435541>",
  NITRO: "<:Nitro:1074396358829682739>",
  BOOSTER_1: "<a:boost:1071348782433849385>",
  BOOSTER_2: "<a:boost:1071348782433849385>",
  BOOSTER_3: "<a:boost:1071348782433849385>",
  BOOSTER_4: "<a:boost:1071348782433849385>",
  BOOSTER_5: "<a:boost:1071348782433849385>",
  BOOSTER_6: "<a:boost:1071348782433849385>",
  BOOSTER_7: "<a:boost:1071348782433849385>",
  BOOSTER_8: "<a:boost:1071348782433849385>",
  BOOSTER_9: "<a:boost:1071348782433849385>",
};
      const response = await fetch(
      `https://japi.rest/discord/v1/user/${member.id}`
    );
  const datas = await response.json();
  const badges = datas.data.public_flags_array
      ? datas.data.public_flags_array.map((flag) => flags[flag]).join(" ")
      : "No Badges Found.";
  //end
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;
      
        const data = await axios.get(`https://discord.com/api/users/${user.id}`, {
          headers: {
            Authorization: `Bot ${client.token}`
          }
        }).then(d => d.data);
        if (data.banner) {
          let url = data.banner.startsWith("a_") ? ".gif?size=4096" : ".png?size=4096";
          url = `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${url}`;
  

  const useremb = new MessageEmbed()
  .setColor(`#2f3136`)
    .setAuthor(`${member.user.username}` , member.displayAvatarURL())
    .setThumbnail(`${member.user.displayAvatarURL({size : 1024 , dynamic : true})}`)
  .setDescription(`**Name : **[${member.user.username}](https://discord.com/users/${member.user.id})\n**Discriminator :** #${member.user.discriminator}\n**User Id :** ${member.id}\n**Nickname :** ${nick}\n**Avatar :** [Avatar Link](${member.displayAvatarURL({ dynamic: true, size: 2048 })})\n**Account Creation:** <t:${Math.round(member.user.createdTimestamp/1000)}:R>\n**Server Joined:** <t:${parseInt(m.joinedAt / 1000)}:R>\n**Badges :** ${badges || `No Badges Found`}\n**Is Bot :** ${member.user.bot ? "True" : "False"}\n**Higest Role :** ${m.roles.highest}\n**Roles :** ${m.roles.cache.map(r => r).sort((first, second) => second.position - first.position).join(`, `)}\n`)
.setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
.setImage(url)
  
return message.channel.send({ embeds : [useremb] })
        } else {
            const useremi = new MessageEmbed()
  .setColor(`#2f3136`)
    .setAuthor(`${member.user.username}` , member.displayAvatarURL())
    .setThumbnail(`${member.user.displayAvatarURL({size : 1024 , dynamic : true})}`)
  .setDescription(`**Name : **[${member.user.username}](https://discord.com/users/${member.user.id})\n**Discriminator :** #${member.user.discriminator}\n**User Id :** ${member.id}\n**Nickname :** ${nick}\n**Avatar :** [Avatar Link](${member.displayAvatarURL({ dynamic: true, size: 2048 })})\n**Account Creation:** <t:${Math.round(member.user.createdTimestamp/1000)}:R>\n**Server Joined:** <t:${parseInt(m.joinedAt / 1000)}:R>\n**Badges :** ${badges || `No Badges Found`}\n**Is Bot :** ${member.user.bot ? "True" : "False"}\n**Higest Role :** ${m.roles.highest}\n**Roles :** ${m.roles.cache.map(r => r).sort((first, second) => second.position - first.position).join(`, `)}\n`)
.setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
return message.channel.send({ embeds : [useremi] })
    }
        
    }
}
