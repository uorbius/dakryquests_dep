import React, {FC, useContext, useState} from 'react'
import {Context} from "../../../../index"
import {observer} from "mobx-react-lite"
import cl from '../auth.module.sass'
import Input from  "../../../UI/Input"

const LoginPage: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)

    return (
        <div className={cl.Auth_layout__container}>
            <div className={cl.Layout_content__container}>
                <h1> Log<span className="a_col">in</span> </h1>
                <Input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='Email'
                    default={true}
                />
                <Input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='Password'
                    default={true}
                />
                <button className="button" onClick={() => store.login(email, password)}>
                   Enter to account
                </button>
                <span className={cl.Act}>
                    Don't have any account yet? <a href="/registration"> Sign up </a>
                </span>
            </div>
            <div className={cl.Layout_promo__container}>

                <span className={cl.blurer}>
                    <h2>
                        <span className={cl.Word}><span className={cl.Letter}>D</span><span className={cl.Text}>iscover</span></span>
                        <span className={cl.Word}><span className={cl.Letter}>W</span><span className={cl.Text}>atch</span></span>
                        <span className={cl.Word}><span className={cl.Letter}>E</span><span className={cl.Text}>njoy</span></span>
                    </h2>
                </span>
            </div>
        </div>
    )
}

export default observer(LoginPage)
