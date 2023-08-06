import React, { memo, useEffect, useMemo, useState } from 'react';

export default function Exercise() {
    const [data, setData] = useState([])
    useEffect(() => {
        let temp = []
        for (let index = 0; index < 100; index++) {
            temp.push(index)
        }
        setData(temp)
    }, [])

    return (
        <div className='lb-excercise' >
            <div>
                <div className='header'>
                    <div className='title' >
                        <span> MY </span><br />
                        <span>EXERCISE</span>
                    </div>
                    <div className='time' >
                        2021.05.21
                    </div>
                </div>
                <div className='list' >
                    {data.map((i,k) =>
                        <div key={k} className='container'>

                            <ExerciseItem />

                            <ExerciseItem />

                        </div>



                    )}
                </div>
            </div>

        </div>


    );
};

const ExerciseItem = memo(() => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', borderBottom: '1px solid white' }} >
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <div className='title' >
                    <li>家事全般（立位・軽い）</li>
                </div>
                <div className='calorie' style={{ paddingLeft: 22 }}>
                    26kcal
                </div>
            </div>
            <div className='time' >  10 min  </div>
        </div>
    )

})