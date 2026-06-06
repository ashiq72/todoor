"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
dotenv_1.default.config();
const DATABASE_URL = config_1.default.database_url;
let isConnected = false;
// ✅ Connect DB (serverless safe)
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (isConnected)
        return;
    try {
        yield mongoose_1.default.connect(DATABASE_URL);
        isConnected = true;
        console.log("✅ Database connected");
    }
    catch (error) {
        console.error("❌ DB connection error:", error);
        throw error;
    }
});
// ✅ Vercel handler
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectDB();
        return (0, app_1.default)(req, res);
    });
}
