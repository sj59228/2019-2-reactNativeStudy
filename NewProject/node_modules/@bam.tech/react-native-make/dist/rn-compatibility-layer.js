"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackwardCompatibleConfig = (config) => {
    const commands = config.commands;
    return commands.map(command => ({
        ...command,
        options: command.options.map(option => ({
            ...option,
            name: undefined,
            command: option.name,
        })),
    }));
};
