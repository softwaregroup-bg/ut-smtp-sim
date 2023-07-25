module.exports = () => ({
    // environments
    common: {
        smtp: {
            port: 8025,
            hook: 'smtpSim',
            server: {
                disabledCommands: ['STARTTLS']
            }
        }
    },
    // methods
    kustomize: {
        adapter: true,
        orchestrator: true
    },
    // test types
    unit: {
        adapter: true,
        orchestrator: true
    },
    integration: {
        adapter: true,
        orchestrator: true
    },
    validation: ({joi}) => joi.object({
        adapter: joi.boolean(),
        orchestrator: joi.boolean(),
        smtp: [
            joi.boolean().valid(false),
            joi.object()
        ]
    })
});
