import { observer } from 'mobx-react-lite'
import React, {FC, useContext, useEffect, useState, useRef } from 'react'
import cl from "./home.module.sass"
import { IFilm } from "../../../models/IFilm"
import { useObserver } from '../../../hooks/observer.hook'
import userService from "../../../services/UserService"
import Film from './Film/'
import {Context} from "../../../"

const HomePage: FC = () => {

    const {store} = useContext(Context)

    const obsElement = useRef() as React.MutableRefObject<HTMLInputElement>

    const [films, setFilms] = useState<IFilm[]>([])

    const [focused, setFocused] = useState<boolean>(false)

    const [notFound, setNotFound] = useState<boolean>(false)
    const [_searchQuery, _setSearchQuery] = useState<string>('')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [page, setPage] = useState<number>(0)
	const [limit, setLimit] = useState<number>(8)
	const [loading, setLoading] = useState<boolean>(false)
	const [canLoad, setCanLoad] = useState<boolean>(true)

    function reset() {
        setCanLoad(true)
        setPage(0)
        return 0
    }
    
	const fetchPosts = async (limit: number, page: number, arg: number) => {
        //arg = 1: called from observer hook 
        //arg = 2: called from page

		setLoading(true)
		try {
            let curr_page
            curr_page = page
            
            //Resetting tates
            _setSearchQuery(searchQuery)
            if(arg == 2) curr_page = reset()
            
			const response = await userService.search(searchQuery, limit, curr_page * limit)

			if(!response.data.length) {
                setFilms([])
                setNotFound(true)
				setCanLoad(false)
			} else {
                if(notFound) setNotFound(false)
                //If function called by user search - se
                if(arg == 2 && films.length) return setFilms([...response.data])
				setFilms([...films, ...response.data])
			}
		} catch(e) {
			console.log(e)
		} finally {
			setLoading(false)
		}
	}

    const handleCustomSearchReq = () => {
        if(searchQuery == _searchQuery) return
        fetchPosts(limit, page, 2)
    }

    useObserver(obsElement, canLoad, loading, () => {
		setPage(page + 1)
	})

    useEffect(() => {
		fetchPosts(limit, page, 1)
	}, [page])

    const handleKeyUp = (e: any) => {
        if (e.key === 'Enter') {
            handleCustomSearchReq()
        } else {
            setSearchQuery(e.target.value)
        }
    }
    
    return (
        <section className={cl.Home_section}>
            <div className={cl.Section_starter}>
                <h1>
                    Choose what you will <span className="a_col">watch</span> today
                </h1>
                <p> 
                    And discover out world with satisfaction
                </p>
            </div>
            <div className={cl.Search_section}>
                <div className={cl.Search_field}>
                    <span className={`${focused ? cl.Focused : ""} ${cl.Focus_lines}`}></span>
                    <div className={`${focused ? cl.Focused : ""} ${cl.Search_input}`}>
                        <input 
                            id="search"
                            placeholder="Search films" 
                            onFocus={() => setFocused(focused ? false : true)}
                            onBlur={() => {
                                setFocused(false)
                            }}
                            onKeyUp={handleKeyUp} 
                        />
                        <button className={cl.Search_loop} onClick={() => handleCustomSearchReq()}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.6311" cy="11.5653" r="6.79336" transform="rotate(47 14.6311 11.5653)" stroke="#BAB4C2"></circle><path d="M9.48543 16.3638L4.33989 21.1621" stroke="#BAB4C2"></path></svg>
                        </button>
                    </div>
                    <span className={`${focused ? cl.Focused : ""} ${cl.Focus_lines}`}></span>
                </div>
            </div>
            <div className={cl.Section_content}>
                <div className={`${cl.Content_content} ${canLoad == false ? cl.Not_Found : ""}`}>
                    {
                        films.length ? films.map((film: IFilm) => 
                            <Film key={film.id} {...film}/>
                        )
                        :
                        <>
                            <div className={cl.NotFound}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <linearGradient id="gradient">
                                        <stop className="main-stop" offset="0%" />
                                        <stop className="alt-stop" offset="100%" />
                                    </linearGradient>
                                    <path fill="url(#gradient)" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM5.495 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
                                </svg>
                            </div>
                            <p> Movies with similar title not found </p>
                        </>
                    }
                </div>
                {
                    <div ref={obsElement} className={cl.Loader} style={loading ?  {display: "none"} : canLoad ? {display: "flex"} : {display: "none"}}>
                        <div className={cl.Loader_container}>
                            <div className={cl.line}>
                                <div className={cl.inner}></div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default observer(HomePage)
