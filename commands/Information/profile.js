const { MessageEmbed, version, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "profile",
    category: "Utility",
    description: "Show the user's profile",
    args: false,
    aliases: ["badge", "badges", "achievement", "achievements", "pr"],
    usage: "",
    permission: [],
    caching: true,
    owner: false,
    execute: async (message, args, client, prefix) => {
        const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
      
        const bxby = user.id === "926712074132930660" ? true : false;
        const akshit = user.id === "1032692870580277248" ? true : false;
        let badges = "";
          
       const guild = await client.guilds.fetch("1044914272473460797"); 
  
        const sus = await guild.members.fetch(user.id).catch((e) => {
          
        if(user) badges = badges;
        else badges = "`No Badge Available`";
        });
        if(bxby === true || user.id === "") badges = badges + `\n<:dev:1071294125657292860>・**Developer**`;
        if(akshit === true || user.id === "") badges = badges + `\n<:KG_owner2:1069645981827727431>・**Co Developer**`;
  try{
        
  const fyp = sus.roles.cache.has("1071963262796701747");
        if(fyp === true) badges = badges + `\n<:dev:1071294125657292860>・**Developer**`;
     //  const pr = sus.roles.cache.has("959392690863210496");
      //  if(fr === true) badges = badges + `\n:teddy_friend: Friends`;
     //   const help = sus.roles.cache.has("948131708950159370");
     //   if(help === true) badges = badges + `\n:xeta_helper: Helper | Developer`;
  const own = sus.roles.cache.has("1088788567989428224");
        if(own === true) badges = badges+`\n<a:owner:1073990509737017414>・**Owner**`;
       // const bpart = sus.roles.cache.has("959093515781034016");
     //   if(bpart === true) badges = badges + `\n:xeta_partner: Partner`;
      //  const spons = sus.roles.cache.has("948131710279778336");
     //   if(spons === true) badges = badges + `\n:xeta_sponsor: Sponsor`;
  
        const han = sus.roles.cache.has("1088788422807781386");
        if(han === true) badges = badges + `\n<:admin:1073990679795085523>・**Admin**`;
  
      //  const gbug = sus.roles.cache.has("959094254901280769");
    //if(gbug === true) badges = badges + `\n:xeta_hunter_gold: Bug Hunter Prime`;
  
        const manager = sus.roles.cache.has("1088788060508008468");
        if(manager === true) badges = badges + `\n<:mod:1073991082620244060>・**Mod**`;
  
       const aman = sus.roles.cache.has("1088788371226230915");
        if(aman === true) badges = badges + `\n<:supportteam:1073988125581398068>・**Support Team**`;
  
        const hundi = sus.roles.cache.has("1088787998725906432");
        if(hundi === true) badges = badges + `\n<a:bughunter:1073988588414447616>・**Bug Hunter**`;
  
        const supp = sus.roles.cache.has("1088787920376315994");
        if(supp === true) badges = badges + `\n<a:supporter:1073992397668757514>・**Supporter**`;
  
        const fr = sus.roles.cache.has("1088787957282000896");
        if(fr === true) badges = badges + `\n<a:stolen_emoji:1073991379140759602>・**Friends**`;

        const family = sus.roles.cache.has("1054081280821690429");
        if(family === true) badges = badges + `\n<:cute_evil:1088828527262056448>・**Family**`
  
  
  
  }catch(err){
  if(badges) {
  badges = "";
  badges = badges;
  }
  else if(badges === "") badges = "`No Badge Available`";
  }
  
  
        const pr = new MessageEmbed()
  .setAuthor(`${user.username}#${user.discriminator}`, client.user.displayAvatarURL({dynamic: true})) 
  .setThumbnail(user.displayAvatarURL({dynamic: true}))
  //.setTitle(`${user.username}'s Profile`)
  .setColor("#2f3136")
  .setTimestamp()
  .setDescription(`**Badges**
  ${badges ? badges : "Oops! Looks Like You Don't Have Any Type Of Badge To Be Displayed! You Can Get One By Joining Our [Server](https://discord.gg/ejSESjpgsF) And Get Badge In Crex Profile"}`)
  //.setTimestamp();
        message.channel.send({embeds: [pr]});
    }
}