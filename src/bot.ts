import 'module-alias/register';

import { Client } from 'discord.js';

import { GBot } from '@shared/classes/GBot';

import * as auth from '@config/auth.json';

// Bootstraps GBot
export const gbot = new GBot(new Client(), auth.token);

// Activates GBot
if (auth.token && auth.token !== '<Discord Bot Token>') {
    gbot.events();
    gbot.login();
}
