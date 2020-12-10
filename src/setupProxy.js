const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    let cors = require("cors");
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://192.168.70.38",
            changeOrigin: true,
        })
    );
    app.listen(80);
    app.use(cors());
};
