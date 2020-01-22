module.exports = () => function utSmtpSim() {
    return {
        orchestrator: () => [
            require('./api/script')
        ],
        adapter: () => [
            require('ut-port-smtp')
        ]
    };
};
