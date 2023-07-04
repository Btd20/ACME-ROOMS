const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/api/Auth/register",
      "/api/Auth/login",
    ],
    target: "https://localhost:7050",
    secure: false,
    changeOrigin: true
  }
]

module.exports = PROXY_CONFIG;
