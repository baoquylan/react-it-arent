import React, { memo, useEffect, useState } from 'react';
import { appStore } from '../../../store/App.store';
import { message } from 'antd';
import { getDiaryAPI } from '../../../api/Main.api';


export default function ListDiary() {

    const { diary, setDiary, diaryPart, setDiaryPart, setIsLoading ,resetDiary} = appStore()
    useEffect(() => {
        return () => {
            setDiaryPart(1)
            resetDiary()
        }
    }, [])
    useEffect(() => {
        if (diaryPart)
            run()

    }, [diaryPart])

    const run = async () => {
        setIsLoading(true)
        try {
            let resDiary = await getDiaryAPI(diaryPart)
            setDiary(resDiary)
        } catch (ex) {
            message.warning(ex.message)
        }
        setIsLoading(false)

    }

    return (
        <div
            className='lb-diary'
        >
            {diary.map((item, k) =>
                <Diary
                    key={k}
                    item={item}
                    k={k}
                />
            )}
        </div>

    );
};
const Diary = memo(({ item, k }) => {
    return (
        <div className='container' key={k} >
            <div className='diary' >
                <div className='time'>
                    <div  >
                        2021.05.21
                    </div>
                    <div>
                        23:25
                    </div>
                </div>
        <p/>
                <div className='description'>
                    <span>私の日記の記録が一部表示されます。          
                  </span>
                  <br/>
                  <span>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </span>
                </div>
            </div>
        </div>
    )

})