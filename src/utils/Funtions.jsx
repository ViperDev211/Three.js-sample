export const extrudeSettings = (depthValue, bevelThicknesValue, bevelSizeValue, bevelSegmentsValue) => {
    
    const data = {
        steps: 2,
        depth: depthValue,
        bevelEnabled: true,
        bevelThickness: bevelThicknesValue ?? 0,
        bevelSize: bevelSizeValue ?? 0,
        bevelOffset: 0,
        bevelSegments: bevelSegmentsValue ?? 1
    }

    return data
};

