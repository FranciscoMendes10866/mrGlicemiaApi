"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const port = process.env.PORT || 3003;

_app.default.listen(port, () => console.log(`💊 Server up and runin' on localhost:${port} 👨‍⚕️`));