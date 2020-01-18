import { Client } from 'discord.js';

import * as auth from './config/auth.json';

export class GBot {
    public client;

    constructor(private discordClient: Client) {
        this.client = this.discordClient;
    }

    login(): void {
        this.client.login(auth.token);
    }

    logout(): void {
        this.client.destroy();
    }

    reset(): void {
        this.logout();
        this.login();
    }

    events(): void {
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
            this.client.user.setPresence({
                status: 'online',
                game: {
                    name: /** Playing */ 'with Reseyn'
                }
            });
        });
    }

}

export const gbot = new GBot(new Client());
