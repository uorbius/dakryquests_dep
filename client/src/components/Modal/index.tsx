import cl from './modal.module.sass'
import {useContext, useEffect, FC} from 'react'
import {Context} from '../../index'

interface IModal {
    modalData: any 
    active: boolean
}

const Modal: FC<IModal> = (props: IModal) => {

    const {store} = useContext(Context)

    useEffect(() => {
        console.log("catched")
        if(props.active === true) setTimeout(() => {
            store.setModalActive(false)
        }, 15)
    }, [props.active])

    return (
        <div className={`${cl.Modal_container} ${props.active ? cl.Active : ""}`}>
            <span> {props.modalData.message} </span>
            <button onClick={() => store.setModalActive(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 24 24">
                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                </svg>
            </button>
        </div>
    )
}

export default Modal