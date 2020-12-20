var snailGifs = [
	"I know what to do. We have to turn the crystals against the Hive.",
	"But there are no powered crystals in this chamber. What's plan B?",
	"You have another plan?",
	"Nope. Same plan. Give Sloane my regards.",
	"Nevermind. We're going with that plan.",
	"\`[static]\`",
	"Taeko, wherever you are... Thank you. We won't forget what you did today.",
	"You just never quit, do you?",
	"Don't come any closer. \`[static: I swear]\` if you try to turn me into \`[static: one of those damn crystals...]\`",
	"We came down here as a squad of nine. Got picked off one by one. Watched a Wizard rip the Light out of my best friend and funnel it into some kind of crystal.",
	"They're harvesting _Guardians_!",
	"You're right. There is a way out of this.",
	"I take it back. Together, we're gonna end this.",
	"Taeko...",
	"We're going to make you proud, Taeko...",
	"You did not die in vain.",
	"This ends here.",
	"\`[insect-like chattering]\`"
];

const BaseCommand = require('./BaseCommand.js');

var stringCommandInput = "!song";

class Song extends BaseCommand {
    constructor (commandName) {
        super(commandName);

    }

    performCommand(messageObject) {
        var stringResponseText = snailGifs[Math.floor(Math.random() * snailGifs.length)];
        messageObject.channel.send(stringResponseText);
    }

}

var snail = new Snail(stringCommandInput);

module.exports = {
    name: snail.commandName,
    execute(message) {
		snail.performCommand(message);
    },
    randomExecute(message) {
        snail.performCommandAtRandom(message);
    }
}