const fs = require('fs'); //Imports Node's file system 
const Discord = require('discord.js'); 
const client = new Discord.Client();
client.commands =  new Discord.Collection(); //Uses the Discord API's collection maps.
const auth = require("./auth.js");

var lastMessageObject = new Object();

// Generates all valid commands.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 
for (const file of commandFiles) { 
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Markup: Event listeners
client.on('ready', () => {
	console.log (`${client.user.tag} logged in at ${client.readyAt}`)
    console.log(`\nLoaded the following commands:`);
    console.log(client.commands);
    client.user.setActivity('!snail', { type: `PLAYING`});
});

client.on('message', msg => {
    const prefix = "!";
    lastMessageObject = msg;

        var commandTrigger = `${msg.content.split(' ')[0]}`;

        if (!client.commands.has(commandTrigger || commandTriggerWithText)) return;

        try {
            client.commands.get(commandTrigger).execute(msg);
        } 
        catch (error) {
            console.error(error);
            msg.send(`there was an error`);
        }
    }
);

client.login(auth.token);