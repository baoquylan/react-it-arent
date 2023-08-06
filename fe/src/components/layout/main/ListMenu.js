import React, { memo, useEffect, useState } from 'react';
import img1 from '../../../img/photo/d01'
import img2 from '../../../img/photo/d02'
import img3 from '../../../img/photo/l01'
import img4 from '../../../img/photo/l02'
import img5 from '../../../img/photo/l03'
import img6 from '../../../img/photo/m01'
import img7 from '../../../img/photo/m02'
import img8 from '../../../img/photo/m03'
import { appStore } from '../../../store/App.store';
import { requestAPI } from '../../../functions/General.function';
import { message } from 'antd';
import { getMenuAPI } from '../../../api/Main.api';


const imgs = [
    img1, img2, img3, img4, img5, img6, img7, img8
]


export default function ListMenu() {

    const { menu, setMenu, setMenuPart, menuPart,resetMenu , setIsLoading} = appStore()
    useEffect(()=>{
        return()=>{
            setMenuPart(1)
            resetMenu()
        }
    },[])
    useEffect(() => {
        if(menuPart )
        run()
 
    }, [menuPart])

    const run = async () => {
        setIsLoading(true)
        try {
            let resMenu = await getMenuAPI(menuPart)
            setMenu(resMenu)
        } catch (ex) {
            message.warning(ex.message)
        }
        setIsLoading(false)

    }

    return (
        <div
            className='lb-menu'
        >
            {menu.map((item, k) =>
                <Menu
                    key={k}
                    item={item}
                    k={k}
                />
            )}
        </div>

    );
};
const Menu = memo(({ item ,k}) => {
    return (
        <div  key={k} style={{ backgroundImage: `url(${imgs[item.imgIdx]})`, height: 234, width: 234, minWidth: 234 }} >
            <div className={'item'} >
                <div  >
                    {item.description}
                </div>
            </div>
        </div>
    )

})