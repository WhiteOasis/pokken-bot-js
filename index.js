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

    

    //HELP COMAND
    if(cmd === `${prefix}help`){
        let icon = bot.user.displayAvatarURL;
        let helpMessage = new Discord.RichEmbed()
        .setDescription("Comandos del Bot:")
        .setColor(botconfig.maincolor)
        .setThumbnail(icon)
        .addField("!serverinfo", "Información acerca del servidor")
        .addField("!help", "Lista de comandos")
        .addField("!posicion", "Te dice de que posicion tienes que jugar la proxima partida")
        .addField("!LuisJuega", "¿Qué proximo campeón jugará Luis?")
        .addField("!luis", "Las frases de Luis! Ahora en tu servidor de confianza!");

        message.reply("Te he enviado un mensaje con los comandos.");
        return message.author.send(helpMessage);
    }


    if(cmd === `${prefix}info`){
        let icon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("- Información del Bot -")
        .setThumbnail(icon)
        .setColor(botconfig.maincolor)
        .addField("Nombre del bot", bot.user.username)
        .addField("Creado en", bot.user.createdAt);
        
        return message.channel.send(botembed);
    }
    if(cmd === `${prefix}server`){
        let icon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("- Información del Servidor -")
        .setThumbnail(icon)
        .setColor(botconfig.maincolor)
        .addField("Nombre del servidor", message.guild.name)
        .addField("Creado en", message.guild.createdAt)
        .addField("Te uniste en", message.member.joinedAt)
        .addField("Miembros", message.guild.memberCount);

        return message.channel.send(serverembed);
    }
    //random pokemon
    if(cmd === `${prefix}random`){
        if(args != ""){
            var url = "http://ultraumbral.com/images/gif/";
            let randomPkmn = new Discord.RichEmbed()
            .setImage(url+args+".gif")
            .setFooter(args);
            message.channel.send(randomPkmn);
        } else{
            message.reply("Inserte un nombre");
        }
        
    }
    //set roles
    if(cmd === `${prefix}rol`){
        
            message.channel.send(args);

            let image = new Discord.RichEmbed()
            .setImage("http://ultraumbral.com/images/title.png");
            message.channel.send(image);
        
    }
    if(cmd === `${prefix}js`){
        var url = "http://ultraumbral.com/images/gif/";

        let web = new Discord.RichEmbed()
        .setURL("http://ultraumbral.com")
        .setImage(url+"weavile.gif")
        message.channel.send(web);
        
    }




    // if(cmd === `${prefix}luis`){
    //     var items = Array("Soy main Yasuo, confia en mi", "JODERRRRRRRRRRR", "Reformed", "El fortnite es una mierda", "0/10, ahora comienza el power spike!", "Puto jungla que no gankea");
    //     var item = items[Math.floor(Math.random()*items.length)];
    //     message.channel.send(item);
    // }
    // if(cmd === `${prefix}LuisJuega`){
    //     var items = Array("Yasuo", "Tryndamere", "Jhin", "Kai`sa", "Rengar", "Kalista", "Draven");
    //     var item = items[Math.floor(Math.random()*items.length)];
    //     message.channel.send("Me apetece jugar "+item);
    // }
    // if(cmd === `${prefix}posicion`){
    //     var items = Array("Top", "Jungla", "Mid", "ADC", "Support");
    //     var item = items[Math.floor(Math.random()*items.length)];
    //     message.reply("Tienes que jugar de "+item);
    // }
});


bot.login(process.env.BOT_TOKEN);
