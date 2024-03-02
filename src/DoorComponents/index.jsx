import React from 'react'

import DoorModel1 from './doorModel1'
import DoorModel2 from './doorModel2'
import DoorModel3 from './doorModel3'
import DoorModel4 from './doorModel4'
import HeartModel from './heartModel'
import FlagModel from './flagModel'


const DoorComponents = ({ color, model, width, height }) => {
    return (
        <group>
            { model === 'doorModel1' && <DoorModel1 color={color} width={width} height={height}  />}
            { model === 'doorModel2' && <DoorModel2 color={color} width={width} height={height} />}
            { model === 'doorModel3' && <DoorModel3 color={color} width={width} height={height} />}
            { model === 'doorModel4' && <DoorModel4 color={color} width={width} height={height} />}
            { model === 'heartModel' && <HeartModel color={color} width={width} height={height}/>}
            { model === 'flagModel' && <FlagModel color={color} width={width} height={height}/>}
           
        </group>
    )
}

export default DoorComponents;