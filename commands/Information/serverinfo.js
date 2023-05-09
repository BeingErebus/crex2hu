const { MessageEmbed } = require("discord.js");
const moment = require("moment")
const verificationLevels = {
  NONE: "None",
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  VERY_HIGH: "Very High"
}

module.exports = {
    name: "serverinfo",
    category: "Info",
    aliases: ['si'],
    description: "To Get Information About The Server",
    usage: "",
    execute: async (message, args, client, prefix) => {   

      message.guild.owner = await message.guild.fetchOwner().then(x => x.user).catch(() => {});
        let mfa = "";
        if(message.guild.mfaLevel === `ELEVATED`) mfa = `<:Success:1074564018385211424>`;
        else { mfa = `<:cross1:1074564046134718474>`}
        let bar = '';
        if(message.guild.premiumProgressBarEnabled === `true`) bar = `<:Success:1074564018385211424>`;
        else{bar = `<:cross1:1074564046134718474>`;}
        let veri = '';
        if(message.guild.verificationLevel === 'NONE') { veri = 'None' }
        if(message.guild.verificationLevel === 'LOW') { veri = 'Low' }
        if(message.guild.verificationLevel === 'MEDIUM') { veri = 'Medium' }
        if(message.guild.verificationLevel === 'HIGH') { veri = 'High' }
        if(message.guild.verificationLevel === 'VERY_HIGH') { veri = 'Very High' }
        let upload = '';
        let boostlvl = '';
        if(message.guild.premiumTier === 'NONE') { boostlvl = `Level: 0 [<a:boost:1071348782433849385> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `8.00 MB`; }
        if(message.guild.premiumTier === 'TIER_1') { boostlvl = `Level: 1 [<a:boost:1071348782433849385> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `8.00 MB`; }
        if(message.guild.premiumTier === 'TIER_2') { boostlvl = `Level: 2 [<a:boost:1071348782433849385> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `50.00 MB`; }
        if(message.guild.premiumTier === 'TIER_3') { boostlvl = `Level: 3 [<a:boost:1071348782433849385> ${message.guild.premiumSubscriptionCount} Boosts]`; upload = `100.00 MB`; }
        let msg = '';
        if(message.guild.defaultMessageNotifications === `ALL_MESSAGES`) { msg = `All Messages` }
        else { msg = `Only @mentions` }
        let mfilter = '';
        if(message.guild.explicitContentFilter === 'DISABLED') { mfilter = 'None' }
        if(message.guild.explicitContentFilter === `MEMBERS_WITHOUT_ROLES`) { mfilter = 'Members Without Roles' }
        if(message.guild.explicitContentFilter === `ALL_MEMBERS`) { mfilter = 'All Members' }
        let nsfw = '';
        if(message.guild.nsfwLevel === 'DEFAULT') { nsfw = 'Default' }
        if(message.guild.nsfwLevel === 'EXPLICIT') { nsfw = 'Explicit' }
        if(message.guild.nsfwLevel === 'SAFE') { nsfw = 'Safe' }
        if(message.guild.nsfwLevel === 'AGE_RESTRICTED') { nsfw = 'Age Restricted' }
        let features = '';
        if(message.guild.features.includes('ANIMATED_BANNER')) features += `\n <:Success:1074564018385211424> : Antimated Banner`;
        if(message.guild.features.includes('ANTIMATED_ICON')) features += `\n<:Success:1074564018385211424> : Animated Icon`;
        if(message.guild.features.includes('APPLICATION_COMMAND_PERMISSIONS_V2')) features += `\n<:Success:1074564018385211424> : Application Commands Permissions V2`;
        if(message.guild.features.includes('BANNER')) features += `\n<:Success:1074564018385211424> : Banner`;
        if(message.guild.features.includes('AUTO_MODERATION')) features += `\n <:Success:1074564018385211424> : Auto Moderation`;
        if(message.guild.features.includes('COMMUNITY')) features += `\n<:Success:1074564018385211424> : Community`;
        if(message.guild.features.includes('DEVELOPER_SUPPORT_SERVER')) features += `\n<:Success:1074564018385211424> : Developer Support Server`;
        if(message.guild.features.includes('DISCOVERABLE')) features += `\n<:Success:1074564018385211424> : Discoverable`;
        if(message.guild.features.includes('FEATURABLE')) features += `\n<:Success:1074564018385211424> : Featurable`;
        if(message.guild.features.includes('INVITES_DISABLED')) features += `\n<:Success:1074564018385211424> : Invites Disabled`;
        if(message.guild.features.includes('INVITE_SPLASH')) features += `\n<:Success:1074564018385211424> : Invite Splash`;
        if(message.guild.features.includes('MEMBER_VERIFICATION_GATE_ENABLED')) features += `\n<:Success:1074564018385211424> : Member Verification Gate Enabled`;
        if(message.guild.features.includes('MONETIZATION_ENABLED')) features += `\n<:Success:1074564018385211424> : Monetization Enabled`;
        if(message.guild.features.includes('MORE_STCIKERS')) features += `\n<:Success:1074564018385211424> : More Stickers`;
        if(message.guild.features.includes('NEWS')) features += `\n<:Success:1074564018385211424> : News`;
        if(message.guild.features.includes('PARTNERED')) features += `\n<:Success:1074564018385211424> : Partnered`;
        if(message.guild.features.includes('PREVIEW_ENABLED')) features += `\n<:Success:1074564018385211424> : Preview Enabled`;
        if(message.guild.features.includes('ROLE_ICONS')) features += `\n<:Success:1074564018385211424> : Role Icons`;
        if(message.guild.features.includes('TICKETED_EVENTS_ENABLED')) features += `\n<:Success:1074564018385211424> : Ticketed Events Enabled`;
        if(message.guild.features.includes('VANITY_URL')) features += `\n<:Success:1074564018385211424> : Vanity URL`;
        if(message.guild.features.includes('VERIFIED')) features += `\n<:Success:1074564018385211424> : Verified`;
        if(message.guild.features.includes('VIP_REGIONS')) features += `\n<:Success:1074564018385211424> : Vip Regions`;
        if(message.guild.features.includes('WELCOME_SCREEN_ENABLED')) features += `\n<:Success:1074564018385211424> : Welcome Screen Enabled`;
        if(features === '') features += `\nNo features`;
        let lol = message.guild.roles.cache.sort((x,y) => y.position - x.position).map(r => r.toString()).slice(0,-1)
        let sroles;
        if(lol.length<24)
        {
            sroles = lol.join(', ');
            if(lol.length < 1) sroles = "None";
        } else { sroles = `\`many roles too show...\`` }
        if(sroles.lenght > 1024) sroles = `${lol.slice(4).join(', ')} more..`
        

        time = Math.round(message.guild.createdTimestamp/1000)

        let emb = new MessageEmbed().setColor("#2f3136").setTitle(`${message.guild.name}'s Information`).setTimestamp().setThumbnail(message.guild.iconURL({dynamic : true})).addFields(
            [
                {
                    name : `__About Server__`,
                    value : `**Name** : ${message.guild.name} \n **Id** : ${message.guild.id} \n **Owner** <:KG_owner2:1069645981827727431> : ${message.guild.owner.tag} [${message.guild.owner}] \n **Members** : ${message.guild.memberCount} \n  **Created** : <t:${time}:R> \n **Banned** : ${message.guild.bans.cache.size}`
                },
                {
                    name : `__Extras__`,
                    value : `**Verification Level** : ${veri} \n **Upload Limit** : ${upload} \n **Inactive Channel** : ${message.guild.afkChannel ? message.guild.afkChannel : 'None'} \n **Inactive Timeout** : ${message.guild.afkChannel ? message.guild.afkTimeout : 'None'} \n **System Messages Channel** : ${message.guild.systemChannel ? message.guild.systemChannel : 'None'} \n **Default Notifications** : ${msg} \n **Explicit Media Content Filter** : ${mfilter} \n **NSFW Level** : ${nsfw} \n **2FA Requirement** : ${mfa} \n **Boost Bar Enabled** : ${bar}`
                },
                {
                    name : `__Description__`,
                    value : `${message.guild.description ? message.guild.description : 'No Description set yet.'}`
                },
                {
                    name : `__Features__`,
                    value : `${features}`
                },
                {
                    name : `__Channels__`,
                    value : `**Total** : ${message.guild.channels.cache.size} \n **Channels** : <:text:1071392824764932196> ${message.guild.channels.cache.filter(x => x.type === `GUILD_TEXT`).size} (${message.guild.channels.cache.filter(x => x.type === `GUILD_TEXT` && !x.permissionsFor(message.guild.id).has("VIEW_CHANNEL")).size} Hidden) | <:voice:1071392780200464424> ${message.guild.channels.cache.filter(x => x.type === `GUILD_VOICE`).size} (${message.guild.channels.cache.filter(x => x.type === `GUILD_VOICE` && !x.permissionsFor(message.guild.id).has("VIEW_CHANNEL")).size} Hidden) \n **Rules Channel** : ${message.guild.rulesChannel ? message.guild.rulesChannel : 'None'}`
                },
                {
                    name : `__Emoji Info__`,
                    value : `Regular : ${message.guild.emojis.cache.filter(x => !x.animated).size} \n Animated : ${message.guild.emojis.cache.filter(x => x.animated).size} \n Total : ${message.guild.emojis.cache.size}`
                },
                {
                    name : `__Boost Stats__`,
                    value : `${boostlvl}`
                },
                {
                    name : `__Server Roles__ [${message.guild.roles.cache.size}]`,
                    value : `${sroles}`
                }
            ]
        ).setFooter({text : `Requested By : ${message.author.tag}` , iconURL : message.author.displayAvatarURL({dynamic : true})})
        if(message.guild.banner) emb.setImage(message.guild.bannerURL({dynamic : true , size : 1024 }));
        
        return message.channel.send({embeds : [emb]});
    }
}