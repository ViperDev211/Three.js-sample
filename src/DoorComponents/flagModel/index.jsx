import React from 'react'

import FlagModel1 from './flagModel';

const FlagModel = ({color, width, height}) => {

    return (
        <group>
            <FlagModel1  color={color} width={width} height={height} />
            
        </group>
    )
}

export default FlagModel;