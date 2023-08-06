import React, { useEffect, useRef } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import TopNavigation from '../components/navigation/Top.navigattion';
import BottomNavigation from '../components/navigation/Bottom.navgation';
import BackTopImg from '../img/backtop'

export default function GuestRoutes() {

    const refBtn = useRef()
    const refMain = useRef()
    const topFunction = () => {
        refMain.current.scrollTop = 0;
    }
    useEffect(() => {
        refMain.current?.addEventListener('scroll', handleScroll)
        return () => {
            refMain.current?.removeEventListener('scroll', handleScroll)
        }
    }, [refMain.current, refBtn.current])
    const handleScroll = () => {
        if (!refMain.current || !refBtn.current) return
        if (refMain.current.scrollTop > 20 || refMain.current.scrollTop > 20) {
            refBtn.current.style.display = "block";
        } else {
            refBtn.current.style.display = "none";
        }
    }
    return (
        <>
            <TopNavigation isGuest={true} />
            <div ref={refMain} style={{ overflow: 'auto', width: '100%', height: 'calc(100vh - 192px)' }}>
                <Outlet />
                <div ref={refBtn} className='lb-backtop' onClick={topFunction} >
                    <img  width={50} src={BackTopImg} />
                </div>

            </div>
            <BottomNavigation />

        </>
    );
}


