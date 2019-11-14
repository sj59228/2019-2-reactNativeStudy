"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const sharp_1 = __importDefault(require("sharp"));
const file_processing_1 = require("./file.processing");
exports.generateResizedAssets = async (sourcePath, destinationPath, width, height = width, options = {
    fit: 'contain',
}) => {
    file_processing_1.createDirectoryIfNotExists(destinationPath);
    return sharp_1.default(path_1.normalize(sourcePath))
        .resize(width, height, options)
        .toFile(destinationPath);
};
exports.checkImageIsSquare = async (sourcePath) => {
    const { width, height } = await sharp_1.default(path_1.normalize(sourcePath)).metadata();
    if (width !== height) {
        throw new Error('Image is not squared');
    }
};
