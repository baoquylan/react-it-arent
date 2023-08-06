import React, { useEffect } from 'react';
import percentageImg1 from '../../../img/photo/d01'
import percentageImg2 from '../../../img/percentage'
export default function Achievement() {



    return (
        <div style={{ position: 'relative', width: '40%', height:'100%',flex:1, minWidth:300 , maxHeight:300}} >
            <div className='achievement' style={{ backgroundImage: `url(${percentageImg1})`, position: 'absolute' }}>

            </div>
            <div className='lb flex center' style={{height:'100%'}} >
                <div className='achievement' style={{ backgroundImage: `url(${percentageImg2})`, width: 180, height: 180, position: 'absolute', zIndex: 1 }}>

                </div>
            </div>

        </div>


    );
};