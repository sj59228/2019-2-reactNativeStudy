"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logo_1 = require("../../logo");
const analytics_1 = require("../../services/analytics");
const type_1 = require("../../services/type");
const setSplashScreen_task_1 = require("./setSplashScreen.task");
exports.setSplashScreenCommand = {
    name: 'set-splash',
    func: analytics_1.trackTask('/set-splash', setSplashScreen_task_1.setSplashScreenTask),
    description: logo_1.logo + ' generate app splash screen',
    options: [
        {
            name: '--path <string>',
            description: 'path to your image file (mandatory)',
        },
        {
            name: '--platform [type]',
            description: 'all, ios, android',
            default: type_1.EPlatform.ALL,
        },
        {
            name: '--resize [string]',
            description: 'contain, cover, center',
            default: type_1.EResizeMode.CONTAIN,
        },
        {
            name: '--background [string]',
            description: 'background color',
            default: '#ffffff',
        },
    ],
    examples: [
        {
            desc: 'set the splash screen for both devices',
            cmd: 'react-native set-splash --path <path-to-image>  --resize <cover|contain|center> --background "<background-color>"',
        },
        {
            desc: 'set the splash screen for iOS',
            cmd: 'react-native set-splash --platform ios --path <path-to-image> --resize <cover|contain|center> --background "<background-color>"',
        },
        {
            desc: 'set the splash screen for Android',
            cmd: 'react-native set-splash --platform android --path <path-to-image> --resize <cover|contain|center> --background "<background-color>"',
        },
    ],
};
