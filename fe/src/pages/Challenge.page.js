import React, { useEffect } from 'react';
import ListMenu from '../components/layout/main/ListMenu';
import { appStore } from '../store/App.store';
import Information from '../components/layout/challenge/Information';
import Chart from '../components/layout/challenge/Chart';
import Exercise from '../components/layout/challenge/Exercise';
import ListDiary from '../components/layout/challenge/ListDiary';
export default function ChallengePage() {
    const { diaryPart, setDiaryPart } = appStore()
    const handleLoadMore = () => {
        setDiaryPart(diaryPart + 1)
    }



    return (
        <>
            <div className='lb-container' style={{ width: '100%', height: '100%' }}>
                <div className='lb flex center p-40-0 information-container'>
                    <Information />
                </div>


                <div className='lb flex center p-20-0' id='body-record' >
                    <Chart />
                </div>

                <div className='lb flex center p-20-0' id='exercise' >
                    <Exercise />
                </div>



                <div className='lb flex center col' id='diary' >
                    <div className='lb flex center enf'  >
                        <div className='lb-header-diary'  >MY DIARY</div>
                    </div>
                    <ListDiary />
                    <div className='lb flex center more'  >
                        <button className='lb-btn' onClick={handleLoadMore} >
                        自分の日記をもっと見る
                        </button>
                    </div>
                </div>

            </div>


      
        </>


    );
};