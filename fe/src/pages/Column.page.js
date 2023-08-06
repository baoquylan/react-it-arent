import React, { useEffect } from 'react';
import ListMenu from '../components/layout/main/ListMenu';
import { appStore } from '../store/App.store';
import ListDiary from '../components/layout/challenge/ListDiary';
import ListColumn from '../components/layout/column/ListColumn';
import Recommend from '../components/layout/column/Recommend';
export default function ColumnPage() {
    const {  columnPart, setColumnPart } = appStore()
    const handleLoadMore = () => {
        setColumnPart(columnPart + 1)
    }



    return (
        <>

            <div className='lb-container' style={{ width: '100%', height: '100%' }}>

                <div className='lb flex center p-20-0' >
                    <Recommend />

                </div>



                <div className='lb flex center col p-20-0' >
                    <ListColumn />
                    <div className='lb flex center more'  >
                        <button className='lb-btn' onClick={handleLoadMore} >
                            コラムをもっと見る
                        </button>
                    </div>

                </div>

            </div>




        </>


    );
};