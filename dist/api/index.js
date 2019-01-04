"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class API {
    constructor() {
        this.client = axios_1.default.create();
    }
    getCities() {
        return this.client.get('http://localhost:3001/db');
    }
}
exports.default = API;
//# sourceMappingURL=index.js.map