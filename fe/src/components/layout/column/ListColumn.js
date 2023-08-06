import React, { memo, useEffect, useState } from 'react';
import img1 from '../../../img/photo/column-1'
import img2 from '../../../img/photo/column-2'
import img3 from '../../../img/photo/column-3'
import img4 from '../../../img/photo/column-4'
import img5 from '../../../img/photo/column-5'
import img6 from '../../../img/photo/column-6'
import img7 from '../../../img/photo/column-7'
import img8 from '../../../img/photo/column-8'
import { appStore } from '../../../store/App.store';
import { message } from 'antd';
import { getColumnAPI, getMenuAPI } from '../../../api/Main.api';


const imgs = [
    img1, img2, img3, img4, img5, img6, img7, img8
]


export default function ListColumn() {

    const { column, setColumn, setColumnPart, columnPart, resetColumn, setIsLoading } = appStore()
    useEffect(() => {
        return () => {
            setColumnPart(1)
            resetColumn()
        }
    }, [])
    useEffect(() => {
        if (columnPart)
            run()

    }, [columnPart])

    const run = async () => {
        setIsLoading(true)
        try {
            let resMenu = await getColumnAPI(columnPart)
            setColumn(resMenu)
        } catch (ex) {
            message.warning(ex.message)
        }
        setIsLoading(false)

    }

    return (
        <div
            className='lb-column'
        >
            {column.map((item, k) =>
                <Column
                    key={k}
                    item={item}
                    k={k}
                />
            )}
        </div>

    );
};
const Column = memo(({ item, k }) => {
    return (
        <div className='container'>
            <div key={k} className='img' style={{
                backgroundImage: `url(${imgs[item.imgIdx]})`
            }} >
                <div className={'item'} >
                    <div  >
                        {item.date}
                    </div>
                </div>
            </div>
            <div className='lb flex center col' >
                <div className='description'  >
                    {item.description}
                </div>
                <div className='tags'  >
                    {item?.tag.map(v =>
                        <a>
                            {v}
                        </a>

                    )}

                </div>
            </div>
        </div>

    )

})