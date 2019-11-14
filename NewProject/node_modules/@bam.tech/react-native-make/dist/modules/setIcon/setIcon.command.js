"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logo_1 = require("../../logo");
const analytics_1 = require("../../services/analytics");
const type_1 = require("../../services/type");
const setIcon_task_1 = require("./setIcon.task");
exports.setIconCommand = {
    name: 'set-icon',
    func: analytics_1.trackTask('/set-icon', setIcon_task_1.setIconTask),
    description: logo_1.logo + ' generate app icons',
    options: [
        {
            name: '--path <string>',
            description: 'path to your image file (mandatory)',
        },
        {
            name: '--platform [type]',
            description: 'ios or android',
            default: type_1.EPlatform.ALL,
        },
        {
            name: '--background [string]',
            description: 'background color',
            default: '#ffffff',
        },
    ],
    examples: [
        {
            desc: 'set the app icon for both devices',
            cmd: 'react-native set-icon --path <path-to-image> --background <background-color-for-android>',
        },
        {
            desc: 'set the app icon for iOS',
            cmd: 'react-native set-icon --platform ios --path <path-to-image>',
        },
        {
            desc: 'set the app icon for both devices',
            cmd: 'react-native set-icon --platform android --path <path-to-image> --background <background-color>',
        },
    ],
};
