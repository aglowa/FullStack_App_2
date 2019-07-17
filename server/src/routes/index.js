'use strict';

module.exports = function (app) {
    const logEntries = require('./log_entries')
    const someOtherResource = require('./some_other_resource')
    logEntries(app)
}
