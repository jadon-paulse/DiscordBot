const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		// send back "Pong." to then channel the message was sent in
		message.channel.send('Pong.');
	}
});

client.login('NjQzNTY2MDUxNjUyNTM0Mjgz.XcnYCw._gepuJYyre_F2LNEsKZdgj2VJVQ');