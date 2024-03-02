import React from 'react'

import HeartModel1 from './heartModel';

const HeartModel = ({color, width, height}) => {
    return (
        <group>
            <HeartModel1  color={color} width={width} height={height}/>
            <group rotation={[0, Math.PI, 0]}>
                <HeartModel1 color={color} width={width} height={height}/>
            </group>
        </group>
    )
}

export default HeartModel;