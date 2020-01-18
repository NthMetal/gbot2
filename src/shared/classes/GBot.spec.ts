import { assert } from 'chai';
import { Client, ClientUser } from 'discord.js';
import * as sinon from 'sinon';

import { GBot } from './GBot';

describe('Test Bot', () => {

    let gbot: GBot;
    let client: Client;

    beforeEach(() => {
        client = new Client();
        gbot = new GBot(client, '');
    });

    it('should call client login', () => {
        assert.isNotNull(gbot);
        const loginStub = sinon.stub(client, 'login');
        gbot.login();
        sinon.assert.calledOnce(loginStub);
        sinon.assert.calledWith(loginStub, '');
    });

    it('should call client destroy', () => {
        assert.isNotNull(gbot);
        const destroyStub = sinon.stub(client, 'destroy');
        gbot.logout();
        sinon.assert.calledOnce(destroyStub);
    });

    it('should call client login and destroy', () => {
        assert.isNotNull(gbot);
        const loginStub = sinon.stub(client, 'login');
        const destroyStub = sinon.stub(client, 'destroy');
        gbot.reset();
        sinon.assert.calledOnce(loginStub);
        sinon.assert.calledOnce(destroyStub);
    });

    it('should call client on', () => {
        assert.isNotNull(gbot);
        const onStub = sinon.stub(client, 'on');
        gbot.events();
        sinon.assert.calledOnce(onStub);
    });

    it('should call client on', () => {
        assert.isNotNull(gbot);
        const onStub = sinon.stub(client, 'on').yields();
        const setPresenceStub = sinon.stub(ClientUser.prototype, 'setPresence');
        client.user = new ClientUser(client, { tag: 'testtag' });
        gbot.events();
        sinon.assert.calledOnce(onStub);
        sinon.assert.calledOnce(setPresenceStub);
    });
});
