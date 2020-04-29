declare function cameraRepair(img: File, config?: {
    resultFile: boolean;
}): Promise<string | Blob>;
export default cameraRepair;
