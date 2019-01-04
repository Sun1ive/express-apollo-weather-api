"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
exports.default = {
    Query: {
        getUsers: async () => {
            const users = await user_1.default.find({});
            return users;
        },
        getUserById: async (_, { id }) => {
            const user = await user_1.default.findById(id);
            return user;
        }
    }
};
//# sourceMappingURL=user.js.map