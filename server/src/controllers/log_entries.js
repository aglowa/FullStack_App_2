'use strict';

require('../models/log_entry')

const mongoose = require('models/log_entry')

exports.index = function (req, res) {
    LogEntry.find({}, function (err, logEntry) {
        if (err) res.send(err)
        res.json(logEntry)
    })
}

export.create = function (req, res) {
    const newLogEntry = new LogEntry(req.body)
    newLogEntry.save(function (err, logEntry) {
        if (err) res.send(err)
        res.json(logEntry)
    })
}

export.show = function (req, res) {
    logEntry.findById(req.params.id)
}