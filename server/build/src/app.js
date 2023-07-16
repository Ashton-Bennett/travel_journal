"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../routes/users"));
const journals_1 = __importDefault(require("../routes/journals"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("../database/database"));
dotenv_1.default.config({ path: `../../../ashton-bennett-skills/.env` });
// dotenv.config();
const app = (0, express_1.default)();
database_1.default
    .connect()
    .then(() => {
    console.log("connected to postgres");
})
    .catch((error) => {
    console.log("error connecting to postgres", error.message);
});
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("Home");
});
app.use("/awesome/applicant", users_1.default);
app.use("/api/journal", journals_1.default);
exports.default = app;
