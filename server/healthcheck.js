const http = require('http');
const options = {
    timeout: 2000,
    host: 'localhost',
    port: process.env.PORT || 4000,
    path: '/healthz'
};

const request = http.request(options, (res) => {
    console.log(`Healthcheck Status : ${res.statusCode}`);
    process.exitCode = res.statusCode === 200 ? 0 : 1;
    process.exit();
});

request.on('error', (err) => {
    console.error('Healthcheck Error ', err);
    process.exit(1);
});

request.end();