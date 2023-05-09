const {
    MessageEmbed,
    Message,
    MessageButton,
    MessageActionRow,
  MessageSelectMenu,
    Client,
} = require("discord.js");
const e = require("express");
const { readdirSync } = require("fs");
const create_mh = require(`../../utils/menu.js`);

module.exports = {
    name: "help",
    category: "Info",
    aliases: [ "h" ],
    description: "To get information about all commands.",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {

      let categories = [];
        let cots = [];

        if (!args[0]) {

           let helpmenu = new MessageEmbed()
           .setAuthor(client.user.username, client.user.displayAvatarURL(), "https://discord.gg/ejSESjpgsF")
         .setAuthor(`Crex's Help Menu`)
         .setDescription (`• Prefix for this server is ${prefix}                                      • Total Commands : ${client.commands.size} | Usable by you 8                    • [Invite Crex](https://discord.com/oauth2/authorize?client_id=1088522233170886726&permissions=8&scope=bot%20applications.commands) | [Support Server](https://discord.gg/ejSESjpgsF)`)
        .addField(`**Module**`, `<:crex_audioenable:1088819465455677524> \`:\` **Filter**\n<:crex_info:1088819443188105297> \`:\` **Info**\n<:crex_headphone:1088819487748390952> \`:\` **Music**\n<:crex_linked:1088819598125699192> \`:\` **Playlist**\n<:crex_settings:1088819571324092447> \`:\` **Settings**\n<:crex_stagemoderator:1088825956363423816> \`:\` **Moderation**`)
       
        .setImage(`https://cdn.discordapp.com/attachments/1076036607729225860/1089552357727141958/standard.gif`)
        .setColor("#2f3136")
        .setFooter(`Made By ~ Crex Development`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('helpop')
                .setPlaceholder('Select Module To Get Help For That Module.')
                .addOptions([
                {
                    label : `Home`,
                    description: 'Get Home Page',
                    emoji : `<:d_home:1062832533894602762>`,
                    value : `h1`,
                },
                {
                    label: ' Filter',
                    description: 'Get All Filter Command List',
                    value: 'h6',
                    emoji: '<:crex_audioenable:1088819465455677524>',
                },
                {
                    label: ' Info',
                    description: 'Get All Info Command List',
                    value: 'h5',
                    emoji: '<:crex_info:1088819443188105297>',
                },
                {
                    label: 'Music',
                    description: 'Get All Music Command List',
                    value: 'h2',
                    emoji: '<:crex_headphone:1088819487748390952>', 
                },
                {
                    label: 'Playlist',
                    description: 'Get All Playlist Command List',
                    value: 'h7',
                    emoji: '<:crex_linked:1088819598125699192>', 
                },
                {
                    label: 'Settings',
                    description: 'Get All Setting Command List',
                    value: 'h8',
                    emoji:'<:crex_settings:1088819571324092447>',
                },
                {
                    label: 'Moderation',
                    description: 'Get All Moderation Command List',
                    value: 'h3',
                    emoji: '<:crex_stagemoderator:1088825956363423816>'
                }
            ])
        )
        let r2 = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`<<`),
            new MessageButton().setStyle(`SECONDARY`).setCustomId(`lol2`).setLabel(`Back`),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji("1088819619973828659"),
            new MessageButton().setStyle(`SECONDARY`).setCustomId(`lol4`).setLabel(`Next`),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`>>`)
        );

        let r3 = new MessageActionRow().addComponents(
            new MessageButton().setLabel("Invite Me").setStyle("LINK").setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`),
            new MessageButton().setLabel(`Support Server`).setStyle(`LINK`).setURL("https://discord.gg/ejSESjpgsF")
        );

        let msg = await message.channel.send({embeds : [helpmenu] , components : [r2,row,r3]});
        let page = 0;
        let _commands;

         let embed1 = new MessageEmbed().setColor("#2f3136").setDescription(`**clearqueue, forward, grab, join, leave, loop, nowplaying, pause, play, playerinfo, previous, queue, remove, replay, resume, rewind, search, seek, shuffle, skip, skipto, volume**`).setAuthor({name : `| Music Commands` , iconURL : client.user.displayAvatarURL()})
        let embed2 = new MessageEmbed().setColor("#2f3136").setDescription(`**ban, hackban, hide, kick, list, lock, mute, purge, unban, unhide, unlock, unmute, vcdeafen, vckick, vclist, vcmute, vcundeafen, vcunmute**`).setAuthor({name : `| Admin Commands` , iconURL : client.user.displayAvatarURL()})
        let embed3 = new MessageEmbed().setColor("#2f3136").setDescription(`**about, firstmsg, help, invite, stats, support, avatar, banner, membercount, ping, profile, roleinfo, servericon, serverinfo, uptime, bugreport, google, serverbanner, userinfo, weather, avs, qrcode, yt-comment**`).setAuthor({name : `| Information Commands` , iconURL : client.user.displayAvatarURL()})
        let embed4 = new MessageEmbed().setColor("#2f3136").setDescription(`**8d, bassboost, china, chipmunk, clearfilter, nightcore, rate, speed, tremolo**`).setAuthor({name : `| Filter Commands` , iconURL : client.user.displayAvatarURL()})
        let embed5 = new MessageEmbed().setColor("#2f3136").setDescription(`**playlist-addcurrent, playlist-addqueue, playlist-create, playlist-delete, playlist-info, playlist-list, playlist-load, playlist-removetrack**`).setAuthor({name : `| Playlist Commands` , iconURL : client.user.displayAvatarURL()})
        let embed6 = new MessageEmbed().setColor("#2f3136").setDescription(`**247, autoplay, setprefix, settings**`).setAuthor({name : `| Settings Commands` , iconURL : client.user.displayAvatarURL()})
        var embeds = [];
        embeds.push(embed1);embeds.push(embed2);embeds.push(embed3);embeds.push(embed4);embeds.push(embed5);embeds.push(embed6);

        const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if(message.author.id === interaction.user.id) return true;
                else{
                    interaction.reply({content : `<:cross1:1074564046134718474> | That's not your session run : \`${prefix}help\` to create your own.` , ephemeral : true})
                }
            },
            time : 1000000,
            idle : 1000000/2
        });

        collector.on('collect',async(interaction) => {
            if(interaction.isSelectMenu())
            {
                for(const value of interaction.values)
                {
                    if(value === `h1`)
                    {
                        let em = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.username, client.user.displayAvatarURL(), "https://discord.gg/ejSESjpgsF")
         .setAuthor(`Crex's Help Menu`)
         .setDescription (`• Prefix for this server is ${prefix}                                      • Total Commands : ${client.commands.size} | Usable by you 8                    • [Invite Crex](https://discord.com/oauth2/authorize?client_id=1088522233170886726&permissions=8&scope=bot%20applications.commands) | [Support Server](https://discord.gg/ejSESjpgsF)`)
        .addField(`**Module**`, `<:crex_audioenable:1088819465455677524> \`:\` **Filter**\n<:crex_info:1088819443188105297> \`:\` **Info**\n<:crex_headphone:1088819487748390952> \`:\` **Music**\n<:crex_linked:1088819598125699192> \`:\` **Playlist**\n<:crex_settings:1088819571324092447> \`:\` **Settings**\n<:crex_stagemoderator:1088825956363423816> \`:\` **Moderation**`)
       
        .setImage(`https://cdn.discordapp.com/attachments/1076036607729225860/1089552357727141958/standard.gif`)
        .setColor("#2f3136")
        .setFooter(`Made By ~ Crex Development`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
                        return interaction.update({embeds : [em]});
                    }
                    if(value === `h2`)
                    {
                        return interaction.update({embeds : [embed1]});
                    }
                    if(value === `h3`)
                    {
                        return interaction.update({embeds : [embed2]});
                    }
                    if(value === `h5`)
                    {
                        return interaction.update({embeds : [embed3]});
                    }
                    if(value === `h6`)
                    {
                        return interaction.update({embeds : [embed4]});
                    }
                    if(value === `h7`)
                    {
                        return interaction.update({embeds : [embed5]});
                    }
                    if(value === `h8`)
                    {
                        return interaction.update({embeds : [embed6]});
                    }
                }
            }
            if(interaction.isButton())
            {
                if(interaction.customId === `lol4`)
                {
                    page = page + 1 < embeds.length ? ++page : 0;
                    return interaction.update({embeds : [embeds[page]]});
                }
                if(interaction.customId === `lol5`)
                {
                    page = page + 1 < embeds.length ? ++page : 0;
                    page = page + 1 < embeds.length ? ++page : 0;
                    return interaction.update({embeds : [embeds[page]]});
                }
                if(interaction.customId === `lol3`)
                {
                    return interaction.update({embeds : [helpmenu]})
                }
                if(interaction.customId === `lol2`)
                {
                    page = page > 0 ? --page : embeds.length - 1;
                    return interaction.update({embeds : [embeds[page]]});
                }
                if(interaction.customId === `lol1`)
                {
                    page = page > 0 ? --page : embeds.length - 1;
                    page = page > 0 ? --page : embeds.length - 1;
                    return interaction.update({embeds : [embeds[page]]})
                }
            }
        });
        collector.on('end',async() => {
            msg.edit({embeds : [helpmenu] , components : [] , content : `<:cross1:1074564046134718474> | Help Query Got Timed Out!`})
        })

        } else {
            let catts = [];

            readdirSync("./commands/").forEach((dir) => {
                if (dir.toLowerCase() !== args[0].toLowerCase()) return;
                const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );


                const cmds = commands.map((command) => {
                    let file = require(`../../commands/${dir}/${command}`);

                    if (!file.name) return "No command name.";

                    let name = file.name.replace(".js", "");

                    if (client.commands.get(name).hidden) return;


                    let des = client.commands.get(name).description;
                    let emo = client.commands.get(name).emoji;
                    let emoe = emo ? `${emo} - ` : ``;

                    let obj = {
                        cname: `${emoe}\`${name}\``,
                        des
                    }

                    return obj;
                });

                let dota = new Object();

                cmds.map(co => {
                    if (co == undefined) return;

                    dota = {
                        name: `${cmds.length === 0 ? "In progress." : prefix + co.cname}`,
                        value: co.des ? co.des : `No Description`,
                        inline: true,
                    }
                    catts.push(dota)
                });

                cots.push(dir.toLowerCase());
            });

            const command =
                client.commands.get(args[0].toLowerCase()) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                );

            if (args[0].toLowerCase() !== "owner" && cots.includes(args[0].toLowerCase())) {
                const combed = new MessageEmbed()
                    .setAuthor(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} Commands!`, client.user.displayAvatarURL(), "https://discord.gg/ejSESjpgsF")
                    .setDescription (`• Prefix for this server is ${prefix}                                      • Total Commands : ${client.commands.size} | Usable by you 8                    • [Invite Crex](https://discord.com/oauth2/authorize?client_id=1088522233170886726&permissions=8&scope=bot%20applications.commands) | [Support Server](https://discord.gg/ejSESjpgsF)`)
                    .addFields(catts)
                    .setColor("#2f3136")

                return message.channel.send({
                    embeds: [combed]
                })
            };

            if (!command || command.category === "Owner") {
                const embed = new MessageEmbed()
                    .setDescription(`No command called "${args[0]}" found.`)
                    .setColor("#ff1010");
                return await message.reply({
                    embeds: [embed],
                    allowedMentions: {
                        repliedUser: false
                    },
                });
            }
            const capitalized = command.name.charAt(0).toUpperCase() + command.name.slice(1);
            const embed = new MessageEmbed() 
              .setAuthor(`${capitalized} Command:`, client.user.displayAvatarURL(), "https://discord.gg/ejSESjpgsF")
              .setDescription(`**${command.description}**`)
                .addField(
                    "Aliases:",
                    command.aliases ?
                    `\`${prefix}${command.aliases.join(`\`, \`${prefix}`)}\``:
                    "No aliases for this command."
                )
                .addField(
                    "Usage:",
                    command.usage ?
                    `${prefix}${command.name} ${command.usage}` :
                    `${prefix}${command.name}`
                )
                .setThumbnail(message.guild.iconURL({dynamic: true}))
                .setColor("#2f3136");
            return await message.channel.send({
                embeds: [embed]
            });
        }
    },
};
