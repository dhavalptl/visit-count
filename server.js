const express = require('express');
const redis = require("redis");
const client = redis.createClient({
    host: 'redis-server'
});
client.set("visits", 0);

const app = express();
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send({
            count: parseInt(visits),
            updatedOn: new Date().toISOString()
        });
        client.set('visits', parseInt(visits) + 1);
    });
});
app.get('/healthz', (req, res) => {
    res.send({
        health: 'OK'
    });
});

const server = app.listen(port, () => {
    console.log(`Server is running and listening on port ${port}`);
});

process.on('SIGINT', () => {
    console.log('Got SIGINT signal. Successfully shutdown', new Date().toISOString());
    shutdown();
});

process.on('SIGTERM', () => {
    console.log('Got SIGTERM signal. Successfully shutdown', new Date().toISOString());
    shutdown();
});

function shutdown() {
    client.end(true);
    server.close((err) => {
        if(err) {
            console.error("Error", err);
            process.exitCode = 1;
        }
        process.exit();
    });
}