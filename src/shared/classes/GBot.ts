import { Client } from 'discord.js';

export class GBot {
    public client;

    constructor(private discordClient: Client, private authToken: string) {
        this.client = this.discordClient;
    }

    login(): void {
        this.client.login(this.authToken);
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
