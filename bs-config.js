module.exports = {
    server: {
        middleware: {
            1: (function() {
                url = require('url');
                proxy = require('proxy-middleware')
                options = url.parse('http://localhost:8000');
                options.route = '/api';
                return proxy(options);
            })()
        }
    }
};