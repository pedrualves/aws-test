const express = require('express'),
    PORT = process.env.PORT || 8080,
    HOST = process.env.hostname || '0.0.0.0',
    app = express(),
    helmet = require('helmet'),
    compression = require('compression'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    http = require('http'),
    path = require('path'),
    cors = require('cors')

function configExpress() {
    // mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/database')
    mongoose.Promise = global.Promise;

    app.use(helmet())
    app.use(compression())
    app.use(cors())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(bodyParser.json())

    consign({
        cwd: process.cwd() + path.sep + 'src',
        verbose: process.env.PORT ? false : true
    })
        .include('domain')
        .include('routes')
        .into(app)

    app.use((req, res, next) => {
        res.status(404).send(
            'ops, pagina nao encontrada')
    })

    return app
}

http.Server(configExpress())
    .listen(PORT, HOST, () => {
        if (!process.env.PORT) {
            console.log(`Running on http://${HOST}:${PORT}`)
        }
    })