import React from 'react'
import * as THREE from 'three';

import { extrudeSettings } from '../../../utils/Funtions';

const DoorModel = () => {    
   const width = 70;
   const height = 130;
   const frame = 3;

   const outDoorFrame = new THREE.Shape();
   outDoorFrame.moveTo(-width -2.7* frame, 0);
   outDoorFrame.lineTo(-width -2.7* frame, height + 2.7* frame);
   outDoorFrame.lineTo(2.7* frame, height + 2.7* frame);
   outDoorFrame.lineTo(2.7* frame, 0);

//    const outDoor = new THREE.Path();
//    outDoor.moveTo(-width - frame, frame);
//    outDoor.lineTo(-width - frame, height + frame);
//    outDoor.lineTo(frame, height +frame);
//    outDoor.lineTo(frame, frame);
//    outDoorFrame.holes.push(outDoor);

   const inDoorFrame = new THREE.Shape();
   inDoorFrame.moveTo(-width - frame, frame);
   inDoorFrame.lineTo(-width - frame, height + frame);
   inDoorFrame.lineTo(frame, height +frame);
   inDoorFrame.lineTo(frame, frame);


   const inDoor = new THREE.Path();
   inDoor.moveTo(-width , 0);
   inDoor.lineTo(-width, height);
   inDoor.lineTo(0, height);
   inDoor.lineTo(0, 0);
   inDoorFrame.holes.push(inDoor);


//    const door = new THREE.Shape();
//    door.moveTo(-width, 0);
//    door.lineTo(-width, height);
//    door.lineTo(0, height);
//    door.lineTo(0, 0);
   
//    const inDoorFrame = new THREE.Shape();
//    inDoorFrame.moveTo(-width - frame, 0);
//    inDoorFrame.lineTo(-width - frame, height + frame);
//    inDoorFrame.lineTo(frame, height +frame);
//    inDoorFrame.lineTo(frame, 0);

    return (
        <group>
             <mesh position={[0, 0, -3 / 2]}>
                <extrudeGeometry args={[outDoorFrame, extrudeSettings(3) ]}/>
                <meshStandardMaterial  color={'white'} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
            <mesh position={[0, 0, -3.5 / 2]}>
                <extrudeGeometry args={[inDoorFrame, extrudeSettings(3.5) ]}/>
                <meshStandardMaterial  color={'red'} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
            {/* <mesh position={[0, 0, -1 / 2]}>
                <extrudeGeometry args={[door, extrudeSettings(1, 1, 5, 5) ]}/>
                <meshStandardMaterial  color={'white'} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
            <mesh position={[0, 0, -2 / 2]}>
                <extrudeGeometry args={[inDoorFrame, extrudeSettings(2, 1) ]}/>
                <meshStandardMaterial  color={'red'} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh> */}
        </group>
    )
}

export default DoorModel;