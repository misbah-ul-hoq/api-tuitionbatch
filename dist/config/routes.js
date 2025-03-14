"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("../routes/student"));
const attendance_1 = __importDefault(require("../routes/attendance"));
const routes = (app) => {
    app.use("/api/students", student_1.default);
    app.use("/api/attendance", attendance_1.default);
};
exports.default = routes;
