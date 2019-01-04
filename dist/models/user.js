"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    }
});
/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */
userSchema.set('toObject', { virtuals: true });
/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
userSchema.method('toGraph', function toGraph() {
    return JSON.parse(JSON.stringify(this));
});
exports.default = model('User', userSchema);
//# sourceMappingURL=user.js.map