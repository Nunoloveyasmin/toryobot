const Discord = require("discord.js");
const client  = new Discord.Client();

client.on("ready",()=>{
    console.log(`Logando com o bot ${client.user.tag}`);
});

client.on("message",(msg)=>{
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);
        if(msg.content == "ola") msg.reply("ola");
    }
});

client.login("NTAyODUzOTY5NDkyODM2MzUy.W8ntQA.Pcvw7dbExhMEpbnYtEuuHafox94");
