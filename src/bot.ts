import * as Discord from 'discord.js';

import * as auth from './config/auth.json';

const gbot = new Discord.Client();

gbot.on('ready', () => {
    console.log(`Logged in as ${gbot.user.tag}!`);
    gbot.user.setPresence({
        status: 'online',
        game: {
            name: 'with Reseyn'
        }
    });
});

gbot.login(auth.token);

export const bot = 5;
