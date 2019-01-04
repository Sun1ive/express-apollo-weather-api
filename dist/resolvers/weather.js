"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
const client = new api_1.default();
exports.default = {
    Query: {
        city: async (_, { name }) => {
            const { data: { data } } = await client.getCities();
            return data.find(({ name: cityName }) => cityName === name);
        },
        cities: async () => {
            const { data: { data } } = await client.getCities();
            return data;
        },
        hottestCity: async () => {
            const { data: { data } } = await client.getCities();
            return data.find(({ temp }) => temp === Math.max(...data.map(({ temp }) => temp)));
        },
        coldestCity: async () => {
            const { data: { data } } = await client.getCities();
            return data.find(({ temp }) => temp === Math.min(...data.map(({ temp }) => temp)));
        }
    }
};
//# sourceMappingURL=weather.js.map