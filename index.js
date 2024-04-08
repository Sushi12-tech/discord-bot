const { Client, GatewayIntentBits } =require( 'discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message)=>{
    console.log(message.content);
});


client.on('messageCreate', (message)=>{
    if(message.author.bot) return;
    message.reply({
        content: "Hey! Welcome to the server",
    });
});

client.on('interactionCreate', interaction=>{
    interaction.reply("Pong!!");
})
client.login("TOKEN_ID");