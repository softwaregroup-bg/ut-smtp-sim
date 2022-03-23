module.exports = (...params) => class smtpSim extends require('ut-port-script')(...params) {
    get defaults() {
        return {
            namespace: 'smtpSim'
        };
    }

    handlers() {
        return {
            [`${this.config.namespace}.identity.check`]: msg => {
                if (msg.auth.username === 'test' && msg.auth.password === 'test') return {user: 'test'};
                throw new Error('Authentication failed');
            },
            [`${this.config.namespace}.mail.stream`]: msg => {
                return {};
            }
        };
    }
};
