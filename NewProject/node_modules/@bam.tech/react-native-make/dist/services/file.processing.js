"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.readFile = (sourcePath) => fs_1.readFileSync(sourcePath, 'utf8');
exports.createDirectoryIfNotExists = (path) => {
    const directory = path_1.dirname(path);
    if (!fs_1.existsSync(directory)) {
        fs_1.mkdirSync(directory, { recursive: true });
    }
};
exports.copyFile = (sourcePath, destinationPath) => {
    exports.createDirectoryIfNotExists(destinationPath);
    fs_1.copyFileSync(sourcePath, destinationPath);
};
exports.applyPatch = (path, { patch, pattern }) => {
    if (!exports.readFile(path).includes(patch)) {
        fs_1.writeFileSync(path, fs_1.readFileSync(path, 'utf8').replace(pattern, match => `${match}${patch}`));
    }
};
exports.applyPatchByMatchedGroups = (path, patch) => {
    fs_1.writeFileSync(path, fs_1.readFileSync(path, 'utf8').replace(patch.pattern, patch.patch));
};
exports.replaceInFile = (sourcePath, destinationPath, replacements) => {
    exports.createDirectoryIfNotExists(destinationPath);
    let fileContent = fs_1.readFileSync(sourcePath, 'utf8');
    replacements.forEach(({ oldContent, newContent }) => {
        fileContent = fileContent.replace(oldContent, newContent);
    });
    fs_1.writeFileSync(destinationPath, fileContent);
};
