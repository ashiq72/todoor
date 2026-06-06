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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
dotenv_1.default.config();
let server;
const PORT = config_1.default.port || 5000;
const DATABASE_URL = config_1.default.database_url;
console.log(`🔧 Using database URL: ${DATABASE_URL}`);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // ✅ Connect Database
            yield mongoose_1.default.connect(DATABASE_URL);
            console.log("✅ Database connected successfully");
            // ✅ Start Server
            server = app_1.default.listen(PORT, () => {
                console.log(`🚀 Server is running on port ${PORT}`);
            });
        }
        catch (error) {
            console.error("❌ Database connection failed:", error);
            process.exit(1);
        }
    });
}
// ✅ Handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.error("❌ Unhandled Rejection:", err);
    if (server) {
        server.close(() => process.exit(1));
    }
    else {
        process.exit(1);
    }
});
// ✅ Handle uncaught exception
process.on("uncaughtException", (err) => {
    console.error("❌ Uncaught Exception:", err);
    process.exit(1);
});
// ✅ Graceful shutdown
process.on("SIGTERM", () => {
    console.log("👋 SIGTERM received. Shutting down...");
    if (server) {
        server.close(() => {
            process.exit(0);
        });
    }
});
startServer();
