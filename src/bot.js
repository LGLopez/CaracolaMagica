//require('dotenv').config();

const { Client, Message } = require('discord.js');
const client = new Client();

const PREFIX = '!';
const QUESTION = '?';

const badWordsFilter = ['puto', 'tonto', 'pendejo', 'verga', 'puta', 'coño'];
const caracolaReplies = ['Tal vez algun dia.', 
                        'Nada.', 
                        'Tampoco.', 
                        'No lo creo.', 
                        'No.',
                        'Si.',
                        'Intenta preguntar de nuevo.'];

client.on('ready', () => {
    console.log(`${client.user.tag} ha llegado a nosotros.`);
});

client.on('message', (message) => {
    if(message.author.bot) return;

    if(message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(" ");
        if (CMD_NAME.toLowerCase() === 'caracola' && args[args.length-1].endsWith(QUESTION)) {
            caracolaReplyRandom = Math.floor(Math.random() * 7);
            message.reply(caracolaReplies[caracolaReplyRandom]);
        }
        
    }

    

    badWordsFilter.forEach(element => {
        if (message.content.toLowerCase().search(element) != -1) {
            message.reply('No digas eso, la caracola se pone triste.');
        }
    });  
});

client.login(process.env.DISCORD_JS_TOKEN);

