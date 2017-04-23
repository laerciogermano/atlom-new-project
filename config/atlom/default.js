'use strict';

atlom.config.set({
    atlom: {
        requires: [
            'libs/*',
            'modules/*/server/module.js'
        ],
        modules: [
            'core'
        ]
    }
})