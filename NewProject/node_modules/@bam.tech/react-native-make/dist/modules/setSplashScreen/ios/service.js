"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../../../services/ios/service");
const image_processing_1 = require("../../../services/image.processing");
const config_1 = require("./config");
const path_1 = require("path");
const file_processing_1 = require("../../../services/file.processing");
const color_processing_1 = require("../../../services/color.processing");
const type_1 = require("../../../services/type");
exports.addIosSplashScreen = async (imageSource, backgroundColor, resizeMode) => {
    try {
        addSplashScreenXib(backgroundColor, resizeMode);
        configureSplashScreen();
        const iosSplashImageFolder = service_1.addIosImageSetContents('SplashImage', service_1.EImageSetType.IMAGE);
        await generateIosSplashImages(imageSource, iosSplashImageFolder);
    }
    catch (err) {
        console.log(err);
    }
};
const configureSplashScreen = () => {
    const packageJson = require(path_1.join(process.cwd(), './package'));
    const appDelegatePath = `./ios/${packageJson.name}/AppDelegate.m`;
    file_processing_1.applyPatch(appDelegatePath, {
        pattern: /^(.+?)(?=\#import)/gs,
        patch: '#import "RNSplashScreen.h"\n',
    });
    const showRNSplashScreen = '[RNSplashScreen show];';
    if (!file_processing_1.readFile(appDelegatePath).includes(showRNSplashScreen)) {
        file_processing_1.applyPatchByMatchedGroups(appDelegatePath, {
            pattern: /(didFinishLaunchingWithOptions.*)(\n *return YES)/gs,
            patch: `$1\n  ${showRNSplashScreen}$2`,
        });
    }
};
const addSplashScreenXib = (backgroundColor, resizeMode = type_1.EResizeMode.CONTAIN) => {
    const { red, green, blue, alpha } = color_processing_1.getNormalizedRGBAColors(backgroundColor);
    const packageJson = require(path_1.join(process.cwd(), './package'));
    file_processing_1.replaceInFile(path_1.join(__dirname, `../../../../templates/ios/LaunchScreen.${resizeMode}.xib`), `./ios/${packageJson.name}/Base.lproj/LaunchScreen.xib`, [
        {
            oldContent: /{{background-rgba-red}}/g,
            newContent: `${red}`,
        },
        {
            oldContent: /{{background-rgba-green}}/g,
            newContent: `${green}`,
        },
        {
            oldContent: /{{background-rgba-blue}}/g,
            newContent: `${blue}`,
        },
        {
            oldContent: /{{background-rgba-alpha}}/g,
            newContent: `${alpha}`,
        },
    ]);
};
const generateIosSplashImages = (imageSource, iosSplashImageFolder) => {
    const { multipliers, size, backgroundColor } = config_1.config.iosSplashImage;
    return Promise.all(multipliers.map(multiplier => image_processing_1.generateResizedAssets(imageSource, `${iosSplashImageFolder}/splash@${multiplier}x.png`, size * multiplier, size * multiplier, {
        fit: 'inside',
    })));
};
