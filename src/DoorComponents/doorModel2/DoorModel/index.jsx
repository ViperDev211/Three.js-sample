import React from 'react'
import * as THREE from 'three';

import { extrudeSettings } from '../../../utils/Funtions';

const DoorModel = ({ color, width, height}) => {    
    const thickness = 1.5;

    const outTrimModel = new THREE.Shape()
    outTrimModel.moveTo(-width / 2, 0);
    outTrimModel.lineTo(-width / 2, height);
    outTrimModel.lineTo(0, height);
    outTrimModel.lineTo(0, 0);
    outTrimModel.closePath();

    const outTrimHoleModel = new THREE.Path()
    outTrimHoleModel.moveTo((-width / 2) + thickness, thickness);
    outTrimHoleModel.lineTo((-width / 2) + thickness, height - thickness);
    outTrimHoleModel.lineTo(-thickness, height - thickness);
    outTrimHoleModel.lineTo(-thickness, thickness);
    outTrimHoleModel.closePath();
    outTrimModel.holes.push(outTrimHoleModel);

    const middleRailModel = new THREE.Shape()
    middleRailModel.moveTo((-width / 2) + thickness, (height/2)-thickness/2);
    middleRailModel.lineTo((-width / 2) + thickness, (height/2)+thickness/2);
    middleRailModel.lineTo(-thickness, (height / 2) + thickness / 2);
    middleRailModel.lineTo(-thickness, (height / 2) - thickness / 2);
    middleRailModel.closePath();

    const upperLeftRailModel = new THREE.Shape()
    upperLeftRailModel.moveTo((-width / 2) + thickness, height - 6 * thickness);
    upperLeftRailModel.lineTo((-width / 2) + thickness, height - 5 * thickness);
    upperLeftRailModel.lineTo((-width / 2) + 5 * thickness, height - thickness);
    upperLeftRailModel.lineTo((-width / 2) + 6 * thickness, height - thickness);
    upperLeftRailModel.closePath();

    const upperRightRailModel = new THREE.Shape()
    upperRightRailModel.moveTo(-thickness, height - 6 * thickness);
    upperRightRailModel.lineTo(-thickness, height - 5 * thickness);
    upperRightRailModel.lineTo(-5 * thickness, height - thickness);
    upperRightRailModel.lineTo(-6 * thickness, height - thickness);
    upperRightRailModel.closePath();

    const underLeftRailModel = new THREE.Shape()
    underLeftRailModel.moveTo((-width / 2) + thickness, (height / 2) - 1.5 * thickness);
    underLeftRailModel.lineTo(-2 * thickness, thickness);
    underLeftRailModel.lineTo(-thickness,  thickness);
    underLeftRailModel.lineTo(-thickness, 2 * thickness);
    underLeftRailModel.lineTo((-width / 2) + 2 * thickness, (height / 2) - thickness / 2);
    underLeftRailModel.lineTo((-width / 2) + thickness, (height / 2) - thickness / 2);
    underLeftRailModel.closePath();

    const underRightRailModel = new THREE.Shape()
    underRightRailModel.moveTo((-width / 2) + thickness, 2 * thickness);
    underRightRailModel.lineTo((-width / 2) + thickness, thickness);
    underRightRailModel.lineTo((-width / 2) + 2 * thickness,  thickness);
    underRightRailModel.lineTo(-thickness, (height / 2) - 1.5 * thickness);
    underRightRailModel.lineTo(-thickness, (height / 2) - thickness / 2);
    underRightRailModel.lineTo(-2 * thickness, (height / 2) - thickness / 2);
    underRightRailModel.closePath();

    const sideWallModel = new THREE.Shape()
    sideWallModel.moveTo((-width / 2) + thickness, thickness);
    sideWallModel.lineTo((-width / 2) + thickness, height - thickness);
    sideWallModel.lineTo(-thickness, height - thickness);
    sideWallModel.lineTo(-thickness, thickness);
    sideWallModel.closePath();

    let trimModelGroup = [];
    let railModelGroup = [];
    trimModelGroup.push(outTrimModel, middleRailModel)
    railModelGroup.push(upperLeftRailModel, upperRightRailModel, underLeftRailModel, underRightRailModel)

    
    return (
        <group>
            <mesh position={[0, 0, -3 / 2]}>
                <extrudeGeometry args={[trimModelGroup, extrudeSettings(3)]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
            <mesh position={[0, 0, -2 / 2]}>
                <extrudeGeometry args={[railModelGroup, extrudeSettings(2)]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
            <mesh position={[0, 0, -1 / 2]}>
                <extrudeGeometry args={[sideWallModel, extrudeSettings(1)]} />
                <meshStandardMaterial color={'orange'} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
        </group>
    )
}

export default DoorModel;