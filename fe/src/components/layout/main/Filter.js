import React, { useEffect } from 'react';
import Hexagon from '../../gen/Hexagon.gen';
import Icon from '../../gen/Icon.gen';
export default function Filter() {



    return (
        <div style={{display:'flex', gap:50, justifyContent:'center' , width:'100%',flexWrap:'wrap', maxWidth:960}} >
            <Hexagon>
                <div className='btn' >
                    <Icon  icon={'lunch'}/>
                    <span>Morning</span>
                </div>
            </Hexagon>

            <Hexagon>
                <div className='btn' >
                    <Icon  icon={'lunch'}/>
                    <span >Lunch</span>
                </div>
            </Hexagon>

            <Hexagon>
                <div className='btn' >
                    <Icon  icon={'lunch'}/>
                    <span>Dinner</span>
                </div>
            </Hexagon>

            <Hexagon>
                <div className='btn' >
                    <Icon  icon={'snack'}/>
                    <span>Snack</span>
                </div>
            </Hexagon>
        </div>

    );
};