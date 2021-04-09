module.exports = () => function utSmtpSim() {
    return {
        config: require('./config'),
        orchestrator: () => [
            require('./api/script')
        ],
        adapter: () => [
            require('ut-port-smtp')
        ]
    };
};
