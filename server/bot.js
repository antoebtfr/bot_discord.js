const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzczNDcxNTg4NTA2MjcxNzc0.X6JtjQ.z6OFUiyEMIO_wUkQNjPM7eIaSlo";



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    if (msg.content === "ping"){
        msg.channel.send('Pong.');
    }
});

client.on('message', msg => {
    for (let techno of technos){
        if (msg.content === '!' + techno.name){
            msg.react(techno.id);
        }
    }
})

client.login(token);

