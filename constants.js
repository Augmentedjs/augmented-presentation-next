// Web Service
const port = 3000;
module.exports.PORT = port;
const webServiceURI = `http://localhost:${port}`;
module.exports.WEB_SERVICE_URI = webServiceURI;
const localURI = "http://localhost";
module.exports.LOCAL_URI = localURI;
module.exports.ALLOWED_ORIGINS = [localURI, webServiceURI];

module.exports.ABOUT = "Simple express service";
