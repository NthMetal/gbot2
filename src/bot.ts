import { Client } from 'discord.js';

import { GBot } from '@shared/classes/GBot';

import * as auth from '@config/auth.json';

// Bootstraps GBot
export const gbot = new GBot(new Client(), auth.token);
// module.exports = new GBot(new Client(), auth.token);

// Activates GBot

if (auth.token) {
    gbot.events();
    gbot.login();

    gbot.logout();
}
