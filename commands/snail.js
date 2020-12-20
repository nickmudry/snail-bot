var snailGifs = [
	"https://media.giphy.com/media/Bn6GYND33DsW9ANwwC/giphy.gif",
	"https://media.giphy.com/media/GURw5GP2b5Qty/giphy.gif",
	"https://media.giphy.com/media/3o7buhiXgPU8GmQp4A/giphy.gif",
	"https://media.giphy.com/media/KE6pBwrRsQWVa/giphy.gif",
	"https://media.giphy.com/media/KE6pBwrRsQWVa/giphy.gif",
	"https://media.giphy.com/media/SiGf6u88FEgFRlxnb3/giphy.gif",
	"https://media.giphy.com/media/fOVnKnFxumnjW/giphy.gif",
	"https://media.giphy.com/media/yWB3Q8N9DZmRG/giphy.gif",
	"https://media.giphy.com/media/B6cisLSD2kTmM/giphy.gif",
	"https://media.giphy.com/media/2jiPBOD6DUmoE/giphy.gif",
	"https://media.giphy.com/media/L3qUc5sCjZnj2/giphy.gif",
	"https://media.giphy.com/media/afToh3Ccy7JVm/giphy.gif",
	"https://media.giphy.com/media/ctk0WnS4XaWRBaIjwx/giphy.gif",
	"https://media.giphy.com/media/g4IoWxRgjdtM2NFLsG/giphy.gif",
	"https://media.giphy.com/media/2A4bQZe35U1W092koA/giphy.gif",
	"https://media.giphy.com/media/vifYHnLUgKsnK/giphy.gif",
	"https://media.giphy.com/media/XZmdl0Uxo16C2tacYz/giphy.gif",
	"https://media.giphy.com/media/nI2iiubybQZS8dUGsK/giphy.gif",
	"https://media.giphy.com/media/20NQdkoQxXgVeaM4gE/giphy.gif",
	"https://media.giphy.com/media/5b5Jq02NaVEIiR1OTo/giphy.gif",
	"https://media.giphy.com/media/l49K1ItYePmtSQ3bG/giphy.gif",
	"https://media.giphy.com/media/kzancO2J5zt1S/giphy.gif",
	"https://media.giphy.com/media/ulL20zOhYdOSSh8Mvk/giphy.gif",
	"https://media.giphy.com/media/DzjngyEphqTgA/giphy.gif",
	"https://media.giphy.com/media/vjGfv8iTCjDkA/giphy.gif",
	"https://media.giphy.com/media/ZmvkCHQyc8Ra0/giphy.gif",
	"https://media.giphy.com/media/3og0IPpDDm66G1KUSI/giphy.gif",
	"https://media.giphy.com/media/J4bTLiLPNebOldACpi/giphy.gif",
	"https://media.giphy.com/media/WkItgbAWEiVos/giphy.gif",
	"https://media.giphy.com/media/9Gt2FrogolLc4/giphy.gif",
	"https://media.giphy.com/media/543B5Ua4N9Wq4/giphy.gif",
	"https://media.giphy.com/media/lma5aujULEkKs/giphy.gif",
	"https://media.giphy.com/media/tdVcdLY2VYLOU/giphy.gif"
];


const BaseCommand = require('./BaseCommand.js');

var stringCommandInput = "!snail";
var i;

function randomIntFromInterval(min, max) { // min and max included 
  		return Math.floor(Math.random() * (max - min + 1) + min);
	}

class Snail extends BaseCommand {
    constructor (commandName) {
        super(commandName);
    }

    performCommand(messageObject) {
    	const client = messageObject.client; 

        var stringResponseText = snailGifs[Math.floor(Math.random() * snailGifs.length)];
        var delayLength = randomIntFromInterval(1000, 10000);
        var numOfSnails = delayLength / 1000;
        var snails = "";

        console.log(numOfSnails);

   		for (i = 0; i <= numOfSnails; i++) {
   			snails += "🐌 ";
   		}

   		client.user.setActivity(Math.round(numOfSnails) + " snails. 🐌", { type: `WATCHING`})

        setTimeout(function() { 
        	messageObject.reply(snails);
        	messageObject.channel.send(stringResponseText); 
        	client.user.setActivity('for !snail', { type: `WATCHING`});
        }, delayLength);

        i = 0;

        
    }
}

var snail = new Snail(stringCommandInput);

module.exports = {
    name: snail.commandName,
    execute(message) {
		snail.performCommand(message);
    },
}