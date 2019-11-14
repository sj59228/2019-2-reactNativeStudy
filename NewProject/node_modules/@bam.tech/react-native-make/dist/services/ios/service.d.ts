export declare enum EImageSetType {
    IMAGE = "imageset",
    ICON = "appiconset"
}
export declare const addIosImageSetContents: (imageSetName: string, setType?: EImageSetType) => string;
