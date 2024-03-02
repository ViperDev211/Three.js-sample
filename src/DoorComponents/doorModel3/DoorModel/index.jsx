import React from 'react'
import * as THREE from 'three';

import { extrudeSettings } from '../../../utils/Funtions';

const DoorModel = ({ color, width, height}) => {    
    const thickness = 4;

    const outTrimModel = new THREE.Shape()
    outTrimModel.moveTo(-width / 2, height);
    outTrimModel.lineTo(-width / 2, 0);
    outTrimModel.lineTo(0, 0);
    outTrimModel.lineTo(0, height);
    outTrimModel.closePath();

    const topRelief = new THREE.Path()
    topRelief.moveTo((-width / 2) + thickness, (height / 2) - thickness);
    topRelief.lineTo((-width / 2) + thickness, height - 2 * thickness);
    topRelief.bezierCurveTo(
        -width / 2 + thickness, height - 2 * thickness,
        -width / 4, height - 0.2 * thickness,
        -thickness,  height - 2 * thickness
        );
    topRelief.lineTo(-thickness, (height / 2) - thickness);
    topRelief.closePath();

    const bottomRelief = new THREE.Path()
    bottomRelief.moveTo((-width / 2) + thickness, 2 * thickness);
    bottomRelief.lineTo((-width / 2) + thickness, (height / 2) - 3 * thickness);
    bottomRelief.lineTo(-thickness, (height / 2) - 3 * thickness);
    bottomRelief.lineTo(-thickness, 2 * thickness);
    bottomRelief.closePath();
    
    outTrimModel.holes.push(topRelief)
    outTrimModel.holes.push(bottomRelief)


    const inTrimModel = new THREE.Shape()
    inTrimModel.moveTo(-width / 2 + thickness, thickness);
    inTrimModel.lineTo(-width / 2 + thickness, height - thickness);
    inTrimModel.lineTo(-thickness, height-thickness);
    inTrimModel.lineTo(-thickness, thickness);
    inTrimModel.closePath();

    const inTopRelief = new THREE.Shape()
    inTopRelief.moveTo((-width / 2) + 1.3 * thickness, (height / 2) - thickness / 1.5);
    inTopRelief.lineTo((-width / 2) + 1.3 * thickness, height - 2.3 * thickness);
    inTopRelief.bezierCurveTo(
        (-width / 2) + 1.3 * thickness, height - 2.3 * thickness,
        -width / 4, height - 0.5* thickness,
        -1.3 * thickness,  height - 2.3 * thickness
        );
    inTopRelief.lineTo(-1.3 * thickness, (height / 2) - thickness / 1.5);
    inTopRelief.closePath();

    const inBottomRelief = new THREE.Shape()
    inBottomRelief.moveTo((-width / 2) + 1.3 * thickness, 2.3 * thickness);
    inBottomRelief.lineTo((-width / 2) + 1.3 * thickness, (height / 2) - 3.3 * thickness);
    inBottomRelief.lineTo(-1.3 * thickness, (height / 2) - 3.3 * thickness);
    inBottomRelief.lineTo(-1.3 * thickness, 2.3 * thickness);
    inBottomRelief.closePath();


    return (
        <group>
            <mesh position={[0, 0, -0.1 / 2]}>
                <extrudeGeometry args={[outTrimModel, extrudeSettings(0.1, 1, 1, 5)]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
            <mesh position={[0, 0, -0.1 / 2]}>
                <extrudeGeometry args={[inTopRelief, extrudeSettings(0.1, 1, 1, 5)]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
            <mesh position={[0, 0, -0.1 / 2]}>
                <extrudeGeometry args={[inBottomRelief, extrudeSettings(0.1, 1, 1, 5)]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
        </group>
    )
}

export default DoorModel;