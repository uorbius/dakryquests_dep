import React, {FC, useContext, useState} from 'react'
import {Context} from "../../../../index"
import {observer} from "mobx-react-lite"
import cl from '../auth.module.sass'
import Input from  "../../../UI/Input"

const RegistrationPage: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)

    return (
        <div className={cl.Auth_layout__container}>
            <div className={cl.Layout_content__container}>
                <h1> Sign<span className="a_col">up</span> </h1>
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
                   Create account
                </button>
                <span className={cl.Act}>
                    Already have an account? <a href="/login"> Log in </a>
                </span>
            </div>
            <div className={cl.Layout_promo__container}>
                <span className={cl.blurer}></span>
            </div>
        </div>
    )
}

export default observer(RegistrationPage)
