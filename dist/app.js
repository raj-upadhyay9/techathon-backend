"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const body_parser_1 = require("body-parser");
const method_override_1 = __importDefault(require("method-override"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
const config_1 = require("./db/config/config");
const app = (0, express_1.default)();
const port = 3000 || process.env.PORT;
(0, config_1.connect)();
app.use((0, morgan_1.default)("dev"));
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: false }));
app.use((0, method_override_1.default)("_method"));
app.use((0, errorhandler_1.default)());
// app.use((req, res, next) => {
// });
app.get("/", (req, res) => {
    res.status(200).json("hey");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = app;
