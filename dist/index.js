"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// middlware phan trung gian kiem tra
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json()); // client gui du lieu den sv. se co nhieu kieu du lieu thi json dung nhieu nhat.
app.use(express_1.default.urlencoded());
//database
const URI = process.env.MONGODB_URL;
mongoose_1.default.connect(URI, {
    autoIndex: false,
}, (err) => {
    if (err)
        throw err;
    console.log("mongodb connection.");
});
// routes
app.use("/api", routes_1.default);
//start
const port = process.env.POST || 5000; // deploy len heroku se co port rieng
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map