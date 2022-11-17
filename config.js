const test = {
    smtp: {
        port: 8025,
        hook: 'smtpSim',
        server: {
            disabledCommands: ['STARTTLS']
        }
    }
};

module.exports = () => ({
    // environments
    dev: {
        slack: {
            debug: true
        },
        sqlStandard: true
    },
    test,
    jenkins: test,
    uat: {
        sqlStandard: true
    },
    // methods
    kustomize: {
        adapter: true,
        orchestrator: true,
        gateway: true
    },
    types: {
        gateway: true
    },
    doc: {
        gateway: true
    },
    // test types
    unit: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        test: true
    },
    integration: {
        adapter: true,
        orchestrator: true,
        gateway: true,
        test: true
    },
    db: {
        adapter: true
    },
    validation: ({joi}) => joi.object({
        adapter: joi.boolean(),
        orchestrator: joi.boolean(),
        gateway: joi.boolean(),
        test: joi.boolean(),
        sql: joi.object({
            exclude: joi.any()
        }),
        smtp: [
            joi.boolean().valid(false),
            joi.object()
        ],
        sqlStandard: [
            joi.boolean(),
            joi.object({
                exclude: joi.any()
            })
        ],
        slackIn: [
            joi.boolean(),
            joi.object()
        ],
        slackOut: [
            joi.boolean(),
            joi.object()
        ]
    })
});
