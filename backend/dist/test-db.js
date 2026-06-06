"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const url = "mongodb://db_user:db_user@cluster1.4ptehyh.mongodb.net/?appName=Cluster1";
const url = "mongodb+srv://db_user:dev101101@cluster0.psnl9yl.mongodb.net/base360";
mongoose_1.default
    .connect(url)
    .then(() => {
    console.log("✅ Connected!");
    process.exit(0);
})
    .catch((err) => {
    console.error("❌ Failed:", err.message);
    process.exit(1);
});
