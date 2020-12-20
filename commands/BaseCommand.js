const snail = require("../snail.js");

class BaseCommand {
    constructor(commandName) {
        this.commandName = commandName;
        var stringCommandInput;
        var stringResponseText;
    }

    performCommand() {

    }
}

module.exports = BaseCommand;