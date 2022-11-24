import { observer } from 'mobx-react-lite'
import React, {FC, useContext, useEffect, useState} from 'react'
import cl from './index.module.sass'
import {Context} from "../../index"
import ic from "../../img/Icon_nav.png"
import profile from "../../img/profile.png"

const Navbar: FC = () => {

    const {store} = useContext(Context)

    return (
        <header className={cl.Navbar}>
            <div className={cl.Navbar_space}></div>
            <div className={cl.Navbar_promo}>
                <div className={cl.Amber}>
                    <img className={cl.Icon} src={ic} width="32"/>
                    <span className={cl.Name}> Cimber </span>
                </div>
                <div className={cl.Opts}>
                    <div className={cl.Route}>
                        <a href="/"> Home </a>
                    </div>
                    <div className={cl.Route}>
                        <a href="/">Rules</a>
                    </div>
                </div>
                <div className={cl.Profile}>
                    <button onClick={() => store.logout()} className={cl.Logout_btn}>
                        <span> Logout </span>
                    </button>
                    <svg className={cl.Icon} xmlns="http://www.w3.org/2000/svg" width="32" viewBox="0 0 16 16">
                        <linearGradient id="gradient">
                            <stop className="main-stop" offset="0%" />
                            <stop className="alt-stop" offset="100%" />
                        </linearGradient>
                        <path fill="url(#gradient)" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                </div>
            </div>
            <div className={cl.Navbar_space}></div>
        </header>
    )
}

export default observer(Navbar)