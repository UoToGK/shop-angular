/* 
代理设置
If you need to proxy multiple entries to the same target define the configuration in proxy.conf.js instead of proxy.conf.json e.g.
and make sure to point to the right file
"start": "ng serve --proxy-config proxy.conf.js",
*/
/* const PROXY_CONFIG = {
    "/api/proxy": {
        "target": "http://localhost:3000",
        "secure": false,
        "bypass": function (req, res, proxyOptions) {
            if (req.headers.accept.indexOf("html") !== -1) {
                console.log("Skipping proxy for browser request.");
                return "/index.html";
            }
            req.headers["X-Custom-Header"] = "yes";
        }
    }
}

module.exports = PROXY_CONFIG; */
/* Bypass the Proxy
If you need to optionally bypass the proxy, or dynamically 
change the request before it's sent, define the configuration in proxy.conf.js e.g. 
"start": "ng serve --proxy-config proxy.conf.js",*/
const PROXY_CONFIG = {
        "/api/proxy": {
                "target": "http://localhost:4200",
                "secure": false,
                "bypass": function (req, res, proxyOptions) {
                        if (req.headers.accept.indexOf("html") !== -1) {
                                console.log("Skipping proxy for browser request.");
                                return "/index.html";
                        }
                        req.headers["X-Custom-Header"] = "yes";
                }
        }
}

module.exports = PROXY_CONFIG;