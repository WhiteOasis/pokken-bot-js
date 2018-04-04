const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const bot = new Discord.Client();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity(botconfig.game, {type: "PLAYING"});
    // bot.user.setGame(botconfig.game);
    
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello!");
    } 

    
    
    
});

bot.login(process.env.BOT_TOKEN);
