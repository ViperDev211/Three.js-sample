import React from 'react'
import * as THREE from 'three';

import { extrudeSettings } from '../../../utils/Funtions';

const HeartModel1 = ({color, width, height}) => {  
  
    const Model = new THREE.Shape()
    Model.moveTo(0, 0); 
    Model.quadraticCurveTo(-width / 2, height / 2.5, -width / 2, height );
    Model.quadraticCurveTo(-width / 2, height + 20, -width / 4, height + 20);
    Model.quadraticCurveTo(0, height + 20, 0, height);
    Model.closePath();


    
    return (
        <group>
            <mesh position={[0, 0, -3 / 2]}>
                <extrudeGeometry args={[Model, extrudeSettings(3)]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
          
        </group>
    )
}

export default HeartModel1;