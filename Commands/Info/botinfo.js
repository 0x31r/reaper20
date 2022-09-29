/**
* READ THIS BEFORE YOU CHANGE THE CONTENT OF THIS COMMAND!
* You are not allowed to change lines about this repo in this command.
* You can change bot name and owner name, but not the source of this bot.
* You are also not allowed to remove the credits from the footer to the orginal owner from this bot.
* If you want to change the description, you will have to add the line that: "[YOUR BOT NAME] is an modified instance of Reaper-2.0 bot made by Simpleboy353.
* These points are not optional, but remarks from the dev team of Reaper-2.0.
*/

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  botPerms: ["EmbedLinks"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.EmbedBuilder()
      .setTitle("LA FUENTE BLANCA BOT's Info")
      .setColor("Random")
      .setDescription(
        `**Bot Name: **Aladin Abdullah \n**Owner: **0x31 \n**Total Categories: **8 \n**Total Commands: **${client.commands.size} \n**Users:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        } \n**Uptime:** ${duration}`
      )
      .addFields([
        { name: "About Reaper-2.0",
          value: "La Fuente Blanca Bot is based on Reaper 2.0."
        },
        { name: "Some Useful Links",
          value: "**Download my fivem mods!** **[Here](https://www.gta5-mods.com/player/anime-hoodies-for-mp-male-fivem-ready-0x31r#comments_tab)**"
        }
      ])
    message.channel.send({ embeds: [embed] });
  },
};
