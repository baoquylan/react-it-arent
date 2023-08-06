import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { appStore } from './store/App.store';

import AuthRoutes from './routes/Auth.routes';
import NoPage from './pages/NoPage.page'
import Loader from './components/loaders/App.loader';
import LoginPage from './pages/Login.page';
import MainRoutes from './routes/Main.routes';
import MainPage from './pages/Main.page';
import ChallengePage from './pages/Challenge.page';
import ColumnPage from './pages/Column.page';
import GuestRoutes from './routes/Guest.routes';


export default function App() {
    const { isLoading } = appStore()
    return (
        <>
            {isLoading && <Loader />}
            <Routes>
                <Route element={<AuthRoutes />}>
                    <Route element={<MainRoutes />} >
                        <Route index element={<MainPage />} />
                        <Route path='/challenge' element={<ChallengePage />} />
                        {/* <Route path='/column' element={<ColumnPage />} /> */}
                    </Route>
                    
                </Route>
                <Route element={<GuestRoutes />} >
                <Route path='/column' element={<ColumnPage />} />
                </Route>
             
                <Route path='/login' exact element={<LoginPage />} />
                <Route path='*' exact element={<NoPage />} />
            </Routes>
        </>

    )
}