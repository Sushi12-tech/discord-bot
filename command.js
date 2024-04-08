// run this file individually using 'node command.js' so that we can use '/'

const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("CLIENT_ID");

(async () => { // Wrap the code in an async function
  console.log('Started refreshing application (/) commands.');

  try {
    await rest.put(Routes.applicationCommands("CLIENT_ID"), { body: commands });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})(); // Call the async function immediately
