export declare const readFile: (sourcePath: string) => string;
export declare const createDirectoryIfNotExists: (path: string) => void;
export declare const copyFile: (sourcePath: string, destinationPath: string) => void;
export declare const applyPatch: (path: string, { patch, pattern }: {
    patch: string;
    pattern: string | RegExp;
}) => void;
export declare const applyPatchByMatchedGroups: (path: string, patch: {
    patch: string;
    pattern: string | RegExp;
}) => void;
export declare const replaceInFile: (sourcePath: string, destinationPath: string, replacements: {
    newContent: string;
    oldContent: string | RegExp;
}[]) => void;
