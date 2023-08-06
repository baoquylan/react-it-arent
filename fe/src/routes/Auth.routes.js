import React, { useEffect, useRef } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { appStore } from '../store/App.store';
import { authAPI } from '../api/Auth.api';
import { message } from 'antd';


export default function AuthRoutes(props) {
    let navigate = useNavigate();
    const { user, setUser, setIsLoading } = appStore()

    useEffect(() => {
        let token
        if(process.env.NODE){
            token = localStorage.getItem('arentToken')
        }else{
            token = localStorage.getItem('arentData')
        }
         
        if (!token) {
            navigate('/login')
        } else {
            run()
        }
    }, []);
    const run = async () => {
        setIsLoading(true)
        try {
            let userData = await authAPI()
            setUser(userData)
        } catch (ex) {
            message.warning(ex.message)
            if (ex.message === 'Token cannot validate') {
                localStorage.removeItem('arentToken')
                localStorage.removeItem('arentData')
                navigate('/login')
                return
            }
        }
        setIsLoading(false)
    }

    return (
        <>
            {user && <div style={{ width: '100%', height: '100%' }}>
                <Outlet />
              
         
            </div>}

        </>
    );
}


