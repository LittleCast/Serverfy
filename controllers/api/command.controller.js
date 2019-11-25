var config = require('config.json');
var express = require('express');
var router = express.Router();
var commandService = require('services/command.service');

// routes
router.get('/version', getVersion);
router.get('/status/:_ip', getStatus);

module.exports = router;

function getVersion(req, res) {
    commandService.getVersion()
        .then(function (Version) {
            if (Version) {
                res.send(Version);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getStatus(req, res) {
    commandService.getStatus(req.params._ip)
        .then(function (Status) {
            if (Status) {
                res.send(Status);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
