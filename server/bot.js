require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

const TheZonzonServer = require('./THE_ZONZON/index');

const startBot = () => {
    
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}`);
    });

    TheZonzonServer(client);
    
    client.login(token);
}

startBot();


