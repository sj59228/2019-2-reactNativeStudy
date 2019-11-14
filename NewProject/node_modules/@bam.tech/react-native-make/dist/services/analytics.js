"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const universal_analytics_1 = __importDefault(require("universal-analytics"));
const analytics = universal_analytics_1.default('UA-145385834-2');
exports.trackTask = (pageName, task) => (argv, config, args) => {
    analytics.pageview(pageName).send();
    return task(argv, config, args);
};
