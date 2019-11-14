"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_string_1 = __importDefault(require("color-string"));
const BASE = 255;
exports.getNormalizedRGBAColors = (color) => {
    try {
        const [red, green, blue, alpha] = color_string_1.default.get.rgb(color);
        return {
            red: red / BASE,
            green: green / BASE,
            blue: blue / BASE,
            alpha,
        };
    }
    catch (err) {
        throw new Error('Could not parse your color');
    }
};
exports.getHexColor = (color) => {
    try {
        const RGBA = color_string_1.default.get.rgb(color);
        return color_string_1.default.to.hex(RGBA);
    }
    catch (err) {
        throw new Error('Could not parse your color');
    }
};
