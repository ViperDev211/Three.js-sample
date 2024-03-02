import React from 'react'
import * as THREE from 'three';

import { extrudeSettings } from '../../../utils/Funtions';

const FlagModel1 = ({color, width, height}) => {  

    const unit = 10

    const model = new THREE.Shape();
    model.moveTo(0, 0)
    model.bezierCurveTo(
        0, 0,
        width / 4, 2.5 * unit  ,
        width / 2, 0
    )
    model.bezierCurveTo(
        width / 2, 0,
        3 * width / 4, -2.5 * unit,
        width, 0
    )
    model.lineTo(width, height)
    model.bezierCurveTo(
        width, height,
        3 * width / 4, height - 2.5 * unit,
        width / 2, height
    )
    model.bezierCurveTo(
        width / 2, height,
        width / 4, height + 2.5 * unit  ,
        0, height
    )
    model.closePath();

  

    
    return (
        <group>
            {/* <gridHelper args={[20, 4]} />
            <gridHelper args={[20, 4]} rotation={[Math.PI / 2, 0, 0]} /> */}
            <mesh position={[0, 0, -3 / 2]}>
                <extrudeGeometry args={[model, extrudeSettings(3)]} />
                <meshStandardMaterial color={color} side={THREE.DoubleSide} opacity={0.5}/>
            </mesh>
        </group>
    )
}

export default FlagModel1;