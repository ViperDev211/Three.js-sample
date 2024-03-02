import React from 'react'
import * as THREE from 'three';

import { extrudeSettings } from '../../../utils/Funtions';

const DoorModel = ({ color, width, height }) => {   
    const thickness = 1.5; 
    const outTrimModel = new THREE.Shape()
    outTrimModel.moveTo(-width / 2, 0);
    outTrimModel.lineTo(-width / 2, height);
    outTrimModel.lineTo(-0.7, height);
    outTrimModel.lineTo(-0.7, 0);
    outTrimModel.closePath();

    const topWidow = new THREE.Path()
    topWidow.moveTo((-width / 2) + 4 * thickness, height - 4 * thickness);
    topWidow.lineTo((-width / 2) + 4 * thickness, height - 9 * thickness);
    topWidow.lineTo(- 4 * thickness, height - 9 * thickness);
    topWidow.lineTo(- 4 * thickness, height - 4 * thickness);
    topWidow.closePath();

    outTrimModel.holes.push(topWidow)

    const middleDoor = new THREE.Path()
    middleDoor.moveTo((-width / 2) + 5 * thickness,  height - 12 * thickness );
    middleDoor.lineTo((-width / 2) + 3 * thickness, (height / 2) + 11 * thickness);
    middleDoor.lineTo((-width / 2) + 3 * thickness, (height / 2) + 2 * thickness);
    middleDoor.lineTo(- 3 * thickness, (height / 2) + 2 * thickness);
    middleDoor.lineTo(- 3 * thickness, (height / 2) + 11 * thickness);
    middleDoor.lineTo(- 5 * thickness, height - 12 * thickness );
    middleDoor.closePath();

    outTrimModel.holes.push(middleDoor)

    const bottomDoor = new THREE.Path()
    bottomDoor.moveTo((-width / 2) + 5 * thickness,  (height / 2) - 1.5 * thickness);
    bottomDoor.lineTo((-width / 2) + 3 * thickness, (height / 2) - 6 * thickness);
    bottomDoor.lineTo((-width / 2) + 3 * thickness, 6 * thickness);
    bottomDoor.lineTo((-width / 2) + 5 * thickness, 2 * thickness);
    bottomDoor.lineTo(- 5 * thickness, 2 * thickness);
    bottomDoor.lineTo(- 3 * thickness, 6 * thickness );
    bottomDoor.lineTo(- 3 * thickness, (height / 2) - 6 * thickness);
    bottomDoor.lineTo(- 5 * thickness, (height / 2) - 1.5 * thickness);
    bottomDoor.closePath();

    outTrimModel.holes.push(bottomDoor) 
    
    
    return (
        <group>
            <mesh position={[0, 0, -3 / 2]}>
                <extrudeGeometry args={[outTrimModel, extrudeSettings(3)]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
    
        </group>
    )
}

export default DoorModel;