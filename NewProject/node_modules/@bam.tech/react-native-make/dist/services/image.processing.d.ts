import sharp from 'sharp';
export declare const generateResizedAssets: (sourcePath: string, destinationPath: string, width: number, height?: number, options?: sharp.ResizeOptions) => Promise<sharp.OutputInfo>;
export declare const checkImageIsSquare: (sourcePath: string) => Promise<void>;
