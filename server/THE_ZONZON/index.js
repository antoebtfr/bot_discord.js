const TheZonzonServer = (client) => {
    const serverName = "The Zonzon";


    client.on('message', msg => {
        if(msg.author.username === "juliant.33" || msg.author.username === "matutou44"){
            msg.reply('tg.');
        };
    })

}

module.exports = TheZonzonServer;s