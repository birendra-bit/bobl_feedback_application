const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://cdcl.erp.bt/",
            changeOrigin: true,
            credentials: "same-origin",
        })
    );
};
// http://192.168.70.38/
