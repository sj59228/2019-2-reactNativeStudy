"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const service_1 = require("../../../services/ios/service");
const image_processing_1 = require("../../../services/image.processing");
exports.addIosIcon = async (iconSource) => {
    try {
        await image_processing_1.checkImageIsSquare(iconSource);
        const iosIconFolder = service_1.addIosImageSetContents('AppIcon');
        await generateIosIcons(iconSource, iosIconFolder);
    }
    catch (err) {
        console.log(err);
    }
};
const generateIosIcons = (iconSource, iosIconFolder) => Promise.all(config_1.config.iosIconSizes.map(size => Promise.all(size.multipliers.map(multiplier => image_processing_1.generateResizedAssets(iconSource, `${iosIconFolder}/icon-${size.size}@${multiplier}x.png`, size.size * multiplier)))));
