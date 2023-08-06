import React, { useEffect } from 'react';
import Achievement from '../components/layout/main/Achievement';
import Chart from '../components/layout/main/Chart';
import Filter from '../components/layout/main/Filter';
import ListMenu from '../components/layout/main/ListMenu';
import { appStore } from '../store/App.store';
import { FloatButton } from 'antd';
export default function MainPage() {
    const { menuPart, setMenuPart } = appStore()
    const handleLoadMore = () => {
        setMenuPart(menuPart + 1)
    }



    return (
        <>
            <div className='lb-container' style={{ width: '100%', height: '100%' }}>
                <div className='achievement-container'>
                    <div style={{ width: '100%', height: 300, display: 'flex', flexWrap: 'wrap' }}>
                        <Achievement />
                        <Chart />
                    </div>
                </div>


                <div className='lb flex center p-20-0' >
                    <Filter />
                </div>

                <div className='lb flex center p-20-0'  style={{ flexDirection: 'column' }}>
                    <ListMenu />
                    <div className='lb flex center more'  >
                        <button className='lb-btn' onClick={handleLoadMore} >
                            記録をもっと見る
                        </button>
                    </div>
                  
                </div>
          
            </div>
      

        </>


    );
};