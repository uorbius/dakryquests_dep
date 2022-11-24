import React, {FC, useContext, useEffect, useState} from 'react'
import RegistrationPage from './components/pages/Auth/Registration'
import LoginPage from './components/pages/Auth/Login'
import HomePage from './components/pages/Home'
import {Context} from "./index"
import {observer} from "mobx-react-lite"
import {IUser} from "./models/IUser"
import UserService from "./services/UserService"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import FilmPage from './components/pages/Film'

const App: FC = () => {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    return (
        <BrowserRouter>
            {
                store.isAuth && 
                <Navbar/>
            }
            <Routes>
                {
                    !store.isAuth ? 
                    <>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/registration" element={<RegistrationPage/>}/>
                    </>
                    :
                    <>
                        <Route path="/registration" element={<Navigate to="/"/>}/>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/film/:id" element={<FilmPage/>}/>
                    </>
                }
            </Routes>
        </BrowserRouter>
    )
}

export default observer(App)
