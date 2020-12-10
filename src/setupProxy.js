const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://192.168.70.38",
            changeOrigin: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "*",
                "Access-Control-Allow-Methods": "*",
            },
        })
    );
    console.log("inside the setup proxy");
};
