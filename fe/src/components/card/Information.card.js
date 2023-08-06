import React, { useEffect } from 'react';

export default function InformationCard({img, title, subTitle,onClick=()=>{}}) {


    return (
        <div  onClick={onClick}>
            <div className='lb-information-recommend' >
                <div style={{ position: 'relative', width: '100%', height: '100%' }} >
                    <div className='bg' style={{ backgroundImage: `url(${img})` }}>
                    </div>
                    <div className='cover'>
                    </div>

                    <div className='text' >
                        <div className='text-1'>
                            {title}
                        </div>
                        <div className='text-2'>
                        {subTitle}
                        </div>
                    </div>

                </div>



            </div>
        </div>



    );
};