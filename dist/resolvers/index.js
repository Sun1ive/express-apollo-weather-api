"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_1 = __importDefault(require("./weather"));
const user_1 = __importDefault(require("./user"));
exports.resolvers = {
    Query: Object.assign({}, weather_1.default.Query, user_1.default.Query)
};
//# sourceMappingURL=index.js.map