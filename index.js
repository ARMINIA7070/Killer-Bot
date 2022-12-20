//Start

const Discord = require('discord.js');
const client = new Discord.Client();
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"

//Config & Be Ready & Login

client.once('ready', () => {
		console.log('Killer Bot Run Shode Killer Developer!');
});

client.login('MTA1MjIxNDU3NjM4MjQ4NDU1MQ.G6kF9J.xtwQ8q2-Ed5UeG9ybnqjoET9b3SmR46dGyaDrU')

//Custom PRC

client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Join Killers Community!",
assets : {
large_image : "1k",
large_text : "Killers Community"
buttons : [{label : "Discord" , url : "https://discord.gg/VMbDJcdn"},{label : "Site",url : "https://arminia7070.ir"}]
}
})
})
client.login({ clientId : "1052214576382484551" }).catch(console.error);

//Massages

const prefix = "!";

client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "stream") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`+ stream Join Killers Server!`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});

