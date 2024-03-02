import React from 'react'

import DoorModel from './DoorModel';

const DoorModel2 = ({ color, width, height }) => {

    return (
        <group>
            <DoorModel color={color} width={width} height={height} />
            <group rotation={[0, Math.PI, 0]}>
                <DoorModel color={color} width={width} height={height}   />
            </group>
        </group>
    )
}

export default DoorModel2;