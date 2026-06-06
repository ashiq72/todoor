"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(process.cwd(), ".env"),
});
exports.default = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV || "development",
    client_url: process.env.CLIENT_URL || process.env.FRONTEND_URL,
    //   NODE_ENV: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
    //   default_password: process.env.DEFAULT_PASS,
    //   bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_secret: process.env.JWT_SECRET,
    //   jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    //   jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    //   jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN || "1d",
    //   jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || "365d",
    //   reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
    //   cloudinary: {
    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //     api_key: process.env.CLOUDINARY_API_KEY,
    //     api_secret: process.env.CLOUDINARY_API_SECRET,
    //   },
    //   upload: {
    //     max_file_size_mb: Number(process.env.UPLOAD_MAX_MB || "5"),
    //     allowed_mime: (process.env.UPLOAD_ALLOWED_MIME || "image/jpeg,image/png").split(
    //       ",",
    //     ),
    //   },
};
