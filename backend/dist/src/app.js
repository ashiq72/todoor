"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const core_route_1 = __importDefault(require("./app/modules/core.route"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const allowedOrigins = [
    "http://localhost:3000",
    config_1.default.client_url,
    ...(((_a = process.env.CORS_ORIGINS) === null || _a === void 0 ? void 0 : _a.split(",")) || []),
].filter(Boolean);
// middlewares
app.use((0, cors_1.default)({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
// test route
app.get("/", (req, res) => {
    res.send("App is running 🚀");
});
// routes (future)
app.use("/api/v1", core_route_1.default);
exports.default = app;
