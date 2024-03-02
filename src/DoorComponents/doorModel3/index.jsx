import React from 'react'

import DoorModel from './DoorModel';

const DoorModel3 = ({ color, width, height }) => {

    return (
        <group>
            <group position={[-0.5, 0, 0]}>
                <DoorModel color={color} width={width} height={height} />
            </group>
            <group position={[0.5, 0, 0]} rotation={[0, Math.PI, 0]}>
                <DoorModel color={color} width={width} height={height}   />
            </group>
        </group>
    )
}

export default DoorModel3;