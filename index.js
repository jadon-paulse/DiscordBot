const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
// SteveBot is awesome
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	}
	else if (message.content.startsWith(`${prefix}beep`)) {
		message.channel.send('Boop.');
	}
	else if(message.content.startsWith(`${prefix}games`)) {
		message.channel.send('https://www.pcgamer.com/');
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
});
client.login(token);