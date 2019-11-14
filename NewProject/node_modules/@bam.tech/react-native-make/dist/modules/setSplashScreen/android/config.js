"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BASE = 900; // Deliberate size based on max iPhone height
const androidSplashImages = [
    {
        density: 'mdpi',
        size: BASE,
    },
    {
        density: 'hdpi',
        size: BASE * 2,
    },
    {
        density: 'xhdpi',
        size: BASE * 3,
    },
    {
        density: 'xxhdpi',
        size: BASE * 3,
    },
];
exports.config = {
    androidSplashImages,
};
