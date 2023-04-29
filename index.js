const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json')

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

client.on('messageCreate', message => {
    if(message.author.bot){return;}
    if(message.content.includes('who asked')){
        message.channel.sendTyping()
        setTimeout(() => {
            try {
                message.channel.send({content: "I asked"})
            }catch (err){
                console.error(err)
            }
        }, 2000)

    }
})


