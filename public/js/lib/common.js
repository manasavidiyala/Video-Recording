var hostname, client;

var host = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(host);
client   = new BinaryClient(host);

function fizzle(e) {
    e.preventDefault();
    e.stopPropagation();
}

function emit(event, data, file) {
    file       = file || {};
    data       = data || {};
    data.event = event;

    return client.send(file, data);
}

